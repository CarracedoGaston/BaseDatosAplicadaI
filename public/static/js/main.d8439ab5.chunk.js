(this.webpackJsonptestfetch=this.webpackJsonptestfetch||[]).push([[0],{21:function(e,t,n){},26:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),c=n.n(i),s=(n(31),n(11)),l=n(12),o=n(14),u=n(13),m=n(6),d=n(15),p=(n(32),n(21),n(33),n(7));var h=function(){return r.a.createElement("ul",null,r.a.createElement(p.b,{to:"/escribano",className:"link"},r.a.createElement("li",null,"Escribanos")),r.a.createElement(p.b,{to:"/cliente",className:"link"},r.a.createElement("li",null,"Clientes")),r.a.createElement(p.b,{to:"/localidad",className:"link"},r.a.createElement("li",null,"Localidades")),r.a.createElement(p.b,{to:"/escritura",className:"link"},r.a.createElement("li",null,"Escrituras")))},E=n(10),f=n.n(E),b=n(19),v=(n(40),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={person:[],url:"http://localhost:".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||5e3,"/api/"),cliente:[],escribano:[],urlProps:n.props.url,color:null,biggestEscribano:0,estadoCliente:!1,clientSold:[]},n.BiggestEscribano=n.BiggestEscribano.bind(Object(m.a)(n)),n.ClientHowSold=n.ClientHowSold.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,n,a,r,i,c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.state.url).concat(this.props.url),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,this.setState({person:a}),e.next=10,fetch("".concat(this.state.url,"cliente"));case 10:return r=e.sent,e.next=13,r.json();case 13:return i=e.sent,this.setState({cliente:i}),e.next=17,fetch("".concat(this.state.url,"escribano"));case 17:return c=e.sent,e.next=20,c.json();case 20:s=e.sent,this.setState({escribano:s});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.url===t.url){e.next=9;break}return n="".concat(this.state.url).concat(this.props.url),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,this.setState({person:r});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"nameColumn",value:function(){return r.a.createElement("div",{id:"name"},r.a.createElement("div",{className:"title"},"Name"),this.state.person.map((function(e){return r.a.createElement("div",{key:e._id,className:"nameRow"},"".concat(e.name))})))}},{key:"lastNameColumn",value:function(){return r.a.createElement("div",{id:"lastName"},r.a.createElement("div",{className:"title"},"Last Name"),this.state.person.map((function(e){return r.a.createElement("div",{key:e._id,className:"lastNameRow"},e.lastName)})))}},{key:"cpColumn",value:function(){return r.a.createElement("div",{id:"cp"},r.a.createElement("div",{className:"title"},"Postal Code"),this.state.person.map((function(e){return r.a.createElement("div",{key:e._id,className:"codigoRow"},"".concat(e.codigo))})))}},{key:"escrituraTipo",value:function(){var e=this;return r.a.createElement("div",{id:"escritura"},r.a.createElement("div",{id:"tipo"},r.a.createElement("div",{className:"title"},"Tipo"),this.state.person.map((function(e){return r.a.createElement("div",{key:e._id,className:"tipoRow"},"".concat(e.tipo))}))),r.a.createElement("div",{id:"desc"},r.a.createElement("div",{className:"title"},"Descripcion"),this.state.person.map((function(e){return r.a.createElement("div",{key:e._id,className:"descRow"},"".concat(e.descripcion))}))),r.a.createElement("div",{id:"cliente"},r.a.createElement("div",{className:"title"},"Cliente"),this.state.person.map((function(t){return e.state.clientSold.indexOf(t.cliente)>=0?r.a.createElement("div",{key:t._id,className:"clienteRow",style:{backgroundColor:"green"}},e.state.cliente.filter((function(e){return e._id===t.cliente})).map((function(e){return e.lastName}))):r.a.createElement("div",{key:t._id,className:"clienteRow",style:{backgroundColor:""}},e.state.cliente.filter((function(e){return e._id===t.cliente})).map((function(e){return e.lastName})))}))),r.a.createElement("div",{id:"escribano"},r.a.createElement("div",{className:"title"},"Escribano"),this.state.person.map((function(t){return t.escribano===e.state.biggestEscribano?r.a.createElement("div",{key:t._id,className:"escribanoRow",style:{backgroundColor:"green"}},e.state.escribano.filter((function(e){return e._id===t.escribano})).map((function(e){return e.lastName}))):r.a.createElement("div",{key:t._id,className:"escribanoRow",style:{backgroundColor:""}},e.state.escribano.filter((function(e){return e._id===t.escribano})).map((function(e){return e.lastName})))}))))}},{key:"jsxTable",value:function(){switch(this.props.url){case"localidad":return this.cpColumn();case"escritura":return this.escrituraTipo();default:return this.lastNameColumn()}}},{key:"BiggestEscribano",value:function(){for(var e=this,t=this.state.person.map((function(t){return e.state.escribano.filter((function(e){return e._id===t.escribano})).map((function(e){return e.lastName}))})),n={lastname:"",count:0},a=0,r=0;r<t.length;r++){for(var i=0;i<t.length;i++)t[i][0]===t[r][0]&&a++;a>n.count&&(n.count=a,n.lastname=t[r][0]),a=0}this.state.escribano.forEach((function(t){if(t.lastName===n.lastname)return e.setState({biggestEscribano:t._id})})),0!==this.state.biggestEscribano&&this.setState({biggestEscribano:0})}},{key:"ClientHowSold",value:function(){if(!1===this.state.estadoCliente){var e=[];console.log(this.state.clientSold);for(var t=0;t<this.state.person.length;t++)"Venta"===this.state.person[t].tipo&&e.push(this.state.person[t].cliente);this.setState({clientSold:e}),this.setState({estadoCliente:!0})}else this.setState({clientSold:[]}),this.setState({estadoCliente:!1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"table"},"escritura"!==this.props.url?this.nameColumn():null,this.jsxTable()),"escritura"===this.props.url?r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.BiggestEscribano},"Escribano con mas escrituras"),r.a.createElement("button",{onClick:this.ClientHowSold},"Clientes que vendieron")):null)}}]),t}(r.a.Component)),g=n(5);var k=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{id:"container"},r.a.createElement("header",null,r.a.createElement("span",null,"Base de Datos Aplicada I")),r.a.createElement("nav",null,r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return r.a.createElement("div",{className:"TitleInit"},r.a.createElement("h1",{style:{color:"white",fontFamily:"monospace"}},"Esperando consulta..."))}}),r.a.createElement(g.a,{path:"/cliente",render:function(e){return r.a.createElement(v,Object.assign({},e,{url:"cliente"}))}}),r.a.createElement(g.a,{path:"/escribano",render:function(e){return r.a.createElement(v,Object.assign({},e,{url:"escribano"}))}}),r.a.createElement(g.a,{path:"/localidad",render:function(e){return r.a.createElement(v,Object.assign({},e,{url:"localidad"}))}}),r.a.createElement(g.a,{path:"/escritura",render:function(e){return r.a.createElement(v,Object.assign({},e,{url:"escritura"}))}}))),r.a.createElement("footer",null,r.a.createElement("span",null,"Azzaretti && Carracedo"))))},N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={validation:!1},n.login=n.login.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"login",value:function(){var e=document.getElementById("nameLogin").value,t=document.getElementById("passwordLogin").value;"mauri"===e&&"1234"===t&&this.setState({validation:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!1===this.state.validation?r.a.createElement("div",{id:"loginContainer"},r.a.createElement("div",{id:"form"},r.a.createElement("input",{id:"nameLogin",placeholder:"Your name.."}),r.a.createElement("input",{id:"passwordLogin",placeholder:"Your password.."}),r.a.createElement("button",{className:"buttonLogin",onClick:this.login},"Login"))):r.a.createElement(k,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d8439ab5.chunk.js.map