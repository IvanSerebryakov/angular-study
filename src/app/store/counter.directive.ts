import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  Attribute,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';

@Directive({
  selector: '[counterOf]',
})
export class CounterDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}
  @Input('counterOf')
  counter: number;

  ngOnChanges(changes: SimpleChanges) {}
}
