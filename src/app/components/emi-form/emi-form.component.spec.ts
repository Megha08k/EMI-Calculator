import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EmiFormComponent } from "./emi-form.component";

describe("EmiFormComponent", () => {
  let component: EmiFormComponent;
  let fixture: ComponentFixture<EmiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmiFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
