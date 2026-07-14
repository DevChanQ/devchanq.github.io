import{y as b,z as m,A as p,B as T,C as $,D as O,E as F,G as I,H as _,I as M,q as H,J as S,K as q}from"./B8T2dVS5.js";const B=s=>s==="defer"||s===!1;function V(...s){var v;const e=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(e);let[r,o,t={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=b(),h=o,g=()=>m.value,u=()=>a.isHydrating?a.payload.data[r]:a.static.data[r];t.server=t.server??!0,t.default=t.default??g,t.getCachedData=t.getCachedData??u,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??m.deep,t.dedupe=t.dedupe??"cancel";const f=()=>t.getCachedData(r,a)!=null;if(!a._asyncData[r]||!t.immediate){(v=a.payload._errors)[r]??(v[r]=m.errorValue);const i=t.deep?p:T;a._asyncData[r]={data:i(t.getCachedData(r,a)??t.default()),pending:p(!f()),error:$(a.payload._errors,r),status:p("idle"),_default:t.default}}const n={...a._asyncData[r]};delete n._default,n.refresh=n.execute=(i={})=>{if(a._asyncDataPromises[r]){if(B(i.dedupe??t.dedupe))return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if((i._initial||a.isHydrating&&i._initial!==!1)&&f())return Promise.resolve(t.getCachedData(r,a));n.pending.value=!0,n.status.value="pending";const d=new Promise((l,c)=>{try{l(h(a))}catch(D){c(D)}}).then(async l=>{if(d.cancelled)return a._asyncDataPromises[r];let c=l;t.transform&&(c=await t.transform(l)),t.pick&&(c=j(c,t.pick)),a.payload.data[r]=c,n.data.value=c,n.error.value=m.errorValue,n.status.value="success"}).catch(l=>{if(d.cancelled)return a._asyncDataPromises[r];n.error.value=M(l),n.data.value=H(t.default()),n.status.value="error"}).finally(()=>{d.cancelled||(n.pending.value=!1,delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=d,a._asyncDataPromises[r]},n.clear=()=>R(a,r);const y=()=>n.refresh({_initial:!0}),E=t.server!==!1&&a.payload.serverRendered;{const i=S();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const c=i._nuxtOnBeforeMountCbs;O(()=>{c.forEach(D=>{D()}),c.splice(0,c.length)}),F(()=>c.splice(0,c.length))}E&&a.isHydrating&&(n.error.value||f())?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?i._nuxtOnBeforeMountCbs.push(y):t.immediate&&y();const d=q();if(t.watch){const c=I(t.watch,()=>n.refresh());d&&_(c)}const l=a.hook("app:data:refresh",async c=>{(!c||c.includes(r))&&await n.refresh()});d&&_(l)}const w=Promise.resolve(a._asyncDataPromises[r]).then(()=>n);return Object.assign(w,n),w}function R(s,e){e in s.payload.data&&(s.payload.data[e]=void 0),e in s.payload._errors&&(s.payload._errors[e]=m.errorValue),s._asyncData[e]&&(s._asyncData[e].data.value=void 0,s._asyncData[e].error.value=m.errorValue,s._asyncData[e].pending.value=!1,s._asyncData[e].status.value="idle"),e in s._asyncDataPromises&&(s._asyncDataPromises[e].cancelled=!0,s._asyncDataPromises[e]=void 0)}function j(s,e){const r={};for(const o of e)r[o]=s[o];return r}const N="https://arweave-search.goldsky.com/graphql",x=(s,e)=>{const r=(e==null?void 0:e.limit)||100,o=e!=null&&e.after?`, after: "${e.after}"`:"",t=['{ name: "App-Name", values: ["Permablog"] }','{ name: "Content-Type", values: ["text/markdown"] }'];return e!=null&&e.category&&t.push(`{ name: "Article-Category", values: ["${e.category}"] }`),`
    query {
      transactions(
        owners: ["${s}"]
        tags: [${t.join(", ")}]
        first: ${r}
        ${o}
        sort: HEIGHT_DESC
      ) {
        edges {
          cursor
          node {
            id
            owner {
              address
            }
            tags {
              name
              value
            }
            block {
              timestamp
            }
          }
        }
      }
    }
  `},z=s=>`
    query {
      transactions(
        ids: ["${s}"]
      ) {
        edges {
          node {
            id
            owner {
              address
            }
            tags {
              name
              value
            }
            block {
              timestamp
            }
          }
        }
      }
    }
  `,P=async s=>{const e=await fetch(N,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})});if(!e.ok)throw new Error(`GraphQL request failed: ${e.statusText}`);return e.json()},A=async s=>{const e=await fetch(`https://arweave.net/${s}`);if(!e.ok)throw new Error(`Failed to fetch transaction data: ${e.statusText}`);return e.text()},G={id:"",slug:"",title:"Untitled",description:"",image:"",content:"",category:"",timestamp:Date.now(),owner:"",meta:{},tags:[]},C=s=>{const e=s.reduce((r,o)=>(r[o.name]=o.value,r),{});return{id:e["Article-ID"]||"",slug:e["Article-Slug"]||"",title:e["Article-Title"]||"",description:e["Article-Description"]||"",image:e["Article-Image"]||"",content:"",category:e["Article-Category"]||"Uncategorized",timestamp:parseInt(e["Article-Timestamp"]||"0",10),owner:e["Article-Owner"]||"",meta:{title:e["Article-Meta-Title"],description:e["Article-Meta-Description"],image:e["Article-Meta-Image"]},tags:Object.keys(e).filter(r=>!r.startsWith("Article-")).map(r=>`${r}:${e[r]}`)}},Q=async s=>{try{const{node:e}=s,r=await A(e.id),o=C(e.tags);return o.content=r,o}catch(e){return console.error("Failed to parse article from edge:",e),null}},L=s=>{const{key:e}=s;return{fetchArticles:async t=>{try{const a=x(e,t),u=(await P(a)).data.transactions.edges.map(n=>Q(n));return(await Promise.all(u)).filter(n=>n!==null)}catch(a){throw console.error("Failed to fetch articles:",a),new Error(`Failed to fetch articles: ${a instanceof Error?a.message:"Unknown error"}`)}},fetchArticle:async t=>{try{const a=await A(t),h=z(t),u=(await P(h)).data.transactions.edges;if(u.length===0)return{...G,content:a};const f=u[0],{node:n}=f,y=C(n.tags);return y.content=a,y}catch(a){throw console.error(`Failed to fetch article ${t}:`,a),new Error(`Failed to fetch article: ${a instanceof Error?a.message:"Unknown error"}`)}}}};export{L as c,V as u};
