const generateCombinations = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].name] = [];
    for (let item of arr[i].values) {
      if (item.active) {
        obj[arr[i].name].push(item);
      }
    }
  }
  //Generating product attributes to use for future purposes
  let keys = Object.keys(obj);
  let outerArgs = [];
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = obj[keys[i]].map((item) => item.name);
    outerArgs.push(obj[keys[i]]);
  }
  //Generating combinations by passing different array of attributes
  function createCombinations(...args) {
    var r = [],
      max = args.length - 1;
    function helper(arr, i) {
      for (var j = 0, l = args[i].length; j < l; j++) {
        var a = arr.slice(0); // clone arr
        a.push({ [keys[i]]: args[i][j] });
        if (i === max) r.push(a);
        else helper(a, i + 1);
      }
    }
    helper([], 0);
    return r.flat();
  }
  let result = createCombinations(...outerArgs);
  return JSON.stringify(result)
    .slice(1, -1)
    .replace(/[{}]/g, '')
    .replaceAll(',', '|');
};

export default generateCombinations;
