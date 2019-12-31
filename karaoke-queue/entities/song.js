"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const artist_1 = require("./artist");
let song = class song {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer",
        name: "song_id"
    }),
    __metadata("design:type", Number)
], song.prototype, "song_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 100,
        name: "song_name"
    }),
    __metadata("design:type", String)
], song.prototype, "song_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 300,
        name: "song_url"
    }),
    __metadata("design:type", String)
], song.prototype, "song_url", void 0);
__decorate([
    typeorm_1.ManyToOne(() => artist_1.artist, (artist) => artist.songs, {}),
    typeorm_1.JoinColumn({ name: 'song_artist_id' }),
    __metadata("design:type", artist_1.artist)
], song.prototype, "songArtist", void 0);
song = __decorate([
    typeorm_1.Entity("song", { schema: "public" }),
    typeorm_1.Index("song_song_id_uindex", ["song_id",], { unique: true }),
    typeorm_1.Index("song_song_url_uindex", ["song_url",], { unique: true })
], song);
exports.song = song;
//# sourceMappingURL=song.js.map