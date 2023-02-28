import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userData = {
    email: "diogo@gmail.com",
    role: "Admin"
  }

  title = 'curso_matheusbattisti';
}
