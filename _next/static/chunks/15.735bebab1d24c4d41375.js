(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"6Bi2":function(e,i,o){e.exports={window:"Window_window__1V8GE",foreground:"Window_foreground__iWNRf",minimize:"Window_minimize__3ipgc",maximize:"Window_maximize__3pdPJ",close:"Window_close__2QquY",titlebar:"Window_titlebar__2yGpb",content:"Window_content__jxFwb",maximized:"Window_maximized__m5RQ0",resizeTop:"Window_resizeTop__287AO",resizeRight:"Window_resizeRight__2E9G8",resizeBottom:"Window_resizeBottom__hQ0Qy",resizeLeft:"Window_resizeLeft__LMCZ7",resizeTopRight:"Window_resizeTopRight__2vVUt",resizeBottomRight:"Window_resizeBottomRight__3iVkP",resizeBottomLeft:"Window_resizeBottomLeft__1AclW",resizeTopLeft:"Window_resizeTopLeft__2mYqj"}},Kg0h:function(e,i,o){"use strict";o.r(i);var t=o("q1tI"),n=o.n(t),a=o("6Bi2"),s=o.n(a),c=o("c5pV"),r=o("wHSu"),d=o("IP2g"),l=n.a.createElement,m=function(e){var i=e.icon,o=e.name,t=e.onMaximize,n=e.onMinimize,a=e.onClose;return l("header",{className:"".concat(s.a.titlebar," handle"),onDoubleClick:t},l("h1",null,l("figure",null,l(c.a,{src:i}),l("figcaption",null,o))),l("nav",{className:"cancel"},l("button",{id:s.a.close,type:"button",onClick:a},l(d.a,{size:"xs",icon:r.c})),l("button",{id:s.a.minimize,type:"button",onClick:n},l(d.a,{size:"xs",icon:r.a})),l("button",{id:s.a.maximize,type:"button",onClick:t},l(d.a,{size:"xs",icon:r.b}))))},_=o("oAWw"),z=o("hco6"),u=o("m+kb"),g=n.a.createElement;i.default=function(e){var i,o=e.children,n=e.icon,a=void 0===n?"":n,c=e.id,r=e.name,d=void 0===r?"":r,l=e.bgColor,w=e.onMaximize,p=e.onMinimize,b=e.onClose,f=e.onFocus,h=e.onBlur,W=e.updatePosition,x=e.updateSize,R=e.lockAspectRatio,B=e.zIndex,C=e.maximized,k=e.height,L=void 0===k?0:k,v=e.width,T=void 0===v?0:v,N=Object(t.useContext)(u.a).session.foregroundId,y=Object(t.useRef)(null);return Object(t.useEffect)((function(){Object(_.d)(y)}),[]),g(z.a,{ref:y,enableUserSelectHack:!1,className:"".concat(s.a.window," ").concat(C?s.a.maximized:""," ").concat(N===c?s.a.foreground:""),dragHandleClassName:"handle",resizeHandleClasses:(i=s.a,{top:i.resizeTop,right:i.resizeRight,bottom:i.resizeBottom,left:i.resizeLeft,topRight:i.resizeTopRight,bottomRight:i.resizeBottomRight,bottomLeft:i.resizeBottomLeft,topLeft:i.resizeTopLeft}),cancel:".cancel",size:{height:C?"100%":L,width:C?"100%":T},minHeight:250,minWidth:250,tabIndex:0,onFocus:f,onBlur:h,onDragStart:_.c,onDragStop:W,onResizeStop:x,enableResizing:!C,disableDragging:C,lockAspectRatio:R,style:{zIndex:B}},g(m,{icon:a,name:d,onMaximize:w,onMinimize:p,onClose:b}),g("article",{className:s.a.content,style:{backgroundColor:l}},o))}}}]);