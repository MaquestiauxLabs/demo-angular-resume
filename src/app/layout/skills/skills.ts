import { SkillCategoryModel } from '@/app/shared/models';
import { Skill } from '@/app/shared/ui/skill/skill';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, Skill],
  templateUrl: './skills.html',
  styles: ``,
})
export class Skills {
  @Input() skills: SkillCategoryModel[] = [];
}
