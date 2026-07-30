import { Service, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Service()
export class Authservice {
    private platformId = inject(PLATFORM_ID);

    authenticate(username: string, password: string): boolean {
        
        if (username != '' && password != "") {
            if (isPlatformBrowser(this.platformId)) {
                sessionStorage.setItem("authenticatedUser", username);
            }
            return true;    
        }
        return false;
    }

    isLoggedIn(): boolean {
        if (!isPlatformBrowser(this.platformId)) {
            return false; // no session available during server render
        }
        let user = sessionStorage.getItem("authenticatedUser");
        return user != null; 
    }
    logout(): void {
        if (isPlatformBrowser(this.platformId)) {
            sessionStorage.removeItem("authenticatedUser");
        }
    }
    getAuthenticatedUser(): string | null {
        if (!isPlatformBrowser(this.platformId)) {
            return null; // no session available during server render
        }
        return sessionStorage.getItem("authenticatedUser");
    }
}