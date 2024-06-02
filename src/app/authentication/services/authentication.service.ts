import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BASE_URL } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public token$: BehaviorSubject<string> = new BehaviorSubject('');
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}
  public login(username: string, password: string): Observable<any> {
    return this.http.post(`${BASE_URL}/login/`, { username, password });
  }

  public set isLoggedIn(value: boolean) {
    this.isLoggedIn$.next(value);
  }

  public get isLoggedIn() {
    return this.isLoggedIn$.value;
  }
  public set token(value: string) {
    this.token$.next(value);
  }

  public get token(): Observable<string> {
    return this.token$.asObservable();
  }
}
