import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private snack: MatSnackBar) {}
  success(msg: string) { this.snack.open(msg, 'OK', { duration: 3000, panelClass: ['bg-green-500'] }); }
  error(msg: string) { this.snack.open(msg, 'Close', { duration: 4000, panelClass: ['bg-red-500'] }); }
}
