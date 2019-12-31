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
const user_1 = require("./user");
let singer = class singer {
};
__decorate([
    typeorm_1.OneToOne(() => user_1.user, (user) => user.singer, { primary: true, nullable: false, }),
    typeorm_1.JoinColumn({ name: 'singer_id' }),
    __metadata("design:type", user_1.user)
], singer.prototype, "singer", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 100,
        name: "singer_name"
    }),
    __metadata("design:type", String)
], singer.prototype, "singer_name", void 0);
singer = __decorate([
    typeorm_1.Entity("singer", { schema: "public" }),
    typeorm_1.Index("singer_singer_id_uindex", ["singer",], { unique: true })
], singer);
exports.singer = singer;
//# sourceMappingURL=singer.js.map