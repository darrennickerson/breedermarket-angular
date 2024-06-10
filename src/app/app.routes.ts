import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './dashboard/main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AnimalsComponent } from './dashboard/animals/animals.component';
import { FollowersComponent } from './dashboard/followers/followers.component';
import { ScheduleComponent } from './dashboard/schedule/schedule.component';
import { ListsComponent } from './dashboard/lists/lists.component';

export const routes: Routes = [
    {path: 'dashboard', component: MainComponent,  children: [
        {path: 'animals', component: AnimalsComponent},
        {path: 'followers', component: FollowersComponent},
        {path: 'schedule', component: ScheduleComponent},
        {path: 'lists', component: ListsComponent}
    ]},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', component: PagenotfoundComponent}, 
    
    
   
    
];
