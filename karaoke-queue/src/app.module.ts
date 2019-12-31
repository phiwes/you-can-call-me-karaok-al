import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Artist} from './entities/artist.entity';
import {Singer} from './entities/singer.entity';
import {Song} from './entities/song.entity';
import {User} from './auth/user.entity';
import {Performance} from './entities/performance.entity';
import {AuthModule} from './auth/auth.module';



@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'you_can_call_me_karaok_al',
    password: 'Karaoke4Life!',
    database: 'you_can_call_me_karaok_al',
    entities: [Artist, Singer, Song, Performance, User ],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
