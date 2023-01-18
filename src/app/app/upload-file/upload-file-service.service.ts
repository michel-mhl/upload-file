// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class UploadFileServiceService {
//   private httpHeaders: HttpHeaders;
//   private baseUrl: string = 'http://localhost:8080';

//   constructor(private http: HttpClient) {
//     this.httpHeaders = new HttpHeaders({});
//   }

//   postUploadFile(file: File): Observable<File> {
//     const endpoint = '/arquivos';
//     return this.http.post<File>(this.baseUrl + endpoint, file);
//   }
// }
