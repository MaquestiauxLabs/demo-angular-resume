import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapSolid } from '@ng-icons/heroicons/solid';
import { ExperienceModel } from '../../models';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, NgIcon],
  templateUrl: './experience.html',
  providers: [
    provideIcons({
      heroMapSolid,
    }),
  ],
})
export class Experience {
  @Input() experience: ExperienceModel | null = null;

  get companyInitials(): string {
    if (!this.experience?.company) return '';
    return this.experience.company
      .split(' ')
      .map((word) => word[0])
      .join('')
      .substring(0, 2);
  }
}
