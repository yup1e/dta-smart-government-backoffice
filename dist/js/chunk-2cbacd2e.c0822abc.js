(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cbacd2e"],{8229:function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("CDataTable",{attrs:{hover:a.hover,fixed:a.fixed,items:a.items,fields:a.fields,header:a.header},scopedSlots:a._u([{key:"status",fn:function(t){var s=t.item;return[e("td",[e("CBadge",{attrs:{color:a.getBadge(s.status)}},[a._v(a._s(s.status))])],1)]}}])})},i=[],n={name:"Table",props:{items:Array,fields:{type:Array,default:function(){return["nama","alamat","agama","kewarganegaraan"]}},caption:{type:String,default:"Table"},hover:Boolean,header:Boolean,border:Boolean,fixed:Boolean},methods:{getBadge:function(a){return"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary"}}},r=n,l=e("2877"),o=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=o.exports},bd76:function(a,t,e){"use strict";var s=[{nik:"1357912345",nama:"Jajang Nurjaman",alamat:"Jl. Cempaka Putih Timur 24,",provinsi:"DKI Jakarta",kota:"Jakarta Pusat",kecamatan:"Cempaka Putih",kelurahan:"Cempaka Putih Timur",tempatlahir:"Jakarta",tanggallahir:"23-03-1965",jeniskelamin:"laki-laki",agama:"Islam",kawin:"Cerai Mati",pekerjaan:"wiraswasta",kewarganegaraan:"Indonesia",Date:"15 Maret 2021",petugas:"-",status:"Diproses"},{nik:"1357912346",nama:"Siti Aminah",alamat:"Jl. Merdeka, No. 19",provinsi:"Banten",kota:"Serang",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Diproses"},{nik:"1357912357",nama:"Udin Saefudin",alamat:"Jl. Duku, No. 28",provinsi:"Jawa Timur",kota:"Surabaya",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Diproses"},{nik:"1357912358",nama:"Wida Rahmawati",alamat:"Jl. Pramuka, No. 38",provinsi:"Jawa Tengah",kota:"Solo",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Ditolak"},{nik:"1357912359",nama:"Muhammad Soleh",alamat:"Jl. Anggrek, No. 47",provinsi:"Jawa Barat",kota:"Bandung",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Diverifikasi"},{nik:"1357912364",nama:"Amalia Ariani",alamat:"Jl. J. Sudirman, No. 56",provinsi:"Banten",kota:"Tangerang",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"M Dadang",status:"Divalidasi"},{nik:"1357912363",nama:"Anggita Sukma",alamat:"Jl. Ksatria, No. 65",provinsi:"Jawa Barat",kota:"Bandung",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"Ahmad Awaludin",status:"Selesai"},{nik:"1357912372",nama:"Rahma Amanda",alamat:"Jl. Setiabudi, No. 74",provinsi:"Jawa Barat",kota:"Cimahi",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"M Dadang",status:"Selesai"},{nik:"1357912371",nama:"Maman Rahmawan",alamat:"Jl. Mawar, No. 63",provinsi:"Banten",kota:"Cilegon",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"Heri Prasetya",status:"Selesai"},{nik:"1357912380",nama:"M Rizki Smith",alamat:"Jl. Makmur, No. 52",provinsi:"DKI Jakarta",kota:"Jakarta Pusat",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"Heri Prasetya",status:"Selesai"}];t["a"]=s},d3cc:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h3",{staticClass:"text-bold"},[a._v("Resume")]),a._m(0),e("h3",{staticClass:"text-bold"},[a._v("Permintaan KTP Baru")]),e("div",{staticClass:"card rounded-top"},[a._m(1),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-hover"},[e("tbody",a._l(a.getData(),(function(t){return e("tr",[e("td",{attrs:{width:"350"}},[a._v(a._s(t.nama))]),e("td",{attrs:{width:"150"}},["Diproses"==t.status?e("CAlert",{attrs:{color:"warning"}},[a._v(a._s(t.status))]):"Ditolak"==t.status?e("CAlert",{attrs:{color:"danger"}},[a._v(a._s(t.status))]):"Selesai"==t.status?e("CAlert",{attrs:{color:"success"}},[a._v(a._s(t.status))]):"Diverifikasi"==t.status?e("CAlert",{attrs:{color:"info"}},[a._v(a._s(t.status))]):e("CAlert",{attrs:{color:"secondary"}},[a._v(a._s(t.status))])],1),e("td",{attrs:{width:"180"}},[a._v(a._s(t.Date))]),e("td",{attrs:{width:"200"}},[a._v(a._s(t.petugas))]),e("td",{staticClass:"input-group"},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return a.detail(t)}}},[a._v(" Lihat Data ")])])])})),0)])])])])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"card w-kotak marginkiri card-pertama"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7 align-self-center"},[e("small",{staticClass:"h5 text-uppercase font-weight-bold"},[a._v("KTP Hilang")])]),e("div",{staticClass:"col-md-5 align-self-center"},[e("div",{staticClass:"h4 mb-0 font-weight-bold"},[a._v("150")])])])])]),e("div",{staticClass:"card w-kotak margintengah card-kedua"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 align-self-center"},[e("small",{staticClass:"h5 text-uppercase font-weight-bold"},[a._v("Update Alamat")])]),e("div",{staticClass:"col-md-4 align-self-center"},[e("div",{staticClass:"h4 mb-0 font-weight-bold"},[a._v("20")])])])])]),e("div",{staticClass:"card w-kotak margintengah card-ketiga"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 align-self-center"},[e("small",{staticClass:"h6 text-uppercase font-weight-bold"},[a._v("Update Pernikahan")])]),e("div",{staticClass:"col-md-4 align-self-center"},[e("div",{staticClass:"h4 mb-0 font-weight-bold"},[a._v("20")])])])])]),e("div",{staticClass:"card w-kotak margintengah card-keempat"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 align-self-center"},[e("small",{staticClass:"h6 text-uppercase font-weight-bold"},[a._v("Update Pekerjaan")])]),e("div",{staticClass:"col-md-4 align-self-center"},[e("div",{staticClass:"h4 mb-0 font-weight-bold"},[a._v("20")])])])])]),e("div",{staticClass:"card w-kotak margintengah card-kelima"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 align-self-center"},[e("small",{staticClass:"h5 text-uppercase font-weight-bold"},[a._v("KTP Diproses")])]),e("div",{staticClass:"col-md-4 align-self-center"},[e("div",{staticClass:"h4 mb-0 font-weight-bold"},[a._v("20")])])])])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card-header rounded-top"},[e("table",{staticClass:"table text-white table-borderless"},[e("thead",[e("tr",[e("th",{attrs:{width:"350"}},[a._v("Nama")]),e("th",{attrs:{width:"150"}},[a._v("Status")]),e("th",{attrs:{width:"180"}},[a._v("Date")]),e("th",{attrs:{width:"200"}},[a._v("Disetujui oleh")]),e("th",[a._v("Action")])])])])])}],n=(e("15ac"),e("5d5f")),r=e("8229"),l=e("bd76"),o={components:{Alerts:n["a"],CTableWrapper:r["a"]},name:"ktp",Forms:"ktp",methods:{getData:function(){return l["a"].slice(0)},detail:function(a){"1357912345"==a.nik?this.$router.push("/detail"):alert("halaman selanjutnya coming soon!")}}},d=o,c=e("2877"),m=Object(c["a"])(d,s,i,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2cbacd2e.c0822abc.js.map