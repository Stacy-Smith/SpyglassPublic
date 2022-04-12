import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal';
import { CardService } from 'src/app/services/card-service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  goals: Goal[] = [];
  currentUser: null;
  currentIndex: -1;

  goalId?: number;
  title: string;
  description: string;
  picture?: Blob;
  targetDate: Date;
  targetAmount: number;
  userContribution: number;
  secondContribution: number;
  currentAmount?: number;
  active: boolean;
  
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.retrieveGoals();
    
    
    this.goalId = this.goalId;
    this.title = this.title;
    this.description = this.description;
    this.picture = this.picture;
    this.targetDate = this.targetDate;
    this.targetAmount = this.targetAmount;
    this.userContribution = this.userContribution;
    this.secondContribution = this.secondContribution;
    this.currentAmount = this.currentAmount;
    this.active = this.active;

    
  }
  //generates the progress bar
  calculateProgress() : void {
    this.goals.forEach((goal)=> {
      goal.progress = (goal.currentAmount / goal.targetAmount) * 100
    });
  }

  delete(goalId) {
    if (confirm('Are you sure you want to delete this goal?  This cannot be undone')) {
      this.cardService.delete(goalId).subscribe((data) => {
        console.log(data)
        this.goals.forEach(x=>{
          if (x.goalId === goalId){
            this.goals.splice(this.goals.indexOf(x), 1);
          }
        });
        this.refreshList();
      },
      error => {
        console.log(error)
      });
    }
  }

  deleteAll() {
    if (confirm('This will delete all of your goals.  This cannot be undone.  Are you sure?')) {
      this.cardService.deleteAll().subscribe((data) => {
        console.log(data)
        this.goals = [];
        this.refreshList();
      },
      error => {
        console.log(error)
      });
    }
  }
  
  retrieveGoals(): void {
    this.cardService.getAll().subscribe(
      data => {
        this.goals = data;
        if(this.goals){
          this.calculateProgress();
        }
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
    
  refreshList(): void {
    this.retrieveGoals();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  // setActiveGoal(user, index): void {
  //   this.currentUser = user;
  //   this.currentIndex = index;
  // }

}