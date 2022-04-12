import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
 
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
 
  user: User;
  submitted: boolean = false;
  email_error: boolean = false;
  constructor(private userService: UserService,
              private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.userService.getUserById(this.route.snapshot.paramMap.get('userId')).subscribe((data:any) => {
      this.user = data;
    })
  }
 
  update(): void {
    this.userService.updateUser(this.user.userId, this.user).subscribe((data:any)=> {
      console.log(data);
    })
 
    this.toggleSubmitted();
  }

  reload(): void {

    window.location.href='/home'
    // })
  }
 
  reload(): void {
 
    window.location.href='/home'
    // })
  }
 
   toggleSubmitted() {
     this.submitted = !this.submitted;
   }
 
}