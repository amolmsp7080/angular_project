import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviorSubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }
  subject_demo() {
    let mySubject = new Subject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }
  behaviorSubject_demo() {
    let mySubject = new BehaviorSubject('Default Plan');
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }
  replaySubject_demo() {
    let mySubject = new ReplaySubject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }
  asyncSubject_demo() {
    let mySubject = new AsyncSubject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
    mySubject.complete();
  }
}
