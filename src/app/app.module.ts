import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule } from '@angular/forms';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { DateAsAgoPipe } from './pipes/pipes.pipe';


@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        DashboardComponent,
        DetailPostComponent,
        DateAsAgoPipe,

    ],
    imports: [
        MatGridListModule,
        MatSelectModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),



    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
