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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        TodoComponent,
        NavComponent,
        QuotesComponent,
        ZoomComponent,
        HomeComponent],
    imports: [
        AlertModule.forRoot(), 
        BrowserModule, 
        CardModule, 
        AppRoutingModule,
        AuthModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        providePerformance(() => getPerformance()),
        provideRemoteConfig(() => getRemoteConfig()),
        provideStorage(() => getStorage()),
    ],
    bootstrap: [AppComponent],
    providers: [
        Quotes,
        QuotesComponent,
        ScreenTrackingService,UserTrackingService,
    ]
})
export class AppModule {}