import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({ providedIn: 'root' })
export class Authservice {
    private platformId = inject(PLATFORM_ID);
    private cookieService = inject(SsrCookieService);
    public authenticatedUsername: string = '';
    public authenticatedEmail: string = '';

    constructor() {
        this.authenticatedEmail = this.cookieService.get('authenticatedUserEmail') || '';
        this.authenticatedUsername = this.cookieService.get('authenticatedUsername') || '';
    }

    authenticate(Email: string, Username: string): void {
        this.cookieService.set('authenticatedUserEmail', Email, { path: '/' });
        this.cookieService.set('authenticatedUsername', Username, { path: '/' });
        this.authenticatedEmail = Email;
        this.authenticatedUsername = Username;
    }

    getAuthenticatedEmail(): string | null {
        return this.authenticatedEmail || null;
    }

    isLoggedIn(): boolean {
        return this.cookieService.check('authenticatedUserEmail') && this.cookieService.check('authenticatedUsername');
    }

    logout(): void {
        this.cookieService.delete('authenticatedUserEmail', '/');
        this.cookieService.delete('authenticatedUsername', '/');
        this.authenticatedEmail = '';
        this.authenticatedUsername = '';
    }

    getAuthenticatedUser(): string | null {
        return this.cookieService.get('authenticatedUsername') || null;
    }

    refreshPage(): void {
        if (isPlatformBrowser(this.platformId)) {
            window.location.reload();
        }
    }
}