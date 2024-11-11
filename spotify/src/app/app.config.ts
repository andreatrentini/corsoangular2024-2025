import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Attenzione!!! Senza provideHttpClient(), non avremo a disposizione un'istanza della classe HttpClient
  // da utilizzare in componenti e servizi con il meccanismo di dependency injection.
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};
