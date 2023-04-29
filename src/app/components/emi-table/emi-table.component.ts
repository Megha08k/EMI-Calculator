import { Component, Input, OnInit } from "@angular/core";
import { EMI } from "src/app/model/emi";

@Component({
  selector: "emi-table",
  templateUrl: "./emi-table.component.html",
  styleUrls: ["./emi-table.component.scss"],
})
export class EmiTableComponent implements OnInit {
  @Input("dataSource") public dataSource!: EMI[];

  displayedColumns: string[] = [
    "month",
    "payment",
    "principal",
    "interest",
    "balance",
    "percentage",
  ];

  constructor() {}
  ngOnInit(): void {}
}
