import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturns = 5;
  enteredDuration = 10;
  constructor(private investmentService: InvestmentService) {}  // Correct spelling

  
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturns,
      annualInvestment: +this.enteredAnnualInvestment
    });
  }
  

}
