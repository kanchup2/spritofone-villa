import { Component } from '@angular/core';
import { TeamService } from '../../core/services/team.service';

@Component({
  selector: 'app-team-settings',
  template: `
  <div class="max-w-4xl mx-auto">
    <div class="p-4 bg-white rounded shadow">
      <h3 class="font-semibold">Team Settings</h3>
      <p class="text-sm text-gray-500">Manage project team members (stub UI).</p>
      <div class="mt-4">
        <button mat-button color="primary" (click)="add()">Add Member</button>
      </div>
    </div>
  </div>
  `
})
export class TeamSettingsComponent {
  constructor(private team: TeamService){}
  add(){ alert('Add member dialog - implement'); }
}
