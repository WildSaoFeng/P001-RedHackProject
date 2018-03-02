import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { DevStoryComponent } from './components/dev-story/dev-story.component';
import { TeamStoryComponent } from './components/team-story/team-story.component';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';

import { JwtHelperService } from "@auth0/angular-jwt";
import {HttpClientModule} from "@angular/common/http";
import { JwtModule } from '@auth0/angular-jwt'
import { AuthService} from "./services/auth.service";

import {NgxQRCodeModule} from "ngx-qrcode2";

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'wallet', component: WalletComponent},
  {path:'team-story', component: TeamStoryComponent},
  {path:'dev-story', component: DevStoryComponent},
  {path:'display', component: DisplayComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WalletComponent,
    DevStoryComponent,
    TeamStoryComponent,
    DisplayComponent,
    LoginComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxQRCodeModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        },
        whitelistedDomains: [
          'localhost:4200'
        ]
      }
    })

  ],
  providers: [
    JwtHelperService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
