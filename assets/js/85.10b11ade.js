(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{547:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/9178390.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"代码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码优化"}},[t._v("#")]),t._v(" 代码优化")]),t._v(" "),s("h3",{attrs:{id:"代码模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码模块化"}},[t._v("#")]),t._v(" 代码模块化")]),t._v(" "),s("p",[t._v("常用的地方封装成单独的组件，分为工具类和组件类，在需要用到的地方引用，而不是写过多重复的代码，每一个组件都要明确含义，复用性越高越好，可配置\n型越强越好，包括咱们的css也可以通过less和sass的自定义css变量来减少重复代码。")]),t._v(" "),s("h3",{attrs:{id:"for循环设置key值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for循环设置key值"}},[t._v("#")]),t._v(" for循环设置key值")]),t._v(" "),s("p",[t._v("在用v-for进行数据遍历渲染的时候，为每一项都设置唯一的key值，为了让Vue内部核心代码能更快地找到该条数据，当旧值和新值去对比的时候，可以更快的\n定位到diff。")]),t._v(" "),s("h3",{attrs:{id:"设计模式优化代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式优化代码"}},[t._v("#")]),t._v(" 设计模式优化代码")]),t._v(" "),s("p",[t._v("享元模式、策略模式、状态模式优化if-else")]),t._v(" "),s("h3",{attrs:{id:"批量引入优化加载-required-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量引入优化加载-required-context"}},[t._v("#")]),t._v(" 批量引入优化加载 required.context")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("三个参数(需要引入文件夹地址，布尔值（是否需要引入文件夹下的子文件夹数据），需要引入的类型)")])]),t._v(" "),s("p",[t._v("可以批量引入某个文件下,不需要一个一个引入加载")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("全局注册路由、动态路由\n实例"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("：引入pages文件夹下的（model1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue，model2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue）文件\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" required"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".vue")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// r为一个方法")]),t._v("\nr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// r.keys() => ['./model1.index.vue','./model2.index.vue']")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"减少请求数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少请求数量"}},[t._v("#")]),t._v(" 减少请求数量")]),t._v(" "),s("h3",{attrs:{id:"使用keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用keep-alive"}},[t._v("#")]),t._v(" 使用keep-alive")]),t._v(" "),s("p",[t._v("keep-alive是Vue提供的一个比较抽象的组件，用来对组件进行缓存，从而节省性能。")]),t._v(" "),s("h3",{attrs:{id:"浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93357692",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器缓存"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("使用cach-control或expires这类强缓存时，缓存不过期的情况下，不向服务器发送请求，使用本地缓存。强缓存过期时，会使用last-modified或etag这类协商缓存，向服务器发送请求，如果资源没有变化，浏览器继续从本地缓存加载资源；如果资源更新了，则服务器将更新后的资源发送到浏览器")]),t._v(" "),s("h3",{attrs:{id:"不使用css-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不使用css-import"}},[t._v("#")]),t._v(" 不使用CSS @import")]),t._v(" "),s("p",[t._v("CSS的@import会造成额外的请求")]),t._v(" "),s("h3",{attrs:{id:"避免使用空的src和href"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免使用空的src和href"}},[t._v("#")]),t._v(" 避免使用空的src和href")]),t._v(" "),s("p",[t._v("a标签设置空的href，会重定向到当前的页面地址")]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h3",{attrs:{id:"按需引入-使用的一些第三方库可以通过按需引入的方式加载。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按需引入-使用的一些第三方库可以通过按需引入的方式加载。"}},[t._v("#")]),t._v(" 按需引入，使用的一些第三方库可以通过按需引入的方式加载。")]),t._v(" "),s("p",[t._v("比如在使用element-ui库的时候，可以只引入需要用到的组件")]),t._v(" "),s("h3",{attrs:{id:"理解vue的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解vue的生命周期"}},[t._v("#")]),t._v(" 理解Vue的生命周期")]),t._v(" "),s("p",[t._v("不要造成内部泄漏，使用过后的全局变量在组件销毁后重新置为null。")]),t._v(" "),s("h3",{attrs:{id:"vue路由设置成懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue路由设置成懒加载"}},[t._v("#")]),t._v(" Vue路由设置成懒加载")]),t._v(" "),s("p",[t._v("首屏渲染的时候，能够加快渲染速度")])])}),[],!1,null,null,null);a.default=r.exports}}]);