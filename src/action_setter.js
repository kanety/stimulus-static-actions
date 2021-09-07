import Action from './action';
import { readInheritableStaticArrayValues } from './inheritable_statics';

export default class ActionSetter {
  constructor(context) {
    this.context = context;
    this.controller = context.controller;

    let definitions = readInheritableStaticArrayValues(this.controller.constructor, 'actions');
    this.actions = definitions.map((definition) => {
      return new Action(this.controller.identifier, definition);
    });
  }

  run() {
    this.actions.forEach((action) => {
      let targets = this.resolveTargets(action);
      targets.forEach((target) => {
        this.attachAction(target, action);
      });
    });
  };

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

  attachAction(target, action) {
    let description = action.description;
    let currentDescriptions = (target.dataset['action'] || '').split(' ');
    if (!currentDescriptions.some((currentDescription) => currentDescription == description)) {
      currentDescriptions.push(description);
    }
    target.dataset['action'] = currentDescriptions.join(' ').trim();
  }
}
