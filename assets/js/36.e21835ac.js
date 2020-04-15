(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{426:function(t,i,v){"use strict";v.r(i);var a=v(21),e=Object(a.a)({},function(){var t=this,i=t.$createElement,v=t._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),v("p",[t._v("这里描述的多态性算法是由 Java 平台提供的可重用功能块。所有这些都来自 Collections 类，\n并且都采用静态方法的形式，其第一个参数是要对其执行操作的集合。Java 平台提供的绝大多数算法操作 list 实例，\n但其中一些可以操作任意的 collection 实例，本节主要描述了以下算法：")]),t._v(" "),v("ul",[v("li",[t._v("排序")]),t._v(" "),v("li",[t._v("洗牌（打乱）")]),t._v(" "),v("li",[t._v("常规数据操作")]),t._v(" "),v("li",[t._v("搜索")]),t._v(" "),v("li",[t._v("组成")]),t._v(" "),v("li",[t._v("寻找极限值")])]),t._v(" "),v("h2",{attrs:{id:"排序（sorting）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#排序（sorting）","aria-hidden":"true"}},[t._v("#")]),t._v(" 排序（Sorting）")]),t._v(" "),v("p",[t._v("排序算法重新排列,这样它的元素列表显示按升序排序关系。提供两种形式的操作。\n简单的形式需要一个列表和排序根据元素的自然顺序。如果你不熟悉自然排序的概念,阅读对象排序部分。")]),t._v(" "),v("p",[t._v("排序操作使用稍微优化归并排序算法是快速和稳定的:")]),t._v(" "),v("ul",[v("li",[t._v("快速：？ 机器翻译的完全读不通")]),t._v(" "),v("li",[t._v("稳定：它不重新排序相等的元素。如果您对不同的属性重复排序相同的列表，这一点很重要。\n如果邮件程序的用户通过邮寄日期对收件箱排序，然后由发件人对其进行排序，则用户自然期望来自给定发件人的现在连续的邮件列表将仍然通过邮寄日期来排序。\n这只有在第二次排序稳定时才能保证。")])]),t._v(" "),v("p",[t._v("有两种方法使用")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Collections.sort(list)")]),t._v(";  //使用默认的")]),t._v(" "),v("li",[v("code",[t._v("Collections.sort(List<T> list, Comparator<? super T> c)")]),t._v("  // 提供比较器")])]),t._v(" "),v("h2",{attrs:{id:"洗牌-shuffling"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#洗牌-shuffling","aria-hidden":"true"}},[t._v("#")]),t._v(" 洗牌(Shuffling)")]),t._v(" "),v("p",[t._v("随机排序，重新排列了 List。以随机源为准，保证随机的公平性。")]),t._v(" "),v("p",[t._v("这个操作有两种操作形式：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Collections.shuffle(List<?> list)")]),t._v(" 使用默认的随机源")]),t._v(" "),v("li",[v("code",[t._v("Collections.shuffle(List<?> list, Random rnd)")]),t._v(" 指定随机源")])]),t._v(" "),v("h2",{attrs:{id:"常规数据操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常规数据操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 常规数据操作")]),t._v(" "),v("p",[t._v("提供了五个常规数据的算法：")]),t._v(" "),v("ul",[v("li",[t._v("反转 (reverse) ： 反转指定列表中元素的顺序。")]),t._v(" "),v("li",[t._v("填满 (fill)： 使用指定元素替换指定列表中的所有元素。这个操作一般用在初始化列表")]),t._v(" "),v("li",[t._v("复制（copy） ： 将所有元素从一个列表复制到另一个列表。")]),t._v(" "),v("li",[t._v("交换（swap） ： 在指定列表的指定位置处交换元素。")]),t._v(" "),v("li",[t._v("addAll      ： 将所有指定元素添加到指定 collection 中。")])]),t._v(" "),v("h2",{attrs:{id:"搜索（searching）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搜索（searching）","aria-hidden":"true"}},[t._v("#")]),t._v(" 搜索（Searching）")]),t._v(" "),v("p",[t._v("binarySearch ： 使用二分搜索法搜索指定列表，以获得指定对象。在进行此调用之前，必须根据列表元素的自然顺序对列表进行升序排序（通过 sort(List) 方法）。\n如果没有对列表进行排序，则结果是不确定的。")]),t._v(" "),v("p",[t._v("被找到时，返回大于 0 的插入位置。")]),t._v(" "),v("h2",{attrs:{id:"composition"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#composition","aria-hidden":"true"}},[t._v("#")]),t._v(" Composition")]),t._v(" "),v("p",[t._v("不相交和频率算法测试某些？")]),t._v(" "),v("ul",[v("li",[t._v("频率（frequency）： 返回指定元素在集合中出现的个数")]),t._v(" "),v("li",[t._v("不相交（disjoint） ：如果两个指定 collection 中没有相同的元素，则返回 true。")])]),t._v(" "),v("h2",{attrs:{id:"找到极值（finding-extreme-values）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#找到极值（finding-extreme-values）","aria-hidden":"true"}},[t._v("#")]),t._v(" 找到极值（Finding Extreme Values）")]),t._v(" "),v("p",[t._v("min 和 max 算法返回集合中的最小值 和 最大值。")])])},[],!1,null,null,null);i.default=e.exports}}]);