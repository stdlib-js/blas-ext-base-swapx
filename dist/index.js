"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var y=c(function(J,p){
var g=require('@stdlib/blas-base-scopy/dist').ndarray,s=5;function k(i,r,u,t,o,e,q,j){var n,a,f,v;if(i<=0)return e;if(r===0)return g(i,u,t,o,e,q,j);if(n=o,a=j,t===1&&q===1){if(f=i%s,f>0)for(v=0;v<f;v++)e[a]=u[n]+r,n+=t,a+=q;if(i<s)return e;for(v=f;v<i;v+=s)e[a]=u[n]+r,e[a+1]=u[n+1]+r,e[a+2]=u[n+2]+r,e[a+3]=u[n+3]+r,e[a+4]=u[n+4]+r,n+=s,a+=s;return e}for(v=0;v<i;v++)e[a]=u[n]+r,n+=t,a+=q;return e}p.exports=k
});var _=c(function(K,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(i,r,u,t,o,e){return z(i,r,u,t,x(i,t),o,e,x(i,e))}R.exports=A
});var O=c(function(L,M){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),C=y();B(E,"ndarray",C);M.exports=E
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=O(),m,b=F(D(__dirname,"./native.js"));G(b)?m=H:m=b;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
