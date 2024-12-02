import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumsComponent } from './albums/albums.component';
import { notLoggedInGuard } from './not-logged-in.guard';
import { loggedInGuard } from './logged-in.guard';
import { accessTokenGuard } from './access-token.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent, canActivate: [loggedInGuard, accessTokenGuard]},
    {path: 'credits', component: CreditsComponent},
    {path: 'login', component: LoginComponent, canActivate: [notLoggedInGuard]},
    // :id rappresenta un parametro che nella URL potrà cambiare, e rappresentare di volta in volta l'id dell'artista
    // di cui si vuole ottenere l'elenco degli album
    {path: 'albums/:id', component: AlbumsComponent, canActivate: [loggedInGuard, accessTokenGuard]},
    {path: 'album-detail/:id', component: AlbumsComponent, canActivate: [loggedInGuard, accessTokenGuard]},
    {path: '**', component: NotFoundComponent}
];
