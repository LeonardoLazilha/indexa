import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';


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
}
