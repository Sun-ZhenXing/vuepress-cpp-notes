import{aE as _t,aF as bt,s as kt,t as vt,e as E,n as G,g as wt,aG as St,aH as $t}from"./mermaid.esm.min-1000697e.js";import{h as et}from"./arc-1bd4335b-e03f4683.js";import{L as Et}from"./is_dark-151801f4-d62de56d.js";import"./app-6e249108.js";import"./framework-8980b429.js";import"./constant-2fe7eae5-45b4460e.js";var U=function(){var i=function(y,n,o,h){for(o=o||{},h=y.length;h--;o[y[h]]=n);return o},t=[1,2],e=[1,5],r=[6,9,11,17,18,20,22,23,26,27,28],s=[1,15],l=[1,16],c=[1,17],p=[1,18],d=[1,19],g=[1,23],b=[1,24],v=[1,27],f=[4,6,9,11,17,18,20,22,23,26,27,28],k={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(y,n,o,h,u,a,_){var x=a.length-1;switch(u){case 1:return a[x-1];case 3:this.$=[];break;case 4:a[x-1].push(a[x]),this.$=a[x-1];break;case 5:case 6:this.$=a[x];break;case 7:case 8:this.$=[];break;case 11:h.getCommonDb().setDiagramTitle(a[x].substr(6)),this.$=a[x].substr(6);break;case 12:this.$=a[x].trim(),h.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=a[x].trim(),h.getCommonDb().setAccDescription(this.$);break;case 15:h.addSection(a[x].substr(8)),this.$=a[x].substr(8);break;case 19:h.addTask(a[x],0,""),this.$=a[x];break;case 20:h.addEvent(a[x].substr(2)),this.$=a[x];break;case 21:h.parseDirective("%%{","open_directive");break;case 22:h.parseDirective(a[x],"type_directive");break;case 23:a[x]=a[x].trim().replace(/'/g,'"'),h.parseDirective(a[x],"arg_directive");break;case 24:h.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:t,7:3,12:4,28:e},{1:[3]},i(r,[2,3],{5:6}),{3:7,4:t,7:3,12:4,28:e},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:s,18:l,20:c,22:p,23:d,24:20,25:21,26:g,27:b,28:e},{1:[2,2]},{14:25,15:[1,26],31:v},i([15,31],[2,22]),i(r,[2,8],{1:[2,1]}),i(r,[2,4]),{7:22,10:28,12:4,17:s,18:l,20:c,22:p,23:d,24:20,25:21,26:g,27:b,28:e},i(r,[2,6]),i(r,[2,7]),i(r,[2,11]),{19:[1,29]},{21:[1,30]},i(r,[2,14]),i(r,[2,15]),i(r,[2,16]),i(r,[2,17]),i(r,[2,18]),i(r,[2,19]),i(r,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},i(r,[2,5]),i(r,[2,12]),i(r,[2,13]),i(f,[2,9]),{14:34,31:v},{31:[2,23]},{11:[1,35]},i(f,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(y,n){if(n.recoverable)this.trace(y);else{var o=new Error(y);throw o.hash=n,o}},parse:function(y){var n=this,o=[0],h=[],u=[null],a=[],_=this.table,x="",L=0,P=0,z=2,A=1,S=a.slice.call(arguments,1),m=Object.create(this.lexer),I={yy:{}};for(var O in this.yy)Object.prototype.hasOwnProperty.call(this.yy,O)&&(I.yy[O]=this.yy[O]);m.setInput(y,I.yy),I.yy.lexer=m,I.yy.parser=this,typeof m.yylloc>"u"&&(m.yylloc={});var H=m.yylloc;a.push(H);var K=m.options&&m.options.ranges;typeof I.yy.parseError=="function"?this.parseError=I.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function xt(){var C;return C=h.pop()||m.lex()||A,typeof C!="number"&&(C instanceof Array&&(h=C,C=h.pop()),C=n.symbols_[C]||C),C}for(var $,j,M,J,N={},V,D,tt,F;;){if(j=o[o.length-1],this.defaultActions[j]?M=this.defaultActions[j]:(($===null||typeof $>"u")&&($=xt()),M=_[j]&&_[j][$]),typeof M>"u"||!M.length||!M[0]){var q="";F=[];for(V in _[j])this.terminals_[V]&&V>z&&F.push("'"+this.terminals_[V]+"'");m.showPosition?q="Parse error on line "+(L+1)+`:
`+m.showPosition()+`
Expecting `+F.join(", ")+", got '"+(this.terminals_[$]||$)+"'":q="Parse error on line "+(L+1)+": Unexpected "+($==A?"end of input":"'"+(this.terminals_[$]||$)+"'"),this.parseError(q,{text:m.match,token:this.terminals_[$]||$,line:m.yylineno,loc:H,expected:F})}if(M[0]instanceof Array&&M.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+$);switch(M[0]){case 1:o.push($),u.push(m.yytext),a.push(m.yylloc),o.push(M[1]),$=null,P=m.yyleng,x=m.yytext,L=m.yylineno,H=m.yylloc;break;case 2:if(D=this.productions_[M[1]][1],N.$=u[u.length-D],N._$={first_line:a[a.length-(D||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(D||1)].first_column,last_column:a[a.length-1].last_column},K&&(N._$.range=[a[a.length-(D||1)].range[0],a[a.length-1].range[1]]),J=this.performAction.apply(N,[x,P,L,I.yy,M[1],u,a].concat(S)),typeof J<"u")return J;D&&(o=o.slice(0,-1*D*2),u=u.slice(0,-1*D),a=a.slice(0,-1*D)),o.push(this.productions_[M[1]][0]),u.push(N.$),a.push(N._$),tt=_[o[o.length-2]][o[o.length-1]],o.push(tt);break;case 3:return!0}}return!0}},T=function(){var y={EOF:1,parseError:function(n,o){if(this.yy.parser)this.yy.parser.parseError(n,o);else throw new Error(n)},setInput:function(n,o){return this.yy=o||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var o=n.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var o=n.length,h=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),o=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+o+"^"},test_match:function(n,o){var h,u,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),u=n[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],h=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var _ in a)this[_]=a[_];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,o,h,u;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),_=0;_<a.length;_++)if(h=this._input.match(this.rules[a[_]]),h&&(!o||h[0].length>o[0].length)){if(o=h,u=_,this.options.backtrack_lexer){if(n=this.test_match(h,a[_]),n!==!1)return n;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(n=this.test_match(o,a[u]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var n=this.next();return n||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,o,h,u){switch(h){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return y}();k.lexer=T;function w(){this.yy={}}return w.prototype=k,k.Parser=w,new w}();U.parser=U;const It=U;let W="",st=0;const Q=[],Y=[],B=[],at=()=>_t,ot=(i,t,e)=>{bt(globalThis,i,t,e)},ct=function(){Q.length=0,Y.length=0,W="",B.length=0,kt()},lt=function(i){W=i,Q.push(i)},ht=function(){return Q},dt=function(){let i=it();const t=100;let e=0;for(;!i&&e<t;)i=it(),e++;return Y.push(...B),Y},pt=function(i,t,e){const r={id:st++,section:W,type:W,task:i,score:t||0,events:e?[e]:[]};B.push(r)},ut=function(i){B.find(t=>t.id===st-1).events.push(i)},yt=function(i){const t={section:W,type:W,description:i,task:i,classes:[]};Y.push(t)},it=function(){const i=function(e){return B[e].processed};let t=!0;for(const[e,r]of B.entries())i(e),t=t&&r.processed;return t},Mt={clear:ct,getCommonDb:at,addSection:lt,getSections:ht,getTasks:dt,addTask:pt,addTaskOrg:yt,addEvent:ut,parseDirective:ot},Tt=Object.freeze(Object.defineProperty({__proto__:null,addEvent:ut,addSection:lt,addTask:pt,addTaskOrg:yt,clear:ct,default:Mt,getCommonDb:at,getSections:ht,getTasks:dt,parseDirective:ot},Symbol.toStringTag,{value:"Module"})),Lt=12,Z=function(i,t){const e=i.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},At=function(i,t){const e=i.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=i.append("g");r.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function s(p){const d=et().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);p.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function l(p){const d=et().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);p.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function c(p){p.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?s(r):t.score<3?l(r):c(r),e},Ht=function(i,t){const e=i.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},gt=function(i,t){const e=t.text.replace(/<br\s*\/?>/gi," "),r=i.append("text");r.attr("x",t.x),r.attr("y",t.y),r.attr("class","legend"),r.style("text-anchor",t.anchor),t.class!==void 0&&r.attr("class",t.class);const s=r.append("tspan");return s.attr("x",t.x+t.textMargin*2),s.text(e),r},Dt=function(i,t){function e(s,l,c,p,d){return s+","+l+" "+(s+c)+","+l+" "+(s+c)+","+(l+p-d)+" "+(s+c-d*1.2)+","+(l+p)+" "+s+","+(l+p)}const r=i.append("polygon");r.attr("points",e(t.x,t.y,50,20,7)),r.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,gt(i,t)},Ct=function(i,t,e){const r=i.append("g"),s=X();s.x=t.x,s.y=t.y,s.fill=t.fill,s.width=e.width,s.height=e.height,s.class="journey-section section-type-"+t.num,s.rx=3,s.ry=3,Z(r,s),ft(e)(t.text,r,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let nt=-1;const Ot=function(i,t,e){const r=t.x+e.width/2,s=i.append("g");nt++;const l=300+5*30;s.append("line").attr("id","task"+nt).attr("x1",r).attr("y1",t.y).attr("x2",r).attr("y2",l).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),At(s,{cx:r,cy:300+(5-t.score)*30,score:t.score});const c=X();c.x=t.x,c.y=t.y,c.fill=t.fill,c.width=e.width,c.height=e.height,c.class="task task-type-"+t.num,c.rx=3,c.ry=3,Z(s,c),t.x+14,ft(e)(t.task,s,c.x,c.y,c.width,c.height,{class:"task"},e,t.colour)},Pt=function(i,t){Z(i,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},jt=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},X=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},ft=function(){function i(s,l,c,p,d,g,b,v){const f=l.append("text").attr("x",c+d/2).attr("y",p+g/2+5).style("font-color",v).style("text-anchor","middle").text(s);r(f,b)}function t(s,l,c,p,d,g,b,v,f){const{taskFontSize:k,taskFontFamily:T}=v,w=s.split(/<br\s*\/?>/gi);for(let y=0;y<w.length;y++){const n=y*k-k*(w.length-1)/2,o=l.append("text").attr("x",c+d/2).attr("y",p).attr("fill",f).style("text-anchor","middle").style("font-size",k).style("font-family",T);o.append("tspan").attr("x",c+d/2).attr("dy",n).text(w[y]),o.attr("y",p+g/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(o,b)}}function e(s,l,c,p,d,g,b,v){const f=l.append("switch"),k=f.append("foreignObject").attr("x",c).attr("y",p).attr("width",d).attr("height",g).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");k.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(s),t(s,f,c,p,d,g,b,v),r(k,b)}function r(s,l){for(const c in l)c in l&&s.attr(c,l[c])}return function(s){return s.textPlacement==="fo"?e:s.textPlacement==="old"?i:t}}(),Rt=function(i){i.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function mt(i,t){i.each(function(){var e=G(this),r=e.text().split(/(\s+|<br>)/).reverse(),s,l=[],c=1.1,p=e.attr("y"),d=parseFloat(e.attr("dy")),g=e.text(null).append("tspan").attr("x",0).attr("y",p).attr("dy",d+"em");for(let b=0;b<r.length;b++)s=r[r.length-1-b],l.push(s),g.text(l.join(" ").trim()),(g.node().getComputedTextLength()>t||s==="<br>")&&(l.pop(),g.text(l.join(" ").trim()),s==="<br>"?l=[""]:l=[s],g=e.append("tspan").attr("x",0).attr("y",p).attr("dy",c+"em").text(s))})}const Nt=function(i,t,e,r){const s=e%Lt-1,l=i.append("g");t.section=s,l.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+s));const c=l.append("g"),p=l.append("g"),d=p.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(mt,t.width).node().getBBox(),g=r.fontSize&&r.fontSize.replace?r.fontSize.replace("px",""):r.fontSize;return t.height=d.height+g*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,p.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Bt(c,t,s),t},Wt=function(i,t,e){const r=i.append("g"),s=r.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(mt,t.width).node().getBBox(),l=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return r.remove(),s.height+l*1.1*.5+t.padding},Bt=function(i,t,e){i.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),i.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},R={drawRect:Z,drawCircle:Ht,drawSection:Ct,drawText:gt,drawLabel:Dt,drawTask:Ot,drawBackgroundRect:Pt,getTextObj:jt,getNoteRect:X,initGraphics:Rt,drawNode:Nt,getVirtualNodeHeight:Wt},zt=function(i,t,e,r){var s,l,c,p;const d=vt(),g=d.leftMargin??50;(l=(s=r.db).clear)==null||l.call(s),r.parser.parse(i+`
`),E.debug("timeline",r.db);const b=d.securityLevel;let v;b==="sandbox"&&(v=G("#i"+t));const f=(b==="sandbox"?G(v.nodes()[0].contentDocument.body):G("body")).select("#"+t);f.append("g");const k=r.db.getTasks(),T=r.db.getCommonDb().getDiagramTitle();E.debug("task",k),R.initGraphics(f);const w=r.db.getSections();E.debug("sections",w);let y=0,n=0,o=0,h=0,u=50+g,a=50;h=50;let _=0,x=!0;w.forEach(function(A){const S={number:_,descr:A,section:_,width:150,padding:20,maxHeight:y},m=R.getVirtualNodeHeight(f,S,d);E.debug("sectionHeight before draw",m),y=Math.max(y,m+20)});let L=0,P=0;E.debug("tasks.length",k.length);for(const[A,S]of k.entries()){const m={number:A,descr:S,section:S.section,width:150,padding:20,maxHeight:n},I=R.getVirtualNodeHeight(f,m,d);E.debug("taskHeight before draw",I),n=Math.max(n,I+20),L=Math.max(L,S.events.length);let O=0;for(let H=0;H<S.events.length;H++){const K={descr:S.events[H],section:S.section,number:S.section,width:150,padding:20,maxHeight:50};O+=R.getVirtualNodeHeight(f,K,d)}P=Math.max(P,O)}E.debug("maxSectionHeight before draw",y),E.debug("maxTaskHeight before draw",n),w&&w.length>0?w.forEach(A=>{const S=k.filter(H=>H.section===A),m={number:_,descr:A,section:_,width:200*Math.max(S.length,1)-50,padding:20,maxHeight:y};E.debug("sectionNode",m);const I=f.append("g"),O=R.drawNode(I,m,_,d);E.debug("sectionNode output",O),I.attr("transform",`translate(${u}, ${h})`),a+=y+50,S.length>0&&rt(f,S,_,u,a,n,d,L,P,y,!1),u+=200*Math.max(S.length,1),a=h,_++}):(x=!1,rt(f,k,_,u,a,n,d,L,P,y,!0));const z=f.node().getBBox();E.debug("bounds",z),T&&f.append("text").text(T).attr("x",z.width/2-g).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),o=x?y+n+150:n+100,f.append("g").attr("class","lineWrapper").append("line").attr("x1",g).attr("y1",o).attr("x2",z.width+3*g).attr("y2",o).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),wt(void 0,f,((c=d.timeline)==null?void 0:c.padding)??50,((p=d.timeline)==null?void 0:p.useMaxWidth)??!1)},rt=function(i,t,e,r,s,l,c,p,d,g,b){var v;for(const f of t){const k={descr:f.task,section:e,number:e,width:150,padding:20,maxHeight:l};E.debug("taskNode",k);const T=i.append("g").attr("class","taskWrapper"),w=R.drawNode(T,k,e,c).height;if(E.debug("taskHeight after draw",w),T.attr("transform",`translate(${r}, ${s})`),l=Math.max(l,w),f.events){const y=i.append("g").attr("class","lineWrapper");let n=l;s+=100,n=n+Vt(i,f.events,e,r,s,c),s-=100,y.append("line").attr("x1",r+190/2).attr("y1",s+l).attr("x2",r+190/2).attr("y2",s+l+(b?l:g)+d+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}r=r+200,b&&!((v=c.timeline)!=null&&v.disableMulticolor)&&e++}s=s-10},Vt=function(i,t,e,r,s,l){let c=0;const p=s;s=s+100;for(const d of t){const g={descr:d,section:e,number:e,width:150,padding:20,maxHeight:50};E.debug("eventNode",g);const b=i.append("g").attr("class","eventWrapper"),v=R.drawNode(b,g,e,l).height;c=c+v,b.attr("transform",`translate(${r}, ${s})`),s=s+10+v}return s=p,c},Ft={setConf:()=>{},draw:zt},Gt=i=>{let t="";for(let e=0;e<i.THEME_COLOR_LIMIT;e++)i["lineColor"+e]=i["lineColor"+e]||i["cScaleInv"+e],Et(i["lineColor"+e])?i["lineColor"+e]=St(i["lineColor"+e],20):i["lineColor"+e]=$t(i["lineColor"+e],20);for(let e=0;e<i.THEME_COLOR_LIMIT;e++){const r=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${i["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${i["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${i["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${i["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${r};
    }
    .section-${e-1} line {
      stroke: ${i["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${i["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Yt=i=>`
  .edge {
    stroke-width: 3;
  }
  ${Gt(i)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${i.git0};
  }
  .section-root text {
    fill: ${i.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,Zt=Yt,te={db:Tt,renderer:Ft,parser:It,styles:Zt};export{te as diagram};
