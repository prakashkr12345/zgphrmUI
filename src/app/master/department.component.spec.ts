import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DepartmentComponent } from "./department.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DepartmentComponent", () => {

  let fixture: ComponentFixture<DepartmentComponent>;
  let component: DepartmentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DepartmentComponent]
    });

    fixture = TestBed.createComponent(DepartmentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
