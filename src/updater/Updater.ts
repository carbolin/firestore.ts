export interface Updater<T> {
    update(data: T): void | Promise<void>;
}
