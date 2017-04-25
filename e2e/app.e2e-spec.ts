import { Angular2HybridPage } from './app.po';

describe('angular2-hybrid App', () => {
  let page: Angular2HybridPage;

  beforeEach(() => {
    page = new Angular2HybridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
