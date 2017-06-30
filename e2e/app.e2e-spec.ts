import { MapquestAfterDarkPage } from './app.po';

describe('mapquest-after-dark App', () => {
  let page: MapquestAfterDarkPage;

  beforeEach(() => {
    page = new MapquestAfterDarkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mad!!');
  });
});
