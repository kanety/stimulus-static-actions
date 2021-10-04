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

  it('calls action', () => {
    $$('button')[0].click();
    $$('button')[1].click();
    expect($$('button')[0].innerHTML).toEqual('Clicked');
    expect($$('button')[1].innerHTML).toEqual('Clicked');
  });
});
