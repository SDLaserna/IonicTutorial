import { HomePageModule } from './../pages/home/home.module';
import { ListaEspecialidadesPageModule } from './../pages/lista-especialidades/lista-especialidades.module';
import { TurnoDatosPacientePageModule } from './../pages/turno-datos-paciente/turno-datos-paciente.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ConsultoriosServiceProvider } from '../providers/consultorios-service/consultorios-service';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HTTP } from "@ionic-native/http"; 
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from "angularfire2/auth";
import { InterceptorModule } from '../interceptors/interceptor.module';
import { ComponentsModule } from '../components/components.module';
import { CalendarioPageModule } from '../pages/calendario/calendario.module';
import { SeleccionDeHorarioPageModule } from '../pages/seleccion-de-horario/seleccion-de-horario.module';
import { ListaDeMedicosPageModule } from '../pages/lista-de-medicos/lista-de-medicos.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { HistoriaClinicaPageModule } from '../pages/historia-clinica/historia-clinica.module';
import { GestionPacientesPageModule } from "../pages/gestion-pacientes/gestion-pacientes.module";

import { ModificarDatosPacientePageModule } from '../pages/modificar-datos-paciente/modificar-datos-paciente.module';
import { PopupDatosDelPacientePageModule } from '../pages/popup-datos-del-paciente/popup-datos-del-paciente.module';
import { OpcBusquedaProfesionalPageModule } from '../pages/opc-busqueda-profesional/opc-busqueda-profesional.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), /*--> Para configurar con nuestro proyecto de firebase */
    AngularFireAuthModule,
    InterceptorModule,
    ComponentsModule,
    CalendarioPageModule,
    SeleccionDeHorarioPageModule,
    ListaDeMedicosPageModule,
    LoginPageModule,
    RegisterPageModule,
    FormsModule,
    HistoriaClinicaPageModule,
    GestionPacientesPageModule,
    ModificarDatosPacientePageModule,
    PopupDatosDelPacientePageModule,
    TurnoDatosPacientePageModule,
    ListaEspecialidadesPageModule,
    OpcBusquedaProfesionalPageModule,
    HomePageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ConsultoriosServiceProvider,
    HTTP
  ]
})
export class AppModule {}