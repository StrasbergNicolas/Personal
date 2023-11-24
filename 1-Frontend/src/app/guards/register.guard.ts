/*
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario.service.service';
import { BehaviorSubject, Observable } from 'rxjs';

export const RegisterGuard = () => {

    const router = inject(Router)

    if (localStorage.getItem('usuario')) {
        router.navigate(['/login'])
      return false;
    } else {
      alert('Tenés sesión iniciada');
      router.navigate(['/login'])
      return true;
    }
  }
*/