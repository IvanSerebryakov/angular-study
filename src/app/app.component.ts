import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<store></store>',
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
