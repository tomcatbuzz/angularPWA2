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
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { SpinnerComponent } from './spinner/spinner.component';
import { SeoService } from './seo.service';
import { AuthService } from './auth/auth.service';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UIService } from './shared/ui.service';
import { reducers } from './app.reducer';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { SeedComponent } from './seed/seed.component';
// import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
// import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    SeedComponent,
    // BasicScrollComponent,
    // InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/combined-sw.js', { enabled: environment.production }),
    LayoutModule,
    StoreModule.forRoot(reducers),
    MaterialModule,
    FlexLayoutModule,
    AuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DragDropModule
  ],
  providers: [AuthService, SeoService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
