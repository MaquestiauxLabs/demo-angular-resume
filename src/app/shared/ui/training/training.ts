import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroAcademicCapSolid,
  heroBuildingOfficeSolid,
  heroCalendarSolid,
} from '@ng-icons/heroicons/solid';
import { TrainingModel } from '../../models';

@Component({
  selector: 'app-training',
  imports: [CommonModule, NgIcon],
  templateUrl: './training.html',
  providers: [
    provideIcons({
      heroAcademicCapSolid,
      heroBuildingOfficeSolid,
      heroCalendarSolid,
    }),
  ],
})
export class Training {
  @Input() training: TrainingModel | null = null;
}
