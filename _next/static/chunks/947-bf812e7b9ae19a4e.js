"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{5193:function(e,n,t){t.d(n,{hU:function(){return S},zx:function(){return E}});var r=t(7375),a=t(6052),i=t(9703),c=t(8554),o=t.n(c),s=t(7294),l=t(6450),u=t(9238);function d(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}var f=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],p=(0,l.kr)({strict:!1,name:"ButtonGroupContext"}),h=p[0],v=p[1],b=(0,a.Gp)((function(e,n){var t=e.size,r=e.colorScheme,c=e.variant,o=e.className,l=e.spacing,u=void 0===l?"0.5rem":l,p=e.isAttached,v=e.isDisabled,b=d(e,f),g=(0,i.cx)("chakra-button__group",o),y=s.useMemo((function(){return{size:t,colorScheme:r,variant:c,isDisabled:v}}),[t,r,c,v]),x={display:"inline-flex"};return x=m({},x,p?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),s.createElement(h,{value:y},s.createElement(a.m$.div,m({ref:n,role:"group",__css:x,className:g,"data-attached":p?"":void 0},b)))}));i.Ts&&(b.displayName="ButtonGroup");var g=["label","placement","spacing","children","className","__css"],y=function(e){var n=e.label,t=e.placement,r=e.spacing,c=void 0===r?"0.5rem":r,o=e.children,l=void 0===o?s.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):o,f=e.className,p=e.__css,h=d(e,g),v=(0,i.cx)("chakra-button__spinner",f),b="start"===t?"marginEnd":"marginStart",y=s.useMemo((function(){var e;return m(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[b]=n?c:0,e.fontSize="1em",e.lineHeight="normal",e),p)}),[p,n,b,c]);return s.createElement(a.m$.div,m({className:v},h,{__css:y}),l)};i.Ts&&(y.displayName="ButtonSpinner");var x=["children","className"],k=function(e){var n=e.children,t=e.className,r=d(e,x),c=s.isValidElement(n)?s.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,i.cx)("chakra-button__icon",t);return s.createElement(a.m$.span,m({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:o}),c)};i.Ts&&(k.displayName="ButtonIcon");var _=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],E=(0,a.Gp)((function(e,n){var t=v(),c=(0,a.mq)("Button",m({},t,e)),l=(0,a.Lr)(e),u=l.isDisabled,f=void 0===u?null==t?void 0:t.isDisabled:u,p=l.isLoading,h=l.isActive,b=l.children,g=l.leftIcon,x=l.rightIcon,k=l.loadingText,E=l.iconSpacing,N=void 0===E?"0.5rem":E,S=l.type,w=l.spinner,I=l.spinnerPlacement,O=void 0===I?"start":I,C=l.className,L=l.as,A=d(l,_),B=s.useMemo((function(){var e,n=o()({},null!=(e=null==c?void 0:c._focus)?e:{},{zIndex:1});return m({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},c,!!t&&{_focus:n})}),[c,t]),T=function(e){var n=s.useState(!e),t=n[0],r=n[1];return{ref:s.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(L),z=T.ref,D=T.type,P={rightIcon:x,leftIcon:g,iconSpacing:N,children:b};return s.createElement(a.m$.button,m({disabled:f||p,ref:(0,r.qq)(n,z),as:L,type:null!=S?S:D,"data-active":(0,i.PB)(h),"data-loading":(0,i.PB)(p),__css:B,className:(0,i.cx)("chakra-button",C)},A),p&&"start"===O&&s.createElement(y,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:N},w),p?k||s.createElement(a.m$.span,{opacity:0},s.createElement(j,P)):s.createElement(j,P),p&&"end"===O&&s.createElement(y,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:N},w))}));function j(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return s.createElement(s.Fragment,null,n&&s.createElement(k,{marginEnd:a},n),r,t&&s.createElement(k,{marginStart:a},t))}i.Ts&&(E.displayName="Button");var N=["icon","children","isRound","aria-label"],S=(0,a.Gp)((function(e,n){var t=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],c=d(e,N),o=t||r,l=s.isValidElement(o)?s.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(E,m({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},c),l)}));i.Ts&&(S.displayName="IconButton")},947:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(1383),a=t(5152),i=t.n(a),c=t(6052),o=t(9703),s=t(7294),l=t(5393);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}var d=o.jU?s.useLayoutEffect:s.useEffect;function m(e,n){var t=(0,l.O)(),r=Array.isArray(e)?e:[e],a=Array.isArray(n)?n:[n];a=a.filter((function(e){return null!=e}));var i=(0,s.useState)((function(){return r.map((function(e,n){var t;return{media:e,matches:null!=(t=a[n])&&t}}))})),c=i[0],m=i[1];return d((function(){m(r.map((function(e){return{media:e,matches:t.window.matchMedia(e).matches}})));var e=r.map((function(e){return t.window.matchMedia(e)})),n=function(e){m((function(n){return n.slice().map((function(n){return n.media===e.media?u({},n,{matches:e.matches}):n}))}))};return e.forEach((function(e){(0,o.mf)(e.addListener)?e.addListener(n):e.addEventListener("change",n)})),function(){e.forEach((function(e){(0,o.mf)(e.removeListener)?e.removeListener(n):e.removeEventListener("change",n)}))}}),[]),c.map((function(e){return e.matches}))}o.Ts;o.Ts;function f(e,n){var t,r=function(e){var n,t;void 0===e&&(e="base");var r=(0,c.Fg)().__breakpoints.details.map((function(e){var n=e.minMaxQuery;return{breakpoint:e.breakpoint,query:n.replace("@media screen and ","")}})),a=m(r.map((function(e){return e.query})),r.map((function(n){return n.breakpoint===e})));return null!=(n=null==(t=r[a.findIndex((function(e){return 1==e}))])?void 0:t.breakpoint)?n:e}(n),a=(0,c.Fg)();if(r){var i=Array.from((null==(t=a.__breakpoints)?void 0:t.keys)||[]);return function(e,n,t){void 0===t&&(t=o.AV);var r=Object.keys(e).indexOf(n);if(-1!==r)return e[n];for(var a=t.indexOf(n);a>=0;){if(null!=e[t[a]]){r=a;break}a-=1}return-1!==r?e[t[r]]:void 0}((0,o.kJ)(e)?(0,o.sq)(Object.entries((0,o.Yq)(e,i)).map((function(e){return[e[0],e[1]]}))):e,r,i)}}var p,h=t(949),v=t(8527),b=t(5193),g=t(1664),y=t.n(g),x=t(4632),k=t(5893),_=i()((function(){return Promise.all([t.e(876),t.e(116),t.e(725),t.e(346)]).then(t.bind(t,9346))}),{loadableGenerated:{webpack:function(){return[9346]}}}),E=i()((function(){return Promise.all([t.e(876),t.e(546)]).then(t.bind(t,8546))}),{loadableGenerated:{webpack:function(){return[8546]}}}),j=function(e){var n=e.children,t=(0,h.If)().colorMode,a=f({md:!0}),i={light:"white",dark:"#171717"},c={light:"gray.600",dark:"gray.300"},o=(0,x.Z)(v.kC)(p||(p=(0,r.Z)(["\n    position: sticky;\n    z-index: 10;\n    top: 0;\n    backdrop-filter: saturate(180%) blur(20px);\n    transition: height 0.5s, line-height 0.5s;\n  "])));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(o,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",maxWidth:"auto",minWidth:"356px",width:"100%",bg:i[t],as:"nav",px:[2,6,6],py:2,mt:8,mb:[0,0,8],mx:"auto",children:[(0,k.jsx)(v.xv,{children:"Left side "}),(0,k.jsx)(v.LZ,{}),a&&(0,k.jsxs)(v.xu,{children:[(0,k.jsx)(y(),{href:"/",passHref:!0,children:(0,k.jsx)(b.zx,{as:"a",variant:"ghost",p:[1,2,4],_hover:{backgroundColor:c[t]},children:"Home"})}),(0,k.jsx)(y(),{href:"/blog",passHref:!0,children:(0,k.jsx)(b.zx,{as:"a",variant:"ghost",p:[1,2,4],_hover:{backgroundColor:c[t]},children:"Blog"})})]}),!a&&(0,k.jsx)(v.xu,{mr:2,children:(0,k.jsx)(_,{})}),(0,k.jsx)(E,{})]}),(0,k.jsx)(v.kC,{as:"main",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",bg:i[t],color:{light:"black",dark:"white"}[t],px:[2,4,4],mt:[4,8,8],children:n})]})}}}]);