import { CompilerOptions } from '@angular/core';

export interface Clothing {
    name: string;
    category: string;
    colors: string[];
    imgUri: string;
    wearsTotal: number;
    wearsLeft: number;
}  