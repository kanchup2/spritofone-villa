import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 p-6 bg-white rounded-2xl shadow">
      <h2 class="text-2xl font-semibold">Villa 15 — Sprit Of One</h2>
      <p class="text-sm text-gray-600 mt-2">North-facing 3 BHK, 2-story villa with terrace.</p>
      <div class="mt-4 grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-gray-50 rounded">
          <h4 class="font-medium">Project Info</h4>
          <p class="text-sm mt-2">Owners: Kanchan Chakraborty & Suchitra Banerjee</p>
          <p class="text-sm mt-1">Address: Survey No 35,36, Hobli, Balagere, Varthur, Bengaluru</p>
          <a class="text-brand mt-2 inline-block" href="https://maps.app.goo.gl/vsKnvUe36HmsEExNA" target="_blank">Open on Google Maps</a>
        </div>
        <div class="p-4 bg-gray-50 rounded">
          <h4 class="font-medium">Quick Access</h4>
          <div class="mt-2 space-y-2">
            <a routerLink="/floor/ground" class="block">Open Ground Floor</a>
            <a routerLink="/floor/first" class="block">Open First Floor</a>
            <a routerLink="/floor/second" class="block">Open Second Floor</a>
            <a routerLink="/floor/terrace" class="block">Open Terrace</a>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 bg-white rounded-2xl shadow">
      <h4 class="font-semibold">Project Summary</h4>
      <p class="text-sm text-gray-500 mt-2">Overview and progress.</p>
      <div class="mt-4">
        <p class="text-sm">Sections completed: <strong>12/22</strong></p>
        <p class="text-sm">Estimated total: <strong>₹1,25,000</strong></p>
      </div>
    </div>
  </div>
  `
})
export class HomeComponent {}
