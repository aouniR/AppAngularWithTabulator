import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-row',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './add-row.component.html',
})
export class AddRowComponent {
  @Output() formSubmit = new EventEmitter();
  @Output() formCancel = new EventEmitter();

  addRowForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addRowForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],
      address: ['', Validators.required],
      imageUrl: ['', Validators.required],
      contactNumber: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addRowForm.valid) {
      this.formSubmit.emit(this.addRowForm.value);
    }
  }

  onCancel(): void {
    this.formCancel.emit();
  }
}
