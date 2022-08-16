import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColoring]'
})
export class ColoringDirective {

  @Input() forecolor = "";
  @Input() backgroundcolor = "";

  @HostBinding('style.backgroundColor') bgColor:string="";
  @HostBinding('style.color') color:string="";


  ngOnInit(){
    this.bgColor = this.backgroundcolor;
    this.color = this.forecolor
  }

}
