import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { UploadFileService } from './upload-file-service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent implements OnInit {


  constructor( private http: HttpClient) { }

  ngOnInit() { }

  onChange(event: any) {

   //if (event.target.files && event.target.files[0]) {
      const arquivo = event.target.files[0];
      const formData = new FormData();

      formData.append('arquivo', arquivo);
      console.log("me diga"+ formData)
      this.http.post('http://localhost:8080/arquivos', formData)
         .subscribe(resposta => console.log('Upload ok.'));
    //}
  }
}
