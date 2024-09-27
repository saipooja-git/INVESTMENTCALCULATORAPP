// investment-results.module.ts (or the relevant module file)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentResultsComponent } from './investment-results.component';

@NgModule({
    declarations: [InvestmentResultsComponent],
    imports: [
        CommonModule // Make sure this is included
    ],
    exports:[InvestmentResultsComponent]
})
export class InvestmentResultsModule { }
