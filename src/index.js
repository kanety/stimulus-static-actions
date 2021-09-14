import { Context } from '@hotwired/stimulus';
import ActionSet from './action_set';

let oConnect = Context.prototype.connect;
let oTargetConnected = Context.prototype.targetConnected;

Context.prototype.connect = function() {
  this.actionSet = new ActionSet(this);
  this.actionSet.run();
  return oConnect.apply(this, arguments);
};

Context.prototype.targetConnected = function() {
  this.actionSet.run();
  return oTargetConnected.apply(this, arguments);
}
