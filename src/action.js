export default class Action {
  constructor(identifier, definition) {
    this.identifier = identifier;
    this.name = definition[0];
    this.descriptor = definition[1];
    this.options = definition[2] || {};
  };

  get description() {
    let descriptor = this.descriptor;
    if (descriptor.match(/^:/)) {
      descriptor = descriptor.replace(/^:/, `${this.identifier}:`)
    }
    if (descriptor.includes('->')) {
      return descriptor.replace(/->/, `->${this.identifier}#`);
    } else {
      return `${this.identifier}#${descriptor}`;
    }
  }
}
