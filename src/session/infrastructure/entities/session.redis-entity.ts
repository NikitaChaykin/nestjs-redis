import { Transform } from 'class-transformer';

import { PrimaryKey, RedisEntity } from '@libs/redis';

@RedisEntity({ keyPrefix: SessionRedisEntity.name, ttlMilliseconds: 2000 })
export class SessionRedisEntity {
  @PrimaryKey()
  readonly id!: string;

  ip: string;

  userAgent: string;

  userId: string;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  loggedAt: Date;
}
