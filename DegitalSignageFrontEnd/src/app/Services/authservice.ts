import { Service, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Service()

export class Authservice {
    private platformId = inject(PLATFORM_ID);
    public  originalusername: string | null = null;
    private cookieService = inject(SsrCookieService);
    authenticate(username: string, password: string): boolean {
    if (username != '' && password != '') {
      this.cookieService.set('authenticatedUser', username, { path: '/' });
      return true;
    }
    return false;
  }

    isLoggedIn(): boolean {
    return this.cookieService.check('authenticatedUser');
  }

    logout(): void {
    this.cookieService.delete('authenticatedUser', '/');
  }

    getAuthenticatedUser(): string | null {
    return this.cookieService.get('authenticatedUser') || null;
  }

    refreshPage(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.reload();
    }
  }
} 