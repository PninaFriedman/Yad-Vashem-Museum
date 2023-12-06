import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesTableComponent } from './times-table/times-table.component';
import { AppComponent } from './app.component';
export const routes: Routes = [{ path: '', component: AppComponent }]; @NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] }) export class AppRoutingModule { }
