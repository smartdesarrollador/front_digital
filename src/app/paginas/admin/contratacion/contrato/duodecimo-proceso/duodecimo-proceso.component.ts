import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/interface/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { ContratoLocalStorageService } from 'src/app/services/localstorage/contrato-local-storage.service';
import { DatePipe } from '@angular/common';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { contratoInicioActividad } from './funciones-contratos/contrato-inicio-actividad';
import { contratoIncrementoActividad } from './funciones-contratos/contrato-incremento-actividad';

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
  mostrarParrafo: boolean = false;
  prueba_meses: string = '';
  prueba_inicio: string = '';
  prueba_termino: string = '';
  fechaFormateada: string = '';
  num_valores: Array<string> = [];
  fechaActual = new Date();
  fechaActualValor: string = '';

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

    this.num_valores = this.numeracion_valores();

    if (this.datosLocales.trabajador_confianza == true) {
      this.prueba_meses = '6 Meses';
      this.prueba_inicio = this.datosLocales.fecha_inicio;
      this.fechaFormateada = this.formatearFecha(this.sumarMeses(6));
      this.prueba_termino = this.fechaFormateada;
    } else if (this.datosLocales.trabajador_direccion == true) {
      this.prueba_meses = '12 Meses';
      this.prueba_inicio = this.datosLocales.fecha_inicio;
      this.fechaFormateada = this.formatearFecha(this.sumarMeses(12));
      this.prueba_termino = this.fechaFormateada;
    } else {
      this.prueba_meses = '3 Meses';
      this.prueba_inicio = this.datosLocales.fecha_inicio;
      this.fechaFormateada = this.formatearFecha(this.sumarMeses(3));
      this.prueba_termino = this.fechaFormateada;
    }

    this.getTrabajador(this.datosLocales.trabajador).subscribe((data) => {
      this.registroTrabajador = data;
      console.log(this.registroTrabajador.trabajador);

      if(this.datosLocales.modelo_contrato == "CONTRATO DE TRABAJO SUJETO A MODALIDAD POR INICIO DE ACTIVIDAD"){
        const modeloContrato1 = contratoInicioActividad(this.registroTrabajador,this.datosLocales,this.prueba_meses,this.prueba_inicio,this.prueba_termino,this.fechaFormateada,this.num_valores,this.fechaActualValor);
        this.generarPdfMake(modeloContrato1);
      }else if(this.datosLocales.modelo_contrato == "CONTRATO DE TRABAJO SUJETO A MODALIDAD POR INCREMENTO DE ACTIVIDAD"){
        const modeloContrato1 = contratoIncrementoActividad(this.registroTrabajador,this.datosLocales,this.prueba_meses,this.prueba_inicio,this.prueba_termino,this.fechaFormateada,this.num_valores,this.fechaActualValor);
        this.generarPdfMake(modeloContrato1);
      }

      
    });

    this.fecha_actual_formateada();

    
  }

  fecha_actual_formateada(): void {
    const fechaActualFormateada = new Intl.DateTimeFormat(
      'es-ES',
      this.opcionesDeFormato
    ).format(this.fechaActual);

    this.fechaActualValor = fechaActualFormateada;
  }

  // Formatear la fecha
  opcionesDeFormato: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  numeracion_valores(): Array<string> {
    // Tus arrays y variables originales

    const clausulasVisibles: boolean[] = [
      true, //1
      true, //2
      true, //3
      true, //4
      true, //5
      this.datosLocales.trabajador_confianza, //6
      this.datosLocales.trabajador_direccion, //7
      this.datosLocales.fiscalizacion_inmediata, //8
      this.datosLocales.jornada_maxima, //9
      true, // 10
      true, // 11
      true, // 12
      this.datosLocales.obligaciones_compromisos, // 13
      true, // 14
      this.datosLocales.exclusividad, // 15
      true, // 16
      true, // 17
      true, // 18
      true, // 19
      this.datosLocales.propiedad_intelectual, // 20
      this.datosLocales.confidencialidad, // 21
      true, // 22
      this.datosLocales.tecnologia_informacion, // 23
      this.datosLocales.proteccion_datos, // 24
      true, // 25
      true, // 26
      true, // 27
      true, // 28
      true, // 29
      true, // 30
      true, // 31
      true, // 32
    ];

    const ordinales: string[] = [
      'PRIMERA',
      'SEGUNDA',
      'TERCERA',
      'CUARTA',
      'QUINTA',
      'SEXTA',
      'SEPTIMA',
      'OCTAVA',
      'NOVENA',
      'DECIMA',
      'DECIMOPRIMERA',
      'DECIMOSEGUNDA',
      'DECIMOTERCERA',
      'DECIMOCUARTA',
      'DECIMOQUINTA',
      'DECIMOSEXTA',
      'DECIMOSEPTIMA',
      'DECIMOOCTAVA',
      'DECIMONOVENA',
      'VIGESIMO',
      'VIGESIMOPRIMERA',
      'VIGESIMOSEGUNDA',
      'VIGESIMOTERCERA',
      'VIGESIMOCUARTA',
      'VIGESIMOQUINTA',
      'VIGESIMOSEXTA',
      'VIGESIMOSEPTIMA',
      'VIGESIMOOCTAVA',
      'VIGESIMONOVENA',
      'TRIGESIMO',
      'TRIGESIMOPRIMERA',
      'TRIGESIMOSEGUNDA',
    ];

    const ValorNoVisible: string = 'Sin_valor';

    // El array que llenarás con los ordinales correctos o "Sin_valor"
    let reubicar_ordinales_aqui: string[] = [];

    // Contador para los ordinales visibles
    let contadorVisible = 0;

    // Iterar sobre los arrays
    for (let i = 0; i < clausulasVisibles.length; i++) {
      if (clausulasVisibles[i]) {
        // Añadir el ordinal correspondiente al contador de visibles
        reubicar_ordinales_aqui.push(ordinales[contadorVisible]);
        contadorVisible++;
      } else {
        // Añadir "Sin_valor" si la cláusula no es visible
        reubicar_ordinales_aqui.push(ValorNoVisible);
      }
    }

    return reubicar_ordinales_aqui;

    // Ahora reubicar_ordinales_aqui contiene los ordinales de las cláusulas visibles y "Sin_valor" para las no visibles
    console.log(reubicar_ordinales_aqui);
  }

  sumarMeses(meses: number) {
    const fecha = new Date();
    fecha.setMonth(fecha.getMonth() + meses);
    return fecha;
  }

  formatearFecha(fecha: Date): string {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan en 0
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
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

  /* modeloContrato(datosTrabajador: any) {
   
  } */

  getTrabajador(id: any) {
    return this.ts.getTrabajadorById(id); // Devuelve el observable para su suscripción
  }
}
