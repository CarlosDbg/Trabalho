import { DummyComponent } from './dummy/dummy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardComponent } from './card/card.component';
import { DetalhesComponent } from './detalhes/detalhes.component';


const routes: Routes = [
 
  { path: 'home', component: CardComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'detalhes', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
