import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickApi';
  arrPersonajes:any;

  constructor(private ps: PersonajesService) {
    
  }
  ngOnInit(): void {
    this.ps.getPersonajes()
      .then(response => {
        this.arrPersonajes = response['results'];
        console.log(this.arrPersonajes);
      })
   
  }
}
