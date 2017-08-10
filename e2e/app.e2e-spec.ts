import { NgbootstrapPage } from './app.po';

describe('ngbootstrap App', () => {
  let page: NgbootstrapPage;

  beforeEach(() => {
    page = new NgbootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
