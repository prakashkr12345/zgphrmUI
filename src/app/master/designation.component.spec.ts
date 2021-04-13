import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DesignationComponent } from "./designation.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DesignationComponent", () => {

  let fixture: ComponentFixture<DesignationComponent>;
  let component: DesignationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DesignationComponent]
    });

    fixture = TestBed.createComponent(DesignationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
