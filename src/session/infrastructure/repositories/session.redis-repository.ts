import { Injectable } from '@nestjs/common';

import { InjectRedis, Redis, Repository } from '@libs/redis';
import { SessionRedisEntity } from '../entities';

@Injectable()
export class SessionRedisRepository extends Repository<SessionRedisEntity> {
  constructor(@InjectRedis() private readonly redis: Redis) {
    super(redis, {
      baseClass: SessionRedisEntity,
      keyspaceNotificationOptions: {
        expired: {
          passEntityToHandler: true,
        },
        deleted: true,
      },
    });
  }

  protected async onKeyExpired(entity: SessionRedisEntity): Promise<void> {
    console.log(entity);
  }

  protected async onKeyDeleted(data): Promise<void> {
    console.log(data);
  }
}
