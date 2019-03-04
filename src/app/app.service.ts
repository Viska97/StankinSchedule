import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Study, IStudyResponse} from './study.class';
import {Class, IClassResponse} from './class.class';

@Injectable()
export class AppService {

  href = 'https://stankinschedule.herokuapp.com';

  constructor(private http: HttpClient) {

  }

  getSchedule(classId: number, subclass: number, date: string): Observable<IStudyResponse> {
    const requestUrl =
        `${this.href}/schedule/class/daily?classId=${classId}&subclass=${subclass}&date=${date}`;
    return this.http.get<IStudyResponse>(requestUrl);
  }

  getClasses(query : string) : Observable<IClassResponse> {
    const requestUrl =
        `${this.href}/university/classes?q=${query}`;
    return this.http.get<IClassResponse>(requestUrl);
  }
}