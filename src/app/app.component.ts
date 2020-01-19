import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}{{firstName}}</h1>`,
})
export class AppComponent  {
   name = 'Angular'; 
  firstName='CJC';

}
