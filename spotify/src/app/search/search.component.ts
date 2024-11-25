import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { Search } from '../i-search';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  // Dependency injection: uso l'istanza di spotify service creata dall'applicazione all'avvio
  sportifyService: SpotifyService = inject(SpotifyService);

  // FormControl è una classe che mi consente di gestire un elemento di una form in maniera avanzata
  searchInput: FormControl = new FormControl();

  // Signal che gestisce i dati ricevuti da spotify
  // <Search | null> significa che il mio signal accetta come valore un oggeto di tipo Search oppure un valore null
  // Prima di effettuare la ricerca, e quindi inviare ka richiesta a spotify, l'elenco degli artisti
  // è necessariamente nullo, 
  artistList: WritableSignal<Search | null> = signal<Search | null>(null)

  ngOnInit(): void {
    // valueChanges restituisce un Observable, la funzione di claaback passata con subscribe viene eseguita
    // ogni volta che cambia il valure scritto nella input
    // .pipe mi consente (fra parentesi tonde) di specificare una serie di elaborazioni (operatori) da eseguire prima che 
    // venga eseguita la funzione di callback di subscribe
    this.searchInput.valueChanges.pipe(
      // debounceTime(300) cinsente di impostare un intervallo di tempo entro il quale la modifica del valore viene ignorata
      // cioè NON vine eseguita la funzione di callback se non sono trascorsi 300ms
      debounceTime(300),
      // distinctUntilChanged: La funzione di callback non viene eseguita se il valore della input è lo stesso valore 
      // che aveva prima (scrivo e cancello veloemente un carattere)
      distinctUntilChanged(),
      // switchMap mi consente di eseguire la funzione di callback solo per l'ultima chiamata generata da observable
      // ovviamente se non erano già state completate (nel nostro caso spotify non ci aveva ancora risposto)
      // swicthMap esegue il codice passato come parametro esattamente come subscribe
      switchMap(artistName => {
        // Mando la chiamata a spotify solo se il teso contenuto nella input ha almeno 1 carattere
        if (artistName.length > 0) {
          // Restituisco l'observable restituito da searchArtist (vedi ServiceSpotify)
          return this.sportifyService.searchArtist(artistName)
        }
        else {
          // Se non c'è scritto nulla nella input non mando la richiesta a spotify. Attenzione che il .subscribe
          // scritto sotto VUOLE un observable, siccome il servizio non lo può restituire (manca return ...searchArtist())
          // invento un nuovo observable che restituisce un valore null
          return of(null);
        }
      })
    )
    .subscribe(dati => {
      // I dati o sono arrivati da spotify o ho un valore null. 
      console.log(dati)
      if (dati) {
        this.artistList.set(dati)        
      }
    })
  }


}
