if(!self.define){let a,e={};const d=(d,i)=>(d=new URL(d+".js",i).href,e[d]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=d,a.onload=e,document.head.appendChild(a)}else a=d,importScripts(d),e()})).then((()=>{let a=e[d];if(!a)throw new Error(`Module ${d} didn’t register its module`);return a})));self.define=(i,b)=>{const s=a||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let r={};const n=a=>d(a,s),o={module:{uri:s},exports:r,require:n};e[s]=Promise.all(i.map((a=>o[a]||n(a)))).then((a=>(b(...a),r)))}}define(["./workbox-ad8011fb"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"ea230128847370abad0ab060086839da2d58047d/binaries/stremio_core_web_bg.wasm",revision:"20f49a282872fda47122c2c2d033d47c"},{url:"ea230128847370abad0ab060086839da2d58047d/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"ea230128847370abad0ab060086839da2d58047d/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"ea230128847370abad0ab060086839da2d58047d/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"ea230128847370abad0ab060086839da2d58047d/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"ea230128847370abad0ab060086839da2d58047d/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"ea230128847370abad0ab060086839da2d58047d/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"ea230128847370abad0ab060086839da2d58047d/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"ea230128847370abad0ab060086839da2d58047d/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"ea230128847370abad0ab060086839da2d58047d/images/icon_x192.png",revision:"f0c07b7925b6b484e918fcb80d3be171"},{url:"ea230128847370abad0ab060086839da2d58047d/images/icon_x512.png",revision:"5232e0a400b4684441ee5843b6d6b926"},{url:"ea230128847370abad0ab060086839da2d58047d/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"ea230128847370abad0ab060086839da2d58047d/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"ea230128847370abad0ab060086839da2d58047d/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"ea230128847370abad0ab060086839da2d58047d/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"ea230128847370abad0ab060086839da2d58047d/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"ea230128847370abad0ab060086839da2d58047d/scripts/main.js",revision:"ef7c2e6c300005b4201e25d0356fc3cc"},{url:"ea230128847370abad0ab060086839da2d58047d/scripts/worker.js",revision:"b98c8d0c121988d24d2960caf6ece6cb"},{url:"ea230128847370abad0ab060086839da2d58047d/styles/main.css",revision:"35b51408954b6e29d0b8d1e69db4b716"},{url:"index.html",revision:"7320637b0e8e03a68f891065c2f31137"}],{})}));
//# sourceMappingURL=service-worker.js.map