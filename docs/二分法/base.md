# 二分法

对于n个元素，使用二分法最多查找log2n次，使用简单查找最多查找n次

使用大O表示法的时候 `log` 一般表示`log2` ，因此使用二分法查找可以简说为 `log n`次

> 使用二分法的时候 元素都必须是有序排列的


```js
const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
};

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 1));
```