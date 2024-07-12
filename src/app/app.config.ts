import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(), provideAnimationsAsync(), // declarada, consegue dai fazer request com o backend,
        provideNativeDateAdapter(),
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'pt-BR'
        }
    ]
};
