import{_ as k,L as z,o as S,c as C,i as E,A,k as $,a as m,F as R,r as I,f as D,q as x,t as U,b as L,E as T,w as j,n as O,M as V}from"./B8T2dVS5.js";import{_ as B}from"./CEP3ztjw.js";import{V as N}from"./BqSZKrua.js";import{u as G}from"./apg-i_En.js";function q(u){return[(u>>16&255)/255,(u>>8&255)/255,(255&u)/255]}["SCREEN","LINEAR_LIGHT"].reduce((u,s,l)=>Object.assign(u,{[s]:l}),{});class P{constructor(s,l,b,v=!1){const r=this,f=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;r.canvas=s,r.gl=r.canvas.getContext("webgl",{antialias:!0}),r.meshes=[];const i=r.gl;l&&b&&this.setSize(l,b),r.lastDebugMsg,r.debug=v&&f?function(n){const a=new Date;a-r.lastDebugMsg>1e3&&console.log("---"),console.log(a.toLocaleTimeString()+Array(Math.max(0,32-n.length)).join(" ")+n+": ",...Array.from(arguments).slice(1)),r.lastDebugMsg=a}:()=>{},Object.defineProperties(r,{Material:{enumerable:!1,value:class{constructor(n,a,e={}){const t=this;function c(w,p){const y=i.createShader(w);return i.shaderSource(y,p),i.compileShader(y),i.getShaderParameter(y,i.COMPILE_STATUS)||console.error(i.getShaderInfoLog(y)),r.debug("Material.compileShaderSource",{source:p}),y}function d(w,p){return Object.entries(w).map(([y,_])=>_.getDeclaration(y,p)).join(`
`)}t.uniforms=e,t.uniformInstances=[];const g=`
              precision highp float;
            `;t.vertexSource=`
              ${g}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${d(r.commonUniforms,"vertex")}
              ${d(e,"vertex")}
              ${n}
            `,t.Source=`
              ${g}
              ${d(r.commonUniforms,"fragment")}
              ${d(e,"fragment")}
              ${a}
            `,t.vertexShader=c(i.VERTEX_SHADER,t.vertexSource),t.fragmentShader=c(i.FRAGMENT_SHADER,t.Source),t.program=i.createProgram(),i.attachShader(t.program,t.vertexShader),i.attachShader(t.program,t.fragmentShader),i.linkProgram(t.program),i.getProgramParameter(t.program,i.LINK_STATUS)||console.error(i.getProgramInfoLog(t.program)),i.useProgram(t.program),t.attachUniforms(void 0,r.commonUniforms),t.attachUniforms(void 0,t.uniforms)}attachUniforms(n,a){const e=this;n===void 0?Object.entries(a).forEach(([t,c])=>{e.attachUniforms(t,c)}):a.type=="array"?a.value.forEach((t,c)=>e.attachUniforms(`${n}[${c}]`,t)):a.type=="struct"?Object.entries(a.value).forEach(([t,c])=>e.attachUniforms(`${n}.${t}`,c)):(r.debug("Material.attachUniforms",{name:n,uniform:a}),e.uniformInstances.push({uniform:a,location:i.getUniformLocation(e.program,n)}))}}},Uniform:{enumerable:!1,value:class{constructor(n){this.type="float",Object.assign(this,n),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(n){this.value!==void 0&&i[`uniform${this.typeFn}`](n,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(n,a,e){const t=this;if(t.excludeFrom!==a){if(t.type==="array")return t.value[0].getDeclaration(n,a,t.value.length)+`
const int ${n}_length = ${t.value.length};`;if(t.type==="struct"){let c=n.replace("u_","");return c=c.charAt(0).toUpperCase()+c.slice(1),`uniform struct ${c} 
                                {
`+Object.entries(t.value).map(([d,g])=>g.getDeclaration(d,a).replace(/^uniform/,"")).join("")+`
} ${n}${e>0?`[${e}]`:""};`}return`uniform ${t.type} ${n}${e>0?`[${e}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(n,a,e,t,c){i.createBuffer(),this.attributes={position:new r.Attribute({target:i.ARRAY_BUFFER,size:3}),uv:new r.Attribute({target:i.ARRAY_BUFFER,size:2}),uvNorm:new r.Attribute({target:i.ARRAY_BUFFER,size:2}),index:new r.Attribute({target:i.ELEMENT_ARRAY_BUFFER,size:3,type:i.UNSIGNED_SHORT})},this.setTopology(e,t),this.setSize(n,a,c)}setTopology(n=1,a=1){const e=this;e.xSegCount=n,e.ySegCount=a,e.vertexCount=(e.xSegCount+1)*(e.ySegCount+1),e.quadCount=e.xSegCount*e.ySegCount*2,e.attributes.uv.values=new Float32Array(2*e.vertexCount),e.attributes.uvNorm.values=new Float32Array(2*e.vertexCount),e.attributes.index.values=new Uint16Array(3*e.quadCount);for(let t=0;t<=e.ySegCount;t++)for(let c=0;c<=e.xSegCount;c++){const d=t*(e.xSegCount+1)+c;if(e.attributes.uv.values[2*d]=c/e.xSegCount,e.attributes.uv.values[2*d+1]=1-t/e.ySegCount,e.attributes.uvNorm.values[2*d]=c/e.xSegCount*2-1,e.attributes.uvNorm.values[2*d+1]=1-t/e.ySegCount*2,c<e.xSegCount&&t<e.ySegCount){const g=t*e.xSegCount+c;e.attributes.index.values[6*g]=d,e.attributes.index.values[6*g+1]=d+1+e.xSegCount,e.attributes.index.values[6*g+2]=d+1,e.attributes.index.values[6*g+3]=d+1,e.attributes.index.values[6*g+4]=d+1+e.xSegCount,e.attributes.index.values[6*g+5]=d+2+e.xSegCount}}e.attributes.uv.update(),e.attributes.uvNorm.update(),e.attributes.index.update(),r.debug("Geometry.setTopology",{uv:e.attributes.uv,uvNorm:e.attributes.uvNorm,index:e.attributes.index})}setSize(n=1,a=1,e="xz"){const t=this;t.width=n,t.height=a,t.orientation=e,t.attributes.position.values&&t.attributes.position.values.length===3*t.vertexCount||(t.attributes.position.values=new Float32Array(3*t.vertexCount));const c=n/-2,d=a/-2,g=n/t.xSegCount,w=a/t.ySegCount;for(let p=0;p<=t.ySegCount;p++){const y=d+p*w;for(let _=0;_<=t.xSegCount;_++){const F=c+_*g,M=p*(t.xSegCount+1)+_;t.attributes.position.values[3*M+"xyz".indexOf(e[0])]=F,t.attributes.position.values[3*M+"xyz".indexOf(e[1])]=-y}}t.attributes.position.update(),r.debug("Geometry.setSize",{position:t.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(n,a){const e=this;e.geometry=n,e.material=a,e.wireframe=!1,e.attributeInstances=[],Object.entries(e.geometry.attributes).forEach(([t,c])=>{e.attributeInstances.push({attribute:c,location:c.attach(t,e.material.program)})}),r.meshes.push(e),r.debug("Mesh.constructor",{mesh:e})}draw(){i.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:n,location:a})=>n.update(a)),this.attributeInstances.forEach(({attribute:n,location:a})=>n.use(a)),i.drawElements(this.wireframe?i.LINES:i.TRIANGLES,this.geometry.attributes.index.values.length,i.UNSIGNED_SHORT,0)}remove(){r.meshes=r.meshes.filter(n=>n!=this)}}},Attribute:{enumerable:!1,value:class{constructor(n){this.type=i.FLOAT,this.normalized=!1,this.buffer=i.createBuffer(),Object.assign(this,n),this.update()}update(){this.values!==void 0&&(i.bindBuffer(this.target,this.buffer),i.bufferData(this.target,this.values,i.STATIC_DRAW))}attach(n,a){const e=i.getAttribLocation(a,n);return this.target===i.ARRAY_BUFFER&&(i.enableVertexAttribArray(e),i.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0)),e}use(n){i.bindBuffer(this.target,this.buffer),this.target===i.ARRAY_BUFFER&&(i.enableVertexAttribArray(n),i.vertexAttribPointer(n,this.size,this.type,this.normalized,0,0))}}}});const h=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];r.commonUniforms={projectionMatrix:new r.Uniform({type:"mat4",value:h}),modelViewMatrix:new r.Uniform({type:"mat4",value:h}),resolution:new r.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new r.Uniform({type:"float",value:1})}}setSize(s=640,l=480){this.width=s,this.height=l,this.canvas.width=s,this.canvas.height=l,this.gl.viewport(0,0,s,l),this.commonUniforms.resolution.value=[s,l],this.commonUniforms.aspectRatio.value=s/l,this.debug("MiniGL.setSize",{width:s,height:l})}setOrthographicCamera(s=0,l=0,b=0,v=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(v-r),0,s,l,b,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(s=>s.draw())}}function o(u,s,l){return s in u?Object.defineProperty(u,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[s]=l,u}class H{constructor(...s){o(this,"el",void 0),o(this,"cssVarRetries",0),o(this,"maxCssVarRetries",200),o(this,"angle",0),o(this,"isLoadedClass",!1),o(this,"isScrolling",!1),o(this,"scrollingTimeout",void 0),o(this,"scrollingRefreshDelay",200),o(this,"isIntersecting",!1),o(this,"shaderFiles",void 0),o(this,"vertexShader",void 0),o(this,"sectionColors",void 0),o(this,"computedCanvasStyle",void 0),o(this,"conf",void 0),o(this,"uniforms",void 0),o(this,"t",1253106),o(this,"last",0),o(this,"width",void 0),o(this,"minWidth",1111),o(this,"height",600),o(this,"xSegCount",void 0),o(this,"ySegCount",void 0),o(this,"mesh",void 0),o(this,"material",void 0),o(this,"geometry",void 0),o(this,"minigl",void 0),o(this,"scrollObserver",void 0),o(this,"amp",320),o(this,"seed",5),o(this,"freqX",14e-5),o(this,"freqY",29e-5),o(this,"freqDelta",1e-5),o(this,"activeColors",[1,1,1,1]),o(this,"isMetaKey",!1),o(this,"isGradientLegendVisible",!1),o(this,"isMouseDown",!1),o(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),o(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),o(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),o(this,"handleMouseDown",l=>{this.isGradientLegendVisible&&(this.isMetaKey=l.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),o(this,"handleMouseUp",()=>{this.isMouseDown=!1}),o(this,"animate",l=>{if(!this.shouldSkipFrame(l)||this.isMouseDown){if(this.t+=Math.min(l-this.last,1e3/15),this.last=l,this.isMouseDown){let b=160;this.isMetaKey&&(b=-160),this.t+=b}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),o(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),o(this,"pause",()=>{this.conf.playing=!1}),o(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),o(this,"initGradient",l=>(this.el=document.querySelector(l),this.connect(),this))}async connect(){this.shaderFiles={vertex:gradientVertexShader,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:gradientFragmentShader},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new P(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let s=1;s<this.sectionColors.length;s+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[s],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+s/this.sectionColors.length,3+s/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*s}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*s}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*s}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*s})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(s){return!!window.document.hidden||!this.conf.playing||parseInt(s,10)%2==0||void 0}updateFrequency(s){this.freqX+=s,this.freqY+=s}toggleColor(s){this.activeColors[s]=this.activeColors[s]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(s=>{let l=this.computedCanvasStyle.getPropertyValue(s).trim();return l.length===4&&(l=`#${l.substr(1).split("").map(v=>v+v).join("")}`),l&&`0x${l.substr(1)}`}).filter(Boolean).map(q)}}const K={id:"gradient-canvas","data-transition-in":""},Y={__name:"Background",setup(u){return z(()=>{new H().initGradient("#gradient-canvas")}),(s,l)=>(S(),C("canvas",K))}},Q=k(Y,[["__scopeId","data-v-4837e8fe"]]);function X(u,s,l,b){function v(r){for(let f=r.tokens.length-1;f>=0;f--){if(r.tokens[f].type!=="inline")continue;const i=r.tokens[f].children;for(let h=i.length-1;h>=0;h--)i[h].type===l&&b(i,h)}}u.core.ruler.push(s,v)}const W=`## Hello.

I am Jeffrey Chan. I am a software engineer who resides in Hong Kong.

I make software that's fun for everyone and I am passionate about open source.

----------

Contact: [Github](https://github.com/DevChanQ), [LinkedIn](https://www.linkedin.com/in/jeffrey-ching-kiu-chan/), [X/Twitter](https://twitter.com/DevJeffHK), <a href="mailto:jeffrey@devjeff.info">Email</a>

### I worked on 👨‍💻

<img src="https://devjeff.info/github-logo.svg" width="20"> [Scrype](https://devjeff.info/scrype) - Present code snippets in an interesting way

[MyXSite](https://myxsite.ai) - Turn your profile into a website. Instantly.

<img src="https://devjeff.info/github-logo.svg" width="20"> [react-native-svg-editor](https://github.com/DevChanQ/react-native-svg-editor) - The library that powers SVG Editor

<img src="https://devjeff.info/github-logo.svg" width="20"> [Pikabu tweak](https://github.com/DevChanQ/pikabu) - Volume Hud tweak for jailbroken iOS devices

<img src="https://devjeff.info/arweave.svg" width="20" alt="Arweave logo"> [Arweave Fullstack Hack](https://community.arweave.net/#/fullstack) — Hackathon landing page & signup backend

[See all projects](https://github.com/DevChanQ/my-projects)

### I am learning 👨‍🏫

Rust, Machine Learning & LLMs`,J={class:"code-editor ayu"},Z={class:"code-editor__tabs-and-breadcrumbs"},ee={class:"code-editor__tabs"},te=["onClick"],ne=m("div",{class:"code-editor__tab-border-top"},null,-1),ie={class:"code-editor__tab-name-container"},se={class:"code-editor__icon-label-name"},ae=m("div",{class:"code-editor__tab-action"},null,-1),oe=m("div",{class:"code-editor__tab-border-bottom"},null,-1),re={class:"code-editor__breadcrumbs"},le={class:"code-editor__breadcrumb-item"},ce={class:"code-editor__icon-label-name"},de={class:"code-editor__editor"},he=E({__name:"CodeEditor",setup(u){const l=[h=>{h.use(X,"url_new_win","link_open",(n,a)=>{n[a].attrSet("target","_blank")})}],b=A(0),v=A([{filename:"About Me.md",ext:"md",md:W}]),r=$(()=>v.value[b.value]),f=async h=>{const n=v.value.findIndex(d=>d.filename===`${h}/README.md`);if(n!==-1){b.value=n;return}v.value.push({filename:`${h}/README.md`,ext:"md",md:"Loading..."}),b.value=v.value.length-1;let a=`https://raw.githubusercontent.com/${h}/master`,e=await fetch(`${a}/README.md`);if(!e.ok&&(a=`https://raw.githubusercontent.com/${h}/main`,e=await fetch(`${a}/README.md`),!e.ok))return;const c=(await e.text()).replace(/(!\[.*\]\()(.+)(\))/g,`$1${a}/$2$3`).replace(/(<img.*?src=")\/(.*?")/g,`$1${a}/$2`);v.value[v.value.length-1].md=c},i=h=>{const n=h.target;if(n instanceof HTMLAnchorElement){h.preventDefault();const a=n.href,e=a.match(/github.com\/(DevChanQ\/.*)/);if(!e||!e[1]){window.open(a,"_blank");return}const t=e[1];f(t)}};return(h,n)=>(S(),C("div",J,[m("div",Z,[m("div",ee,[(S(!0),C(R,null,I(x(v),(a,e)=>(S(),C("div",{key:a.filename,class:D(["code-editor__tab",{active:x(b)===e}]),onClick:t=>b.value=e},[ne,m("div",ie,[m("div",{class:D(["code-editor__icon-label",[`${a.ext}-ext`]])},[m("span",se,U(a.filename),1)],2)]),ae,oe],10,te))),128))]),m("div",re,[m("div",le,[m("div",{class:D(["code-editor__icon-label",[`${x(r).ext}-ext`]])},[m("span",ce,U(x(r).filename),1)],2)])])]),m("div",de,[L(x(N),{onClick:i,source:x(r).md,options:{html:!0},plugins:l},null,8,["source"])])]))}}),ue=""+new URL("logo.DJ3KxW8X.png",import.meta.url).href,be={class:"devjeff__bg"},ve=V('<div class="devjeff__info"><div><img height="56" src="'+ue+'"></div><div><div class="devjeff__contacts"><a target="_blank" href="https://github.com/DevChanQ/devchanq.github.io"><div class="devjeff__check-out-the-source"></div></a><a target="_blank" href="https://github.com/DevChanQ/devchanq.github.io"><div class="devjeff__icon github"></div></a></div><p style="font-size:12px;" class="d-none d-sm-block mb-0 mt-3">© Jeffrey Chan</p></div></div>',1),me={class:"devjeff__code-editor"},xe=E({__name:"index",setup(u){const s=A(0),l=()=>{s.value=window.innerHeight};return z(()=>{l(),window.addEventListener("resize",l)}),T(()=>{window.removeEventListener("resize",l)}),G({title:"I make cool software | Devjeff"}),(b,v)=>{const r=Q,f=B,i=he;return S(),C("div",{id:"devjeff",style:O([x(s)?{height:`${x(s)}px`}:{}])},[m("div",be,[L(f,null,{default:j(()=>[L(r)]),_:1})]),ve,m("div",me,[L(i)])],4)}}});export{xe as default};
