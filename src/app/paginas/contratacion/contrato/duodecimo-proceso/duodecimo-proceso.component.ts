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

    this.getTrabajador(this.datosLocales.trabajador).subscribe((data) => {
      this.registroTrabajador = data;
      console.log(this.registroTrabajador.trabajador);
      switch (this.datosLocales.modelo_contrato) {
        case 'Contrato por inicio de actividad':
          const modeloContrato1 = this.contratoInicioActividad(
            this.registroTrabajador
          );
          this.generarPdfMake(modeloContrato1);
          break;
        case 'Contrato por incremento de actividad':
          const modeloContrato2 = this.contratoIncrementoActividad(
            this.registroTrabajador
          );
          this.generarPdfMake(modeloContrato2);
          break;
        case 'Contrato por necesidad de mercado':
          const modeloContrato3 = this.contratoNecesidadMercado(
            this.registroTrabajador
          );
          this.generarPdfMake(modeloContrato3);
          break;
        case 'Contrato por reconversión empresarial':
          const modeloContrato4 = this.contratoReconversionEmpresarial(
            this.registroTrabajador
          );
          this.generarPdfMake(modeloContrato4);
          break;
        case 'Contrato ocasional':
          const modeloContrato5 = this.contratoOcacional(
            this.registroTrabajador
          );
          this.generarPdfMake(modeloContrato5);
          break;
        default:
          console.log('No se reconoce el día de la semana.');
      }
    });
  }

  generarPdfMake(docDefinition: any) {
    const pdfGenerado = pdfMake.createPdf(docDefinition);
    pdfGenerado.getDataUrl((dataUrl) => {
      this.urlpdf = dataUrl;
      console.log(this.urlpdf);
      // Aquí obtienes la URL del PDF
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.urlpdf
      );
    });
  }

  contratoInicioActividad(datosTrabajador: any) {
    var docDefinition = {
      content: [
        {
          text: [
            'CONTRATO DE TRABAJO SUJETO A MODALIDAD POR INICIO DE ACTIVIDAD\n\n',
          ],
          style: 'header',
        },
        {
          text: [
            'Conste mediante el presente documento, suscrito por duplicado con igual valor y tenor, el Contrato Individual de Trabajo por inicio de actividad que celebran, de conformidad con lo establecido por el Texto Único Ordenado del Decreto Legislativo N° 728 – Ley de Productividad y Competitividad Laboral aprobado por el Decreto Supremo N° 003-97-TR, de una parte,\n\n',
          ],
          style: 'parrafo',
        },
        {
          text: [
            'Pedro Sanchez Mendoza, identificado con RUC Nº 123456789, con domicilio en Av. Benavides - Miraflores 123, Lima, debidamente representada por Juan Pérez identificado con DNI Nº 12345678 en calidad de Representante Legal, según poder inscrito en la Partida Electrónica Nº 456 Asiento 7890 del Registro de Personas Jurídicas de la Oficina Registral de Lima, a quien en adelante se le denominará EL EMPLEADOR y de la otra parte, \n\n',
          ],
          style: 'alinear',
        },
        {
          text: [
            {
              text:
                datosTrabajador.primer_nombre +
                ' ' +
                datosTrabajador.segundo_nombre +
                ' ' +
                datosTrabajador.apellido_paterno +
                ' ' +
                datosTrabajador.apellido_materno,
              bold: true,
            },
            ' identificada con DNI Nº',
            {
              text: datosTrabajador.numero_documento,
              bold: true,
            },
            ', con domicilio en ',
            { text: datosTrabajador.direccion, bold: true },
            ', debidamente representada por ',
          ],
          style: 'alinear',
        },
      ],
      styles: {
        header: {
          fontSize: 11,
          bold: true,
          decoration: 'underline',
          alignment: 'center',
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
        parrafo: {
          fontSize: 11,
          bold: false,
          alignment: 'justify',
        },
        alinear: {
          /* alignment: 'right', */
          margin: [50, 0, -15, 0],
        },
      },
    };

    return docDefinition;
  }

  contratoIncrementoActividad(datosTrabajador: any) {
    var docDefinition = {
      content: [
        {
          text: [
            'CONTRATO DE TRABAJO SUJETO A MODALIDAD POR INCREMENTO DE ACTIVIDAD\n\n',
          ],
          style: 'header',
        },
        {
          text: [
            'Conste mediante el presente documento, suscrito por duplicado con igual valor y tenor, el Contrato Individual de Trabajo por inicio de actividad que celebran, de conformidad con lo establecido por el Texto Único Ordenado del Decreto Legislativo N° 728 – Ley de Productividad y Competitividad Laboral aprobado por el Decreto Supremo N° 003-97-TR, de una parte,\n\n',
          ],
          style: 'parrafo',
        },
        {
          text: [
            'Pedro Sanchez Mendoza, identificado con RUC Nº 123456789, con domicilio en Av. Benavides - Miraflores 123, Lima, debidamente representada por Juan Pérez identificado con DNI Nº 12345678 en calidad de Representante Legal, según poder inscrito en la Partida Electrónica Nº 456 Asiento 7890 del Registro de Personas Jurídicas de la Oficina Registral de Lima, a quien en adelante se le denominará EL EMPLEADOR y de la otra parte, \n\n',
          ],
          style: 'alinear',
        },
        {
          text: [
            {
              text:
                datosTrabajador.primer_nombre +
                ' ' +
                datosTrabajador.segundo_nombre +
                ' ' +
                datosTrabajador.apellido_paterno +
                ' ' +
                datosTrabajador.apellido_materno,
              bold: true,
            },
            ' identificada con DNI Nº',
            {
              text: datosTrabajador.numero_documento,
              bold: true,
            },
            ', con domicilio en ',
            { text: datosTrabajador.direccion, bold: true },
            ', debidamente representada por ',
          ],
          style: 'alinear',
        },
      ],
      styles: {
        header: {
          fontSize: 11,
          bold: true,
          decoration: 'underline',
          alignment: 'center',
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
        parrafo: {
          fontSize: 11,
          bold: false,
          alignment: 'justify',
        },
        alinear: {
          /* alignment: 'right', */
          margin: [50, 0, -15, 0],
        },
      },
    };

    return docDefinition;
  }

  contratoNecesidadMercado(datosTrabajador: any) {
    var docDefinition = {
      content: [
        {
          text: [
            'CONTRATO DE TRABAJO SUJETO A MODALIDAD POR NECESIDAD DE MERCADO\n\n',
          ],
          style: 'header',
        },
        {
          text: [
            'Conste mediante el presente documento, suscrito por duplicado con igual valor y tenor, el Contrato Individual de Trabajo por inicio de actividad que celebran, de conformidad con lo establecido por el Texto Único Ordenado del Decreto Legislativo N° 728 – Ley de Productividad y Competitividad Laboral aprobado por el Decreto Supremo N° 003-97-TR, de una parte,\n\n',
          ],
          style: 'parrafo',
        },
        {
          text: [
            'Pedro Sanchez Mendoza, identificado con RUC Nº 123456789, con domicilio en Av. Benavides - Miraflores 123, Lima, debidamente representada por Juan Pérez identificado con DNI Nº 12345678 en calidad de Representante Legal, según poder inscrito en la Partida Electrónica Nº 456 Asiento 7890 del Registro de Personas Jurídicas de la Oficina Registral de Lima, a quien en adelante se le denominará EL EMPLEADOR y de la otra parte, \n\n',
          ],
          style: 'alinear',
        },
        {
          text: [
            {
              text:
                datosTrabajador.primer_nombre +
                ' ' +
                datosTrabajador.segundo_nombre +
                ' ' +
                datosTrabajador.apellido_paterno +
                ' ' +
                datosTrabajador.apellido_materno,
              bold: true,
            },
            ' identificada con DNI Nº',
            {
              text: datosTrabajador.numero_documento,
              bold: true,
            },
            ', con domicilio en ',
            { text: datosTrabajador.direccion, bold: true },
            ', debidamente representada por ',
          ],
          style: 'alinear',
        },
      ],
      styles: {
        header: {
          fontSize: 11,
          bold: true,
          decoration: 'underline',
          alignment: 'center',
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
        parrafo: {
          fontSize: 11,
          bold: false,
          alignment: 'justify',
        },
        alinear: {
          /* alignment: 'right', */
          margin: [50, 0, -15, 0],
        },
      },
    };

    return docDefinition;
  }

  contratoReconversionEmpresarial(datosTrabajador: any) {
    var docDefinition = {
      content: [
        {
          text: [
            'CONTRATO DE TRABAJO SUJETO A MODALIDAD POR RECONVERSION EMPRESARIAL\n\n',
          ],
          style: 'header',
        },
        {
          text: [
            'Conste mediante el presente documento, suscrito por duplicado con igual valor y tenor, el Contrato Individual de Trabajo por inicio de actividad que celebran, de conformidad con lo establecido por el Texto Único Ordenado del Decreto Legislativo N° 728 – Ley de Productividad y Competitividad Laboral aprobado por el Decreto Supremo N° 003-97-TR, de una parte,\n\n',
          ],
          style: 'parrafo',
        },
        {
          text: [
            'Pedro Sanchez Mendoza, identificado con RUC Nº 123456789, con domicilio en Av. Benavides - Miraflores 123, Lima, debidamente representada por Juan Pérez identificado con DNI Nº 12345678 en calidad de Representante Legal, según poder inscrito en la Partida Electrónica Nº 456 Asiento 7890 del Registro de Personas Jurídicas de la Oficina Registral de Lima, a quien en adelante se le denominará EL EMPLEADOR y de la otra parte, \n\n',
          ],
          style: 'alinear',
        },
        {
          text: [
            {
              text:
                datosTrabajador.primer_nombre +
                ' ' +
                datosTrabajador.segundo_nombre +
                ' ' +
                datosTrabajador.apellido_paterno +
                ' ' +
                datosTrabajador.apellido_materno,
              bold: true,
            },
            ' identificada con DNI Nº',
            {
              text: datosTrabajador.numero_documento,
              bold: true,
            },
            ', con domicilio en ',
            { text: datosTrabajador.direccion, bold: true },
            ', debidamente representada por ',
          ],
          style: 'alinear',
        },
      ],
      styles: {
        header: {
          fontSize: 11,
          bold: true,
          decoration: 'underline',
          alignment: 'center',
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
        parrafo: {
          fontSize: 11,
          bold: false,
          alignment: 'justify',
        },
        alinear: {
          /* alignment: 'right', */
          margin: [50, 0, -15, 0],
        },
      },
    };

    return docDefinition;
  }

  contratoOcacional(datosTrabajador: any) {
    var docDefinition = {
      content: [
        {
          text: [
            'CONTRATO DE TRABAJO DE NATURALEZA ACCIDENTAL BAJO LA MODALIDAD DE OCASIONAL\n\n',
          ],
          style: 'header',
        },
        {
          text: [
            'Conste mediante el presente documento, suscrito por duplicado con igual valor y tenor, el Contrato Individual de Trabajo por inicio de actividad que celebran, de conformidad con lo establecido por el Texto Único Ordenado del Decreto Legislativo N° 728 – Ley de Productividad y Competitividad Laboral aprobado por el Decreto Supremo N° 003-97-TR, de una parte,\n\n',
          ],
          style: 'parrafo',
        },
        {
          text: [
            'Pedro Sanchez Mendoza, identificado con RUC Nº 123456789, con domicilio en Av. Benavides - Miraflores 123, Lima, debidamente representada por Juan Pérez identificado con DNI Nº 12345678 en calidad de Representante Legal, según poder inscrito en la Partida Electrónica Nº 456 Asiento 7890 del Registro de Personas Jurídicas de la Oficina Registral de Lima, a quien en adelante se le denominará EL EMPLEADOR y de la otra parte, \n\n',
          ],
          style: 'alinear',
        },
        {
          text: [
            {
              text:
                datosTrabajador.primer_nombre +
                ' ' +
                datosTrabajador.segundo_nombre +
                ' ' +
                datosTrabajador.apellido_paterno +
                ' ' +
                datosTrabajador.apellido_materno,
              bold: true,
            },
            ' identificada con DNI Nº',
            {
              text: datosTrabajador.numero_documento,
              bold: true,
            },
            ', con domicilio en ',
            { text: datosTrabajador.direccion, bold: true },
            ', debidamente representada por ',
          ],
          style: 'alinear',
        },
      ],
      styles: {
        header: {
          fontSize: 11,
          bold: true,
          decoration: 'underline',
          alignment: 'center',
        },
        bigger: {
          fontSize: 15,
          italics: true,
        },
        parrafo: {
          fontSize: 11,
          bold: false,
          alignment: 'justify',
        },
        alinear: {
          /* alignment: 'right', */
          margin: [50, 0, -15, 0],
        },
      },
    };

    return docDefinition;
  }

  getTrabajador(id: any) {
    return this.ts.getTrabajadorById(id); // Devuelve el observable para su suscripción
  }
}
