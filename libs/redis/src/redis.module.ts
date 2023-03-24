import { DynamicModule, Module } from '@nestjs/common';

import { RedisCoreModule } from './redis.core-module';
import { RedisModuleAsyncOptions, RedisModuleOptions } from './redis.interfaces';

@Module({})
export class RedisModule {
  public static forRoot(options: RedisModuleOptions, connection?: string): DynamicModule {
    return {
      exports: [RedisCoreModule],
      imports: [RedisCoreModule.forRoot(options, connection)],
      module: RedisModule,
    };
  }

  public static forRootAsync(options: RedisModuleAsyncOptions, connection?: string): DynamicModule {
    return {
      exports: [RedisCoreModule],
      imports: [RedisCoreModule.forRootAsync(options, connection)],
      module: RedisModule,
    };
  }
}
