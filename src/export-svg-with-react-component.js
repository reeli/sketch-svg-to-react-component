import {
    getExportedSvgPathsByContext,
    getSvgrPathByContext,
    showMessage,
    transformSvgsToReactComponent
} from "./helpers";
import {MESSAGES} from "./messages";
import path from "@skpm/path";

export function onExportSlices(context) {
    const svgPaths = getExportedSvgPathsByContext(context);

    if (svgPaths.length === 0) {
        return showMessage(MESSAGES.NO_SVG_EXPORTED);
    }

    const dirname = path.dirname(svgPaths[0]);
    log(`${getSvgrPathByContext(context)} --ext=tsx --out-dir=${dirname}` + " " + `"${svgPaths.join('" "')}"`);

    showMessage(MESSAGES.COMPRESSING);

    const result = transformSvgsToReactComponent(svgPaths, getSvgrPathByContext(context), dirname);
    result
        ? showMessage(MESSAGES.EXPORT_SUCCESS)
        : showMessage(MESSAGES.EXPORT_FAILED);
}
