import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule} from '@angular/material/button'
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { NotificationModule } from './services'
import { reducers, effects } from './store'

const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];
  
const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {day: 'numeric',month: 'numeric',year: 'numeric'}
  },
    display: {
      dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
    }  
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    StoreModule.forRoot(reducers , {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreDevtools,
  


    NotificationModule.forRoot(),
  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}],
  bootstrap: [AppComponent],
})
export class AppModule {}
