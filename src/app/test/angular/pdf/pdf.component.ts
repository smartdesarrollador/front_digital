import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent {
  generatePDF() {
    let docDefinition = {
      content: [
        'Bulleted list example:',
        {
          // to treat a paragraph as a bulleted list, set an array of items under the ul key
          ul: ['Item 1', 'Item 2', 'Item 3', { text: 'Item 4', bold: true }],
        },

        'Numbered list example:',
        {
          // for numbered lists set the ol key
          ol: ['Item 1', 'Item 2', 'Item 3'],
        },
      ],
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
