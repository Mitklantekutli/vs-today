import { VersusTodayPage } from './app.po';

describe('versus-today App', () => {
  let page: VersusTodayPage;

  beforeEach(() => {
    page = new VersusTodayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
