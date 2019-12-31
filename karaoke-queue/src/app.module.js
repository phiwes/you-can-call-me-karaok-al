"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const artist_entity_1 = require("./entities/artist.entity");
const singer_entity_1 = require("./entities/singer.entity");
const song_entity_1 = require("./entities/song.entity");
const user_entity_1 = require("./auth/user.entity");
const performance_entity_1 = require("./entities/performance.entity");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'you_can_call_me_karaok_al',
                password: 'Karaoke4Life!',
                database: 'you_can_call_me_karaok_al',
                entities: [artist_entity_1.Artist, singer_entity_1.Singer, song_entity_1.Song, performance_entity_1.Performance, user_entity_1.User],
                synchronize: true,
            })],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map