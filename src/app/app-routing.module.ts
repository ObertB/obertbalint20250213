import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // Alapértelmezett útvonal átirányítása
  { path: '**', redirectTo: 'products' } // Hibás útvonal esetén is a products-ra irányít
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
