(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[0],{27:function(e,t,r){},28:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r(0),a=r.n(n),c=r(18),i=r.n(c),u=r(19),o=r(2),l=(r(27),r(21)),h=r(11),j=r(12),d=r(16),b=r(15);r(28);function x(e){return Object(s.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var O=function(e){Object(d.a)(r,e);var t=Object(b.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(j.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(s.jsx)(x,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(s.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(a.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(l.a)(t[r],3),n=s[0],a=s[1],c=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[c])return e[n]}return null}var m=function(e){Object(d.a)(r,e);var t=Object(b.a)(r);function r(e){var s;return Object(h.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(j.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],a=v(n.squares),c=r.map((function(e,r){var n=r?"Go to move #"+r:"Go to game start";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:n})},r)}));return e=a?"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O"),Object(s.jsxs)("div",{className:"tictactoe",children:[Object(s.jsx)("div",{className:"tictactoe-board",children:Object(s.jsx)(O,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(s.jsxs)("div",{className:"tictactoe-info",children:[Object(s.jsx)("div",{children:e}),Object(s.jsx)("ol",{children:c})]})]})}}]),r}(a.a.Component);var p=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(u.a,{children:Object(s.jsx)(o.c,{children:Object(s.jsx)(o.a,{path:"/games/tictactoe/",exact:!0,component:m})})})})};i.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.97dbceb8.chunk.js.map