import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user: User;
  submitted: boolean = false;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUserById(1).subscribe((data:any) => {
      this.user = data;
    });
  }
  update(): void {
    this.userService.updateUser(this.user.userId, this.user).subscribe((data:any)=> {
      console.log(data);
    })
    this.toggleSubmitted();
  }

  toggleSubmitted() {
    this.submitted = !this.submitted;
  }

}


