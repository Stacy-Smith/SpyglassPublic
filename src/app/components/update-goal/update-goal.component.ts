import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from 'src/app/models/goal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-update-goal',
  templateUrl: './update-goal.component.html',
  styleUrls: ['./update-goal.component.scss']
})
export class UpdateGoalComponent implements OnInit {

  goal: Goal = new Goal();
  submitted: boolean;
  setByMonthlyDeposit: boolean = false;
  setByTargetDate: boolean = false;
  totalByDate: string;
  minDate: Date = new Date(Date.now())
  display: boolean = false;

  constructor(private goalService: GoalsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.goalService.getGoalById(this.route.snapshot.paramMap.get('goalId')).subscribe((data: any) => {
      this.goal = data
    });
    this.submitted = false;
  }

  //submit new goal to data
  update(): void {

    //calculate targetDate if user does not calculate one themselves
    if (this.goal.targetDate == null) {
      this.calculateDate()
    }

    this.goalService.updateGoal(this.goal.goalId, this.goal).subscribe((data: any) => {
      console.log(data);
      setTimeout(()=>{this.toggleSubmitted()}, 1000)
    },
      error => {
        console.log(error)
        this.handleError(error);
      }
    );
    console.log(this.goal)
  }

  handleError(error: any) {
    alert(`Error Code ${error.status}. Please try again later.`)
  }


  toggleSubmitted() {
    this.submitted = !this.submitted
  }


  clear() {
    this.goal = {
      title: null,
      description: null,
      targetDate: null,
      targetAmount: null,
      userContribution: "",
      secondContribution: "",
      currentAmount: null,
      active: true
    }
    this.tabClick()
  }

  //calculate the target date based on target amount and monthly contributions
  calculateDate() {

    //error handle for NaN and empty string 
    if (isNaN(this.goal.userContribution) || this.goal.userContribution == "") {
      this.goal.userContribution = 0;
    }

    if (isNaN(this.goal.secondContribution) || this.goal.secondContribution == "") {
      this.goal.secondContribution = 0;
    }

    if (isNaN(this.goal.currentAmount)) {
      this.goal.currentAmount = 0;
    }

    //calculation
    let monthlyTotal = parseFloat(this.goal.userContribution);
    monthlyTotal += parseFloat(this.goal.secondContribution);
    let totalMonths: number = Math.ceil((+this.goal.targetAmount - this.goal.currentAmount)/ monthlyTotal)
    let currentDate: Date = new Date(Date.now());
    let target: Date = new Date(currentDate.setMonth(currentDate.getMonth() + totalMonths));
    this.goal.targetDate = target;
    this.setByMonthlyDeposit = true;
  }

  //calculate the necessary monthly contributions to reach the target date
  calculateMonthly() {

    let endDate = new Date(this.goal.targetDate);
    let startDate = new Date(Date.now())

    //calculate the total number of months between end date and start date
    let duration = (12 * (endDate.getFullYear() - startDate.getFullYear())) + (endDate.getMonth() - startDate.getMonth());

    //if duration is less than 1 month, set duration to 1 to avoid DivisionByZero
    if (duration == 0) {
      duration = 1;
    }

    if (isNaN(this.goal.currentAmount)){
      this.goal.currentAmount = 0;
    }

    this.totalByDate = (this.goal.targetAmount / duration).toFixed(2);
    this.setByTargetDate = true;

  }

  tabClick() {
    this.setByTargetDate = false;
    this.setByMonthlyDeposit = false;
  }
}
