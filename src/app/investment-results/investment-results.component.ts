import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, Input, Signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']  
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  
  // Make sure that resultsData is an array in the service
  get results() {
    return this.investmentService.resultsData();  // Access the signal value
  }
}
