import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'pt-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  // host: {
  //   'attr.placeholder': 'placeholder'
  // }
})
export class InputTextComponent implements OnInit, ControlValueAccessor {

  // _value: string;
  // @Input() set value(val){
  //   this._value = val;
  //   // this.writeValue(val);
  // }
  // get value() {
  //   return this._value;
  // }
  
  @Input() placeholder: string = '';
  @Input() leftSymbol: string;
  @Input() dataFormControl: FormControl;

  // @ContentChild(string) value: string; 

  // controlValue;
  value;
  disabled: boolean;
  onTouched = () => {};
  onChange = (_:any) => {};
  
  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: string): void {
    console.log('write', obj);
    this.value = obj;
    // this.onChange(this.value);
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
