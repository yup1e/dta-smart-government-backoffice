(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c22586"],{"26ef":function(e,t,a){"use strict";a("af3d")},8149:function(e,t,a){},af3d:function(e,t,a){},edee:function(e,t,a){"use strict";a("8149")},f593:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app"},[a("TheSidebar"),a("CWrapper",[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{key:e.$route.path})],1)],1)],1)])],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[a("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[a("img",{attrs:{src:"/logo/dashboard/side.png",height:"48",alt:"satuID"}})]),a("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}})],1)},i=[],o=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Home",to:"/dashboard",icon:"cil-speedometer"},{_name:"CSidebarNavItem",name:"Permintaan KTP Baru",to:"/ktp-baru",icon:"cil-tag"},{_name:"CSidebarNavItem",name:"Migrasi KTP",icon:"cil-lightbulb"},{_name:"CSidebarNavItem",name:"Update Data KTP",icon:"cil-pencil"},{_name:"CSidebarNavItem",name:"Pelaporan KTP Hilang",icon:"cil-recycle"},{_name:"CSidebarNavItem",name:"Articles",icon:"cil-book"},{_name:"CSidebarNavDivider",_class:"m-3"},{_name:"CSidebarNavItem",name:"Settings",icon:"cil-settings"},{_name:"CSidebarNavItem",name:"Logout",to:"/Logout",icon:"cil-account-logout"}]}],c={name:"TheSidebar",nav:o,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},d=c,l=a("2877"),m=Object(l["a"])(d,s,i,!1,null,null,null),u=m.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[a("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[a("img",{attrs:{src:"/logo/dashboard/side.png",height:"48",alt:"satuID"}})]),a("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[a("CHeaderNavItem",{staticClass:"px-9"})],1),a("CHeaderNav",{staticClass:"mr-4"},[a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-search"}})],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-bell"}})],1)],1),a("TheHeaderDropdownAccnt")],1)],1)},v=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[a("CHeaderNavLink",[a("div",{staticClass:"row"},[a("div",[a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("span",{staticClass:"d-md-down-none"},[e._v(e._s(e.getUsername))])])],1)],1),a("div",[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}})])])])])]},proxy:!0}])},[a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Menu")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-user"}}),e._v(" Profile ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-settings"}}),e._v(" Settings ")],1),a("CDropdownItem",{on:{click:e.logout}},[a("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v(" Logout ")],1)],1)},p=[],b={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}},computed:{getUsername:function(){return this.$store.getters.getUsername}},methods:{logout:function(){this.$router.push("/logout")}}},g=b,f=(a("edee"),Object(l["a"])(g,h,p,!1,null,"18a34c18",null)),_=f.exports,w={name:"TheHeader",components:{TheHeaderDropdownAccnt:_}},I=w,H=Object(l["a"])(I,C,v,!1,null,null,null),N=H.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CFooter",{attrs:{fixed:!1}},[a("div",[a("a",{attrs:{href:"https://coreui.io",target:"_blank"}},[e._v("CoreUI")]),a("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" creativeLabs.")])]),a("div",{staticClass:"mfs-auto"},[a("span",{staticClass:"mr-1",attrs:{target:"_blank"}},[e._v("Powered by")]),a("a",{attrs:{href:"https://coreui.io/vue"}},[e._v("CoreUI for Vue")])])])},k=[],T={name:"TheFooter"},x=T,D=Object(l["a"])(x,S,k,!1,null,null,null),$=D.exports,L={name:"TheContainer",components:{TheSidebar:u,TheHeader:N,TheFooter:$}},P=L,j=(a("26ef"),Object(l["a"])(P,n,r,!1,null,"610ecb10",null));t["default"]=j.exports}}]);
//# sourceMappingURL=chunk-76c22586.0fd7377e.js.map