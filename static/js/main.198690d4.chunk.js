(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},22:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),s=(a(19),a(1)),l=a.n(s),o=a(2),m=a(7),u=a(8),d=a(11),f=a(9),p=a(12),h=(a(22),function(){var e=Object(o.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),v=a(10),E=function(e){return r.a.createElement(v.Spring,{from:{transform:"scale(0)"},to:{transform:"scale(1)"},enter:{opacity:0},leave:{opacity:1},config:{duration:200,delay:200}},function(t){return r.a.createElement("div",{key:e.id,className:"user",style:t},r.a.createElement("div",{className:"card__main"},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card__header"},e.name),r.a.createElement("p",{className:"list-item"},e.gender),r.a.createElement("p",{className:"list-item"},e.species))))})},N=a(3),b=(a(37),function(e){var t=e.handleSort,a=e.handleSearch,n=e.handleFilter,c=function(e){var a=e.target;t(Object(N.a)({},a.name,function(){if(a.checked&&"radio"===a.type)return a.value}()))},i=function(e){var t=e.target;n(Object(N.a)({},t.name,function(){if(t.checked&&"radio"===t.type)return t.value}()))};return r.a.createElement("form",{className:"form__main"},r.a.createElement("div",{className:"radio-buttons"},r.a.createElement("div",{className:"sort-asc-desc"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sortAscDesc",id:"inlineRadio1",value:"asc",onChange:c}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio1"},"Sort by Asc")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sortAscDesc",id:"inlineRadio2",value:"desc",onChange:c}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio2"},"Sort by Desc"))),r.a.createElement("div",{className:"sort-asc-desc"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"filterSpecies",id:"inlineRadio3",value:"human",onChange:i}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio3"},"Filter by Human")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"filterSpecies",id:"inlineRadio4",value:"alien",onChange:i}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio4"},"Filter by Alien")))),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"change",placeholder:"search by name... ","aria-label":"Recipient's username","aria-describedby":"button-addon2",onChange:function(e){var t=e.target,n="change"===t.name?t.value:"";a(Object(N.a)({},t.name,n))}})))}),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).handleClickNext=function(){h(a.state.nextApiUrl).then(function(e){a.setState({list:e.results,nextApiUrl:e.info.next,prevApiUrl:e.info.prev})})},a.handleClickPrev=function(){h(a.state.prevApiUrl).then(function(e){a.setState({list:e.results,data:e,nextApiUrl:e.info.next,prevApiUrl:e.info.prev})})},a.performSearch=function(e){var t=e.change;a.setState({change:t})},a.performSort=function(e){var t=e.sortAscDesc;a.setState({sortAscDesc:t})},a.performFilter=function(e){var t=e.filterSpecies;a.setState({filterSpecies:t})},a.sortByAsc=function(e){return e.sort(function(e,t){return e.name<t.name?-1:1})},a.sortByDesc=function(e){return e.sort(function(e,t){return e.name<t.name?1:-1})},a.sortPersons=function(e,t){return"desc"===t?e.sort(function(e,t){return e.name<t.name?1:-1}):e.sort(function(e,t){return e.name<t.name?-1:1})},a.filterByName=function(e,t){return e.filter(function(e){return e.name.includes(t)})},a.filterBySpecies=function(e,t){return e.filter(function(e){return e.species===t})},a.state={list:null,filterSpecies:null,sortAscDesc:null,isLoaded:!1,change:null,notFound:null,currentApiUrl:"https://rickandmortyapi.com/api/character",nextApiUrl:"",prevApiUrl:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(this.state.currentApiUrl);case 2:t=e.sent,this.setState({list:t.results,data:t,nextApiUrl:t.info.next,isLoaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.list,a=e.isLoaded,n=e.notFound,c=e.change,i=e.sortAscDesc,s=e.filterSpecies,l=e.prevApiUrl,o=e.nextApiUrl,m=t;return i&&(m=this.sortPersons(t,i)),s&&(m="human"===s?this.filterBySpecies(t,"Human"):this.filterBySpecies(t,"Alien")),c&&(m=this.filterByName(t,c)),a?n?r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"pulse"})):r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"main-section"},r.a.createElement("aside",{className:"filter"},r.a.createElement("div",{className:"buttons-group"},r.a.createElement("button",{className:"button",onClick:this.handleClickPrev,disabled:!l},"\u2190 Prev Page"),r.a.createElement("button",{className:"button",onClick:this.handleClickNext,disabled:!o},"Next Page \u2192")),r.a.createElement(b,{handleSearch:this.performSearch,handleSort:this.performSort,handleFilter:this.performFilter})),r.a.createElement("div",{className:"users-wrap"},r.a.createElement("div",{className:"users"},m.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))})),0===m.length?r.a.createElement("div",{className:"not-found"},"Oops, Nothing found"," ",r.a.createElement("span",{role:"img","aria-label":"img"},"\ud83d\ude31")):null))):r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"pulse"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.198690d4.chunk.js.map