import { Component } from '@angular/core';
import { AnimalsComponent } from '../animals/animals.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScheduleComponent } from '../schedule/schedule.component';
import { FollowersComponent } from '../followers/followers.component';
import { ListsComponent } from '../lists/lists.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AnimalsComponent, RouterOutlet, RouterLink, ScheduleComponent, FollowersComponent, ListsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
