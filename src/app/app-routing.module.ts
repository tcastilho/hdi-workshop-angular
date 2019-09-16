import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarwarsComponent } from './components/starwars/starwars.component';

const routes: Routes = [
  {
    path: 'starwars',
    component: StarwarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
