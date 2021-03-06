import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})

export class WalletComponent implements OnInit {

  user: Object;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
