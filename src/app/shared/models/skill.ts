export interface SkillModel {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'basic';
}

export interface SkillCategoryModel {
  category: string;
  skills: SkillModel[];
}
