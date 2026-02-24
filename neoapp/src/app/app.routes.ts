import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { AddBook } from './add-book/add-book';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: Catalog },
  { path: 'add-book', component: AddBook }
];
