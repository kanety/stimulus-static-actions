import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static targets = ['button'];
  static actions = [
    ['button', 'click->show', { if: 'status' }],
    ['button', 'click->show', { if: 'getStatus' }]
  ];

  status() {
    return false;
  }

  get getStatus() {
    return false;
  }

  show(e) {
    e.target.innerHTML = 'Clicked';
  }
}

const application = Application.start();
application.register('test', TestController);

describe('if option', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button" data-test-target="button">Test</button>
      </div>`;
  });

  it('does not call event listener', () => {
    let button = document.querySelector('button');
    button.click();
    expect(button.innerHTML).toEqual('Test');
  });
});
