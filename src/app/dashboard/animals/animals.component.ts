import { Component } from '@angular/core';
import { AnimalListComponent } from './animal-list/animal-list.component';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [AnimalListComponent],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss'
})
export class AnimalsComponent {

}
