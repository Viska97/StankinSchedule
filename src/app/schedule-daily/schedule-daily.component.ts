import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Study, IStudyResponse} from '../study.class';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Class, SubClass, IClassResponse} from '../class.class';

import * as moment from 'moment'
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-schedule-daily',
  templateUrl: './schedule-daily.component.html',
  styleUrls: ['./schedule-daily.component.scss']
})
export class ScheduleDailyComponent implements OnInit {

  displayedColumns: string[] = ['time', 'room', 'subject', 'teacher'];
  studies : Study[] = [];
  classes : Class[] = [];
  subclasses : SubClass[] = [
    {id: 0, name: 'А'},
    {id: 1, name: 'Б'},
  ];

  selectedDate : Date = new Date()
  classId : number = parseInt(localStorage.getItem('classId')) || -1
  subclassId : number = parseInt(localStorage.getItem('subclassId')) || 0

  isLoadingResults = false;
  isNoStudies = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loadStudies()
    this.loadClasses('')
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = new Date(event.value);
    this.loadStudies();
  }

  onClassChanged(event : MatSelectChange) {
    this.loadStudies();
    localStorage.setItem('classId', this.classId.toString());
  }

  onSubclassChanged(event : MatSelectChange) {
    this.loadStudies();
    localStorage.setItem('subclassId', this.subclassId.toString());
  }

  loadStudies() {
    const formattedDate = moment(this.selectedDate).format("YYYY-MM-DD");
    this.appService.getSchedule(this.classId,this.subclassId,formattedDate).subscribe(data => this.studies = data.results);
  }

  loadClasses(query : string) {
    this.appService.getClasses(query).subscribe(data => this.classes = data.results);
  }

}
