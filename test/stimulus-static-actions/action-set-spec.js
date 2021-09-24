import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static targets = ['button'];
  static customActions = [['button', 'click->show']];

  connect() {
    this.context.actionSet.add(this.constructor.customActions);
  }

  show(e) {
    e.target.innerHTML = 'Clicked';
    this.context.actionSet.remove(this.constructor.customActions);
  }
}

const application = Application.start();
application.register('test', TestController);

describe('reconnect controller', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
      <button type="button" data-test-target="button">Test</button>
      </div>`;
  });

  it('attaches actions', () => {
    let button = document.querySelector('button');
    button.click();
    expect(button.innerHTML).toEqual('Clicked');
    button.innerHTML = 'Test';
    button.click();
    expect(button.innerHTML).toEqual('Clicked');
  });
});
