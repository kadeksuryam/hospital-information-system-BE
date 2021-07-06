(this["webpackJsonphospital-information-system"]=this["webpackJsonphospital-information-system"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(28),s=a.n(r),c=(a(71),a(8)),o=a(11),i=a(10),l=a(9),j=a.n(l),d=a(16),p=a(29),u=a(7),b=a(14),O=a.n(b),m=a(112),x=a(106),h=a(107),g=a(114),f=a(1),v=function(e){var t=e.toggleError,a=e.handleToggleError,n=e.errorMsg;return Object(f.jsxs)(g.a,{show:t,style:{margin:"0 auto"},onClose:a,delay:4e3,autohide:!0,children:[Object(f.jsx)(g.a.Header,{children:Object(f.jsx)("strong",{className:"mr-auto",style:{color:"red"},children:"Error"})}),Object(f.jsx)(g.a.Body,{children:n})]})},y={email:{regex:new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),errMsg:"Please provide a valid email."},password:{regex:new RegExp(/^[A-Za-z0-9]{6,}$/),errMsg:"Password should contains at least six characters and contains only letters or numerals."}},I=a(19),k=(a(94),function(e){var t=e.email,a=e.password,n={};return t&&""!==t?y.email.regex.test(t)||(n.email=y.email.errMsg):n.email="Please provide an email.",a&&""!==a?y.password.regex.test(a)||(n.password=y.password.errMsg):n.password="Please provide a password.",n}),w=function(e){var t=e.setIsLoggedIn,a=Object(n.useState)(""),r=Object(c.a)(a,2),s=r[0],l=r[1],b=Object(n.useState)(!1),g=Object(c.a)(b,2),y=g[0],w=g[1],C=Object(n.useState)(!1),L=Object(c.a)(C,2),N=L[0],S=L[1],A=Object(n.useState)({}),F=Object(c.a)(A,2),E=F[0],D=F[1],T=Object(n.useState)({}),P=Object(c.a)(T,2),z=P[0],B=P[1],_=Object(n.useState)(!1),G=Object(c.a)(_,2),V=G[0],W=G[1],J=(Object(i.g)(),function(e,t){D(Object(u.a)(Object(u.a)({},E),{},Object(p.a)({},e,t))),z[e]&&B(Object(u.a)(Object(u.a)({},z),{},Object(p.a)({},e,null)))});Object(n.useEffect)((function(){if(V){var e=k(E);Object.keys(e).length>0&&B(e)}}),[E]);var M=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(setTimeout((function(){}),3e3),!V){e.next=15;break}return"/api/login",e.prev=3,e.next=6,O.a.post("/api/login",{email:E.email,password:E.password});case 6:t=e.sent,localStorage.setItem("JWT_token",t.data.token),localStorage.setItem("authUserID",t.data.authUserID),localStorage.setItem("userType",t.data.userType),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),e.t0.response?l(e.t0.response.data.error):l(e.t0.message);case 15:Object(I.isLogin)()&&W(!1),S(!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N&&function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:Object(I.isLogin)()&&t(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[N]),Object(n.useEffect)((function(){w(""!==s)}),[s]);return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"login-banner",children:[Object(f.jsx)("div",{className:"login-banner-title",children:"Log In"}),Object(f.jsx)("div",{className:"login-banner-content",children:"Before proceeding, please enter your email and password"})]}),Object(f.jsx)("div",{className:"login-form-container",children:Object(f.jsxs)(m.a,{noValidate:!0,className:"login-form",children:[Object(f.jsx)(v,{toggleError:y,handleToggleError:function(){l("")},errorMsg:s}),Object(f.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(m.a.Label,{children:"Email"}),Object(f.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",isInvalid:!!z.email,isValid:!z.email&&V,onChange:function(e){return J("email",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.email}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(f.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(f.jsx)(m.a.Label,{children:"Password"}),Object(f.jsx)(m.a.Control,{type:"password",placeholder:"Password",isInvalid:!!z.password,isValid:!z.password&&V,onChange:function(e){return J("password",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.password}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(f.jsxs)(x.a,{variant:"outline-primary",disabled:N,onClick:N?null:function(e){e.preventDefault();var t=k(E);V||W(!0),Object.keys(t).length>0?B(t):S(!0)},type:"submit",children:[N?Object(f.jsx)(h.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(f.jsx)(f.Fragment,{}),N?"Submitting...":"Sign In"]}),Object(f.jsx)(m.a.Text,{as:o.b,to:"/signup",children:"Not have an account yet? Sign Up"})]})})]})},C=function(e){var t=e.setIsLoggedIn,a=Object(i.g)();return Object(n.useEffect)((function(){localStorage.clear(),a.push("/login"),t(!1)}),[]),Object(f.jsx)(f.Fragment,{})},L=a(66),N=(a(99),function(e){var t=e.firstName,a=e.age,n=e.email,r=e.password,s={};return t&&""!==t||(s.firstName="First name can't be empty."),a&&""!==a?a<=0&&(s.age="Please provide valid age"):s.age="Age can't be empty",n&&""!==n?y.email.regex.test(n)||(s.email=y.email.errMsg):s.email="Please provide an email.",r&&""!==r?y.password.regex.test(r)||(s.password=y.password.errMsg):s.password="Please provide a password.",s}),S=function(e){var t=e.setIsLoggedIn,a=Object(n.useState)(""),r=Object(c.a)(a,2),s=r[0],o=r[1],l=Object(n.useState)(!1),b=Object(c.a)(l,2),g=b[0],y=b[1],k=Object(n.useState)(!1),w=Object(c.a)(k,2),C=w[0],S=w[1],A=Object(n.useState)({}),F=Object(c.a)(A,2),E=F[0],D=F[1],T=Object(n.useState)({}),P=Object(c.a)(T,2),z=P[0],B=P[1],_=Object(n.useState)(!1),G=Object(c.a)(_,2),V=G[0],W=G[1],J=(Object(i.g)(),function(e,t){D(Object(u.a)(Object(u.a)({},E),{},Object(p.a)({},e,t))),z[e]&&B(Object(u.a)(Object(u.a)({},z),{},Object(p.a)({},e,null)))});Object(n.useEffect)((function(){if(V){var e=N(E);Object.keys(e).length>0&&B(e)}}),[E]);var M=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,n,r,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V){e.next=15;break}return t=E.firstName,a=E.lastName,n=E.age,r=E.email,s=E.password,e.prev=2,"/api/patients",e.next=6,O.a.post("/api/patients",{firstName:t,lastName:a,age:n,email:r,password:s});case 6:c=e.sent,localStorage.setItem("JWT_token",c.data.token),localStorage.setItem("authUserID",c.data.authUserID),localStorage.setItem("userType",c.data.userType),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),e.t0.response?o(e.t0.response.data.error):o(e.t0.message);case 15:Object(I.isLogin)()&&W(!1),S(!1);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C&&function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:Object(I.isLogin)()&&t(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[C]),Object(n.useEffect)((function(){y(""!==s)}),[s]);return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"signup-banner",children:[Object(f.jsx)("div",{className:"signup-banner-title",children:"Sign Up"}),Object(f.jsx)("div",{className:"signup-banner-content",children:"Please fill your personal information to create an account."})]}),Object(f.jsx)("div",{className:"signup-container",children:Object(f.jsxs)(m.a,{noValidate:!0,className:"signup-form",children:[Object(f.jsx)(v,{toggleError:g,handleToggleError:function(){o("")},errorMsg:s}),Object(f.jsxs)(m.a.Row,{children:[Object(f.jsxs)(m.a.Group,{as:L.a,controlId:"formGridFirstName",children:[Object(f.jsx)(m.a.Label,{children:"First Name"}),Object(f.jsx)(m.a.Control,{type:"text",placeholder:"First name",isInvalid:!!z.firstName,isValid:!z.firstName&&V,onChange:function(e){return J("firstName",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.firstName}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(f.jsxs)(m.a.Group,{as:L.a,controlId:"formGridLastName",children:[Object(f.jsx)(m.a.Label,{children:"Last Name"}),Object(f.jsx)(m.a.Control,{type:"text",placeholder:"Last name",isInvalid:!!z.lastName,isValid:!z.lastName&&V,onChange:function(e){return J("lastName",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.lastName}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]})]}),Object(f.jsxs)(m.a.Group,{children:[Object(f.jsx)(m.a.Label,{children:"Age"}),Object(f.jsx)(m.a.Control,{type:"number",placeholder:"Age",isInvalid:!!z.age,isValid:!z.age&&V,onChange:function(e){return J("age",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.age}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(f.jsxs)(m.a.Group,{children:[Object(f.jsx)(m.a.Label,{children:"Email"}),Object(f.jsx)(m.a.Control,{type:"email",placeholder:"Email",isInvalid:!!z.email,isValid:!z.email&&V,onChange:function(e){return J("email",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.email}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(f.jsxs)(m.a.Group,{children:[Object(f.jsx)(m.a.Label,{children:"Password"}),Object(f.jsx)(m.a.Control,{type:"password",placeholder:"Password",isInvalid:!!z.password,isValid:!z.password&&V,onChange:function(e){return J("password",e.target.value)}}),Object(f.jsx)(m.a.Control.Feedback,{type:"invalid",children:z.password}),Object(f.jsx)(m.a.Control.Feedback,{type:"valid",children:"Looks good!"})]}),Object(f.jsxs)(x.a,{variant:"outline-primary",disabled:C,onClick:C?null:function(e){e.preventDefault();var t=N(E);W(!0),Object.keys(t).length>0?B(t):S(!0)},type:"submit",children:[C?Object(f.jsx)(h.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):Object(f.jsx)(f.Fragment,{}),C?"Submitting...":"Sign Up"]})]})})]})},A=a(115),F=a(108),E=a(113),D=(a(100),function(e){var t=e.isLoggedIn;return Object(f.jsx)(A.a,{sticky:"top",collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",children:Object(f.jsxs)(F.a,{fluid:!0,children:[Object(f.jsx)(A.a.Brand,{as:o.b,to:"/",children:"HIS"}),Object(f.jsx)(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(A.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsxs)(E.a,{className:"mr-auto",children:[Object(f.jsx)(E.a.Link,{as:o.b,to:"/",children:"Home"}),Object(f.jsx)(E.a.Link,{as:o.b,to:"/doctors",children:"Doctors"})]}),Object(f.jsx)(E.a,{children:t?Object(f.jsx)(x.a,{variant:"outline-danger",as:o.b,to:"/logout",children:"Log Out"}):Object(f.jsx)(x.a,{variant:"outline-primary",as:o.b,to:"/login",children:"Log In"})})]})]})})}),T=a(37),P=a(116),z=a(111),B=(a(101),function(){var e=Object(i.g)(),t=Object(i.h)().doctorID,a=Object(n.useState)(!1),r=Object(c.a)(a,2),s=r[0],o=r[1],l=Object(n.useState)(!1),p=Object(c.a)(l,2),b=p[0],h=p[1],g=Object(n.useState)([]),v=Object(c.a)(g,2),y=v[0],I=v[1],k=Object(n.useState)({}),w=Object(c.a)(k,2),C=w[0],L=w[1],N=Object(n.useState)({}),S=Object(c.a)(N,2),A=S[0],F=S[1],E=function(){var a=Object(d.a)(j.a.mark((function a(n,r){var s,c,o,i,l,d,p,u,b,m,x,h;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=localStorage.getItem("JWT_token"),c={Authorization:"Bearer "+s},a.prev=2,y[r].isApplied){a.next=10;break}return"/api/patient-appointments",o={patientID:localStorage.getItem("authUserID"),appointmentID:n},a.next=8,O.a.post("/api/patient-appointments",o,{headers:c});case 8:a.next=13;break;case 10:return i="/api/patient-appointments?appointmentID=".concat(n),a.next=13,O.a.delete(i,{headers:c});case 13:return l="/api/appointments?doctorID=".concat(t),a.next=16,O.a.get(l,{headers:c});case 16:d=a.sent.data,p=Object(T.a)(d);try{for(p.s();!(u=p.n()).done;){b=u.value,m=Object(T.a)(y);try{for(m.s();!(x=m.n()).done;)h=x.value,b._id===h._id&&(b.isApplied=h.isApplied)}catch(j){m.e(j)}finally{m.f()}}}catch(j){p.e(j)}finally{p.f()}d[r].isApplied=!d[r].isApplied,I(d),a.next=26;break;case 23:a.prev=23,a.t0=a.catch(2),a.t0.response?401===a.t0.response.status?(alert("Your session has expired. Please relogin!"),e.push("/logout")):alert(a.t0.response.data.error):alert(a.t0.message);case 26:case"end":return a.stop()}}),a,null,[[2,23]])})));return function(e,t){return a.apply(this,arguments)}}();Object(n.useEffect)((function(){Object.keys(C).length>0?o(!0):o(!1)}),[C]);var D=function(){var a=Object(d.a)(j.a.mark((function a(){var n,r,s,c,o,i,l,d,p,u,b,m,x;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n="/api/appointments?doctorID=".concat(t),r=localStorage.getItem("authUserID"),s="/api/patient-appointments?patientID=".concat(r),c=localStorage.getItem("JWT_token"),o={Authorization:"Bearer "+c},a.next=8,O.a.get(n,{headers:o});case 8:return i=a.sent.data,a.next=11,O.a.get(s,{headers:o});case 11:l=a.sent.data,d=Object(T.a)(i);try{for(d.s();!(p=d.n()).done;){(u=p.value).isApplied=!1,b=Object(T.a)(l);try{for(b.s();!(m=b.n()).done;)x=m.value,u._id===x.appointmentID&&(u.isApplied=!0)}catch(j){b.e(j)}finally{b.f()}}}catch(j){d.e(j)}finally{d.f()}I(i),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(0),a.t0.response?401===a.t0.response.status?(alert("Your session has expired. Please relogin!"),e.push("/logout")):alert(a.t0.response.data.error):alert(a.t0.message);case 20:case"end":return a.stop()}}),a,null,[[0,17]])})));return function(){return a.apply(this,arguments)}}();Object(n.useEffect)((function(){s||D()}),[s,b]);var B=function(){return"admin"===localStorage.getItem("userType")},_=function(){var t=Object(d.a)(j.a.mark((function t(a){var n,r,s,c,o,i,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="/api/appointments/".concat(a),r=C.name,s=C.desc,c=C.mxPatients,o={appointmentName:r,desc:s,maxAppointment:c},i=localStorage.getItem("JWT_token"),l={Authorization:"Bearer "+i},t.next=8,O.a.put(n,o,{headers:l});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),t.t0.response?401===t.t0.response.status?(alert("Your session has expired. Please relogin!"),e.push("/logout")):alert(t.t0.response.data.error):alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var a=Object(d.a)(j.a.mark((function a(){var n,r,s,c,o,i;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,"/api/appointments/",n=A.name,r=A.desc,s=A.mxPatients,c={appointmentName:n,desc:r,doctorID:t,maxAppointment:s},o=localStorage.getItem("JWT_token"),i={Authorization:"Bearer "+o},a.next=8,O.a.post("/api/appointments/",c,{headers:i});case 8:h(!1),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),a.t0.response?401===a.t0.response.status?(alert("Your session has expired. Please relogin!"),e.push("/logout")):alert(a.t0.response.data.error):alert(a.t0.message);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(){return a.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/appointments/".concat(t),n=localStorage.getItem("JWT_token"),r={Authorization:"Bearer "+n},e.next=5,O.a.delete(a,{headers:r});case 5:D();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(P.a,{style:{margin:"1rem"},children:[B()?Object(f.jsx)(x.a,{variant:"primary",style:{margin:"0.5rem auto"},onClick:function(){return h(!0)},children:"Add an Appointment"}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)(P.a.Header,{children:"Available Appointments"}),Object(f.jsx)(P.a.Body,{className:"appointment-list-container",children:y.map((function(t,a){return Object(f.jsxs)(P.a,{style:{width:"auto",maxWidth:"15rem"},className:"appointment-list",children:[Object(f.jsxs)(P.a.Body,{children:[Object(f.jsx)(P.a.Title,{children:t.appointmentName}),Object(f.jsxs)(P.a.Text,{children:["About : ",t.desc]}),Object(f.jsxs)(P.a.Text,{children:["Quota: ",t.cntAppointment," / ",t.maxAppointment]}),B()?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x.a,{variant:"primary",onClick:function(){var e;L({name:y[e=a].appointmentName,desc:y[e].desc,mxPatients:y[e].maxAppointment})},children:"Edit"}),Object(f.jsx)(x.a,{variant:"primary",onClick:function(){return V(t._id)},children:"Delete"}),Object(f.jsx)(x.a,{variant:"primary",onClick:function(){return a=t._id,void e.push("/appointments/".concat(a,"/patients"));var a},children:"List of Patients"})]}):t.isApplied?Object(f.jsx)(x.a,{variant:"primary",onClick:function(){return E(t._id,a)},children:"Cancel"}):Object(f.jsx)(x.a,{variant:"primary",onClick:function(){return E(t._id,a)},disabled:t.cntAppointment===t.maxAppointment,children:"Apply"})]}),B()?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(z.a,{show:b,onHide:function(){return h(!1)},backdrop:"static",keyboard:!1,children:[Object(f.jsx)(z.a.Header,{closeButton:!0,children:Object(f.jsx)(z.a.Title,{children:"Add an Appointment"})}),Object(f.jsxs)(z.a.Body,{children:[Object(f.jsxs)(m.a.Group,{controlId:"appointmentNameField",children:[Object(f.jsx)(m.a.Label,{children:"Appointment's Name"}),Object(f.jsx)(m.a.Control,{type:"text",onChange:function(e){return F(Object(u.a)(Object(u.a)({},A),{},{name:e.target.value}))}})]}),Object(f.jsxs)(m.a.Group,{controlId:"appointmentDescField",children:[Object(f.jsx)(m.a.Label,{children:"Descriptions"}),Object(f.jsx)(m.a.Control,{as:"textarea",onChange:function(e){return F(Object(u.a)(Object(u.a)({},A),{},{desc:e.target.value}))}})]}),Object(f.jsxs)(m.a.Group,{controlId:"appointmentDescField",children:[Object(f.jsx)(m.a.Label,{children:"Max Patients"}),Object(f.jsx)(m.a.Control,{type:"number",onChange:function(e){return F(Object(u.a)(Object(u.a)({},A),{},{mxPatients:parseInt(e.target.value)}))}})]})]}),Object(f.jsx)(z.a.Footer,{children:Object(f.jsx)(x.a,{variant:"primary",onClick:function(){return G()},children:"Add Appointment"})})]}),Object(f.jsxs)(z.a,{show:s,onHide:function(){return L({})},backdrop:"static",keyboard:!1,children:[Object(f.jsx)(z.a.Header,{closeButton:!0,children:Object(f.jsx)(z.a.Title,{children:"Edit Appointments"})}),Object(f.jsxs)(z.a.Body,{children:[Object(f.jsxs)(m.a.Group,{controlId:"appointmentNameField",children:[Object(f.jsx)(m.a.Label,{children:"Appointment's Name"}),Object(f.jsx)(m.a.Control,{type:"text",defaultValue:C.name,onChange:function(e){return L(Object(u.a)(Object(u.a)({},C),{},{name:e.target.value}))}})]}),Object(f.jsxs)(m.a.Group,{controlId:"appointmentDescField",children:[Object(f.jsx)(m.a.Label,{children:"Descriptions"}),Object(f.jsx)(m.a.Control,{as:"textarea",defaultValue:C.desc,onChange:function(e){return L(Object(u.a)(Object(u.a)({},C),{},{desc:e.target.value}))}})]}),Object(f.jsxs)(m.a.Group,{controlId:"appointmentDescField",children:[Object(f.jsx)(m.a.Label,{children:"Max Patients"}),Object(f.jsx)(m.a.Control,{type:"number",defaultValue:C.mxPatients,onChange:function(e){return L(Object(u.a)(Object(u.a)({},C),{},{mxPatients:parseInt(e.target.value)}))}})]})]}),Object(f.jsx)(z.a.Footer,{children:Object(f.jsx)(x.a,{variant:"primary",onClick:function(){return _(t._id)},children:"Save Changes"})})]})]}):Object(f.jsx)(f.Fragment,{})]},a)}))})]})}),_=a(109),G=(a(102),function(){return Object(f.jsxs)(_.a,{className:"home-container",children:[Object(f.jsx)("div",{className:"home-banner-title",children:"Welcome to Our Hospital Information System"}),Object(f.jsxs)("div",{className:"home-banner-content",children:["We provide a service that is you can apply an appointment with our doctors. You need an account to apply an appointment, if you dont have yet, you can create ",Object(f.jsx)(o.b,{to:"/signup",children:"here"})]}),Object(f.jsx)("div",{className:"home-banner-appointment",children:Object(f.jsx)(x.a,{as:o.b,to:"/doctors",variant:"primary",children:"List of Doctors"})})]})}),V=(a(103),function(e){e.checkIsLoggedIn;var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)([]),l=Object(c.a)(i,2),p=l[0],u=l[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/doctors");case 3:t=e.sent,u(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?console.log(e.t0.response.data.error):console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=Object(n.useState)({}),m=Object(c.a)(b,2),h=m[0];m[1];return Object(n.useEffect)((function(){Object.keys(h).length>0?s(!0):s(!1)}),[h]),Object(n.useEffect)((function(){}),[]),Object(n.useEffect)((function(){}),[r]),Object(f.jsxs)(P.a,{style:{margin:"1rem"},children:[Object(f.jsx)(P.a.Header,{children:"Available Doctors"}),Object(f.jsx)(P.a.Body,{className:"appointment-list-container",children:p.map((function(e,t){return Object(f.jsxs)(P.a,{style:{width:"auto"},className:"appointment-list",children:[Object(f.jsx)(P.a.Img,{variant:"top",src:"holder.js/100px180"}),Object(f.jsxs)(P.a.Body,{children:[Object(f.jsx)(P.a.Title,{children:e.name}),Object(f.jsx)(P.a.Text,{children:e.desc}),Object(f.jsxs)(x.a,{variant:"primary",as:o.b,to:"/doctors/".concat(e._id,"/appointments"),children:[">",">"," Available Appointment"]})]})]},t)}))})]})}),W=a(49),J=function(e){var t=e.component,a=e.setIsLoggedIn,n=Object(W.a)(e,["component","setIsLoggedIn"]);return Object(f.jsx)(i.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return Object(I.isLogin)()?Object(f.jsx)(t,Object(u.a)({},e)):Object(f.jsx)(i.a,{to:"/login",setIsLoggedIn:a})}}))},M=function(e){var t=e.component,a=e.restricted,n=e.setIsLoggedIn,r=Object(W.a)(e,["component","restricted","setIsLoggedIn"]);return Object(f.jsx)(i.b,Object(u.a)(Object(u.a)({},r),{},{render:function(e){return Object(I.isLogin)()&&a?Object(f.jsx)(i.a,{to:"/doctors"}):Object(f.jsx)(t,{setIsLoggedIn:n,props:e})}}))},U=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"404 NOT FOUND"})})},H=a(110),Y=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(i.h)().appointmentID,o=Object(i.g)();return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/api/appointments/".concat(s,"/patients"),a=localStorage.getItem("JWT_token"),n={Authorization:"Bearer "+a},e.next=6,O.a.get(t,{headers:n});case 6:c=e.sent.data,r(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response?401===e.t0.response.status?(alert("Your session has expired. Please relogin!"),o.push("/logout")):alert(e.t0.response.data.error):alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsx)("div",{style:{margin:"1rem"},children:Object(f.jsxs)(H.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"First Name"}),Object(f.jsx)("th",{children:"Last Name"}),Object(f.jsx)("th",{children:"Age"}),Object(f.jsx)("th",{children:"Email"})]})}),Object(f.jsx)("tbody",{children:a.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t+1}),Object(f.jsx)("td",{children:e.firstName}),Object(f.jsx)("td",{children:e.lastName}),Object(f.jsx)("td",{children:e.age}),Object(f.jsx)("td",{children:e.email})]},t)}))})]})})},R=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){Object(I.isLogin)()&&r(!0)}),[]),Object(f.jsxs)(o.a,{children:[Object(f.jsx)(D,{isLoggedIn:a}),Object(f.jsxs)(i.d,{children:[Object(f.jsx)(M,{restricted:!1,component:G,exact:!0,path:"/"}),Object(f.jsx)(J,{component:B,path:"/doctors/:doctorID/appointments"}),Object(f.jsx)(M,{restricted:!1,component:V,path:"/doctors"}),Object(f.jsx)(J,{component:Y,path:"/appointments/:appointmentID/patients"}),Object(f.jsx)(M,{restricted:!0,component:w,setIsLoggedIn:r,path:"/login"}),Object(f.jsx)(M,{restricted:!1,component:C,setIsLoggedIn:r,path:"/logout"}),Object(f.jsx)(M,{restricted:!0,component:S,path:"/signup",setIsLoggedIn:r}),Object(f.jsx)(M,{restricted:!1,component:U,path:"*"})]})]})};s.a.render(Object(f.jsx)(R,{}),document.getElementById("root"))},19:function(e,t){e.exports={isLogin:function(){var e=localStorage.getItem("JWT_token"),t=localStorage.getItem("authUserID"),a=localStorage.getItem("userType");return!!(e&&t&&a)}}},71:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[104,1,2]]]);