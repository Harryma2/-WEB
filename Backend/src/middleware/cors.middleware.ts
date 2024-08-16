import * as cors from '@koa/cors';

export class CorsMiddleware {
    static resolve() {
        return cors({
            origin: '*', // 允许所有来源
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 更改为 allowMethods
            allowHeaders: ['Content-Type', 'Authorization'], // 更改为 allowHeaders
        });
    }
}
