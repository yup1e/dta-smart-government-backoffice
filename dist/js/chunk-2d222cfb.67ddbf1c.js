(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222cfb"],{cfce:function(a,s,t){"use strict";t.r(s);var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"c-app flex-row align-items-center bg-image shadow-2-strong",attrs:{id:"intro"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row align-items-center"},[a._m(0),a._m(1),t("div",{staticClass:"col-md-3"},[t("div",{staticClass:"card-group"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body"},[t("form",{attrs:{action:""},on:{keyup:function(s){return!s.type.indexOf("key")&&a._k(s.keyCode,"enter",13,s.key,"Enter")?null:a.login(s)}}},[a._m(2),a._m(3),t("div",{staticClass:"form-group",attrs:{role:"group"}},[t("label",{},[a._v(" Username ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{"form-control":!0,"is-invalid":a.errors.has("email")},attrs:{invalid:!0,type:"email",name:"email",placeholder:"Masukkan Username Anda",required:"",autofocus:""},domProps:{value:a.email},on:{input:function(s){s.target.composing||(a.email=s.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help invalid-feedback"},[a._v(a._s(a.errors.first("email")))])]),t("div",{staticClass:"form-group",attrs:{role:"group"}},[t("label",{attrs:{for:"uid-l9criebbqi"}},[a._v(" Password ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"form-control":!0,"is-invalid":a.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"Masukkan Password Anda",required:""},domProps:{value:a.password},on:{input:function(s){s.target.composing||(a.password=s.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("password"),expression:"errors.has('password')"}],staticClass:"help invalid-feedback"},[a._v(a._s(a.errors.first("password")))])]),a._m(4),a._m(5),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("button",{staticClass:"btn btn-primary btn-lg btn-block px-4",attrs:{type:"button"},on:{click:a.login}},[a._v("Masuk")])])])])])])])])])])])},r=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"col-md-3 text-right"},[t("img",{attrs:{src:"/logo/dashboard/dash.png",height:"100",alt:"logo"}}),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"col-md-5"},[t("div",{staticClass:"row text-white"},[t("h1",[a._v("DASHBOARD")])]),t("div",{staticClass:"row text-white"},[t("h4",[a._v("Cepat, Mudah, & Transparant")])]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"row text-white"},[a._v(" powered by ")]),t("div",{staticClass:"row"},[t("br")]),t("div",{staticClass:"row align-self-end"},[t("div",{staticClass:"col-sm-"},[t("img",{attrs:{src:"/img/logo.png",height:"60",alt:"logo"}})]),t("div",{staticClass:"col-sm-7"},[t("h5",{staticClass:"text-white"},[a._v("Kementerian Dalam Negeri ")]),t("h6",{staticClass:"text-warning"},[a._v("Republik Indonesia")])])])])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"text-center"},[t("h3",[a._v("Selamat Datang!")]),t("p",{staticClass:"text-muted"},[a._v("Silahkan login untuk dapat mengakses"),t("br"),a._v(" Dashboard E-KTP ONLINE")])])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"row"},[t("br")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"col text-right text-warning"},[t("a",{staticClass:"px-0",attrs:{color:"link"}},[a._v("Forgot password?")])])])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"row"},[t("br"),t("br")])}],i={name:"Login",components:{},data:function(){return{email:"",password:""}},methods:{login:function(){var a=this,s=this;s.$validator.validateAll().then((function(t){t?(s.isSubmit=!0,console.log(s.email),console.log(s.password),"admin@satuid.id"==s.email&&"Admin@5atuID"==s.password?(localStorage.setItem("email",s.email),localStorage.setItem("username","Admin"),a.$router.push("/dashboard")):(alert("Email dan Password Anda Salah!"),s.isSubmit=!1)):(alert("Silahkan Masukkan Email dan Password Anda!"),s.isSubmit=!1)}))}}},l=i,o=t("2877"),n=Object(o["a"])(l,e,r,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d222cfb.67ddbf1c.js.map