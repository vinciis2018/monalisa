"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===a&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".monalisa_slideshowSlider{height:100%;position:relative;transition:1s ease;white-space:nowrap}.monalisa_slide{align-items:center;border-radius:5px;display:inline-block flex;justify-content:center;max-height:10%;transition:.5s ease;width:100%}.monalisa_slide:hover{opacity:.8}.monalisa_slideshow_1,.monalisa_slideshow_100{height:10rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_240{height:240rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_480{height:48rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_540{height:54rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_720{height:72rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_1080{height:108rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_2160{height:216rem;margin:0 auto;max-width:100%;overflow:hidden}.monalisa_slideshow_full{height:100%;margin:0 auto;max-width:100%;overflow:hidden}"),exports.Monalisa=function({screen:e,monaName:a}){const i=e,s=a||"monalisa_slideshow_full",[l,n]=t.default.useState(0),o=t.default.useRef(null),[r,d]=t.default.useState([]),[h,m]=t.default.useState(""),[u,c]=t.default.useState("");return t.default.useEffect((()=>{(async()=>{try{const e=await window.fetch(`https://vblinds.herokuapp.com/api/screens/${i}/screenVideos`),t=await e.json();d(t),console.log(t),t.map((e=>e.thumbnail)).map((e=>e.split("https://arweave.net/")[1])).map((e=>m(e))),t.map((e=>e.video)).map((e=>e.split("https://arweave.net/")[1])).map((e=>c(e))),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{r.length<=1?n(l):n((e=>e===(r.length-1||r.length)?0:e+1))}),2e3)}catch(e){console.error(e)}})()}),[l,r.length,i]),t.default.createElement("div",null,t.default.createElement("div",{className:s},t.default.createElement("div",{className:"monalisa_slideshowSlider",style:{transform:`translate3d(${100*-l}%, 0, 0)`}},r.map((e=>t.default.createElement("a",{key:e._id,"aria-label":"Blinds by Vinciis",href:`https://vblinds.herokuapp.com/video/${e._id}/${u}`,target:"_blank",rel:"noopener noreferrer"},t.default.createElement("img",{className:"monalisa_slide",title:"Blinds by Vinciis",key:h,src:`https://arweave.net/${h}`})))))))};
