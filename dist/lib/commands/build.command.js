"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packagr_1 = require("../ng-v5/packagr");
/** @stable */
exports.build = (opts) => packagr_1.ngPackagr()
    .withProviders([
    packagr_1.provideProject(opts.project)
])
    .build();
//# sourceMappingURL=build.command.js.map