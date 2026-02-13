import { Component } from '@angular/core';
import { Hero } from './hero/hero';

import { personalInfo } from '@data';
import { PersonalInfo } from '@shared/models';
import { AboutMe } from './about-me/about-me';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Hero, Footer, AboutMe],
  templateUrl: './layout.html',
})
export class Layout {
  readonly personalInfo: PersonalInfo = personalInfo;
}
