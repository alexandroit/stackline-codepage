import cp from '../';
const euro: string = cp.utils.decode(1252, [128]);
const converter: number = cp[1252].enc['€'];
void [euro, converter];
