(this.webpackJsonpalgoviz=this.webpackJsonpalgoviz||[]).push([[0],{16:function(t,e,n){t.exports=n(30)},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(14),i=n.n(a),s=(n(21),n(15)),c=n(8),l=n(3),u=n(4),h=n(6),b=n(5),d=n(2),m=n(7),v=(n(22),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(b.a)(e).call(this,t))).handleSelectChange=function(t){n.setState({selectedSort:t.target.value})},n.state={selectedSort:"",sortingMethods:{bubble:n.props.bubbleSort}},n.addColumn=n.addColumn.bind(Object(d.a)(n)),n.bubbleSort=n.bubbleSort.bind(Object(d.a)(n)),n.clearContent=n.clearContent.bind(Object(d.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(d.a)(n)),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"addColumn",value:function(t){this.props.columnArr.push({boxes:[1]}),this.props.updateColumnArr(this.props.columnArr)}},{key:"bubbleSort",value:function(t){this.props.bubbleSort()}},{key:"clearContent",value:function(){this.props.clearContent()}},{key:"render",value:function(){return r.a.createElement("div",{className:"algo-navbar"},r.a.createElement("button",{className:"algo-navbar-button",onClick:this.clearContent},"Clear"),r.a.createElement("button",{className:"algo-navbar-button",onClick:this.addColumn},"Add Column"),r.a.createElement("select",{name:"sorts",id:"sort-select",className:"algo-navbar-select",onChange:this.handleSelectChange},r.a.createElement("option",{value:""},"Choose a sorting method"),r.a.createElement("option",{value:"bubble"},"Bubble")),r.a.createElement("button",{className:"algo-navbar-button",disabled:!this.state.selectedSort,onClick:this.state.sortingMethods[this.state.selectedSort]},"Sort!"))}}]),e}(r.a.Component)),y=function(t){function e(t){return Object(l.a)(this,e),Object(h.a)(this,Object(b.a)(e).call(this,t))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.active?"algo-viz-square active-square":"algo-viz-square"})}}]),e}(r.a.Component),C=(n(23),n(10)),p=n(9),g=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(b.a)(e).call(this,t))).state={boxArr:t.column.boxes},n.addColumnBox=n.addColumnBox.bind(Object(d.a)(n)),n.subtractColumnBox=n.subtractColumnBox.bind(Object(d.a)(n)),n.removeIndividualColumn=n.removeIndividualColumn.bind(Object(d.a)(n)),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({boxArr:t.column.boxes})}},{key:"addColumnBox",value:function(){this.state.boxArr.push(this.state.boxArr.length+1),this.setState({boxArr:this.state.boxArr}),this.props.onAddBox(this.props.index,this.state.boxArr)}},{key:"subtractColumnBox",value:function(){this.state.boxArr.splice(this.state.boxArr.length-1,1),this.setState({boxArr:this.state.boxArr})}},{key:"removeIndividualColumn",value:function(){this.props.removeIndividualColumn(this.props.index)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"algo-viz-column-container"},r.a.createElement("button",{className:"algo-column-button",onClick:this.removeIndividualColumn},r.a.createElement(C.a,{className:"button-icon",icon:p.c})),r.a.createElement("div",{className:this.props.active?"algo-viz-column active-column":"algo-viz-column"},this.state.boxArr.map((function(e){return r.a.createElement(y,{key:e,active:t.props.active})}))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},r.a.createElement("button",{className:"algo-column-button button-icon",onClick:this.addColumnBox},"+"),r.a.createElement("button",{className:"algo-column-button button-icon",onClick:this.subtractColumnBox},"-")))}}]),e}(r.a.Component);n(29);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}n(11).b.add(p.a,p.b);var O=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(b.a)(e).call(this,t))).state={columnArr:[],sortedColumnArr:[]},n.history=[],n.historyTracker=0,n.onAddBox=n.onAddBox.bind(Object(d.a)(n)),n.handleAddColumn=n.handleAddColumn.bind(Object(d.a)(n)),n.bubbleSort=n.bubbleSort.bind(Object(d.a)(n)),n.incrementHistory=n.incrementHistory.bind(Object(d.a)(n)),n.decrementHistory=n.decrementHistory.bind(Object(d.a)(n)),n.clearContent=n.clearContent.bind(Object(d.a)(n)),n.goToStart=n.goToStart.bind(Object(d.a)(n)),n.goToEnd=n.goToEnd.bind(Object(d.a)(n)),n.removeIndividualColumn=n.removeIndividualColumn.bind(Object(d.a)(n)),n.clearSortedContent=n.clearSortedContent.bind(Object(d.a)(n)),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"onAddBox",value:function(t,e){var n=Object(c.a)(this.state.columnArr),o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n[t]);o.boxes=e,n[t]=o,this.state.sortedColumnArr.length>0&&this.clearSortedContent(),this.setState({columnArr:n})}},{key:"handleAddColumn",value:function(t){this.setState({columnArr:t})}},{key:"bubbleSort",value:function(){var t=Object(c.a)(this.state.columnArr),e=t.length,n=Object(c.a)(this.history);this.history=[],this.history.push(Object(c.a)(t));for(var o=0;o<e-1;o++)for(var r=0;r<e-1;r++)if(t[r].boxes.length>t[r+1].boxes.length){var a=t[r];t[r]=t[r+1],t[r+1]=a,this.history.push(Object(c.a)(t))}0===n.length&&(this.historyTracker=this.history.length-1),this.goToEnd()}},{key:"incrementHistory",value:function(){this.historyTracker++,this.setState({sortedColumnArr:Object(c.a)(this.history[this.historyTracker])})}},{key:"goToEnd",value:function(){this.historyTracker=this.history.length-1,this.setState({sortedColumnArr:this.history[this.historyTracker]})}},{key:"decrementHistory",value:function(){this.historyTracker--,this.setState({sortedColumnArr:this.history[this.historyTracker]})}},{key:"goToStart",value:function(){this.historyTracker=0,this.setState({sortedColumnArr:this.history[this.historyTracker]})}},{key:"clearContent",value:function(){this.setState({columnArr:[],sortedColumnArr:[]}),this.history=[],this.historyTracker=0}},{key:"clearSortedContent",value:function(){this.setState({sortedColumnArr:[]}),this.history=[],this.historyTracker=0}},{key:"removeIndividualColumn",value:function(t){var e=Object(c.a)(this.state.columnArr);e.splice(t,1),this.setState({columnArr:e})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v,{updateColumnArr:this.handleAddColumn,updateBoxArr:this.handleAddBox,boxArr:this.state.boxArr,columnArr:this.state.columnArr,bubbleSort:this.bubbleSort,clearContent:this.clearContent}),r.a.createElement("div",{className:"algo-viz-content"},r.a.createElement("div",{className:"algo-viz-content-unsorted"},this.state.columnArr.map((function(e,n){return r.a.createElement(g,{key:n,index:n,column:t.state.columnArr[n],onAddBox:t.onAddBox,removeIndividualColumn:t.removeIndividualColumn})}))),r.a.createElement("div",{className:"algo-viz-content-sorted"},r.a.createElement("div",{className:"sorted-columns"},this.state.sortedColumnArr.map((function(e,n){return r.a.createElement(g,{key:n+"sorted",index:n,column:t.state.sortedColumnArr[n],active:t.history[t.historyTracker][n].active})}))),r.a.createElement("div",{className:"algo-history-buttons"},r.a.createElement("button",{className:"history-button",style:{fontWeight:"bold"},disabled:0===this.historyTracker,onClick:this.goToStart},"START"),r.a.createElement("button",{className:"history-button",disabled:0===this.historyTracker,onClick:this.decrementHistory},r.a.createElement(C.a,{icon:p.a})),r.a.createElement("button",{className:"history-button",disabled:this.historyTracker===this.history.length-1||0===this.history.length,onClick:this.incrementHistory},r.a.createElement(C.a,{icon:p.b})),r.a.createElement("button",{className:"history-button",style:{fontWeight:"bold"},disabled:this.historyTracker===this.history.length-1||0===this.history.length,onClick:this.goToEnd},"END")))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d6460003.chunk.js.map