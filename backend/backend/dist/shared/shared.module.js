"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
const message_module_1 = require("./message/message.module");
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async (configService) => {
                    return {
                        uri: configService.get('MONGODB_URI'),
                        connectionFactory: (connection) => {
                            connection.plugin(require('mongoose-autopopulate'));
                            return connection;
                        },
                    };
                },
                inject: [config_1.ConfigService],
                imports: [config_1.ConfigModule],
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                useFactory: async (configService) => {
                    return {
                        plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
                        autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/graphql/schema.graphql'),
                        uploads: false,
                        sortSchema: true,
                        introspection: true,
                        playground: false,
                        debug: configService.get('GRAPHQL_DEBUG'),
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
                inject: [config_1.ConfigService],
                imports: [config_1.ConfigModule],
            }),
            message_module_1.MessageModule,
        ],
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map