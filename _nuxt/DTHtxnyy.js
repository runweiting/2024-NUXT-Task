import{m as B,o as x,c as w,a as i,t as m,s as X,v as O,r as U,x as Q,y as Y,z as Z,A as tt,f as et,B as E,C as st,n as g,l as rt,D as at,E as A,F,G as nt,H as k,I as ot,J as I,K as q,b as D,d as J,u as it}from"./DR25SJ_B.js";const H=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ct(a,s){s?s={...H,...s}:s=H;const r=W(s);return r.dispatch(a),r.toString()}const lt=Object.freeze(["prototype","__proto__","constructor"]);function W(a){let s="",r=new Map;const e=t=>{s+=t};return{toString(){return s},getContext(){return r},dispatch(t){return a.replacer&&(t=a.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let o="";const h=n.length;h<10?o="unknown:["+n+"]":o=n.slice(8,h-1),o=o.toLowerCase();let d=null;if((d=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):a.ignoreUnknown||this.unkown(t,o);else{let l=Object.keys(t);a.unorderedObjects&&(l=l.sort());let p=[];a.respectType!==!1&&!V(t)&&(p=lt),a.excludeKeys&&(l=l.filter(u=>!a.excludeKeys(u)),p=p.filter(u=>!a.excludeKeys(u))),e("object:"+(l.length+p.length)+":");const c=u=>{this.dispatch(u),e(":"),a.excludeValues||this.dispatch(t[u]),e(",")};for(const u of l)c(u);for(const u of p)c(u)}},array(t,n){if(n=n===void 0?a.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const d of t)this.dispatch(d);return}const o=new Map,h=t.map(d=>{const l=W(a);l.dispatch(d);for(const[p,c]of l.getContext())o.set(p,c);return l.toString()});return r=o,h.sort(),this.array(h,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),V(t)?this.dispatch("[native]"):this.dispatch(t.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),a.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,a.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,a.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(a.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const G="[native code] }",dt=G.length;function V(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-dt)===G}var ut=Object.defineProperty,ft=(a,s,r)=>s in a?ut(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r,L=(a,s,r)=>(ft(a,typeof s!="symbol"?s+"":s,r),r);class C{constructor(s,r){L(this,"words"),L(this,"sigBytes"),s=this.words=s||[],this.sigBytes=r===void 0?s.length*4:r}toString(s){return(s||ht).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new C([...this.words])}}const ht={stringify(a){const s=[];for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},pt={stringify(a){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<a.sigBytes;e+=3){const t=a.words[e>>>2]>>>24-e%4*8&255,n=a.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=a.words[e+2>>>2]>>>24-(e+2)%4*8&255,h=t<<16|n<<8|o;for(let d=0;d<4&&e*8+d*6<a.sigBytes*8;d++)r.push(s.charAt(h>>>6*(3-d)&63))}return r.join("")}},gt={parse(a){const s=a.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(a.charCodeAt(e)&255)<<24-e%4*8;return new C(r,s)}},_t={parse(a){return gt.parse(unescape(encodeURIComponent(a)))}};class mt{constructor(){L(this,"_data",new C),L(this,"_nDataBytes",0),L(this,"_minBufferSize",0),L(this,"blockSize",512/32)}reset(){this._data=new C,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=_t.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=n}return new C(r,n)}}class yt extends mt{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}var bt=Object.defineProperty,xt=(a,s,r)=>s in a?bt(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r,wt=(a,s,r)=>(xt(a,s+"",r),r);const K=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],vt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],$=[];class Dt extends yt{constructor(){super(...arguments),wt(this,"_hash",new C([...K]))}reset(){super.reset(),this._hash=new C([...K])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],n=e[1],o=e[2],h=e[3],d=e[4],l=e[5],p=e[6],c=e[7];for(let u=0;u<64;u++){if(u<16)$[u]=s[r+u]|0;else{const f=$[u-15],S=(f<<25|f>>>7)^(f<<14|f>>>18)^f>>>3,b=$[u-2],M=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;$[u]=S+$[u-7]+M+$[u-16]}const P=d&l^~d&p,T=t&n^t&o^n&o,z=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),_=(d<<26|d>>>6)^(d<<21|d>>>11)^(d<<7|d>>>25),v=c+_+P+vt[u]+$[u],y=z+T;c=p,p=l,l=d,d=h+v|0,h=o,o=n,n=t,t=v+y|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+o|0,e[3]=e[3]+h|0,e[4]=e[4]+d|0,e[5]=e[5]+l|0,e[6]=e[6]+p|0,e[7]=e[7]+c|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Bt(a){return new Dt().finalize(a).toString(pt)}function Ct(a,s={}){const r=typeof a=="string"?a:ct(a,s);return Bt(r).slice(0,10)}const St={class:"h-48 flex-none overflow-hidden rounded-t lg:h-auto lg:w-48 lg:rounded-l lg:rounded-r-none"},$t=["src","alt"],kt=B({__name:"image",props:{image:{},altText:{}},setup(a){return(s,r)=>(x(),w("div",St,[i("img",{src:s.image,alt:s.altText||"News image",class:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"},null,8,$t)]))}}),Pt={class:"flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"},Tt={class:"mb-8"},zt={class:"mb-2 text-xl font-bold text-gray-900"},Ot={class:"text-base text-gray-700"},Lt={class:"flex items-center justify-between"},Ut={class:"leading-none text-gray-900"},At={class:"leading-none text-gray-600"},Nt=B({__name:"content",props:{title:{},description:{},createdAt:{},updatedAt:{}},setup(a){return(s,r)=>(x(),w("div",Pt,[i("div",Tt,[i("div",zt,m(s.title),1),i("p",Ot,m(s.description),1)]),i("div",Lt,[i("p",Ut,"createdAt: "+m(s.createdAt),1),i("p",At,"updatedAt: "+m(s.updatedAt),1)])]))}}),Ft=a=>a==="defer"||a===!1;function Mt(...a){var z;const s=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(s);let[r,e,t={}]=a;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=X(),o=e,h=()=>O.value,d=()=>n.isHydrating?n.payload.data[r]:n.static.data[r];t.server=t.server??!0,t.default=t.default??h,t.getCachedData=t.getCachedData??d,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??O.deep,t.dedupe=t.dedupe??"cancel";const l=t.getCachedData(r,n),p=l!=null;if(!n._asyncData[r]||!t.immediate){(z=n.payload._errors)[r]??(z[r]=O.errorValue);const _=t.deep?U:Q;n._asyncData[r]={data:_(p?l:t.default()),pending:U(!p),error:Y(n.payload._errors,r),status:U("idle"),_default:t.default}}const c={...n._asyncData[r]};delete c._default,c.refresh=c.execute=(_={})=>{if(n._asyncDataPromises[r]){if(Ft(_.dedupe??t.dedupe))return n._asyncDataPromises[r];n._asyncDataPromises[r].cancelled=!0}if(_._initial||n.isHydrating&&_._initial!==!1){const y=_._initial?l:t.getCachedData(r,n);if(y!=null)return Promise.resolve(y)}c.pending.value=!0,c.status.value="pending";const v=new Promise((y,f)=>{try{y(o(n))}catch(S){f(S)}}).then(async y=>{if(v.cancelled)return n._asyncDataPromises[r];let f=y;t.transform&&(f=await t.transform(y)),t.pick&&(f=jt(f,t.pick)),n.payload.data[r]=f,c.data.value=f,c.error.value=O.errorValue,c.status.value="success"}).catch(y=>{if(v.cancelled)return n._asyncDataPromises[r];c.error.value=st(y),c.data.value=g(t.default()),c.status.value="error"}).finally(()=>{v.cancelled||(c.pending.value=!1,delete n._asyncDataPromises[r])});return n._asyncDataPromises[r]=v,n._asyncDataPromises[r]},c.clear=()=>Rt(n,r);const u=()=>c.refresh({_initial:!0}),P=t.server!==!1&&n.payload.serverRendered;{const _=rt();if(_&&!_._nuxtOnBeforeMountCbs){_._nuxtOnBeforeMountCbs=[];const f=_._nuxtOnBeforeMountCbs;Z(()=>{f.forEach(S=>{S()}),f.splice(0,f.length)}),tt(()=>f.splice(0,f.length))}P&&n.isHydrating&&(c.error.value||l!=null)?(c.pending.value=!1,c.status.value=c.error.value?"error":"success"):_&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?_._nuxtOnBeforeMountCbs.push(u):t.immediate&&u();const v=at();if(t.watch){const f=et(t.watch,()=>c.refresh());v&&E(f)}const y=n.hook("app:data:refresh",async f=>{(!f||f.includes(r))&&await c.refresh()});v&&E(y)}const T=Promise.resolve(n._asyncDataPromises[r]).then(()=>c);return Object.assign(T,c),T}function Rt(a,s){s in a.payload.data&&(a.payload.data[s]=void 0),s in a.payload._errors&&(a.payload._errors[s]=O.errorValue),a._asyncData[s]&&(a._asyncData[s].data.value=void 0,a._asyncData[s].error.value=O.errorValue,a._asyncData[s].pending.value=!1,a._asyncData[s].status.value="idle"),s in a._asyncDataPromises&&(a._asyncDataPromises[s]&&(a._asyncDataPromises[s].cancelled=!0),a._asyncDataPromises[s]=void 0)}function jt(a,s){const r={};for(const e of s)r[e]=a[e];return r}function Et(a,s,r){const[e={},t]=typeof s=="string"?[{},s]:[s,r],n=A(()=>k(a)),o=e.key||Ct([t,typeof n.value=="string"?n.value:"",...Ht(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const h=o===t?"$f"+o:o;if(!e.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:d,lazy:l,default:p,transform:c,pick:u,watch:P,immediate:T,getCachedData:z,deep:_,dedupe:v,...y}=e,f=F({...nt,...y,cache:typeof e.cache=="boolean"?void 0:e.cache}),S={server:d,lazy:l,default:p,transform:c,pick:u,immediate:T,getCachedData:z,deep:_,dedupe:v,watch:P===!1?[]:[f,n,...P||[]]};let b;return Mt(h,()=>{var j;(j=b==null?void 0:b.abort)==null||j.call(b,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),b=typeof AbortController<"u"?new AbortController:{};const R=k(e.timeout);let N;return R&&(N=setTimeout(()=>b.abort(new DOMException("Request aborted due to timeout.","AbortError")),R),b.signal.onabort=()=>clearTimeout(N)),(e.$fetch||globalThis.$fetch)(n.value,{signal:b.signal,...f}).finally(()=>{clearTimeout(N)})},S)}function Ht(a){var r;const s=[((r=k(a.method))==null?void 0:r.toUpperCase())||"GET",k(a.baseURL)];for(const e of[a.params||a.query]){const t=k(e);if(!t)continue;const n={};for(const[o,h]of Object.entries(t))n[k(o)]=k(h);s.push(n)}return s}const Vt=()=>{const a=ot(),{hexSchoolApiUrl:s}=a.public,{data:r,status:e,error:t,refresh:n}=Et(`${s}/api/v1/home/news`,{transform:p=>({...p,result:p.result.map(c=>({...c,createdAt:l(c.createdAt),updatedAt:l(c.updatedAt)}))})},"$X6xCQrGds3"),o=A(()=>{var p;return((p=r.value)==null?void 0:p.result)||[]}),h=A(()=>t.value!==null),d=A(()=>e.value==="pending"),l=p=>new Date(p).toLocaleDateString();return{newsList:o,hasError:h,isLoading:d,refresh:n}},Kt={key:0,class:"text-center"},It={key:1,class:"text-center"},qt=B({__name:"index",setup(a){const{newsList:s,hasError:r,isLoading:e,refresh:t}=Vt();return(n,o)=>{const h=kt,d=Nt;return g(e)?(x(),w("div",Kt,o[1]||(o[1]=[i("p",{class:"text-gray-500"},"Loading news...",-1)]))):g(r)?(x(),w("div",It,[o[2]||(o[2]=i("p",{class:"text-red-600"},"Failed to load news. Please try again.",-1)),i("button",{type:"button",class:"mt-2 text-blue-600 hover:underline",onClick:o[0]||(o[0]=l=>g(t)())}," Retry ")])):(x(!0),w(q,{key:2},I(g(s),l=>(x(),w("section",{key:l._id,class:"group w-full max-w-sm lg:flex lg:max-w-full"},[D(h,{image:l.image,"alt-text":l.altText},null,8,["image","alt-text"]),D(d,{title:l.title,description:l.description,"created-at":l.createdAt,"updated-at":l.updatedAt},null,8,["title","description","created-at","updated-at"])]))),128))}}}),Jt={class:"w-full max-w-sm lg:flex lg:max-w-full"},Wt={class:"h-48 flex-none overflow-hidden rounded-t lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"},Gt=["src","alt"],Xt={class:"flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"},Qt={class:"mb-8"},Yt={class:"flex items-center text-sm text-gray-600"},Zt={class:"mb-2 text-xl font-bold text-gray-900"},te={class:"text-base text-gray-700"},ee={class:"flex items-center"},se=["src","alt"],re={class:"text-sm"},ae={class:"leading-none text-gray-900"},ne={class:"text-gray-600"},oe=B({__name:"index",setup(a){const s=F({title:"Day 5 - 使用指令建立 Composables",description:"今日學習目標：學習使用指令建立 Composables、學習透過 Auto Imports 使用 Composables",imageUrl:"https://fakeimg.pl/300/",altText:"fakeimg",badge:"Members only",name:"runweiting",date:"Nov 12",avatarUrl:"https://fakeimg.pl/300/",avatarText:"Avatar of runweiting"});return(r,e)=>(x(),w("section",Jt,[i("div",Wt,[i("img",{src:g(s).imageUrl,alt:g(s).altText,class:"h-full w-full object-cover"},null,8,Gt)]),i("div",Xt,[i("div",Qt,[i("p",Yt,[e[0]||(e[0]=i("svg",{class:"mr-2 h-3 w-3 fill-current text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[i("path",{d:"M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"})],-1)),J(" "+m(g(s).badge),1)]),i("div",Zt,m(g(s).title),1),i("p",te,m(g(s).description),1)]),i("div",ee,[i("img",{class:"mr-4 h-10 w-10 rounded-full",src:g(s).avatarUrl,alt:g(s).avatarText},null,8,se),i("div",re,[i("p",ae,m(g(s).name),1),i("p",ne,m(g(s).date),1)])])])]))}}),ie=["src","alt"],ce=B({__name:"image",props:{url:{},altText:{}},setup(a){return(s,r)=>(x(),w("img",{class:"w-full",src:s.url,alt:s.altText},null,8,ie))}}),le={class:"px-6 py-4"},de={class:"mb-2 text-xl font-bold"},ue={class:"mb-2 text-base text-gray-700"},fe={class:"mb-2 text-base text-gray-700"},he={href:"#",class:"inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},pe=B({__name:"content",props:{title:{},description:{},price:{},buttonText:{}},setup(a){return(s,r)=>(x(),w("div",le,[i("div",de,m(s.title),1),i("p",ue,m(s.description),1),i("p",fe," $ "+m(s.price),1),i("a",he,[J(m(s.buttonText)+" ",1),r[0]||(r[0]=i("svg",{class:"ms-2 h-3.5 w-3.5 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[i("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1))])]))}}),ge={class:"px-3 pb-2 pt-2"},_e=B({__name:"tags",props:{tags:{}},setup(a){return(s,r)=>(x(),w("div",ge,[(x(!0),w(q,null,I(s.tags,e=>(x(),w("span",{key:e,class:"mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"},"#"+m(e),1))),128))]))}}),me={class:"max-w-sm overflow-hidden rounded shadow-lg"},ye=B({__name:"index",setup(a){const s=F({title:"這是 NUXT3 練習",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!",imageUrl:"https://fakeimg.pl/300/",altText:"fakeimg",price:1e3,buttonText:"立即預定",tags:["photography","travel"]});return(r,e)=>{const t=ce,n=pe,o=_e;return x(),w("section",me,[D(t,{url:g(s).imageUrl,"alt-text":g(s).altText},null,8,["url","alt-text"]),D(n,{title:g(s).title,description:g(s).description,price:g(s).price,"button-text":g(s).buttonText},null,8,["title","description","price","button-text"]),D(o,{tags:g(s).tags},null,8,["tags"])])}}}),be={class:"container"},xe={class:"h-auto rounded-3xl"},we={class:"text-xl text-stone-500"},ve={class:"pt-2 font-elf text-2xl text-stone-400"},De={class:"mb-4 grid grid-cols-1 gap-2 pt-2"},Be={class:"mb-4 grid grid-cols-1 gap-2 pt-2"},Ce={class:"grid grid-cols-3 gap-2"},ke=B({__name:"index",setup(a){const s=it(),r=U("首頁");return(e,t)=>{const n=qt,o=oe,h=ye;return x(),w("main",be,[i("div",xe,[i("p",we,"這是"+m(g(r)),1),t[0]||(t[0]=i("p",{class:"pt-2 font-elf text-3xl font-bold text-stone-500"},"Page: ㄓㄜˋㄕˋㄕㄡˇㄧㄝˋ",-1)),i("p",ve," ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: "+m(g(s).fullPath),1),t[1]||(t[1]=i("p",{class:"pt-4 text-3xl font-semibold text-stone-700"},"最新消息",-1)),i("div",De,[D(n)]),i("div",Be,[D(o),D(o)]),i("div",Ce,[D(h),D(h),D(h)])])])}}});export{ke as default};
