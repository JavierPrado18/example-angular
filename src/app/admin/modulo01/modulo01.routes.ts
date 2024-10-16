import { Routes } from "@angular/router";
import { ProveedorComponent } from "./pages/proveedor/proveedor.component";
import { EmpleadoComponent } from "./pages/empleado/empleado.component";

export const modulo01Routes: Routes = [
    {
        path:"proveedor",
        component:ProveedorComponent
    },
    {
        path:"empleado",
        component:EmpleadoComponent
    }

];
