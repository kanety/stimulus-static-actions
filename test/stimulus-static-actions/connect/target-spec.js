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

describe('connect target', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="test">
      </div>`;
  });

  beforeEach(() => {
    $('div').insertAdjacentHTML('beforeend',
      '<button type="button" data-test-target="button">Test</button>'
    );
  });

  it('attaches actions', () => {
    $('button').click();
    expect($('button').innerHTML).toEqual('Clicked');
  });
});
