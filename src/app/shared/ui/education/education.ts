import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroAcademicCapSolid, heroMapSolid } from '@ng-icons/heroicons/solid';
import { EducationModel } from '../../models';

@Component({
  selector: 'app-education',
  imports: [CommonModule, NgIcon],
  templateUrl: './education.html',
  providers: [
    provideIcons({
      heroAcademicCapSolid,
      heroMapSolid,
    }),
  ],
})
export class Education {
  @Input() education: EducationModel | undefined;
}
