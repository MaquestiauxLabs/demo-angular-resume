import { PersonalInfo } from '@/app/shared/models/personal-info';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styles: ``,
})
export class AboutMe {
  @Input() personalInfo: PersonalInfo | null = null;
}
