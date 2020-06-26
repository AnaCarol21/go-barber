export default interface IStorage {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
