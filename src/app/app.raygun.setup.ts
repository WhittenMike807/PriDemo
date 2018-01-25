import * as rg4js from 'raygun4js';
import { ErrorHandler } from '@angular/core';
const VERSION_NUMBER = '1.0.0.0';
rg4js('apiKey', 'Rwtnch5Lqk+EA2zwnKZYWQ==');
rg4js('setVersion', VERSION_NUMBER);
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);
export class RaygunErrorHandler implements ErrorHandler {
    handleError(e: any) {
        rg4js('send', {
            error: e,
        });
    }
}