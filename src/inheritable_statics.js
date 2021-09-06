export function readInheritableStaticArrayValues(constructor, propertyName) {
  let ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce((values, constructor) => {
    getOwnStaticArrayValues(constructor, propertyName).forEach(name => values.add(name));
    return values;
  }, new Set));
}

function getAncestorsForConstructor(constructor) {
  const ancestors = [];
  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }
  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  const definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}
