import { Component } from '@angular/core';
import { Hero } from './hero/hero';

import { personalInfo } from '@data';
import { PersonalInfo } from '@shared/models';

@Component({
  selector: 'app-layout',
  imports: [Hero],
  templateUrl: './layout.html',
})
export class Layout {
  readonly personalInfo: PersonalInfo = personalInfo;
}
