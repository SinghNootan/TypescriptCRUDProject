import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { ArticleComponent }  from './article/article.component';
import { ArticleService } from './article/article.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule,
		ReactiveFormsModule
  ],
  declarations: [
        AppComponent,
		ArticleComponent,
		LoginComponent
  ],
  providers: [
        ArticleService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }