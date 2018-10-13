import sketch from "sketch";
import os from "@skpm/os";
import fs from "@skpm/fs";
import {copyStrToClipboard, getDuplicateSelection, showMessage} from "./helpers";
import {MESSAGES} from "./messages";

export default function () {
    const name = "sketch-selected-svg";
    const document = sketch.Document.getSelectedDocument();
    const page = document.selectedPage;

    // 1. get selected layers
    const selection = document.selectedLayers;
    if (selection.isEmpty) {
        return showMessage(MESSAGES.NO_LAYER_SELECTED);
    }

    // 2. duplicate selected layers and group them
    const duplicateSelection = getDuplicateSelection(selection);
    const group = new sketch.Group({
        name,
        layers: duplicateSelection,
        parent: page
    });

    group.adjustToFit();

    // 3. export group to svg file
    const homeDir = os.homedir();
    const defaultFolder = "/Documents/Sketch Exports";
    const targetPath = `${homeDir}${defaultFolder}/${name}.svg`;
    sketch.export(group, {
        formats: "svg",
    });

    // 4. should remove the group after we exported it to svg, otherwise it still shows in the sketch file
    group.remove();

    // 5. read the file
    try {
        const svgString = fs.readFileSync(targetPath);
        copyStrToClipboard(svgString);
        showMessage(MESSAGES.COPY_TO_CLIPBOARD_SUCCESS);
    } catch (e) {
        showMessage(MESSAGES.READ_FILE_ERROR);
    }

}
