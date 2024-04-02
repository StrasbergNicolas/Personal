import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioServiceService } from '../services/usuario.service.service';
import { BehaviorSubject, Observable } from 'rxjs';


export const loginGuard = () => {

    const router = inject(Router)
    
    const usuario = localStorage.getItem('usuario');

    // Verificar si usuario es null
    if (!usuario) {
        alert('No es administrador')
        router.navigate(['/list'])
        return false
    }

    // Si usuario no es null, continuar con la verificación del rol
    const usuarioparse = JSON.parse(usuario);
    if (usuarioparse && usuarioparse.rol) {
        return true;
    } else {
        alert('No es administrador')
        router.navigate(['/list'])
        return false;
    }

}
