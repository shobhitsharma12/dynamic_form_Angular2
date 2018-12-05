import { Component, ViewChild } from '@angular/core';

import { FormFieldComponent } from './forms/formfield/form.field.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('formField') formField: FormFieldComponent;

  name = 'Angular';
  public formFieldConfig: any[] = [{ label: 'Name', type: 'text' },{ label: 'Email', type: 'email' },{ label: 'Password', type: 'password' },{ label: 'Number', type: 'number' },{ label: 'Male', type: 'radio' },{ label: 'Female', type: 'radio' },{ label: 'Cricket', type: 'checkbox' },{ label: 'football', type: 'checkbox' },{ label: 'chess', type: 'checkbox' },{ label: 'submit', type: 'button' }];

  ngAfterViewInit() {
    const self = this;
    // window.a = this.formField
    setTimeout(() => {
      console.log(self.formField.getValue());
    }, 5000)
  }

  onFieldUpdate(data) {
    console.log(data);
  }
}
