import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  title = 'ImageUploaderFrontEnd';

  ngOnInit(): void {
  }

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
  };

 }

 // This part is for uploading
 onUpload() {


  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

  this.httpClient.post('http://localhost:8081/api/images', uploadData)
  .subscribe(
               res => {console.log(res);
                       this.receivedImageData = res;
                       this.base64Data = this.receivedImageData.pic;
                       this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
               err => console.log('Error Occured duringng saving: ' + err)
            );
 }
 
}

// app.component.ts.txt
// Displaying app.component.ts.txt.