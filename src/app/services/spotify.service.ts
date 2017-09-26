import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  token:string = "BQC4wTyHuTN43zqbwSv2YwQmLrrdclAweu-TRyNhTgcw8LeU6QAAI2zB2Y1zXH8oPBnUW3UDw9r2HOnZVPNQsA";
  urlSearch:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists/";

  constructor( private _http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${ this.token }`);

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlSearch + query;
    return this._http
          .get( url, { headers })
          .map( res =>{
            this.artistas = res.json().artists.items
            //console.log(this.artistas);
           });
  }
  getArtista( termino:string ){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${ this.token }`);

    let query = `${ termino }`;
    let url = this.urlArtista + query;
    return this._http
          .get( url, { headers })
          .map( res =>{
            console.log(res.json());
            return res.json();
           });
  }
  getTop( termino:string ){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${ this.token }`);

    let query = `${ termino }/top-tracks?country=US`;
    let url = this.urlArtista + query;
    return this._http
          .get( url, { headers })
          .map( res =>{
            console.log(res.json().tracks);
            return res.json().tracks;
           });
  }
}
