import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { AlertModule } from "ngx-bootstrap/alert";
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './nav/nav.component';
import { QuotesComponent } from './quotes/quotes.component';
import { Quotes } from './quotes/quotes';
import { ZoomComponent } from './zoom/zoom.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [AppComponent, SidebarComponent, TodoComponent, NavComponent, QuotesComponent, ZoomComponent, HomeComponent],
    imports: [
        AlertModule.forRoot(), 
        BrowserModule, 
        CardModule, 
        AppRoutingModule,
        AuthModule
    ],
    bootstrap: [AppComponent],
    providers: [
        Quotes,
        QuotesComponent,
    ]
})
export class AppModule {}