(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(13),n(1)),i=n(4),l=n(5),u=n(7),m=n(6),h=(n(14),n(15),n(16),function(e){var t=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{className:"profileImg",alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email))}),d=function(e){var t=e.monsters;return r.a.createElement("div",{className:"cardList"},t.map((function(e){return r.a.createElement(h,{monster:e,key:e.id})})))},f=(n(17),function(e){var t=e.placeHolder,n=e.onChange,a=e.value;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n,value:a})}),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[{name:"Frankenstein",id:"1"},{name:"Dracula",id:"2"},{name:"Zombie",id:"3"}],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"handleChange",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{searchField:e}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{class:"title"},"Monsters Rolodex"),r.a.createElement(f,{placeHolder:"search monsters",onChange:function(t){return e.handleChange(t.target.value)},value:this.state.searchField}),r.a.createElement(d,{monsters:o}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3a997327.chunk.js.map