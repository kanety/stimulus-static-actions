export default class Action {
  constructor(identifier, definition) {
    this.identifier = identifier;
    this.name = definition[0];
    this.descriptor = definition[1];
    this.options = definition[2] || {};
  };

  get description() {
    if (this.descriptor.includes('->')) {
      return this.descriptor.replace(/->/, `->${this.identifier}#`);
    } else {
      return `${this.identifier}#${this.descriptor}`;
    }
  }
}
