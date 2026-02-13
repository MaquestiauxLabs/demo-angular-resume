import { Component, Input } from '@angular/core';
import { PersonalInfo } from '../../shared/models';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  @Input() personalInfo: PersonalInfo | null = null;
  public currentYear: number = new Date().getFullYear();
}
