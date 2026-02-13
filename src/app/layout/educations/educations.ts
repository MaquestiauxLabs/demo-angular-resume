import { EducationModel } from '@/app/shared/models/education';
import { Education } from '@/app/shared/ui/education/education';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-educations',
  imports: [CommonModule, Education],
  templateUrl: './educations.html',
  styles: ``,
})
export class Educations {
  @Input() educations: EducationModel[] = [];
}
