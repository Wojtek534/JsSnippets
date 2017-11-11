http://2ality.com/2015/01/es6-maps-sets.html
// Set
let set = new Set();
set.add("name", "Joe");

// Map
let map = new Map();
map.set("Name", "Joe");
//
let mappy = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']]);
for (let key of mappy.keys()){
    console.log(key);
    console.log(map.values)
    console.log(mappy.get(key));
}
