import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static targets = ['button'];
  static actions = [['button', 'show']];

  show(e) {
    e.target.innerHTML = 'Clicked';
  }
}

const application = Application.start();
application.register('test', TestController);

describe('missing event type', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button" data-test-target="button">Test</button>
      </div>`;
  });

  it('calls action', () => {
    let button = document.querySelector('button');
    button.click();
    expect(button.innerHTML).toEqual('Clicked');
  });
});
