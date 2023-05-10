export class todoItemData {
  dueDate!: new () => Date;
  description!: String;
  priority!: string;
}

export interface IPriorities {
  value: string;
}

export enum formValidationMessage {
  DESCRIPTION = 'The field description is required.',
  DUE_DATE = 'The field due date is required.',
  PRIORITY = 'The field priority is required.',
}
