import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageModel } from '../../models';
import { getLanguageFlag, languageLevels } from '../../utils';

@Component({
  selector: 'app-language',
  imports: [CommonModule],
  templateUrl: './language.html',
  styles: ``,
})
export class Language {
  @Input() language: LanguageModel | null = null;
  public getLanguageFlag(code: string): string {
    return getLanguageFlag(code);
  }
  public languageLevels = languageLevels;
  public get activeIndex(): number {
    return this.language ? languageLevels.indexOf(this.language.level) : -1;
  }
}
