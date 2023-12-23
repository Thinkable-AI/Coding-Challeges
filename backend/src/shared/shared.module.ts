import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { Connection } from 'mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get<string>('MONGODB_URI'),
          connectionFactory: (connection: Connection) => {
            /* eslint-disable @typescript-eslint/no-var-requires */
            connection.plugin(require('mongoose-autopopulate'));
            return connection;
          },
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => {
        return {
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          autoSchemaFile: join(process.cwd(), 'src/graphql/schema.graphql'),
          uploads: false,
          sortSchema: true,
          introspection: true,
          playground: false,
          debug: configService.get<boolean>('GRAPHQL_DEBUG'),
          cors: {
            credentials: true,
            origin: true,
          },
          context: ({ req, res }) => ({ req, res }),
          installSubscriptionHandlers: true,
          subscriptions: {
            'graphql-ws': true,
          },
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    MessageModule,
  ],
})
export class SharedModule {}
