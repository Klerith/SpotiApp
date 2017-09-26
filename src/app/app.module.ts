import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NgModule
import { FormsModule } from '@angular/forms';

//HTTP
import { HttpModule } from '@angular/http';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { SpotifyService } from './services/spotify.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

//pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DonseguroPipe } from './pipes/donseguro.pipe';

@NgModule({
  declarations: [
    //components
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    //pipes
    SinfotoPipe,
    DonseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
