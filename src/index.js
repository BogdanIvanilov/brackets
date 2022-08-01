module.exports = function check(str, bracketsConfig) {
  let Openning = [];
  let Closing = [];
  let arr1 = str.split('');
  let i = 0;
  while(i < bracketsConfig.length){
    Openning.push(bracketsConfig[i][0]);
    Closing.push(bracketsConfig[i][1]);
    i++;
  }
  let obj1 = {};
  i = 0;
  while(i < Openning.length){
    obj1[Closing[i]] = Openning[i]
    i++;
  }
  let stack = [];
  let arr2 = [];
  i = 0;
  while(i < Openning.length) {
    if(Openning[i] === Closing[i]){
      arr2.push(Openning[i]);
    }
    i++;
  }
  let a = 0;
  i = 0;
  let i2 = 0;
  while(i < arr2.length){
    while(i2 < arr1.length){
      if(arr1[i2] === arr2[i]){
        a++;
      }
      i2++
    }
    if(a % 2 !== 0){
      return false;
    }else{
      let i3 = 0;
      while(i3<=arr1.length){
        if(arr1.indexOf(arr2[i]) !== -1){
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
        i3++;
      }
    }
    a = 0;
    i2 = 0;
    i++;
  }
  i = 0;
  while(i < arr1.length){
    if(Openning.includes(arr1[i])){
      stack.push(arr1[i]);
    }else{
      if(obj1[arr1[i]] !== stack.pop()) return false;
    }
    i++;
  }
  return stack.length === 0;
}
