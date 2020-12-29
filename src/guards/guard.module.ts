import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from 'nestjs-throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 1,
      limit: 2,
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class GuardModule {}
