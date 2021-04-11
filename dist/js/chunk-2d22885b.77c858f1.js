(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22885b"],{da19:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("CRow",[o("CCol",{attrs:{sm:"6"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Credit Card ")]),t._v(" "),o("small",[t._v("Form")]),o("div",{staticClass:"card-header-actions"},[o("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/form-components",rel:"noreferrer noopener",target:"_blank"}},[o("small",{staticClass:"text-muted"},[t._v("docs")])])])]),o("CCardBody",[o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CInput",{attrs:{label:"Name",placeholder:"Enter your name"}})],1)],1),o("CRow",[o("CCol",{attrs:{sm:"12"}},[o("CInput",{attrs:{label:"Credit Card Number",placeholder:"0000 0000 0000 0000"}})],1)],1),o("CRow",[o("CCol",{attrs:{sm:"4"}},[o("CSelect",{attrs:{label:"Month",options:[1,2,3,4,5,6,7,8,9,10,11,12]}})],1),o("CCol",{attrs:{sm:"4"}},[o("CSelect",{attrs:{label:"Year",options:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]}})],1),o("CCol",{attrs:{sm:"4"}},[o("CInput",{attrs:{label:"CVV/CVC",placeholder:"123"}})],1)],1)],1)],1)],1),o("CCol",{attrs:{sm:"6"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Company ")]),o("small",[t._v("Form")])]),o("CCardBody",[o("CInput",{attrs:{label:"Company",placeholder:"Enter your company name"}}),o("CInput",{attrs:{label:"VAT",placeholder:"PL1234567890"}}),o("CInput",{attrs:{label:"Street",placeholder:"Enter street name"}}),o("CRow",[o("CCol",{attrs:{sm:"8"}},[o("CInput",{attrs:{label:"City",placeholder:"Enter your city"}})],1),o("CCol",{attrs:{sm:"4"}},[o("CInput",{attrs:{label:"Postal code",placeholder:"Postal code"}})],1)],1),o("CInput",{attrs:{label:"Country",placeholder:"Country name"}})],1)],1)],1)],1),o("CRow",[o("CCol",{attrs:{md:"6"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Basic Form")]),t._v(" Elements ")]),o("CCardBody",[o("CForm",[o("CInput",{attrs:{description:"Let us know your full name.",label:"Enter your name",horizontal:"",autocomplete:"name"}}),o("CInput",{attrs:{label:"Static",value:"Username",horizontal:"",plaintext:""}}),o("CInput",{attrs:{label:"Text input",description:"This is a help text",placeholder:"Text",horizontal:""}}),o("CInput",{attrs:{label:"Date",type:"date",horizontal:""}}),o("CInput",{attrs:{label:"Email input",description:"Please enter your email",placeholder:"Enter your email",type:"email",horizontal:"",autocomplete:"email"}}),o("CInput",{attrs:{label:"Password Input",description:"Please enter a complex password",placeholder:"Enter your password",type:"password",horizontal:"",autocomplete:"current-password"}}),o("CInput",{attrs:{label:"Disabled Input",placeholder:"Disabled",horizontal:"",disabled:""}}),o("CTextarea",{attrs:{label:"Textarea",placeholder:"Content...",horizontal:"",rows:"9"}}),o("CSelect",{attrs:{label:"Select",horizontal:"",options:t.options,placeholder:"Please select"}}),o("CSelect",{attrs:{label:"Large select",size:"lg",horizontal:"",value:t.selectedOption,options:t.selectOptions,placeholder:"Please select"},on:{"update:value":function(e){t.selectedOption=e}}}),o("CSelect",{attrs:{label:"Small select",size:"sm",horizontal:"",options:t.options,placeholder:"Please select",custom:""}}),o("CSelect",{attrs:{label:"Select",horizontal:"",options:t.options,placeholder:"Please select",disabled:""}}),t._l(t.checkboxNames,(function(e,a){return[o("CRow",{key:e,staticClass:"form-group",attrs:{form:""}},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"3"}},[t._v(" "+t._s(e)+" ")]),o("CCol",{class:a%2===1?"form-inline":"",attrs:{sm:"9"}},t._l(t.options,(function(t,e){return o("CInputCheckbox",{key:a+t,attrs:{label:t,value:t,custom:a>1,name:"Option 1"+a,checked:e===a,inline:a%2===1}})})),1)],1)]})),o("CRow",{staticClass:"form-group",attrs:{form:""}},[o("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"3"}},[t._v(" Switch checkboxes ")]),o("CCol",{attrs:{sm:"9"}},[o("CSwitch",{staticClass:"mr-1",attrs:{color:"primary",checked:!0}}),o("CSwitch",{staticClass:"mr-1",attrs:{color:"success",checked:!0,variant:"outline"}}),o("CSwitch",{staticClass:"mr-1",attrs:{color:"warning",checked:!0,variant:"opposite"}}),o("CSwitch",{staticClass:"mr-1",attrs:{color:"danger",checked:!0,shape:"pill"}}),o("CSwitch",{staticClass:"mr-1",attrs:{color:"info",checked:!0,shape:"pill",variant:"outline"}}),o("CSwitch",{staticClass:"mr-1",attrs:{color:"dark",checked:!0,shape:"pill",variant:"opposite"}})],1)],1),t._l(t.radioNames,(function(e,a){return[o("CRow",{key:e,staticClass:"form-group",attrs:{form:""}},[o("CCol",{attrs:{sm:"3"}},[t._v(" "+t._s(e)+" ")]),o("CInputRadioGroup",{staticClass:"col-sm-9",attrs:{options:t.options,custom:a>1,checked:"Option "+a,inline:a%2===1}})],1)]})),o("CInputFile",{attrs:{label:"File input",horizontal:""}}),o("CInputFile",{attrs:{label:"Multiple file input",horizontal:"",multiple:""}}),o("CInputFile",{attrs:{label:"File custom input",horizontal:"",custom:""}}),o("CInputFile",{attrs:{label:"Multiple file custom input",horizontal:"",multiple:"",custom:""}})],2)],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1),o("CCard",[o("CCardHeader",[o("strong",[t._v("Inline")]),t._v(" Form ")]),o("CCardBody",[o("CForm",{attrs:{inline:""}},[o("CInput",{staticClass:"mr-2",attrs:{placeholder:"Jane Doe"},scopedSlots:t._u([{key:"label",fn:function(){return[o("small",[t._v("Name: ")])]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"jane.doe@example.com",autocomplete:"email"},scopedSlots:t._u([{key:"label",fn:function(){return[o("small",[t._v("Email: ")])]},proxy:!0}])})],1)],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),o("CCol",{attrs:{md:"6"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Horizontal")]),t._v(" Form ")]),o("CCardBody",[o("CForm",[o("CInput",{attrs:{type:"email",description:"Please enter your email.",autocomplete:"email",label:"Email",horizontal:"",placeholder:"Enter Email..."}}),o("CInput",{attrs:{type:"password",description:"Please enter your password.",autocomplete:"current-password",label:"Password",horizontal:"",placeholder:"Enter Password..."}})],1)],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1),o("CCard",[o("CCardHeader",[o("strong",[t._v("Normal")]),t._v(" Form ")]),o("CForm",{attrs:{novalidate:""}},[o("CCardBody",[o("CInput",{attrs:{type:"email",description:"Please enter your email.",autocomplete:"email",label:"Email",placeholder:"Enter Email...",required:"","was-validated":""}}),o("CInput",{attrs:{type:"password",description:"Please enter your password.",autocomplete:"current-password",label:"Password",placeholder:"Enter Password...",required:"","was-validated":""}})],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),o("CCard",[o("CCardHeader",[t._v(" Input "),o("strong",[t._v("Grid")])]),o("CCardBody",[o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"3"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-3"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"4"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-4"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"5"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-5"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"6"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-6"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"7"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-7"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"8"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-8"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"9"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-9"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"10"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-10"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"11"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-11"}})],1)],1),o("CRow",{staticClass:"form-group"},[o("CCol",{attrs:{sm:"12"}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-12"}})],1)],1)],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[o("CIcon",{attrs:{name:"cil-user"}}),t._v(" Login")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1),o("CCard",[o("CCardHeader",[t._v(" Input "),o("strong",[t._v("Sizes")])]),o("CCardBody",[o("CInput",{attrs:{label:"Small input",size:"sm",horizontal:"",placeholder:"size='sm'"}}),o("CInput",{attrs:{label:"Default input",horizontal:"",placeholder:"normal"}}),o("CInput",{attrs:{label:"Large input",size:"lg",horizontal:"",placeholder:"size='lg'"}})],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"12",md:"6"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Basic Validation")]),t._v(" Form ")]),o("CCardBody",[o("CForm",{attrs:{validated:"",novalidate:""}},[o("CInput",{attrs:{label:"Input is valid","valid-feedback":"Input is not required."}}),o("CInput",{attrs:{label:"Input is invalid",required:"","valid-feedback":"Thank you :)","invalid-feedback":"Please provide a required input."}})],1)],1)],1)],1),o("CCol",{attrs:{sm:"12",md:"6"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Custom Validation")]),t._v(" Form ")]),o("CCardBody",[o("CForm",[o("CInput",{attrs:{label:"Input is valid","valid-feedback":"Input is valid.","invalid-feedback":"Please provide at least 4 characters.",value:"Valid value","is-valid":t.validator}}),o("CInput",{attrs:{label:"Input is invalid","valid-feedback":"Thank you :)","invalid-feedback":"Please provide at least 4 characters.","is-valid":t.validator}})],1)],1)],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"4"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Icon/Text")]),t._v(" Groups ")]),o("CCardBody",[o("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),o("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-envelope-open"}})]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"ex. $1.000.000",append:".00"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-euro"}})]},proxy:!0}])})],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),o("CCol",{attrs:{sm:"4"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Buttons")]),t._v(" Groups ")]),o("CCardBody",[o("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("CButton",{attrs:{color:"primary"}},[o("CIcon",{attrs:{name:"cil-magnifying-glass"}}),t._v(" Search ")],1)]},proxy:!0}])}),o("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"append",fn:function(){return[o("CButton",{attrs:{type:"submit",color:"primary"}},[t._v("Submit")])]},proxy:!0}])}),o("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("CButton",{attrs:{color:"primary"}},[o("CIcon",{attrs:{name:"cib-facebook"}})],1)]},proxy:!0},{key:"append",fn:function(){return[o("CButton",{attrs:{color:"primary"}},[o("CIcon",{attrs:{name:"cib-twitter"}})],1)]},proxy:!0}])})],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),o("CCol",{attrs:{sm:"4"}},[o("CCard",[o("CCardHeader",[o("strong",[t._v("Dropdowns")]),t._v(" Groups ")]),o("CCardBody",[o("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("CDropdown",{attrs:{togglerText:"Action",color:"primary"}},[o("CDropdownItem",[t._v("Action")]),o("CDropdownItem",[t._v("Another action")]),o("CDropdownItem",[t._v("Something else here...")]),o("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}])}),o("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"append",fn:function(){return[o("CDropdown",{attrs:{togglerText:"Action",color:"primary",right:""}},[o("CDropdownItem",[t._v("Action")]),o("CDropdownItem",[t._v("Another action")]),o("CDropdownItem",[t._v("Something else here...")]),o("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"..."},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("CDropdown",{attrs:{togglerText:"Split",color:"primary",split:""}},[o("CDropdownItem",{attrs:{href:"#"}},[t._v("Action")]),o("CDropdownItem",{attrs:{href:"#"}},[t._v("Another action")]),o("CDropdownItem",{attrs:{href:"#"}},[t._v("Something else here...")]),o("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"append",fn:function(){return[o("CDropdown",{attrs:{togglerText:"Action",color:"primary",right:""}},[o("CDropdownItem",[t._v("Action")]),o("CDropdownItem",[t._v("Another action")]),o("CDropdownItem",[t._v("Something else here...")]),o("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}])})],1),o("CCardFooter",[o("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[o("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),o("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[o("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1)],1),o("CRow",[o("CCol",{attrs:{md:"6"}},[o("CCard",[o("CCardHeader",[t._v(" Use the grid for big devices! "),o("small",[o("code",[t._v(".col-lg-*")]),t._v(" "),o("code",[t._v(".col-md-*")]),t._v(" "),o("code",[t._v(".col-sm-*")])])]),o("CCardBody",t._l([4,5,6,7,8],(function(t,e){return o("CRow",{key:e,staticClass:"form-group"},[o("CCol",{attrs:{col:12-t}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-md-"+(12-t)}})],1),o("CCol",{attrs:{col:t}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-md-"+t}})],1)],1)})),1),o("CCardFooter",[o("CButton",{attrs:{size:"sm",color:"primary"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"danger"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"warning"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"info"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"success"}},[t._v("Action")])],1)],1)],1),o("CCol",{attrs:{md:"6"}},[o("CCard",[o("CCardHeader",[t._v(" Input Grid for small devices! "),o("small",[o("code",[t._v(".col-*")])])]),o("CCardBody",t._l([4,5,6,7,8],(function(t,e){return o("CRow",{key:e,staticClass:"form-group"},[o("CCol",{attrs:{col:t}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-"+t}})],1),o("CCol",{attrs:{col:12-t}},[o("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-"+(12-t)}})],1)],1)})),1),o("CCardFooter",[o("CButton",{attrs:{size:"sm",color:"primary"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"danger"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"warning"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"info"}},[t._v("Action")]),o("CButton",{attrs:{size:"sm",color:"success"}},[t._v("Action")])],1)],1)],1)],1),o("CRow",[o("CCol",{attrs:{sm:"4"}},[o("CCard",[o("CCardHeader",[t._v(" Example Form ")]),o("CCardBody",[o("CForm",[o("CInput",{attrs:{prepend:"Username"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),o("CInput",{attrs:{type:"email",autocomplete:"email",prepend:"Email"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-envelope-closed"}})]},proxy:!0}])}),o("CInput",{attrs:{type:"password",autocomplete:"current-password",prepend:"Password"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-shield-alt"}})]},proxy:!0}])}),o("div",{staticClass:"form-group form-actions"},[o("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[t._v(" Submit ")])],1)],1)],1)],1)],1),o("CCol",{attrs:{sm:"4"}},[o("CCard",[o("CCardHeader",[t._v(" Example Form ")]),o("CCardBody",[o("CForm",[o("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"Email",type:"email",autocomplete:"email"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-envelope-closed"}})]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},scopedSlots:t._u([{key:"append-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-shield-alt"}})]},proxy:!0}])}),o("div",{staticClass:"form-group form-actions"},[o("CButton",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"submit"}},[t._v(" Submit ")])],1)],1)],1)],1)],1),o("CCol",{attrs:{sm:"4"}},[o("CCard",[o("CCardHeader",[t._v(" Example Form ")]),o("CCardBody",[o("CForm",[o("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"Email",type:"email",autocomplete:"email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-envelope-closed"}})]},proxy:!0}])}),o("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-shield-alt"}})]},proxy:!0}])}),o("div",{staticClass:"form-group form-actions"},[o("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[t._v(" Submit ")])],1)],1)],1)],1)],1)],1),o("CRow",[o("CCol",{attrs:{lg:"12"}},[o("transition",{attrs:{name:"fade"}},[t.show?o("CCard",[o("CCardHeader",[o("CIcon",{attrs:{name:"cil-pencil"}}),t._v(" Form Elements "),o("div",{staticClass:"card-header-actions"},[o("CLink",{staticClass:"card-header-action btn-setting",attrs:{href:"#"}},[o("CIcon",{attrs:{name:"cil-settings"}})],1),o("CLink",{staticClass:"card-header-action btn-minimize",on:{click:function(e){t.formCollapsed=!t.formCollapsed}}},[o("CIcon",{attrs:{name:"cil-chevron-"+(t.formCollapsed?"bottom":"top")}})],1),o("CLink",{staticClass:"card-header-action btn-close",attrs:{href:"#"},on:{click:function(e){t.show=!t.show}}},[o("CIcon",{attrs:{name:"cil-x-circle"}})],1)],1)],1),o("CCollapse",{attrs:{show:t.formCollapsed}},[o("CCardBody",[o("CInput",{attrs:{label:"Prepended text",description:"Here's some help text",type:"email",autocomplete:"email",prepend:"@"}}),o("CInput",{attrs:{label:"Appended text",append:".00",description:"Here's some help text"}}),o("CInput",{attrs:{label:"Appended and prepended text",append:".00",description:"Here's some help text",prepend:"$"}}),o("CInput",{attrs:{label:"Append with button",description:"Here's some help text"},scopedSlots:t._u([{key:"append",fn:function(){return[o("CButton",{attrs:{color:"primary"}},[t._v("Go!")])]},proxy:!0}],null,!1,542345765)}),o("CInput",{attrs:{label:"Two-buttons append"},scopedSlots:t._u([{key:"append",fn:function(){return[o("CButton",{attrs:{color:"primary"}},[t._v("Search")]),o("CButton",{attrs:{color:"danger"}},[t._v("Options")])]},proxy:!0}],null,!1,3446918590)}),o("div",{staticClass:"form-actions"},[o("CButton",{attrs:{type:"submit",color:"primary"}},[t._v("Save changes")]),o("CButton",{attrs:{color:"secondary"}},[t._v("Cancel")])],1)],1)],1)],1):t._e()],1)],1)],1)],1)},r=[],s={name:"Forms",data:function(){return{selected:[],show:!0,horizontal:{label:"col-3",input:"col-9"},options:["Option 1","Option 2","Option 3"],selectOptions:["Option 1","Option 2","Option 3",{value:"some value",label:"Selected option"}],selectedOption:"some value",formCollapsed:!0,checkboxNames:["Checkboxes","Inline Checkboxes","Checkboxes - custom","Inline Checkboxes - custom"],radioNames:["Radios","Inline Radios","Radios - custom","Inline Radios - custom"]}},methods:{validator:function(t){return!!t&&t.length>=4}}},l=s,n=o("2877"),c=Object(n["a"])(l,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22885b.77c858f1.js.map