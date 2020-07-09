import IMailtTemplateProvider from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider
  implements IMailtTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}
