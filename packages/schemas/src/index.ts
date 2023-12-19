import text from './text/index.js';
import image from './graphics/image.js';
import barcodes from './barcodes/index.js';
import line from './shapes/line.js';
import { rectangle, ellipse } from './shapes/rectAndEllipse.js';
import { convertForPdfLayoutProps, rotatePoint } from './pdfRenderUtils.js';

const builtInPlugins = { Text: text };

export {
  text,
  image,
  barcodes,
  line,
  rectangle,
  ellipse,
  builtInPlugins,
  convertForPdfLayoutProps,
  rotatePoint,
};
