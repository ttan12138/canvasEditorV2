import { Command } from '@hufe921/canvas-editor';
declare module '@hufe921/canvas-editor' {
    interface Command {
        executeImportDocx(options: IImportDocxOption): void;
    }
}
export interface IImportDocxOption {
    arrayBuffer: ArrayBuffer;
    isAppend?: boolean;
}
export default function (command: Command): (options: IImportDocxOption) => Promise<void>;
