import{s as Q,n as _}from"../chunks/scheduler.CtbWrGNo.js";import{S as V,i as Z,e as b,s as tt,k as A,l as et,c as C,d as h,f as nt,a as v,m as E,n as i,h as $,g as k}from"../chunks/index.CGLdux1U.js";const st=!0,dt=Object.freeze(Object.defineProperty({__proto__:null,prerender:st},Symbol.toStringTag,{value:"Module"}));function at(d){let t,s,n,e,a;return{c(){t=b("meta"),s=tt(),n=b("main"),e=A("svg"),a=A("path"),this.h()},l(o){const c=et("svelte-1uxgyp8",document.head);t=C(c,"META",{name:!0,content:!0}),c.forEach(h),s=nt(o),n=C(o,"MAIN",{});var r=v(n);e=E(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var l=v(e);a=E(l,"path",{d:!0,stroke:!0,fill:!0}),v(a).forEach(h),l.forEach(h),r.forEach(h),this.h()},h(){document.title="Wavy Circle",i(t,"name","description"),i(t,"content","Web Playground: Wavy Circle"),i(a,"d",d[0]),i(a,"stroke","none"),i(a,"fill","black"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width",M),i(e,"height",X),i(e,"viewBox",`0 0 ${M} ${X}`)},m(o,c){$(document.head,t),k(o,s,c),k(o,n,c),$(n,e),$(e,a)},p:_,i:_,o:_,d(o){o&&(h(s),h(n)),h(t)}}}const M=400,X=400,O=13,S=18,W=18;function ot(d,t,s=!1){const n=s?-1:1;return[-t*n,d*n]}function f(d,t,s,n,e,a,o=!1){const[c,r]=ot(d,t,o),l=c*s,m=r*s;return[d*n+e+l,t*n+a+m]}function ct(d){const t=M/2,s=X/2,n=t*.9,e=t*.82,a=o();function o(){const c=-Math.PI/2,r=Math.PI*2/O,l=r/2;let m="";for(let u=0;u<O;u++){const Y=c+r*u-l,H=c+r*u,w=c+r*u+l,x=Math.cos(Y),y=Math.sin(Y),I=x*e+t,j=y*e+s,[B,L]=f(x,y,W,e,t,s),p=Math.cos(H),g=Math.sin(H),[R,T]=f(p,g,S,n,t,s,!0),q=p*n+t,z=g*n+t,[N,D]=f(p,g,S,n,t,s),P=Math.cos(w),U=Math.sin(w),[F,G]=f(P,U,W,e,t,s,!0),J=P*e+t,K=U*e+t;u===0&&(m+=`M${I} ${j}`),m+=`C${B} ${L},${R} ${T},${q} ${z}C${N} ${D},${F} ${G},${J} ${K}`}return m}return[a]}class lt extends V{constructor(t){super(),Z(this,t,ct,at,Q,{})}}export{lt as component,dt as universal};
