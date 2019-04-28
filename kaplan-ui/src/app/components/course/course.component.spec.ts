import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseComponent } from "./course.component";

describe("CourseComponent", () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = {
      _id: "sdfwefwds23343ffds",
      title: "Course",
      description: "the description",
      instructorName: "John honai",
      instructorPhotoUrl: "http://inst",
      subjectPhotoUrl: "http://image",
      time: "2016-01-01 21:00:00"
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render timezone in couse time", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".time-span>span").textContent).toContain(
      "EDT"
    );
  });

  it("should return datetime with one added hour", () => {
    const timeStamp = component.getFinalHour(new Date("2016-01-01 21:00:00"))
    expect(timeStamp).toEqual(1451665800000);
  });
});
