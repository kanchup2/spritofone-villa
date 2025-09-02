import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-widget',
  template: `
  <aside class="p-4 bg-white rounded shadow mt-4">
    <h4 class="font-semibold">Summary</h4>
    <div class="mt-2 text-sm">
      <div *ngFor="let s of summary.sections">
        <div class="flex justify-between"><div>{{s.name}}</div><div>₹{{s.subtotal || 0}}</div></div>
      </div>
      <hr class="my-2">
      <div class="flex justify-between font-semibold"><div>Total</div><div>₹{{summary.total || 0}}</div></div>
    </div>
  </aside>
  `
})
export class SummaryWidgetComponent {
  @Input() summary:any = { sections: [], total:0 };
}
