"use strict";
/*
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// @link https://github.com/angular/angular/blob/24bf3e2a251634811096b939e61d63297934579e/packages/compiler-cli/src/transformers/util.ts#L14
const GENERATED_FILES = /(.*?)\.(ngfactory|shim\.ngstyle|ngstyle|ngsummary)\.(js|d\.ts|ts)$/;
const tsickle = require("tsickle/src/tsickle");
// @link https://github.com/angular/angular/blob/24bf3e2a251634811096b939e61d63297934579e/packages/compiler-cli/src/main.ts#L41-L80
function createEmitCallback(options) {
    const transformDecorators = options.annotationsAs !== 'decorators';
    const transformTypesToClosure = options.annotateForClosureCompiler;
    if (!transformDecorators && !transformTypesToClosure) {
        return undefined;
    }
    if (transformDecorators) {
        // This is needed as a workaround for https://github.com/angular/tsickle/issues/635
        // Otherwise tsickle might emit references to non imported values
        // as TypeScript elided the import.
        options.emitDecoratorMetadata = true;
    }
    const tsickleHost = {
        shouldSkipTsickleProcessing: (fileName) => /\.d\.ts$/.test(fileName) || GENERATED_FILES.test(fileName),
        pathToModuleName: (context, importPath) => '',
        shouldIgnoreWarningsForPath: (filePath) => false,
        fileNameToModuleId: (fileName) => fileName,
        googmodule: false,
        untyped: true,
        convertIndexImportShorthand: false, transformDecorators, transformTypesToClosure,
    };
    return ({ program, targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles, customTransformers = {}, host, options }) => tsickle.emitWithTsickle(program, tsickleHost, host, options, targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles, {
        beforeTs: customTransformers.before,
        afterTs: customTransformers.after,
    });
}
exports.createEmitCallback = createEmitCallback;
//# sourceMappingURL=ngc-patches.js.map