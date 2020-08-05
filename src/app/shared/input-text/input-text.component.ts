import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'pt-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string = '';
  @Input() leftSymbol: string;
  @Input() dataFormControl: FormControl;

  value;
  disabled: boolean;
  onTouched = () => {};
  onChange = (_:any) => {};
  
  constructor() { }

  ngOnInit() {}

  writeValue(obj: string): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
