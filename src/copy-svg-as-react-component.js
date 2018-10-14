import {
    copyStrToClipboard,
    exportSelectedLayersAsSvg,
    getSvgrPathByContext,
    transformSvgToReactComponent,
    showMessage
} from "./helpers";
import {MESSAGES} from "./messages";

export default function (context) {
    try {
        // export selected layers as svg
        const targetDesc = exportSelectedLayersAsSvg();
        showMessage(MESSAGES.COMPRESSING);
        const result = transformSvgToReactComponent(targetDesc, getSvgrPathByContext(context));

        // copy result to clipboard
        copyStrToClipboard(result);
        result
            ? showMessage(MESSAGES.COPY_TO_CLIPBOARD_SUCCESS)
            : showMessage(MESSAGES.COPY_TO_CLIPBOARD_FAILED);
    } catch (e) {
        showMessage(MESSAGES.GENERAL_ERROR);
    }
}
