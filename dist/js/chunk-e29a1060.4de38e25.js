(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e29a1060"],{"2dc9":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("CRow",[t("CCol",[t("CTableWrapper",{attrs:{items:a.getData(),hover:""}})],1)],1),t("CRow",[t("CCol",{attrs:{lg:"6"}},[t("CTableWrapper",{attrs:{items:a.getData(),small:"",caption:"Condensed Table",header:!1}})],1),t("CCol",{attrs:{lg:"6"}},[t("CTableWrapper",{attrs:{items:a.getData(),fixed:"",border:"",caption:"Bordered Table"}})],1)],1),t("CRow",[t("CCol",{attrs:{sm:"12"}},[t("CTableWrapper",{attrs:{items:a.getData(),hover:"",striped:"",border:"",small:"",fixed:"",caption:"Combined All Table"}})],1)],1),t("CRow",[t("CCol",{attrs:{sm:"12"}},[t("CTableWrapper",{attrs:{items:a.getData(),hover:"",striped:"",border:"",small:"",fixed:"",dark:"",caption:"Combined All dark Table"}})],1)],1)],1)},r=[],i=t("8229"),s=t("bd76"),l={name:"Tables",components:{CTableWrapper:i["a"]},methods:{getData:function(){return s["a"].slice(0)}}},m=l,k=t("2877"),o=Object(k["a"])(m,n,r,!1,null,null,null);e["default"]=o.exports},8229:function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("CDataTable",{attrs:{hover:a.hover,fixed:a.fixed,items:a.items,fields:a.fields,header:a.header},scopedSlots:a._u([{key:"status",fn:function(e){var n=e.item;return[t("td",[t("CBadge",{attrs:{color:a.getBadge(n.status)}},[a._v(a._s(n.status))])],1)]}}])})},r=[],i={name:"Table",props:{items:Array,fields:{type:Array,default:function(){return["nama","alamat","agama","kewarganegaraan"]}},caption:{type:String,default:"Table"},hover:Boolean,header:Boolean,border:Boolean,fixed:Boolean},methods:{getBadge:function(a){return"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary"}}},s=i,l=t("2877"),m=Object(l["a"])(s,n,r,!1,null,null,null);e["a"]=m.exports},bd76:function(a,e,t){"use strict";var n=[{nik:"1357912345",nama:"Jajang Nurjaman",alamat:"Jl. Cempaka Putih Timur 24,",provinsi:"DKI Jakarta",kota:"Jakarta Pusat",kecamatan:"Cempaka Putih",kelurahan:"Cempaka Putih Timur",tempatlahir:"Jakarta",tanggallahir:"23-03-1965",jeniskelamin:"laki-laki",agama:"Islam",kawin:"Cerai Mati",pekerjaan:"wiraswasta",kewarganegaraan:"Indonesia",Date:"15 Maret 2021",petugas:"-",status:"Diproses"},{nik:"1357912346",nama:"Siti Aminah",alamat:"Jl. Merdeka, No. 19",provinsi:"Banten",kota:"Serang",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Diproses"},{nik:"1357912357",nama:"Udin Saefudin",alamat:"Jl. Duku, No. 28",provinsi:"Jawa Timur",kota:"Surabaya",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Diproses"},{nik:"1357912358",nama:"Wida Rahmawati",alamat:"Jl. Pramuka, No. 38",provinsi:"Jawa Tengah",kota:"Solo",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Ditolak"},{nik:"1357912359",nama:"Muhammad Soleh",alamat:"Jl. Anggrek, No. 47",provinsi:"Jawa Barat",kota:"Bandung",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"-",status:"Diverifikasi"},{nik:"1357912364",nama:"Amalia Ariani",alamat:"Jl. J. Sudirman, No. 56",provinsi:"Banten",kota:"Tangerang",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"M Dadang",status:"Divalidasi"},{nik:"1357912363",nama:"Anggita Sukma",alamat:"Jl. Ksatria, No. 65",provinsi:"Jawa Barat",kota:"Bandung",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"Ahmad Awaludin",status:"Selesai"},{nik:"1357912372",nama:"Rahma Amanda",alamat:"Jl. Setiabudi, No. 74",provinsi:"Jawa Barat",kota:"Cimahi",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"M Dadang",status:"Selesai"},{nik:"1357912371",nama:"Maman Rahmawan",alamat:"Jl. Mawar, No. 63",provinsi:"Banten",kota:"Cilegon",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"Heri Prasetya",status:"Selesai"},{nik:"1357912380",nama:"M Rizki Smith",alamat:"Jl. Makmur, No. 52",provinsi:"DKI Jakarta",kota:"Jakarta Pusat",kecamatan:"",kelurahan:"",tempatlahir:"",jeniskelamin:"",agama:"",kawin:"",pekerjaan:"",kewarganegaraan:"",Date:"15 Maret 2021",petugas:"Heri Prasetya",status:"Selesai"}];e["a"]=n}}]);
//# sourceMappingURL=chunk-e29a1060.4de38e25.js.map