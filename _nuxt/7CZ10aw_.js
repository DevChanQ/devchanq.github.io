import{_ as u}from"./D_LNVtWP.js";import{_ as f}from"./DR0r2cW5.js";import{i as d,D as _,A as s,E as y,G as m,H as g,s as v,o as b,c as S,a as t,b as r,w as a,d as n,C as w,q as x}from"./Bs-t5L03.js";import{u as p}from"./DT5Me0ZU.js";const C=d({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const e={ref:"_"};for(const i in this.$props)e[_(i)]=this.$props[i];return s("span",[y(this.$slots,"default")?s("a",e,this.$slots.default()):s("a",e)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){if(this.$el.lastChild!==this.$refs._)return;const e=this.$el.appendChild(document.createElement("span")),i=this;m(()=>import("./DK2fWHEW.js"),[],import.meta.url).then(function(c){i.$el.lastChild===e&&c.render(e.appendChild(i.$refs._),function(o){i.$el.lastChild===e&&e.parentNode.replaceChild(o,e)})})},reset:function(){this.$refs._!=null&&this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),$={id:"devjeff__default-layout",class:"light"},k={id:"devjeff__hero_layer",class:"container"},j={id:"sticky"},A={id:"hero-container"},N={class:"nav"},O={style:{display:"flex","flex-direction":"column",gap:"16px","align-items":"center","justify-content":"center"}},P=t("div",{class:"scrype-logo"},null,-1),z=w('<div id="hero-content"><div class="terminal" style="width:100%;max-width:600px;"><div class="window-bar"><div class="buttons"><div class="close"></div><div class="minimize"></div><div class="zoom"></div></div></div><div id="code-container" class="code-snippet"></div></div></div><div style="margin-top:32px;display:flex;align-items:center;justify-content:center;padding-bottom:120px;"><iframe width="60" height="60" src="https://lottie.host/embed/8f8d02f0-068d-44a9-bb04-ac192efcc2dd/AR7UYL3MfA.lottie"></iframe></div>',2),B={class:"scrype__footer"},D=t("div",{style:{"margin-top":"20px",display:"flex","justify-content":"center"}},[t("a",{href:"https://github.com/DevChanQ/scrype",target:"_blank",class:"github-button"},[t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[t("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})]),n(" Check out on GitHub ")])],-1),T=d({__name:"scrype",setup(e){const{$Scrype:i}=g(),o={code:`import type { ScrypeOptions } from 'scrype';
import Scrype from 'scrype';

const logo = \`
░░░█▀▀░█▀▀░█▀▄░▀█▀░█▀█░█▀▀░░
░░░▀▀█░█░░░█▀▄░░█░░█▀▀░█▀▀░░
░░░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░░▀▀▀░░
\`

const options : ScrypeOptions = {
// wait.... the logo is wrong!          
${"~".repeat(150)}█░█░█▀█░█▀▀░░
░░░▀▀█░█░░░█▀▄░░█░░█▀▀░█▀▀░░
░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░░░▀▀▀░░
\`;

const options : ScrypeOptions = {
  code: logo,
  lang: "typescript",
  pixelPerStep: 8,
  position: "top",
  codeContainerSelector: "#code-container",
};

const scrype = new Scrype('#sticky', options);`,lang:"typescript",pixelPerStep:25,position:"top",codeContainerSelector:"#code-container"};return v(()=>{new i("#sticky",o)}),p({title:"Scrype - Present code snippet in an interesting way",meta:[{name:"description",content:"Scrype is a JavaScript library that helps you present code snippets in an interesting way by simulating typing effect."},{name:"keywords",content:"scrype, code snippet, typing effect, javascript library, highlight.js, code presentation"},{property:"og:title",content:"Scrype - Present code snippet in an interesting way"},{property:"og:description",content:"Scrype is a JavaScript library that helps you present code snippets in an interesting way by simulating typing effect."},{property:"og:type",content:"website"}]}),p({bodyAttrs:{style:{background:"#ffcb0d"}}}),(E,V)=>{const l=u,h=f;return b(),S("div",$,[t("div",k,[t("div",j,[t("div",A,[t("div",N,[t("div",O,[P,r(l,null,{default:a(()=>[r(x(C),{href:"https://github.com/DevChanQ/scrype","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star buttons/github-buttons on GitHub"},{default:a(()=>[n("Star")]),_:1})]),_:1})])]),z])])]),t("div",B,[D,t("p",null,[n("Made with ❤️ by "),r(h,{to:"/"},{default:a(()=>[n("Devjeff")]),_:1})])])])}}});export{T as default};
