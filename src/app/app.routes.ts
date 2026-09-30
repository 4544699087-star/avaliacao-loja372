import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'produtos/:id', component: ProdutoDetalheComponent }, // passagem de parâmetro
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: 'home' }
];
