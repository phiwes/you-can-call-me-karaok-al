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
const song_1 = require("./song");
let artist = class artist {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer",
        name: "artist_id"
    }),
    __metadata("design:type", Number)
], artist.prototype, "artist_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 100,
        name: "artist_first_name"
    }),
    __metadata("design:type", String)
], artist.prototype, "artist_first_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 100,
        name: "artist_last_name"
    }),
    __metadata("design:type", String)
], artist.prototype, "artist_last_name", void 0);
__decorate([
    typeorm_1.OneToMany(() => song_1.song, (song) => song.songArtist),
    __metadata("design:type", Array)
], artist.prototype, "songs", void 0);
artist = __decorate([
    typeorm_1.Entity("artist", { schema: "public" }),
    typeorm_1.Index("artist_artist_id_uindex", ["artist_id",], { unique: true })
], artist);
exports.artist = artist;
//# sourceMappingURL=artist.js.map