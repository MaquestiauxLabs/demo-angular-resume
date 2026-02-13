import { Component, Input } from '@angular/core';
import { PersonalInfoModel } from '../../shared/models';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  @Input() personalInfo: PersonalInfoModel | null = null;
  public currentYear: number = new Date().getFullYear();
}
