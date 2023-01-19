import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UploadFileService {
  private baseUrl: string = 'http://localhost:8080/arquivos';
  private httpHeaders: HttpHeaders;

    constructor(private http: HttpClient) {
      this.httpHeaders = new HttpHeaders({});
    }


    upload(files: Set<File>) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));

    return this.http.post(this.baseUrl, formData);
  }

}
