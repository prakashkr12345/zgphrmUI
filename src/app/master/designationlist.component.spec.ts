import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DesignationlistComponent } from "./designationlist.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DesignationlistComponent", () => {

  let fixture: ComponentFixture<DesignationlistComponent>;
  let component: DesignationlistComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DesignationlistComponent]
    });

    fixture = TestBed.createComponent(DesignationlistComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
