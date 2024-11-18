import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Token } from './token';
import { IToken } from './i-token';
import { interval, Observable } from 'rxjs';
import { Search } from './i-spotify';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId: string = 'f42febd685e745bb85c7840670a6c473';
  private clientSecret: string = 'f0fec519d863407490f0dc92e240f0c0';

  // Dependency injection della classe HttpClient
  constructor(private httpClient: HttpClient) { }

  private URLbase: string = 'https://api.spotify.com/v1';
  private URLaccount: string = 'https://accounts.spotify.com/api/token';

  private token!: Token;
  private _tokenValid: WritableSignal<boolean> = signal(false);
  tokenValid: Signal<boolean> = this._tokenValid.asReadonly();

  // Il metodo getToken ci serve per ottenere il token bearer da usare poi per accedere all'api di Spotify
  getToken(): void {
    // HttpParams è una classe che ci consente di definire un body formattato in application/x-www-form-urlencoded
    // Il metedo set aggiunge al body un nuovo parametro composto da nome e valore
    let body: HttpParams = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);

    // La classe HttpHeaders mi consente di creare un oggetto da usare come header in una richiesta HTTP.
    // Di solito contiene il formato dei dati inviati dalla nostra applicazione oppure la chiave di autenticazione
    // per accedere alla API (cioè il nostro token bearer)
    let headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    // Il metodo post di HttpClient è un generics, quindi fra parentesi angolari va specificato il tipo di dato ricevuto;
    // si usa any se non si conosce il formato dei dati mandato dal server, altrimenti si usa una interfaccia
    // Attenzione: una interfaccia e NON una classe (non possiamo usare new...)     
    this.httpClient.post<IToken>(this.URLaccount, body.toString(), { headers: headers })
    // .subscribe è un metodo previsto dalla classe rxjs e fa parte degli Observables.
    // corrisponde a .then del metodo fetch o delle Promise in generale
    // Fra parantesi si scrive la funzione anonima che deve essere eseguita quando i dati ci vengono cosegnati
    // Il parametro dati contiene già i dati formattati in typescript, non c'è bisogno di usare il metodo json
      .subscribe(dati => {
        // Memorizzo in this.token una nuova istanza della classe Token con i dati ricevuti da Soptify
        this.token = new Token(dati);
        console.log(this.token);
        // Avviso con signal che il token è arrivato
        this._tokenValid.set(true);
        // interval fa parte della libreria rxjs, ed è un observable. (il parametro fra parentesi corrisponde al tempo
        // in millesecondi di attesa prima che venga eseguita la funzione anonima specificata con subscribe).
        interval(this.token.expireIn).subscribe(() => {
          this._tokenValid.set(false);
          this.httpClient.post<IToken>(this.URLaccount, body.toString(), { headers: headers })
            .subscribe(dati => {
              this.token = new Token(dati);
              this._tokenValid.set(true);
            })
        })
      })
  }

  // La funzione searchArtist restituisce un Observable, oggetto introdotto dalla libreria rxjs.
  // Il funzionamento è simile alle Promises, ma a differenza di quest'ultime, la funzione da eseguire
  // nel caso di obervable fullfilled va passata attraverso il metodo subscribe (vedi sopra)
  // Il service, quindi non richiede i dati, ma espone il metodo searchArtist in modo che sia poi il componente
  // a richiederli effettivamente attraverso un subscribe del metodo searchArtist.
  searchArtist(artistName: string): Observable<Search> {
    let url = this.URLbase + '/search?q=' + artistName + '&type=artist';
    let httpHeaders = new HttpHeaders()
                            .set('Authorization', this.token.bearer);

    return this.httpClient.get<Search>(url, {headers: httpHeaders});
  }

}
