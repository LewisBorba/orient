(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"44a1":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-table",{staticClass:"q-mb-lg",attrs:{title:"Consultas confirmadas",grid:a.$q.screen.xs,data:a.data,columns:a.columns,"row-key":"name",loading:a.loading},scopedSlots:a._u([{key:"header",fn:function(t){return[e("q-tr",{attrs:{props:t}},a._l(t.cols,(function(n){return e("q-th",{key:n.name,attrs:{props:t}},[a._v("\n        "+a._s(n.label)+"\n      ")])})),1)]}},{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},a._l(t.cols,(function(n){return e("q-td",{key:n.name,attrs:{props:t}},["link"==n.name?e("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"content_copy"}}):a._e(),"link"==n.name?e("span",[a._v(" ")]):a._e(),"link"==n.name?e("a",{attrs:{href:n.value}},[a._v(" "+a._s(n.value))]):a._e(),"link"!=n.name?e("span",[a._v("\n          "+a._s(n.value)+"\n        ")]):a._e()],1)})),1)]}},{key:"item",fn:function(t){return[e("q-card",{staticClass:"q-my-xs q-pb-xs full-width"},[e("q-card-section",[e("div",{staticClass:"q-mb-sm"},[e("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"content_copy"}}),a._v("\n         \n        Link: "),e("br")],1),e("a",{attrs:{href:t.row.link}},[a._v(a._s(t.row.link))])]),e("q-separator"),e("q-list",{attrs:{dense:""}},a._l(t.cols.filter((function(a){return"link"!=a.name})),(function(n){return e("q-item",{key:n.name,attrs:{props:t}},[e("q-item-section",[e("q-item-label",[a._v(a._s(n.name))])],1),e("q-item-section",[e("q-item-label",{attrs:{caption:""}},[a._v(a._s(n.value))])],1)],1)})),1)],1)]}}])})},i=[],s={name:"TableConsultasConfirmadas",props:{data:{type:Array,required:!0},columns:{type:Array,required:!0},loading:{type:Boolean,required:!0}}},o=s,r=e("2877"),l=e("eaac"),c=e("bd08"),d=e("357e"),u=e("db86"),m=e("9c40"),p=e("f09f"),g=e("a370"),f=e("eb85"),b=e("1c1c"),h=e("66e5"),q=e("4074"),y=e("0170"),C=e("eebe"),v=e.n(C),_=Object(r["a"])(o,n,i,!1,null,null,null);t["a"]=_.exports;v()(_,"components",{QTable:l["a"],QTr:c["a"],QTh:d["a"],QTd:u["a"],QBtn:m["a"],QCard:p["a"],QCardSection:g["a"],QSeparator:f["a"],QList:b["a"],QItem:h["a"],QItemSection:q["a"],QItemLabel:y["a"]})},"55d8":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("q-header",[e("q-toolbar",[e("q-toolbar-title",{staticClass:"text-center"},[a._v("Consultas")])],1)],1),e("TablePacientes",{attrs:{loading:a.loadingPacientes,data:a.dataPacientesPsico,title:"Pacientes Psicoterapia"},on:{aceitarConsulta:function(t,e){return a.aceitarConsulta(t,e)}}}),e("TablePacientes",{attrs:{loading:a.loadingPacientes,data:a.dataPacientesOrient,title:"Pacientes Orientação Psicológica"}}),e("TableConsultasConfirmadas",{attrs:{loading:a.loadingConsultasConfirmadas,data:a.dataConsultasConfirmadas,columns:a.columns}})],1)},i=[],s=e("44a1"),o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("q-table",{staticClass:"q-mb-md",attrs:{title:a.title,data:a.data,columns:a.columns,"row-key":"name",grid:a.$q.screen.xs,loading:a.loading},scopedSlots:a._u([{key:"header",fn:function(t){return[e("q-tr",{attrs:{props:t}},a._l(t.cols,(function(n){return e("q-th",{key:n.name,attrs:{props:t}},[a._v("\n          "+a._s(n.label)+"\n        ")])})),1)]}},{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},a._l(t.cols,(function(n){return e("q-td",{key:n.name,attrs:{props:t}},[a._v("\n          "+a._s(n.value)+"\n\n          "),"accept"==n.name?e("q-btn",{attrs:{color:"primary",round:"",icon:"check"},on:{click:function(e){return a.updateId(t.row.id)}}}):a._e()],1)})),1)]}},{key:"item",fn:function(t){return[e("q-card",{staticClass:"q-my-xs q-pb-xs full-width"},[e("q-card-section",[e("q-btn",{attrs:{color:"primary",icon:"check",label:"Aceitar"},on:{click:function(e){return a.updateId(t.row.id)}}})],1),e("q-separator"),e("q-list",{attrs:{dense:""}},a._l(t.cols.filter((function(a){return"accept"!=a.name})),(function(n){return e("q-item",{key:n.name,attrs:{props:t}},[e("q-item-section",[e("q-item-label",[a._v(a._s(n.name))])],1),e("q-item-section",[e("q-item-label",{attrs:{caption:""}},[a._v(a._s(n.value))])],1)],1)})),1)],1)]}}])}),e("q-dialog",{model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("q-card",{staticStyle:{width:"100%","max-width":"400px"}},[e("q-form",{on:{submit:a.onSubmit}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[a._v("Informe abaixo")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",label:"Dia e horário",rules:[a.rules.horarios],hint:"Obrigatório"},model:{value:a.form.horarios,callback:function(t){a.$set(a.form,"horarios",t)},expression:"form.horarios"}}),e("q-input",{staticClass:"q-mb-md",attrs:{outlined:"",label:"Link",rules:[a.rules.link],hint:"Obrigatório"},model:{value:a.form.link,callback:function(t){a.$set(a.form,"link",t)},expression:"form.link"}})],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"negative"}}),e("q-btn",{attrs:{flat:"",loading:a.loadingBtn,label:"Enviar",color:"primary",type:"submit"}})],1)],1)],1)],1)],1)},r=[],l=e("6687"),c=e("7fce"),d={name:"TablePacientes",props:{data:{type:Array,required:!0},loading:{type:Boolean,required:!0},title:{type:String,required:!0}},data(){return{dialog:!1,idToUpdate:null,form:{medicId:null},loadingBtn:!1,columns:[{name:"availableHours",label:"Horários disponíveis",align:"left",field:"availableHours"},{name:"appointmentType",align:"left",label:"Tipo de atendimento",field:"appointmentType"},{name:"accept",field:"accept",label:"Aceitar",align:"center",style:"width:10px"}]}},computed:{rules(){return{horarios:a=>l["a"].isTamanhoValido(a,5),link:a=>l["a"].isTamanhoValido(a,10)}}},mounted(){this.$route.params.id&&(this.form.medicId=this.$route.params.id)},methods:{updateId(a){this.dialog=!0,this.idToUpdate=a},async onSubmit(){this.loadingBtn=!0,this.$emit("aceitarConsulta",this.idToUpdate,this.form),this.dialog=!1,this.loadingBtn=!1}}},u=d,m=e("2877"),p=e("eaac"),g=e("bd08"),f=e("357e"),b=e("db86"),h=e("9c40"),q=e("f09f"),y=e("a370"),C=e("eb85"),v=e("1c1c"),_=e("66e5"),P=e("4074"),k=e("0170"),w=e("24e8"),T=e("0378"),Q=e("27f9"),O=e("4b7e"),$=e("7f67"),x=e("eebe"),I=e.n(x),A=Object(m["a"])(u,o,r,!1,null,null,null),S=A.exports;I()(A,"components",{QTable:p["a"],QTr:g["a"],QTh:f["a"],QTd:b["a"],QBtn:h["a"],QCard:q["a"],QCardSection:y["a"],QSeparator:C["a"],QList:v["a"],QItem:_["a"],QItemSection:P["a"],QItemLabel:k["a"],QDialog:w["a"],QForm:T["a"],QInput:Q["a"],QCardActions:O["a"]}),I()(A,"directives",{ClosePopup:$["a"]});var j={name:"LobbyPsicologo",components:{TableConsultasConfirmadas:s["a"],TablePacientes:S},data(){return{id:null,dataConsultasConfirmadas:[],loadingConsultasConfirmadas:!1,dataPacientesPsico:[],dataPacientesOrient:[],loadingPacientes:!1,columns:[{name:"acceptedHour",label:"Horário confirmado",align:"left",field:"acceptedHour"},{name:"link",align:"left",label:"Link para o atendimento",field:"link"},{name:"appointmentType",align:"left",label:"Tipo de atendimento",field:"appointmentType"}]}},async mounted(){this.$route.params.id&&(this.id=this.$route.params.id),await this.getConsultas(),await this.getPacientesOrient(),await this.getPacientesPsico()},methods:{async getPacientesPsico(){this.loadingPacientes=!0;const a=await(new c["a"]).getPacientes("PSICOTERAPIA");this.dataPacientesPsico=a||[],console.log(a),this.loadingPacientes=!1},async getPacientesOrient(){this.loadingPacientes=!0;const a=await(new c["a"]).getPacientes("ORIENTACAO_PROFISSIONAL");this.dataPacientesOrient=a||[],console.log(a),this.loadingPacientes=!1},async getConsultas(){this.loadingConsultasConfirmadas=!0;const a=await(new c["a"]).getConsultasMarcadas(this.id);console.log("*****"),console.log(a),console.log("*****"),this.dataConsultasConfirmadas=a,this.loadingConsultasConfirmadas=!1},async aceitarConsulta(a,t){await(new c["a"]).aceitarConsulta(a,t),await this.getConsultas(),await this.getPacientesOrient(),await this.getPacientesPsico()}}},L=j,B=e("9989"),E=e("e359"),H=e("65c6"),U=e("6ac5"),z=Object(m["a"])(L,n,i,!1,null,null,null);t["default"]=z.exports;I()(z,"components",{QPage:B["a"],QHeader:E["a"],QToolbar:H["a"],QToolbarTitle:U["a"]})},6687:function(a,t,e){"use strict";class n{isEmailValido(a){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(a)&&t.test(a)||"E-mail inválido."}isTamanhoValido(a,t){return a?a.length>=t||"Tamanho inválido.":"Obrigatório"}}t["a"]=new n},"7fce":function(a,t,e){"use strict";e.d(t,"a",(function(){return o}));var n=e("bc3a"),i=e.n(n),s=e("2a19");class o{async criar(a){let t=!1;return await Object(n["post"])("/appointment",a).then((a=>{s["a"].create({type:"positive",progress:!0,timeout:4e3,message:"Solicitação Cadastrada"}),t=!0})).catch((a=>{console.log(a),s["a"].create({type:"negative",message:"Oops! algo deu errado :( tente novamente mais tarde"})})),t}async getUsersConsultas(a){let t=!1;return await Object(n["get"])(`/appointment/requested-appointments/${a}`).then((a=>{t=a.data})).catch((a=>{console.log(a)})),t}async getUsersAcceptedConsultas(a){let t=!1;return await Object(n["get"])(`/appointment/accepted-appointments/${a}`).then((a=>{t=a.data})).catch((a=>{console.log(a)})),t}async getPacientes(a){let t=!1;return await Object(n["get"])(`/appointment/available-appointments/${a}`).then((a=>{t=a.data})).catch((a=>{console.log(a)})),t}async getConsultasMarcadas(a){let t=!1;return await Object(n["get"])(`/appointment/scheduled-appointments/${a}`).then((a=>{t=a.data})).catch((a=>{console.log(a)})),t}async deletarConsulta(a){let t=!1;return await i.a.delete(`/appointment/cancel-appointment/${a}`).then((a=>{s["a"].create({type:"positive",icon:"remove_circle_outline",message:"Consulta Removida"}),t=!0})).catch((a=>{console.log(a),s["a"].create({type:"negative",message:"Oops! algo deu errado"})})),t}async aceitarConsulta(a,t){let e=!1;return await Object(n["put"])(`/appointment/${a}`,t).then((a=>{e=!0})).catch((a=>{console.log(a)})),e}}}}]);