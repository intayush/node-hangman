(this["webpackJsonphm-client"]=this["webpackJsonphm-client"]||[]).push([[0],{30:function(e,n,t){},49:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r,i,a,o,c,s,d,l,j=t(1),b=t.n(j),x=t(21),f=t.n(x),u=(t(30),t(2)),h=t(5),g=t(3),m=t(8),O=t.n(m),p=t(22),y=t(9),v=t.n(y),w=function(){var e=Object(j.useState)(!0),n=Object(h.a)(e,2),t=n[0],r=n[1],i=Object(j.useState)(0),a=Object(h.a)(i,2),o=a[0],c=a[1],s=Object(j.useState)(""),d=Object(h.a)(s,2),l=d[0],b=d[1],x=Object(j.useState)([]),f=Object(h.a)(x,2),u=f[0],g=f[1],m=Object(j.useState)(0),y=Object(h.a)(m,2),w=y[0],k=y[1],S=Object(j.useState)([]),C=Object(h.a)(S,2),A=C[0],M=C[1],I=Object(j.useState)(null),L=Object(h.a)(I,2),N=L[0],_=L[1],H=Object(j.useState)(!1),z=Object(h.a)(H,2),E=z[0],F=z[1],B=Object(j.useCallback)(Object(p.a)(O.a.mark((function e(){var n,t,i,a,o,s,d,l,j,x,f,u,h,m,p,y,w;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("HANGMAN_SESSION_ID"),r(!0),e.prev=2,e.next=5,v.a.get("api/move",{params:{sessionId:n,move:N,reset:E?1:null}});case 5:t=e.sent,i=t.data,a=i.sessionId,o=i.wordArray,s=i.movesCount,d=i.incorrectLetters,200===t.status&&(n&&n===a||localStorage.setItem("HANGMAN_SESSION_ID",a),(N&&o.includes(N)||!N)&&g(o),(N&&d.includes(N)||!N)&&M(d),E&&F(!1),b(a),k(s),r(!1)),e.next=40;break;case 15:if(e.prev=15,e.t0=e.catch(2),404!==(null===(l=e.t0.response)||void 0===l?void 0:l.status)){e.next=38;break}return e.prev=18,e.next=21,v.a.get("api/move");case 21:j=e.sent,x=j.data,f=x.sessionId,u=x.wordArray,h=x.movesCount,b(f),g(u),k(h),localStorage.setItem("HANGMAN_SESSION_ID",f),e.next=36;break;case 32:e.prev=32,e.t1=e.catch(18),"object"===typeof e.t1?c(Number(null!==(m=null===(p=e.t1.response)||void 0===p?void 0:p.status)&&void 0!==m?m:0)):c(500),r(!1);case 36:e.next=40;break;case 38:"object"===typeof e.t0?c(Number(null!==(y=null===(w=e.t0.response)||void 0===w?void 0:w.status)&&void 0!==y?y:0)):c(500),r(!1);case 40:case"end":return e.stop()}}),e,null,[[2,15],[18,32]])}))),[r,c,b,g,k,M,N,E]);return Object(j.useEffect)((function(){B()}),[B]),{move:N,isLoading:t,errorCode:o,sessionId:l,wordArray:u,wrongLetters:A,numberOfMoves:w,dispatchMove:function(e){var n=e.currentMove,t=e.reset;0!==o&&c(0),F(t),_(n)}}},k=(t(49),t(0)),S=function(e){var n=e.moves,t=e.gameOver&&n<6;return Object(k.jsx)(C,{children:Object(k.jsxs)(A,{x:"0px",y:"0px",viewBox:"0 0 236 330",children:[Object(k.jsx)(M,{greyed:!1,hidden:!1,x1:"0",y1:"330",x2:"236",y2:"330"}),Object(k.jsx)(M,{greyed:!1,hidden:!1,x1:"59",y1:"0",x2:"59",y2:"330"}),Object(k.jsx)(M,{greyed:!1,hidden:!1,x1:"139.4",y1:"53.5",x2:"139.4",y2:"0"}),Object(k.jsx)(M,{greyed:!1,hidden:!1,x1:"58",y1:"2.5",x2:"139.4",y2:"2.5"}),Object(k.jsx)(M,{greyed:n<3,hidden:t,x1:"139.4",y1:"133.9",x2:"121.6",y2:"212.4"}),Object(k.jsx)(M,{greyed:n<4,hidden:t,x1:"139.4",y1:"134.3",x2:"154.2",y2:"210.8"}),Object(k.jsx)(M,{greyed:n<5,hidden:t,x1:"139.4",y1:"218.7",x2:"167.5",y2:"291.4"}),Object(k.jsx)(M,{greyed:n<6,hidden:t,x1:"139.4",y1:"218.7",x2:"114.2",y2:"299.3"}),Object(k.jsx)(M,{greyed:n<2,hidden:t,x1:"139.4",y1:"124.7",x2:"139.4",y2:"218.7"}),Object(k.jsx)(I,{"data-testid":"hangmanHead",greyed:n<1,hidden:t,cx:"139.4",cy:"89.1",r:"35.6"}),Object(k.jsx)(M,{greyed:!1,hidden:n<6,x1:"122.9",y1:"83.4",x2:"131.1",y2:"91.6"}),Object(k.jsx)(M,{greyed:!1,hidden:n<6,x1:"122.6",y1:"91.9",x2:"131.6",y2:"82.9"}),Object(k.jsx)(M,{greyed:!1,hidden:n<6,x1:"147",y1:"83.5",x2:"155.3",y2:"91.8"}),Object(k.jsx)(M,{greyed:!1,hidden:n<6,x1:"146.8",y1:"92",x2:"155.8",y2:"83"}),Object(k.jsx)(L,{greyed:!1,hidden:n<6,d:"M126.4,106.5c0-1.8,5.6-3.2,12.4-3.2"}),Object(k.jsx)(L,{greyed:!1,hidden:n<6,d:"M150.9,106.5c0-1.8-5.6-3.2-12.4-3.2"}),Object(k.jsx)(I,{greyed:!1,hidden:!t,cx:"167",cy:"119.9",r:"35.6"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"167",y1:"169",x2:"231.8",y2:"96.7"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"167",y1:"155.5",x2:"167",y2:"249.4"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"167",y1:"249.4",x2:"180.4",y2:"330.5"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"167",y1:"249.4",x2:"142.4",y2:"330.5"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"167",y1:"169",x2:"92.8",y2:"106.4"}),Object(k.jsx)(L,{greyed:!1,hidden:!t,d:"M151.8,133.7c0,4.2,6.9,7.7,15.4,7.7"}),Object(k.jsx)(L,{greyed:!1,hidden:!t,d:"M182.2,133.7c0,4.2-6.9,7.7-15.4,7.7"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"151",y1:"118.1",x2:"161.1",y2:"118.1"}),Object(k.jsx)(M,{greyed:!1,hidden:!t,x1:"173.1",y1:"118.1",x2:"183.2",y2:"118.1"})]})})},C=g.a.div(r||(r=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 75vh;\n  @media screen and (max-width: 786px) {\n    height: 40vh;\n  }\n"]))),A=g.a.svg(i||(i=Object(u.a)(["\n  height: 100%;\n  fill: transparent;\n  stroke-width: 4px;\n  stroke-linecap: round;\n"]))),M=g.a.line(a||(a=Object(u.a)(["\n  opacity: ",";\n  stroke: ",";\n"])),(function(e){return e.hidden?"0":"1"}),(function(e){return e.greyed?"#30635e":"#fff"})),I=g.a.circle(o||(o=Object(u.a)(["\n  opacity: ",";\n  stroke: ",";\n"])),(function(e){return e.hidden?"0":"1"}),(function(e){return e.greyed?"#30635e":"#fff"})),L=g.a.path(c||(c=Object(u.a)(["\n  opacity: ",";\n  stroke: ",";\n"])),(function(e){return e.hidden?"0":"1"}),(function(e){return e.greyed?"#30635e":"#fff"})),N=Object(j.memo)(S);function _(e){var n=e.word;return Object(k.jsx)(Y,{children:Object(k.jsx)(G,{children:n.map((function(e,t){return Object(k.jsx)(J,{wordLength:n.length,visible:Boolean(e.length),children:e.length?e:""},"_word_".concat(t))}))})})}var H,z,E,F,B,P,D,T,Y=g.a.div(s||(s=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]))),G=g.a.span(d||(d=Object(u.a)(["\n  padding: 0 0.75em;\n  white-space: nowrap;\n"]))),J=g.a.span(l||(l=Object(u.a)(["\n  display: inline-block;\n  border-bottom: 3px solid transparent;\n  width: ",";\n  font-size: 1.75em;\n  color: #fff;\n  vertical-align: top;\n  margin-left: 4px;\n  height: 1.3em;\n  line-height: 1.3em;\n  text-align: center;\n  overflow: hidden;\n  border-color: ",";\n\n  :first-child {\n    margin-left: 0;\n  }\n"])),(function(e){return e.wordLength>8?"0.85em":"1em"}),(function(e){return e.visible?"none":"#fff"})),V=Object(j.memo)(_),W=function(e){var n=e.word,t=e.wrongLetters,r=e.letterClickHandler,i=Array.from(Array(26)).map((function(e,n){return String.fromCharCode(n+97)}));return Object(k.jsx)(q,{children:Object(k.jsx)(K,{children:i.filter((function(e){return!t.includes(e)&&!n.includes(e)})).map((function(e,n){return Object(k.jsx)(Q,{"data-testid":"_alpha_".concat(n),onClick:function(){return r({letter:e})},children:e},"_alpha_".concat(n))}))})})},q=g.a.div(H||(H=Object(u.a)(["\n  width: 100%;\n  user-select: none;\n  transition: bottom 0.4s;\n"]))),K=g.a.div(z||(z=Object(u.a)(["\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),Q=g.a.button(E||(E=Object(u.a)(["\n  height: 45px;\n  width: 5em;\n  margin: 3px;\n  border-radius: 4px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-size: 1em;\n  outline: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: top;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  @media screen and (max-width: 786px) {\n    width: 3em;\n  }\n  @media screen and (max-width: 500px) {\n    width: 2em;\n  }\n"]))),R=Object(j.memo)(W);var U,X,Z,$,ee,ne,te,re,ie,ae,oe,ce=g.a.div(F||(F=Object(u.a)(["\n  position: fixed;\n  z-index: 999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),se=g.a.div(B||(B=Object(u.a)(["\n  color: #fff;\n"]))),de=g.a.div(P||(P=Object(u.a)(['\n  position: relative;\n  margin: 0px auto 10px auto;\n  width: 50px;\n  max-height: 100%;\n\n  ::before {\n    content: "";\n    display: block;\n    padding-top: 100%;\n  }\n']))),le=g.a.svg(D||(D=Object(u.a)(["\n  animation: rotate 2s linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  text-align: center;\n  font-size: 1.2em;\n  color: #fff;\n\n  @keyframes rotate {\n    0% {\n      -webkit-transform: rotate(0deg);\n      -ms-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate(360deg);\n      -ms-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),je=g.a.circle(T||(T=Object(u.a)(["\n  animation: strokeAnimation 1.5s ease-in-out infinite;\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  stroke: #fff;\n\n  @keyframes strokeAnimation {\n    0% {\n      stroke-dasharray: 1, 200;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 89, 200;\n      stroke-dashoffset: -35px;\n    }\n\n    100% {\n      stroke-dasharray: 89, 200;\n      stroke-dashoffset: -124px;\n    }\n  }\n"]))),be=function(e){var n=e.isLoading;return Object(k.jsx)(k.Fragment,{children:n&&Object(k.jsx)(ce,{children:Object(k.jsxs)(se,{children:[Object(k.jsx)(de,{children:Object(k.jsx)(le,{viewBox:"25 25 50 50",children:Object(k.jsx)(je,{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"2",color:"#fff","stroke-miterlimit":"10"})})}),Object(k.jsx)("span",{children:"Loading ...."})]})})})},xe=function(e){var n=e.numberOfMoves;return Object(k.jsx)(fe,{children:Object(k.jsxs)(ue,{children:[6-n," Attpempts Left"]})})},fe=g.a.div(U||(U=Object(u.a)(["\n  margin: 1em 0;\n  display: flex;\n  justify-content: center;\n"]))),ue=g.a.span(X||(X=Object(u.a)(["\n  color: #fff;\n"]))),he=Object(j.memo)(xe),ge=function(e){var n=e.isVisible,t=e.winner,r=e.closeHandler,i=e.errorCode,a=t&&0===i?"You have won :)":"You have lost :(";return a=0!==i?"Server returned a ".concat(i," error. Please Try again"):a,Object(k.jsx)(k.Fragment,{children:n&&Object(k.jsx)(Oe,{children:Object(k.jsx)(pe,{onClick:function(e){return e.stopPropagation()},children:Object(k.jsx)(ye,{children:Object(k.jsxs)(ve,{children:[Object(k.jsx)("h2",{children:a}),Object(k.jsx)(we,{onClick:r,children:0!==i?"Try Again":"Play Again"})]})})})})})},me=Object(j.memo)(ge),Oe=g.a.div(Z||(Z=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.25);\n  animation-name: appear;\n  animation-duration: 300ms;\n"]))),pe=g.a.div($||($=Object(u.a)(["\n  border-radius: 10px;\n  width: 100%;\n  max-width: 350px;\n  background: white;\n  position: relative;\n  margin: 0 20px;\n  max-height: calc(100vh - 40px);\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: slide-in;\n  animation-duration: 0.5s;\n\n  @keyframes appear {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes slide-in {\n    from {\n      transform: translateY(-150px);\n    }\n    to {\n      transform: translateY(0);\n    }\n  }\n"]))),ye=g.a.div(ee||(ee=Object(u.a)(["\n  overflow: auto;\n"]))),ve=g.a.div(ne||(ne=Object(u.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),we=g.a.button(te||(te=Object(u.a)(["\n  padding: 1em 2em;\n  background: #004134;\n  color: #fff;\n  font-size: 1em;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n"])));var ke=g.a.div(re||(re=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  align-items: center;\n  background: #004134;\n"]))),Se=g.a.div(ie||(ie=Object(u.a)(["\n  height: 75vh;\n  @media screen and (max-width: 786px) {\n    height: 40vh;\n  }\n"]))),Ce=g.a.div(ae||(ae=Object(u.a)(["\n  margin: 0.75em;\n  display: flex;\n  justify-content: center;\n"]))),Ae=g.a.button(oe||(oe=Object(u.a)(["\n  border: 1px solid white;\n  background: transparent;\n  color: white;\n  padding: 0.75em 1em;\n  border-radius: 3px;\n  font-size: 1em;\n"]))),Me=function(){var e=w(),n=e.isLoading,t=e.errorCode,r=e.wordArray,i=e.wrongLetters,a=e.numberOfMoves,o=e.dispatchMove;Object(j.useEffect)((function(){l(!!r.length&&(!r.includes("")||a>5))}),[r,a]),Object(j.useEffect)((function(){0!==t&&l(!0)}),[t]);var c=Object(j.useState)(!1),s=Object(h.a)(c,2),d=s[0],l=s[1],b=Object(j.useCallback)((function(e){var n=e.letter;o({currentMove:n,reset:!1})}),[o]),x=Object(j.useCallback)((function(){o({currentMove:"",reset:!0})}),[o]),f=Object(j.useCallback)((function(){x(),l(!1)}),[x,l]);return Object(k.jsxs)(ke,{children:[Object(k.jsx)(be,{isLoading:n}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N,{moves:a,gameOver:d}),Object(k.jsxs)(Se,{children:[Object(k.jsx)(V,{word:r}),Object(k.jsx)(he,{numberOfMoves:a}),Object(k.jsx)(R,{word:r,letterClickHandler:b,wrongLetters:i}),Object(k.jsx)(Ce,{children:Object(k.jsx)(Ae,{onClick:x,children:"New Word"})})]}),Object(k.jsx)(me,{errorCode:t,isVisible:d,winner:a<5,closeHandler:f})]})]})},Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),a(e),o(e)}))};f.a.render(Object(k.jsx)(b.a.StrictMode,{children:Object(k.jsx)(Me,{})}),document.getElementById("root")),Ie()}},[[52,1,2]]]);
//# sourceMappingURL=main.742764b7.chunk.js.map