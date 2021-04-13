import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CompanylistComponent } from "./companylist.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CompanylistComponent", () => {

  let fixture: ComponentFixture<CompanylistComponent>;
  let component: CompanylistComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CompanylistComponent]
    });

    fixture = TestBed.createComponent(CompanylistComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
