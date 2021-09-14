import Action from './action';
import { readInheritableStaticArrayValues } from './inheritable_statics';

export default class ActionSet {
  constructor(context) {
    this.context = context;
    this.controller = context.controller;
    this.actions = [];
  }

  run() {
    this.add(readInheritableStaticArrayValues(this.controller.constructor, 'actions'));
  }

  add(definitions) {
    let actions = definitions.map((definition) => new Action(this.controller.identifier, definition));

    actions.forEach((action) => {
      let targets = this.resolveTargets(action);
      targets.forEach((target) => {
        this.addAction(target, action);
      });
      this.actions.push(action);
    });
  }

  remove(definitions) {
    let actions = definitions.map((definition) => new Action(this.controller.identifier, definition));

    actions.forEach((action) => {
      let targets = this.resolveTargets(action);
      targets.forEach((target) => {
        this.removeAction(target, action);
      });
      this.actions = this.actions.filter((a) => a.description != action.description);
    });
  }

  resolveTargets(action) {
    let targets = this.findTargets(action.name);

    if (action.options.if) {
      return this.filterTargets(targets, action.options.if);
    } else {
      return targets;
    }
  }

  findTargets(name) {
    if (name == 'element') {
      return [this.controller.element];
    } else if (this.controller[`${name}Targets`]) {
      return [].concat(this.controller[`${name}Targets`]);
    } else {
      return [];
    }
  }

  filterTargets(targets, ifvalue) {
    return targets.filter((target) => {
      let property = this.controller[ifvalue];
      if (typeof(property) == 'function') {
        property = property.apply(this.controller, target);
      }
      return property != false
    });
  }

  addAction(target, action) {
    let description = action.description;
    let currentDescriptions = (target.dataset['action'] || '').split(' ');
    if (!currentDescriptions.some((currentDescription) => currentDescription == description)) {
      currentDescriptions.push(description);
    }
    target.dataset['action'] = currentDescriptions.join(' ').trim();
  }

  removeAction(target, action) {
    let description = action.description;
    let currentDescriptions = (target.dataset['action'] || '').split(' ');
    currentDescriptions = currentDescriptions.filter((currentDescription) => currentDescription != description);
    target.dataset['action'] = currentDescriptions.join(' ').trim();
  }
}
