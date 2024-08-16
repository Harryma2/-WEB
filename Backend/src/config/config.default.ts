import { join } from 'path';
import { MidwayConfig } from '@midwayjs/core';

export default {
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mahaoyu7236',
    database: 'InterestGroup',
    synchronize: true,
    logging: false,
    entities: [join(__dirname, '../entity/*.ts')],
  },
  keys: '123456',
  koa: {
    port: 7001,
  },
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    allowedHeaders: 'Content-Type, Authorization',
  },
} as MidwayConfig;
