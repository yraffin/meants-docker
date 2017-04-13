import { MeantsPage } from './app.po';

describe('meants App', () => {
  let page: MeantsPage;

  beforeEach(() => {
    page = new MeantsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
