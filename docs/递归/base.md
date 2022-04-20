# 递归

编写递归函数时，必须告诉它何时停止递归。

正因为如此，每个递归函数都有两部分：

- 基线条件（base case）
- 递归条件（recursive case）
  
> 递归条件指的是函数调用自己，而基线条件则指的是函数不再调用自己，从而避免形成无限循环。

## 求和
```js
const getSum = (list, sum = 0) => {
  if (list.length) {
    const pre = list.splice(0, 1)[0] + sum;
    return getSum(list, pre);
  } else {
    return sum;
  }
};

console.log(getSum([1, 2, 3, 4]));
```
## 快排
```js
const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  let less = [];
  let greater = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};
console.log(quickSort([2,3,4,1,6,3,9]))
```