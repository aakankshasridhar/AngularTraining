import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[textcolor]'
})
export class TextColorDirective implements OnInit, OnChanges
{
    @Input() textcolor="";

    constructor(private targetElement: ElementRef, private domApi:Renderer2){
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changeColor();
    }

    ngOnInit(){
        this.changeColor();
    }

    changeColor():void{
        //this.domApi.setStyle(this.targetElement.nativeElement, "color", this.textcolor||"red");
        this.color=this.textcolor||"red";
    }

    @HostBinding('style.color') color = "red";
    
    @HostListener('mouseenter')
    onMouseOverOnHostElement(){
        this.color="blue";
    }

    @HostListener('mouseleave')
    onMouseLeaveOnHostElement(){
        this.color="yellow";
    }
}