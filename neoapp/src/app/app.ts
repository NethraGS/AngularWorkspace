import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Myservice } from './myservice';
import { Red } from './red/red';
import { Catalog } from './catalog/catalog';
import { AddBook } from './add-book/add-book';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Red],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('neoapp');
}
