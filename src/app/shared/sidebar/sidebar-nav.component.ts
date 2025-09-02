import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  template: `
  <aside class="w-64 p-4 bg-white rounded-lg shadow hidden lg:block">
    <h4 class="font-semibold mb-2">Floors</h4>
    <ul class="space-y-1 text-sm">
      <li><a routerLink="/floor/ground">Ground Floor</a></li>
      <li><a routerLink="/floor/first">First Floor</a></li>
      <li><a routerLink="/floor/second">Second Floor</a></li>
      <li><a routerLink="/floor/terrace">Terrace</a></li>
    </ul>
  </aside>
  `
})
export class SidebarNavComponent {}
