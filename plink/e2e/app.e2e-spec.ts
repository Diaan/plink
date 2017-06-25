import { PlinkPage } from './app.po';

describe('plink App', () => {
  let page: PlinkPage;

  beforeEach(() => {
    page = new PlinkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
