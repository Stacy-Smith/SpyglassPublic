
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {

  goal: Goal = new Goal();
  submitted: boolean;
  setByMonthlyDeposit: boolean = false;
  setByTargetDate: boolean = false;
  totalByDate: string;
  minDate: Date = new Date(Date.now())
  display: boolean = false;


  constructor(private goalService: GoalsService) { }

  ngOnInit(): void {
    this.goal.active = true;
    this.submitted = false;
  }

  /*calculate the target date based on target amount and monthly contributions*/
  calculateDate() {
    //error handle for NaN and empty string in contributions and initial deposit
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
    let totalMonths: number = Math.ceil((+this.goal.targetAmount - this.goal.currentAmount) / monthlyTotal)
    
    //handle current amounts greater than target amount
    if (totalMonths < 0){
      totalMonths = 0;
    }

    //calculation continued
    let currentDate: Date = new Date(Date.now());
    let target: Date = new Date(currentDate.setMonth(currentDate.getMonth() + totalMonths));
    this.goal.targetDate = target;
    
    this.setByMonthlyDeposit = true;
  }

  /*calculate necessary monthly deposits based on target date and targetAmount*/
  calculateMonthly() {
    let endDate = new Date(this.goal.targetDate);
    let startDate = new Date(Date.now())

    //calculate the total number of months between end date and start date
    let duration = (12 * (endDate.getFullYear() - startDate.getFullYear())) + (endDate.getMonth() - startDate.getMonth());

    //if duration is less than 1 month, set duration to 1 to avoid DivisionByZero error
    if (duration == 0) {
      duration = 1;
    }

    //test for no initial deposit
    if (isNaN(this.goal.currentAmount)) {
      this.goal.currentAmount = 0;
    }

    this.totalByDate = ((this.goal.targetAmount - this.goal.currentAmount) / duration).toFixed(2);
    this.setByTargetDate = true;
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

  handleError(error: any) {
    alert(`Error Code ${error.status}. Please try again later.`)
  }

  newGoal() {
    this.clear();
    this.toggleSubmitted();
  }

  /*post new goal to database and toggle view to successful submission screen*/
  save() {
    //calculate targetDate if user does not calculate one themselves
    if (this.goal.targetDate == null) {
      this.calculateDate()
    }

    this.goalService.postGoal(this.goal).subscribe(
      (data: any) => {
        console.log(data);
        setTimeout(() => { this.toggleSubmitted() }, 1000)
      },
      error => {
        console.log(error)
        this.handleError(error);
      }
    );
    console.log(this.goal)
  }


  /*resets display when new tab is selected*/
  tabClick() {
    this.setByTargetDate = false;
    this.setByMonthlyDeposit = false;
  }

  /*switch view based on submission - display success*/
  toggleSubmitted() {
    this.submitted = !this.submitted
    this.display = false;
  }







}
