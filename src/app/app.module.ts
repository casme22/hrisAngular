import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostLoginComponent } from './component/post-login/post-login.component';
import { HomeComponent } from './component/post-login/home/home.component';
import { MainNavComponent } from './component/post-login/main-nav/main-nav.component';
import { EmpComponent } from './component/post-login/emp/emp.component';
import { AddComponent } from './component/post-login/emp/add/add.component';
import { EmpTableComponent } from './component/post-login/emp/emp-table/emp-table.component';
import { EmpViewComponent } from './component/post-login/emp/emp-view/emp-view.component';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PostLoginComponent,
    HomeComponent,
    MainNavComponent,
    EmpComponent,
    AddComponent,
    EmpTableComponent,
    EmpViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
