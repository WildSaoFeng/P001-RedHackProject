import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { DevStoryComponent } from './components/dev-story/dev-story.component';
import { TeamStoryComponent } from './components/team-story/team-story.component';
import { DisplayComponent } from './components/display/display.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'wallet', component: WalletComponent},
  {path:'team-story', component: TeamStoryComponent},
  {path:'dev-story', component: DevStoryComponent},
  {path:'display', component: DisplayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WalletComponent,
    DevStoryComponent,
    TeamStoryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
