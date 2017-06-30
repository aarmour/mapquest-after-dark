import { browser, by, element } from 'protractor';

export class MapquestAfterDarkPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mad-root h1')).getText();
  }
}
