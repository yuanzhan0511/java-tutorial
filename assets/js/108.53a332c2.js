(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{535:function(a,s,n){"use strict";n.r(s);var e=n(21),t=Object(e.a)({},function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"更新jar文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新jar文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新Jar文件")]),a._v(" "),n("p",[a._v("Jar 工具提供了一个 u 选项，您可以通过修改它的清单或添加文件来更新现有 Jar 文件的内容。")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("jar uf jar-file input-file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("ul",[n("li",[a._v("u : 表示更新现有的 jar")]),a._v(" "),n("li",[a._v("f : 通过文件指定")]),a._v(" "),n("li",[a._v("jar-file : 文件路径")]),a._v(" "),n("li",[a._v("input-file(s) : 空格分割的多个文件或单个文件")])]),a._v(" "),n("p",[a._v("把指定的文件添加到现有的 jar 文件红，jar 中已有文件将被覆盖；也可以指定新添加的文件添加到 jar 中的哪个目录下\n参考 "),n("RouterLink",{attrs:{to:"/deployment/jar/buil.html"}},[a._v("创建 Jar 文件部分")])],1),a._v(" "),n("h2",{attrs:{id:"列子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#列子","aria-hidden":"true"}},[a._v("#")]),a._v(" 列子")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把一个文件添加到")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这里填写的路径，会被响应的添加到jar中")]),a._v("\n$ jar uf TicTacToe.jar images/new.gif\n\n比如下面是未添加前的jar内容\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" xx.class\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("- images\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("- 1.gif\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("- new.gif     "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个是新增的")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("使用 -c 更改路径")]),a._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("$ jar uf TicTacToe.jar -C images new.gif\n\n比如下面是未添加前的 jar 内容\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" xx.class\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("- images\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("- 1.gif\n "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("- new.gif     "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个是新增的")]),a._v("\n\n-c 后面第一个是目录，第二个是文件；看起来很奇怪，看明白了吗；把目录给忽略了；我们执行下面的命令来验证猜想\n\n$ jar uf TicTacToe.jar -C audio new.gif\naudio\\new.gif: 没有这个文件或目录\n\n居然报错。原来 -c 后面第一个参数是要忽略的目录，第二个参数则是目录下的文件名；\n而且是两个参数合并确定一个具体的路径；写到 jar 的时候，把目录给忽略\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);