import { Editor } from '@hufe921/canvas-editor';
export interface IExportDocxOption {
    fileName: string;
    download?: boolean;
    toc?: boolean;
}
declare module '@hufe921/canvas-editor' {
    interface Command {
        executeExportDocx(options: IExportDocxOption): Promise<Blob>;
    }
}
export default function (editor: Editor): (options: IExportDocxOption) => Promise<Blob>;
