import { NameFilterPage } from './app.po';

describe('name-filter App', () => {
  let page: NameFilterPage;

  beforeEach(() => {
    page = new NameFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
