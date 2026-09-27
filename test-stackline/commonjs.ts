import cp = require('../');
import type { CP$Conv, CP$Data, CP$Index, CP$Module } from '../';
const page: CP$Index = 1252;
const table: CP$Conv = cp[1252];
const bytes: CP$Data = cp.utils.encode(page, 'Café');
const moduleValue: CP$Module = cp;
const text: string = moduleValue.utils.decode(page, bytes);
void [table, text];
