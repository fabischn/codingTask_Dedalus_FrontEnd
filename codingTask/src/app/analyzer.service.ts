import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {
  public baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public analyzeVovels(text: string | undefined): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/analyzeVovels/${text}`);
  }

  public analyzeConsonants(text: string | undefined): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/analyzeConsonants/${text}`);
  }
}
