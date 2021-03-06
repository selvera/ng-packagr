import * as ts from 'typescript';
import { TsConfig } from '../steps/ngc';
import { NgEntryPoint } from './entry-point';
import { NgPackage } from './package';
/**
 * Build artefacts generated for an entry point (Angular library).
 *
 * The artefacts include distribution-ready 'binaries' as well as temporary files and
 * intermediate build output.
 */
export declare class NgArtefacts {
    /** Directory for temporary files */
    readonly stageDir: string;
    /** Directory for build output */
    readonly outDir: string;
    private _extras;
    constructor(entryPoint: NgEntryPoint, pkg: NgPackage);
    extras<T>(key: string): T;
    extras<T>(key: string, value: T): any;
    tsConfig: TsConfig;
    tsSources: ts.TransformationResult<ts.SourceFile>;
    template(file: string): string;
    template(file: string, content: string): any;
    templates(): string[];
    stylesheet(file: string): string;
    stylesheet(file: string, content: string): any;
    stylesheets(): string[];
    es2015EntryFile: string;
    typingsEntryFile: string;
    fesm15BundleFile: string;
    fesm5BundleFile: string;
    umdBundleFile: string;
    aotBundleFile: string;
}
