"use strict";(self["webpackChunkmidi_router_client"]=self["webpackChunkmidi_router_client"]||[]).push([[380],{6380:function(e,n,l){l.r(n),l.d(n,{default:function(){return y}});var a=l(3396);function t(e,n,l,t,u,i){const o=(0,a.up)("AddConsoleLogComponent");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o)])}var u=l(9242);const i=(0,a._)("label",null,"Log to",-1),o=(0,a._)("option",{value:"0"},"Client",-1),d=(0,a._)("option",{value:"1"},"Server",-1),r=[o,d],s=(0,a._)("label",null,"Userdata",-1),c=(0,a.Uk)("OK"),p=(0,a.Uk)("Cancel");function v(e,n,l,t,o,d){const v=(0,a.up)("CardBody"),m=(0,a.up)("Card"),C=(0,a.up)("Btn"),f=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)(f,{text:e.headrMsg},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a._)("p",null,[i,(0,a.wy)((0,a._)("select",{class:"w3-select",name:"option","onUpdate:modelValue":n[0]||(n[0]=n=>e.destinationId=n)},r,512),[[u.bM,e.destinationId,void 0,{number:!0}]])]),(0,a._)("p",null,[s,(0,a.wy)((0,a._)("input",{class:"w3-input","onUpdate:modelValue":n[1]||(n[1]=n=>e.userdata=n)},null,512),[[u.nr,e.userdata]])])])),_:1})])),_:1}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(C,{onClick:e.doOk},{default:(0,a.w5)((()=>[c])),_:1},8,["onClick"]),(0,a.Wm)(C,{ml:!0,onClick:e.doCancel},{default:(0,a.w5)((()=>[p])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["text"])}l(7658);var m=l(4870),C=l(2483),f=l(2726),_=l(9135),g=l(622),w=l(797),h=l(7634),k=(0,a.aZ)({components:{Page:_.Z,Card:g.Z,CardBody:w.Z,Btn:h.Z},setup(){const e=(0,C.yj)(),n=(0,C.tv)(),l=(0,m.iH)(0),t=(0,m.iH)("{}"),u=(0,a.Fl)((()=>e.params.filterid)),i=(0,a.Fl)((()=>e.params.midiinid)),o=(0,a.Fl)((()=>f.loginStatus.userDataConfig.getMidiRouteInput(f.loginStatus.inPorts[Number(i.value)]))),d=(0,a.Fl)((()=>e.params.chainid));function r(){return o.value.midiRouterChains[parseInt(d.value)].getFilterToConsle(parseInt(u.value))}const s=(0,a.Fl)((()=>`${i.value}-${d.value} Add console log`));function c(){"-1"===u.value?o.value.midiRouterChains[parseInt(d.value)].addFilterToConsle(l.value,JSON.parse(t.value)):r().setVal(l.value,JSON.parse(t.value)),n.push(`/midiin/${i.value}`)}function p(){"-1"===u.value?n.push(`/AddChainFilter/${i.value}/${d.value}`):n.push(`/midiin/${i.value}`)}return(0,a.bv)((()=>{"-1"!==u.value&&(l.value=r().logTo,t.value=JSON.stringify(r().userdata))})),{doCancel:p,doOk:c,headrMsg:s,midiinid:i,chainid:d,midiRouteInput:o,filterid:u,userdata:t,destinationId:l}}}),b=l(89);const F=(0,b.Z)(k,[["render",v]]);var I=F,Z=(0,a.aZ)({components:{AddConsoleLogComponent:I}});const W=(0,b.Z)(Z,[["render",t]]);var y=W}}]);
//# sourceMappingURL=380.a345658f.js.map