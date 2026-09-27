/* codepage.js (C) 2013-present SheetJS -- http://sheetjs.com */
// CommonJS declarations corrected by Stackline; upstream runtime is unchanged.
declare const cptable: cptable.CP$Module;
declare namespace cptable {
/** Codepage index type (integer or string representation) */
export type CP$Index = number | string;

/* Individual codepage converter */
export interface CP$Conv {
	enc: {[n: string]: number; };
	dec: {[n: number]: string; };
}

/** Encode input type (string, array of characters, Buffer) */
export type CP$String = string | string[] | Uint8Array;

/** Encode output / decode input type */
export type CP$Data = string | number[] | Uint8Array;

/** General utilities */
export interface CP$Utils {
	decode(cp: CP$Index, data: CP$Data): string;
	encode(cp: CP$Index, data: CP$String, opts?: any): CP$Data;
	hascp(n: number): boolean;
	magic: {[cp: string]: string};
}

/** CommonJS runtime export, including its numeric codepage index. */
export interface CP$Module {
	/** Version string */
	version: string;

	/** Utility Functions */
	utils: CP$Utils;

	/** Codepage Converters */
	[cp: number]: CP$Conv;
}
}
export = cptable;
