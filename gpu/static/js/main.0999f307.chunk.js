(this.webpackJsonppixel_flare_gpu=this.webpackJsonppixel_flare_gpu||[]).push([[0],{27:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var i,o,r,l,c,s,a,d,b,h,u=t(3),p=t.n(u),x=t(17),g=t.n(x),j=(t(27),t(1)),v=t(2);let f;!function(e){const n=e.FONT_SMALL=16,t=e.FONT_MIDIUM=22,i=(e.FONT_LARGE=32,e.CSS_LABEL=Object(v.a)(a||(a=Object(j.a)(["\n        display: inline-block;\n        font-weight: 600;\n        text-align: center;\n        color: black;\n        box-sizing: border-box;\n    "]))));e.CSS_LABEL_SMALL=Object(v.a)(d||(d=Object(j.a)(["\n        ","\n        height: 22px;\n        font-size: ","px;\n        line-height: 18px;\n    "])),i,n),e.CSS_LABEL_MIDIUM=Object(v.a)(b||(b=Object(j.a)(["\n        ","\n        height: 30px;\n        font-size: ","px;\n        line-height: 26px;\n    "])),i,t),e.CSS_BUTTON_DISABLE=Object(v.a)(h||(h=Object(j.a)(["\n        pointer-events: none;\n        opacity: 0.5;\n    "])))}(f||(f={}));var O=f;v.b.div(i||(i=Object(j.a)(["\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n"]))),v.b.div(o||(o=Object(j.a)(["\n    display: inline-block;\n"]))),v.b.div(r||(r=Object(j.a)(["\n    display: inline-block;\n    width: 100%;\n"]))),Object(v.a)(l||(l=Object(j.a)(["\n    display: inline-block;\n    height: 22px;\n    font-size: 18px;\n    font-weight: 600;\n    color: black;\n    line-height: 18px;\n"]))),Object(v.a)(c||(c=Object(j.a)(["\n    display: inline-block;\n    height: 30px;\n    font-size: ","px;\n    font-weight: 600;\n    text-align: center;\n    color: black;\n    line-height: 24px;\n    box-sizing: border-box;\n"])),f.FONT_MIDIUM),Object(v.a)(s||(s=Object(j.a)(["\n    opacity: 0.6;\n    pointer-events: none;\n"])));var m,k,y,w,C,S,T,E,M,U,L,I,_,N,A,R,B,D,z,F,H,P,q,W,V,G,J,X,Y,K,Q,Z,$,ee,ne,te,ie=t(0);let oe;var re;(re=oe||(oe={})).isCompleteCheck=e=>{let n=!0;return e.forEach((e=>{if(e.errors.length>0)return n=!1,1})),n},re.InputTextFormBak=e=>{var n,t,i,o,r,l,c;const s=null!==(n=e.isPassword)&&void 0!==n&&n?"password":"text",a=null!==(t=e.validates)&&void 0!==t?t:[],d=e.checkable.errors,b=(null!==(i=e.dependency)&&void 0!==i?i:[]).map((e=>e.value)),h=e=>{const n=[];return a.forEach((t=>{t.checker(e)||n.push(t.errorType)})),n};return Object(u.useEffect)((()=>{e.checkable.errors=h(e.checkable.value),e.setCheckable({...e.checkable})}),b),Object(ie.jsxs)(ce,{isEnable:null===(o=e.isEnable)||void 0===o||o,isVisible:!0,textAlign:null!==(r=e.isCenter)&&void 0!==r&&r?"center":"left",marginTop:null!==(l=e.marginTop)&&void 0!==l?l:0,children:[void 0==e.titleLabel?Object(ie.jsx)(ie.Fragment,{}):Object(ie.jsx)(se,{children:e.titleLabel}),Object(ie.jsx)(ae,{type:s,value:e.checkable.value,hasTitle:void 0!=e.titleLabel,width:e.width,isCenter:null!==(c=e.isCenter)&&void 0!==c&&c,placeholder:e.placeholder,onChange:n=>{const t=n.target.value;e.checkable.value=t,e.checkable.errors=h(t),e.setCheckable({...e.checkable})},errorType:0===d.length?void 0:d[0],readOnly:e.isReadOnly})]})},re.Record=e=>{var n,t,i;return Object(ie.jsx)(ce,{isEnable:null===(n=e.isEnable)||void 0===n||n,isVisible:!0,textAlign:null!==(t=e.textAlign)&&void 0!==t?t:"left",marginTop:null!==(i=e.marginTop)&&void 0!==i?i:0,children:e.jsx})},re.FormRecord=e=>{var n,t,i,o;return Object(ie.jsxs)(ce,{isEnable:null===(n=e.isEnable)||void 0===n||n,isVisible:null===(t=e.isVisible)||void 0===t||t,textAlign:null!==(i=e.textAlign)&&void 0!==i?i:"left",marginTop:null!==(o=e.marginTop)&&void 0!==o?o:0,children:[void 0==e.titleLabel?Object(ie.jsx)(ie.Fragment,{}):Object(ie.jsx)(se,{labelWidth:e.labelWidth,children:e.titleLabel}),e.jsx]})},re.TextField=e=>{var n,t,i,o,r;let l=null!==(n=e.isPassword)&&void 0!==n&&n?"password":"text";null!==(t=e.isNumber)&&void 0!==t&&t&&(l="number");const c=null!==(i=e.validates)&&void 0!==i?i:[],s=e.checkable.errors,a=(null!==(o=e.dependency)&&void 0!==o?o:[]).map((e=>e.value));Object(u.useEffect)((()=>{e.checkable.errors=(e=>{const n=[];return c.forEach((t=>{t.checker(e)||n.push(t.errorType)})),n})(e.checkable.value),e.setCheckable({...e.checkable})}),a.concat(e.checkable.value));let d=e.checkable.value;return Object(ie.jsx)(de,{type:l,value:d,width:null!==(r=e.width)&&void 0!==r?r:100,placeholder:e.placeholder,onChange:n=>{let t=n.target.value;e.checkable.value="number"!==l?t:Number(t).toString(),e.setCheckable({...e.checkable})},errorType:0===s.length?void 0:s[0],readOnly:e.isReadOnly,marginLeft:e.marginLeft})},re.Combobox=e=>{var n,t,i,o;const r=null!==(n=e.validates)&&void 0!==n?n:[],l=e.checkable.errors,c=(null!==(t=e.dependency)&&void 0!==t?t:[]).map((e=>e.value)),s=null!==(i=e.headBlank)&&void 0!==i&&i,a=e.list.slice();return s&&a.unshift({value:"",labelText:""}),Object(u.useEffect)((()=>{e.checkable.errors=(e=>{const n=[];return r.forEach((t=>{t.checker(e)||n.push(t.errorType)})),n})(e.checkable.value),e.setCheckable({...e.checkable})}),c.concat(e.checkable.value)),Object(ie.jsx)(be,{value:e.checkable.value,width:null!==(o=e.width)&&void 0!==o?o:100,placeholder:e.placeholder,onChange:n=>{const t=n.target.value;e.checkable.value=t,e.setCheckable({...e.checkable})},errorType:0===l.length?void 0:l[0],readOnly:e.isReadOnly,marginLeft:e.marginLeft,children:a.map(((e,n)=>{var t,i;return Object(ie.jsx)(he,{value:e.value,disabled:null!==(t=e.isDisabled)&&void 0!==t&&t,isDisabled:null!==(i=e.isDisabled)&&void 0!==i&&i,children:e.labelText},n)}))})},re.ButtonRecord=e=>{var n,t;return Object(ie.jsx)(ce,{isEnable:!0,isVisible:!0,textAlign:null!==(n=e.textAlign)&&void 0!==n?n:"right",marginTop:null!==(t=e.marginTop)&&void 0!==t?t:0,children:e.buttons.map(((n,t)=>{var i;return Object(ie.jsx)(pe,{isCenter:"center"===e.textAlign,isEnable:null===(i=n.isEnable)||void 0===i||i,width:n.width,onClick:n.callback,children:n.label},t)}))})},re.Message=e=>{var n,t,i;return Object(ie.jsx)(ce,{isEnable:!0,isVisible:!0,textAlign:null!==(n=e.isCenter)&&void 0!==n&&n?"center":"left",marginTop:null!==(t=e.marginTop)&&void 0!==t?t:0,children:Object(ie.jsx)(ue,{isCenter:null!==(i=e.isCenter)&&void 0!==i&&i,children:e.message})})},re.MessageLink=e=>{var n,t,i;return Object(ie.jsx)(ce,{isEnable:!0,isVisible:!0,textAlign:null!==(n=e.isCenter)&&void 0!==n&&n?"center":"left",marginTop:null!==(t=e.marginTop)&&void 0!==t?t:0,children:Object(ie.jsx)(ue,{isLink:!0,onClick:e.clickAction,isCenter:null!==(i=e.isCenter)&&void 0!==i&&i,children:e.message})})},re.BorderPanel=e=>{var n;return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(ge,{children:e.title}),Object(ie.jsx)(je,{isEnable:null===(n=e.isEnable)||void 0===n||n,children:e.innerJsx})]})},re.InfoFrame=e=>{var n;const t=null!==(n=e.height)&&void 0!==n?n:70;return Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(ve,{height:t,color:"#1a9900",children:e.textRecords.map(((e,n)=>Object(ie.jsxs)("span",{children:[e,Object(ie.jsx)("br",{})]},n)))})})},re.Switch=e=>{var n,t;const i=null!==(n=e.isRelation)&&void 0!==n&&n,o=i&&e.isUse?()=>{}:e.callback;return Object(ie.jsx)(xe,{isRelation:i,isUse:e.isUse,isEnable:null===(t=e.isEnable)||void 0===t||t,width:e.width,onClick:o,children:e.label})};var le=oe;const ce=v.b.div(m||(m=Object(j.a)(["\n    display: inline-block;\n    ","\n    width: 100%;\n    height: 40px;\n    margin-top: ","px;\n    /* background-color: #b3b4c4; */\n    /* border: 1px solid #000; */\n    ","\n    text-align: ",";\n"])),(e=>e.isVisible?"":Object(v.a)(k||(k=Object(j.a)(["\n        display: none;\n    "])))),(e=>e.marginTop),(e=>e.isEnable?"":O.CSS_BUTTON_DISABLE),(e=>e.textAlign)),se=v.b.div(y||(y=Object(j.a)(["\n    display: inline-block;\n    height: calc(100% - 4px);\n    width: ","px;\n    ","\n    color: #585858;\n    border: solid 1px #7a7a7abf;\n    box-sizing: border-box;\n    /* background-color: #85a2c5; */\n    background: linear-gradient(to bottom, #c3c3c3fc, #d8d8d8, #c3c3c3fc);\n    border-radius: 4px;\n    text-align: center;\n    vertical-align: top;\n    margin: 5px 4px 0 4px;\n"])),(e=>{var n;return null!==(n=e.labelWidth)&&void 0!==n?n:140}),O.CSS_LABEL_MIDIUM),ae=v.b.input(w||(w=Object(j.a)(["\n    display: inline-block;\n    height: calc(100% - 4px);\n    ","\n    ","\n    margin-top: 2px;\n    font-size: 24px;\n    line-height: 32px;\n    /* font-weight: 600; */\n    color: #3d3d3d;\n    border: solid 1px #959595;\n    border-radius: 4px;\n    padding: 0 5px;\n    box-sizing: border-box;\n    background-color: ",";\n    text-align: left;\n    vertical-align: top;\n    user-select: text;\n    /* "," */\n    ","\n    ::placeholder {\n        color: #00000050;\n        font-style: italic;\n    }\n"])),(e=>e.hasTitle?Object(v.a)(S||(S=Object(j.a)(["\n        width: calc(100% - 152px);\n    "]))):Object(v.a)(C||(C=Object(j.a)(["\n    "])))),(e=>void 0==e.width?"":Object(v.a)(T||(T=Object(j.a)(["\n        width: ","px;\n    "])),e.width)),(e=>{if(void 0==e.errorType)return"#ececec";switch(e.errorType){case"required":return"#dbd7b3";case"length":return"#dbb3b3";case"value":return"#b3b3db";case"relation":return"#b3dbb3"}}),(e=>e.isCenter?Object(v.a)(M||(M=Object(j.a)([""]))):Object(v.a)(E||(E=Object(j.a)(["\n        margin-left: 4px;\n    "])))),(e=>e.readOnly?Object(v.a)(U||(U=Object(j.a)(["\n        color: #020075;\n        /* border: none; */\n        outline: none;\n        background-color: transparent;\n    "]))):"")),de=v.b.input(L||(L=Object(j.a)(["\n    display: inline-block;\n    height: calc(100% - 4px);\n    width: ","px;\n    margin-top: 2px;\n    margin-left: ","px;\n    font-size: 24px;\n    line-height: 32px;\n    /* font-weight: 600; */\n    color: #3d3d3d;\n    border: solid 1px #959595;\n    border-radius: 4px;\n    padding: 0 5px;\n    box-sizing: border-box;\n    background-color: ",";\n    text-align: left;\n    vertical-align: top;\n    user-select: text;\n    ","\n    ::placeholder {\n        color: #00000050;\n        font-style: italic;\n    }\n"])),(e=>e.width),(e=>{var n;return null!==(n=e.marginLeft)&&void 0!==n?n:0}),(e=>{if(void 0==e.errorType)return"#ececec";switch(e.errorType){case"required":return"#dbd7b3";case"length":return"#dbb3b3";case"value":return"#b3b3db";case"relation":return"#b3dbb3"}}),(e=>e.readOnly?Object(v.a)(I||(I=Object(j.a)(["\n        color: #020075;\n        /* border: none; */\n        outline: none;\n        background-color: transparent;\n    "]))):"")),be=v.b.select(_||(_=Object(j.a)(["\n    display: inline-block;\n    height: calc(100% - 4px);\n    width: ","px;\n    margin-top: 2px;\n    margin-left: ","px;\n    font-size: 24px;\n    line-height: 32px;\n    /* font-weight: 600; */\n    color: #3d3d3d;\n    border: solid 1px #959595;\n    border-radius: 4px;\n    padding: 0 5px;\n    box-sizing: border-box;\n    background-color: ",";\n    text-align: left;\n    vertical-align: top;\n    user-select: text;\n    ","\n    ::placeholder {\n        color: #00000050;\n        font-style: italic;\n    }\n"])),(e=>e.width),(e=>{var n;return null!==(n=e.marginLeft)&&void 0!==n?n:0}),(e=>{if(void 0==e.errorType)return"#ececec";switch(e.errorType){case"required":return"#dbd7b3";case"length":return"#dbb3b3";case"value":return"#b3b3db";case"relation":return"#b3dbb3"}}),(e=>e.readOnly?Object(v.a)(N||(N=Object(j.a)(["\n        color: #020075;\n        /* border: none; */\n        outline: none;\n        background-color: transparent;\n        pointer-events: none;\n    "]))):"")),he=v.b.option(A||(A=Object(j.a)(["\n    ","\n"])),(e=>e.isDisabled?Object(v.a)(R||(R=Object(j.a)(["\n        color: #0000004b;\n    "]))):"")),ue=v.b.div(B||(B=Object(j.a)(["\n    display: inline-block;\n    height: calc(100% - 4px);\n    margin-top: 2px;\n    font-size: ","px;\n    line-height: 32px;\n    /* font-weight: 600; */\n    color: #002c52;\n    border-radius: 4px;\n    padding: 0 5px;\n    box-sizing: border-box;\n    /* background-color: #d37878; */\n    text-align: left;\n    vertical-align: top;\n    user-select: text;\n    ","\n    ","\n"])),O.FONT_MIDIUM,(e=>e.isCenter?Object(v.a)(z||(z=Object(j.a)([""]))):Object(v.a)(D||(D=Object(j.a)(["\n        margin-left: 4px;\n    "])))),(e=>e.isLink?Object(v.a)(F||(F=Object(j.a)(["\n        color: #0459a3;\n        user-select: none;\n        text-decoration: underline;\n        &:hover {\n            color: #68a4d8;\n        }\n    "]))):"")),pe=(v.b.div(H||(H=Object(j.a)(["\n    display: inline-block;\n    width: 100%;\n    height: 40px;\n    /* background-color: #888888; */\n    box-sizing: border-box;\n    text-align: left;\n    white-space: nowrap;\n"]))),v.b.div(P||(P=Object(j.a)(["\n    ","\n    ","\n    /* line-height: 25px; */\n    box-sizing: border-box;\n    /* background-color: #a8a8a8; */\n    background: linear-gradient(to bottom, #cdcdcd, #ebebeb, #cdcdcd);\n    border: 1px solid #747474;\n    color: #515151;\n    border-radius: 4px;\n    ","\n    margin: 5px 0 0 4px;\n    ","\n    &:hover {\n        /* background-color: #98bfc2; */\n        background: linear-gradient(to bottom, #989898, #b4b4b4, #989898);\n    }\n"])),O.CSS_LABEL_MIDIUM,(e=>void 0==e.width?Object(v.a)(q||(q=Object(j.a)(["\n        padding: 0 40px;\n    "]))):Object(v.a)(W||(W=Object(j.a)(["\n        width: ","px;\n    "])),e.width)),(e=>e.isCenter?Object(v.a)(G||(G=Object(j.a)([""]))):Object(v.a)(V||(V=Object(j.a)(["\n        margin-left: 4px;\n    "])))),(e=>e.isEnable?"":O.CSS_BUTTON_DISABLE))),xe=v.b.div(J||(J=Object(j.a)(["\n    ","\n    ","\n    /* line-height: 25px; */\n    box-sizing: border-box;\n    background-color: #a8a8a8;\n    color: #515151;\n    border: 1px solid #747474;\n    ","\n    border-radius: 4px;\n    margin: 5px 0 0 4px;\n    ","\n    &:hover {\n        ","\n    }\n"])),O.CSS_LABEL_MIDIUM,(e=>void 0==e.width?Object(v.a)(X||(X=Object(j.a)(["\n        padding: 0 40px;\n    "]))):Object(v.a)(Y||(Y=Object(j.a)(["\n        width: ","px;\n    "])),e.width)),(e=>e.isRelation?Object(v.a)(Q||(Q=Object(j.a)(["\n        background-color: ",";\n        color: ",";\n    "])),(e=>e.isUse?"#d898b3":"#ddc1d979"),(e=>e.isUse?"#9c2626":"#515151")):Object(v.a)(K||(K=Object(j.a)(["\n        background-color: ",";\n    "])),(e=>e.isUse?"#e4f67e":"#e7e7e779"))),(e=>e.isEnable?"":O.CSS_BUTTON_DISABLE),(e=>e.isRelation?Object(v.a)($||($=Object(j.a)(["\n            background-color: ",";\n            color: ",";\n        "])),(e=>e.isUse?"#d898b3":"#d3a1cb79"),(e=>e.isUse?"#9c2626":"#515151")):Object(v.a)(Z||(Z=Object(j.a)(["\n            background-color: ",";\n        "])),(e=>e.isUse?"#b5be7f":"#edefb286")))),ge=v.b.div(ee||(ee=Object(j.a)(["\n    ","\n    color: #990000;\n    /* background-color: #0a0a0a40; */\n    font-style: italic;\n    margin: 4px 0 0 8px;\n"])),O.CSS_LABEL_SMALL),je=v.b.div(ne||(ne=Object(j.a)(["\n    display: inline-block;\n    margin: 0 0 0 6px;\n    padding: 4px;\n    width: calc(100% - 12px);\n    background-color: #dcddce;\n    border: 1px solid #000;\n    box-sizing: border-box;\n    border-radius: 4px;\n    text-align: left;\n    ","\n"])),(e=>e.isEnable?"":O.CSS_BUTTON_DISABLE)),ve=v.b.div(te||(te=Object(j.a)(["\n    margin: 4px 0 0 0;\n    display: inline-block;\n    background-color: #e7e5e561;\n    border: solid 1px #949494;\n    width: 100%;\n    height: ","px;\n    padding: 2px;\n    box-sizing: border-box;\n    text-align: left;\n    font-size: ","px;\n    color: ",";\n    overflow-y: auto;\n"])),(e=>e.height),O.FONT_SMALL,(e=>e.color));let fe;!function(e){e.CONTENTS_WIDTH=576,e.CONTENTS_HEIGHT=1024,e.USER_INFO=30,e.FIELD_MARGIN=10,e.MAX_CELL_WIDTH=100;e.isSmartPhone=function(){return!!navigator.userAgent.match(/iPhone|Android.+Mobile/)}}(fe||(fe={}));var Oe=fe;let me;(me||(me={})).createURL=(e,n,t)=>{const i=document.createElement("canvas"),o=i.getContext("2d");return i.width=e,i.height=n,t(o),i.toDataURL()};var ke,ye,we,Ce,Se,Te,Ee,Me,Ue,Le,Ie,_e,Ne,Ae,Re=me;let Be;(Be||(Be={})).Component=e=>{const[n,t]=Object(u.useState)({units:[],focusUnit:-1,focusSeed:-1,isDetail:!1,thumbs:[]}),i=()=>t({...n}),o=()=>{let e=0;return 0!==n.units.length&&(e=n.units.map((e=>e.time)).reduce(((e,n)=>e<n?n:e),0)+110),e},r=(e,t,o)=>{const r=Oe.CONTENTS_WIDTH-16,l=r/e.width,c=-r/2+(-e.left+t)*l,s=-r/2+(-e.top+o)*l;n.units[n.focusUnit].seeds[n.focusSeed].pars.push({x:c,y:s}),i()};return e.isVisible?Object(ie.jsxs)(ze,{children:[n.units.map(((e,t)=>Object(ie.jsx)(Fe,{children:e.seeds.map(((e,o)=>Object(ie.jsx)(He,{isFocus:n.focusUnit===t&&n.focusSeed===o,onClick:()=>{n.focusUnit=t,n.focusSeed=o,i()},onContextMenu:()=>{n.isDetail=!0,i()},children:(()=>{const e=n.thumbs[t][o];return""===e?Object(ie.jsx)(ie.Fragment,{}):Object(ie.jsx)(Pe,{src:e})})()},o)))},t))),Object(ie.jsx)(le.ButtonRecord,{textAlign:"left",buttons:[{label:"+Unit",width:100,isEnable:n.units.length<7,callback:()=>{n.units.push({seeds:[{rising:5,spread:.08,seedColor:"#ffff99",barrColor:["#ff0000","#0000ff"],pars:[]}],delay:0,time:o()}),n.thumbs.push([""]),n.focusUnit=n.units.length-1,n.focusSeed=0,i()}},{label:"-Unit",width:100,isEnable:-1!==n.focusUnit,callback:()=>{n.units.splice(n.focusUnit,1),n.thumbs.splice(n.focusUnit,1),n.focusUnit=-1,n.focusSeed=-1,i()}},{label:"+Seed",width:100,isEnable:-1!==n.focusUnit&&n.units[n.focusUnit].seeds.length<5,callback:()=>{n.units[n.focusUnit].seeds.push(JSON.parse(JSON.stringify(n.units[n.focusUnit].seeds[n.focusSeed]))),n.thumbs[n.focusUnit].push(""),n.focusSeed=n.units[n.focusUnit].seeds.length-1,i()}},{label:"-Seed",width:100,isEnable:-1!==n.focusUnit&&n.units[n.focusUnit].seeds.length>1,callback:()=>{n.units[n.focusUnit].seeds.splice(n.focusSeed,1),n.thumbs.splice(n.focusSeed,1),i()}}]}),Object(ie.jsx)(le.ButtonRecord,{textAlign:"left",buttons:[{label:"Start",width:130,isEnable:n.units.length>0,callback:()=>{e.start({units:n.units}),i()}}]}),n.isDetail?Object(ie.jsxs)(qe,{children:[Object(ie.jsxs)(We,{children:[Object(ie.jsx)(Ve,{children:"Rising Speed"}),Object(ie.jsx)(Ge,{type:"range",min:3,max:8,step:.1,value:n.units[n.focusUnit].seeds[n.focusSeed].rising,onChange:e=>{n.units[n.focusUnit].seeds[n.focusSeed].rising=Number(e.target.value),i()}})]}),Object(ie.jsxs)(We,{children:[Object(ie.jsx)(Ve,{children:"Seed Color"}),Object(ie.jsx)(Je,{type:"color",value:n.units[n.focusUnit].seeds[n.focusSeed].seedColor,onChange:e=>{n.units[n.focusUnit].seeds[n.focusSeed].seedColor=e.target.value,i()}})]}),Object(ie.jsxs)(We,{children:[Object(ie.jsx)(Ve,{children:"Spread Speed"}),Object(ie.jsx)(Ge,{type:"range",min:.04,max:.2,step:.01,value:n.units[n.focusUnit].seeds[n.focusSeed].spread,onChange:e=>{n.units[n.focusUnit].seeds[n.focusSeed].spread=Number(e.target.value),i()}})]}),Object(ie.jsxs)(We,{children:[Object(ie.jsx)(Ve,{children:"Barrage Color"}),Object(ie.jsx)(Je,{type:"color",value:n.units[n.focusUnit].seeds[n.focusSeed].barrColor[0],onChange:e=>{n.units[n.focusUnit].seeds[n.focusSeed].barrColor[0]=e.target.value,i()}}),Object(ie.jsx)(Je,{type:"color",value:n.units[n.focusUnit].seeds[n.focusSeed].barrColor[1],onChange:e=>{n.units[n.focusUnit].seeds[n.focusSeed].barrColor[1]=e.target.value,i()}})]}),Object(ie.jsx)(Xe,{children:Object(ie.jsxs)(Ye,{onClick:e=>{const n=e.currentTarget.getClientRects()[0];r(n,e.clientX,e.clientY)},onMouseMove:e=>{if(e.buttons){const n=e.currentTarget.getClientRects()[0];r(n,e.clientX,e.clientY)}},onTouchMove:e=>{const n=e.currentTarget.getClientRects()[0],t=e.touches[0];r(n,t.clientX,t.clientY)},children:[Object(ie.jsx)(Ke,{}),n.units[n.focusUnit].seeds[n.focusSeed].pars.map(((e,t)=>{const i=Oe.CONTENTS_WIDTH-16,o=i/2+e.x,r=i/2+e.y;return Object(ie.jsx)(Qe,{x:o,y:r,color:n.units[n.focusUnit].seeds[n.focusSeed].barrColor[0]},t)}))]})}),Object(ie.jsx)(le.ButtonRecord,{textAlign:"left",buttons:[{label:"Clear",width:130,callback:()=>{n.units[n.focusUnit].seeds[n.focusSeed].pars.length=0,i()}},{label:"Enter",width:130,callback:()=>{n.isDetail=!1;const e=Oe.CONTENTS_WIDTH-16,t=n.units[n.focusUnit].seeds[n.focusSeed];n.thumbs[n.focusUnit][n.focusSeed]=Re.createURL(e,e,(n=>{t.pars.forEach((i=>{const o=e/2+i.x,r=e/2+i.y;n.beginPath(),n.arc(o,r,5,0,2*Math.PI,!0),n.strokeStyle=t.barrColor[0],n.stroke()}))})),i()}}]})]}):Object(ie.jsx)(ie.Fragment,{})]}):Object(ie.jsx)(ie.Fragment,{})};var De=Be;const ze=v.b.div(ke||(ke=Object(j.a)(["\n    display: inline-block;\n    background-color: #004;\n    width: 100%;\n    height: 100%;\n"]))),Fe=v.b.div(ye||(ye=Object(j.a)(["\n    display: inline-block;\n    background-color: #9696a1;\n    width: 100%;\n    height: 117px;\n    margin-top: 2px;\n    text-align: center;\n    padding: 0 0 0 2px;\n    box-sizing: border-box;\n"]))),He=v.b.div(we||(we=Object(j.a)(["\n    display: inline-block;\n    background-color: #27272b;\n    ","\n    width: ","px;\n    height: ","px;\n    margin: 2px 0 0 2px;\n\n    &:hover {\n        opacity: 0.7;\n    }\n"])),(e=>e.isFocus?Object(v.a)(Ce||(Ce=Object(j.a)(["\n        background-color: #42525a;\n    "]))):""),112,112),Pe=v.b.img(Se||(Se=Object(j.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;  \n"]))),qe=v.b.div(Te||(Te=Object(j.a)(["\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background-color: #005c5f;\n    width: 100%;\n    height: 100%;\n    text-align: left;\n    z-index: 2;\n    opacity: 0.99;\n"]))),We=v.b.div(Ee||(Ee=Object(j.a)(["\n    display: inline-block;\n    position: relative;\n\n    background-color: #d4d6d6;\n    margin-top: 2px;\n    width: 100%;\n    height: 50px;\n    text-align: left;\n"]))),Ve=v.b.div(Me||(Me=Object(j.a)(["\n    display: inline-block;\n    position: relative;\n\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 18px;\n    color: #810303;\n    width: 100%;\n    height: 20px;\n    background-color: #d3d31760;\n"]))),Ge=v.b.input(Ue||(Ue=Object(j.a)(["\n    display: inline-block;\n    position: relative;\n\n    margin-left: 20px;\n    width: calc(100% - 40px);\n    height: 30px;\n    box-sizing: border-box;\n"]))),Je=v.b.input(Le||(Le=Object(j.a)(["\n    display: inline-block;\n    position: relative;\n\n    width: 50px;\n    height: 30px;\n    box-sizing: border-box;\n"]))),Xe=v.b.div(Ie||(Ie=Object(j.a)(["\n    display: inline-block;\n    position: relative;\n    margin-top: 2px;\n\n    background-color: #c72020d2;\n    width: ","px;\n    height: ","px;\n    text-align: left;\n"])),Oe.CONTENTS_WIDTH,Oe.CONTENTS_WIDTH),Ye=v.b.div(_e||(_e=Object(j.a)(["\n    display: inline-block;\n    position: relative;\n    \n    background-color: #000000d2;\n    width: calc(100% - 16px);\n    height: calc(100% - 16px);\n    margin: 8px 0 0 8px;\n"]))),Ke=v.b.div(Ne||(Ne=Object(j.a)(["\n    display: inline-block;\n    position: absolute;\n    background-color: #ffffffd2;\n    left: ","px;\n    top: ","px;\n    width: 20px;\n    height: 20px;\n"])),Oe.CONTENTS_WIDTH/2-10,Oe.CONTENTS_WIDTH/2-10),Qe=v.b.div(Ae||(Ae=Object(j.a)(["\n    display: inline-block;\n    position: absolute;\n    background-color: ",";\n    border-radius: 10px;\n    left: ","px;\n    top: ","px;\n    width: 10px;\n    height: 10px;\n"])),(e=>e.color),(e=>e.x-5),(e=>e.y-5));var Ze=t(21),$e=t.n(Ze);let en;!function(e){const n=e=>[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)],t=Oe.CONTENTS_WIDTH;class i{constructor(e,n){this.v=void 0,this.len=void 0,this.rad=void 0,this.v={x:Math.cos(e)*n,y:Math.sin(e)*n},this.rad=e,this.len=n}syncVecToRad(){this.rad=Math.atan2(this.v.y,this.v.x),this.len=Math.sqrt(Math.abs(this.v.x)*Math.abs(this.v.x)+Math.abs(this.v.y)*Math.abs(this.v.y))}}class o{constructor(e,n,t){this.r=void 0,this.g=void 0,this.b=void 0,this.a=void 0,this.r=e,this.g=n,this.b=t,this.a=255}getRGBA(){return(e=>{const n=("00"+e.r.toString(16)).slice(-2),t=("00"+e.g.toString(16)).slice(-2),i=("00"+e.b.toString(16)).slice(-2),o=("00"+e.a.toString(16)).slice(-2);return"#".concat(n).concat(t).concat(i).concat(o)})({r:this.r,g:this.g,b:this.b,a:this.a})}}class r{constructor(e,n,t,i){this.pos=void 0,this.prevPos=void 0,this.vec=void 0,this.radius=void 0,this.color=void 0,this.timer=void 0,this.isLive=void 0,this.histories=void 0,this.extend=void 0,this.pos=this.prevPos=e,this.vec=n,this.radius=t,this.color=new o(255,255,255),this.extend=i,this.timer=0,this.isLive=!0,this.histories=[]}}e.Component=e=>{const[l,c]=Object(u.useState)({time:0,list:[],nextUnitIndex:-1}),s=()=>c({...l});Object(u.useEffect)((()=>{e.req.units.length>0&&(l.nextUnitIndex=0,s())}),[]);return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)($e.a,{setup:(e,n)=>{e.createCanvas(t,t).parent(n),e.background("#000"),e.frameRate(60)},draw:c=>{if(c.background("#000000"),-1===l.nextUnitIndex)return;const a=e.req.units[l.nextUnitIndex],d=(e,n)=>{const t={limit:Math.floor(21+42*Math.random()),startColor:new o(255,110,110),endColor:new o(120,110,255)};for(let o=0;o<2;o++){const o=.12;l.list.push(new r({x:e.pos.x,y:e.pos.y},new i(Math.PI/2-o/2+Math.random()*o,Math.random()*Math.abs(e.vec.v.y)*2),3+5*Math.random(),{modulate:e=>{const t=e.extend.props,i=t.limit;0===e.timer&&(e.color=t.startColor),e.timer===i&&(e.isLive=!1),0===e.timer&&(e.color=n),e.vec.len>1&&(e.vec.v.x*=.91,e.vec.v.y*=.91,e.vec.syncVecToRad())},draw:e=>{const n=e.extend.props.limit,t=(n-e.timer)/n,i=e.radius*t;c.noStroke(),c.fill(e.color.getRGBA()),c.ellipse(e.pos.x,e.pos.y,i,i)},props:t}))}},b=(e,t)=>{const[s,a,d]=n(e.barrColor[0]),[b,p,x]=n(e.barrColor[1]);e.pars.forEach((n=>{const g={limit:Math.floor(80+120*Math.random()),startColor:new o(s,a,d),endColor:new o(b,p,x)},j=Math.atan2(n.y,n.x),v=e.spread,f=Math.sqrt(Math.abs(n.x)*Math.abs(n.x)+Math.abs(n.y)*Math.abs(n.y))*v;l.list.push(new r({x:t.pos.x,y:t.pos.y},new i(j,f),5+8*Math.random(),{modulate:e=>{const n=e.extend.props,t=n.limit,i=n.endColor.r-n.startColor.r,o=n.endColor.g-n.startColor.g,r=n.endColor.b-n.startColor.b,l=e.timer/t;e.color.r=n.startColor.r+Math.floor(i*l),e.color.g=n.startColor.g+Math.floor(o*l),e.color.b=n.startColor.b+Math.floor(r*l),e.timer===t&&(e.isLive=!1,h(e,n.endColor)),e.vec.len>.4&&(e.vec.v.x*=.91,e.vec.v.y*=.91,e.vec.syncVecToRad())},draw:e=>{const n=e.extend.props.limit;let t=1;n-e.timer<60&&(t=(n-e.timer)/60),c.noStroke();const i=e.color;c.stroke(i.getRGBA()),c.fill(i.getRGBA());const o=e.radius*t;c.ellipse(e.pos.x,e.pos.y,o,o)},props:g})),u(t,g.startColor,j,f)}))},h=(e,n)=>{l.list.push(new r({x:e.pos.x,y:e.pos.y},new i(Math.PI/2,.5),4,{modulate:e=>{e.vec.v.y+=.006;const t=e.extend.props.limit;0===e.timer&&(e.color=n),e.timer===t&&(e.isLive=!1)},draw:e=>{e.timer%12>=6||(e.color.a=160,c.fill(e.color.getRGBA()),c.ellipse(e.pos.x,e.pos.y,e.radius,e.radius))},props:{limit:Math.floor(20+40*Math.random())}}))},u=(e,n,t,o)=>{const s=Math.floor(3*Math.random());for(let a=0;a<s;a++){const s=2.3*Math.random();l.list.push(new r({x:e.pos.x,y:e.pos.y},new i(t,o*s),2+3*Math.random(),{modulate:e=>{const t=e.extend.props.limit;e.timer===t&&(e.isLive=!1),0===e.timer&&(e.color=n),e.vec.len>1&&(e.vec.v.x*=.91,e.vec.v.y*=.91,e.vec.syncVecToRad())},draw:e=>{const n=e.extend.props.limit;e.color.a=Math.floor((n-e.timer)/n*255),c.noStroke(),c.fill(e.color.getRGBA()),c.ellipse(e.pos.x,e.pos.y,e.radius,e.radius)},props:{limit:Math.floor(30+77*Math.random()),shadeNum:0}}))}};l.time===a.time&&(a.seeds.forEach(((e,c)=>{const s=t/(a.seeds.length+1),h=s+s*c,[u,p,x]=n(e.seedColor),g={color:new o(u,p,x),shadeNum:10};l.list.push(new r({x:h,y:t},new i(1.5*Math.PI,e.rising),13,{modulate:n=>{const t=n.extend.props;n.vec.v.y+=.05,0===n.timer&&(n.color=t.color),n.vec.v.y<0&&d(n,t.color),n.vec.v.y>2&&(n.isLive=!1,b(e,n))},draw:e=>{},props:g}))})),e.req.units.length>l.nextUnitIndex+1&&(l.nextUnitIndex++,s()));for(let e=l.list.length-1;e>=0;e--){const n=l.list[e];c.noStroke(),n.pos.x+=n.vec.v.x,n.pos.y+=n.vec.v.y,n.extend.modulate(n),n.extend.draw(n),n.timer++,n.isLive||l.list.splice(e,1)}(l.nextUnitIndex<e.req.units.length-1||l.list.length>0)&&l.time++,c.textSize(20),c.fill("#f5cdcd"),c.text("Frame: ".concat(l.time),5,20),c.text("Second: ".concat(Math.floor(l.time/60)),5,40),c.fill("#d8f5cd"),c.text("Particle: ".concat(l.list.length),5,60)}}),Object(ie.jsx)(le.ButtonRecord,{textAlign:"left",buttons:[{label:"Restart",width:130,callback:()=>{l.time=0,l.nextUnitIndex=0,l.list.length=0,s()}},{label:"Back",width:130,callback:()=>{e.back()}}]})]})}}(en||(en={}));var nn,tn,on,rn=en,ln=t(22),cn=t.n(ln);let sn;(sn||(sn={})).Component=()=>{const[e,n]=Object(u.useState)({mode:"set",req:null}),t=()=>n({...e}),[i,o]=Object(u.useState)({adjLeft:0,adjTop:0,rate:1}),r=Object(u.useRef)(null),l=()=>{if(null!=r.current){const e=r.current.getBoundingClientRect(),[n,t]=[e.width,e.height],i=Oe.CONTENTS_WIDTH,l=Oe.CONTENTS_HEIGHT,c=t/l>n/i,s=c?n/i:t/l;o({adjLeft:c?0:n/2-i*s/2,adjTop:c?t/2-l*s/2:0,rate:s})}};window.addEventListener("DOMContentLoaded",(()=>{Oe.isSmartPhone()?window.addEventListener("orientationchange resize",l):window.addEventListener("resize",l)})),Object(u.useEffect)((()=>l()),[]);const c=Object(ie.jsx)(De.Component,{isVisible:"set"===e.mode,start:n=>{e.req=n,e.mode="play",t()}});return Object(ie.jsx)(dn,{ref:r,children:Object(ie.jsx)(bn,{left:i.adjLeft,top:i.adjTop,rate:i.rate,children:Object(ie.jsx)(hn,{children:(()=>{switch(e.mode){case"set":return c;case"play":return cn()(null!=e.req,"ls.req\u304cnull\u3067\u3042\u3063\u3066\u306f\u306a\u3089\u306a\u3044\u3002"),Object(ie.jsxs)(ie.Fragment,{children:[c,Object(ie.jsx)(rn.Component,{req:e.req,back:()=>{e.mode="set",t()}})]})}})()})})})};var an=sn;const dn=v.b.div(nn||(nn=Object(j.a)(["\n  display: inline-block;\n  position: relative;\n  /* width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  background-color: #9eadc9;\n  margin: 5px 0 0 5px; */\n  width: 100%;\n  height: 100%;\n"]))),bn=v.b.div(tn||(tn=Object(j.a)(["\n  display: inline-block;\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  transform-origin: top left;\n  /* width: 100%;\n  height: 100%; */\n  transform: scale(",");\n"])),(e=>e.top),(e=>e.left),(e=>e.rate)),hn=v.b.div(on||(on=Object(j.a)(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  background-color: #929292;\n"])),Oe.CONTENTS_WIDTH,Oe.CONTENTS_HEIGHT);var un=function(){return Object(u.useEffect)((()=>{document.oncontextmenu=function(){return!1},document.onkeydown=e=>{if(e.ctrlKey&&["f","s"].includes(e.key))return!1}}),[]),Object(ie.jsx)(an.Component,{})};var pn=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((n=>{let{getCLS:t,getFID:i,getFCP:o,getLCP:r,getTTFB:l}=n;t(e),i(e),o(e),r(e),l(e)}))};g.a.render(Object(ie.jsx)(p.a.StrictMode,{children:Object(ie.jsx)(un,{})}),document.getElementById("root")),pn()}},[[57,1,2]]]);
//# sourceMappingURL=main.0999f307.chunk.js.map