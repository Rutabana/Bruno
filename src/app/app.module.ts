import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { AlertModule } from "ngx-bootstrap/alert";
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [AppComponent, SidebarComponent, TodoComponent, NavComponent],
    imports: [
        AlertModule.forRoot(), 
        BrowserModule, 
        CardModule, 
        AppRoutingModule,
        FormsModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}