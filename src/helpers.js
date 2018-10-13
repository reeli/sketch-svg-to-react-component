import sketch from "sketch";

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

export const copyStrToClipboard = (str)=>{
    const pasteboard = NSPasteboard.generalPasteboard();
    pasteboard.clearContents();
    pasteboard.writeObjects([`${str}`]);
    sketch.UI.message([str]);
};