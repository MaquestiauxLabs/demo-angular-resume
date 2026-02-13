import { Component } from '@angular/core';
import { Hero } from './hero/hero';

import { educations, languages, personalInfo, skills, trainings } from '@data';
import {
  EducationModel,
  LanguageModel,
  PersonalInfoModel,
  SkillCategoryModel,
  TrainingModel,
} from '@shared/models';
import { AboutMe } from './about-me/about-me';
import { Educations } from './educations/educations';
import { Footer } from './footer/footer';
import { Languages } from './languages/languages';
import { Skills } from './skills/skills';
import { Trainings } from './trainings/trainings';

@Component({
  selector: 'app-layout',
  imports: [Hero, Footer, AboutMe, Skills, Educations, Trainings, Languages],
  templateUrl: './layout.html',
})
export class Layout {
  readonly personalInfo: PersonalInfoModel = personalInfo as PersonalInfoModel;
  readonly skills: SkillCategoryModel[] = skills as SkillCategoryModel[];
  readonly educations: EducationModel[] = educations as EducationModel[];
  readonly trainings: TrainingModel[] = trainings as TrainingModel[];
  readonly languages: LanguageModel[] = languages as LanguageModel[];
}
