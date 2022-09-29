import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TreeTableModule} from 'primeng/treetable';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import {FieldsetModule} from 'primeng/fieldset';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PageNotFoundComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TreeTableModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule,
    InputTextModule,
    ToastModule,
    ContextMenuModule,
    TableModule,
    CardModule,
    FieldsetModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
