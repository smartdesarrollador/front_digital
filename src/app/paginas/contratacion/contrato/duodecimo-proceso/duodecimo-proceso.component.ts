import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/interface/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-duodecimo-proceso',
  templateUrl: './duodecimo-proceso.component.html',
  styleUrls: ['./duodecimo-proceso.component.css'],
})
export class DuodecimoProcesoComponent {
  datosLocales: any = {};
  registroTrabajador: any;
  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService
  ) {}
  ngOnInit(): void {
    const contratoLocal = this.cl.getItem('contratoLocal');
    this.datosLocales = contratoLocal;

    this.getTrabajador(this.datosLocales.trabajador);
  }

  getTrabajador(id: any) {
    this.ts.getTrabajadorById(id).subscribe((data) => {
      console.log(data);
      this.registroTrabajador = data;
    });
  }

  generatePDF() {
    var docDefinition = {
      content: [
        {
          text:
            'Esto es la remuneracion: ' +
            this.datosLocales.remuneracion +
            '\n\n',
          style: 'header',
        },
        {
          text: [
            'Este es el nombre del trabajador: ' +
              this.registroTrabajador.segundo_nombre +
              ' ',
            'to the paragraph (instead of a single string) and have ',
            { text: 'a better ', fontSize: 15, bold: true },
            'control over it. \nEach inline can be ',
            { text: 'styled ', fontSize: 20, color: 'white' },
            { text: 'independently ', italics: true, fontSize: 40 },
            'then.\n\n',
          ],
        },
        { text: 'Mixing named styles and style-overrides', style: 'header' },
        {
          style: 'bigger',
          italics: false,
          text: [
            'We can also mix named-styles and style-overrides at both paragraph and inline level. ',
            'For example, this paragraph uses the "bigger" style, which changes fontSize to 15 and sets italics to true. ',
            "Texts are not italics though. It's because we've overriden italics back to false at ",
            'the paragraph level. \n\n',
            "We can also change the style of a single inline. Let's use a named style called header: ",
            { text: 'like here.\n', style: 'header' },
            'It got bigger and bold.\n\n',
            "OK, now we're going to mix named styles and style-overrides at the inline level. ",
            "We'll use header style (it makes texts bigger and bold), but we'll override ",
            'bold back to false: ',
            { text: 'wow! it works!', style: 'header', bold: false },
            "\n\nMake sure to take a look into the sources to understand what's going on here.",
          ],
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          align: 'center',
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
