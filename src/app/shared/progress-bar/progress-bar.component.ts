import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
  <div class="mt-2">
    <mat-progress-bar mode="determinate" [value]="percent"></mat-progress-bar>
    <div class="text-xs text-gray-500 mt-1">{{count}} / 3 images uploaded</div>
  </div>
  `
})
export class ProgressBarComponent {
  @Input() count = 0;
  get percent() { return Math.min(100, Math.round((this.count / 3) * 100)); }
}
