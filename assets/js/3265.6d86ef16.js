"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[3265],{3265:(e,a,t)=>{t.r(a),t.d(a,{bubble:()=>w});let n,o,l,h,i,c,s,d,r,p,u,f,b=!0;function m(){if(b){o.clearRect(0,0,l,h);for(let e in i)i[e].draw()}requestAnimationFrame(m)}function g(){let e=this;function a(){e.pos.x=Math.random()*l,e.pos.y=h+100*Math.random(),e.alpha=.1+Math.random()*s,e.alpha_change=2e-4+Math.random()*d,e.scale=.2+Math.random()*r,e.scale_change=Math.random()*p,e.speed=.1+Math.random()*u}e.pos={},a(),this.draw=function(){e.alpha<=0&&a(),e.pos.y-=e.speed,e.alpha-=e.alpha_change,e.scale+=e.scale_change,o.beginPath(),o.arc(e.pos.x,e.pos.y,10*e.scale,0,2*Math.PI,!1),o.fillStyle="rgba("+f+","+e.alpha+")",o.fill()}}function w(e,a,t,b,w,M,y){c=e,s=a,d=t,r=b,p=w,u=M,f=y,function(){n=document.getElementById("aurora-top-bubble-canvas"),function(){l=window.innerWidth,h=window.innerHeight;let e=document.getElementById("aurora-top-bubble-box");l=e.offsetWidth,h=e.offsetHeight,n.width=l,n.height=h}(),o=n.getContext("2d"),i=[];let e=l*c;for(let a=0;a<e;a++){let e=new g;i.push(e)}m()}()}}}]);