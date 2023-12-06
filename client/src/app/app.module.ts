import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule , HttpClient} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        AppRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
     ]
})

export class AppModule {
}