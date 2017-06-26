import { TweetPage } from './app.po';

describe('tweet App', () => {
  let page: TweetPage;

  beforeEach(() => {
    page = new TweetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
