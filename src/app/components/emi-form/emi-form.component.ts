import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { EMI } from "src/app/model/emi";

@Component({
  selector: "emi-form",
  templateUrl: "./emi-form.component.html",
  styleUrls: ["./emi-form.component.scss"],
})
export class EmiFormComponent implements OnInit {
  dataSource: EMI[] = [];
  emiForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emiForm = this.fb.group({
      loanAmount: new FormControl("", [Validators.required]),
      loanIntrest: new FormControl("", [Validators.required]),
      loanTenure: new FormControl("", [Validators.required]),
      loanTenureType: new FormControl(true),
    });
  }

  public isFieldValid(field: string) {
    return !this.emiForm.get(field)?.valid && this.emiForm.get(field)?.touched;
  }

  public onClculate() {
    const emi = this.emiForm.value;

    const loanAmount = parseInt(emi.loanAmount);
    const interestRate = parseInt(emi.loanIntrest) / 100;
    const loanTerm = emi.loanTenureType
      ? Math.round(parseInt(emi.loanTenure) / 12)
      : parseInt(emi.loanTenure);

    // Calculate the monthly payment
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const emiSchedule: EMI[] = [];
    let balance = loanAmount;

    // Loop through each month of the loan term
    for (let month = 1; month <= numberOfPayments; month++) {
      const monthlyInterest = balance * monthlyInterestRate;
      const principal = monthlyPayment - monthlyInterest;

      // Update the balance
      balance -= principal;

      // Add the month's EMI summary to the EMI schedule array
      emiSchedule.push({
        month: month,
        payment: monthlyPayment.toFixed(2),
        principal: principal.toFixed(2),
        interest: monthlyInterest.toFixed(2),
        balance: balance.toFixed(2),
        percentage: ((principal + monthlyInterest) / loanAmount) * 100,
      });
    }
    this.dataSource = emiSchedule;
  }
}
