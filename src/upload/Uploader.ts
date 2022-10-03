export interface Uploader {
    upload(data: any[]): Promise<void> | void;
}
