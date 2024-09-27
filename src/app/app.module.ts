import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Make sure FormsModule is imported here
import { AppComponent } from './app.component';
import { UserInputModule } from './user-input/user-input.module';  // Import UserInputModule
import { InvestmentResultsModule } from './investment-results/investment-results.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [BrowserModule, FormsModule, UserInputModule,InvestmentResultsModule],  // Include FormsModule and UserInputModule
  bootstrap: [AppComponent],
})
export class AppModule {}
