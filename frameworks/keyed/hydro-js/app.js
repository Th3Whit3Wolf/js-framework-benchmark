window.requestIdleCallback=window.requestIdleCallback||((e,t,n=performance.now())=>window.setTimeout(e,0,{didTimeout:!1,timeRemaining:()=>Math.max(0,5-(performance.now()-n))}));var Je=((e=document.createRange())=>(e.selectNodeContents(e.createContextualFragment("<template>").lastChild),e.createContextualFragment.bind(e)))(),F=new WeakMap,R=new WeakMap,g=new WeakMap,q=new WeakMap,S=new WeakMap,N=new WeakMap,h=new WeakMap,H=new WeakMap,Ee=Symbol("boundFunctions"),D=!0,be=!0,G=!1;var Ne=/\{\{((\s|.)*?)\}\}/;var Re=/\n/g,Se=/[\.\[\]]/,C=/^on/,_e=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];function m(e){return e!=null&&typeof e=="object"}function E(e){return typeof e=="function"}function _(e){return e.splitText!==void 0}function j(e){return e instanceof Node}function T(e){return e.nodeName!=="svg"&&"getElementById"in e}function L(e){return m(e)&&"event"in e&&"options"in e}function w(e){return Reflect.get(e,"isProxy")}function ie(e){return m(e)&&typeof e.then=="function"}function Me(){return Math.random().toString(32).slice(2)}function I(e,t,n){return _e.includes(t)&&!n?(e.removeAttribute(t),!1):(e.setAttribute(t,n),!0)}function v(e,t,n){e.addEventListener(t,E(n)?n:n.event,E(n)?{}:n.options)}function X(e,t){let n=document.createNodeIterator(e,window.NodeFilter.SHOW_ELEMENT),o;for(;o=n.nextNode();){o.getAttributeNames().forEach(c=>{if(t&&c.startsWith("on")){let r=c.replace(C,""),s=t[o.getAttribute(c)];if(!s){Q(o,c);return}o.removeAttribute(c),L(s)?(o.addEventListener(r,s.event,s.options),R.has(o)?R.get(o).push(s.event):R.set(o,[s.event])):(o.addEventListener(r,s),R.has(o)?R.get(o).push(s):R.set(o,[s]))}else Q(o,c)});let i=o.firstChild;for(;i;)_(i)&&Q(i),i=i.nextSibling}}function Q(e,t){let n,o;for(_(e)?n=e.nodeValue:(n=e.getAttribute(t),n===""&&(n=t,n.startsWith("{{")&&e.removeAttribute(n)));o=n.match(Ne);){let[i,c]=o,r=c.trim().replace(Re,"").split(Se).filter(Boolean),[s,a]=P(r),f=r[r.length-1],u=o.index,p=u+String(s).length;if(j(s)){e.nodeValue=n.replace(i,""),e.after(s),Y(u,p,s,f,a,t);return}if(_(e)){let l=m(s)?JSON.stringify(s):s??"";n=n.replace(i,l),n!=null&&(e.nodeValue=n)}else if(t==="bind"){n=n.replace(i,""),e.removeAttribute(t);let l=m(s)&&w(s)?s:a;S.has(l)?S.get(l).push(e):S.set(l,[e]);continue}else if(t==="two-way"){let l=d=>{e.addEventListener(d,({target:y})=>{Reflect.set(a,f,y.value)})};e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&e.type==="text"?(e.value=s,l("input")):e instanceof HTMLSelectElement?(e.value=s,l("change")):e instanceof HTMLInputElement&&e.type==="radio"?(e.checked=e.value===s,l("change")):e instanceof HTMLInputElement&&e.type==="checkbox"&&(e.checked=s.includes(e.name),e.addEventListener("change",({target:d})=>{d.checked?s.includes(e.name)||s.push(e.name):s.splice(s.indexOf(e.name),1)})),n=n.replace(i,""),e.setAttribute("two-way","")}else if(E(s)||L(s))n=n.replace(i,""),e.removeAttribute(t),v(e,t.replace(C,""),s);else if(m(s)){Object.entries(s).forEach(([l,d])=>{n=n.replace(i,""),E(d)||L(d)?v(e,l.replace(C,""),d):(f=l,I(e,l,d)?p=u+String(d).length:p=u),Y(u,p,e,f,s,l)});continue}else n=n.replace(i,s),I(e,t,n===String(s)?s:n)||(n=n.replace(s,""));Y(u,p,e,f,a,t)}}function Y(e,t,n,o,i,c){let r=[e,t,c];if(F.has(n)?F.get(n).push(r):F.set(n,[r]),g.has(i)){let s=g.get(i);if(s.has(o)){let a=s.get(o);if(a.has(n))a.get(n).push(r);else{let f=[r];a.set(f,n),a.set(n,f)}}else{let a=[r];s.set(o,new Map([[a,n],[n,a]]))}}else{let s=[r];g.set(i,new Map([[o,new Map([[s,n],[n,s]])]]))}}function P(e){let t,n;return t=n=x,e.forEach(o=>{n=t,t=Reflect.get(n,o)}),[t,n]}function Z(e,t,n){let o=[],i=[];if(_(e))return N.has(e)&&o.push(N.get(e)),h.has(e)&&o.push(h.get(e)),N.has(t)&&i.push(N.get(t)),h.has(t)&&i.push(h.get(t)),!(o.length!==i.length||String(o)!==String(i));if(R.has(e)&&o.push(...R.get(e)),R.has(t)&&i.push(...R.get(t)),N.has(e)&&o.push(N.get(e)),h.has(e)&&o.push(h.get(e)),N.has(t)&&i.push(N.get(t)),h.has(t)&&i.push(h.get(t)),o.length!==i.length||String(o)!==String(i))return!1;for(let c=0;c<e.childNodes.length;c++)if(n){if(_(e.childNodes[c])&&!Z(e.childNodes[c],t.childNodes[c],n))return!1}else if(!Z(e.childNodes[c],t.childNodes[c]))return!1;return!0}function oe(e,t,n){return e.isEqualNode(t)&&Z(e,t,n)}function V(e,t="",n=D){if(n)return W(V,e,t,!1),ce(e);Reflect.get(e,"reactive")&&(e=A(e));let o;if(T(e)&&(o=Array.from(e.childNodes),H.set(e,o)),!t)document.body.append(e);else{if(typeof t=="string"){let i=document.querySelector(t);if(i)t=i;else return()=>{}}be?_(e)?(U(e,t),M(t,h)):oe(e,t)||ye(e,t):(U(e,t),M(t,h))}return M(e,N),o?.forEach(i=>{M(i,N)}),ce(T(e)?o:e)}function K(e,t){if(t.has(e)){let n=t.get(e);D?W(n):n(),t.delete(e)}}function M(e,t){if(t===N&&!Te||t===h&&!we)return;K(e,t);let n=document.createNodeIterator(e,window.NodeFilter.SHOW_ELEMENT),o;for(;o=n.nextNode();){K(o,t);let i=o.firstChild;for(;i;)_(i)&&K(i,t),i=i.nextSibling}}function xe(e,t){for(let[n,o]of e.entries())for(let i=0;i<o.length;i++){let c=o[i];(t.contains(c)||t.isSameNode(c))&&(o.splice(i,1),i--),o.length===0&&e.delete(n)}}function ye(e,t){let n=document.createNodeIterator(e,window.NodeFilter.SHOW_ELEMENT),o=document.createNodeIterator(t,window.NodeFilter.SHOW_ELEMENT),i;G&&(i=document.createElement("template"),t===document.documentElement?t.append(i):T(t)?H.get(t)[0].before(i):t.before(i),i.append(e));let c,r=new Map;for(;c=o.nextNode();)G&&c===i||(r.has(c.localName)?r.get(c.localName).push(c):r.set(c.localName,[c]));let s;for(;s=n.nextNode();){let a=r.get(s.localName);if(a)for(let f=0;f<a.length;f++){let u=a[f];if(oe(s,u,!0)){s.replaceWith(u),M(s,h),xe(r,u);break}}}if(G){let a=T(e)?Array.from(i.childNodes):[e];if(T(t)){let f=H.get(t);a.forEach(u=>f[0].before(u)),f.forEach(u=>u.remove())}else t.replaceWith(...a);i.remove(),M(t,h)}else U(e,t),M(t,h);r.clear()}function U(e,t){if(T(t)){let n=H.get(t);if(T(e)){let o=Array.from(e.childNodes);n.forEach((i,c)=>{c<o.length?V(o[c],i):i.remove()})}else n.forEach((o,i)=>{i===0?V(e,o):o.remove()})}else t.replaceWith(e)}function ce(e){return Array.isArray(e)?()=>e.forEach(k):()=>k(e)}function k(e){e.isConnected&&(e.remove(),M(e,h))}function W(e,...t){navigator.scheduling?navigator.scheduling.isInputPending()?setTimeout(W,0,e,t):e(...t):window.requestIdleCallback(()=>e(...t))}function z(e){let t;do t=Me();while(Reflect.has(x,t));Reflect.set(x,t,e),Reflect.set(o,"reactive",!0);let n=re(o,[t]);return n;function o(i){let c=(this&&Reflect.get(this,"reactive")?this:n).__keys__,[r,s]=P(c),a=c[c.length-1];if(E(i)){let f=i(r);if(r===f)return;Reflect.set(s,a,f??r)}else Reflect.set(s,a,i)}}function re(e,t){return new Proxy(e,{get(n,o,i){return o==="reactive"?!0:o==="__keys__"?t:o===Symbol.toPrimitive?()=>`{{${t.join(".")}}}`:re(n,[...t,o])}})}function le(e){let t=e.__keys__;return[t[t.length-1],t.length===1]}function Ae(e){let[t,n]=le(e);if(n)Reflect.set(x,t,null);else{let[o,i]=P(e.__keys__);Reflect.set(i,t,null)}}function ee(e,t){let[n,o]=le(e);if(o)x.observe(n,t);else{let[i,c]=P(e.__keys__);c.observe(n,t)}}function fe(e,t,n,o=e){let i=r=>(!Reflect.get(e,"reactive")&&E(e)?e(r):ie(r)?!1:r)?E(t)?t():t:E(n)?n():n,c=z(i(A(o)));return ee(o,r=>{r===null?Ae(c):c(i(r))}),c}var ae=!1,ue=new Set,O=new WeakMap,Be=new WeakMap;function A(e){let[t]=P(e.__keys__);return t}var Te=!1;var we=!1;function te(e={}){let t=Symbol("handlers"),n=new WeakMap,o=new Proxy(e,{set(i,c,r,s){ae&&(ue.add(s),O.has(s)?O.get(s).add(c):O.set(s,new Set([c])));let a=!0,f=Reflect.get(i,c,s);if(f===r)return a;if(r===null){if(g.has(s)){let l=g.get(s);l.delete(String(c)),l.size===0&&g.delete(s)}let p=Reflect.get(i,t,s);if(p.has(c)){let l=p.get(c);l.forEach(d=>d(null,f)),l.clear(),s.unobserve(c)}return m(f)&&w(f)?(g.delete(f),S.has(f)&&(S.get(f).forEach(k),S.delete(f)),de(f)):S.has(s)&&(S.get(s).forEach(k),S.delete(s)),a=Reflect.deleteProperty(s,c),a}if(ie(r))return r.then(l=>{s[c]=l}).catch(l=>{console.error(l),s[c]=null}),a=Reflect.set(i,c,r,s),a;j(r)?a=Reflect.set(i,c,r,s):m(r)&&!w(r)?(a=Reflect.set(i,c,te(r),s),Object.entries(r).forEach(([p,l])=>{m(l)&&!w(l)&&Reflect.set(r,p,te(l))})):a=Reflect.set(i,c,r,s);let u=Reflect.get(i,c,s);return g.has(f)?pe(f,c,u,f):g.has(s)&&pe(s,c,u,f),m(r)&&w(r)&&g.has(f)&&(q.set(f,g.get(f)),q.has(r)?(g.set(f,q.get(r)),q.delete(r)):g.set(f,g.get(r))),a&&Reflect.get(i,t,s).get(c)?.forEach(p=>p(u,f)),m(f)&&w(f)&&de(f,u),a},get(i,c,r){ae&&(ue.add(r),O.has(r)?O.get(r).add(c):O.set(r,new Set([c])));let s=Reflect.get(i,c,r);return E(s)?(n.has(s)||n.set(s,s.bind(i)),n.get(s)):s}});return Reflect.defineProperty(o,"isProxy",{value:!0}),Reflect.defineProperty(o,"asyncUpdate",{value:D,writable:!0}),Reflect.defineProperty(o,t,{value:new Map}),Reflect.defineProperty(o,"observe",{value:(i,c)=>{let r=Reflect.get(o,t);r.has(i)?r.get(i).add(c):r.set(i,new Set([c]))},configurable:!0}),Reflect.defineProperty(o,"getObservers",{value:()=>Reflect.get(o,t),configurable:!0}),Reflect.defineProperty(o,"unobserve",{value:(i,c)=>{let r=Reflect.get(o,t);if(i){if(r.has(i))if(c==null)r.delete(i);else{let s=r.get(i);s?.has(c)&&s.delete(c)}}else r.clear()},configurable:!0}),window.queueMicrotask(()=>{o===x&&Reflect.defineProperty(o,Ee,{value:n})}),o}function de(e,t){e.getObservers().forEach(i=>i.clear()),e.unobserve();let o=[];Object.entries(e).forEach(([i,c])=>{m(c)&&w(c)&&(o.push(i),(!t||!Reflect.has(t,i)||c!==Reflect.get(t,i))&&Reflect.set(e,i,null))}),Array.isArray(e)&&o.reverse().forEach(i=>o.splice(i,1))}function pe(e,t,n,o){let i=g.get(e);i.has(String(t))&&(Reflect.get(e,"asyncUpdate")?W(J,i,String(t),n,o):J(i,String(t),n,o)),m(n)&&Object.entries(n).forEach(([c,r])=>{let s=m(o)&&Reflect.get(o,c)||o;i.has(c)&&(Reflect.get(e,"asyncUpdate")?W(J,i,c,r,s):J(i,c,r,s))})}function J(e,t,n,o){let i=e.get(t);i.forEach(c=>{if(j(c)){if(!c.isConnected){let r=i.get(c);i.delete(c),i.delete(r)}return}c.forEach(r=>{let s=i.get(c),[a,f,u]=r,p=!1;if(j(n))U(n,s),M(s,h);else if(_(s)){p=!0;let l=s.nodeValue;s.nodeValue=l.substring(0,a)+String(n)+l.substring(f)}else if(u==="two-way")s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement||s instanceof HTMLInputElement&&s.type==="text"?s.value=String(n):s instanceof HTMLInputElement&&(s.type==="checkbox"||s.type==="radio")&&(s.checked=Array.isArray(n)?n.includes(s.name):String(n)===s.value);else if(E(n)||L(n)){let l=u.replace(C,"");s.removeEventListener(l,E(n)?n:n.event),v(s,l,n)}else if(m(n))Object.entries(n).forEach(([l,d])=>{if(E(d)||L(d)){let y=l.replace(C,"");s.removeEventListener(y,E(d)?d:d.event),v(s,y,d)}else I(s,l,d)});else{p=!0;let l=s.getAttribute(u);l?(l=l.substring(0,a)+String(n)+l.substring(f),I(s,u,l===String(n)?n:l)):I(s,u,n)}if(p){r[1]=a+String(n).length;let l;F.get(s)?.forEach(d=>{if(d===r){l=!0;return}if(l&&(_(s)||u===d[2])){let y=String(o).length-String(n).length;d[0]-=y,d[1]-=y}})}})})}var x=te(),B=document.querySelector.bind(document),De=document.querySelectorAll.bind(document);var he=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],ge=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],me=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],Oe=he.length,Ce=ge.length,Le=me.length,Ie=1;function se(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]={id:Ie++,label:he[ne(Oe)]+" "+ge[ne(Ce)]+" "+me[ne(Le)]};return t}function ne(e){return Math.random()*e|0}X(B("#main"),{run:We,runLots:$e,add:Pe,update:qe,clear:Fe,swapRows:He});var b=z([]),$=z(-1);ee(b,(e,t)=>{je(e,t),(!e.length||!t.length)&&$(-1)});function Pe(){b(e=>[...e,...se(1e3)])}function We(){b(se(1e3))}function $e(){b(se(1e4))}function Fe(){b([])}function qe(){A(b).forEach((e,t)=>{t%10==0&&(e.label+=" !!!")})}function He(){b(e=>{e.length>998&&(ve(e),[e[1],e[998]]=[e[998],e[1]])})}function Ue(e){let t=A(b).findIndex(n=>n.id===e);b[t].setter(null),b(n=>{n.splice(t,1)})}function ve(e){let t=e[1].id,n=e[998].id;[t,n].includes(A($))&&$(o=>o===t?n:t)}function je(e,t){for(let n=0;n<t.length&&e.length;n++)t[n].id=e[n].id,t[n].label=e[n].label,e[n]=t[n];for(let n=t.length;n<e.length;n++)ke(e[n],n)}function ke(e,t){let n=B("#singleRow").content.cloneNode(!0).firstChild;n.classList.add(String(fe(o=>o===e.id,"danger","",$))),n.setAttribute("bind",String(b[t])),n.querySelector(".col-md-1").textContent=String(b[t].id),n.querySelector(".col-md-4 > a").textContent=String(b[t].label),X(n,{remove:()=>Ue(e.id),select:()=>$(e.id)}),B("#tbody").appendChild(n)}
