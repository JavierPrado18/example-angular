import { Routes } from '@angular/router';
import { ProveedorComponent } from './admin/modulo01/pages/proveedor/proveedor.component';

export const routes: Routes = [
    {
        path:"modulo01",
        loadChildren:()=>import('./admin/modulo01/modulo01.routes').then(r=>r.modulo01Routes)
    }

];
