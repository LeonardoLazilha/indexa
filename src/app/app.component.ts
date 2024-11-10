import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';

import agenda from './agenda.json';


interface Contact {
  id: number;
  name: string;
  phone: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    HeaderComponent, 
    SeparatorComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda;

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().startsWith(letter.toLowerCase());
    })
  }
  
}
