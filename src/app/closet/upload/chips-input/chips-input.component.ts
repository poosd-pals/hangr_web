import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';

export interface Tag {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'chips-input',
  templateUrl: 'chips-input.component.html',
  styleUrls: ['chips-input.component.css'],
})
export class ChipsInputComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [
    {name: 'Casual'},
    {name: 'Business'},
    {name: 'Summer'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add a new tag
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}