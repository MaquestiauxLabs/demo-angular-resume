import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { SkillModel } from '../../models';

@Component({
  selector: 'app-skill',
  imports: [CommonModule, NgIcon],
  templateUrl: './skill.html',
  providers: [
    provideIcons({
      heroStarSolid,
    }),
  ],
})
export class Skill {
  @Input() skill: SkillModel | null = null;

  public getSkillLevel = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 1;
      case 'intermediate':
        return 2;
      case 'advanced':
        return 4;
      case 'expert':
        return 5;
      default:
        return 0;
    }
  };
}
