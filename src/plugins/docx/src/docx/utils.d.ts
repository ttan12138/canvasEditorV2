export declare function loadImage(src: string): Promise<HTMLImageElement>;
export declare function saveAs(blob: Blob, name: string): void;
export declare function parseDocxNumber(value: string | null | undefined): number;
export declare function measureFontMetrics(font: string | undefined, size: number): {
    ascent: number;
    descent: number;
};
export declare function measureTextWidth(font: string | undefined, size: number, text: string): number;
