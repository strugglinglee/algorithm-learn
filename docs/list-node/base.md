# 链表

和数组相似，又是有序的列表，都是`线性结构`（有且只有一个前驱，有且只有一个后继）

## 链表的组成

数据单位的名称叫做`“结点”`，结点和结点的分布，在内存中可以是离散的

在链表中，每一个结点的结构都包括了两部分内容：

1. **数据域**(存储的是当前结点所存储的数据值)
2. **指针域**(代表下一个结点-后继结点的引用)

``` js
{
    // 数据域
    val: 1,
    // 指针域，指向下一个结点
    next: {
        val:2,
        next: ...
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

链表的结点间关系是通过 next 指针来维系的。因此，链表元素的添加和删除操作，本质上都是在围绕 next 指针做文章。

## 链表的删除

重点:**定位目标结点的前驱结点**

``` js
const target = node1.next
node1.next = target.next
```

## 链表节点的创建

在使用构造函数创建结点时，传入 val （数据域对应的值内容）、指定 next （下一个链表结点）即可：

```javascript
const node = new ListNode(1)
node.next = new ListNode(2)
```

## 链表节点的插入

```javascript
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3
```
