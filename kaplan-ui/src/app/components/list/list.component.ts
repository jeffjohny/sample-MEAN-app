import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course.model';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: Map<number, Course[]>;
  
  constructor(private courseService: CourseService) { }

  getFinalHour(date: Date) {
    let d = new Date(date);
    return d.setHours(d.getHours() + 1);
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe((course) => {
      this.courses = groupBy(course, function(item) { return new Date(item.time).setHours(0,0,0,0); })
    })
  }

}
