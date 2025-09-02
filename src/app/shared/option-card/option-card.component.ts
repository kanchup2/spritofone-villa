import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PriceEditorComponent } from '../price-editor/price-editor.component';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { ImagePopupViewerComponent } from '../image-popup/image-popup-viewer.component';

@Component({
  selector: 'app-option-card',
  template: `
  <mat-card class="p-3">
    <div class="flex items-center justify-between">
      <div class="font-medium">{{option.label}} <span class="text-sm text-gray-500">- {{option.price ? (option.price | currency:'INR') : '—'}}</span></div>
      <div class="flex items-center gap-2">
        <button mat-button (click)="openPriceEditor()">Edit</button>
        <button mat-button (click)="toggleFinalize()">{{option.isFinal ? 'Final' : 'Finalize'}}</button>
      </div>
    </div>

    <div class="mt-2 flex gap-2">
      <div *ngFor="let img of option.images" class="w-20 h-20 rounded overflow-hidden bg-gray-100">
        <img [src]="img.url" alt="{{img.altText||'image'}}" class="w-full h-full object-cover cursor-pointer" (click)="openViewer(img)">
      </div>
      <div class="w-20 h-20 rounded flex items-center justify-center border border-dashed">
        <button mat-button (click)="openUploader()">Upload</button>
      </div>
    </div>
    <app-progress-bar [count]="option.images.length"></app-progress-bar>
  </mat-card>
  `
})
export class OptionCardComponent {
  @Input() option: any;
  @Input() subsectionId!: string;
  @Output() imageUploaded = new EventEmitter<void>();
  @Output() finalized = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  openUploader() {
    const ref = this.dialog.open(ImageUploaderComponent, { data: { subsectionId: this.subsectionId, optionId: this.option.id } });
    ref.afterClosed().subscribe(res => { if (res) this.imageUploaded.emit(); });
  }

  openPriceEditor() {
    const ref = this.dialog.open(PriceEditorComponent, { data: { option: this.option } });
    ref.afterClosed().subscribe(res => { if (res && res.saved) { /* emit or refresh */ } });
  }

  toggleFinalize() {
    // emit for parent to call finalize API
    this.finalized.emit(this.option.id);
  }

  openViewer(img:any) {
    this.dialog.open(ImagePopupViewerComponent, { data: { images: this.option.images, index: this.option.images.indexOf(img), context: this.option } });
  }
}
