import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Vangelis',
    surName: 'Petsalis',
    age: 32,
    email: 'vagelispets@aueb.gr',
    address: 'Athens, Greece'
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 50,
    email: 'johndoe@gmail.com',
    address: 'New York, USA'
  };
}
