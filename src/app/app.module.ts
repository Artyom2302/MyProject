import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { IonicModule } from '@ionic/angular';
import {A11yModule} from '@angular/cdk/a11y';
import { AuthoriseComponent } from './Components/authorise/authorise.component';
import { AboutComponent } from './Components/about/about.component';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { LabsComponent } from './Components/labs/labs.component';
import { LabComponent } from './Components/labs/lab/lab.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AddLabComponent } from './Components/labs/add-lab/add-lab.component';
import { AddLabFormComponent } from './Components/Forms/add-lab-form/add-lab-form.component';
import { AddReviewFormComponent } from './Components/Forms/add-review-form/add-review-form.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatRippleModule} from "@angular/material/core";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";

const appRoutes: Routes =[
  { path: 'login', component: AuthoriseComponent},
  { path: 'about', component: AboutComponent},
  {path: 'labs',component:LabsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthoriseComponent,
    AboutComponent,
    LabsComponent,
    LabComponent,
    MainpageComponent,
    AddLabComponent,
    AddLabFormComponent,
    AddReviewFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    IonicModule.forRoot(),
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatRippleModule, MatSlideToggleModule, MatTableModule, MatSelectModule, MatListModule]
  ,
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
