// 选择排序法
// 一次需要检查n个元素，但随后检查的元素数依次为n -1, n -2, …, 2和1。平均每次检查的元素数为1/2 ×n，因此运行时间为O(n×1/2×n)。但大O表示法省略诸如1/2这样的常数
// 复杂度O(n^2)
const select_rank = (list) => {
  let new_list = [];

  while (list.length) {
    let max, i;
    list.map((item, index) => {
      if (!max || max > item) {
        max = item;
        i = index;
      }
    });
    new_list.push(max);
    list.splice(i, 1);
  }
  return new_list;
};

// console.log(select_rank([2, 1, 3, 4, 8, 6, 7, 5, 9]));

// 递归

const countdown = (num) => {
  //基线条件
  if (num < 0) return;
  console.log(num);
  num--;
  //递归条件
  countdown(num);
};

// countdown(8);

const getSum = (list, sum = 0) => {
  if (list.length) {
    const pre = list.splice(0, 1)[0] + sum;
    return getSum(list, pre);
  } else {
    return sum;
  }
};

const a = getSum([1, 2, 3, 4]);
console.log(a, "sum");

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

console.log(quickSort([8, 8, 7, 5, 2, 3, 2, 9]));
