import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Vangelis';

  person = {
    givenName: 'Vangelis',
    surname: 'Petsalis',
    age: 32,
    email: 'vagelispets@aueb.gr'
  };
}
