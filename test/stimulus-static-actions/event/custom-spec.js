import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static targets = ['button'];
  static actions = [['button', ':show->show']];

  show(e) {
    e.target.innerHTML = 'Clicked';
  }
}

const application = Application.start();
application.register('test', TestController);

describe('custom event', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button" data-test-target="button">Test</button>
      </div>`;
  });

  it('calls action', () => {
    $('button').dispatchEvent(new CustomEvent('test:show'));
    expect($('button').innerHTML).toEqual('Clicked');
  });
});
