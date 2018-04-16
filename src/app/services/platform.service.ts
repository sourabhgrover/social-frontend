import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service';



@Injectable()
export class PlatformService extends DataService {

  constructor(http: HttpClient) {
    super('http://13.127.30.139:3000/api/platform',http);
   }

}
