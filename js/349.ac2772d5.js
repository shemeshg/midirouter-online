"use strict";(self["webpackChunkmidi_router_client"]=self["webpackChunkmidi_router_client"]||[]).push([[349],{6631:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(3396);const l={class:"w3-container w3-blue"};function o(e,n,a,o,u,i){return(0,t.wg)(),(0,t.iD)("header",l,[(0,t._)("h5",null,[(0,t.WI)(e.$slots,"default")])])}var u=(0,t.aZ)({}),i=a(89);const s=(0,i.Z)(u,[["render",o]]);var r=s},7349:function(e,n,a){a.r(n),a.d(n,{default:function(){return B}});var t=a(3396);function l(e,n,a,l,o,u){const i=(0,t.up)("PresetsComponent");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(i)])}a(7658);var o=a(9242),u=a(7139);const i=(0,t.Uk)("Select active preset"),s=["value"],r={class:"switch w3-right"},c=["onUpdate:modelValue"],d=(0,t._)("span",{class:"slider round"},null,-1),p=(0,t.Uk)("Add"),f=(0,t.Uk)("Edit"),g=(0,t.Uk)("Delete"),w=(0,t.Uk)(" ↑ "),v=(0,t.Uk)(" ↓ "),m=(0,t._)("label",null,"Auto applay preset on file upload",-1),C=(0,t._)("label",{class:"w3-margin-left"},"Upload config",-1),_=(0,t.Uk)("Appay and download");function y(e,n,a,l,y,D){const h=(0,t.up)("CardHeader"),k=(0,t.up)("Btn"),U=(0,t.up)("CardBody"),P=(0,t.up)("Card"),S=(0,t.up)("Page");return(0,t.wg)(),(0,t.j4)(S,{text:"Presets"},{default:(0,t.w5)((()=>[(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[i])),_:1}),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.midiRoutePresets,((a,l)=>((0,t.wg)(),(0,t.iD)("p",{key:l},[(0,t.wy)((0,t._)("input",{class:"w3-radio",type:"radio","onUpdate:modelValue":n[0]||(n[0]=n=>e.activePresetID=n),value:l},null,8,s),[[o.G2,e.activePresetID]]),(0,t._)("label",r,[(0,t.wy)((0,t._)("input",{type:"checkbox","onUpdate:modelValue":e=>a.isEnabled=e,onChange:n[1]||(n[1]=(...n)=>e.doUpdate&&e.doUpdate(...n))},null,40,c),[[o.e8,a.isEnabled]]),d]),(0,t._)("label",null,(0,u.zw)(l)+" "+(0,u.zw)(a.name),1)])))),128)),(0,t._)("p",null,[(0,t.Wm)(k,{onClick:n[2]||(n[2]=n=>e.$router.push("/preset/-1"))},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(k,{ml:!0,onClick:n[3]||(n[3]=n=>e.$router.push(`/preset/${e.activePresetID}`))},{default:(0,t.w5)((()=>[f])),_:1}),e.midiRoutePresets.length>1?((0,t.wg)(),(0,t.j4)(k,{key:0,ml:!0,onClick:n[4]||(n[4]=n=>e.doDelete())},{default:(0,t.w5)((()=>[g])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(k,{ml:!0,onClick:n[5]||(n[5]=n=>e.doMoveUp())},{default:(0,t.w5)((()=>[w])),_:1}),(0,t.Wm)(k,{ml:!0,onClick:n[6]||(n[6]=n=>e.doMoveDown())},{default:(0,t.w5)((()=>[v])),_:1})])])),_:1})])),_:1}),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("input",{class:"w3-check w3-margin-left",type:"checkbox","onUpdate:modelValue":n[7]||(n[7]=n=>e.changeAndApplay=n)},null,512),[[o.e8,e.changeAndApplay]]),m])),_:1}),(0,t.Wm)(P,{mt:!0},{default:(0,t.w5)((()=>[(0,t._)("p",null,[C,(0,t._)("input",{class:"w3-button w3-teal w3-margin-left",type:"file",onChange:n[8]||(n[8]=(...n)=>e.loadFile&&e.loadFile(...n)),ref:"el"},null,544),(0,t.Wm)(k,{ml:!0,onClick:e.saveToFile},{default:(0,t.w5)((()=>[_])),_:1},8,["onClick"])])])),_:1})])),_:1})}var D=a(4870),h=a(2726),k=a(9742),U=a(9135),P=a(622),S=a(6631),Z=a(797),b=a(7634),W=(0,t.aZ)({components:{Page:U.Z,Card:P.Z,CardHeader:S.Z,CardBody:Z.Z,Btn:b.Z},setup(){const e=(0,D.iH)(!0),n=(0,D.iH)(h.loginStatus.userDataConfig.midiRoutePresets),a=(0,D.iH)(null),l=(0,D.iH)(h.loginStatus.userDataConfig.activePresetID);function o(n){h.loginStatus.userDataConfig.activePresetID=n,e.value&&h.loginStatus.userDataConfig.applyChanges(h.connection)}function u(){e.value&&h.loginStatus.userDataConfig.applyChanges(h.connection)}function i(){n.value.splice(l.value,1),o(0)}function s(){h.loginStatus.userDataConfig.applyChanges(h.connection)}async function r(){const n=await k.Z_(a.value);a.value="",h.loginStatus.resetUserDataConfig(JSON.parse(n)),e.value&&await h.loginStatus.userDataConfig.applyChanges(h.connection)}async function c(){await h.loginStatus.userDataConfig.applyChanges(h.connection),k.N7("config.midiRouter",JSON.stringify(h.loginStatus.userDataConfig))}function d(){k.Rp(n.value,l.value,l.value-1)}function p(){k.Rp(n.value,l.value,l.value+1)}return(0,t.YP)((()=>l.value),(e=>{o(e)})),{doMoveDown:p,doMoveUp:d,saveToFile:c,loadFile:r,applyChanges:s,doDelete:i,doUpdate:u,activePresetID:l,midiRoutePresets:n,changeAndApplay:e,el:a}}}),A=a(89);const H=(0,A.Z)(W,[["render",y]]);var I=H,R=(0,t.aZ)({components:{PresetsComponent:I}});const F=(0,A.Z)(R,[["render",l]]);var B=F}}]);
//# sourceMappingURL=349.ac2772d5.js.map