import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

// import { initialDataResolver } from 'app/app.resolvers';
// import { AuthGuard } from 'app/core/auth/guards/auth.guard';
// import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
// import { LandingHomeComponent } from './modules/landing/home/home.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('app/modules/landing/home/home.routes')
    },
];
