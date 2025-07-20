import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(this.hasToken())

  login(user: string, pass: string): boolean {
    if (user === 'admin' && pass === '1234') {
      localStorage.setItem('token', 'true');
      this.isLoggedIn.next(true)
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }
  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor() { }
}
