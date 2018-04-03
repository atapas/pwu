import { Component, OnInit } from '@angular/core';
import { UserCardService } from './user-card.service';
import { User } from './user.model';
import { Button } from './button.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  providers: [UserCardService]
})
export class UserCardComponent implements OnInit {

  public button: Button = {
    text: 'Get me the Next User...',    
    disabled: false
  };

  public user: User = {
    dob: '',
    email: '',
    gender: '',
    location: '',
    name: '',
    nat: '',
    phone: '',
    picturePath: '../../assets/icon-512x512.png',
    userName: ''
  };

  constructor(private userCardService: UserCardService) { }

  ngOnInit() {
    if (!navigator.onLine) {
      this.button.text = 'Sorry, you are offline!';
      this.button.disabled = true;
    }
    this.getUser();
  }

  public getUser() {
    this.userCardService.getUser().subscribe((data) => {
      let userData = data.results[0];     
      this.user = new User();
      this.user.dob = userData.dob;
      this.user.email = userData.email;
      this.user.gender = userData.gender;
      this.user.location = userData.location.street + ' ' + userData.location.city + ' ' + userData.location.state + ' ' + userData.location.postcode;
      this.user.name = userData.name.title + ' ' + userData.name.first + ' ' + userData.name.last;
      this.user.nat = userData.nat;
      this.user.phone = userData.phone;
      this.user.picturePath = userData.picture.large;
      this.user.userName = userData.login.username;
      console.log('User Details ', this.user);
    });
  }

}


