import { Routes, RouterModule } from '@angular/router';

import { MomentListComponent } from './components/moment-list/moment-list.component';
import { MomentDetailComponent } from './components/moment-detail/moment-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'moments',
        pathMatch: 'full'
    },
    {
        path: 'moments',
        component: MomentListComponent
    },
    {
        path: 'moments/:id',
        component: MomentDetailComponent
    },
    {
        path: '**',
        redirectTo: 'moments'
    }
];

export const routing = RouterModule.forRoot(routes);