import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginForm!: FormGroup;
loginError: boolean = false

constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){
  this.loginForm = this.fb.group({
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required]
  })
}

onSubmit(): void{
  if (this.loginForm.valid) {
    const { usuario, contrasena } = this.loginForm.value;
    const success = this.authService.login(usuario, contrasena);

    if (success) {
      this.router.navigate(['/form'])
    } else{
      this.loginError = true; 
      
    }
  } else{
    this.loginForm.markAllAsTouched();
    return;
  
  } 
}
}



/* else{
    const { usuario, contrasena } = this.loginForm.value;
    if (usuario.value.trim === "") {
       usuario.classList.add("is-invalid");
    } else if (usuario.value.trim === "" && contrasena.value.trim === ""){
       usuario.classList.add("is-invalid");
       contrasena.classList.add("is-invalid");
      
    }
  } */