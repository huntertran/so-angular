import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class Service {
  // Cannot change the code in this class
  public getRandom(): Observable<number> {
    return of(Math.random());
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: Service) { }
  public random$: Observable<number> = new Observable<number>();

  ngOnInit(): void {
    // this.random$ = this.service.getRandom();
  }

  buttonClick(): void {
    // how can I update the random with this.service.getRandom()?
    this.random$ = this.service.getRandom();
    console.log('button clicked')
  }
}
