"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{3414:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,o,a,i,c,s,u,d,l,x,p,m=t(2791),b=t(680),f=function(n){return n.contacts.filter},g=function(n){return n.contacts.contacts.items},h=function(n){return n.contacts.contacts.isLoading},Z=function(n){return n.contacts.contacts.error},j=t(168),v=t(7691),k=v.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 500px;\n  padding: 40px 20px;\n  height: 100%;\n  margin: 0 auto;\n  align-items: center;\n  font-size: 18px;\n"]))),w=v.ZP.h1(o||(o=(0,j.Z)(["\n  margin: 0;\n  margin-bottom: 20px;\n"]))),y=t(9439),C=v.ZP.form(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto 20px;\n"]))),z=v.ZP.label(i||(i=(0,j.Z)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 18px;\n"]))),P=v.ZP.input(c||(c=(0,j.Z)(["\n  padding: 8px;\n  margin: 8px 0;\n  width: 500px;\n  border: 1px solid rgb(219, 219, 219);\n  border-radius: 4px;\n  outline: none;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: rgb(231, 230, 230);\n  }\n"]))),A=v.ZP.button(s||(s=(0,j.Z)(["\n  padding: 8px;\n  background-color: white;\n  outline: none;\n  border: 1px solid rgb(219, 219, 219);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #ff8c00;\n  }\n"]))),F=t(9434),L=t(6382),S=t(8174),I=(t(5462),t(184)),_=function(){var n=(0,F.I0)(),e=(0,F.v9)(g),t=(0,m.useState)(""),r=(0,y.Z)(t,2),o=r[0],a=r[1],i=(0,m.useState)(""),c=(0,y.Z)(i,2),s=c[0],u=c[1],d=function(n){switch(n.currentTarget.name){case"name":a(n.currentTarget.value);break;case"number":u(n.currentTarget.value);break;default:throw new Error("Something went wrong, try again")}},l=function(t){t.preventDefault(),a(""),u(""),e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?S.Am.error("".concat(o," is already in contacts")):(n((0,b.al)({name:o,number:s,id:(0,L.x0)()})),S.Am.success("Create new contact ".concat(o,"!")))};return(0,I.jsxs)(C,{onSubmit:l,children:[(0,I.jsxs)(z,{children:["Name",(0,I.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:o,onChange:d})]}),(0,I.jsxs)(z,{children:["Number",(0,I.jsx)(P,{type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:d})]}),(0,I.jsx)(A,{type:"submit",onSubmit:l,disabled:!o&&s,children:"Add contact"})]})},N=v.ZP.p(u||(u=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),T=function(n){var e=n.contact,t=e.name,r=e.number;return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(N,{children:[t,": ",r]})})},q=v.ZP.ul(d||(d=(0,j.Z)(["\n  list-style: none;\n  padding-left: 0;\n"]))),D=v.ZP.li(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n"]))),E=v.ZP.button(x||(x=(0,j.Z)(["\n  padding: 8px;\n  background-color: white;\n  outline: none;\n  border: 1px solid rgb(219, 219, 219);\n  border-radius: 4px;\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #ff8c00;\n  }\n"]))),$=function(){var n=(0,F.I0)(),e=(0,F.v9)(f),t=(0,F.v9)(g),r=e.toLowerCase(),o=t.filter((function(n){return n.name.toLowerCase().includes(r)}));return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(q,{children:o&&o.map((function(e){return(0,I.jsxs)(D,{children:[(0,I.jsx)(T,{contact:e}),(0,I.jsx)(E,{onClick:function(){return n((0,b.vW)(e.id))},children:"Delete"})]},e.id)}))})})},B=v.ZP.input(p||(p=(0,j.Z)(["\n  padding: 8px;\n  margin: 8px 0;\n  width: 500px;\n  border: 1px solid rgb(219, 219, 219);\n  border-radius: 4px;\n  outline: none;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: rgb(231, 230, 230);\n  }\n"]))),J=t(4808),M=function(){var n=(0,F.v9)(f),e=(0,F.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)("label",{children:["Find contacts by name",(0,I.jsx)(B,{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",name:"filter",value:n,onChange:function(n){return e((0,J.nm)(n.target.value))}})]})})},W=t(7793),G=function(){var n=(0,F.I0)(),e=(0,F.v9)(h),t=(0,F.v9)(Z);return(0,m.useEffect)((function(){n((0,b.yF)())}),[n]),(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:"Phonebook"}),(0,I.jsx)(_,{}),(0,I.jsx)(w,{children:"Contacts"}),(0,I.jsx)(M,{}),e&&!t&&(0,I.jsx)(W.k,{}),(0,I.jsx)($,{})]})},H=function(){return(0,I.jsx)("div",{children:(0,I.jsx)(G,{})})}},5462:function(){}}]);
//# sourceMappingURL=414.d4d53efa.chunk.js.map