(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{204:function(t,o,r){var content=r(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("60fecf52",content,!0,{sourceMap:!1})},209:function(t,o,r){"use strict";var e=r(204);r.n(e).a},210:function(t,o,r){(t.exports=r(52)(!1)).push([t.i,"body{background-color:#ecf1f5}.autorisation{position:fixed;max-width:330px;left:0;right:0;margin:auto;top:50%;transform:translateY(-50%);border:1px solid #e1f1f1;border-radius:3px;background-color:#fff;padding:28px}.btn-autorisation{background:#ff4874;color:#fff}.btn-autorisation:hover{background:#e33e66;color:#fff}",""])},214:function(t,o,r){"use strict";r.r(o);r(27),r(28),r(1),r(14);var e={data:function(){return{account:{email:"",password:""}}},middleware:"guest",layout:"main-page",methods:{onSubmit:function(){var t=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5);localStorage.setItem("authToken",t),this.$store.commit("SET_USER",-1),this.$router.push("/dashboard")}}},n=(r(209),r(26)),component=Object(n.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-container",[r("div",{staticClass:"autorisation"},[r("b-form",{on:{submit:function(o){return o.preventDefault(),t.onSubmit(o)}}},[r("b-form-group",[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"Почта"},model:{value:t.account.email,callback:function(o){t.$set(t.account,"email",o)},expression:"account.email"}})],1),t._v(" "),r("b-form-group",[r("b-form-input",{attrs:{type:"password",required:"",placeholder:"Пароль"},model:{value:t.account.password,callback:function(o){t.$set(t.account,"password",o)},expression:"account.password"}})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"autorisation"}},[t._v("Вход")])],1)],1)])}),[],!1,null,null,null);o.default=component.exports}}]);