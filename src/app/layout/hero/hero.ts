import { Component, Input } from '@angular/core';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroEnvelope, heroMapPin, heroPhoneArrowUpRight } from '@ng-icons/heroicons/outline';
import { PersonalInfo } from '../../shared/models';

@Component({
  selector: 'app-hero',
  imports: [NgIcon],
  templateUrl: './hero.html',
  providers: [
    provideIcons({
      heroMapPin,
      heroEnvelope,
      heroPhoneArrowUpRight,
      bootstrapLinkedin,
      bootstrapGithub,
    }),
  ],
})
export class Hero {
  @Input() personalInfo: PersonalInfo | null = null;
}
