(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],n[o]&&m.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d4d":function(t,e,a){t.exports=a.p+"img/mejor.2dacb578.png"},"1d98":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("h2",[t._v("Frase del día:")]),i("v-slide-y-transition",[t.phrase?i("blockquote",{staticClass:"blockquote",attrs:{cite:t.phrase.author}},[t._v(t._s(t.phrase.text))]):t._e()]),i("h3",{staticClass:"headline mt-3 mb-3"},[t._v("Resumen del día")]),i("p",[t._v("Hoy pasó esto:")]),i("ul",[i("li",[t._v("\n      Cumpliste todos tus objetivos!! ganas\n      "),i("code",{staticClass:"earnedPoints"},[t._v("+100pts")])])]),i("h3",{staticClass:"headline mt-3 mb-3"},[t._v("¿Cómo vas con la meta máxima?")]),i("p",[t._v("Voy a conseguir $ 4,300,000,000 para antes de mis 25 años; es decir, para antes del 05/03/21")]),i("v-img",{attrs:{src:a("0d4d"),"aspect-ratio":"1.7",contain:""}})],1)},n=[];function s(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}var o={data:function(){return{phrases:[],phrase:null}},mounted:function(){this.randomizePhrase()},methods:{randomizePhrase:function(){this.phrases=[{id:1,text:"El mundo funciona con finanzas y con codigo, y si no sabemos programar, nos lleva la corriente",author:"Freddy Vega"},{id:2,text:"Voy a ganar no porque los demás sean menos que yo, voy a ganar porque yo soy más que ellos",author:"Víctor Jimenez"},{id:3,text:"Confía un 99,9% ... reserva ese 0,1%",author:"Juan Jimenez"},{id:4,text:"Pocas cosas son imposibles con diligencia y habilidad; las grandes obras fueron realizadas no con fuerza, sino con perseverancia",author:"Samuel Johnson"},{id:5,text:"Asegúrese de que todo lo que dice y hace a partir de este momento sea coherente con lo que está convencido de que quiere tener y con la persona que quiere llegar a ser.",author:"Brian Tracy"},{id:6,text:"Su amplitud: segun su extension multiples o individuales",author:"Carlos Villajuana"}];var t=this.phrases.length-1;this.phrase=this.phrases[s(0,t)]}}},r=o,c=(a("2304"),a("2877")),l=a("6544"),u=a.n(l),d=a("a523"),m=a("adda"),p=a("0789"),f=Object(c["a"])(r,i,n,!1,null,"1737e010",null);e["default"]=f.exports;u()(f,{VContainer:d["a"],VImg:m["a"],VSlideYTransition:p["e"]})},2304:function(t,e,a){"use strict";var i=a("ea48"),n=a.n(i);n.a},"30b9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("pagina wimhof")])},n=[],s={},o=s,r=a("2877"),c=Object(r["a"])(o,i,n,!1,null,"9ed284d0",null);e["default"]=c.exports},"3a10":function(t,e,a){},"3d6c":function(t,e,a){"use strict";var i=a("3fb3"),n=a.n(i);n.a},"3fb3":function(t,e,a){},"4cf2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=a("bb71");a("da64");i["a"].use(n["a"],{iconfont:"md",theme:{primary:"#3f51b5",secondary:"#90CAF9",accent:"#8c9eff",error:"#b71c1c"}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("router-view")],1)],1)},o=[],r=a("2877"),c=a("6544"),l=a.n(c),u=a("7496"),d={},m=Object(r["a"])(d,s,o,!1,null,null,null),p=m.exports;l()(m,{VApp:u["a"]});var f=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{staticClass:"white",attrs:{fixed:"",clipped:"","disable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:"data:image/jpeg;base64,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"}})]),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Napoleon Hill")])],1)],1)],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,function(e,i){return a("div",[e.heading?a("v-layout",{key:i,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("v-subheader",[t._v(t._s(e.heading))])],1)],1):e.divider?a("v-divider",{key:i,staticClass:"my-3",attrs:{dark:""}}):a("v-list-tile",{key:i,attrs:{to:e.to}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)],1)}),0)],1),a("v-toolbar",{attrs:{color:"amber",app:"",fixed:"","clipped-left":""}},[a("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("span",{staticClass:"title m1-3 mr-5"},[t._v("\n      Master\n      "),a("span",{staticClass:"font-weight-light"},[t._v("Mind")])]),a("v-text-field",{attrs:{name:"search",label:"Search",id:"searchbar",flat:"","hide-details":"","solo-inverted":"","prepend-inner-icon":"search"}}),a("v-spacer"),a("strong",[t._v("\n      Master Points:\n      "),a("animated-number",{staticClass:"earnedPoints",attrs:{value:t.masterPoints,duration:1e3,formatValue:t.formatToMasterPoints}})],1),a("strong",{staticClass:"ml-3"},[t._v("\n      Rango:\n      "),a("span",{staticClass:"earnedPoints"},[t._v(t._s(t.rank[1].name))])])],1),a("v-content",{staticClass:"white",attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[a("router-view")],1)],1)},v=[],b=a("cebc"),g=a("2f62"),A=a("044d"),x=a.n(A),w={components:{AnimatedNumber:x.a},data:function(){return{drawer:null,items:[{icon:"home",text:"Inicio",to:"/"},{icon:"lightbulb_outline",text:"Ideas",to:"/ideas"},{icon:"alarm",text:"Administración del tiempo",to:"/administracion-del-tiempo"},{icon:"touch_app",text:"Objetivos diarios",to:"/objetivos-diarios"},{icon:"touch_app",text:"Método Wim Hof",to:"/metodo-wim-hof"},{icon:"touch_app",text:"Método Ramón Campayo",to:{name:"campayoMethod"}},{divider:!0},{heading:"Labels"},{icon:"add",text:"Create new label"},{divider:!0},{icon:"archive",text:"Archive"},{icon:"delete",text:"Trash"},{divider:!0},{icon:"settings",text:"Settings"},{icon:"chat_bubble",text:"Trash"},{icon:"help",text:"Help"},{icon:"phonelink",text:"App downloads"},{icon:"keyboard",text:"Keyboard shortcuts"}]}},computed:Object(b["a"])({},Object(g["c"])(["rank","masterPoints"])),methods:{formatToMasterPoints:function(t){return"".concat(t.toFixed(0),"mp")}}},T=w,E=(a("ab48"),a("549c")),C=a("ce7e"),B=a("0e8f"),y=a("132d"),S=a("a722"),D=a("8860"),k=a("ba95"),j=a("40fe"),O=a("c954"),Q=a("5d23"),P=a("f774"),_=a("9910"),M=a("e0c7"),I=a("2677"),q=a("71d9"),U=a("706c"),V=Object(r["a"])(T,h,v,!1,null,null,null),L=V.exports;l()(V,{VContent:E["a"],VDivider:C["a"],VFlex:B["a"],VIcon:y["a"],VLayout:S["a"],VList:D["a"],VListTile:k["a"],VListTileAction:j["a"],VListTileAvatar:O["a"],VListTileContent:Q["a"],VListTileTitle:Q["b"],VNavigationDrawer:P["a"],VSpacer:_["a"],VSubheader:M["a"],VTextField:I["a"],VToolbar:q["a"],VToolbarSideIcon:U["a"]});var F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Ideas")])])}],K={},N=K,J=Object(r["a"])(N,F,R,!1,null,"a37859dc",null),W=J.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.goals?a("v-container",[t.countdownFinished?a("h1",{staticClass:"mb-3"},[t._v("Tu tiempo se acabo, ¿Qué tanto avanzaste hoy Víctor?")]):a("countdown",{attrs:{time:t.calculateTimeRemaining()},on:{end:function(e){return t.goalsTimeFinished()}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("code",{staticClass:"percent"},[t._v("Quedan "+t._s(e.hours)+" horas, "+t._s(e.minutes)+" minutos, "+t._s(e.seconds)+" segundos para evaluar el cumplimiento de tus objetivos.")])]}}],null,!1,2338932922)}),a("v-card",{staticClass:"mb-3"},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Resumen del día")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("ul",t._l(t.goals,function(e,i){return a("li",{key:e._id},[e.state?a("p",{},[t._v("\n              El objetivo "+t._s(i)+" fue cumplido, ganas\n              "),a("span",{staticClass:"earnedPoints"},[t._v("+100pts")])]):a("p",[t._v("\n              El objetivo "+t._s(i)+" no fue cumplido, pierdes\n              "),a("span",{staticClass:"lostPoints"},[t._v("-100pts")])])])}),0)])])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"mb-3"},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-container",[a("h3",{staticClass:"headline mb-0"},[t._v("Añadir nuevo objetivo")]),a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{sm6:"",xs12:""}},[a("v-text-field",{attrs:{label:"El dia de hoy haré..."},model:{value:t.newObjetive.description,callback:function(e){t.$set(t.newObjetive,"description",e)},expression:"newObjetive.description"}})],1),a("v-flex",{attrs:{sm6:"",xs12:""}},[a("v-text-field",{attrs:{label:"para antes de..."},model:{value:t.newObjetive.timeLimit,callback:function(e){t.$set(t.newObjetive,"timeLimit",e)},expression:"newObjetive.timeLimit"}})],1)],1),a("v-btn",{attrs:{round:"",color:"primary",dark:""},on:{click:t.addObjetive}},[t._v("Añadir objetivo")])],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("\n          Objetivos del día de hoy - cumpliste el\n          "),a("span",{staticClass:"percent"},[t._v(t._s(t.calculatePercent()?t.calculatePercent():0)+"%")])])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{expand:"",headers:t.headers,items:t.goals,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[a("v-switch",{attrs:{disabled:t.disabled,color:"red"},on:{change:function(a){return t.updateSwitch(e.item._id,e.item.state)}},model:{value:e.item.state,callback:function(a){t.$set(e.item,"state",a)},expression:"props.item.state"}})],1),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.description))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.timeLimit))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(t.formattedTime(e.item.date)))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:"",disabled:t.disabled},on:{click:function(a){return t.editItem(e.item)}}},[t._v("edit")]),a("v-icon",{attrs:{small:"",disabled:t.disabled},on:{click:function(a){return t.deleteObjetive(e.item._id)}}},[t._v("delete")])],1)]}}],null,!1,506269765)})],1)],1)],1):t._e()},G=[],z=(a("20d6"),a("ac6a"),a("407d")),Y=a.n(z),X=function(t){return JSON.parse(JSON.stringify(t))};function Z(t){var e=new Date(t),a={year:"numeric",month:"numeric",day:"numeric"};e.toLocaleDateString("es-ES",a);return e.toLocaleString()}var $=a("bc3a"),tt=a.n($),et={components:{countdown:Y.a},data:function(){return{disabled:!1,summaryStatus:!1,countdownFinished:!1,goals:null,newObjetive:{state:!1,description:"",timeLimit:"",date:Date.now()},percent:0,headers:[{text:"¿Lo hiciste?",align:"left",sortable:!1,value:"state"},{text:"Descripción",value:"description",align:"left",sortable:!1},{text:"Plazo",value:"timeLimit",align:"left",sortable:!1},{text:"Fecha",value:"date",sortable:!1,align:"center"},{text:"Acciones",value:"name",sortable:!1,align:"center"}]}},mounted:function(){this.getObjetivesAPI()},methods:Object(b["a"])({},Object(g["b"])(["updateMasterPoints"]),{goalsTimeFinished:function(){this.countdownFinished=!0,this.disabled=!0,this.summary(),this.updateStoreMasterPoints()},summary:function(){},updateStoreMasterPoints:function(){var t=this;this.goals.forEach(function(e){e.state?(console.log("actualizando puntaje positivo"),t.updateMasterPoints(100)):(console.log("actualizando puntaje negativo"),t.updateMasterPoints(-150))})},calculateTimeRemaining:function(){var t=(new Date).getTime(),e=new Date;e.setHours(22,15,0,0),e=e.getTime();var a=e-t;return a>0?a:0},calculatePercent:function(){var t=0,e=0;return this.goals.forEach(function(e){e.state&&(t+=1)}),e=(t/this.goals.length).toFixed(2),100*e},formattedTime:function(t){return Z(t)},updateSwitch:function(t,e){tt.a.put("/api/goal/".concat(t),{state:e}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},getObjetivesAPI:function(){var t=this;tt.a.get("/api/goals").then(function(e){t.goals=e.data.goals}).catch(function(t){console.log(t)})},addObjetive:function(){var t=this;tt.a.post("/api/goals",{state:this.newObjetive.state,description:this.newObjetive.description,timeLimit:this.newObjetive.timeLimit,date:Date.now()}).then(function(e){t.goals.push(X(e.data.goal)),t.clearObjetive()}).catch(function(t){console.log(t)})},deleteObjetive:function(t){var e=this;confirm("¿Seguro que deseas eliminar este objetivo?")&&tt.a.delete("/api/goal/".concat(t)).then(function(a){var i=e.goals.findIndex(function(e){return e._id==t});e.goals.splice(i,1)}).catch(function(t){console.log(t)})},clearObjetive:function(){this.newObjetive={state:!1,description:"",timeLimit:"",date:Date.now()}}})},at=et,it=(a("3d6c"),a("8336")),nt=a("b0af"),st=a("12b2"),ot=a("a523"),rt=a("8fea"),ct=a("b73d"),lt=a("2a7f"),ut=Object(r["a"])(at,H,G,!1,null,"2203a347",null),dt=ut.exports;l()(ut,{VBtn:it["a"],VCard:nt["a"],VCardTitle:st["a"],VContainer:ot["a"],VDataTable:rt["a"],VFlex:B["a"],VIcon:y["a"],VLayout:S["a"],VSwitch:ct["a"],VTextField:I["a"],VToolbar:q["a"],VToolbarTitle:lt["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(e){return a("v-flex",{key:e.id,attrs:{sm6:""}},[a("v-card",{staticClass:"white--text",attrs:{color:e.color}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.title)+" - "+t._s(100*e.percent)+"%")]),a("span",[t._v(t._s(e.description))])])]),a("v-card-actions",[t.timer?t._e():a("v-btn",{attrs:{flat:"",dark:""},on:{click:t.startTimer}},[t._v("Iniciar")]),t.timer?a("v-btn",{attrs:{flat:"",dark:""},on:{click:t.stopTimer}},[t._v("Detener")]):t._e(),t.resetButton?a("v-btn",{attrs:{flat:"",dark:""},on:{click:t.resetTimer}},[t._v("Resetear")]):t._e(),a("span",[t._v(t._s(t.minutes)+":"+t._s(t.seconds))])],1)],1)],1)}),1)],1),a("div",{staticClass:"container has-text-centered"},[a("h2",{staticClass:"title is-6"},[t._v(t._s(t.title))]),a("div",{attrs:{id:"timer"}},[a("span",{attrs:{id:"minutes"}},[t._v(t._s(t.minutes))]),a("span",{attrs:{id:"middle"}},[t._v(":")]),a("span",{attrs:{id:"seconds"}},[t._v(t._s(t.seconds))])]),a("div",{attrs:{id:"buttons"}},[t.timer?t._e():a("button",{staticClass:"button is-dark is-large",attrs:{id:"start"},on:{click:t.startTimer}},[a("i",{staticClass:"far fa-play-circle"})]),t.timer?a("button",{staticClass:"button is-dark is-large",attrs:{id:"stop"},on:{click:t.stopTimer}},[a("i",{staticClass:"far fa-pause-circle"})]):t._e(),t.resetButton?a("button",{staticClass:"button is-dark is-large",attrs:{id:"reset"},on:{click:t.resetTimer}},[a("i",{staticClass:"fas fa-undo"})]):t._e()])]),a("countdown",{attrs:{time:216e5},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("Time Remaining："+t._s(e.days)+" days, "+t._s(e.hours)+" hours, "+t._s(e.minutes)+" minutes, "+t._s(e.seconds)+" seconds.")]}}])})],1)},pt=[],ft=(a("6b54"),a("a481"),{components:{countdown:Y.a},data:function(){return{t:[0,0,0,0,0,0,0,1],displayValue:0,laps:[],cards:[],timer:null,totalTime:1500,resetButton:!1,title:"Let the countdown begin!!"}},mounted:function(){var t=this;t.load(),this.loadCards()},methods:{startTimer:function(){var t=this;this.timer=setInterval(function(){return t.countdown()},1e3),this.resetButton=!0,this.title="Greatness is within sight!!"},stopTimer:function(){clearInterval(this.timer),this.timer=null,this.resetButton=!0,this.title="Never quit, keep going!!"},resetTimer:function(){this.totalTime=1500,clearInterval(this.timer),this.timer=null,this.resetButton=!1,this.title="Let the countdown begin!!"},padTime:function(t){return(t<10?"0":"")+t},countdown:function(){this.totalTime>=1?this.totalTime--:(this.totalTime=0,this.resetTimer())},loadCards:function(){this.cards=[{id:1,title:"Dormir",description:"Dormir es bueno en todo sentido",percent:.48,timeElapsed:Date().now,limitTime:Date().now,color:"light-green"},{id:2,title:"Hacer deporte",description:"Preferiblemente en la mañana",percent:.48,timeElapsed:Date().now,limitTime:Date().now,color:"amber"},{id:3,title:"Leer",description:"Lo que sea",percent:.23,timeElapsed:Date().now,limitTime:Date().now,color:"green"},{id:4,title:"Otras actividades",description:"Facebook, youtube, agario, dota",percent:.38,timeElapsed:Date().now,limitTime:Date().now,color:"light-blue"}]},ss:function(){var t=this;t.t[t.t[2]]=(new Date).valueOf(),t.t[2]=1-t.t[2],0==t.t[2]?(clearInterval(t.t[4]),t.t[3]+=t.t[1]-t.t[0],t.laps.push({no:t.t[7]++,current:t.format(t.t[1]-t.t[0]),runningTotal:t.format(t.t[3])}),t.t[4]=t.t[1]=t.t[0]=0,t.disp()):t.t[4]=setInterval(t.disp,43)},r:function(){var t=this;t.t[2]&&t.ss(),t.t[4]=t.t[3]=t.t[2]=t.t[1]=t.t[0]=0,t.disp(),document.getElementById("lap").innerHTML="",t.t[7]=1},disp:function(){var t=this;t.t[2]&&(t.t[1]=(new Date).valueOf()),t.t[6]=t.format(t.t[3]+t.t[1]-t.t[0]),t.displayValue=t.t[6]},format:function(t){var e=this,a=new Date(t+e.t[5]).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/,"$1"),i=String(t%1e3);while(i.length<3)i="0"+i;return a+="."+i,a},load:function(){var t=this;t.t[5]=new Date(1970,1,1,0,0,0,0).valueOf(),t.t[6]=t.$refs.disp,t.disp()}},computed:{minutes:function(){var t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds:function(){var t=this.totalTime-60*this.minutes;return this.padTime(t)}}}),ht=ft,vt=(a("67ce"),a("99d9")),bt=Object(r["a"])(ht,mt,pt,!1,null,"7cdae702",null),gt=bt.exports;l()(bt,{VBtn:it["a"],VCard:nt["a"],VCardActions:vt["a"],VCardTitle:st["a"],VContainer:ot["a"],VFlex:B["a"],VLayout:S["a"]});a("1d98");var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","mb-4":""}},[a("v-flex",{attrs:{sm6:""}},[a("h1",[t._v("Registro diario")])]),a("v-flex",{attrs:{sm6:"","text-xs-right":""}},[a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.createWimhof()}}},[t._v("Crear nuevo wimHof")])],1)],1),a("v-spacer"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.wimHofs},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.index+1))]),a("td",{staticClass:"text-xs-center"},[a("router-link",{attrs:{target:"_blank",to:{name:"wimHofPage",params:{id:1}}}},[t._v(t._s(e.item.title))])],1),a("td",{staticClass:"text-xs-center"},[t._v(t._s(t.formattedDate(e.item.date)))]),a("td",{staticClass:"text-xs-center"},[a("masterChip",{attrs:{colorState:e.item.state}})],1)]}}])})],1)},xt=[],wt={data:function(){return{headers:[{text:"N°",value:"title",sortable:!1,align:"center"},{text:"Título",align:"center",sortable:!1,value:"title"},{text:"Fecha",value:"date",sortable:!1,align:"center"},{text:"Estado (g)",value:"state",sortable:!1,align:"center"}],wimHofs:[]}},mounted:function(){this.getWimhofs()},methods:{formattedDate:function(t){return Z(t)},getWimhofs:function(){var t=this;tt.a.get("/api/wimhof").then(function(e){console.log(e),t.wimHofs=e.data.payload}).catch(function(t){console.log(t)})},createWimhof:function(){var t=this;tt.a.post("/api/wimhof",{date:Date.now()}).then(function(e){console.log(e),t.wimHofs.push(e.data.payload)}).catch(function(t){console.log(t)})}}},Tt=wt,Et=Object(r["a"])(Tt,At,xt,!1,null,"2109e950",null),Ct=Et.exports;l()(Et,{VBtn:it["a"],VContainer:ot["a"],VDataTable:rt["a"],VFlex:B["a"],VLayout:S["a"],VSpacer:_["a"]});var Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Ramon campayo")])])}],St={},Dt=St,kt=Object(r["a"])(Dt,Bt,yt,!1,null,"7c2b3a16",null),jt=kt.exports;i["a"].use(f["a"]);var Ot=new f["a"]({mode:"history",base:"/",routes:[{path:"/",component:L,children:[{path:"/",name:"inicio",component:a("1d98").default},{path:"/ideas",name:"ideas",component:W},{path:"/objetivos-diarios",name:"dailyGoals",component:dt},{path:"/administracion-del-tiempo",name:"timeManagment",component:gt},{path:"/metodo-ramon-campayo",name:"campayoMethod",component:jt},{path:"/metodo-wim-hof",name:"wimHofMethod",component:Ct},{path:"/metodo-wim-hof/:id",name:"wimHofPage",component:a("30b9")}]}]});i["a"].use(g["a"]);var Qt=new g["a"].Store({state:{rank:[{id:1,name:"Mortal",minMasterPoints:0},{id:2,name:"SemiDios",minMasterPoints:100},{id:3,name:"Dios",minMasterPoints:300},{id:4,name:"Titán",minMasterPoints:600}],masterPoints:0},mutations:{updateMasterPoints:function(t,e){t.masterPoints+=e}},actions:{updateMasterPoints:function(t,e){var a=t.commit;a("updateMasterPoints",e)}}}),Pt=(a("3a10"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui text container",attrs:{id:"app"}},[a("div",{staticClass:"center aligned row"},[a("h1",[t._v("Cronómetro Tiempos de retención de aire | Respiración Wim Hof")]),a("div",{staticClass:"column"},[a("p",[t._v("\n        Tiempo transcurrido:\n        "+t._s(t.hours)+" :\n        "+t._s(t._f("zeroPad")(t.minutes))+" :\n        "+t._s(t._f("zeroPad")(t.seconds))+" :\n        "+t._s(t._f("zeroPad")(t.milliSeconds,3))+"\n      ")]),t.isRunning?t._e():a("v-btn",{attrs:{outline:"",color:"primary",dark:""},on:{click:t.startTimer}},[t._v("EMPEZAR")]),t.isRunning?a("v-btn",{attrs:{outline:"",color:"success",dark:"",disabled:!t.isRunning},on:{click:t.pushTime}},[t._v("VUELTA")]):t._e(),t.isRunning?a("v-btn",{attrs:{outline:"",color:"error",dark:"",disabled:!t.isRunning},on:{click:t.stopTimer}},[t._v("DETENER")]):t._e(),t.isRunning?a("v-btn",{attrs:{outline:"",color:"black",dark:""},on:{click:t.clearAll}},[t._v("BORRAR")]):t._e(),t.times.length?a("ul",{staticClass:"ui bulleted list"},t._l(t.times,function(e){return a("li",{staticClass:"item"},[t._v("\n          "+t._s(e.hours)+" :\n          "+t._s(t._f("zeroPad")(e.minutes))+" :\n          "+t._s(t._f("zeroPad")(e.seconds))+" :\n          "+t._s(t._f("zeroPad")(e.milliSeconds,3))+"\n        ")])}),0):t._e()],1)])])}),_t=[],Mt=(a("f576"),{data:function(){return{times:[],animateFrame:0,nowTime:0,diffTime:0,startTime:0,isRunning:!1}},methods:{setSubtractStartTime:function(t){t="undefined"!==typeof t?t:0;this.startTime=Math.floor(performance.now()-t)},startTimer:function(){var t=this;t.setSubtractStartTime(t.diffTime),function e(){t.nowTime=Math.floor(performance.now()),t.diffTime=t.nowTime-t.startTime,t.animateFrame=requestAnimationFrame(e)}(),t.isRunning=!0},stopTimer:function(){this.isRunning=!1,cancelAnimationFrame(this.animateFrame)},pushTime:function(){this.times.push({hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliSeconds:this.milliSeconds})},clearAll:function(){this.startTime=0,this.nowTime=0,this.diffTime=0,this.times=[],this.stopTimer(),this.animateFrame=0}},computed:{hours:function(){return Math.floor(this.diffTime/1e3/60/60)},minutes:function(){return Math.floor(this.diffTime/1e3/60)%60},seconds:function(){return Math.floor(this.diffTime/1e3)%60},milliSeconds:function(){return Math.floor(this.diffTime%1e3)}},filters:{zeroPad:function(t,e){e="undefined"!==typeof e?e:2;return t.toString().padStart(e,"0")}}}),It=Mt,qt=Object(r["a"])(It,Pt,_t,!1,null,"647fa48e",null),Ut=qt.exports;l()(qt,{VBtn:it["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chip",{attrs:{color:t.setColor(t.colorState),"text-color":"white"}},[t._v(t._s(t.colorState))])},Lt=[],Ft={props:["colorState"],data:function(){return{color:null}},methods:{setColor:function(t){switch(t){case"POR HACER":return"secondary";case"HACIENDO":return"primary";case"HECHO":return"green";case"NO HECHO":return"red";default:break}}}},Rt=Ft,Kt=a("cc20"),Nt=Object(r["a"])(Rt,Vt,Lt,!1,null,"a786b2d8",null),Jt=Nt.exports;l()(Nt,{VChip:Kt["a"]}),i["a"].component("chronometer",Ut),i["a"].component("masterChip",Jt),i["a"].config.productionTip=!1,new i["a"]({router:Ot,store:Qt,render:function(t){return t(p)}}).$mount("#app")},"67ce":function(t,e,a){"use strict";var i=a("4cf2"),n=a.n(i);n.a},ab48:function(t,e,a){"use strict";var i=a("ac5e"),n=a.n(i);n.a},ac5e:function(t,e,a){},ea48:function(t,e,a){}});
//# sourceMappingURL=app.abcad8fe.js.map