import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/interface/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-duodecimo-proceso',
  templateUrl: './duodecimo-proceso.component.html',
  styleUrls: ['./duodecimo-proceso.component.css'],
})
export class DuodecimoProcesoComponent {
  datosLocales: any = {};
  registroTrabajador: any;
  urlpdf: any;
  safePdfUrl: SafeResourceUrl;

  constructor(
    public ts: TrabajadorService,
    private router: Router,
    private cl: ContratoLocalStorageService,
    private sanitizer: DomSanitizer
  ) {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
  ngOnInit(): void {
    const contratoLocal = this.cl.getItem('contratoLocal');
    this.datosLocales = contratoLocal;

    this.getTrabajador(this.datosLocales.trabajador);

    var docDefinition = {
      content: [
        {
          text:
            'Esto es la remuneracion: ' +
            this.datosLocales.remuneracion +
            '\n\n',
          style: 'header',
        },
      ],
    };

    const pdfGenerado = pdfMake.createPdf(docDefinition);
    pdfGenerado.getDataUrl((dataUrl) => {
      this.urlpdf = dataUrl;
      console.log(this.urlpdf);
      // Aquí obtienes la URL del PDF
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.urlpdf
      );
    });

    /* const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getDataUrl((dataUrl) => {
      this.urlpdf = dataUrl;
    });

    console.log(this.urlpdf); */
  }

  getTrabajador(id: any) {
    this.ts.getTrabajadorById(id).subscribe((data) => {
      console.log(data);
      this.registroTrabajador = data;
    });
  }
}
