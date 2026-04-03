import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-form.html',
  styleUrl: './model-form.css',
})
export class ModelForm {
  signupForm!: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    // this.createForm_FormGroup()
    this.createForm_FormBuilder();
  }
  createForm_FormGroup() {
    this.signupForm = new FormGroup(
      {
        firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
        lastName: new FormControl('Kohli', [Validators.required, Validators.minLength(5)]),
        email: new FormControl('Kohli@gmail.com', [Validators.required, Validators.email]),
        address: new FormGroup({
          city: new FormControl(),
          state: new FormControl(),
          pincode: new FormControl(),
        }),
      },
      { updateOn: 'blur' },
    );
  }

  createForm_FormBuilder() {
    this.signupForm = this.formBuilder.group({
      firstName: ['virat', [Validators.required, Validators.minLength(5)]],
      lastName: ['kohli', [Validators.required, Validators.minLength(5)]],
      email: ['virat@gmail.com', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        city: [],
        state: [],
        pincode: [],
      }),
    });
  }

  submitMyForm() {
    console.log(this.signupForm);
  }

  setFormValue() {
    this.signupForm.setValue({ firstName: 'Virat-123' });
  }

  patchFormValue() {
    this.signupForm.patchValue({ firstName: 'Virat-123' });
  }
}
