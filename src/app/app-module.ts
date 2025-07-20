import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Login } from './login/login';
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { AlternatePipe } from './pipes/alternate-pipe';
import { TasksModule } from './tasks/tasks-module';

@NgModule({
  declarations: [
    App,
    Header,
    Login,
    CapitalizePipe,
    AlternatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
