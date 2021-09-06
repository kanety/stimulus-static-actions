import { Context } from '@hotwired/stimulus';
import ActionSetter from './action_setter';

let oConnect = Context.prototype.connect;
let oTargetConnected = Context.prototype.targetConnected;

Context.prototype.connect = function() {
  this.actionSetter = new ActionSetter(this);
  this.actionSetter.run();
  return oConnect.apply(this, arguments);
};

Context.prototype.targetConnected = function() {
  this.actionSetter.run();
  return oTargetConnected.apply(this, arguments);
}
