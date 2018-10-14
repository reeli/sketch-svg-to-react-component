import sketch from "sketch";
import os from "@skpm/os";
import fs from "@skpm/fs";
import {copyStrToClipboard, createWrapper, getDuplicateSelection, showMessage} from "./helpers";
import {MESSAGES} from "./messages";

const {execSync} = require('@skpm/child_process');

function optimizeFilesWithSVGO(svgPath, svgoPath) {
    return execSync(
        `${svgoPath} --pretty --disable=convertShapeToPath --enable=removeTitle ` +
        '--enable=removeDesc --enable=removeDoctype --enable=removeEmptyAttrs ' +
        '--enable=removeUnknownsAndDefaults --enable=removeUnusedNS --enable=removeEditorsNSData ' +
        `"${svgPath}"`
    )
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
        output: `~/Documents/SketchExports`
    });

    // 4. should remove the group after we exported it to svg, otherwise it still shows in the sketch file
    group.remove();

    // 5. read the file to get svg string
    let svgString;
    try {
        const svgoPath = context.plugin
            .urlForResourceNamed('node_modules/svgo/bin/svgo')
            .path();

        const success = optimizeFilesWithSVGO(targetDesc, svgoPath);
        const resultDesc = success ? 'Compressed' : 'Something went wrong compressing';
        showMessage(`${resultDesc} ${targetDesc}`);
        playSystemSound(success ? 'Glass' : 'Basso')
        svgString = fs.readFileSync(targetDesc);

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
