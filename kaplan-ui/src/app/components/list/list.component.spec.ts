import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";
import { CourseComponent } from "../course/course.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CourseService } from "../../course.service";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let testBedService: CourseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListComponent, CourseComponent],
      providers: [CourseService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    testBedService = fixture.debugElement.injector.get(CourseService);
    spyOn(testBedService, "getCourses").and.callThrough();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call getCourses on onInit", () => {
    expect(testBedService.getCourses).toHaveBeenCalled();
  });
});
