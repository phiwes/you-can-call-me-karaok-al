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
let performance = class performance {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer",
        name: "performance_id"
    }),
    __metadata("design:type", Number)
], performance.prototype, "performance_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 50,
        name: "performance_name"
    }),
    __metadata("design:type", String)
], performance.prototype, "performance_name", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: false,
        name: "performance_date"
    }),
    __metadata("design:type", String)
], performance.prototype, "performance_date", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 50,
        name: "performance_location"
    }),
    __metadata("design:type", String)
], performance.prototype, "performance_location", void 0);
performance = __decorate([
    typeorm_1.Entity("performance", { schema: "public" }),
    typeorm_1.Index("performance_performance_id_uindex", ["performance_id",], { unique: true })
], performance);
exports.performance = performance;
//# sourceMappingURL=performance.js.map