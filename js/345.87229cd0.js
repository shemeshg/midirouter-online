"use strict";(self["webpackChunkmidi_router_client"]=self["webpackChunkmidi_router_client"]||[]).push([[345],{6631:function(e,i,t){t.d(i,{Z:function(){return r}});var l=t(3396);const n={class:"w3-container w3-blue"};function u(e,i,t,u,a,d){return(0,l.wg)(),(0,l.iD)("header",n,[(0,l._)("h5",null,[(0,l.WI)(e.$slots,"default")])])}var a=(0,l.aZ)({}),d=t(89);const o=(0,d.Z)(a,[["render",u]]);var r=o},1230:function(e,i,t){t.d(i,{Z:function(){return r}});var l=t(3396);const n={class:"w3-container w3-cell w3-cell-middle w3-right"};function u(e,i,t,u,a,d){return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.WI)(e.$slots,"default")])}var a=(0,l.aZ)({}),d=t(89);const o=(0,d.Z)(a,[["render",u]]);var r=o},4939:function(e,i,t){t.d(i,{Z:function(){return r}});var l=t(3396);const n={class:"w3-container w3-cell w3-cell-middle"};function u(e,i,t,u,a,d){return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.WI)(e.$slots,"default")])}var a=(0,l.aZ)({}),d=t(89);const o=(0,d.Z)(a,[["render",u]]);var r=o},4978:function(e,i,t){t.d(i,{Z:function(){return o}});var l=t(3396);function n(e,i,t,n,u,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.WI)(e.$slots,"default")])}var u=(0,l.aZ)({}),a=t(89);const d=(0,a.Z)(u,[["render",n]]);var o=d},9345:function(e,i,t){t.r(i),t.d(i,{default:function(){return pe}});var l=t(3396);function n(e,i,t,n,u,a){const d=(0,l.up)("MidiInComponent");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(d,{midiId:e.$route.params.id},null,8,["midiId"])])}var u=t(9242),a=t(7139);const d=(0,l.Uk)("Back to in ports"),o=(0,l.Uk)("Add chain"),r=(0,l._)("h5",null,"Ignore Types",-1),c=(0,l._)("label",null,"Sysex",-1),p=(0,l._)("label",null,"Time",-1),m=(0,l._)("label",null,"Sense",-1),s=(0,l._)("h5",null,"Clock",-1),w=(0,l._)("label",null,"Time signature from SPP",-1),I=(0,l._)("label",null,"upper numeral",-1),f=(0,l._)("label",null,"lower numeral",-1),v=(0,l.Uk)("Propagate Inputs"),C=(0,l._)("option",{value:""},null,-1),h=["value"],g=(0,l.Uk)("+"),_={class:"w3-ul w3-border w3-hoverable w3-margin-left"},k=(0,l.Uk)("Delete"),R=(0,l._)("h5",null,"14 Bit CC",-1),y=(0,l._)("label",null,"Channel",-1),b=(0,l._)("label",null,"CC",-1),W=(0,l.Uk)("+"),S={class:"w3-ul w3-border w3-hoverable w3-margin-left"},D=(0,l.Uk)("Delete"),x=(0,l._)("p",null," ",-1),U=(0,l._)("p",null," ",-1);function Z(e,i,t,n,Z,F){const T=(0,l.up)("router-link"),$=(0,l.up)("MidiFilterChain"),A=(0,l.up)("Card"),P=(0,l.up)("Btn"),N=(0,l.up)("RowCell"),H=(0,l.up)("Row"),M=(0,l.up)("BtnHref"),B=(0,l.up)("RowCellRight"),O=(0,l.up)("CardBody"),V=(0,l.up)("Page");return(0,l.wg)(),(0,l.j4)(V,{text:e.headrMsg},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"router-link-exact-active router-link-active",to:"/midiinlist"},{default:(0,l.w5)((()=>[d])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.midiRouteInput.midiRouterChains,((i,t)=>((0,l.wg)(),(0,l.j4)(A,{mt:!0,key:t},{default:(0,l.w5)((()=>[(0,l.Wm)($,{chainItem:i,chainIdx:t,midiId:e.midiId,onDoSplice:i=>e.spliceRouterChain(t),onChangeItemName:t=>e.setChainItemName(t,i)},null,8,["chainItem","chainIdx","midiId","onDoSplice","onChangeItemName"])])),_:2},1024)))),128)),(0,l.Wm)(A,{mt:!0},{default:(0,l.w5)((()=>[(0,l._)("p",null,[(0,l.Wm)(P,{ml:!0,onClick:i[0]||(i[0]=i=>e.addChain())},{default:(0,l.w5)((()=>[o])),_:1})])])),_:1}),(0,l.Wm)(A,{mt:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[r,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{class:"w3-check",type:"checkbox","onUpdate:modelValue":i[1]||(i[1]=i=>e.midiRouteInput.ignoreTypes.midiSysex=i)},null,512),[[u.e8,e.midiRouteInput.ignoreTypes.midiSysex]]),c,(0,l.wy)((0,l._)("input",{class:"w3-check",type:"checkbox","onUpdate:modelValue":i[2]||(i[2]=i=>e.midiRouteInput.ignoreTypes.midiTime=i)},null,512),[[u.e8,e.midiRouteInput.ignoreTypes.midiTime]]),p,(0,l.wy)((0,l._)("input",{class:"w3-check",type:"checkbox","onUpdate:modelValue":i[3]||(i[3]=i=>e.midiRouteInput.ignoreTypes.midiSense=i)},null,512),[[u.e8,e.midiRouteInput.ignoreTypes.midiSense]]),m]),s,(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[w,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"number","onUpdate:modelValue":i[4]||(i[4]=i=>e.midiRouteInput.midiRouteClock.fromSppPos=i)},null,512),[[u.nr,e.midiRouteInput.midiRouteClock.fromSppPos,void 0,{number:!0}]])])),_:1})])),_:1}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[I,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"number","onUpdate:modelValue":i[5]||(i[5]=i=>e.midiRouteInput.midiRouteClock.timeSig=i)},null,512),[[u.nr,e.midiRouteInput.midiRouteClock.timeSig,void 0,{number:!0}]])])),_:1}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[f,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"number","onUpdate:modelValue":i[6]||(i[6]=i=>e.midiRouteInput.midiRouteClock.timeSigDivBy=i)},null,512),[[u.nr,e.midiRouteInput.midiRouteClock.timeSigDivBy,void 0,{number:!0}]])])),_:1})])),_:1}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("select",{class:"w3-select",name:"option","onUpdate:modelValue":i[7]||(i[7]=i=>e.propegateInputToAdd=i)},[C,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.inPortsWithoutSelfClockPropegate,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.midiInputId,value:e.midiInputId},(0,a.zw)(e.midiInputId)+" - "+(0,a.zw)(e.midiInputName),9,h)))),128))],512),[[u.bM,e.propegateInputToAdd]])])),_:1}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.Wm)(P,{ml:!0,onClick:i[8]||(i[8]=i=>e.addClockPropegateInput())},{default:(0,l.w5)((()=>[g])),_:1})])),_:1})])),_:1}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l._)("ul",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.midiRouteInput.midiRouteClock.propegateInputs,(i=>((0,l.wg)(),(0,l.iD)("li",{class:"w3-display-container",key:i.midiInputId},[(0,l.Uk)((0,a.zw)(i.midiInputId)+" - "+(0,a.zw)(i.midiInputName)+" ",1),(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{onClick:t=>e.spliceClockPropegateInput(i.midiInputId)},{default:(0,l.w5)((()=>[k])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])])),_:1}),R,(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[y,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"number","onUpdate:modelValue":i[9]||(i[9]=i=>e.cc14bitChannel=i),onFocus:i[10]||(i[10]=e=>e.target.select())},null,544),[[u.nr,e.cc14bitChannel,void 0,{number:!0}]])])),_:1}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[b,(0,l.wy)((0,l._)("input",{class:"w3-input",type:"number","onUpdate:modelValue":i[11]||(i[11]=i=>e.cc14bitCc=i),onFocus:i[12]||(i[12]=e=>e.target.select())},null,544),[[u.nr,e.cc14bitCc,void 0,{number:!0}]])])),_:1}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.Wm)(P,{ml:!0,onClick:i[13]||(i[13]=i=>e.addCc14bit())},{default:(0,l.w5)((()=>[W])),_:1})])),_:1})])),_:1}),(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l._)("ul",S,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.midiRouteInput.cc14bitAry,((i,t)=>((0,l.wg)(),(0,l.iD)("li",{class:"w3-display-container",key:t},[(0,l.Uk)(" Channel "+(0,a.zw)(i.channel)+" CC "+(0,a.zw)(i.cc)+" ",1),(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{onClick:i=>e.spliceCc14bit(t)},{default:(0,l.w5)((()=>[D])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])])),_:1}),x])),_:1})])),_:1}),U])),_:1},8,["text"])}t(7658);var F=t(4870),T=t(2726);const $=["value"],A=(0,l.Uk)("Delete"),P=["value"],N=(0,l.Uk)("Add"),H=(0,l.Uk)("Edit"),M=(0,l.Uk)("Delete"),B=(0,l.Uk)(" ↑ "),O=(0,l.Uk)(" ↓ ");function V(e,i,t,n,d,o){const r=(0,l.up)("BtnHref"),c=(0,l.up)("RowCellRight"),p=(0,l.up)("CardHeader"),m=(0,l.up)("Btn"),s=(0,l.up)("CardBody");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.chainIdx)+" - ",1),(0,l._)("input",{class:"w3-blue",type:"text",value:e.chainItem.name,onChange:i[0]||(i[0]=i=>e.$emit("changeItemName",i.target.value))},null,40,$),e.midiRouteInput.midiRouterChains.length>1?((0,l.wg)(),(0,l.j4)(c,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{onClick:i[1]||(i[1]=i=>e.$emit("do-splice",e.chainIdx))},{default:(0,l.w5)((()=>[A])),_:1})])),_:1})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.midiRouteInput.midiRouterChains[e.chainIdx].midiRoutersFilters,((t,n)=>((0,l.wg)(),(0,l.iD)("p",{key:n},[(0,l.wy)((0,l._)("input",{class:"w3-radio",type:"radio","onUpdate:modelValue":i[2]||(i[2]=i=>e.filterSelected=i),value:n},null,8,P),[[u.G2,e.filterSelected]]),(0,l._)("label",null,(0,a.zw)(n)+" "+(0,a.zw)(t.name),1)])))),128)),(0,l._)("p",null,[(0,l.Wm)(m,{onClick:i[3]||(i[3]=i=>e.addChainFilter())},{default:(0,l.w5)((()=>[N])),_:1}),(0,l.Wm)(m,{ml:!0,onClick:i[4]||(i[4]=i=>e.editChainFilter())},{default:(0,l.w5)((()=>[H])),_:1}),(0,l.Wm)(m,{ml:!0,onClick:i[5]||(i[5]=i=>e.deleteChainFilter())},{default:(0,l.w5)((()=>[M])),_:1}),(0,l.Wm)(m,{ml:!0,onClick:i[6]||(i[6]=i=>e.doMoveUp())},{default:(0,l.w5)((()=>[B])),_:1}),(0,l.Wm)(m,{ml:!0,onClick:i[7]||(i[7]=i=>e.doMoveDown())},{default:(0,l.w5)((()=>[O])),_:1})])])),_:1})])}var z=t(2483),E=t(8842),K=t(9205),Y=t(9742),q=t(6631),L=t(797),j=t(7634),G=t(2201),J=t(1230),Q=(0,l.aZ)({components:{CardHeader:q.Z,CardBody:L.Z,RowCellRight:J.Z,Btn:j.Z,BtnHref:G.Z},props:{chainItem:{type:E.D,required:!0},chainIdx:{type:Number,required:!0},midiId:{type:String,required:!0}},setup(e){const i=(0,z.tv)(),t=(0,F.iH)(""),n=(0,l.FN)(),u=(0,l.Fl)((()=>T.loginStatus.userDataConfig.getMidiRouteInput(T.loginStatus.inPorts[Number(e.midiId)])));function a(){if(""===t.value)return;const i=parseInt(t.value);Y.Rp(u.value.midiRouterChains[e.chainIdx].midiRoutersFilters,i,i-1),i-1>-1&&(t.value=(i-1).toString()),n?.proxy?.$forceUpdate()}function d(){if(""===t.value)return;const i=parseInt(t.value);Y.Rp(u.value.midiRouterChains[e.chainIdx].midiRoutersFilters,i,i+1),i+1<u.value.midiRouterChains[e.chainIdx].midiRoutersFilters.length&&(t.value=(i+1).toString()),n?.proxy?.$forceUpdate()}function o(){""!==t.value&&(u.value.midiRouterChains[e.chainIdx].midiRoutersFilters.splice(parseInt(t.value),1),t.value="",n?.proxy?.$forceUpdate())}function r(){if(""===t.value)return;const l=u.value.midiRouterChains[e.chainIdx].midiRoutersFilters[parseInt(t.value)];l.filterType===K.vA.TO_MIDI_DESTINATION&&i.push(`/addFilter/AddMidiDestination/${e.midiId}/${e.chainIdx}/${t.value}`),l.filterType===K.vA.TO_CONSOLE&&i.push(`/addFilter/AddConsoleLog/${e.midiId}/${e.chainIdx}/${t.value}`),l.filterType===K.vA.TO_NETWORK&&i.push(`/addFilter/AddNetworkDestination/${e.midiId}/${e.chainIdx}/${t.value}`),l.filterType===K.vA.SCHEDULE_TO&&i.push(`/addFilter/AddSchedule/${e.midiId}/${e.chainIdx}/${t.value}`),l.filterType===K.vA.FILTER_AND_TRANSFORM&&i.push(`/addFilter/AddFilterTransform/${e.midiId}/${e.chainIdx}/${t.value}`)}function c(){i.push(`/AddChainFilter/${e.midiId}/${e.chainIdx}`)}return(0,l.bv)((()=>{u.value.midiRouterChains[e.chainIdx].midiRoutersFilters})),{addChainFilter:c,editChainFilter:r,deleteChainFilter:o,doMoveDown:d,doMoveUp:a,midiRouteInput:u,filterSelected:t}}}),X=t(89);const ee=(0,X.Z)(Q,[["render",V]]);var ie=ee,te=t(9135),le=t(622),ne=t(4978),ue=t(4939),ae=(0,l.aZ)({components:{MidiFilterChain:ie,Page:te.Z,Card:le.Z,CardBody:L.Z,Row:ne.Z,RowCell:ue.Z,RowCellRight:J.Z,Btn:j.Z,BtnHref:G.Z},props:{midiId:{type:String,required:!0}},setup(e){const i=(0,F.iH)(T.loginStatus.userDataConfig.getMidiRouteInput(T.loginStatus.inPorts[Number(e.midiId)]));function t(){const e=i.value.midiRouteClock.propegateInputs.map((e=>e.midiInputId));return i.value.inPortsWithoutSelf.filter((i=>-1===e.indexOf(i.midiInputId)))}const n=(0,F.iH)(t()),u=(0,F.iH)(""),a=(0,F.iH)(1),d=(0,F.iH)(0);function o(){const e=d.value;d.value=-1,(0,l.Y3)((()=>{d.value=e}))}function r(e){i.value.midiRouterChains.splice(e,1),o()}function c(e){i.value.cc14bitAry.splice(e,1),o()}function p(){a.value<1||a.value>16||d.value<0||d.value>17||i.value.cc14bitAry.filter((e=>e.channel===a.value&&e.cc===d.value)).length>0||(i.value.addCc14bitAry(a.value,d.value),o())}function m(){n.value.splice(0,n.value.length),t().forEach((e=>{n.value.push(e)})),u.value=""}function s(e){for(let t=0;t<i.value.midiRouteClock.propegateInputs.length;t++)i.value.midiRouteClock.propegateInputs[t].midiInputId!==e||i.value.midiRouteClock.propegateInputs.splice(t,1);m()}function w(){""!==u.value&&(i.value.addClockPropegateInput(parseInt(u.value)),m())}function I(){i.value.addMidiRouterChain("New chain"),o()}const f=(0,l.Fl)((()=>`${e.midiId} - ${T.loginStatus.inPorts[parseInt(e.midiId)]}`)),v=(e,i)=>{i.name=e};return{headrMsg:f,addChain:I,addClockPropegateInput:w,spliceClockPropegateInput:s,addCc14bit:p,spliceCc14bit:c,spliceRouterChain:r,cc14bitCc:d,cc14bitChannel:a,propegateInputToAdd:u,inPortsWithoutSelfClockPropegate:n,midiRouteInput:i,setChainItemName:v}}});const de=(0,X.Z)(ae,[["render",Z]]);var oe=de,re=(0,l.aZ)({components:{MidiInComponent:oe}});const ce=(0,X.Z)(re,[["render",n]]);var pe=ce}}]);
//# sourceMappingURL=345.87229cd0.js.map