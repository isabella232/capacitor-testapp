import WebView, { CONTEXT_REF } from '../helpers/WebView';

interface ElementActionOptions {
  visibilityTimeout?: number;
}

interface TapButtonOptions extends ElementActionOptions {
}

interface OpenMenuOptions extends ElementActionOptions {
  delayForAnimation?: boolean;
}

enum Device {
  Mobile = 'mobile'
}
class IonicE2E {
  static async native() {
    WebView.switchToContext(CONTEXT_REF.NATIVE);
  }
  static async web() {
    WebView.switchToContext(CONTEXT_REF.WEBVIEW);
  }
  static async setDevice(device: Device) {
    switch (device) {
      case Device.Mobile: {
        await browser.setWindowSize(375, 812);
      }
    }
  }

  static async waitElement(selector: string, { visibilityTimeout = 5000 }: ElementActionOptions = {}) {
    const el = await $(selector);
    await el.waitForDisplayed({ timeout: visibilityTimeout });
    return el;
  }

  static async tapButton(buttonTitle, { visibilityTimeout }: TapButtonOptions = { visibilityTimeout: 5000 }) {
    const button = await $(`ion-button=${buttonTitle}`);
    await button.waitForDisplayed({ timeout: visibilityTimeout });
    await (await expect(button)).toBeDisplayed();

    await button.click();
  }

  static async openMenu({ delayForAnimation = true, visibilityTimeout = 5000 }: OpenMenuOptions = {}) {
    const menuButton = await $('ion-menu-button');
    await menuButton.waitForDisplayed({ timeout: visibilityTimeout });
    await menuButton.click();

    // Let the menu animate open/closed
    if (delayForAnimation) {
      await browser.pause(300);
    }
  }
}

describe('home page', () => {
  beforeEach(async () => {
    await IonicE2E.setDevice(Device.Mobile);
  });

  const openPage = async (itemText: string) => {
    // Go back to home
    await browser.url('/home');

    await IonicE2E.openMenu();

    const menu = await $('#inbox-list');
    await menu.waitForDisplayed({ timeout: 5000 });

    const linkItem = await menu.$(`ion-item*=${itemText}`);
    await linkItem.waitForDisplayed({ timeout: 5000 });
    await linkItem.click();

    const menuElement = await $('ion-menu');
    await menuElement.waitForDisplayed({ timeout: 5000, reverse: true });
  }

  // Action sheet

  it('should open action sheet', async () => {
    await openPage('Action Sheet');

    await IonicE2E.tapButton('Show Actions');

    const pwaActionSheet = await $('pwa-action-sheet');
    await pwaActionSheet.waitForDisplayed({ timeout: 5000 });
    await (await expect(pwaActionSheet)).toBeDisplayed();
  });

  // App

  it('should open app page', async () => {
    await openPage('App');

    await IonicE2E.tapButton('Get Info');
    await IonicE2E.tapButton('Get Status');
    await IonicE2E.tapButton('Can Open Url');
    await IonicE2E.tapButton('Open Url');
    await IonicE2E.tapButton('Test Failing Call');
  });

  // Browser

  it('should do browser', async () => {
    await openPage('Browser');

    await IonicE2E.tapButton('Open URL');
    // iOS only
    // await IonicE2E.tapButton(('Open and then close URL');
    await IonicE2E.tapButton('Close most recently opened');
  });

  // Camera

  it.only('should do camera', async () => {
    await openPage('Camera');

    await IonicE2E.tapButton('Check Permissions');
    await IonicE2E.tapButton('Request Camera Permissions');
    await IonicE2E.tapButton('Request Photo Permissions');
    await IonicE2E.tapButton('Request All Permissions');
    await IonicE2E.tapButton('Take Picture');

    let shutter = await IonicE2E.waitElement('>>>.shutter', { visibilityTimeout: 20000 });
    await shutter.click();
    let accept = await IonicE2E.waitElement('>>>.accept-use', { visibilityTimeout: 20000 });
    await accept.click();

    await IonicE2E.tapButton('Take Picture and Save', { visibilityTimeout: 20000 });

    shutter = await IonicE2E.waitElement('>>>.shutter', { visibilityTimeout: 20000 });
    await shutter.click();
    accept = await IonicE2E.waitElement('>>>.accept-use', { visibilityTimeout: 20000 });
    await accept.click();

    await IonicE2E.tapButton('Choose Picture');
    await IonicE2E.tapButton('Prompt');
  });
});
