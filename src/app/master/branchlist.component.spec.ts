import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BranchlistComponent } from "./branchlist.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BranchlistComponent", () => {

  let fixture: ComponentFixture<BranchlistComponent>;
  let component: BranchlistComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BranchlistComponent]
    });

    fixture = TestBed.createComponent(BranchlistComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
