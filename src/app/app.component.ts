import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen flex flex-col">
      <mat-toolbar color="primary" class="bg-white shadow-sm">
        <div class="flex items-center gap-3 w-full">
          <img src="assets/logo.png" alt="logo" class="h-10 w-10 rounded-full">
          <div class="flex-1">
            <div class="text-lg font-semibold text-gray-700">Villa 15 — Sprit Of One</div>
            <div class="text-sm text-gray-500">Floor Plan & Interior Design</div>
          </div>
          <nav class="hidden md:flex space-x-2">
            <a routerLink="/" class="px-3 py-2 rounded hover:bg-gray-100">Home</a>
            <a routerLink="/floor/ground" class="px-3 py-2 rounded hover:bg-gray-100">Ground</a>
            <a routerLink="/floor/first" class="px-3 py-2 rounded hover:bg-gray-100">First</a>
            <a routerLink="/floor/second" class="px-3 py-2 rounded hover:bg-gray-100">Second</a>
            <a routerLink="/floor/terrace" class="px-3 py-2 rounded hover:bg-gray-100">Terrace</a>
            <a routerLink="/team" class="px-3 py-2 rounded hover:bg-gray-100">Team</a>
          </nav>
        </div>
      </mat-toolbar>

      <div class="flex-1 p-6">
        <router-outlet></router-outlet>
      </div>

      <footer class="p-4 text-center text-sm text-gray-500">
        © Sprit Of One — Villa 15
      </footer>
    </div>
  `
})
export class AppComponent { }
