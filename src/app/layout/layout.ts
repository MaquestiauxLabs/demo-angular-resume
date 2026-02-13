import { Component } from '@angular/core';
import { Hero } from './hero/hero';

import { educations, personalInfo, skills } from '@data';
import { EducationModel, PersonalInfoModel, SkillCategoryModel } from '@shared/models';
import { AboutMe } from './about-me/about-me';
import { Educations } from './educations/educations';
import { Footer } from './footer/footer';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-layout',
  imports: [Hero, Footer, AboutMe, Skills, Educations],
  templateUrl: './layout.html',
})
export class Layout {
  readonly personalInfo: PersonalInfoModel = personalInfo as PersonalInfoModel;
  readonly skills: SkillCategoryModel[] = skills as SkillCategoryModel[];
  readonly educations: EducationModel[] = educations as EducationModel[];
}
