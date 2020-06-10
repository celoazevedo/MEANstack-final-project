import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { UserService } from './user.service';
import { MovieService } from './movie.service';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FavoriteComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    MovieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
