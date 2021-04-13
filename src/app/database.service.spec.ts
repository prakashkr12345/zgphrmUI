import { DatabaseService } from "./database.service";
import { TestBed } from "@angular/core/testing";

describe("DatabaseService", () => {

  let service: DatabaseService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatabaseService
      ]
    });
    service = TestBed.get(DatabaseService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
