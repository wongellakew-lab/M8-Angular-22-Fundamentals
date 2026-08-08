import { Component, input, output } from '@angular/core';
import { Course } from '../../models/course.models';

@Component({
  selector: 'tms-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  course = input.required<Course>();
  enrollClicked = output<Course>();
}
