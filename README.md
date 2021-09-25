# stimulus-static-actions

A stimulus extension to define actions in controller.

## Dependencies

* stimulus 3.0

## Installation

Install from npm:

    $ npm install @kanety/stimulus-static-actions --save

## Usage

Import `@kanety/stimulus-static-actions`:

```javascript
import '@kanety/stimulus-static-actions';
```

Then define `actions` as static class properties in a controller:

```javascript
import { Controller } from '@hotwired/stimulus';

class TestController extends Controller {
  static actions = [
    ['element', 'click->show']
  ];

  show(e) {
    // some codes here...
  }
}
```

Actions are attached when the controller is connected.
They are also attached when target elements are added in the controller.

## Action definition

Action definition takes 3 arguments:

1. target element to attach actions
2. event type and method name, which is same as `data-action` of stimulus
3. options

### Target element

Following kind of target elements could be specified:

* name of stimulus target
* `element` that is an element of stimulus controller

For example:

```javascript
class TestController extends Controller {
  static targets = ['button'];
  static actions = [
    ['button', 'click->show'],  // specify name of stimulus target
    ['element', 'click->show']  // specify element of stimulus controller
  ];
```

### Options

You can use `if` option for checking some conditions to attach actions.
This option takes a method or a getter of the controller.
For example:

```javascript
class TestController extends Controller {
  static actions = [
    ['element', 'click->show', { if: 'isSpecificBrowser'}]
  ];

  get isSpecificBrowser() {
    return navigator.userAgent.match(/SpecificBrowser/);
  }
}
```

In this example, the action is attached only if `userAgent` includes `SpecificBrowser`.

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
