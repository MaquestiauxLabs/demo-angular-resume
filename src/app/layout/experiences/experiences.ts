import { ExperienceModel } from '@/app/shared/models/experience';
import { Experience } from '@/app/shared/ui/experience/experience';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule, Experience],
  templateUrl: './experiences.html',
  styles: ``,
})
export class Experiences {
  @Input() experiences: ExperienceModel[] | null = null;
}
