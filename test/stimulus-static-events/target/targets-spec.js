import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static targets = ['button'];
  static actions = [['button', 'click->show']];

  show(e) {
    e.target.innerHTML = 'Clicked';
  }
}

const application = Application.start();
application.register('test', TestController);

describe('target', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button" data-test-target="button">Test</button>
        <button type="button" data-test-target="button">Test</button>
      </div>`;
  });

  it('calls event listener', () => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.click());
    expect(buttons[0].innerHTML).toEqual('Clicked');
    expect(buttons[1].innerHTML).toEqual('Clicked');
  });
});
