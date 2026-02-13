import { LanguageModel } from '@/app/shared/models/language';
import { Language } from '@/app/shared/ui/language/language';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-languages',
  imports: [CommonModule, Language],
  templateUrl: './languages.html',
  styles: ``,
})
export class Languages {
  @Input() languages: LanguageModel[] = [];
}
