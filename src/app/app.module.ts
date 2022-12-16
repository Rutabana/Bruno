import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { AlertModule } from "ngx-bootstrap/alert";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AlertModule.forRoot(), 
        BrowserModule, 
        CardModule, 
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}