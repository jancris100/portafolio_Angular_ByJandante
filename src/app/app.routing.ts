import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";



import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CrearProyectosComponent } from './components/crear-proyectos/crear-proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [

    { path: '', component: SobreMiComponent},
    { path: 'sobre-mi', component: SobreMiComponent},
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'crear-proyectos', component: CrearProyectosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: ErrorComponent}

]

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);