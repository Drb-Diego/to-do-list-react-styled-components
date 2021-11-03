(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{23:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var a,c,r,o,i,s,u=e(0),d=e.n(u),l=e(14),b=e.n(l),j=(e(23),e(2)),p=e(3),h=e(5),O=e(4),x=e(10),f=e(18),v=e(6),k=e(7),m=k.a.section(a||(a=Object(v.a)(["\n  width: 50vw;\n  background-color: white;\n  box-shadow: 0 0 10px black;\n  color: black;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    text-align: center;\n    margin-bottom: 10px;\n  }\n\n  @media screen and (max-width: 768px ) {\n\n   section {\n      width: 80vw;\n    }\n    \n    h1 {\n      color: red;\n      font-size: 20px;\n    }\n\n    h2 {\n      font-size: 17px;\n    }\n  }\n"]))),g=k.a.button(c||(c=Object(v.a)(["\n  border-radius: 5px;\n  font-size: 0.9rem;\n  padding: 5px;\n  cursor: pointer;\n  margin: 1rem;\n  border: none;\n  color: white;\n  font-weight: bold;\n  background-color: blue;\n  box-shadow: 0 0 0.5rem black;\n  \n  &:hover {\n    transition: 500ms;\n    background-color: black;\n  }\n"]))),w=e(1),y=function(n){Object(h.a)(e,n);var t=Object(O.a)(e);function e(){return Object(j.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){var n=this.props.addNewTask;return Object(w.jsx)(g,{onClick:n,children:"Adicionar nova tarefa"})}}]),e}(u.Component),C=k.a.input.attrs({type:"text"})(r||(r=Object(v.a)(["\n  padding: 0.3rem;\n  margin-top: 0.4em;\n  font-size: 1.4rem;\n\n"]))),T=function(n){Object(h.a)(e,n);var t=Object(O.a)(e);function e(){return Object(j.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){var n=this.props,t=n.inputValue,e=n.handleChangeInput;return Object(w.jsx)(C,{onChange:e,value:t})}}]),e}(u.Component),V=k.a.div(o||(o=Object(v.a)(["\n  width: 90%;\n  margin: 0 auto;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n"]))),z=k.a.ol(i||(i=Object(v.a)(["\n  width: 100%;\n\n  li {\n    font-size: 1.3rem;\n  }\n"]))),I=k.a.li(s||(s=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-decoration: ",";\n\n  div {\n    width: 5.6vw;\n    display: flex;\n    justify-content: space-between;\n    color: blue;\n    cursor: pointer;\n\n    svg {\n      &:hover {\n        color: green;\n      }\n    }\n\n  }\n"])),(function(n){return n.textDecoration})),N=e(9),S=function(n){Object(h.a)(e,n);var t=Object(O.a)(e);function e(){return Object(j.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){var n=this.props,t=n.tasks,e=n.concludeTask,a=n.isConclude;return Object(w.jsx)(V,{children:Object(w.jsx)(z,{children:t.map((function(n,t){return Object(w.jsxs)(I,{textDecoration:a,children:[n,Object(w.jsxs)("div",{children:[Object(w.jsx)(N.a,{onClick:e}),Object(w.jsx)(N.b,{}),Object(w.jsx)(N.c,{})]})]},t)}))})})}}]),e}(u.Component),D=function(n){Object(h.a)(e,n);var t=Object(O.a)(e);function e(){var n;return Object(j.a)(this,e),(n=t.call(this)).handleChangeInput=function(t){var e=t.target.value;return n.setState({inputValue:e})},n.addNewTask=function(){var t=n.state,e=t.inputValue,a=t.tasks;""!==e&&n.setState({tasks:[].concat(Object(f.a)(a),[e]),inputValue:""})},n.concludeTask=function(){return n.setState({isConclude:"line-through"})},n.state={inputValue:"",tasks:[],isConclude:"none",handleChangeInput:n.handleChangeInput,addNewTask:n.addNewTask,concludeTask:n.concludeTask},n}return Object(p.a)(e,[{key:"render",value:function(){var n=this.state.inputValue;return Object(w.jsxs)(m,{children:[Object(w.jsx)("h1",{children:"Digite para adicionar uma nova tarefa"}),Object(w.jsxs)("h2",{children:["Nova tarefa: ",n]}),Object(w.jsx)(T,Object(x.a)({},this.state)),Object(w.jsx)(y,Object(x.a)({},this.state)),Object(w.jsx)(S,Object(x.a)({},this.state))]})}}]),e}(u.Component),J=function(n){Object(h.a)(e,n);var t=Object(O.a)(e);function e(){return Object(j.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(D,{})})}}]),e}(u.Component);b.a.render(Object(w.jsx)(d.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d8dd1623.chunk.js.map