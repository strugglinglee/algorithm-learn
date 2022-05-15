// 生成链表的构造函数
function ListNode(value) {
  this.value = value;
  this.next = null;
}

//创建链表结点
const node = new ListNode(1);
node.next = new ListNode(2);

//在头结点和第一个结点中插入一个结点
//创建目标结点
const node3 = new ListNode(3);
//将目标结点的next指针指向node2
node3.next = node.next;
//将前驱结点的next指针指向目标结点
node.next = node3;

//删除一个结点
//重点是定位目标结点的前驱结点
// 利用node1定位到node3
const target = node.next;
node.next = target.next;

//访问目标结点
//在一个长度为 n（n>10） 的链表里，定位它的第 10 个结点
//记录目标结点的位置
const index = 10;
//设一个游标指向链表第一个结点，从第一个结点开始遍历
let node = head;
// 反复遍历到第10个结点为止
for (let i = 0; i < index && node; i++) {
  console.log(node.value);
  node = node.next;
}
