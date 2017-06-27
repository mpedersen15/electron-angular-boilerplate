import { ElectronMusicPlayerPage } from './app.po';

describe('electron-music-player App', () => {
  let page: ElectronMusicPlayerPage;

  beforeEach(() => {
    page = new ElectronMusicPlayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
