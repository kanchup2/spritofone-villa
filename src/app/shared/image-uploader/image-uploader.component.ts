import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageService } from '../../core/services/image.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-image-uploader',
  template: `
  <h2 mat-dialog-title>Upload image</h2>
  <mat-dialog-content>
    <input type="file" (change)="fileChange($event)" accept="image/*">
    <div *ngIf="preview" class="mt-2">
      <img [src]="preview" class="w-64 h-48 object-cover rounded shadow">
    </div>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button (click)="close()">Cancel</button>
    <button mat-button color="primary" (click)="upload()" [disabled]="!file">Upload</button>
  </mat-dialog-actions>
  `
})
export class ImageUploaderComponent {
  file?: File;
  preview?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ImageUploaderComponent>,
    private imageService: ImageService,
    private toast: ToastService
  ) {}

  fileChange(ev:any) {
    const f = ev.target.files && ev.target.files[0];
    if (!f) return;
    this.file = f;
    const reader = new FileReader();
    reader.onload = () => this.preview = reader.result as string;
    reader.readAsDataURL(f);
  }

  upload() {
    if (!this.file) return;
    this.imageService.uploadImage(this.data.subsectionId, this.data.optionId, this.file).subscribe({
      next: (res:any) => { this.toast.success('Uploaded'); this.dialogRef.close(true); },
      error: (err:any) => { this.toast.error('Upload failed'); console.error(err); }
    });
  }

  close() { this.dialogRef.close(false); }
}
