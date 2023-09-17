(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{55:function(t,e,n){},56:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(23),l=n.n(s),o=(n(55),n(30)),r=n(38),i=n(37),d=n(50),j=n(25),u=(n(56),n(57),n(21)),h=n(7),b=n(15),m=n(16),p=n(19),O=n(18),x=n(6),f=n(22),v=n(13),g=n.n(v),S=n(2),C=function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).onChangeStudentName=function(t){a.setState({name:t.target.value})},a.onChangeStudentEmail=function(t){a.setState({email:t.target.value})},a.onChangeStudentRollno=function(t){a.setState({rollno:t.target.value})},a.onSubmit=function(t){t.preventDefault();var e={name:a.state.name,email:a.state.email,rollno:a.state.rollno};g.a.post("http://localhost:4000/students/create-student",e).then((function(t){return console.log(t.data)})),a.setState({name:"",email:"",rollno:""})},a.state={name:"",email:"",rollno:""},a}return Object(m.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"form-wrapper mt-5",children:[Object(S.jsx)("h1",{children:"Create Student"}),Object(S.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(S.jsxs)(x.a.Group,{controlId:"Name",children:[Object(S.jsx)(x.a.Label,{children:"Name"}),Object(S.jsx)(x.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeStudentName})]}),Object(S.jsxs)(x.a.Group,{controlId:"Email",children:[Object(S.jsx)(x.a.Label,{children:"Email"}),Object(S.jsx)(x.a.Control,{type:"email",value:this.state.email,onChange:this.onChangeStudentEmail})]}),Object(S.jsxs)(x.a.Group,{controlId:"Roll",children:[Object(S.jsx)(x.a.Label,{children:"Roll No."}),Object(S.jsx)(x.a.Control,{type:"text",value:this.state.rollno,onChange:this.onChangeStudentRollno})]}),Object(S.jsx)(f.a,{variant:"success",size:"lg",block:"block",type:"submit",children:"Create Student"})]})]})}}]),n}(a.Component),y=function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).onChangeStudentName=function(t){a.setState({name:t.target.value})},a.onChangeStudentEmail=function(t){a.setState({email:t.target.value})},a.onChangeStudentRollno=function(t){a.setState({rollno:t.target.value})},a.onSubmit=function(t){t.preventDefault();var e={name:a.state.name,email:a.state.email,rollno:a.state.rollno};g.a.put("http://localhost:4000/students/update-student/"+a.props.match.params.id,e).then((function(t){console.log(t.data),console.log("Student Successfully Updated")})).catch((function(t){console.log(t)})),a.props.history.push("/student-list")},a.state={name:"",email:"",rollno:""},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.a.get("http://localhost:4000/students/edit-student/"+this.props.match.params.id).then((function(e){t.setState({name:e.data.name,email:e.data.email,rollno:e.data.rollno})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"form-wrapper mt-5",children:[Object(S.jsx)("h1",{children:"Update Student"}),Object(S.jsxs)(x.a,{onSubmit:this.onSubmit,children:[Object(S.jsxs)(x.a.Group,{controlId:"Name",children:[Object(S.jsx)(x.a.Label,{children:"Name"}),Object(S.jsx)(x.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeStudentName})]}),Object(S.jsxs)(x.a.Group,{controlId:"Email",children:[Object(S.jsx)(x.a.Label,{children:"Email"}),Object(S.jsx)(x.a.Control,{type:"email",value:this.state.email,onChange:this.onChangeStudentEmail})]}),Object(S.jsxs)(x.a.Group,{controlId:"Roll",children:[Object(S.jsx)(x.a.Label,{children:"Roll No."}),Object(S.jsx)(x.a.Control,{type:"text",value:this.state.rollno,onChange:this.onChangeStudentRollno})]}),Object(S.jsx)(f.a,{variant:"success",size:"lg",block:"block",type:"submit",children:"Update Student"})]})]})}}]),n}(a.Component),N=n(49),k=function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).deleteStudent=function(){g.a.delete("http://localhost:4000/students/delete-student/"+t.props.obj._id).then((function(t){console.log("Student successfully deleted!")})).catch((function(t){console.log(t)}))},t}return Object(m.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:this.props.obj.name}),Object(S.jsx)("td",{children:this.props.obj.email}),Object(S.jsx)("td",{children:this.props.obj.rollno}),Object(S.jsxs)("td",{children:[Object(S.jsx)(u.b,{className:"edit-link btn btn-primary",to:"/edit-student/"+this.props.obj._id,children:"Edit"}),Object(S.jsx)(f.a,{onClick:this.deleteStudent,variant:"danger",children:"Delete"})]})]})}}]),n}(a.Component),E=function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(t){var a;return Object(b.a)(this,n),(a=e.call(this,t)).DataTable=function(){return a.state.students.map((function(t,e){return Object(S.jsx)(k,{obj:t},e)}))},a.state={students:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.a.get("http://localhost:4000/students").then((function(e){t.setState({students:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"table-wrapper mt-5",children:[Object(S.jsx)("h1",{class:"mb-3",children:"Student List"}),Object(S.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Name"}),Object(S.jsx)("th",{children:"Email"}),Object(S.jsx)("th",{children:"Roll No"}),Object(S.jsx)("th",{children:"Action"})]})}),Object(S.jsx)("tbody",{children:this.DataTable()})]})]})}}]),n}(a.Component);var R=function(){return Object(S.jsx)(u.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(r.a,{bg:"dark",variant:"dark",children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(r.a.Brand,{children:Object(S.jsx)(u.b,{to:"/create-student",className:"nav-link",children:"React MERN Stack CRUD"})}),Object(S.jsxs)(o.a,{className:"justify-content-end",children:[Object(S.jsx)(o.a,{children:Object(S.jsx)(u.b,{to:"/create-student",class:"nav-link",children:"Create Student"})}),Object(S.jsx)(o.a,{children:Object(S.jsx)(u.b,{to:"/student-list",class:"nav-link",children:"Student List"})})]})]})}),Object(S.jsx)(i.a,{children:Object(S.jsx)(d.a,{children:Object(S.jsx)(j.a,{md:"12",children:Object(S.jsx)("div",{className:"wrapper",children:Object(S.jsxs)(h.c,{children:[Object(S.jsx)(h.a,{exact:!0,path:"/",component:C}),Object(S.jsx)(h.a,{path:"/create-student",component:C}),Object(S.jsx)(h.a,{path:"/edit-student/:id",component:y}),Object(S.jsx)(h.a,{path:"/student-list",component:E})]})})})})})]})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,l=e.getTTFB;n(t),a(t),c(t),s(t),l(t)}))};l.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(R,{})}),document.getElementById("root")),L()}},[[83,1,2]]]);
//# sourceMappingURL=main.dfa77b72.chunk.js.map