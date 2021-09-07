import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static actions = [['unknownElement', 'click->show']];

  show(e) {
    e.target.innerHTML = 'Clicked';
  }
}

const application = Application.start();
application.register('test', TestController);

describe('target window', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button">Test</button>
      </div>`;
  });

  it('does not call action', () => {
    let button = document.querySelector('button');
    button.click();
    expect(button.innerHTML).toEqual('Test');
  });
});
