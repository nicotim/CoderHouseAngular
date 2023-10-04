import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  userForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.userForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
      materia: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9]+@.*mail\.com$'
      )]]
    })
  };

  get emailControl() {
    return this.userForm.controls['email']
  }
  
  get nombreControl() {
    return this.userForm.controls['nombre']
  }
  
  get materiaControl() {
    return this.userForm.controls['materia']
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert("Inscripcion Fallida")
    }else{
      console.log(this.userForm.value);
    }
  }
}
