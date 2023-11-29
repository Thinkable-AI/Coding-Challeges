import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';

@Module({
  imports: [SharedModule],
  providers: [AppResolver],
})
export class AppModule {}
