if(!self.define){let e,c={};const f=(f,b)=>(f=new URL(f+".js",b).href,c[f]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=c,document.head.appendChild(e)}else e=f,importScripts(f),c()})).then((()=>{let e=c[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(b,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(c[s])return;let r={};const a=e=>f(e,s),n={module:{uri:s},exports:r,require:a};c[s]=Promise.all(b.map((e=>n[e]||a(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/binaries/stremio_core_web_bg.wasm",revision:"20f49a282872fda47122c2c2d033d47c"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/icon_x192.png",revision:"f0c07b7925b6b484e918fcb80d3be171"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/icon_x512.png",revision:"5232e0a400b4684441ee5843b6d6b926"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/scripts/main.js",revision:"6be6ee9ee9b557eec1cf4ab4b397f423"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/scripts/worker.js",revision:"8207026425361a4fd6759ad1941d146e"},{url:"4845c956ce7bccf954b1843b44373f92f18e95f5/styles/main.css",revision:"1dd919baae38c5dddaecd5034aa08b3f"},{url:"index.html",revision:"945df16b61738073ed15c425fe46ee46"}],{})}));
//# sourceMappingURL=service-worker.js.map