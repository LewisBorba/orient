(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"37aa":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-input",{ref:"input",staticClass:"q-mb-sm",attrs:{rules:e.regra,"lazy-rules":"",value:e.value,outlined:"",type:e.isPwd?"password":"text",label:e.label},on:{input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}])})},n=[],i=(a("ddb0"),{name:"InputPsw",props:{value:[String,null],label:String,regra:Array},data(){return{isPwd:!0}},methods:{validate(...e){return this.$refs.input.validate(...e)}}}),o=i,l=a("2877"),r=a("27f9"),c=a("0016"),u=a("eebe"),m=a.n(u),p=Object(l["a"])(o,s,n,!1,null,null,null);t["a"]=p.exports;m()(p,"components",{QInput:r["a"],QIcon:c["a"]})},6687:function(e,t,a){"use strict";class s{isEmailValido(e){const t=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return t.test(e)&&t.test(e)||"E-mail inválido."}isTamanhoValido(e,t){return e?e.length>=t||"Tamanho inválido.":"Obrigatório"}}t["a"]=new s},"702c":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{model:{value:e.propModel,callback:function(t){e.propModel=t},expression:"propModel"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Termos e condições de uso")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("p",[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquam purus, iaculis tristique ipsum. Suspendisse mollis, nisi sed facilisis tempus, ex eros luctus orci, a fermentum erat tortor non ligula. Donec sit amet dolor mi. Suspendisse eu justo sed nisi condimentum suscipit vel ullamcorper ipsum. Phasellus commodo fermentum pulvinar. Phasellus maximus feugiat nisl vel laoreet. Donec quis ex nec magna mattis molestie. Duis suscipit et ante eu facilisis.\n      ")])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Aceitar",color:"primary"},on:{click:function(t){return e.$emit("click",!0)}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Recusar",color:"primary"},on:{click:function(t){return e.$emit("click",!1)}}})],1)],1)],1)},n=[],i={name:"DialogTermos",props:{value:Boolean},data(){return{accepted:!0}},computed:{propModel:{get(){return this.value},set(e){this.$emit("input",e)}}}},o=i,l=a("2877"),r=a("24e8"),c=a("f09f"),u=a("a370"),m=a("4b7e"),p=a("9c40"),d=a("7f67"),f=a("eebe"),b=a.n(f),v=Object(l["a"])(o,s,n,!1,null,null,null);t["a"]=v.exports;b()(v,"components",{QDialog:r["a"],QCard:c["a"],QCardSection:u["a"],QCardActions:m["a"],QBtn:p["a"]}),b()(v,"directives",{ClosePopup:d["a"]})},"7a57":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center",attrs:{padding:""}},[s("div",{staticClass:"full-width mw300"},[s("div",{staticClass:"text-center q-mb-md"},[s("img",{staticStyle:{"object-fit":"cover"},attrs:{src:a("f2b4"),alt:"feed"}})]),s("q-form",{on:{submit:e.onSubmit}},[s("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",rules:[e.rules.nome],"lazy-rules":"",label:"Nome"},model:{value:e.form.nome,callback:function(t){e.$set(e.form,"nome",t)},expression:"form.nome"}}),s("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",rules:[e.rules.email],"lazy-rules":"",label:"E-mail"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),s("q-input",{staticClass:"q-mb-sm",attrs:{outlined:"",rules:[e.rules.cnpj],"lazy-rules":"",mask:"##.###.###/####-##",label:"CNPJ"},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}}),s("InputPsw",{staticClass:"q-mb-sm",attrs:{label:"Senha",regra:[e.rules.senha]},model:{value:e.form.senha,callback:function(t){e.$set(e.form,"senha",t)},expression:"form.senha"}}),s("InputPsw",{staticClass:"q-mb-sm",attrs:{label:"Confirme sua Senha",regra:[function(t){return t&&t===e.form.senha||"Senhas diferentes."}]},model:{value:e.form.confirmSenha,callback:function(t){e.$set(e.form,"confirmSenha",t)},expression:"form.confirmSenha"}}),s("div",{staticClass:"text-left row"},[s("q-checkbox",{staticClass:"col-2",model:{value:e.accTermos,callback:function(t){e.accTermos=t},expression:"accTermos"}}),s("div",{staticClass:"col text-caption"},[e._v("\n          Ao avançar concordo com os\n          "),s("a",{staticClass:"text-primary text-bold cursor-pointer",on:{click:function(t){e.termos=!0}}},[e._v("Termos e Condições")]),e._v("\n          deste serviço.\n        ")])],1),s("q-btn",{staticClass:"full-width q-my-md q-py-sm",attrs:{color:"primary",unelevated:"",label:"Cadastrar",type:"submit"}})],1),s("p",{staticClass:"full-width q-my-md text-center text-grey-8"},[e._v("\n      Já tem cadastro?\n      "),s("a",{staticClass:"text-primary text-bold cursor-pointer",attrs:{href:"#/"}},[e._v("Clique aqui")])])],1),s("DialogTermos",{on:{click:function(t){return e.accTermos=t}},model:{value:e.termos,callback:function(t){e.termos=t},expression:"termos"}})],1)},n=[],i=a("702c"),o=a("37aa"),l=a("6687"),r={name:"CadastroUniversidade",components:{DialogTermos:i["a"],InputPsw:o["a"]},data(){return{termos:!1,form:{},isPwd:!0,accTermos:!1}},computed:{rules(){return{email:e=>l["a"].isEmailValido(e),senha:e=>l["a"].isTamanhoValido(e,5),nome:e=>l["a"].isTamanhoValido(e,4),cnpj:e=>l["a"].isTamanhoValido(e,18)}}},methods:{onSubmit(){console.log(`${this.form.email} - ${$this.form.senha}`)}}},c=r,u=a("2877"),m=a("9989"),p=a("0378"),d=a("27f9"),f=a("8f8e"),b=a("9c40"),v=a("eebe"),h=a.n(v),q=Object(u["a"])(c,s,n,!1,null,null,null);t["default"]=q.exports;h()(q,"components",{QPage:m["a"],QForm:p["a"],QInput:d["a"],QCheckbox:f["a"],QBtn:b["a"]})},f2b4:function(e,t,a){e.exports=a.p+"img/orient_logo.af29c66f.png"}}]);