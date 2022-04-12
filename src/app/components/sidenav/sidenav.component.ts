import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  user: User;
  opened: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //HARDCODED FOR TESTING PURPOSES UNTIL LOGIN FUNCTIONAL
    this.userService.getUserById(1).subscribe((data:any) => {
      this.user = data;
    });
  }
  toggle() {
    this.opened = !this.opened
  }

}
