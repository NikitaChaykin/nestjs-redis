import { Module, OnModuleInit } from '@nestjs/common';

import { SessionRedisRepository } from './infrastructure';
import * as crypto from 'crypto';

@Module({
  controllers: [],
  exports: [],
  imports: [],
  providers: [SessionRedisRepository],
})
export class SessionModule implements OnModuleInit {
  constructor(private readonly r: SessionRedisRepository) {}

  async onModuleInit() {
    const entity = { id: crypto.randomUUID(), userId: 'ffff', ip: '222', userAgent: 'dd', loggedAt: new Date() };
    const entity2 = { id: crypto.randomUUID(), userId: 'ffff', ip: '222', userAgent: 'dd', loggedAt: new Date() };
    await this.r.set(entity2);
    await this.r.delete({});
  }
}
