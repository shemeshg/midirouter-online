"use strict";(self["webpackChunkmidi_router_client"]=self["webpackChunkmidi_router_client"]||[]).push([[465],{465:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var l=n(3396);function i(e,t,n,i,u,a){const r=(0,l.up)("AddNetworkDestinationComponent");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(r)])}var u=n(9242),a=n(7139);const r=(0,l._)("label",null,"Server name/ip",-1),o=(0,l._)("label",null,"Server port number",-1),d=(0,l.Uk)("Get remote ports"),s=(0,l._)("label",null,"Server remote midi port",-1),p=(0,l._)("option",{value:""},null,-1),m=["value"],v=(0,l.Uk)("OK"),c=(0,l.Uk)("Cancel");function w(e,t,n,i,w,I){const f=(0,l.up)("Btn"),_=(0,l.up)("CardBody"),k=(0,l.up)("Card"),C=(0,l.up)("Page");return(0,l.wg)(),(0,l.j4)(C,{text:e.headrMsg},{default:(0,l.w5)((()=>[(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l._)("p",null,[r,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.serverName=t)},null,512),[[u.nr,e.serverName]])]),(0,l._)("p",null,[o,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"number","onUpdate:modelValue":t[1]||(t[1]=t=>e.portNumber=t)},null,512),[[u.nr,e.portNumber,void 0,{number:!0}]])]),(0,l._)("p",null,[(0,l.Wm)(f,{onClick:e.getRemotePorts},{default:(0,l.w5)((()=>[d])),_:1},8,["onClick"])]),(0,l._)("p",null,[s,(0,l.wy)((0,l._)("select",{class:"w3-select","onUpdate:modelValue":t[2]||(t[2]=t=>e.destinationMidiId=t)},[p,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.remoteMidiPorts,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.midiInputId,value:e.midiInputId},(0,a.zw)(e.midiInputId)+" - "+(0,a.zw)(e.midiInputName),9,m)))),128))],512),[[u.bM,e.destinationMidiId,void 0,{number:!0}]])])])),_:1})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{onClick:e.doOk},{default:(0,l.w5)((()=>[v])),_:1},8,["onClick"]),(0,l.Wm)(f,{ml:!0,onClick:e.doCancel},{default:(0,l.w5)((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["text"])}n(7658);var I=n(4870),f=n(2483),_=n(2726),k=n(9135),C=n(622),g=n(797),b=n(7634),h=(0,l.aZ)({components:{Page:k.Z,Card:C.Z,CardBody:g.Z,Btn:b.Z},setup(){const e=(0,f.yj)(),t=(0,f.tv)(),n=(0,I.iH)(""),i=(0,I.iH)(12345),u=(0,I.iH)(""),a=[],r=(0,I.iH)(a),o=(0,l.Fl)((()=>e.params.filterid)),d=(0,l.Fl)((()=>e.params.midiinid)),s=(0,l.Fl)((()=>e.params.chainid)),p=(0,l.Fl)((()=>`${d.value}-${s.value} Add Network Destination`)),m=(0,l.Fl)((()=>_.loginStatus.userDataConfig.getMidiRouteInput(_.loginStatus.inPorts[Number(d.value)]))),v=(0,l.Fl)((()=>m.value.midiRouterChains[parseInt(s.value)].getFilterNetworkDestination(parseInt(o.value))));async function c(){try{u.value="",r.value.splice(0,r.value.length);const e=await _.loginNoSingleTon(n.value,i.value),t=Object.keys(e.inPorts);for(let n=0;n<t.length;n++){const l=parseInt(t[n]);r.value.push({midiInputId:l,midiInputName:e.inPorts[l]})}}catch(e){alert("Could not connect")}}function w(){if(""===u.value)return;const e=r.value.filter((e=>e.midiInputId===parseInt(u.value)))[0];"-1"===o.value?m.value.midiRouterChains[parseInt(s.value)].addFilterNetworkDestination(n.value,i.value,e):v.value.setVal(n.value,i.value,e),t.push(`/midiin/${d.value}`)}function k(){"-1"===o.value?t.push(`/AddChainFilter/${d.value}/${s.value}`):t.push(`/midiin/${d.value}`)}return(0,l.bv)((()=>{"-1"!==o.value&&(n.value=v.value.serverName,i.value=v.value.serverPort,u.value=v.value.baseMidiRouteInput.midiInputId.toString(),r.value=[v.value.baseMidiRouteInput])})),{doCancel:k,doOk:w,getRemotePorts:c,filterObj:v,midiRouteInput:m,headrMsg:p,chainid:s,midiinid:d,filterid:o,remoteMidiPorts:r,destinationMidiId:u,portNumber:i,serverName:n}}}),N=n(89);const y=(0,N.Z)(h,[["render",w]]);var M=y,P=(0,l.aZ)({components:{AddNetworkDestinationComponent:M}});const D=(0,N.Z)(P,[["render",i]]);var F=D}}]);
//# sourceMappingURL=465.e6adbad8.js.map