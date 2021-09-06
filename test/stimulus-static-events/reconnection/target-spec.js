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

describe('reconnect target', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button" id="button" data-test-target="button">Test</button>
      </div>`;
  });

  beforeEach(() => {
    document.querySelector('button').remove();
  });

  beforeEach(() => {
    document.querySelector('div').insertAdjacentHTML('beforeend',
      '<button type="button" id="button" data-test-target="button">Test</button>'
    );
  });

  it('reconnects actions', () => {
    let button = document.querySelector('button');
    button.click();
    expect(button.innerHTML).toEqual('Clicked');
  });
});
