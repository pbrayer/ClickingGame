(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://wow.zamimg.com/uploads/screenshots/normal/661504-battle-net-avatars.jpg"},{id:2,image:"https://wow.zamimg.com/uploads/screenshots/small/661524.jpg"},{id:3,image:"https://wow.zamimg.com/uploads/screenshots/small/661531.jpg"},{id:4,image:"https://wow.zamimg.com/uploads/screenshots/small/661550.jpg"},{id:5,image:"https://wow.zamimg.com/uploads/screenshots/small/661566.jpg"},{id:6,image:"https://wow.zamimg.com/uploads/screenshots/small/661585.jpg"},{id:7,image:"https://wow.zamimg.com/uploads/screenshots/small/661540.jpg"},{id:8,image:"https://wow.zamimg.com/uploads/screenshots/small/661545.jpg"},{id:9,image:"https://wow.zamimg.com/uploads/screenshots/small/661563.jpg"}]},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),c=a.n(o),r=a(3),i=a(4),l=a(7),m=a(5),u=a(8);a(15);var p=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("span",null,"Best Clicky Game 2019"))};a(16);var h=function(e){return s.a.createElement("main",Object.assign({className:"wrapper"},e))},g=a(6);a(17);var d=function(e){return s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image,width:"200",height:"200",onClick:function(){return e.randomizePics(e.id)},className:"remove"}))},f=[],w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={pics:g,score:0,topScore:0},a.handleScoreChange=function(){a.setState({score:a.state.score+1})},a.handleTopScoreChange=function(){a.state.score>=a.state.topScore&&a.setState({topScore:a.state.score})},a.randomizePics=function(e){f.includes(e)?(alert("You lose!"),f=[],a.setState({score:0}),a.handleTopScoreChange()):(f.push(e),a.handleScoreChange());var t=a.shuffle(a.state.pics);console.log(t),a.setState({pics:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"shuffle",value:function(e){for(var t=this.state.pics.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("h1",null,"Best Clicky Game 2019"),s.a.createElement("hr",null),s.a.createElement("h4",null,"Click on an image below to get started"),s.a.createElement("h4",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),s.a.createElement(h,null,this.state.pics.map(function(t){return s.a.createElement(d,{randomizePics:e.randomizePics,id:t.id,image:t.image})})),s.a.createElement(p,null))}}]),t}(n.Component);a(18);c.a.render(s.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.17cf3ecf.chunk.js.map