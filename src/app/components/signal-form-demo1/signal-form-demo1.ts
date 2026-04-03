import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-demo1',
  imports: [FormField],
  templateUrl: './signal-form-demo1.html',
  styleUrl: './signal-form-demo1.css',
})
export class SignalFormDemo1 {
  loginModel = signal({ email: '', password: '' });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Email Format is not correct' });
    minLength(schema.email, 5, { message: 'Email Should have minimum 5 chars' });
  });
}
