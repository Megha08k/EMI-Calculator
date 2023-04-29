import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EmiTableComponent } from "./emi-table.component";

describe("EmiTableComponent", () => {
  let component: EmiTableComponent;
  let fixture: ComponentFixture<EmiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmiTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
