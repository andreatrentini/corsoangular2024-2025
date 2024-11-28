import { CanActivateFn, Router } from '@angular/router';
import { SpotifyService } from './spotify.service';
import { inject } from '@angular/core';

export const accessTokenGuard: CanActivateFn = (route, state) => {
  const spotifyService: SpotifyService = inject(SpotifyService);
  const router: Router = inject(Router);

  if(spotifyService.tokenValid()) {
    return true;
  }
  else {
    router.navigate(['/'])
    return false;
  }
};
