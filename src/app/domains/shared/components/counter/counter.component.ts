import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    // No async
    // Before render
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChange) {
    // Before and during ender
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit() {
    // After render
    // Only one
    // Async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    // After render
    // if the children have already been painted
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
