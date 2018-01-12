/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * JSON Schema for `ng-package.json` description file
 */
export interface NgPackageConfig {
    $schema?: string;
    /**
     * The source folder of an Angular library. This is the folder where a `package.json` is located and defaults to cwd.
     */
    src?: string;
    /**
     * Destination folder where distributable binaries of the Angular library are written (default: `dist`).
     */
    dest?: string;
    /**
     * Internal working directory of ng-packagr where intermediate build files are stored (default: `.ng_pkg_build`).
     */
    workingDirectory?: string;
    /**
     * Path to sub-libraries.
     */
    paths?: {
        [k: string]: any;
    };
    /**
     * Description of the library's entry point.
     */
    lib?: {
        /**
         * Entry file to the public API (default: `src/public_api.ts`).
         */
        entryFile?: string;
        /**
         * Filename of the auto-generated flat module file (if empty, defaults to the package name as given in `package.json`).
         */
        flatModuleFile?: string;
        /**
         * An array of external dependencies that will be embedded in the final bundle.
         */
        embedded?: string[];
        /**
         * A map of external dependencies and their correspondent UMD module identifiers. Map keys are TypeScript / EcmaScript module identifiers. Map values are UMD module ids. The purpose of this map is to correctly bundle an UMD module file (with `rollup`). By default, `rxjs`, `tslib` and `@angular/*` dependency symbols are supported.
         */
        umdModuleIds?: {
            [k: string]: any;
        };
        /**
         * A property to indicate whether your library is going to be bundling jsx/tsx files. This passes through to tsconfig - see https://www.typescriptlang.org/docs/handbook/jsx.html
         */
        jsx?: "preserve" | "react" | "react-native" | "";
        /**
         * Embed assets in css file using data URIs - see https://css-tricks.com/data-uris
         */
        cssUrl?: "none" | "inline";
        [k: string]: any;
    };
}
