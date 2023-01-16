import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Data} from './data'

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {
  public baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public analyzeVovels(text: string | undefined): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${this.baseUrl}/analyzeVovels/${text}`);
  }

  public analyzeConsonants(text: string | undefined): Observable<Data[]> {
    return this.httpClient.get<Data[]>(`${this.baseUrl}/analyzeConsonants/${text}`);
  }
}
