import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Moment } from '../models/moment.model';

@Injectable()
export class DataService {
  private _momentSource = new BehaviorSubject<Moment[]>([]);

  constructor(private http: Http) { }

  getMoments(): Observable<Moment[]> {
    this.http.get('api/v1/moments')
    .toPromise()
    .then((res: Response) => {
      this._momentSource.next(res.json());
    })
    .catch(this.handleError);
  return this._momentSource.asObservable();
  };

  getMoment(id: number) {
    return this.http.get(`api/v1/moments/${id}`)
    .toPromise()
    .then((res: Response) => {
      this.getMoments();
      return res.json();
    })
    .catch(this.handleError);
  };

  addMoment(moment: Moment) {
    // moment.id = this.moments.length + 1;
    // moment.likes = this.moments.length + 58;
    // moment.comments = this.moments.length + 30;
    // moment.nickname = document.getElementById('userName').textContent;
    // this.moments.push(moment);
    const headers: Headers = new Headers({'content-type': 'application/json'});
    const requestOptions = new RequestOptions({ headers: headers });   

    return this.http.post('/api/v1/moments', moment, requestOptions)
      .toPromise()
      .then((res: Response) => {
        this.getMoments();
        return res.json;
      })
    .catch(this.handleError)
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error);
  };

}
