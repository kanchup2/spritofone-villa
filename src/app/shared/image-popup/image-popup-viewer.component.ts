import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-popup-viewer',
  template: `
  <div class="w-full max-w-3xl">
    <div class="flex items-center justify-between mb-2">
      <div>{{header}}</div>
      <div>{{index+1}} / {{images.length}}</div>
    </div>
    <div class="w-full h-96 bg-black flex items-center justify-center">
      <img [src]="images[index]?.url" class="max-h-full max-w-full object-contain">
    </div>
    <div class="flex items-center justify-between mt-2">
      <button mat-button (click)="prev()" [disabled]="index===0">Prev</button>
      <button mat-button (click)="next()" [disabled]="index>=images.length-1">Next</button>
    </div>
  </div>
  `
})
export class ImagePopupViewerComponent {
  images: any[] = [];
  index = 0;
  header = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.images = data.images || [];
    this.index = data.index || 0;
    const ctx = data.context || {};
    this.header = `${ctx.label || ''}`;
  }

  prev() { if (this.index>0) this.index--; }
  next() { if (this.index<this.images.length-1) this.index++; }
}
