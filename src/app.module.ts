import { Module } from '@nestjs/common';
import { RedisModule } from '@libs/redis';

@Module({
  imports: [RedisModule.forRoot({ config: { url: 'redis://localhost:6379' } })],
  controllers: [],
  providers: [],
})
export class AppModule {}
