import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>(`${this.URL}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
