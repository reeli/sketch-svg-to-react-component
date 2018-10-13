import sketch from "sketch";
import os from "@skpm/os";
import fs from "@skpm/fs";
import {copyStrToClipboard, createWrapper, getDuplicateSelection, showMessage} from "./helpers";
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

    // 5. read the file to get svg string
    let svgString;
    try {
        svgString = fs.readFileSync(targetPath);
    } catch (e) {
        showMessage(MESSAGES.READ_FILE_ERROR);
    }

    // 6. simplify svg string

    // 7. create react component
    const result = createWrapper(svgString);

    // 8. copy result to clipboard
    copyStrToClipboard(result);
    showMessage(MESSAGES.COPY_TO_CLIPBOARD_SUCCESS);
}
