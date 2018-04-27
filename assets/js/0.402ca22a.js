(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(t,s,n){"use strict";n.r(s);var a={data:function(){return{msg:"Hello VuePress!"}}},e=n(1),r=Object(e.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("p",[t._v("VuePress 对 Markdown 做了一些扩展，使得我们可以在 Markdown 文件中使用 YAML 语法，VuePress 使用 ---来隔离 Markdown 语法。")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),n("p",[t._v("有些时候我们可能需要一个多级侧边栏，例如一个博客系统，将一些类似的文章放在相同的目录下方，我们希望为这些目录的所有文件都添加侧边栏，就像下面这样的一个目录。")]),t._m(17),n("p",[t._v("对于多级目录的侧边栏，我们需要用使用对象描述的写法，下面的 /git/ 表示在 git 目录，默认指向 /git/README.md 文件。")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),n("hello"),n("p",[t._v("这样我们在 Markdown 文件编写 Vue 代码的时候就不需要注册注册这些组件，边可以直接在 Markdown 中使用了。")]),t._m(24),[n("div",{staticClass:"test-demo"},[t._v("\n    "+t._s(t.msg)+"\n    "),n("my-hello"),n("el-button",[t._v("button")])],1)],t._m(25),t._m(26),t._m(27),t._m(28),t._m(29)],2)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vuepress-快速踩坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-快速踩坑","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress 快速踩坑")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://pic4.zhimg.com/v2-7520d66da30349b0c348a03846985d47_1200x500.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("最近有个开源项目非常火，那就是尤小右开发的 VuePress，VuePress 可以让您非常方便的在 Markdown 文档中编写 Vue 代码，并且 VuePress 对编译后的 HTML 文件做了一些针对搜索引擎的优化。另外 VuePress 针对 Markdown 文件做了一些扩展使其功能更加强大，本文将围绕搭建一个 Github 的静态博客展开。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为项目加入-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为项目加入-vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" 为项目加入 VuePress")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第一步为您的项目安装 VuePress，如果您的项目代码中并没有"),s("code",[this._v("package.json")]),this._v("文件，请先执行"),s("code",[this._v("npm init")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('npm install -D vuepress // 或者 yarn add -D vuepress\n\n// 在项目根目录下新加 docs 文件夹\nmkdir docs\n\n// 新建一个 Markdown 文件\necho "# Hello VuePress!" > docs/README.md\n')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第二步在"),s("code",[this._v("package.json")]),this._v("文件中加入这些脚本，并运行。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),n("span",{attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"docs:dev"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"docs:build"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 本地运行文档")]),t._v("\nnpm run docs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dev\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 编译打包生产静态 HTML 文件")]),t._v("\nnpm run docs"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("---\n// 该语法表示使用当前页面标题自动生成侧边栏\nsidebar: auto\n---\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vuepress-基础配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-基础配置","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress 基础配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("通过 VuePress 配置文件我们可以使用一些自定义的功能，譬如添加侧边栏，添加导航栏等。首先在"),s("code",[this._v("docs")]),this._v("目录下新建一个"),s("code",[this._v(".vuepress")]),this._v("目录，并在该目录下方新建"),s("code",[this._v("config.js")]),this._v("。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("VuePress 默认将文件打包在"),n("code",[t._v(".vuepress/dist")]),t._v("目录下，我们可以通过"),n("code",[t._v("dest")]),t._v("属性修改文件输出目录，例如将文件输出在项目根目录下的"),n("code",[t._v("dist")]),t._v("文件夹中。")]),n("li",[t._v("通过设置"),n("code",[t._v("repo")]),t._v("属性，VuePress 会在导航栏中添加一个 Github 仓库的链接。")]),n("li",[t._v("在 VuePress 中通过设置"),n("code",[t._v("title")]),t._v("属性来设置网站的标题，它将会被用作所有页面标题的前缀，在默认主题下，它将应用在导航栏上。")]),n("li",[t._v("在使用 VuePress 编写博客并发布到 Github pages 的时候，我们可能会遇到下图所显示的问题，页面已经有了，但是样式和 js 没有加载成功。我们可以通过配置"),n("code",[t._v("base")]),t._v("属性来解决这个问题，"),n("code",[t._v("base")]),t._v("属性的默认值是"),n("code",[t._v("/")]),t._v("。假如您准备将代码部署到"),n("code",[t._v("https://taoxusheng.github.io/mt-blog/")]),t._v(", 那么"),n("code",[t._v("base")]),t._v("属性就应该被设置成"),n("code",[t._v("/mt-blog/")]),t._v("。"),n("strong",[t._v("注意：base 属性的值总是以 / 开始并以 / 结束")]),t._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-a388e26de196474904df383811069caa_hd.jpg",alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// dcos/.vuepress/config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'my-blog'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置网站标题")]),t._v("\n  dest"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置输出目录")]),t._v("\n  base"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/mt-blog/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置站点根路径")]),t._v("\n  repo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://github.com/TaoXuSheng/mt-blog'")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 添加 github 链接")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"导航栏与侧边栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航栏与侧边栏","aria-hidden":"true"}},[this._v("#")]),this._v(" 导航栏与侧边栏")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在 VuePress 中如果想要为您的网站添加导航栏，可以通过设置"),s("code",[this._v("themeConfig.nav")]),this._v("来添加导航链接，通过设置"),s("code",[this._v("themeConfig.sidebar")]),this._v("属性来添加侧边栏。如果您的导航是一个下拉列表，可以通过"),s("code",[this._v("items")]),this._v("属性来设置。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// dcos/.vuepress/config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 添加导航栏")]),t._v("\n    nav"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'css'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/blog/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/zhihu/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'github'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 这里是下拉列表展现形式。")]),t._v("\n        items"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'focus-outside'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://github.com/TaoXuSheng/focus-outside'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'stylus-converter'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://github.com/TaoXuSheng/stylus-converter'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 为以下路由添加侧边栏")]),t._v("\n    sidebar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/git'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("docs\n ├── README.md\n ├── vue\n │    ├─ README.md\n │    ├─ one.md\n │    └─ two.md\n └── css\n      ├─ README.md\n      ├─ three.md\n      └─ four.md\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// dcos/.vuepress/config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sidebar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'/vue/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'one'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'two'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'/css/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'three'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'four'")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在-vuepress-中注册组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-vuepress-中注册组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 VuePress 中注册组件")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[t._v("在 VuePress 中编写 Vue 代码，和我们通常的编写单文件的方式一致，有些时候我们有可能需要使用 Vue 的 UI 组件库。例如 "),n("a",{attrs:{href:"http://element.eleme.io/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element")]),t._v("，"),n("a",{attrs:{href:"http://mint-ui.github.io/docs/#/!/zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mint")]),t._v(" 等，通常我们在项目中使用这些 UI 组件库的时候，我们都会在"),n("code",[t._v("main.js")]),t._v("或"),n("code",[t._v("botostrap.js")]),t._v("文件中统一注册。好在 VuePress 中也支持这种功能，我们可以通过创建一个"),n("code",[t._v(".vuepress/enhanceApp.js")]),t._v("文件来做一些应用级别的配置，这个文件"),n("code",[t._v("exprot default")]),t._v("一个钩子函数，在这个钩子中你可以做一些特殊处理，例如添加全局路由钩子，注册外部组件库。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// .vuepress/enhanceApp.js")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 全局注册 Element 组件库")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Element "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'element-ui/lib/theme-chalk/index.css'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  router\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Element"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 Vue 正常开发中，有些时候我们可能会需要做一些自定义的组件，在 VuePress 中我们可以在"),s("code",[this._v(".vuepress/components")]),this._v("目录中编写我们的自定义组件，VuePress 在编译时遍历该目录中所有的"),s("code",[this._v("*.vue")]),this._v("文件，并见它们注册为全局组件。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("// 注册一个自定义组件\n// docs/.vuepress/components/my-hello.vue\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cpt-hello"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello VuePress Demo"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[t._v("// docs/.vuepress/vue/README.md\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test-demo"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ msg }}\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-hello")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-hello")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("button"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Hello VuePress!'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"部署到-github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署到-github-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署到 Github pages")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("当我们将文档写好后就到了我们最关心的地方了，怎么将打包后的代码推送到远程仓库的 gh-pages 分支上，网上应该有很多文章描述怎么做，但是很多方法比较麻烦，还好有工具已经为我们解决了这个麻烦了。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 1.下载 gh-pages 包")]),t._v("\nnpm install "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token constant"}},[t._v("D")]),t._v(" gh"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("pages\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 2. 在 package.json 文件上添加脚本命令")]),t._v("\n"),n("span",{attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"docs:dev"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"docs:build"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 上面我修改了 VuePress 的输出目录，所以您如果没有修改 .vuepress/config.js")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 的 dest 属性，应该将这里的 dist 改为 .vuepress/dist")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"deploy"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"gh-pages -d dist"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"deploy:build"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"npm run docs:build && gh-pages -d dist"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 3. 打包并推送到 gh-pages 分支")]),t._v("\nnpm run deploy"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 4.打开你的 Github pages, 地址是 https://<yourname>/github.io/<repo>")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("相比较 Hexo 而言 VuePress 上手更加容易，功能也更强大，例如在 VuePress 可以注册自定义组件，而且 VuePress 中编写 Vue 和平时一样学习成本几乎为零。所以如果您正在开源一款 Vue 相关的库或是其他项目，您都可以使用 VuePress 作为您的文档编辑工具。虽然并没有完全将 VuePress 内容讲完，学完该篇文章相信你可以对 VuePress 有个大概的了解，您至少可以快速搭建一个博客，如果您想对 VuePress 有更多了解，请参考 Vuepress 中文 API。最后安利一波我正在做的开源项目 "),s("a",{attrs:{href:"https://github.com/TaoXuSheng/stylus-converter",target:"_blank",rel:"noopener noreferrer"}},[this._v("stylus-converter")]),this._v("，有兴趣的同学可以一起参与，祝各位生活愉快，五一小长假玩的开心。")])])}],!1,null,null,null);s.default=r.exports}}]);