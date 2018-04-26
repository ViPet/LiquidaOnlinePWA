interface IDictionary<T> {
  add(key: string, value: T): void;
  remove(key: string): void;
  containsKey(key: string): boolean;
  item(key: string): T;
  keys(): string[];
  values(): T[];
}

export class Dictionary<T> implements IDictionary<T> {
  _keys: string[] = [];
  _values: T[] = [];

  add(key: string, value: T) {
    this._keys.push(key);
    this._values.push(value);
  }

  remove(key: string) {
    const index = this._keys.indexOf(key, 0);
    this._keys.splice(index, 1);
    this._values.splice(index, 1);

    delete this[key];
  }

  keys(): string[] {
    return this._keys;
  }

  values(): T[] {
    return this._values;
  }

  containsKey(key: string) {
    if (typeof this[key] === 'undefined') {
      return false;
    }

    return true;
  }

  item(key: string): T {
    const index = this._keys.indexOf(key, 0);
    return this._values[index];
  }

  toLookup(): IDictionary<T> {
    return this;
  }
}
