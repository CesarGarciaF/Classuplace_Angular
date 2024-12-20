import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',              class: '' },
    { path: '/icons',         title: 'Mis Cursos',        icon:'nc-planet',            class: '' },
    { path: '/maps',          title: 'Tendencias',        icon:'nc-basket',            class: '' },
    // { path: '/notifications', title: 'Notificaciones',    icon:'nc-bell-55',           class: '' },
    { path: '/user',          title: 'Perfil',            icon:'nc-single-02',         class: 'active-pro' },
    // { path: '/table',         title: 'Configuración',     icon:'nc-settings-gear-65',  class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
