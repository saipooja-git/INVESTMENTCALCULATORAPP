import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

@Injectable({
    providedIn:'root'
})
export class InvestmentService {
    resultsData=signal<{
        
    Year: number,
    interest: number,
    valueEndOfYear: number,
    AnnualInvestment: number,
    totalInterest: number,
    totalAmountInvested:  number 
    }[]|undefined>(undefined);
    calculateInvestmentResults(data:InvestmentInput) {
    
        const {initialInvestment,annualInvestment,expectedReturn,duration} = data;
        let investmentValue = initialInvestment;
        let annualData = [];
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
    
          const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
    
          annualData.push({
            Year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            AnnualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year
          });
        }
        this.resultsData.set(annualData);
    
        // console.log (annualData );  // Optionally return the data
      }
}