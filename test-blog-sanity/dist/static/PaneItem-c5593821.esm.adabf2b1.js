import{v as k,ab as x,C,bT as _,r as o,cG as T,j as c,cH as L,cI as g,a3 as M,cJ as E,cK as F,cL as R,cM as K,e as b,ad as W}from"./sanity.f9a24ab1.js";function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(r){B(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const G=(e,t)=>({title:b("em",{children:["No schema found for type ",c("code",{children:t})]}),subtitle:b("em",{children:["Document: ",c("code",{children:e})]}),media:()=>c(W,{})});function H(e){const{layout:t,value:n}=e;return c(g,i(i({},G(n._id,n._type)),{},{layout:t}))}function y(e,t,n){return e===!1?!1:e||t&&t.icon||n||!1}function U(e){const{icon:t,id:n,layout:r="default",pressed:u,schemaType:s,selected:l,title:d,value:a}=e,w=k(),f=x(),{ChildLink:p}=C(),m=_(n),h=Boolean(s&&s.name&&w.get(s.name)),[v,P]=o.exports.useState(!1),j=o.exports.useMemo(()=>a&&T(a)?!s||!h?c(H,{value:a}):c(L,{documentPreviewStore:f,icon:y(t,s,R),layout:r,schemaType:s,value:a,presence:m}):c(g,{status:c(M,{muted:!0,children:c(E,{})}),icon:y(t,s,K),layout:r,title:d}),[f,h,t,r,s,d,a,m]),S=o.exports.useMemo(()=>function(I){return c(p,i(i({},I),{},{childId:n}))},[p,n]),D=o.exports.useCallback(()=>P(!0),[]);return o.exports.useEffect(()=>P(!1),[l]),c(F,{__unstable_focusRing:!0,as:S,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:D,pressed:u,selected:l||v,tone:"inherit",children:j})}export{U as P};
