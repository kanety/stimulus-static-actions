import { Application, Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static actions = [['element', 'click->show']];

  show(e) {
    $('button').innerHTML = 'Clicked';
  }
}

const application = Application.start();
application.register('test', TestController);

describe('target element', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
        <button type="button">Test</button>
      </div>`;
  });

  it('calls action', () => {
    $('button').click();
    expect($('button').innerHTML).toEqual('Clicked');
  });
});
