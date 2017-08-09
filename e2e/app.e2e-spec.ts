import { PostsListAppPage } from './app.po';

describe('posts-list-app App', () => {
  let page: PostsListAppPage;

  beforeEach(() => {
    page = new PostsListAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
