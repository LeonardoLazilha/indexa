import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
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
    ContactComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contacts: Contact[] = agenda;

  filterBySearch: string = '';

  filterContactsBySearch(): Contact[] {
    if(!this.filterBySearch) {return this.contacts}
    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.filterBySearch.toLowerCase());
    })
  }

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.filterContactsBySearch().filter(contact => {
      return contact.name.toLowerCase().startsWith(letter.toLowerCase());
    })
  }

}
