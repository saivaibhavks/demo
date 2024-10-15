const arr = [1, 2, 3, 4, 5];

Array.prototype.customMap = (callbackFunction) => {
  //console.log("this", this);
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callbackFunction(this[i], i, this));
  }

  return temp;
};

arr.customMap((item, index, arr) => {
  console.log("item", item);
});
