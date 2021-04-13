import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DepartmentlistComponent } from "./departmentlist.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DepartmentlistComponent", () => {

  let fixture: ComponentFixture<DepartmentlistComponent>;
  let component: DepartmentlistComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DepartmentlistComponent]
    });

    fixture = TestBed.createComponent(DepartmentlistComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
