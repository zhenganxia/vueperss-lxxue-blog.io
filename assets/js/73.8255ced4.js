(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{534:function(t,s,a){"use strict";a.r(s);var e=a(25),u=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"添加submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加submodule"}},[t._v("#")]),t._v(" 添加submodule")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git submodule add https://github.com/phpgao/BaiduSubmit.git usr/plugins/BaiduSubmit\n\n查看项目.gitmodules和.git/config这两个文件，应该会发现相关信息已被记录下来！\n")])])]),a("h3",{attrs:{id:"更新submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新submodule"}},[t._v("#")]),t._v(" 更新submodule")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("当clone项目时有子模块存在时，第一次是不会顺便clone出子模块的，需要执行一些命令\ngit clone xxx.git\n\n# 初始化子模块\ngit submodule init\n\n# 将子模块的文件check出来\ngit submodule update\n\n# 现在所有子模块已经把被checkout到本地\n")])])]),a("h3",{attrs:{id:"删除submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除submodule"}},[t._v("#")]),t._v(" 删除submodule")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git没有提供类似 git submodule remove 那么easy的方法，所以我们要借助deinit。所以如果之前你是直接编辑.gitmodules文件就以为删除了那你就错了！\n\n# 我们以BaiduSubmit为例，之前我们添加在了 usr/plugins/BaiduSubmit\n# 首先我们反初始化\ngit submodule deinit usr/plugins/BaiduSubmit\n\n# 此时 .git/config 已被重写，BaiduSubmit的相关信息已经不存在了\ngit rm usr/plugins/BaiduSubmit\n# 这时，子模块文件被删除，同时 .gitmodules 文件中的相关信息被删除\n\n# 还有一种情况，就是子模块刚被add，但是还没有commit的时候，这时如果反悔了，但是还想保留工作现场，可以这样。\n# 如果不想保留，看下一条\ngit rm --cached usr/plugins/BaiduSubmit\nrm -rf .git/modules/usr/plugins/BaiduSubmit\n\n# 或者直接全部删除\ngit submodule deinit --force usr/plugins/BaiduSubmit\n")])])]),a("h3",{attrs:{id:"子模块修改并提交submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子模块修改并提交submodule"}},[t._v("#")]),t._v(" 子模块修改并提交submodule")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#子模块修改\ncd xx/xx/sub\ngit add .\ngit commit -m "备注"\ngit push 分支名\n')])])]),a("h3",{attrs:{id:"更新所有子模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新所有子模块"}},[t._v("#")]),t._v(" 更新所有子模块")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git submodule update\ngit submodule foreach git checkout master \ngit submodule foreach git pull \ncd 子模块路径\ngit checkout 子模块分支\n")])])]),a("h3",{attrs:{id:"子仓库分支游离状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子仓库分支游离状态"}},[t._v("#")]),t._v(" 子仓库分支游离状态")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("原因：使用 git submodule update 的时候，子模块会checkout到最新的子模块 commit id，\n从而变成'游离'的HEAD状态，因为本地找不到这个最新的commit id\n解决：git submodule update --merge\n")])])])])}),[],!1,null,null,null);s.default=u.exports}}]);