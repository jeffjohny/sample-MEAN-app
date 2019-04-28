import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http/';


describe('CourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });

  it('should be return promise on getCourses', () => {
    const service: CourseService = TestBed.get(CourseService);
    let httpUrl = service.getCourses();
    expect(httpUrl.source.source.source['value'].url).toBe('http://localhost:4001/courses');
  });
});
