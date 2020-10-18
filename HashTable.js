// Basic HashTable
// not O(1) but O(n) because of char-count-loop.
// key must be string and not more than one spacing per input
// uses prime for arraylength
// No chaining

class BasicHashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size); // m
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total + value) % this.keyMap.length;
    }
    return total;
  }
}

// Enhanced HashTable
// protection for large strings input
// multiply total with prime number for more randomness
// get,set,hash,keys,values in separate functions.
// set has no protection for duplicate keys input and get will only get the first key set input.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size); // m
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    //create index value by hashing
    const index = this._hash(key);
    //check if array exist in keyMap
    if (!this.keyMap[index]) {
      //if not exist ,create array
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this.keyMap;
  }

  get(key) {
    // hash key
    const index = this._hash(key);
    //check for value in keymap
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keyArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArray.includes(this.keyMap[i][j][0])) {
            keyArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArray;
  }
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArray;
  }
}
let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('plum', '#DDA0DD');
ht.set('plum', '#DDA0DD');
ht.set('plum', '#DDA0DD');
const test = ht.keys();
console.log(test);
