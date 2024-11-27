import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Albums } from '../i-albums';
import { AlbumComponent } from './album/album.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  
  // ActivatedRoute è un servizio che mi consente di ottenere la route (la url) attiva in un certo momento
  // E' un servizio quindi devo usare la dependency injection
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private spotifyService: SpotifyService = inject(SpotifyService);
  // Quando vado a leggere l'id dalla URL?

  albums: WritableSignal<Albums | null> = signal<Albums | null>(null);
  
  ngOnInit(): void {
    // params di ActivatedRoute è un observable che mi avvisa ogni volta che la URL cambia, in particolare
    // quando cambia l'id
    this.activatedRoute.params.subscribe(params => {
      // params è un array che contiene l'elenco dei parametri presenti nella url, definiti nel file app.route.ts
      let id: string = params['id'];
      this.spotifyService.getArtistAlbums(id).subscribe(dati => {
        this.albums.set(dati);
        
      })
    })
  }

}
