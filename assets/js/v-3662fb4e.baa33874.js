"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[5777],{3022:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-3662fb4e",path:"/feature/feature-config.html",title:"Feature",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"SEO",slug:"seo",children:[{level:3,title:"首页",slug:"首页",children:[]},{level:3,title:"文章页面",slug:"文章页面",children:[]},{level:3,title:"自定义",slug:"自定义",children:[]}]},{level:2,title:"自定义面板",slug:"自定义面板",children:[{level:3,title:"功能介绍",slug:"功能介绍",children:[]},{level:3,title:"配置修改",slug:"配置修改",children:[]},{level:3,title:"自定义",slug:"自定义-1",children:[]}]},{level:2,title:"赞赏配置",slug:"赞赏配置",children:[]}],git:{updatedTime:1680883203e3,contributors:[{name:"syh2002",email:"74902851+syh2002@users.noreply.github.com",commits:1}]}}},3501:(s,n,a)=>{a.r(n),a.d(n,{default:()=>K});var e=a(6252);const t=(0,e._)("h1",{id:"feature",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#feature","aria-hidden":"true"},"#"),(0,e.Uk)(" Feature")],-1),l={class:"table-of-contents"},o=(0,e.uE)('<h2 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h2><p>主题已对搜索引擎进行初步优化，主要就是自动设置关键词和描述，如果想要更深入的SEO优化，请自行解决</p><h3 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h3><p>首页的<code>description</code>和<code>keyword</code>通过以下修改，在<code>config.js</code>文件中进行修改</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//站点描述</span>\n        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;qsyyke的个人博客，记录生活琐事，学习笔记&quot;</span><span class="token punctuation">,</span>\n\n        <span class="token comment">//站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号&#39;,&#39;隔开</span>\n        <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&quot;vuepress主题,vuepress theme,生活琐事,二次元博客,简约博客,博客主题,静态主题&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="文章页面" tabindex="-1"><a class="header-anchor" href="#文章页面" aria-hidden="true">#</a> 文章页面</h3><p>文章页如果你没有在<code>Frontmatter</code>中单独配置的话，那么将会获取文章内容220个字符作为作为<code>description</code>，获取90个字符作为<code>keyword</code>值</p><h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3><h5 id="description-keyword" tabindex="-1"><a class="header-anchor" href="#description-keyword" aria-hidden="true">#</a> description，keyword</h5><p>如需自定义，请在该<code>.md</code>文件中，加上下面容器，会自动获取第一个tip的值，作为description</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml"><span class="token key atrule">description</span><span class="token punctuation">:</span> 这是一个描述\n<span class="token key atrule">keyword</span><span class="token punctuation">:</span> 关键词<span class="token punctuation">,</span>关键词<span class="token punctuation">...</span></span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="自定义面板" tabindex="-1"><a class="header-anchor" href="#自定义面板" aria-hidden="true">#</a> 自定义面板</h2>',12),p=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901135152962",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901135152962.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),i=(0,e.uE)('<h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h3><p>此自定义面板的功能有：</p><ol><li>切换背景图片</li><li>开启毛玻璃模糊效果</li><li>全局颜色控制</li><li>全局字体控制</li><li>全局圆角控制</li><li>全局模糊度控制</li><li>全局透明度控制</li></ol><h4 id="切换背景" tabindex="-1"><a class="header-anchor" href="#切换背景" aria-hidden="true">#</a> 切换背景</h4>',4),r=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901135603882",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901135603882.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),c=(0,e._)("h4",{id:"毛玻璃",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#毛玻璃","aria-hidden":"true"},"#"),(0,e.Uk)(" 毛玻璃")],-1),u=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"开启(默认是开启的)"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901135749484",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901135749484.png?x-oss-process=style/pictureProcess1",data:"aurora"})])]),(0,e._)("li",null,[(0,e._)("p",null,"关闭"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901135846975",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901135846975.png?x-oss-process=style/pictureProcess1",data:"aurora"})])])],-1),d=(0,e._)("p",null,[(0,e.Uk)("为了获得更佳的体验效果，开启毛玻璃效果之后，请设置透明度，模糊度("),(0,e._)("code",null,"模糊度仅在毛玻璃效果开启之后，才生效"),(0,e.Uk)(")，以达到最佳视觉效果")],-1),g=(0,e._)("h4",{id:"全局颜色",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#全局颜色","aria-hidden":"true"},"#"),(0,e.Uk)(" 全局颜色")],-1),m=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140141856",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140141856.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),h=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140158487",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140158487.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),b=(0,e._)("h4",{id:"全局字体",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#全局字体","aria-hidden":"true"},"#"),(0,e.Uk)(" 全局字体")],-1),k=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140240329",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140240329.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),_=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140257315",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140257315.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),y=(0,e._)("h4",{id:"设置显示文字",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#设置显示文字","aria-hidden":"true"},"#"),(0,e.Uk)(" 设置显示文字")],-1),v=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210902181737898",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210902181737898.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),f=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">showFont</span><span class="token operator">:</span> 程\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="全局圆角" tabindex="-1"><a class="header-anchor" href="#全局圆角" aria-hidden="true">#</a> 全局圆角</h4>',2),z=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140433200",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140433200.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),x=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140509942",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140509942.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),j=(0,e._)("p",null,"圆角控制，对绝大多数的边框都进行控制，但像文章内图片，代码块等并没有进行控制，如需加上，请自行解决",-1),U=(0,e._)("h4",{id:"模糊度",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#模糊度","aria-hidden":"true"},"#"),(0,e.Uk)(" 模糊度")],-1),w=(0,e._)("p",null,[(0,e._)("code",null,"模糊度仅在毛玻璃效果开启之后有效")],-1),S=(0,e._)("ul",null,[(0,e._)("li",null,"模糊度为0时")],-1),F=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140748473",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140748473.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),q=(0,e._)("ul",null,[(0,e._)("li",null,"变化之后")],-1),C=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901140842940",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901140842940.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),P=(0,e._)("h4",{id:"透明度",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#透明度","aria-hidden":"true"},"#"),(0,e.Uk)(" 透明度")],-1),E=(0,e._)("ul",null,[(0,e._)("li",null,"0时")],-1),W=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901141006270",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901141006270.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),D=(0,e._)("ul",null,[(0,e._)("li",null,"变化后")],-1),A=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901141047340",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901141047340.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),O=(0,e.uE)('<h3 id="配置修改" tabindex="-1"><a class="header-anchor" href="#配置修改" aria-hidden="true">#</a> 配置修改</h3><h4 id="设置背景切换-开启毛玻璃图标" tabindex="-1"><a class="header-anchor" href="#设置背景切换-开启毛玻璃图标" aria-hidden="true">#</a> 设置背景切换，开启毛玻璃图标</h4><img src="https://ooszy.cco.vin/img/blog-note/image-20211011145416914.png?x-oss-process=style/pictureProcess1" alt="image-20211011145416914" style="zoom:33%;">',3),L=(0,e._)("p",null,"组件位置",-1),M=(0,e._)("p",null,"docs/.vuepress/theme/lib/client/components/child/home/StyleMenu.vue",-1),B=(0,e._)("p",null,"图标地址",-1),H={href:"http://aurora-font.cco.vin/",target:"_blank",rel:"noopener noreferrer"},I=(0,e.uE)('<h4 id="字体颜色-字体" tabindex="-1"><a class="header-anchor" href="#字体颜色-字体" aria-hidden="true">#</a> 字体颜色，字体</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">maxFontColorArr</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">fontColor</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&#39;#2c3e50&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#42a5f5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#8093f1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#FF6EC7&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#FF7F00&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;#8FBC8F&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#EAADEA&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#3299CC&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#CDCDCD&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#CC3299&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;#FF7F00&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#2F4F4F&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&quot;hlt&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;tzt&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;sst&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;xsf&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;lsf&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;cgt&quot;</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>maxFontColorArr</code>是控制颜色和字体显示多少个，字体和颜色排列个数都会受此值影响，不推荐添加多个，控制在8个或者7个以内</p>',3),N=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901144515893",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901144515893.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),R=(0,e.uE)('<h4 id="默认开启毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#默认开启毛玻璃效果" aria-hidden="true">#</a> 默认开启毛玻璃效果</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">//毛玻璃效果默认值，true表示开启，false表示关闭，只是默认值</span>\n        <span class="token literal-property property">isFitter</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="滚轮" tabindex="-1"><a class="header-anchor" href="#滚轮" aria-hidden="true">#</a> 滚轮</h4>',3),T=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210901144745455",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210901144745455.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),Y=(0,e._)("p",null,[(0,e.Uk)("滚轮样式请自行修改，组件位置"),(0,e._)("code",null,"docs/.vuepress/theme/lib/client/components/child/StyleMenu.vue"),(0,e.Uk)("，对于其他浏览器，滚轮样式可能不美观，请自行解决")],-1),Z=(0,e._)("h3",{id:"自定义-1",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#自定义-1","aria-hidden":"true"},"#"),(0,e.Uk)(" 自定义")],-1),G=(0,e._)("h2",{id:"赞赏配置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#赞赏配置","aria-hidden":"true"},"#"),(0,e.Uk)(" 赞赏配置")],-1),J={},K=(0,a(3744).Z)(J,[["render",function(s,n){const a=(0,e.up)("RouterLink"),J=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("nav",l,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#seo"},{default:(0,e.w5)((()=>[(0,e.Uk)("SEO")])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#首页"},{default:(0,e.w5)((()=>[(0,e.Uk)("首页")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#文章页面"},{default:(0,e.w5)((()=>[(0,e.Uk)("文章页面")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#自定义"},{default:(0,e.w5)((()=>[(0,e.Uk)("自定义")])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#自定义面板"},{default:(0,e.w5)((()=>[(0,e.Uk)("自定义面板")])),_:1}),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(a,{to:"#功能介绍"},{default:(0,e.w5)((()=>[(0,e.Uk)("功能介绍")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#配置修改"},{default:(0,e.w5)((()=>[(0,e.Uk)("配置修改")])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#自定义-1"},{default:(0,e.w5)((()=>[(0,e.Uk)("自定义")])),_:1})])])]),(0,e._)("li",null,[(0,e.Wm)(a,{to:"#赞赏配置"},{default:(0,e.w5)((()=>[(0,e.Uk)("赞赏配置")])),_:1})])])]),o,p,i,r,c,u,d,g,m,h,b,k,_,y,v,f,z,x,j,U,w,S,F,q,C,P,E,W,D,A,O,(0,e._)("blockquote",null,[L,M,B,(0,e._)("p",null,[(0,e._)("a",H,[(0,e.Uk)("iconfont Demo (cco.vin)"),(0,e.Wm)(J)])])]),I,N,R,T,Y,Z,G,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/feature/donate.html"},{default:(0,e.w5)((()=>[(0,e.Uk)("文章赞赏")])),_:1})])],64)}]])}}]);