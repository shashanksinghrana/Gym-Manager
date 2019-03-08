import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[phoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private element: ElementRef) { }
  @HostListener('focus') onFocus(){
    console.log('On Focus');
  }
  @HostListener('blur') onBlur(){
    let value: string = this.element.nativeElement.value;
    this.element.nativeElement.value = '('+ value.substr(0,3)+')-'+value.substr(3,3)+'-'+value.substr(6,value.length-1);
  }

}
 