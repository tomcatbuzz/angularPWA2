import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SeoService } from './seo.service';
import { AuthService } from './auth/auth.service';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from './auth/auth.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UIService } from './shared/ui.service';
import { reducers } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PhotoUploadComponent,
    SpinnerComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    StoreModule.forRoot(reducers),
    MaterialModule,
    FlexLayoutModule,
    AuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFirestoreModule.initializeApp(environment.firebase),
    DragDropModule
  ],
  providers: [AuthService, SeoService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
