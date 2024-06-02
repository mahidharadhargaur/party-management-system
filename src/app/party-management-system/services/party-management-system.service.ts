import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PartyManagementSystemService {
  constructor(private http: HttpClient) {}

  public getAllParties(): Observable<any> {
    return this.http.get(`${BASE_URL}/party/`);
  }
  public getPartyDetails(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/party/`, {
      params: {
        id,
      },
    });
  }

  public editPartyDetils(id: number, body: any): Observable<any> {
    const fData = new FormData();
    Object.keys(body).forEach((x) => fData.set(x, body[x]));
    return this.http.patch(`${BASE_URL}/party/`, fData, { params: { id } });
  }

  public deleteParty(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/party/`, { params: { id } });
  }

  public addNew(body: any): Observable<any> {
    const fData = new FormData();
    Object.keys(body).forEach((x) => fData.set(x, body[x]));
    return this.http.post(`${BASE_URL}/party/`, fData);
  }
}
