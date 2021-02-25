import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(4)]],
    password2: ['', Validators.required],
    terminos: [false, Validators.required]
  }, {
    validators: this.passwordIguales('password', 'password2')
  })

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  crearUsuario() {
    this.formSubmitted = true;

    if(this.registerForm.invalid) {
      return;
    }

    this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe( resp => {
        this.router.navigateByUrl('/');
      }, err => {
          Swal.fire({
            icon: 'error',
            title: err.error.msg
          })
      })

  }

  campoNoValido(campo: string): boolean {
      if(this.registerForm.get(campo).invalid && this.formSubmitted){
        return true
      }else {
        return false
      }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }

  contrasenasNoValidas() {
    return this.registerForm.get('password').value != this.registerForm.get("password2").value && this.formSubmitted;
  }

  passwordIguales(password: string, password2: string) {
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.get(password);
      const pass2 = formGroup.get(password2);

      if(pass1.value === pass2.value) {
        pass2.setErrors(null);
      }else {
        pass2.setErrors({noEsIgual: true})
      }

    }
  }
}
