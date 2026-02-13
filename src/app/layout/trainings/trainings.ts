import { TrainingModel } from '@/app/shared/models/training';
import { Training } from '@/app/shared/ui/training/training';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trainings',
  imports: [CommonModule, Training],
  templateUrl: './trainings.html',
  styles: ``,
})
export class Trainings {
  @Input() trainings: TrainingModel[] = [];
}
