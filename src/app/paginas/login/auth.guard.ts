import { Injectable } from "@angular/core";
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const token = localStorage.getItem('token');

        if (token) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
