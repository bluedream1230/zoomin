"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[821],{4821:function(e,o,t){t.d(o,{ZP:function(){return k}});var n=t(2791),r=t(7621),a=t(6647),i=t(2363),c=t(9504),d=t(2169),s=t(8471),l=t(4223),u=t(184),p=(0,l.Z)((0,u.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PanoramaFishEyeRounded"),h=(0,l.Z)((0,u.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded"),m=t(9691),f=t(1583);const b=(0,m.Z)({root:{position:"relative"}})(r.Z),x=((0,m.Z)({root:{position:"relative"}})(a.Z),(0,m.Z)({root:{position:"absolute",left:"0px",bottom:"0px"}})(i.Z),(0,m.Z)({root:{position:"relative",backgroundColor:"transparent"}})(c.Z),(0,m.Z)({root:{position:"absolute",top:0,right:0,height:"100%",width:"100%"}})(d.Z)),Z=(0,f.Z)({container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},card:{minWidth:350},media:{height:140},fiCardContent:{color:"#ffffff",backgroundColor:"transparent"},fiCardContentTextSecondary:{color:"rgba(255,255,255,0.78)"}});function k(e){const o=Z(),[t,r]=n.useState(!0);return(0,u.jsxs)(b,{onClick:()=>{r(!0)},className:o.card,sx:{height:"280px",cursor:"pointer",borderRadius:"20px","& .MuiCardMedia-root":{border:"1px solid transparent"},"& .MuiCardMedia-root:hover":{border:"1px solid #FF0676"}},children:[(0,u.jsx)(s.Z,{checked:e.formikvalue==e.game_id&&t,icon:(0,u.jsx)(p,{sx:{color:"white"}}),checkedIcon:(0,u.jsx)(h,{sx:{color:"#02DF6A"}}),sx:{zIndex:10,color:"white",position:"absolute",top:"0px",right:"0px"}}),(0,u.jsx)(x,{component:"img",alt:e.card_name,image:e.card_image,title:e.card_name,sx:{backgroundPosition:"center",backgroundSize:"cover",borderRadius:"20px",position:"relative",objectFit:"cover",transition:"0.3s",display:"inline-block"}})]})}},8471:function(e,o,t){t.d(o,{Z:function(){return _}});var n=t(3366),r=t(7462),a=t(2791),i=t(8182),c=t(4419),d=t(2065),s=t(4036),l=t(6934),u=t(8278),p=t(2930),h=t(5080),m=t(5878),f=t(1217);function b(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=t(184);const Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=(0,l.ZP)(h.Z)((e=>{let{ownerState:o}=e;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),v=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var g=a.forwardRef((function(e,o){const{autoFocus:t,checked:a,checkedIcon:d,className:l,defaultChecked:h,disabled:m,disableFocusRipple:f=!1,edge:g=!1,icon:C,id:y,inputProps:z,inputRef:S,name:F,onBlur:j,onChange:w,onFocus:R,readOnly:I,required:P,tabIndex:M,type:B,value:_}=e,N=(0,n.Z)(e,Z),[$,O]=(0,u.Z)({controlled:a,default:Boolean(h),name:"SwitchBase",state:"checked"}),E=(0,p.Z)();let H=m;E&&"undefined"===typeof H&&(H=E.disabled);const q="checkbox"===B||"radio"===B,L=(0,r.Z)({},e,{checked:$,disabled:H,disableFocusRipple:f,edge:g}),V=(e=>{const{classes:o,checked:t,disabled:n,edge:r}=e,a={root:["root",t&&"checked",n&&"disabled",r&&`edge${(0,s.Z)(r)}`],input:["input"]};return(0,c.Z)(a,b,o)})(L);return(0,x.jsxs)(k,(0,r.Z)({component:"span",className:(0,i.Z)(V.root,l),centerRipple:!0,focusRipple:!f,disabled:H,tabIndex:null,role:void 0,onFocus:e=>{R&&R(e),E&&E.onFocus&&E.onFocus(e)},onBlur:e=>{j&&j(e),E&&E.onBlur&&E.onBlur(e)},ownerState:L,ref:o},N,{children:[(0,x.jsx)(v,(0,r.Z)({autoFocus:t,checked:a,defaultChecked:h,className:V.input,disabled:H,id:q&&y,name:F,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const o=e.target.checked;O(o),w&&w(e,o)},readOnly:I,ref:S,required:P,ownerState:L,tabIndex:M,type:B},"checkbox"===B&&void 0===_?{}:{value:_},z)),$?d:C]}))})),C=t(4223),y=(0,C.Z)((0,x.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),z=(0,C.Z)((0,x.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),S=(0,C.Z)((0,x.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=t(1402);function j(e){return(0,f.Z)("MuiCheckbox",e)}var w=(0,m.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const R=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],I=(0,l.ZP)(g,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o[`color${(0,s.Z)(t.color)}`]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,r.Z)({color:(o.vars||o).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${"default"===t.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:(0,d.Fq)("default"===t.color?o.palette.action.active:o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${w.checked}, &.${w.indeterminate}`]:{color:(o.vars||o).palette[t.color].main},[`&.${w.disabled}`]:{color:(o.vars||o).palette.action.disabled}})})),P=(0,x.jsx)(z,{}),M=(0,x.jsx)(y,{}),B=(0,x.jsx)(S,{});var _=a.forwardRef((function(e,o){var t,d;const l=(0,F.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:u=P,color:p="primary",icon:h=M,indeterminate:m=!1,indeterminateIcon:f=B,inputProps:b,size:Z="medium",className:k}=l,v=(0,n.Z)(l,R),g=m?f:h,C=m?f:u,y=(0,r.Z)({},l,{color:p,indeterminate:m,size:Z}),z=(e=>{const{classes:o,indeterminate:t,color:n}=e,a={root:["root",t&&"indeterminate",`color${(0,s.Z)(n)}`]},i=(0,c.Z)(a,j,o);return(0,r.Z)({},o,i)})(y);return(0,x.jsx)(I,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":m},b),icon:a.cloneElement(g,{fontSize:null!=(t=g.props.fontSize)?t:Z}),checkedIcon:a.cloneElement(C,{fontSize:null!=(d=C.props.fontSize)?d:Z}),ownerState:y,ref:o,className:(0,i.Z)(z.root,k)},v,{classes:z}))}))}}]);
//# sourceMappingURL=821.76c2a09b.chunk.js.map