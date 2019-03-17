import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http : HttpClient) { }

  uploadAnImage(image : File){

    const fd = new FormData();
    fd.append('image', image);
    return this.http.post('https://api.cloudinary.com/v1_1/apiit-eea/image/upload', fd)
  }
}
