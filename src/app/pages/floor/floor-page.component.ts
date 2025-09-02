import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FloorService } from '../../core/services/floor.service';
import { MatDialog } from '@angular/material/dialog';
import { OptionService } from '../../core/services/option.service';

@Component({
  selector: 'app-floor-page',
  template: `
  <div class="max-w-6xl mx-auto grid lg:grid-cols-4 gap-6">
    <div class="lg:col-span-3">
      <div *ngIf="loading" class="p-6 bg-white rounded shadow">Loading...</div>
      <div *ngIf="!loading && floorData">
        <div *ngFor="let section of floorData.sections" class="mb-4">
          <div class="p-4 bg-white rounded shadow">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold">{{section.name}}</h3>
              <div class="text-sm">Subtotal: ₹{{section.subtotal || 0}}</div>
            </div>
            <div class="mt-3 grid md:grid-cols-3 gap-4">
              <div *ngFor="let sub of section.subsections" class="p-3 border rounded">
                <h4 class="font-medium">{{sub.name}}</h4>
                <div class="mt-2 space-y-2">
                  <app-option-card *ngFor="let opt of sub.options" [option]="opt" [subsectionId]="sub.id" (imageUploaded)="refresh()" (finalized)="finalizeOption(sub.id, $event)"></app-option-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-1">
      <app-summary-widget [summary]="summary"></app-summary-widget>
    </div>
  </div>
  `
})
export class FloorPageComponent implements OnInit {
  floorId: string | null = null;
  floorData:any;
  loading = true;
  summary:any = { sections: [], total: 0 };

  constructor(private route: ActivatedRoute, private floor: FloorService, private dialog: MatDialog, private optionService: OptionService){}

  ngOnInit(): void {
    this.floorId = this.route.snapshot.paramMap.get('floorId');
    this.load();
  }

  load() {
    if (!this.floorId) return;
    this.loading = true;
    this.floor.getFloor(this.floorId).subscribe({
      next: (res:any) => { this.floorData = res; this.calculateSummary(); this.loading = false; },
      error: (err:any) => { console.error(err); this.loading = false; this.useFallback(); }
    });
  }

  useFallback() {
    // fallback sample data so UI works even if backend lacks certain endpoints
    this.floorData = {
      id: this.floorId,
      name: this.floorId,
      sections: [
        { id: 's1', name: 'Living Area', subtotal: 0, subsections: [
            { id: 'ss1', name: 'TV Space', finalizedOptionId: null, subsections: [], options: [
              { id: 'o1', label:'A', images:[], price: null, isFinal:false },
              { id: 'o2', label:'B', images:[], price: null, isFinal:false },
              { id: 'o3', label:'C', images:[], price: null, isFinal:false }
            ]}
          ]}
      ]
    };
    this.calculateSummary();
  }

  refresh() { this.load(); }

  finalizeOption(subsectionId: string, optionId: string) {
    // call API to finalize
    this.optionService.finalize(subsectionId, optionId).subscribe({
      next: (res:any)=> { this.load(); },
      error: (err:any)=> { console.error(err); alert('Failed to finalize'); }
    });
  }

  calculateSummary() {
    const secs = [];
    let total = 0;
    for (const s of this.floorData.sections) {
      let st = 0;
      for (const ss of s.subsections) {
        const finalized = ss.finalizedOptionId ? ss.options.find((o:any)=>o.id===ss.finalizedOptionId) : null;
        const val = finalized?.price || 0;
        st += val;
      }
      secs.push({ name: s.name, subtotal: st });
      total += st;
    }
    this.summary = { sections: secs, total };
  }
}
