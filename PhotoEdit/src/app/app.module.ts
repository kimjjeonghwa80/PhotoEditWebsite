import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PoolComponent } from './pool/pool.component';
import { Routes, RouterModule} from "@angular/router"
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {PreviewService} from './preview.service';
import {ImageEditingDirective} from './image-editing.directive';
import {WelcomeComponent} from './welcome/welcome.component';
import { ReEditComponent } from './re-edit/re-edit.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pool', component: PoolComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'edit', component: EditComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: '', component: WelcomeComponent},
  { path: 'reEdit', component: ReEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PreviewComponent,
    EditComponent,
    ConfirmComponent,
    LoginComponent,
    RegisterComponent,
    PoolComponent,
    WelcomeComponent,
    ImageEditingDirective,
    ReEditComponent,
  ],
  imports: [
    BrowserModule,
    AngularCropperjsModule,
    MatSliderModule,
    MatDialogModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [PreviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
