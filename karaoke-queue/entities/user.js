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
const singer_1 = require("./singer");
let user = class user {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer",
        name: "id"
    }),
    __metadata("design:type", Number)
], user.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 50,
        name: "user_name"
    }),
    __metadata("design:type", String)
], user.prototype, "user_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 100,
        name: "user_email"
    }),
    __metadata("design:type", String)
], user.prototype, "user_email", void 0);
__decorate([
    typeorm_1.OneToOne(() => singer_1.singer, (singer) => singer.singer),
    __metadata("design:type", singer_1.singer)
], user.prototype, "singer", void 0);
user = __decorate([
    typeorm_1.Entity("user", { schema: "public" }),
    typeorm_1.Index("user_user_name_uindex", ["user_name",], { unique: true })
], user);
exports.user = user;
//# sourceMappingURL=user.js.map