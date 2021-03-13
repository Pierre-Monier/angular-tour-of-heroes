import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListContainerComponent } from './pokemon/component/pokemon-list-container/pokemon-list-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonFormContainerComponent } from './pokemon/component/pokemon-form-container/pokemon-form-container.component';
import { MoveComponent } from './move/move.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonListContainerComponent,
    canActivate: [AuthGuard],
  },
  { path: 'moves', component: MoveComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pokemon/:id',
    component: PokemonFormContainerComponent,
    data: { type: 'update' },
    canActivate: [AuthGuard],
  },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'add',
    component: PokemonFormContainerComponent,
    data: { type: 'create' },
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
