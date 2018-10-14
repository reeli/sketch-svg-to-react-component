import sketch from "sketch";
import os from "@skpm/os";
import {copyStrToClipboard, getDuplicateSelection, showMessage} from "./helpers";
import {MESSAGES} from "./messages";

const {execSync} = require('@skpm/child_process');

function optimizeFilesWithSVGO(svgPath, svgrPath) {
    return execSync(`${svgrPath} "${svgPath}"`);
}

function playSystemSound(sound) {
    // The command line tool `afplay` does what we need - we just have to call it with the full path
    // of a system sound.
    return execSync(`/usr/bin/afplay /System/Library/Sounds/${sound}.aiff`)
}

export default function (context) {
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
    const targetPath = "/Documents/SketchExports";
    const targetDesc = `${homeDir}${targetPath}/${name}.svg`;
    sketch.export(group, {
        formats: "svg",
        output: `~/Documents/SketchExports`,
    });

    // 4. should remove the group after we exported it to svg, otherwise it still shows in the sketch file
    group.remove();

    // 5. read the file to get svg string
    // let svgString;
    try {
        const svgrPath = context.plugin
            .urlForResourceNamed('node_modules/@svgr/cli/bin/svgr')
            .path();

        const success = optimizeFilesWithSVGO(targetDesc, svgrPath);
        // playSystemSound(success ? 'Glass' : 'Basso');
        // svgString = fs.readFileSync(targetDesc);


        // 6. simplify svg string

        // 7. create react component
        // const result = createWrapper(svgString);

        // 8. copy result to clipboard
        copyStrToClipboard(success);
        showMessage(MESSAGES.COPY_TO_CLIPBOARD_SUCCESS);
    } catch (e) {
        showMessage(MESSAGES.READ_FILE_ERROR);
    }
}
