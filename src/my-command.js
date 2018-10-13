import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function () {
    // sketch.UI.message("It's alive 🙌")
    const layer = context.selection.firstObject();
    const ancestry = MSImmutableLayerAncestry.ancestryWithMSLayer_(layer);
    const exportRequest = MSExportRequest.exportRequestsFromLayerAncestry_(ancestry).firstObject();
    exportRequest.format = 'svg';
    const exporter = MSExporter.exporterForRequest_colorSpace_(exportRequest, NSColorSpace.sRGBColorSpace());
    const svgData = exporter.data();
    const svgString = NSString.alloc().initWithData_encoding(svgData, NSUTF8StringEncoding);
    const pasteboard = NSPasteboard.generalPasteboard();
    pasteboard.clearContents();
    pasteboard.writeObjects([svgString]);

    sketch.UI.message(`${svgString}===========`)
}

