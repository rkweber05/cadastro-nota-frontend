import {Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";

// toda rota é um objeto
export const routes: Routes = [
    { // para deixar o meu /home como padrão, quando abrir a página cair direto nela
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { // meu component pai, que vai ficar fixo - navbar
        path: '',
        component: LayoutComponent,
        children: [
            { // meu componente onde vai ter o restante do meu conteudo
                path: 'home',
                loadChildren: () => import('./components/home/home.routes')
            },
            {
                path: 'novo',
                loadChildren: () => import('./components/nova-nota/nota.routes')
            }
        ]
    }
];
