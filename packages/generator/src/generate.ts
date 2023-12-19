import * as pdfLib from '@pdfme/pdf-lib';
import type { GenerateProps } from '@pdfme/common';
import { checkGenerateProps } from '@pdfme/common';
import { drawEmbeddedPage, preprocessing, postProcessing } from './helper.js';

const generate = async (props: GenerateProps) => {
  checkGenerateProps(props);
  const { inputs, template, options = {}, plugins: userPlugins = {} } = props;

  const { pdfDoc, embeddedPages, embedPdfBoxes, renderObj, readOnlySchemaKeys } =
    await preprocessing({ template, userPlugins });

  const _cache = new Map();

  for (let i = 0; i < inputs.length; i += 1) {
    const inputObj = inputs[i];
    const keys = readOnlySchemaKeys.concat(Object.keys(inputObj));
    if (template.columns) {
      keys.sort(
        (a, b) => (template.columns ?? []).indexOf(a) - (template.columns ?? []).indexOf(b)
      );
    }

    for (let j = 0; j < embeddedPages.length; j += 1) {
      const embeddedPage = embeddedPages[j];
      const { width: pageWidth, height: pageHeight } = embeddedPage;
      const embedPdfBox = embedPdfBoxes[j];

      const page = pdfDoc.addPage([pageWidth, pageHeight]);

      drawEmbeddedPage({ page, embeddedPage, embedPdfBox });
      for (let l = 0; l < keys.length; l += 1) {
        const key = keys[l];
        const schemaObj = template.schemas[j];
        const schema = schemaObj[key];
        if (!schema) {
          continue;
        }

        const render = renderObj[schema.type];
        if (!render) {
          continue;
        }

        await render({ key, value: inputObj[key], schema, pdfLib, pdfDoc, page, options, _cache });
      }
    }
  }

  postProcessing({ pdfDoc, options });

  return pdfDoc.save();
};

export default generate;
