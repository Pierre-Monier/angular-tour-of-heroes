import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListContainerComponent } from './pokemon/component/pokemon-list-container/pokemon-list-container.component';
import { PokemonFormContainerComponent } from './pokemon/component/pokemon-form-container/pokemon-form-container.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoveComponent } from './move/move.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './shared/service/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonListComponent } from './pokemon/component/pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './pokemon/component/pokemon-form/pokemon-form.component';
import { PokemonNumberComponent } from './pokemon/component/pokemon-number/pokemon-number.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypesSelectorComponent } from './shared/component/types-selector/types-selector.component';
import { StatSelectorComponent } from './shared/component/stat-selector/stat-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListContainerComponent,
    PokemonFormContainerComponent,
    MessageComponent,
    DashboardComponent,
    MoveComponent,
    SignInComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonFormComponent,
    PokemonNumberComponent,
    PageNotFoundComponent,
    TypesSelectorComponent,
    StatSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
