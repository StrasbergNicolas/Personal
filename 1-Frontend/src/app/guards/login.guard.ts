import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario.service.service';
import { BehaviorSubject, Observable } from 'rxjs';


export const loginGuard = () => {

    const router = inject(Router)

    if (localStorage.getItem('usuario')){
        return true
    } else {
        alert('Necesita iniciar sesión')
        router.navigate(['/login'])
        return false
    }
};
