import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user-service/user.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoComponent,
    SearchComponent,
    UserComponent,
    DateCountPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
