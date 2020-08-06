(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),r=a.n(s),o=(a(14),a(15),a(2)),c=a(1),l=a(3),u=a(4),d=a(6),h=a(5),f=(a(16),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.row,a=e.col,n=e.isFinish,s=e.isStart,r=e.isWall,o=e.onMouseDown,c=e.onMouseEnter,l=e.onMouseUp,u=n?"node-finish":s?"node-start":r?"node-wall":"";return i.a.createElement("div",{id:"node (".concat(t,",").concat(a,")"),className:"node ".concat(u),onMouseDown:function(){return o(t,a)},onMouseEnter:function(){return c(t,a)},onMouseUp:function(){return l()}})}}]),a}(n.Component));a(17);function v(e){return e.sort((function(e,t){return e.distance-t.distance}))}function g(e,t){var a=[],n=e.row,i=e.col;return n>0&&a.push(t[n-1][i]),i<t[0].length-1&&a.push(t[n][i+1]),n<t.length-1&&a.push(t[n+1][i]),i>0&&a.push(t[n][i-1]),a.filter((function(e){return!e.isVisited}))}function m(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}function p(e){for(var t=[],a=e;null!==a;)t.unshift(a),a=a.previousNode;return t}function y(e,t,a){var n=[],i=function(e){var t,a=[],n=Object(c.a)(e);try{for(n.s();!(t=n.n()).done;){var i,s=t.value,r=Object(c.a)(s);try{for(r.s();!(i=r.n()).done;){var o=i.value;a.push(o)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(e);for(t.distance=0;i.length;){var s=v(i).shift();if(!s.isWall){if(s.distance===1/0)return n;if(s.isVisited=!0,n.push(s),s===a)return n;var r,o=g(s,e),l=Object(c.a)(o);try{for(l.s();!(r=l.n()).done;){var u=r.value;u.distance=s.distance+1,u.previousNode=s}}catch(d){l.e(d)}finally{l.f()}}}}function b(e,t){var a=[],n=e.row,i=e.col;return n>0&&a.push(t[n-1][i]),i<t[0].length-1&&a.push(t[n][i+1]),n<t.length-1&&a.push(t[n+1][i]),i>0&&a.push(t[n][i-1]),a}var k=10,E=10,w=10,S=40,j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={grid:[],mouseIsPressed:!1,specialNodePressed:"none",currentAlgorithm:"dijkstra"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=N();this.setState({grid:e})}},{key:"handleMouseDown",value:function(e,t){if(!0!==document.getElementById("viz-btn").disabled){var a=this.state.grid[e][t];if(a.isStart){var n=O(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0,specialNodePressed:"start"})}else if(a.isFinish){var i=B(this.state.grid,e,t);this.setState({grid:i,mouseIsPressed:!0,specialNodePressed:"finish"})}else{var s=A(this.state.grid,e,t);this.setState({grid:s,mouseIsPressed:!0})}}}},{key:"handleMouseEnter",value:function(e,t){var a=document.getElementById("viz-btn");if(this.state.mouseIsPressed&&!0!==a.disabled)if("start"===this.state.specialNodePressed){var n=O(this.state.grid,e,t);this.setState({grid:n})}else if("finish"===this.state.specialNodePressed){var i=B(this.state.grid,e,t);this.setState({grid:i})}else{var s=A(this.state.grid,e,t);this.setState({grid:s})}}},{key:"handleMouseUp",value:function(e,t){if("start"===this.state.specialNodePressed){var a=O(this.state.grid,e,t);this.setState({grid:a})}else if("finish"===this.state.specialNodePressed){var n=B(this.state.grid,e,t);this.setState({grid:n})}this.setState({mouseIsPressed:!1,specialNodePressed:"none"})}},{key:"updateStartNode",value:function(){}},{key:"toggleInputs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.getElementById("navbar"),a=t.getElementsByTagName("button");if(!0===e){var n,i=Object(c.a)(a);try{for(i.s();!(n=i.n()).done;){var s=n.value;s.disabled=!0}}catch(u){i.e(u)}finally{i.f()}}else{var r,o=Object(c.a)(a);try{for(o.s();!(r=o.n()).done;){var l=r.value;l.disabled=!1}}catch(u){o.e(u)}finally{o.f()}}}},{key:"animateShortestPath",value:function(e){for(var t=this,a=function(a){setTimeout((function(){var n=e[a];e.length>1?0===a?document.getElementById("node (".concat(n.row,",").concat(n.col,")")).className="node start-node-shortest-path":a===e.length-1?(document.getElementById("node (".concat(n.row,",").concat(n.col,")")).className="node finish-node-shortest-path",t.toggleInputs(!1)):document.getElementById("node (".concat(n.row,",").concat(n.col,")")).className="node node-shortest-path":t.toggleInputs(!1)}),30*a)},n=0;n<e.length;n++)a(n)}},{key:"animateAlgorithm",value:function(e,t){var a=this;this.toggleInputs(!0);for(var n=function(n){if(n===e.length)return setTimeout((function(){a.animateShortestPath(t)}),10*n),{v:void 0};setTimeout((function(){var a=e[n];0===n?document.getElementById("node (".concat(a.row,",").concat(a.col,")")).className="node start-node-visited":n===e.length-1&&t.length>1?document.getElementById("node (".concat(a.row,",").concat(a.col,")")).className="node finish-node-visited":document.getElementById("node (".concat(a.row,",").concat(a.col,")")).className="node node-visited"}),10*n)},i=0;i<=e.length;i++){var s=n(i);if("object"===typeof s)return s.v}}},{key:"visualizeDijkstra",value:function(e,t,a){var n=y(e,t,a),i=p(a);this.animateAlgorithm(n,i)}},{key:"visualizeDFS",value:function(e,t,a){var n=function(e,t,a){var n=[],i=[];for(i.push(t);i.length;){var s=i.pop();if(!s.isWall){if(n.push(s),s===a)return n;if(!1===s.isVisited){s.isVisited=!0;var r,o=g(s,e),l=Object(c.a)(o);try{for(l.s();!(r=l.n()).done;){var u=r.value;i.push(u),u.previousNode=s}}catch(d){l.e(d)}finally{l.f()}}}}return n}(e,t,a),i=p(a);this.animateAlgorithm(n,i)}},{key:"visualizeBFS",value:function(e,t,a){var n=function(e,t,a){var n=[],i=[];for(i.push(t);i.length;){var s=i.shift();if(!s.isWall){if(n.push(s),s===a)return n;if(!1===s.isVisited){s.isVisited=!0;var r,o=g(s,e),l=Object(c.a)(o);try{for(l.s();!(r=l.n()).done;){var u=r.value;i.push(u),u.previousNode=s}}catch(d){l.e(d)}finally{l.f()}}}}return n}(e,t,a),i=p(a);this.animateAlgorithm(n,i)}},{key:"visualizeGreedyBFS",value:function(e,t,a){var n=function(e,t,a,n){var i=[],s=[];for(s.push(t);s.length;){var r=s.shift();if(!r.isWall){if(i.push(r),r===a)return i;if(!1===r.isVisited){r.isVisited=!0;var o,l=g(r,e),u=Object(c.a)(l);try{for(u.s();!(o=u.n()).done;){var d=o.value;s.push(d),d.previousNode=r,s.sort((function(e,t){return n(e,a)-n(t,a)}))}}catch(h){u.e(h)}finally{u.f()}}}}return i}(e,t,a,m),i=p(a);this.animateAlgorithm(n,i)}},{key:"visualizeAStar",value:function(e,t,a){var n=function(e,t,a,n){var i=[],s=[];for(s.push(t);s.length;){for(var r=0,o=0;o<s.length;o++)s[o].f<s[r].f&&(r=o);var l=s[r];if(l.isVisited=!0,i.push(l),l===a)return i;s.splice(r,1);var u,d=b(l,e),h=Object(c.a)(d);try{for(h.s();!(u=h.n()).done;){var f=u.value,v=l.g+1,g=!1;f in i||f.isWall||(f.isVisited?v<f.g&&(g=!0):(g=!0,f.h=n(f,a),f.isVisited=!0,s.push(f)),g&&(f.previousNode=l,f.g=v,f.f=f.g+f.h))}}catch(m){h.e(m)}finally{h.f()}}return i}(e,t,a,m),i=p(a);this.animateAlgorithm(n,i)}},{key:"visualizeAlgorithm",value:function(){this.clearGrid(!0);var e=this.state.grid,t=e[k][E],a=e[w][S];switch(this.state.currentAlgorithm){case"dijkstra":this.visualizeDijkstra(e,t,a);break;case"dfs":this.visualizeDFS(e,t,a);break;case"bfs":this.visualizeBFS(e,t,a);break;case"greedy-bfs":this.visualizeGreedyBFS(e,t,a);break;case"a-star":this.visualizeAStar(e,t,a)}this.showAlgoDescription()}},{key:"changeCurrentAlgo",value:function(){var e=document.getElementById("algorithm-select");switch(e.options[e.selectedIndex].value){case"dijkstra":this.setState({currentAlgorithm:"dijkstra"});break;case"dfs":this.setState({currentAlgorithm:"dfs"});break;case"bfs":this.setState({currentAlgorithm:"bfs"});break;case"greedy-bfs":this.setState({currentAlgorithm:"greedy-bfs"});break;case"a-star":this.setState({currentAlgorithm:"a-star"})}}},{key:"resetNode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.distance=1/0,e.isVisited=!1,e.previousNode=null,t||(e.isWall=!1)}},{key:"clearGrid",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=this.state.grid,n=Object(c.a)(a);try{for(n.s();!(e=n.n()).done;){var i,s=e.value,r=Object(c.a)(s);try{for(r.s();!(i=r.n()).done;){var o=i.value;if(o.row===k&&o.col===E)document.getElementById("node (".concat(o.row,",").concat(o.col,")")).className="node node-start";else if(o.row===w&&o.col===S)document.getElementById("node (".concat(o.row,",").concat(o.col,")")).className="node node-finish";else{if(o.isWall&&t)continue;document.getElementById("node (".concat(o.row,",").concat(o.col,")")).className="node "}this.resetNode(o,t)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){n.e(l)}finally{n.f()}}},{key:"showAlgoDescription",value:function(){var e,t=this.state.currentAlgorithm,a=document.getElementById("algo-desc").getElementsByTagName("*"),n="".concat(t,"-desc"),i=Object(c.a)(a);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.id===n?s.style.display="block":s.style.display="none"}}catch(r){i.e(r)}finally{i.f()}}},{key:"githubLink",value:function(){window.open("https://github.com/vincent-ngo31/pathfinding-visualizer")}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.mouseIsPressed;return i.a.createElement("div",{id:"page"},i.a.createElement("div",{id:"navbar"},i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Pathfinding Visualizer")),i.a.createElement("div",{id:"algo-select-package"},i.a.createElement("label",{id:"algo-select-label"},"Choose an algorithm:"),i.a.createElement("select",{id:"algorithm-select",onChange:function(){return e.changeCurrentAlgo()}},i.a.createElement("option",{value:"dijkstra"},"Dijkstra's Algorithm"),i.a.createElement("option",{value:"dfs"},"Depth-first Search"),i.a.createElement("option",{value:"bfs"},"Breadth-first Search"),i.a.createElement("option",{value:"greedy-bfs"},"Greedy Best-first Search"),i.a.createElement("option",{value:"a-star"},"A* Search"))),i.a.createElement("button",{id:"viz-btn",onClick:function(){return e.visualizeAlgorithm()}},"Visualize!"),i.a.createElement("button",{id:"clear-btn",onClick:function(){return e.clearGrid()}},"Clear Grid"),i.a.createElement("button",{id:"src-btn",onClick:function(){return e.githubLink()}},"Source Code")),i.a.createElement("p",{id:"instructions"},'Instructions: Choose an algorithm. You can draw "walls" or change the positions of the start and end nodes by clicking and dragging your mouse across the grid. Click the "Visualize!" button to see the algorithm explore the grid and find a path from the start node to the end node.'),i.a.createElement("header",{id:"algo-desc"},i.a.createElement("h3",{id:"dijkstra-desc"},"Dijkstra's algorithm is a weighted search algorithm\xa0that guarantees the shortest path!"),i.a.createElement("h3",{id:"dfs-desc"},"Depth-first search is an weighted search algorithm\xa0that does not guarantee the shortest path!"),i.a.createElement("h3",{id:"bfs-desc"},"Breadth-first search is an unweighted search algorithm\xa0that guarantees the shortest path!"),i.a.createElement("h3",{id:"greedy-bfs-desc"},"Greedy best-first search is a weighted search algorithm\xa0that does not guarantee the shortest path!"),i.a.createElement("h3",{id:"a-star-desc"},"A* search is a weighted search algorithm\xa0that guarantees the shortest path!")),i.a.createElement("div",{id:"grid"},a.map((function(t,a){return i.a.createElement("div",{key:a,className:"row"},t.map((function(t,a){var s=t.row,r=t.col,o=t.isFinish,c=t.isStart,l=t.isWall;return i.a.createElement(f,{key:a,row:s,col:r,isFinish:o,isStart:c,isWall:l,mouseIsPressed:n,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(){return e.handleMouseUp(s,r)}})})))}))))}}]),a}(n.Component),N=function(){for(var e=[],t=0;t<20;t++){for(var a=[],n=0;n<50;n++)a.push(I(t,n));e.push(a)}return e},I=function(e,t){return{row:e,col:t,isStart:e===k&&t===E,isFinish:e===w&&t===S,distance:1/0,isVisited:!1,isWall:!1,previousNode:null,g:0,h:0,f:0}},A=function(e,t,a){var n=e.slice(),i=n[t][a],s=Object(o.a)(Object(o.a)({},i),{},{isWall:!0});return n[t][a]=s,n},O=function(e,t,a){var n=e.slice();n[k][E].isStart=!1,k=t,E=a;var i=n[t][a],s=Object(o.a)(Object(o.a)({},i),{},{isStart:!0});return n[t][a]=s,n},B=function(e,t,a){var n=e.slice();n[w][S].isFinish=!1;var i=n[t][a],s=Object(o.a)(Object(o.a)({},i),{},{isFinish:!0});return n[t][a]=s,w=t,S=a,n};var z=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.cf019ea5.chunk.js.map