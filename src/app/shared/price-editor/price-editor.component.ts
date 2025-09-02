import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OptionService } from '../../core/services/option.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-price-editor',
  template: `
  <h2 mat-dialog-title>Price Editor</h2>
  <mat-dialog-content [formGroup]="form">
    <mat-form-field class="w-full"><input matInput placeholder="Price" formControlName="price" type="number"></mat-form-field>
    <mat-form-field class="w-full"><input matInput placeholder="URL" formControlName="url"></mat-form-field>
    <mat-form-field class="w-full"><input matInput placeholder="Size" formControlName="size"></mat-form-field>
    <mat-form-field class="w-full"><textarea matInput placeholder="Reason/Notes" formControlName="reason"></textarea></mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button (click)="close()">Cancel</button>
    <button mat-button color="primary" (click)="save()">Save</button>
  </mat-dialog-actions>
  `
})
export class PriceEditorComponent {
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<PriceEditorComponent>,
    private fb: FormBuilder,
    private optionService: OptionService,
    private toast: ToastService
  ){
    this.form = this.fb.group({
      price: [data.option.price || null],
      url: [data.option.url || ''],
      size: [data.option.size || ''],
      reason: [data.option.reason || '']
    });
  }

  save() {
    const payload = this.form.value;
    this.optionService.updateOption(this.data.option.id, payload).subscribe({
      next: (res:any) => { this.toast.success('Saved'); this.dialogRef.close({ saved: true }); },
      error: (err:any) => { this.toast.error('Save failed'); console.error(err); }
    });
  }

  close(){ this.dialogRef.close({ saved: false }); }
}
