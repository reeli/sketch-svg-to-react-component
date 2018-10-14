import sketch from "sketch";
import {MESSAGES} from "./messages";
import os from "@skpm/os";

const {execSync} = require('@skpm/child_process');
const toArray = require('sketch-utils/to-array');

export const showMessage = (str) => {
    sketch.UI.message(str);
};

export const getDuplicateSelection = (selection) => {
    const duplicateSelection = [];
    selection.forEach(layer => {
        const duplicatedLayer = layer.duplicate();
        duplicateSelection.push(duplicatedLayer);
    });
    return duplicateSelection;
};

export const copyStrToClipboard = (str) => {
    const pasteboard = NSPasteboard.generalPasteboard();
    pasteboard.clearContents();
    pasteboard.writeObjects([`${str}`]);
    sketch.UI.message([str]);
};

export const createWrapper = (svgString) => {
    return `
    import * as React from "react";
    
    export const IconSvg:React.SFC = (props) => (
        ${svgString}
    )
    `;
};

export function transformSvgToReactComponent(svgPath, svgrPath) {
    return execSync(`${svgrPath} "${svgPath}"`);
}

export function transformSvgToRNComponent(svgPath, svgrPath) {
    return execSync(`${svgrPath} --native "${svgPath}"`);
}

export function transformSvgsToReactComponent(svgPaths, svgrPath, targetDesc) {
    return execSync(`${svgrPath} --ext=tsx --out-dir=${targetDesc}` + " " + `"${svgPaths.join('" "')}"`);
}

export const getSvgrPathByContext = (context) => {
    return context.plugin
        .urlForResourceNamed('node_modules/@svgr/cli/bin/svgr')
        .path();
};

export const exportSelectedLayersAsSvg = () => {
    const name = "sketch-selected-svg";
    const document = sketch.Document.getSelectedDocument();
    const page = document.selectedPage;

    // get selected layers
    const selection = document.selectedLayers;
    if (selection.isEmpty) {
        return showMessage(MESSAGES.NO_LAYER_SELECTED);
    }

    // duplicate selected layers and group them
    const duplicateSelection = getDuplicateSelection(selection);
    const group = new sketch.Group({
        name,
        layers: duplicateSelection,
        parent: page
    });

    group.adjustToFit();

    // export group to svg file
    const homeDir = os.homedir();
    const targetPath = "/Documents/SketchExports";
    const targetDesc = `${homeDir}${targetPath}/${name}.svg`;
    sketch.export(group, {
        formats: "svg",
        output: `~/Documents/SketchExports`,
    });

    // remove the group after we exported it to svg, otherwise it still shows in the sketch file
    group.remove();
    return targetDesc;
};

export const getExportedSvgPathsByContext = (context) => {
    const exportRequests = toArray(context.actionContext.exports);

    return exportRequests
        .filter(currentExport => {
            // can not use "===" here, case the type of "currentExport.request.format()" is object
            return currentExport.request.format() == "svg";
        })
        .map(currentExport => {
            return currentExport.path;
        });
};