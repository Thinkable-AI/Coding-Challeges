import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { ChatModule } from './shared/chat.module'; 

@Module({
  imports: [SharedModule,ChatModule],
  providers: [AppResolver],
})
export class AppModule {}
