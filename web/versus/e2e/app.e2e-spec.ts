import { VersusPage } from './app.po';

describe('versus App', () => {
  let page: VersusPage;

  beforeEach(() => {
    page = new VersusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
