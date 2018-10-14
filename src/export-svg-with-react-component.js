import {
    getExportedSvgPathsByContext,
    getSvgrPathByContext,
    showMessage,
    transformSvgsToReactComponent
} from "./helpers";
import path from "@skpm/path";
import {MESSAGES} from "./messages";

export function onExportSlices(context) {
    const svgPaths = getExportedSvgPathsByContext(context);

    const dirname = path.dirname(svgPaths[0]);
    showMessage(MESSAGES.COMPRESSING);

    const result = transformSvgsToReactComponent(svgPaths, getSvgrPathByContext(context), dirname);
    result
        ? showMessage(MESSAGES.EXPORT_SUCCESS)
        : showMessage(MESSAGES.EXPORT_FAILED);
}
