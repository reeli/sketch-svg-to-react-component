import sketch from 'sketch';
import fs from '@skpm/fs';
import os from '@skpm/os';

const MESSAGES = {
    NO_LAYER_SELECTED: "Please select a layer!"
};

export default function () {
    const document = sketch.Document.getSelectedDocument();
    const selection = document.selectedLayers;
    const page = document.selectedPage;
    const {isEmpty} = selection;

    if (isEmpty) {
        sketch.UI.message(MESSAGES.NO_LAYER_SELECTED);
        return;
    }

    const newLayers = [];
    selection.forEach(layer => {
        const duplicatedLayer = layer.duplicate();
        newLayers.push(duplicatedLayer);
    });

    const name = 'react-copy-component';

    const group = new sketch.Group({
        name,
        layers: newLayers,
        parent: page,
    });

    group.adjustToFit();

    const userHome = os.homedir();
    const targetFolder = `${userHome}/Documents/Sketch Exports`;

    sketch.export(group, {
        formats: 'svg',
        compact: true,
    });

    group.remove();

    const fileName = `${targetFolder}/${name}.svg`;

    try {
        const svgString = fs.readFileSync(fileName, {encoding: "utf-8"});
        const pasteboard = NSPasteboard.generalPasteboard();
        pasteboard.clearContents();
        pasteboard.writeObjects([`${svgString}`]);
        sketch.UI.message(`${svgString}`);
    } catch (e) {
        sketch.UI.message("copy failed!");
    }
}

