import { Observable } from 'rxjs';
import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { UploadFileServiceService } from './upload-file-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  constructor(
    private http: HttpClient,
    // private uploadFileService : UploadFileServiceService
    ) {}
    // inputFileChange(event: any){
    //   this.uploadFileService.postUploadFile(event).subscribe((result)=>{
    //     console.log("enviado com sucesso")

    //   },(Error))
    // }

   inputFileChange(event:any) {
     if (event.target.files && event.target.files[0]) {
       const arquivo = event.target.files[0];

       const formData = new FormData();
       formData.append('arquivo', arquivo);

       this.http.post('http://localhost:8080/arquivos', formData)
         .subscribe(resposta => console.log('Upload ok.'));

    }
  }


}
