import { LearningManagementSystemPage } from './app.po';

describe('learning-management-system App', () => {
  let page: LearningManagementSystemPage;

  beforeEach(() => {
    page = new LearningManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
