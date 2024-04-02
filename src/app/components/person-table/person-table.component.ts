import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'Vangelis',
    surname: 'Petsalis',
    age: 32,
    email: 'vagelispets@aueb.gr'
  };
}
