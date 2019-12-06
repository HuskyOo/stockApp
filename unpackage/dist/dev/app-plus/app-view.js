var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'canvasId']])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[0])
Z([3,'data-v-67f2ba3a'])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[2,'*'],[[7],[3,'cWidth']],[[7],[3,'pixelRatio']]],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'*'],[[7],[3,'cHeight']],[[7],[3,'pixelRatio']]],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'scale('],[[2,'/'],[1,1],[[7],[3,'pixelRatio']]]],[1,')']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'margin-left:'],[[2,'+'],[[2,'/'],[[2,'*'],[[2,'-'],[[7],[3,'cWidth']]],[[2,'-'],[[7],[3,'pixelRatio']],[1,1]]],[1,2]],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'margin-top:'],[[2,'+'],[[2,'/'],[[2,'*'],[[2,'-'],[[7],[3,'cHeight']]],[[2,'-'],[[7],[3,'pixelRatio']],[1,1]]],[1,2]],[1,'px']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-card']],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'isFull']],[1,true]],[[2,'==='],[[7],[3,'isFull']],[1,'true']]],[1,'uni-card--full'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'title']])
Z([3,'uni-card__header'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[7],[3,'bgcolor']],[[7],[3,'bgcolor']],[1,'#FFFFFF']]],[1,';']])
Z([[7],[3,'thumbnail']])
Z([3,'uni-card__header-extra-img-view'])
Z([3,'uni-card__header-extra-img'])
Z(z[6])
Z([3,'uni-card__header-title-text'])
Z([a,[[7],[3,'title']]])
Z([[7],[3,'extra']])
Z([3,'uni-card__header-extra-text'])
Z([a,[[7],[3,'extra']]])
Z([3,'uni-card__content uni-card__content--pd'])
Z([[7],[3,'images']])
Z([3,'demoimages'])
Z([3,'scaleToFill'])
Z(z[16])
Z([[7],[3,'texts']])
Z([a,[[7],[3,'texts']]])
Z([[7],[3,'note']])
Z([3,'uni-card__footer'])
Z([a,[[7],[3,'note']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'uni-grid']],[[2,'?:'],[[2,'!'],[[7],[3,'showBorder']]],[1,'uni-grid-no-border'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'!'],[[7],[3,'showOutBorder']]]],[1,'uni-grid-no-out-border'],[1,'']]]])
Z([3,'i'])
Z([3,'items'])
Z([[7],[3,'gridGroup']])
Z(z[1])
Z([3,'uni-grid__flex'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'items']])
Z(z[6])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'uni-grid-item']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'columnNum']]],[1,'uni-grid-item-last'],[1,'']]],[[2,'+'],[1,'uni-grid-item-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'onClick']],[[4],[[5],[[5],[[5],[[7],[3,'i']]],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'gridGroup']],[1,'']],[[7],[3,'i']]]]],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'']],[[7],[3,'index']]],[1,'url']]]]]]]]]]]]]]])
Z([3,'uni-grid-item-hover'])
Z([1,20])
Z([1,70])
Z([[2,'+'],[[2,'+'],[1,'visibility:'],[[2,'?:'],[[6],[[7],[3,'item']],[3,'seize']],[1,'hidden'],[1,'inherit']]],[1,';']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'seize']]])
Z([3,'uni-grid-item__content'])
Z([3,'uni-grid-item-image'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([3,'uni-grid-item-text'])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-icon']],[[2,'+'],[1,'uni-icon-'],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[7],[3,'fontSize']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'__e'])
Z([3,'uni-noticebar'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showClose']],[1,'true']],[[2,'==='],[[7],[3,'showClose']],[1,true]]])
Z([3,'uni-noticebar__close'])
Z([3,'__l'])
Z([3,'12'])
Z([3,'closefill'])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'uni-noticebar__content']],[[7],[3,'setContenClass']]]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showIcon']],[1,'true']],[[2,'==='],[[7],[3,'showIcon']],[1,true]]])
Z([3,'uni-noticebar__content-icon'])
Z(z[4])
Z(z[7])
Z([[7],[3,'color']])
Z([3,'14'])
Z([3,'sound'])
Z([3,'2'])
Z([[4],[[5],[[5],[1,'uni-noticebar__content-text']],[[7],[3,'setTextClass']]]])
Z([3,'uni-noticebar__content-inner'])
Z([[7],[3,'elId']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'animation:'],[[7],[3,'animation']]],[1,';']],[[2,'+'],[[2,'+'],[1,'-webkit-animation:'],[[7],[3,'animation']]],[1,';']]])
Z([a,[[7],[3,'text']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showGetMore']],[1,'true']],[[2,'==='],[[7],[3,'showGetMore']],[1,true]]])
Z(z[1])
Z([3,'uni-noticebar__content-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'?:'],[[7],[3,'moreText']],[1,'180upx'],[1,'20px']]],[1,';']])
Z([[7],[3,'moreText']])
Z([3,'uni-noticebar__content-more-text'])
Z([a,[[7],[3,'moreText']]])
Z(z[7])
Z(z[17])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-swiper__warp'])
Z([[2,'==='],[[7],[3,'mode']],[1,'default']])
Z([3,'uni-swiper__dots-box'])
Z([[2,'+'],[[2,'+'],[1,'bottom:'],[[2,'+'],[[6],[[7],[3,'dots']],[3,'bottom']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'info']])
Z(z[4])
Z([3,'uni-swiper__dots-item'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[6],[[7],[3,'dots']],[3,'width']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'dots']],[3,'height']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'backgroundColor']],[[6],[[7],[3,'dots']],[3,'selectedBackgroundColor']]]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border:'],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'border']],[[6],[[7],[3,'dots']],[3,'selectedBorder']]]],[1,';']]])
Z([[2,'==='],[[7],[3,'mode']],[1,'long']])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z([[4],[[5],[[5],[1,'uni-swiper__dots-item ']],[[2,'&&'],[[2,'==='],[[7],[3,'index']],[[7],[3,'current']]],[1,'uni-swiper__dots-long']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'current']]],[[2,'*'],[[6],[[7],[3,'dots']],[3,'width']],[1,3]],[[6],[[7],[3,'dots']],[3,'width']]],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'dots']],[3,'height']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'backgroundColor']],[[6],[[7],[3,'dots']],[3,'selectedBackgroundColor']]]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border:'],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'border']],[[6],[[7],[3,'dots']],[3,'selectedBorder']]]],[1,';']]])
Z([[2,'==='],[[7],[3,'mode']],[1,'nav']])
Z([3,'uni-swiper__dots-box uni-swiper__dots-nav'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[6],[[7],[3,'dotsStyles']],[3,'backgroundColor']]],[1,';']])
Z([3,'uni-swiper__dots-nav-item'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[6],[[7],[3,'dotsStyles']],[3,'color']]],[1,';']])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[7],[3,'current']],[1,1]],[1,'/']],[[6],[[7],[3,'info']],[3,'length']]],[1,'\n\t\t\t']],[[6],[[6],[[7],[3,'info']],[[7],[3,'current']]],[[7],[3,'field']]]]])
Z([[2,'==='],[[7],[3,'mode']],[1,'indexes']])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z([3,'uni-swiper__dots-item uni-swiper__dots-indexes'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[6],[[7],[3,'dots']],[3,'width']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[6],[[7],[3,'dots']],[3,'height']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'color:'],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'selectedColor']],[[6],[[7],[3,'dots']],[3,'color']]]],[1,';']]],[[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'backgroundColor']],[[6],[[7],[3,'dots']],[3,'selectedBackgroundColor']]]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border:'],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[7],[3,'current']]],[[6],[[7],[3,'dots']],[3,'border']],[[6],[[7],[3,'dots']],[3,'selectedBorder']]]],[1,';']]])
Z([a,[[2,'+'],[[7],[3,'index']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt qiun-rows'])
Z([3,'qiun-title-dot-light'])
Z([3,'K线图与柱状图联动'])
Z([3,'flex:1;text-align:right;'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapButton']],[[4],[[5],[1,'in']]]]]]]]]]])
Z([3,'mini'])
Z([3,'default'])
Z([3,'放大'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapButton']],[[4],[[5],[1,'out']]]]]]]]]]])
Z(z[7])
Z([3,'margin-left:20rpx;'])
Z(z[8])
Z([3,'缩小'])
Z([3,'qiun-charts'])
Z(z[5])
Z(z[5])
Z(z[5])
Z([3,'canvasCandle'])
Z([3,'charts'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchCandle']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveCandle']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndCandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z(z[20])
Z([3,'qiun-charts2'])
Z([3,'canvasColumn'])
Z([3,'charts2'])
Z(z[26])
Z([3,'qiun-padding qiun-bg-white '])
Z(z[5])
Z(z[5])
Z([3,'#f8f8f8'])
Z([3,'18'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'changing']],[[4],[[5],[[4],[[5],[[5],[1,'sliderMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'sliderMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'sliderMax']])
Z([3,'5'])
Z([[7],[3,'itemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'arr']])
Z(z[0])
Z([3,'qiun-columns'])
Z([3,'background-color:#FFFFFF;'])
Z([3,'__l'])
Z([[7],[3,'cHeight']])
Z([[7],[3,'cWidth']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'chartType']])
Z([3,'vue-ref-in-for'])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'opts']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'__e'])
Z([3,'qiun-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'changeData']]]]]]]]])
Z([3,'更新图表'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-padding'])
Z([3,'font-size:32rpx;'])
Z([a,[[7],[3,'tips']]])
Z([3,'qiun-title-bar'])
Z([3,'background-color:#E5FDC3;'])
Z([3,'qiun-title-dot-light'])
Z([3,'柱状图'])
Z([3,'qiun-charts'])
Z(z[5])
Z([3,'__e'])
Z([3,'canvasColumn'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchIt']],[[4],[[5],[[5],[1,'$event']],[1,'canvasColumn']]]]]]]]]]])
Z(z[11])
Z(z[5])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z(z[6])
Z([3,'温度计式图表'])
Z(z[8])
Z(z[10])
Z([3,'canvasColumnMeter'])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchIt']],[[4],[[5],[[5],[1,'$event']],[1,'canvasColumnMeter']]]]]]]]]]])
Z(z[21])
Z(z[16])
Z(z[6])
Z([3,'混合图（单坐标系支持画点、线、面、柱）'])
Z(z[8])
Z(z[10])
Z(z[10])
Z(z[10])
Z([3,'canvasMix'])
Z(z[12])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchMix']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveMix']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndMix']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z(z[32])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt qiun-rows'])
Z(z[6])
Z([3,'K线图（蜡烛图）'])
Z(z[8])
Z(z[10])
Z(z[10])
Z(z[10])
Z([3,'canvasCandle'])
Z(z[12])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchCandle']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveCandle']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndCandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[35])
Z(z[44])
Z(z[1])
Z(z[10])
Z([3,'qiun-tip'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'changeGaugeData']]]]]]]]])
Z([3,'更新仪表盘数据'])
Z(z[16])
Z(z[6])
Z([3,'仪表盘'])
Z(z[8])
Z([3,'canvasGauge'])
Z(z[12])
Z(z[58])
Z(z[16])
Z(z[6])
Z([3,'圆弧进度图'])
Z([3,'qiun-charts3'])
Z([3,'canvasArcbar1'])
Z([3,'charts3'])
Z(z[65])
Z([3,'canvasArcbar2'])
Z(z[66])
Z(z[68])
Z([3,'margin-left:250rpx;'])
Z([3,'canvasArcbar3'])
Z(z[66])
Z(z[72])
Z([3,'margin-left:500rpx;'])
Z(z[16])
Z(z[6])
Z([3,'漏斗图'])
Z(z[8])
Z(z[10])
Z([3,'canvasFunnel'])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[[5],[1,'$event']],[1,'canvasFunnel']]]]]]]]]]])
Z(z[81])
Z(z[16])
Z(z[6])
Z([3,'折线图一（可横向拖拽带滚动条）'])
Z(z[8])
Z(z[10])
Z(z[10])
Z(z[10])
Z([3,'canvasLineA'])
Z(z[12])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchLineA']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveLineA']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndLineA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[35])
Z(z[92])
Z(z[16])
Z(z[6])
Z([3,'折线图二（横屏图表）'])
Z([3,'qiun-charts-rotate'])
Z(z[10])
Z([3,'canvasLineB'])
Z([3,'charts-rotate'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchIt']],[[4],[[5],[[5],[1,'$event']],[1,'canvasLineB']]]]]]]]]]])
Z(z[102])
Z(z[16])
Z(z[6])
Z([3,'区域图'])
Z(z[8])
Z(z[10])
Z([3,'canvasArea'])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchIt']],[[4],[[5],[[5],[1,'$event']],[1,'canvasArea']]]]]]]]]]])
Z(z[111])
Z(z[16])
Z(z[6])
Z([3,'饼状图'])
Z(z[8])
Z(z[10])
Z([3,'canvasPie'])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[[5],[1,'$event']],[1,'canvasPie']]]]]]]]]]])
Z(z[120])
Z(z[16])
Z(z[6])
Z([3,'环形图'])
Z(z[8])
Z(z[10])
Z([3,'canvasRing'])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[[5],[1,'$event']],[1,'canvasRing']]]]]]]]]]])
Z(z[129])
Z(z[16])
Z(z[6])
Z([3,'雷达图'])
Z(z[8])
Z(z[10])
Z([3,'canvasRadar'])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[[5],[1,'$event']],[1,'canvasRadar']]]]]]]]]]])
Z(z[138])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'height:400rpx;'])
Z(z[4])
Z([3,'../../../static/images/banner/banner1.png'])
Z([3,'width:750rpx;height:400rpx;'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'基本柱状图'])
Z([3,'qiun-charts'])
Z(z[1])
Z([3,'canvasColumn'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'info']])
Z(z[0])
Z([3,'#f7f7fa'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'clickCard']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'info']],[1,'']],[[7],[3,'index']]],[1,'url']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'demo']])
Z([[2,'+'],[1,'Tips:'],[[6],[[7],[3,'item']],[3,'tips']]])
Z([[6],[[7],[3,'item']],[3,'texts']])
Z([[2,'+'],[1,'/static/images/charts/'],[[6],[[7],[3,'item']],[3,'images']]])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'圆弧进度图'])
Z([3,'qiun-charts3'])
Z([3,'canvasArcbar1'])
Z([3,'charts3'])
Z(z[5])
Z([3,'canvasArcbar2'])
Z(z[6])
Z(z[8])
Z([3,'margin-left:250rpx;'])
Z([3,'canvasArcbar3'])
Z(z[6])
Z(z[12])
Z([3,'margin-left:500rpx;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'多重圆弧进度条'])
Z([3,'qiun-charts'])
Z([3,'canvasArea'])
Z([3,'chartsa'])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'基本区域图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasArea'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchArea']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'时间X轴'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasLineA'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchLineA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt qiun-rows'])
Z([3,'qiun-title-dot-light'])
Z([3,'基本K线图'])
Z([3,'flex:1;text-align:right;'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapButton']],[[4],[[5],[1,'in']]]]]]]]]]])
Z([3,'mini'])
Z([3,'default'])
Z([3,'放大'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tapButton']],[[4],[[5],[1,'out']]]]]]]]]]])
Z(z[7])
Z([3,'margin-left:20rpx;'])
Z(z[8])
Z([3,'缩小'])
Z([3,'qiun-charts'])
Z(z[5])
Z(z[5])
Z(z[5])
Z([3,'canvasCandle'])
Z([3,'charts'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchCandle']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveCandle']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndCandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z(z[20])
Z([3,'qiun-padding qiun-bg-white '])
Z(z[5])
Z(z[5])
Z([3,'#f8f8f8'])
Z([3,'18'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'changing']],[[4],[[5],[[4],[[5],[[5],[1,'sliderMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'sliderMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'sliderMax']])
Z([3,'5'])
Z([[7],[3,'itemCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'柱状图带滚动条'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z(z[5])
Z(z[5])
Z([3,'canvasColumn'])
Z([3,'charts'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveColumn']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'基本柱状图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasColumn'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'标记线'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasColumn'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'温度计式图表'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasColumnMeter'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'柱状图旋转'])
Z([3,'qiun-charts-rotate'])
Z([3,'__e'])
Z([3,'canvasColumn'])
Z([3,'charts-rotate'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'堆叠柱状图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasColumnStack'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchColumn']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'漏斗图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasFunnel'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchFunnel']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'__e'])
Z([3,'qiun-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'changeType']]]]]]]]])
Z([3,'更改样式'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'仪表盘'])
Z([3,'qiun-charts'])
Z([3,'canvasGauge'])
Z([3,'charts'])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'current']])
Z([3,'content'])
Z([[7],[3,'info']])
Z([3,'nav'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'__e'])
Z([3,'swiper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z(z[3])
Z(z[10])
Z([3,'swiper-item'])
Z([[6],[[7],[3,'item']],[3,'images']])
Z(z[0])
Z([3,'true'])
Z(z[17])
Z(z[17])
Z([3,'50'])
Z([[7],[3,'notice']])
Z([3,'2'])
Z(z[0])
Z([3,'4'])
Z([[7],[3,'options']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'基本曲线图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasLineA'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchLineA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'折线图带滚动条'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z(z[5])
Z(z[5])
Z([3,'canvasLineA'])
Z([3,'charts'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchLineA']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveLineA']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndLineA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'基本折线图'])
Z([3,'qiun-bg-white qiun-padding'])
Z([a,[[2,'+'],[1,'交互数据：'],[[7],[3,'Interactive']]]])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z(z[7])
Z(z[7])
Z([3,'canvasLineA'])
Z([3,'charts'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchLineA']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveLineA']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndLineA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[10])
Z([3,'qiun-common-mt'])
Z([3,'font-size:14px;text-align:center;'])
Z([3,'请在图表上左右移动'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'横屏模式带滚动条'])
Z([3,'qiun-charts-rotate'])
Z([3,'__e'])
Z(z[5])
Z(z[5])
Z([3,'canvasLineB'])
Z([3,'charts-rotate'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchLineB']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveLineB']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndLineB']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'地图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasMap'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchMap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'混合图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z(z[5])
Z(z[5])
Z([3,'canvasMix'])
Z([3,'charts'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchMix']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveMix']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEndMix']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'饼状图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasPie'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'环形图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasRing'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchRing']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'玫瑰图(面积模式)'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasPie'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchPie']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z(z[1])
Z(z[2])
Z([3,'玫瑰图(半径模式)'])
Z(z[4])
Z(z[5])
Z([3,'canvasRose'])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchRose']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[15])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'雷达图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasRadar'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchRadar']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'qiun-bg-white qiun-title-bar qiun-common-mt'])
Z([3,'qiun-title-dot-light'])
Z([3,'词云图'])
Z([3,'qiun-charts'])
Z([3,'__e'])
Z([3,'canvasWord'])
Z([3,'charts'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchWord']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z(z[5])
Z([3,'qiun-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'saveImage']]]]]]]]])
Z([3,'保存图片'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'info']])
Z(z[0])
Z([3,'qiun-columns'])
Z([3,'qiun-rows qiun-list-title qiun-common-border-bottom'])
Z([3,'background-color:#f7f7fa;'])
Z([3,'flex:1;'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'__l'])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowup'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[4],[[5],[[5],[1,'qiun-bg-white qiun-list-sub']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'qiun-list-sub-active'],[1,'']]]])
Z([3,'index2'])
Z([3,'item2'])
Z([[6],[[7],[3,'item']],[3,'sub']])
Z(z[15])
Z([3,'__e'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openUrl']],[[4],[[5],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'s\x3d'],[[7],[3,'index']]],[1,'\x26id\x3d']],[[7],[3,'index2']]],[1,'\x26t\x3d']],[[6],[[7],[3,'item2']],[3,'title']]]]]]]]]]]]])
Z(z[7])
Z([a,[[6],[[7],[3,'item2']],[3,'title']]])
Z(z[9])
Z(z[10])
Z(z[11])
Z([3,'arrowright'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index2']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'info']])
Z(z[0])
Z([3,'#f7f7fa'])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'tips']])
Z([[6],[[7],[3,'item']],[3,'describe']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'chat container _div data-v-257d789d'])
Z([3,'flex-row-between flex-items-end mb-10 mt-15 _div data-v-257d789d'])
Z([3,'font-14 font-white data-v-257d789d'])
Z([3,'本期主题视频'])
Z([3,'font-11 data-v-257d789d'])
Z([3,'当前时间: 2018-08-01 11:40:25'])
Z([3,'mb-10 _div data-v-257d789d'])
Z([3,'data-v-257d789d'])
Z([3,'cover'])
Z([3,'/src/assets/images/banner1.png'])
Z([3,'width:690rpx;height:400rpx;'])
Z([3,'mb-20 data-v-257d789d'])
Z([3,'☆在人多的时候雀环一下频道可获得更好的使用体验'])
Z([3,'flex-row-between mb-20 _div data-v-257d789d'])
Z([3,'flex-row flex-items-center _div data-v-257d789d'])
Z([3,'mr-5 data-v-257d789d'])
Z([3,'/static/icons/people.png'])
Z([3,'width:40rpx;height:30rpx;'])
Z(z[7])
Z([3,'当前人数:'])
Z([3,'font-white data-v-257d789d'])
Z([3,'2132'])
Z(z[7])
Z([3,'人'])
Z(z[14])
Z(z[15])
Z([3,'/static/icons/flower.png'])
Z(z[17])
Z(z[7])
Z([3,'频道鲜花:'])
Z(z[20])
Z(z[21])
Z(z[7])
Z([3,'朵'])
Z([3,'radiu-box flex-row-between _div data-v-257d789d'])
Z([3,'avatar data-v-257d789d'])
Z(z[8])
Z([3,'/static/icons/touxiang.png'])
Z([3,'flex _div data-v-257d789d'])
Z([3,'font-white font-16 font-bold mb-10 data-v-257d789d'])
Z([3,'长者'])
Z([3,'font-white font-14 mb-10 data-v-257d789d'])
Z([3,'我和大佬谈笑风声'])
Z(z[7])
Z([3,'2018-07-16 18:18:06'])
Z([1,false])
Z([3,'flex-row-between flex-items-center bg-gray message-box _div data-v-257d789d'])
Z([3,'mr-15 data-v-257d789d'])
Z([3,'/static/icons/send_flower.png'])
Z([3,'width:50rpx;height:50rpx;'])
Z([3,'flex message-input data-v-257d789d'])
Z([3,'text'])
Z([3,'ml-15 data-v-257d789d'])
Z([3,'/static/icons/send.png'])
Z(z[49])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'contrast container _div data-v-7b0ef4c7'])
Z([3,'font-14 font-white mt-15 mb-10 data-v-7b0ef4c7'])
Z([3,'最新金价'])
Z([3,'radiu-box flex-row-between flex-items-center _div data-v-7b0ef4c7'])
Z([3,'flex-row flex-items-center _div data-v-7b0ef4c7'])
Z([3,'font-red font-24 mr-15 data-v-7b0ef4c7'])
Z([3,'1243.45'])
Z([3,'font-red font-15 mr-15 data-v-7b0ef4c7'])
Z([3,'0.23%'])
Z(z[7])
Z([3,'+2.2'])
Z([3,'font-white font-15 data-v-7b0ef4c7'])
Z([3,'21637'])
Z([3,'flex-row-end mb-15 _div data-v-7b0ef4c7'])
Z([3,'font-white data-v-7b0ef4c7'])
Z([3,'更多数据\x3e\x3e'])
Z([3,'radiu-box _div data-v-7b0ef4c7'])
Z([3,'mb-20 data-v-7b0ef4c7'])
Z([3,'☆提示: 可同时叠加3个品种进行对比'])
Z([3,'font-16 mb-10 data-v-7b0ef4c7'])
Z([3,'选择器'])
Z([3,'radiu-box mb-20 _div data-v-7b0ef4c7'])
Z(z[19])
Z([3,'已选择品种'])
Z(z[16])
Z(z[17])
Z([3,'☆小豹提示 点击查看更多跳转到合约介绍页面'])
Z(z[13])
Z(z[14])
Z([3,'查看更多\x3e\x3e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home data-v-9a5482b8'])
Z([3,'container data-v-9a5482b8'])
Z([3,'k-title data-v-9a5482b8'])
Z([3,'data-v-9a5482b8'])
Z([3,'最新金价'])
Z(z[3])
Z([3,'2018-08-01 11:40:25'])
Z([3,'radiu-box k-detail data-v-9a5482b8'])
Z([3,'font-green font-15 data-v-9a5482b8'])
Z([3,'-2.2'])
Z([3,'font-green font-24 data-v-9a5482b8'])
Z([3,'1243.45'])
Z(z[8])
Z([3,'0.23%'])
Z([3,'radiu-box data-v-9a5482b8'])
Z(z[3])
Z([3,'height:300rpx;'])
Z([1,true])
Z([3,'slider data-v-9a5482b8'])
Z(z[17])
Z([3,'3000'])
Z(z[16])
Z([3,'index'])
Z([3,'img'])
Z([[7],[3,'imageList']])
Z(z[22])
Z(z[3])
Z(z[16])
Z([3,'image data-v-9a5482b8'])
Z([3,'cover'])
Z([[7],[3,'img']])
Z([3,'grid data-v-9a5482b8'])
Z([3,'grid-item data-v-9a5482b8'])
Z(z[3])
Z(z[29])
Z([3,'/static/icons/information.png'])
Z([3,'width:80rpx;height:80rpx;margin-bottom:20rpx;'])
Z(z[3])
Z([3,'数据'])
Z(z[32])
Z(z[3])
Z(z[29])
Z(z[35])
Z(z[36])
Z(z[3])
Z(z[38])
Z(z[32])
Z(z[3])
Z(z[29])
Z(z[35])
Z(z[36])
Z(z[3])
Z(z[38])
Z(z[32])
Z(z[3])
Z(z[29])
Z(z[35])
Z(z[36])
Z(z[3])
Z(z[38])
Z([3,'radiu-box bid data-v-9a5482b8'])
Z([3,'bid-title data-v-9a5482b8'])
Z([3,'font-red font-16 data-v-9a5482b8'])
Z([3,'买盘'])
Z([3,'font-green font-16 data-v-9a5482b8'])
Z([3,'卖盘'])
Z([3,'bid-ratio data-v-9a5482b8'])
Z([3,'bid-buy data-v-9a5482b8'])
Z([3,'bid-ratio-font data-v-9a5482b8'])
Z([3,'font-black font-11 data-v-9a5482b8'])
Z([3,'75%'])
Z(z[69])
Z([3,'25%'])
Z(z[3])
Z([3,'☆可根据买卖盘占比判断市场的多空趋势'])
Z([3,'radiu-box futures-detail data-v-9a5482b8'])
Z([3,'futures-item data-v-9a5482b8'])
Z([3,'futures-title data-v-9a5482b8'])
Z([3,'开盘价'])
Z([3,'futures-num font-15 font-white data-v-9a5482b8'])
Z([3,'1241.0'])
Z(z[76])
Z(z[77])
Z(z[78])
Z(z[79])
Z(z[80])
Z(z[76])
Z(z[77])
Z(z[78])
Z([3,'futures-num font-15 font-red data-v-9a5482b8'])
Z(z[80])
Z(z[76])
Z(z[77])
Z(z[78])
Z([3,'futures-num font-15 font-green data-v-9a5482b8'])
Z(z[80])
Z(z[76])
Z(z[77])
Z(z[78])
Z(z[89])
Z(z[80])
Z(z[76])
Z(z[77])
Z(z[78])
Z(z[94])
Z(z[80])
Z([3,'__e'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpShowCase']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'font-white look-more data-v-9a5482b8'])
Z([3,'查看更多详细数据\x3e\x3e'])
Z([3,'bg-light-black flex-row-around flex-items-center nav data-v-9a5482b8'])
Z([3,'font-14 data-v-9a5482b8'])
Z([3,'新闻'])
Z(z[112])
Z([3,'情绪'])
Z(z[112])
Z([3,'发言'])
Z(z[112])
Z([3,'十档'])
Z(z[112])
Z([3,'公告'])
Z(z[112])
Z([3,'简介'])
Z([1,false])
Z([3,'__l'])
Z([3,'container nav-box mt-15 data-v-9a5482b8'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z([3,'radiu-box flex-row-between data-v-9a5482b8'])
Z([3,'news-info flex-col-between data-v-9a5482b8'])
Z([3,'font-bold font-white font-18 data-v-9a5482b8'])
Z([3,'中国智慧'])
Z(z[3])
Z([3,'2018-07-16 16:52:38'])
Z(z[3])
Z(z[29])
Z([3,'/static/icons/touxiang.png'])
Z([3,'width:100rpx;height:100rpx;'])
Z(z[124])
Z(z[125])
Z(z[126])
Z([3,'2'])
Z(z[128])
Z(z[14])
Z([3,'flex-row-between data-v-9a5482b8'])
Z([3,'margin-bottom:36rpx;'])
Z([3,'flex-col-between data-v-9a5482b8'])
Z([3,'font-16 font-red data-v-9a5482b8'])
Z([3,'多头'])
Z(z[3])
Z(z[3])
Z([3,'margin-bottom:20rpx;'])
Z([3,'看多'])
Z([3,'font-15 font-red data-v-9a5482b8'])
Z([3,'68%'])
Z(z[3])
Z(z[148])
Z([3,'font-16 font-green data-v-9a5482b8'])
Z([3,'空头'])
Z([3,'flex-items-end data-v-9a5482b8'])
Z(z[3])
Z(z[153])
Z([3,'看空'])
Z([3,'font-15 font-green data-v-9a5482b8'])
Z([3,'32%'])
Z(z[3])
Z([3,'☆可根据多空头判断市场走势趋势'])
Z(z[125])
Z(z[106])
Z(z[126])
Z([[4],[[5],[[4],[[5],[[5],[1,'^scroll']],[[4],[[5],[[4],[[5],[1,'scrollHandler']]]]]]]]])
Z([3,'3'])
Z(z[128])
Z(z[3])
Z(z[130])
Z([3,'font-white font-14 data-v-9a5482b8'])
Z(z[4])
Z(z[8])
Z(z[11])
Z([3,'radiu-box bg-gray flex-row-between flex-items-center data-v-9a5482b8'])
Z([3,'say-input bg-black data-v-9a5482b8'])
Z([3,'text'])
Z(z[3])
Z(z[29])
Z([3,'/static/icons/send.png'])
Z([3,'width:50rpx;height:50rpx;'])
Z(z[130])
Z([3,'avatar data-v-9a5482b8'])
Z(z[29])
Z(z[138])
Z([3,'say-info data-v-9a5482b8'])
Z([3,'font-white font-16 font-bold say-uname data-v-9a5482b8'])
Z([3,'长者'])
Z([3,'font-white font-14 say-message data-v-9a5482b8'])
Z([3,'我和大佬谈笑风声'])
Z(z[3])
Z([3,'2018-07-16 18:18:06'])
Z(z[130])
Z(z[189])
Z(z[29])
Z(z[138])
Z(z[192])
Z(z[193])
Z(z[194])
Z(z[195])
Z(z[196])
Z(z[3])
Z(z[198])
Z(z[130])
Z(z[189])
Z(z[29])
Z(z[138])
Z(z[192])
Z(z[193])
Z(z[194])
Z(z[195])
Z(z[196])
Z(z[3])
Z(z[198])
Z(z[124])
Z(z[125])
Z(z[126])
Z([3,'4'])
Z(z[128])
Z(z[3])
Z(z[146])
Z([3,'margin-bottom:30rpx;'])
Z([3,'font-16 data-v-9a5482b8'])
Z([3,'买五档'])
Z(z[229])
Z([3,'卖五档'])
Z(z[146])
Z([3,'radiu-box flex data-v-9a5482b8'])
Z([3,'margin-right:30rpx;'])
Z(z[146])
Z([3,'font-green data-v-9a5482b8'])
Z([3,'卖一'])
Z(z[3])
Z([3,'31201'])
Z(z[3])
Z([3,'16'])
Z(z[146])
Z(z[237])
Z([3,'卖二'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[237])
Z([3,'卖三'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[237])
Z([3,'卖四'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[237])
Z([3,'卖五'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[234])
Z(z[146])
Z([3,'font-red data-v-9a5482b8'])
Z([3,'买一'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[273])
Z([3,'买二'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[273])
Z([3,'买三'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[273])
Z([3,'买四'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[146])
Z(z[273])
Z([3,'买五'])
Z(z[3])
Z(z[240])
Z(z[3])
Z(z[242])
Z(z[124])
Z(z[125])
Z(z[126])
Z([3,'5'])
Z(z[128])
Z(z[14])
Z(z[132])
Z(z[228])
Z(z[133])
Z(z[3])
Z(z[135])
Z(z[124])
Z(z[125])
Z([3,'nav-box data-v-9a5482b8'])
Z([3,'6'])
Z(z[128])
Z([3,'table-row data-v-9a5482b8'])
Z([3,'table-item border row-center col-center data-v-9a5482b8'])
Z([3,'font-center data-v-9a5482b8'])
Z([3,'交易品种'])
Z(z[324])
Z([3,'font-center font-15 font-white data-v-9a5482b8'])
Z([3,'CMX黄金'])
Z(z[324])
Z(z[325])
Z([3,'交易代码'])
Z(z[324])
Z(z[328])
Z([3,'纽约商品交易所'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'more container data-v-7a784bcc'])
Z([3,'font-bold font-16 mb-10 data-v-7a784bcc'])
Z([3,'账号'])
Z([3,'radiu-box flex-row-between data-v-7a784bcc'])
Z([3,'flex-col-end data-v-7a784bcc'])
Z([3,'font-white font-bold font-16 mb-15 data-v-7a784bcc'])
Z([3,'186****0920'])
Z([3,'font-orange data-v-7a784bcc'])
Z([3,'天行健, 君子以自强不息'])
Z([3,'avatar data-v-7a784bcc'])
Z([3,'cover'])
Z([3,'/static/icons/touxiang.png'])
Z([3,'radiu-box flex-row-center p-25 data-v-7a784bcc'])
Z([3,'__e'])
Z([3,'mr-30 data-v-7a784bcc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpLog']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'font-black font-bold font-14 btn-40 bg-blue data-v-7a784bcc'])
Z([3,'width:200rpx;'])
Z([3,'快登陆'])
Z(z[13])
Z([3,'data-v-7a784bcc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpRegister']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'font-black font-bold font-14 btn-40 bg-light-green data-v-7a784bcc'])
Z(z[17])
Z([3,'快注册'])
Z(z[1])
Z([3,'小工具'])
Z([3,'radiu-box flex-row flex-wrap pl-0 pr-0 data-v-7a784bcc'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tool']])
Z(z[28])
Z(z[13])
Z([3,'flex-items-center icons-item data-v-7a784bcc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'tool']],[1,'']],[[7],[3,'index']]],[1,'path']]]]]]]]]]]]]]])
Z([3,'icon-image data-v-7a784bcc'])
Z(z[10])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([3,'font-white data-v-7a784bcc'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z(z[1])
Z([3,'持仓数据'])
Z(z[27])
Z(z[28])
Z(z[29])
Z([[7],[3,'amount']])
Z(z[28])
Z(z[33])
Z(z[35])
Z(z[10])
Z(z[37])
Z(z[38])
Z([a,z[39][1]])
Z([3,'flex-row-between flex-items-center data-v-7a784bcc'])
Z(z[1])
Z([3,'更多贵金属行情'])
Z([3,'flex-row flex-items-center data-v-7a784bcc'])
Z([3,'mr-5 data-v-7a784bcc'])
Z([3,'/static/icons/change.png'])
Z([3,'width:30rpx;height:30rpx;'])
Z([3,'font-11 data-v-7a784bcc'])
Z([3,'换一换'])
Z([3,'radiu-box data-v-7a784bcc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'showcase data-v-fc56efdc'])
Z([3,'mt-15 content-box data-v-fc56efdc'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z([3,'id'])
Z([3,'content-item data-v-fc56efdc'])
Z([3,'radiu-box flex-col-around flex-items-center data-v-fc56efdc'])
Z([3,'height:150rpx;'])
Z([3,'mb-10 font-14 data-v-fc56efdc'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'font-16 font-white font-bold data-v-fc56efdc'])
Z([a,[[6],[[7],[3,'item']],[3,'detail']]])
Z(z[6])
Z(z[7])
Z(z[8])
Z([3,'font-orange data-v-fc56efdc'])
Z([3,'更多数据'])
Z(z[16])
Z([3,'正在计算'])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'test container _div data-v-e9140652'])
Z([3,'font-16 font-bold mb-10 data-v-e9140652'])
Z([3,'选择的合约'])
Z([3,'radiu-box _div data-v-e9140652'])
Z([3,'font-15 data-v-e9140652'])
Z([3,'美黄金'])
Z(z[1])
Z([3,'选择回测的时间'])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[1])
Z([3,'选择回测的K线'])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[1])
Z([3,'选择使用的策略'])
Z([3,'radiu-box flex-row-between _div data-v-e9140652'])
Z([3,'flex-col-between _div data-v-e9140652'])
Z([3,'font-white font-bold font-16 data-v-e9140652'])
Z([3,'均线入门策略'])
Z([3,'data-v-e9140652'])
Z([3,'高效简单的策略, 特点是能够长期穿越牛熊'])
Z(z[22])
Z([3,'cover'])
Z([3,'/static/icons/touxiang.png'])
Z([3,'width:100rpx;height:100rpx;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'about'])
Z([3,'content'])
Z([3,'qrcode'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longtap']],[[4],[[5],[[4],[[5],[[5],[1,'save']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/images/qrcode.png'])
Z([3,'tip'])
Z([3,'扫码体验uCharts'])
Z([3,'desc'])
Z([3,'code'])
Z([3,'uCharts'])
Z([3,'是一个基于'])
Z(z[9])
Z([3,'uni-app'])
Z([3,'开发跨平台应用的'])
Z(z[9])
Z([3,'高性能图表工具'])
Z([3,'。'])
Z([3,'source'])
Z([3,'title'])
Z([3,'本示例源码获取方式：'])
Z([3,'source-list'])
Z([3,'source-cell'])
Z([3,'nbsp'])
Z([3,'1.'])
Z([3,'下载 HBuilderX，新建 uni-app 项目时选择'])
Z(z[9])
Z(z[10])
Z([3,'模板。'])
Z(z[22])
Z(z[23])
Z([3,'2.'])
Z(z[3])
Z([3,'link'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openLink']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[7],[3,'sourceLink']]])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'share']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'分享'])
Z([3,'version'])
Z([a,[[2,'+'],[[2,'+'],[1,'当前版本：'],[[7],[3,'version']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding-top:40rpx;'])
Z([3,'padding:0 10%;'])
Z([3,'listcell'])
Z([a,[[2,'+'],[[2,'+'],[1,'用户名:'],[[6],[[7],[3,'userinfo']],[3,'name']]],[1,'']]])
Z(z[2])
Z([a,[[2,'+'],[[2,'+'],[1,'电话:'],[[6],[[7],[3,'userinfo']],[3,'phone']]],[1,'']]])
Z(z[2])
Z([a,[[2,'+'],[[2,'+'],[1,'邮箱:'],[[6],[[7],[3,'userinfo']],[3,'email']]],[1,'']]])
Z([3,'margin-top:80rpx;'])
Z([3,'__e'])
Z([3,'login-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'退 出'])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'feedback-title'])
Z([3,'问题和意见'])
Z([3,'__e'])
Z([3,'feedback-quick'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooseMsg']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'快速键入'])
Z([3,'feedback-body'])
Z(z[3])
Z([3,'feedback-textare'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'content']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'sendDate']]]]]]]]]]])
Z([3,'请详细描述你的问题和意见...'])
Z([[6],[[7],[3,'sendDate']],[3,'content']])
Z(z[1])
Z([3,'手机/邮箱'])
Z(z[7])
Z(z[3])
Z([3,'feedback-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'contact']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'sendDate']]]]]]]]]]])
Z([3,'(选填,方便我们联系你 )'])
Z([[6],[[7],[3,'sendDate']],[3,'contact']])
Z([3,'feedback-title feedback-star-view'])
Z([3,'应用评分'])
Z([3,'feedback-star-view'])
Z([3,'key'])
Z([3,'value'])
Z([[7],[3,'stars']])
Z(z[24])
Z(z[3])
Z([[4],[[5],[[5],[1,'feedback-star']],[[2,'?:'],[[2,'<'],[[7],[3,'key']],[[6],[[7],[3,'sendDate']],[3,'score']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chooseStar']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'stars']],[1,'']],[[7],[3,'key']]]]]]]]]]]]]]]])
Z(z[3])
Z([3,'feedback-submit'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'send']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'center'])
Z([3,'__e'])
Z([3,'logo'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'login']]],[1,'logo-hover'],[1,'']])
Z([3,'logo-img'])
Z([[2,'?:'],[[7],[3,'login']],[[6],[[7],[3,'uerInfo']],[3,'avatarUrl']],[[7],[3,'avatarUrl']]])
Z([3,'logo-title'])
Z([3,'uer-name'])
Z([a,[[2,'+'],[1,'Hi，'],[[2,'?:'],[[7],[3,'login']],[[6],[[7],[3,'uerInfo']],[3,'name']],[1,'您未登录']]]])
Z([[2,'!'],[[7],[3,'login']]])
Z([3,'go-login navigat-arrow'])
Z([3,''])
Z([3,'center-list'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gourl']],[[4],[[5],[1,'account']]]]]]]]]]])
Z([3,'center-list-item border-bottom'])
Z([3,'list-icon'])
Z([3,''])
Z([3,'list-text'])
Z([3,'帐号管理'])
Z([3,'navigat-arrow'])
Z(z[12])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'gourl']],[[4],[[5],[1,'message']]]]]]]]]]])
Z([3,'center-list-item'])
Z(z[17])
Z([3,''])
Z(z[19])
Z([3,'新消息通知'])
Z(z[21])
Z(z[12])
Z(z[13])
Z([3,'navigator-hover'])
Z([3,'feedback'])
Z(z[16])
Z(z[17])
Z([3,''])
Z(z[19])
Z([3,'问题反馈'])
Z(z[21])
Z(z[12])
Z(z[33])
Z([3,'service'])
Z(z[25])
Z(z[17])
Z([3,''])
Z(z[19])
Z([3,'服务条款及协议'])
Z(z[21])
Z(z[12])
Z(z[13])
Z(z[33])
Z([3,'about'])
Z(z[25])
Z(z[17])
Z([3,''])
Z(z[19])
Z([3,'关于应用'])
Z(z[21])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding-top:40rpx;'])
Z([3,'inputArea'])
Z([3,'text-align:center;'])
Z([3,'logo-img'])
Z([3,'../../static/images/avatar.png'])
Z(z[1])
Z([3,'__e'])
Z([3,'inputClass'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'loginUsername']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'11'])
Z([3,'请输入用户名'])
Z([3,'text'])
Z([[7],[3,'loginUsername']])
Z(z[1])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'loginPassword']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入登录密码'])
Z([3,'password'])
Z([[7],[3,'loginPassword']])
Z([3,'padding:0 10%;text-align:center;'])
Z([3,'color:red;'])
Z([a,[[7],[3,'message']]])
Z(z[1])
Z(z[6])
Z([3,'login-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'登 录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-center qiun-columns'])
Z([3,'qiun-none'])
Z([3,'../../static/images/none.jpg'])
Z([3,'qiun-text2'])
Z([3,'没有任何消息'])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-title'])
Z([3,'uCharts服务条款及使用协议'])
Z([3,'qiun-text-view'])
Z([3,'qiun-text'])
Z([3,'欢迎您选择并使用uCharts，uCharts是一款开源的、跨平台的、基于uni-app平台的快速图表生成组件，支持H5、APP、各大小程序。'])
Z(z[3])
Z([3,'使用uCharts前您应当阅读并遵守本协议。请您务必审慎阅读、充分理解各条款内容,特别是免除或者限制责任的条款,以及开通是使用某项服务的单独协议,并选择接收或者不接受。限制、免责条款可能以加粗形式提示您注意。'])
Z(z[3])
Z([3,'除非您已阅读并接受本协议所有条款，否则您无权下载、安装或使用本软件及相关服务。您的下载、安装、使用、登录等行为即视为您已阅读并同意本协议的约束。'])
Z([3,'qiun-text-title'])
Z([3,'一 协议的范围'])
Z(z[9])
Z([3,'1.1 协议适用主体范围：'])
Z(z[3])
Z([3,'本协议适用于uCharts下载、安装、使用、登录本软件，以及使用本服务所订立的协议的人员。'])
Z(z[9])
Z([3,'1.2 协议关系及冲突条款：'])
Z(z[3])
Z([3,'本协议的内容，包括但不限于以下与本服务、本协议相关的协议、规则、规范以及uCharts可能不断发布的关于本服务的相关协议、规则、规范等内容，前述内容一经正式发布，即为本协议不可分割的组成部分，与其构成统一整体，您同样应当遵守。'])
Z(z[9])
Z([3,'二 关于本服务'])
Z(z[9])
Z([3,'2.1 本服务内容：'])
Z(z[3])
Z([3,'本服务内容是指uCharts通过本软件向用户提供的相关服务（简称“本服务”）。'])
Z(z[9])
Z([3,'2.2 本服务形式：'])
Z(z[3])
Z([3,'您可能通过电脑、手机等终端以客户端、网页等形式使用本服务，具体以uCharts提供的为准，同时，uCharts会不断丰富您使用本服务的终端、形式等。当您使用本服务时，您应选择与您的终端、系统等相匹配的本软件版本，否则，您可能无法正常使用本服务。'])
Z(z[9])
Z([3,'2.3 许可的范围'])
Z(z[3])
Z([3,'2.3.1 uCharts给予您一项个人的、不可转让及非排他性的许可，以使用本软件。您可以非商业目的在单一台终端设备上下载、安装、使用、登录本软件。'])
Z(z[3])
Z([3,'2.3.2 您可以制作本软件的一个副本，仅用做备份。备份副本必须包含原软件中含有的所有著作权信息。'])
Z(z[3])
Z([3,'2.3.3 本条及本协议其他条款未明示授权的其它一切权利仍由uCharts保留，您在行使这些权力时须另外取得uCharts的书面许可。uCharts如果未行使前述任何权利，并不构成对该权利的放弃。'])
Z(z[9])
Z([3,'三 软件的获取'])
Z(z[3])
Z([3,'3.1 您可以从uCharts官方网站、uni-app插件市场、码云等平台获取uCharts源码或示例项目。'])
Z(z[3])
Z([3,'3.2 如果您从未经uCharts授权的第三方获取本软件或本软件名称相同的安装程序，uCharts无法保证该软件能够正常使用，并因此给您造成的损失不予负责。'])
Z(z[9])
Z([3,'四 软件的安装与卸载'])
Z(z[3])
Z([3,'4.1 uCharts可能为不同的终端、系统等提供了不同的软件版本，您应当根据实际情况选择下载合适的版本进行安装。'])
Z(z[3])
Z([3,'4.2 下载安装程序后，您需要按照该程序提示的步骤正确安装。'])
Z(z[3])
Z([3,'4.3 如果您不再需要使用本软件或者需要安装新版本软件，可以自行卸载。'])
Z(z[9])
Z([3,'五 软件的更新'])
Z(z[3])
Z([3,'5.1 为了增进用户体验，完善服务内容，uCharts将不断提供新的服务，并为您不时提供软件更新（这些更新可能会采取软件替换、修改、功能强化、版本升级等形式）'])
Z(z[3])
Z([3,'5.2 本软件可能为您默认开启自动升级，更新等功能，但是会把本次更新的内容告知与您，您确认后新版本才能正常使用。'])
Z(z[3])
Z([3,'5.3 本软件新版本确认更新使用后，旧版本的软件可能无法使用，请您随时核对并下载最新版本。'])
Z(z[9])
Z([3,'六 其他'])
Z(z[3])
Z([3,'6.1 您使用本软件或本服务即视为您已阅读并同意接收本协议的约束。uCharts有权在必要时修改本协议条款，您可以在本软件、本服务的最新版本中查阅相关协议条款，本协议条款变更后，如果您继续使用本软件或本服务，即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用本软件。'])
Z(z[3])
Z([3,'6.2 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。'])
Z(z[3])
Z([3,'6.3 若您和uCharts之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。'])
Z(z[3])
Z([3,'6.4 本协议所有条款的标题仅为阅读方便，本身无实际涵义，不能作为本协议涵义解释的依据。'])
Z(z[3])
Z([3,'6.5 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。'])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/u-charts/component.wxml','./components/uni-ui/uni-card/uni-card.wxml','./components/uni-ui/uni-grid/uni-grid.wxml','./components/uni-ui/uni-icon/uni-icon.wxml','./components/uni-ui/uni-notice-bar/uni-notice-bar.wxml','./components/uni-ui/uni-swiper-dot/uni-swiper-dot.wxml','./pages/app/demo/candle.wxml','./pages/app/demo/component.wxml','./pages/app/demo/index.wxml','./pages/app/demo/scroll.wxml','./pages/app/index.wxml','./pages/basic/arcbar/arcbar.wxml','./pages/basic/arcbar/mix.wxml','./pages/basic/area/area.wxml','./pages/basic/area/time.wxml','./pages/basic/candle/candle.wxml','./pages/basic/column/column-scroll.wxml','./pages/basic/column/column.wxml','./pages/basic/column/mark-line.wxml','./pages/basic/column/meter.wxml','./pages/basic/column/rotate.wxml','./pages/basic/column/stack.wxml','./pages/basic/funnel/funnel.wxml','./pages/basic/gauge/gauge.wxml','./pages/basic/index.wxml','./pages/basic/line/curve.wxml','./pages/basic/line/line-scroll.wxml','./pages/basic/line/line.wxml','./pages/basic/line/rotate.wxml','./pages/basic/map/map.wxml','./pages/basic/mix/mix.wxml','./pages/basic/pie/pie.wxml','./pages/basic/pie/ring.wxml','./pages/basic/pie/rose.wxml','./pages/basic/radar/radar.wxml','./pages/basic/word/word.wxml','./pages/doc/index.wxml','./pages/doc/view.wxml','./pages/stock/Chat.wxml','./pages/stock/Contrast.wxml','./pages/stock/Home.wxml','./pages/stock/More.wxml','./pages/stock/ShowCase.wxml','./pages/stock/Test.wxml','./pages/user/about.wxml','./pages/user/account.wxml','./pages/user/feedback.wxml','./pages/user/index.wxml','./pages/user/login.wxml','./pages/user/message.wxml','./pages/user/service.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'canvas',['binderror',1,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'canvasId',4,'class',5,'data-event-opts',6,'id',7,'style',8],[],e,s,gg)
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var fE=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
var oH=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,6,e,s,gg)){cI.wxVkey=1
var lK=_n('view')
_rz(z,lK,'class',7,e,s,gg)
var aL=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(lK,aL)
_(cI,lK)
}
var tM=_n('view')
_rz(z,tM,'class',10,e,s,gg)
var eN=_oz(z,11,e,s,gg)
_(tM,eN)
_(oH,tM)
var oJ=_v()
_(oH,oJ)
if(_oz(z,12,e,s,gg)){oJ.wxVkey=1
var bO=_n('view')
_rz(z,bO,'class',13,e,s,gg)
var oP=_oz(z,14,e,s,gg)
_(bO,oP)
_(oJ,bO)
}
cI.wxXCkey=1
oJ.wxXCkey=1
_(cF,oH)
}
var xQ=_n('view')
_rz(z,xQ,'class',15,e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,16,e,s,gg)){oR.wxVkey=1
var cT=_mz(z,'image',['class',17,'mode',1,'src',2],[],e,s,gg)
_(oR,cT)
}
var fS=_v()
_(xQ,fS)
if(_oz(z,20,e,s,gg)){fS.wxVkey=1
var hU=_n('text')
var oV=_oz(z,21,e,s,gg)
_(hU,oV)
_(fS,hU)
}
oR.wxXCkey=1
fS.wxXCkey=1
_(fE,xQ)
var hG=_v()
_(fE,hG)
if(_oz(z,22,e,s,gg)){hG.wxVkey=1
var cW=_n('view')
_rz(z,cW,'class',23,e,s,gg)
var oX=_oz(z,24,e,s,gg)
_(cW,oX)
_(hG,cW)
}
cF.wxXCkey=1
hG.wxXCkey=1
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aZ=_n('view')
_rz(z,aZ,'class',0,e,s,gg)
var t1=_v()
_(aZ,t1)
var e2=function(o4,b3,x5,gg){
var f7=_n('view')
_rz(z,f7,'class',5,o4,b3,gg)
var c8=_v()
_(f7,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStartTime',4,'hoverStayTime',5,'style',6],[],cAB,o0,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,17,cAB,o0,gg)){tEB.wxVkey=1
var eFB=_n('view')
_rz(z,eFB,'class',18,cAB,o0,gg)
var bGB=_mz(z,'image',['class',19,'src',1],[],cAB,o0,gg)
_(eFB,bGB)
var oHB=_n('text')
_rz(z,oHB,'class',21,cAB,o0,gg)
var xIB=_oz(z,22,cAB,o0,gg)
_(oHB,xIB)
_(eFB,oHB)
_(tEB,eFB)
}
tEB.wxXCkey=1
_(oBB,aDB)
return oBB
}
c8.wxXCkey=2
_2z(z,8,h9,o4,b3,gg,c8,'item','index','index')
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,3,e2,e,s,gg,t1,'items','i','i')
_(r,aZ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fKB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
_(r,fKB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hMB=_v()
_(r,hMB)
if(_oz(z,0,e,s,gg)){hMB.wxVkey=1
var oNB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,5,e,s,gg)){cOB.wxVkey=1
var oPB=_n('view')
_rz(z,oPB,'class',6,e,s,gg)
var lQB=_mz(z,'uni-icon',['bind:__l',7,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
}
var aRB=_n('view')
_rz(z,aRB,'class',11,e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,12,e,s,gg)){tSB.wxVkey=1
var bUB=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
var oVB=_mz(z,'uni-icon',['bind:__l',15,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(bUB,oVB)
_(tSB,bUB)
}
var xWB=_n('view')
_rz(z,xWB,'class',20,e,s,gg)
var oXB=_mz(z,'view',['class',21,'id',1,'style',2],[],e,s,gg)
var fYB=_oz(z,24,e,s,gg)
_(oXB,fYB)
_(xWB,oXB)
_(aRB,xWB)
var eTB=_v()
_(aRB,eTB)
if(_oz(z,25,e,s,gg)){eTB.wxVkey=1
var cZB=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,30,e,s,gg)){h1B.wxVkey=1
var o2B=_n('view')
_rz(z,o2B,'class',31,e,s,gg)
var c3B=_oz(z,32,e,s,gg)
_(o2B,c3B)
_(h1B,o2B)
}
var o4B=_mz(z,'uni-icon',['bind:__l',33,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(cZB,o4B)
h1B.wxXCkey=1
_(eTB,cZB)
}
tSB.wxXCkey=1
tSB.wxXCkey=3
eTB.wxXCkey=1
eTB.wxXCkey=3
_(oNB,aRB)
cOB.wxXCkey=1
cOB.wxXCkey=3
_(hMB,oNB)
}
hMB.wxXCkey=1
hMB.wxXCkey=3
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var a6B=_n('view')
_rz(z,a6B,'class',0,e,s,gg)
var xAC=_n('slot')
_(a6B,xAC)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,1,e,s,gg)){t7B.wxVkey=1
var oBC=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_mz(z,'view',['class',8,'style',1],[],oFC,hEC,gg)
_(cGC,lIC)
return cGC
}
fCC.wxXCkey=2
_2z(z,6,cDC,e,s,gg,fCC,'item','index','index')
_(t7B,oBC)
}
var e8B=_v()
_(a6B,e8B)
if(_oz(z,10,e,s,gg)){e8B.wxVkey=1
var aJC=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var tKC=_v()
_(aJC,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_mz(z,'view',['class',17,'style',1],[],oNC,bMC,gg)
_(xOC,fQC)
return xOC
}
tKC.wxXCkey=2
_2z(z,15,eLC,e,s,gg,tKC,'item','index','index')
_(e8B,aJC)
}
var b9B=_v()
_(a6B,b9B)
if(_oz(z,19,e,s,gg)){b9B.wxVkey=1
var cRC=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
var hSC=_mz(z,'view',['class',22,'style',1],[],e,s,gg)
var oTC=_oz(z,24,e,s,gg)
_(hSC,oTC)
_(cRC,hSC)
_(b9B,cRC)
}
var o0B=_v()
_(a6B,o0B)
if(_oz(z,25,e,s,gg)){o0B.wxVkey=1
var cUC=_mz(z,'view',['class',26,'style',1],[],e,s,gg)
var oVC=_v()
_(cUC,oVC)
var lWC=function(tYC,aXC,eZC,gg){
var o2C=_mz(z,'view',['class',32,'style',1],[],tYC,aXC,gg)
var x3C=_oz(z,34,tYC,aXC,gg)
_(o2C,x3C)
_(eZC,o2C)
return eZC
}
oVC.wxXCkey=2
_2z(z,30,lWC,e,s,gg,oVC,'item','index','index')
_(o0B,cUC)
}
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
_(r,a6B)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var f5C=_n('view')
_rz(z,f5C,'class',0,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',1,e,s,gg)
var h7C=_n('view')
_rz(z,h7C,'class',2,e,s,gg)
var o8C=_oz(z,3,e,s,gg)
_(h7C,o8C)
_(c6C,h7C)
var c9C=_n('view')
_rz(z,c9C,'style',4,e,s,gg)
var o0C=_mz(z,'button',['bindtap',5,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var lAD=_oz(z,9,e,s,gg)
_(o0C,lAD)
_(c9C,o0C)
var aBD=_mz(z,'button',['bindtap',10,'data-event-opts',1,'size',2,'style',3,'type',4],[],e,s,gg)
var tCD=_oz(z,15,e,s,gg)
_(aBD,tCD)
_(c9C,aBD)
_(c6C,c9C)
_(f5C,c6C)
var eDD=_n('view')
_rz(z,eDD,'class',16,e,s,gg)
var bED=_mz(z,'canvas',['bindtouchend',17,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(eDD,bED)
_(f5C,eDD)
var oFD=_n('view')
_rz(z,oFD,'class',25,e,s,gg)
var xGD=_mz(z,'canvas',['canvasId',26,'class',1,'id',2],[],e,s,gg)
_(oFD,xGD)
_(f5C,oFD)
var oHD=_n('view')
_rz(z,oHD,'class',29,e,s,gg)
var fID=_mz(z,'slider',['bindchange',30,'bindchanging',1,'blockColor',2,'blockSize',3,'data-event-opts',4,'max',5,'min',6,'value',7],[],e,s,gg)
_(oHD,fID)
_(f5C,oHD)
_(r,f5C)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hKD=_n('view')
var oLD=_v()
_(hKD,oLD)
var cMD=function(lOD,oND,aPD,gg){
var eRD=_mz(z,'view',['class',4,'style',1],[],lOD,oND,gg)
var bSD=_mz(z,'u-charts',['bind:__l',6,'cHeight',1,'cWidth',2,'canvasId',3,'chartType',4,'class',5,'data-ref',6,'opts',7,'vueId',8],[],lOD,oND,gg)
_(eRD,bSD)
_(aPD,eRD)
return aPD
}
oLD.wxXCkey=4
_2z(z,2,cMD,e,s,gg,oLD,'item','index','index')
var oTD=_mz(z,'button',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var xUD=_oz(z,18,e,s,gg)
_(oTD,xUD)
_(hKD,oTD)
_(r,hKD)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var fWD=_n('view')
_rz(z,fWD,'class',0,e,s,gg)
var cXD=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var hYD=_n('text')
var oZD=_oz(z,3,e,s,gg)
_(hYD,oZD)
_(cXD,hYD)
_(fWD,cXD)
var c1D=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var o2D=_n('view')
_rz(z,o2D,'class',6,e,s,gg)
var l3D=_oz(z,7,e,s,gg)
_(o2D,l3D)
_(c1D,o2D)
_(fWD,c1D)
var a4D=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var t5D=_mz(z,'canvas',['bindtouchstart',10,'canvasId',1,'class',2,'data-event-opts',3,'id',4,'style',5],[],e,s,gg)
_(a4D,t5D)
_(fWD,a4D)
var e6D=_n('view')
_rz(z,e6D,'class',16,e,s,gg)
var b7D=_n('view')
_rz(z,b7D,'class',17,e,s,gg)
var o8D=_oz(z,18,e,s,gg)
_(b7D,o8D)
_(e6D,b7D)
_(fWD,e6D)
var x9D=_n('view')
_rz(z,x9D,'class',19,e,s,gg)
var o0D=_mz(z,'canvas',['bindtouchstart',20,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(x9D,o0D)
_(fWD,x9D)
var fAE=_n('view')
_rz(z,fAE,'class',25,e,s,gg)
var cBE=_n('view')
_rz(z,cBE,'class',26,e,s,gg)
var hCE=_oz(z,27,e,s,gg)
_(cBE,hCE)
_(fAE,cBE)
_(fWD,fAE)
var oDE=_n('view')
_rz(z,oDE,'class',28,e,s,gg)
var cEE=_mz(z,'canvas',['bindtouchend',29,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(oDE,cEE)
_(fWD,oDE)
var oFE=_n('view')
_rz(z,oFE,'class',37,e,s,gg)
var lGE=_n('view')
_rz(z,lGE,'class',38,e,s,gg)
var aHE=_oz(z,39,e,s,gg)
_(lGE,aHE)
_(oFE,lGE)
_(fWD,oFE)
var tIE=_n('view')
_rz(z,tIE,'class',40,e,s,gg)
var eJE=_mz(z,'canvas',['bindtouchend',41,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(tIE,eJE)
_(fWD,tIE)
var bKE=_n('view')
_rz(z,bKE,'class',49,e,s,gg)
var oLE=_mz(z,'view',['bindtap',50,'class',1,'data-event-opts',2],[],e,s,gg)
var xME=_oz(z,53,e,s,gg)
_(oLE,xME)
_(bKE,oLE)
_(fWD,bKE)
var oNE=_n('view')
_rz(z,oNE,'class',54,e,s,gg)
var fOE=_n('view')
_rz(z,fOE,'class',55,e,s,gg)
var cPE=_oz(z,56,e,s,gg)
_(fOE,cPE)
_(oNE,fOE)
_(fWD,oNE)
var hQE=_n('view')
_rz(z,hQE,'class',57,e,s,gg)
var oRE=_mz(z,'canvas',['canvasId',58,'class',1,'id',2],[],e,s,gg)
_(hQE,oRE)
_(fWD,hQE)
var cSE=_n('view')
_rz(z,cSE,'class',61,e,s,gg)
var oTE=_n('view')
_rz(z,oTE,'class',62,e,s,gg)
var lUE=_oz(z,63,e,s,gg)
_(oTE,lUE)
_(cSE,oTE)
_(fWD,cSE)
var aVE=_n('view')
_rz(z,aVE,'class',64,e,s,gg)
var tWE=_mz(z,'canvas',['canvasId',65,'class',1,'id',2],[],e,s,gg)
_(aVE,tWE)
var eXE=_mz(z,'canvas',['canvasId',68,'class',1,'id',2,'style',3],[],e,s,gg)
_(aVE,eXE)
var bYE=_mz(z,'canvas',['canvasId',72,'class',1,'id',2,'style',3],[],e,s,gg)
_(aVE,bYE)
_(fWD,aVE)
var oZE=_n('view')
_rz(z,oZE,'class',76,e,s,gg)
var x1E=_n('view')
_rz(z,x1E,'class',77,e,s,gg)
var o2E=_oz(z,78,e,s,gg)
_(x1E,o2E)
_(oZE,x1E)
_(fWD,oZE)
var f3E=_n('view')
_rz(z,f3E,'class',79,e,s,gg)
var c4E=_mz(z,'canvas',['bindtouchstart',80,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(f3E,c4E)
_(fWD,f3E)
var h5E=_n('view')
_rz(z,h5E,'class',85,e,s,gg)
var o6E=_n('view')
_rz(z,o6E,'class',86,e,s,gg)
var c7E=_oz(z,87,e,s,gg)
_(o6E,c7E)
_(h5E,o6E)
_(fWD,h5E)
var o8E=_n('view')
_rz(z,o8E,'class',88,e,s,gg)
var l9E=_mz(z,'canvas',['bindtouchend',89,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(o8E,l9E)
_(fWD,o8E)
var a0E=_n('view')
_rz(z,a0E,'class',97,e,s,gg)
var tAF=_n('view')
_rz(z,tAF,'class',98,e,s,gg)
var eBF=_oz(z,99,e,s,gg)
_(tAF,eBF)
_(a0E,tAF)
_(fWD,a0E)
var bCF=_n('view')
_rz(z,bCF,'class',100,e,s,gg)
var oDF=_mz(z,'canvas',['bindtouchstart',101,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(bCF,oDF)
_(fWD,bCF)
var xEF=_n('view')
_rz(z,xEF,'class',106,e,s,gg)
var oFF=_n('view')
_rz(z,oFF,'class',107,e,s,gg)
var fGF=_oz(z,108,e,s,gg)
_(oFF,fGF)
_(xEF,oFF)
_(fWD,xEF)
var cHF=_n('view')
_rz(z,cHF,'class',109,e,s,gg)
var hIF=_mz(z,'canvas',['bindtouchstart',110,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(cHF,hIF)
_(fWD,cHF)
var oJF=_n('view')
_rz(z,oJF,'class',115,e,s,gg)
var cKF=_n('view')
_rz(z,cKF,'class',116,e,s,gg)
var oLF=_oz(z,117,e,s,gg)
_(cKF,oLF)
_(oJF,cKF)
_(fWD,oJF)
var lMF=_n('view')
_rz(z,lMF,'class',118,e,s,gg)
var aNF=_mz(z,'canvas',['bindtouchstart',119,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(lMF,aNF)
_(fWD,lMF)
var tOF=_n('view')
_rz(z,tOF,'class',124,e,s,gg)
var ePF=_n('view')
_rz(z,ePF,'class',125,e,s,gg)
var bQF=_oz(z,126,e,s,gg)
_(ePF,bQF)
_(tOF,ePF)
_(fWD,tOF)
var oRF=_n('view')
_rz(z,oRF,'class',127,e,s,gg)
var xSF=_mz(z,'canvas',['bindtouchstart',128,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(oRF,xSF)
_(fWD,oRF)
var oTF=_n('view')
_rz(z,oTF,'class',133,e,s,gg)
var fUF=_n('view')
_rz(z,fUF,'class',134,e,s,gg)
var cVF=_oz(z,135,e,s,gg)
_(fUF,cVF)
_(oTF,fUF)
_(fWD,oTF)
var hWF=_n('view')
_rz(z,hWF,'class',136,e,s,gg)
var oXF=_mz(z,'canvas',['bindtouchstart',137,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(hWF,oXF)
_(fWD,hWF)
_(r,fWD)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oZF=_n('view')
_rz(z,oZF,'class',0,e,s,gg)
var l1F=_mz(z,'scroll-view',['bindscroll',1,'data-event-opts',1,'scrollY',2,'style',3],[],e,s,gg)
var a2F=_n('view')
_rz(z,a2F,'style',5,e,s,gg)
var t3F=_mz(z,'image',['src',6,'style',1],[],e,s,gg)
_(a2F,t3F)
_(l1F,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',8,e,s,gg)
var b5F=_n('view')
_rz(z,b5F,'class',9,e,s,gg)
var o6F=_oz(z,10,e,s,gg)
_(b5F,o6F)
_(e4F,b5F)
_(l1F,e4F)
var x7F=_n('view')
_rz(z,x7F,'class',11,e,s,gg)
var o8F=_mz(z,'canvas',['bindtouchstart',12,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(x7F,o8F)
_(l1F,x7F)
_(oZF,l1F)
_(r,oZF)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var c0F=_n('view')
var hAG=_v()
_(c0F,hAG)
var oBG=function(oDG,cCG,lEG,gg){
var tGG=_mz(z,'uni-card',['bgcolor',4,'bind:__l',1,'bind:click',2,'data-event-opts',3,'images',4,'note',5,'texts',6,'thumbnail',7,'title',8,'vueId',9],[],oDG,cCG,gg)
_(lEG,tGG)
return lEG
}
hAG.wxXCkey=4
_2z(z,2,oBG,e,s,gg,hAG,'item','index','index')
_(r,c0F)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var bIG=_n('view')
_rz(z,bIG,'class',0,e,s,gg)
var oJG=_n('view')
_rz(z,oJG,'class',1,e,s,gg)
var xKG=_n('view')
_rz(z,xKG,'class',2,e,s,gg)
var oLG=_oz(z,3,e,s,gg)
_(xKG,oLG)
_(oJG,xKG)
_(bIG,oJG)
var fMG=_n('view')
_rz(z,fMG,'class',4,e,s,gg)
var cNG=_mz(z,'canvas',['canvasId',5,'class',1,'id',2],[],e,s,gg)
_(fMG,cNG)
var hOG=_mz(z,'canvas',['canvasId',8,'class',1,'id',2,'style',3],[],e,s,gg)
_(fMG,hOG)
var oPG=_mz(z,'canvas',['canvasId',12,'class',1,'id',2,'style',3],[],e,s,gg)
_(fMG,oPG)
_(bIG,fMG)
_(r,bIG)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oRG=_n('view')
_rz(z,oRG,'class',0,e,s,gg)
var lSG=_n('view')
_rz(z,lSG,'class',1,e,s,gg)
var aTG=_n('view')
_rz(z,aTG,'class',2,e,s,gg)
var tUG=_oz(z,3,e,s,gg)
_(aTG,tUG)
_(lSG,aTG)
_(oRG,lSG)
var eVG=_n('view')
_rz(z,eVG,'class',4,e,s,gg)
var bWG=_mz(z,'canvas',['canvasId',5,'class',1,'id',2],[],e,s,gg)
_(eVG,bWG)
_(oRG,eVG)
_(r,oRG)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var xYG=_n('view')
_rz(z,xYG,'class',0,e,s,gg)
var oZG=_n('view')
_rz(z,oZG,'class',1,e,s,gg)
var f1G=_n('view')
_rz(z,f1G,'class',2,e,s,gg)
var c2G=_oz(z,3,e,s,gg)
_(f1G,c2G)
_(oZG,f1G)
_(xYG,oZG)
var h3G=_n('view')
_rz(z,h3G,'class',4,e,s,gg)
var o4G=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(h3G,o4G)
_(xYG,h3G)
_(r,xYG)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o6G=_n('view')
_rz(z,o6G,'class',0,e,s,gg)
var l7G=_n('view')
_rz(z,l7G,'class',1,e,s,gg)
var a8G=_n('view')
_rz(z,a8G,'class',2,e,s,gg)
var t9G=_oz(z,3,e,s,gg)
_(a8G,t9G)
_(l7G,a8G)
_(o6G,l7G)
var e0G=_n('view')
_rz(z,e0G,'class',4,e,s,gg)
var bAH=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(e0G,bAH)
_(o6G,e0G)
_(r,o6G)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var xCH=_n('view')
_rz(z,xCH,'class',0,e,s,gg)
var oDH=_n('view')
_rz(z,oDH,'class',1,e,s,gg)
var fEH=_n('view')
_rz(z,fEH,'class',2,e,s,gg)
var cFH=_oz(z,3,e,s,gg)
_(fEH,cFH)
_(oDH,fEH)
var hGH=_n('view')
_rz(z,hGH,'style',4,e,s,gg)
var oHH=_mz(z,'button',['bindtap',5,'data-event-opts',1,'size',2,'type',3],[],e,s,gg)
var cIH=_oz(z,9,e,s,gg)
_(oHH,cIH)
_(hGH,oHH)
var oJH=_mz(z,'button',['bindtap',10,'data-event-opts',1,'size',2,'style',3,'type',4],[],e,s,gg)
var lKH=_oz(z,15,e,s,gg)
_(oJH,lKH)
_(hGH,oJH)
_(oDH,hGH)
_(xCH,oDH)
var aLH=_n('view')
_rz(z,aLH,'class',16,e,s,gg)
var tMH=_mz(z,'canvas',['bindtouchend',17,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(aLH,tMH)
_(xCH,aLH)
var eNH=_n('view')
_rz(z,eNH,'class',25,e,s,gg)
var bOH=_mz(z,'slider',['bindchange',26,'bindchanging',1,'blockColor',2,'blockSize',3,'data-event-opts',4,'max',5,'min',6,'value',7],[],e,s,gg)
_(eNH,bOH)
_(xCH,eNH)
_(r,xCH)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var xQH=_n('view')
_rz(z,xQH,'class',0,e,s,gg)
var oRH=_n('view')
_rz(z,oRH,'class',1,e,s,gg)
var fSH=_n('view')
_rz(z,fSH,'class',2,e,s,gg)
var cTH=_oz(z,3,e,s,gg)
_(fSH,cTH)
_(oRH,fSH)
_(xQH,oRH)
var hUH=_n('view')
_rz(z,hUH,'class',4,e,s,gg)
var oVH=_mz(z,'canvas',['bindtouchend',5,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(hUH,oVH)
_(xQH,hUH)
_(r,xQH)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oXH=_n('view')
_rz(z,oXH,'class',0,e,s,gg)
var lYH=_n('view')
_rz(z,lYH,'class',1,e,s,gg)
var aZH=_n('view')
_rz(z,aZH,'class',2,e,s,gg)
var t1H=_oz(z,3,e,s,gg)
_(aZH,t1H)
_(lYH,aZH)
_(oXH,lYH)
var e2H=_n('view')
_rz(z,e2H,'class',4,e,s,gg)
var b3H=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(e2H,b3H)
_(oXH,e2H)
_(r,oXH)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var x5H=_n('view')
_rz(z,x5H,'class',0,e,s,gg)
var o6H=_n('view')
_rz(z,o6H,'class',1,e,s,gg)
var f7H=_n('view')
_rz(z,f7H,'class',2,e,s,gg)
var c8H=_oz(z,3,e,s,gg)
_(f7H,c8H)
_(o6H,f7H)
_(x5H,o6H)
var h9H=_n('view')
_rz(z,h9H,'class',4,e,s,gg)
var o0H=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(h9H,o0H)
_(x5H,h9H)
_(r,x5H)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var oBI=_n('view')
_rz(z,oBI,'class',0,e,s,gg)
var lCI=_n('view')
_rz(z,lCI,'class',1,e,s,gg)
var aDI=_n('view')
_rz(z,aDI,'class',2,e,s,gg)
var tEI=_oz(z,3,e,s,gg)
_(aDI,tEI)
_(lCI,aDI)
_(oBI,lCI)
var eFI=_n('view')
_rz(z,eFI,'class',4,e,s,gg)
var bGI=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(eFI,bGI)
_(oBI,eFI)
_(r,oBI)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var xII=_n('view')
_rz(z,xII,'class',0,e,s,gg)
var oJI=_n('view')
_rz(z,oJI,'class',1,e,s,gg)
var fKI=_n('view')
_rz(z,fKI,'class',2,e,s,gg)
var cLI=_oz(z,3,e,s,gg)
_(fKI,cLI)
_(oJI,fKI)
_(xII,oJI)
var hMI=_n('view')
_rz(z,hMI,'class',4,e,s,gg)
var oNI=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(hMI,oNI)
_(xII,hMI)
_(r,xII)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oPI=_n('view')
_rz(z,oPI,'class',0,e,s,gg)
var lQI=_n('view')
_rz(z,lQI,'class',1,e,s,gg)
var aRI=_n('view')
_rz(z,aRI,'class',2,e,s,gg)
var tSI=_oz(z,3,e,s,gg)
_(aRI,tSI)
_(lQI,aRI)
_(oPI,lQI)
var eTI=_n('view')
_rz(z,eTI,'class',4,e,s,gg)
var bUI=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(eTI,bUI)
_(oPI,eTI)
_(r,oPI)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var xWI=_n('view')
_rz(z,xWI,'class',0,e,s,gg)
var oXI=_n('view')
_rz(z,oXI,'class',1,e,s,gg)
var fYI=_n('view')
_rz(z,fYI,'class',2,e,s,gg)
var cZI=_oz(z,3,e,s,gg)
_(fYI,cZI)
_(oXI,fYI)
_(xWI,oXI)
var h1I=_n('view')
_rz(z,h1I,'class',4,e,s,gg)
var o2I=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(h1I,o2I)
_(xWI,h1I)
_(r,xWI)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var o4I=_n('view')
_rz(z,o4I,'class',0,e,s,gg)
var l5I=_mz(z,'button',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var a6I=_oz(z,4,e,s,gg)
_(l5I,a6I)
_(o4I,l5I)
var t7I=_n('view')
_rz(z,t7I,'class',5,e,s,gg)
var e8I=_n('view')
_rz(z,e8I,'class',6,e,s,gg)
var b9I=_oz(z,7,e,s,gg)
_(e8I,b9I)
_(t7I,e8I)
_(o4I,t7I)
var o0I=_n('view')
_rz(z,o0I,'class',8,e,s,gg)
var xAJ=_mz(z,'canvas',['canvasId',9,'class',1,'id',2],[],e,s,gg)
_(o0I,xAJ)
_(o4I,o0I)
_(r,o4I)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var fCJ=_n('view')
var cDJ=_mz(z,'uni-swiper-dot',['bind:__l',0,'current',1,'field',1,'info',2,'mode',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var hEJ=_mz(z,'swiper',['bindchange',7,'class',1,'data-event-opts',2],[],e,s,gg)
var oFJ=_v()
_(hEJ,oFJ)
var cGJ=function(lIJ,oHJ,aJJ,gg){
var eLJ=_n('swiper-item')
var bMJ=_mz(z,'image',['class',14,'src',1],[],lIJ,oHJ,gg)
_(eLJ,bMJ)
_(aJJ,eLJ)
return aJJ
}
oFJ.wxXCkey=2
_2z(z,12,cGJ,e,s,gg,oFJ,'item','index','index')
_(cDJ,hEJ)
_(fCJ,cDJ)
var oNJ=_mz(z,'uni-notice-bar',['bind:__l',16,'scrollable',1,'showIcon',2,'single',3,'speed',4,'text',5,'vueId',6],[],e,s,gg)
_(fCJ,oNJ)
var xOJ=_mz(z,'uni-grid',['bind:__l',23,'columnNum',1,'options',2,'vueId',3],[],e,s,gg)
_(fCJ,xOJ)
_(r,fCJ)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var fQJ=_n('view')
_rz(z,fQJ,'class',0,e,s,gg)
var cRJ=_n('view')
_rz(z,cRJ,'class',1,e,s,gg)
var hSJ=_n('view')
_rz(z,hSJ,'class',2,e,s,gg)
var oTJ=_oz(z,3,e,s,gg)
_(hSJ,oTJ)
_(cRJ,hSJ)
_(fQJ,cRJ)
var cUJ=_n('view')
_rz(z,cUJ,'class',4,e,s,gg)
var oVJ=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(cUJ,oVJ)
_(fQJ,cUJ)
_(r,fQJ)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var aXJ=_n('view')
_rz(z,aXJ,'class',0,e,s,gg)
var tYJ=_n('view')
_rz(z,tYJ,'class',1,e,s,gg)
var eZJ=_n('view')
_rz(z,eZJ,'class',2,e,s,gg)
var b1J=_oz(z,3,e,s,gg)
_(eZJ,b1J)
_(tYJ,eZJ)
_(aXJ,tYJ)
var o2J=_n('view')
_rz(z,o2J,'class',4,e,s,gg)
var x3J=_mz(z,'canvas',['bindtouchend',5,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(o2J,x3J)
_(aXJ,o2J)
_(r,aXJ)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var f5J=_n('view')
_rz(z,f5J,'class',0,e,s,gg)
var c6J=_n('view')
_rz(z,c6J,'class',1,e,s,gg)
var h7J=_n('view')
_rz(z,h7J,'class',2,e,s,gg)
var o8J=_oz(z,3,e,s,gg)
_(h7J,o8J)
_(c6J,h7J)
_(f5J,c6J)
var c9J=_n('view')
_rz(z,c9J,'class',4,e,s,gg)
var o0J=_n('text')
var lAK=_oz(z,5,e,s,gg)
_(o0J,lAK)
_(c9J,o0J)
_(f5J,c9J)
var aBK=_n('view')
_rz(z,aBK,'class',6,e,s,gg)
var tCK=_mz(z,'canvas',['bindtouchend',7,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'id',6],[],e,s,gg)
_(aBK,tCK)
_(f5J,aBK)
var eDK=_mz(z,'view',['class',14,'style',1],[],e,s,gg)
var bEK=_oz(z,16,e,s,gg)
_(eDK,bEK)
_(f5J,eDK)
_(r,f5J)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var xGK=_n('view')
_rz(z,xGK,'class',0,e,s,gg)
var oHK=_n('view')
_rz(z,oHK,'class',1,e,s,gg)
var fIK=_n('view')
_rz(z,fIK,'class',2,e,s,gg)
var cJK=_oz(z,3,e,s,gg)
_(fIK,cJK)
_(oHK,fIK)
_(xGK,oHK)
var hKK=_n('view')
_rz(z,hKK,'class',4,e,s,gg)
var oLK=_mz(z,'canvas',['bindtouchend',5,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'id',6],[],e,s,gg)
_(hKK,oLK)
_(xGK,hKK)
_(r,xGK)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oNK=_n('view')
_rz(z,oNK,'class',0,e,s,gg)
var lOK=_n('view')
_rz(z,lOK,'class',1,e,s,gg)
var aPK=_n('view')
_rz(z,aPK,'class',2,e,s,gg)
var tQK=_oz(z,3,e,s,gg)
_(aPK,tQK)
_(lOK,aPK)
_(oNK,lOK)
var eRK=_n('view')
_rz(z,eRK,'class',4,e,s,gg)
var bSK=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(eRK,bSK)
_(oNK,eRK)
_(r,oNK)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var xUK=_n('view')
_rz(z,xUK,'class',0,e,s,gg)
var oVK=_n('view')
_rz(z,oVK,'class',1,e,s,gg)
var fWK=_n('view')
_rz(z,fWK,'class',2,e,s,gg)
var cXK=_oz(z,3,e,s,gg)
_(fWK,cXK)
_(oVK,fWK)
_(xUK,oVK)
var hYK=_n('view')
_rz(z,hYK,'class',4,e,s,gg)
var oZK=_mz(z,'canvas',['bindtouchend',5,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'id',7],[],e,s,gg)
_(hYK,oZK)
_(xUK,hYK)
_(r,xUK)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var o2K=_n('view')
_rz(z,o2K,'class',0,e,s,gg)
var l3K=_n('view')
_rz(z,l3K,'class',1,e,s,gg)
var a4K=_n('view')
_rz(z,a4K,'class',2,e,s,gg)
var t5K=_oz(z,3,e,s,gg)
_(a4K,t5K)
_(l3K,a4K)
_(o2K,l3K)
var e6K=_n('view')
_rz(z,e6K,'class',4,e,s,gg)
var b7K=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(e6K,b7K)
_(o2K,e6K)
_(r,o2K)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var x9K=_n('view')
_rz(z,x9K,'class',0,e,s,gg)
var o0K=_n('view')
_rz(z,o0K,'class',1,e,s,gg)
var fAL=_n('view')
_rz(z,fAL,'class',2,e,s,gg)
var cBL=_oz(z,3,e,s,gg)
_(fAL,cBL)
_(o0K,fAL)
_(x9K,o0K)
var hCL=_n('view')
_rz(z,hCL,'class',4,e,s,gg)
var oDL=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(hCL,oDL)
_(x9K,hCL)
_(r,x9K)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var oFL=_n('view')
_rz(z,oFL,'class',0,e,s,gg)
var lGL=_n('view')
_rz(z,lGL,'class',1,e,s,gg)
var aHL=_n('view')
_rz(z,aHL,'class',2,e,s,gg)
var tIL=_oz(z,3,e,s,gg)
_(aHL,tIL)
_(lGL,aHL)
_(oFL,lGL)
var eJL=_n('view')
_rz(z,eJL,'class',4,e,s,gg)
var bKL=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(eJL,bKL)
_(oFL,eJL)
var oLL=_n('view')
_rz(z,oLL,'class',10,e,s,gg)
var xML=_n('view')
_rz(z,xML,'class',11,e,s,gg)
var oNL=_oz(z,12,e,s,gg)
_(xML,oNL)
_(oLL,xML)
_(oFL,oLL)
var fOL=_n('view')
_rz(z,fOL,'class',13,e,s,gg)
var cPL=_mz(z,'canvas',['bindtouchstart',14,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(fOL,cPL)
_(oFL,fOL)
_(r,oFL)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oRL=_n('view')
_rz(z,oRL,'class',0,e,s,gg)
var cSL=_n('view')
_rz(z,cSL,'class',1,e,s,gg)
var oTL=_n('view')
_rz(z,oTL,'class',2,e,s,gg)
var lUL=_oz(z,3,e,s,gg)
_(oTL,lUL)
_(cSL,oTL)
_(oRL,cSL)
var aVL=_n('view')
_rz(z,aVL,'class',4,e,s,gg)
var tWL=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(aVL,tWL)
_(oRL,aVL)
_(r,oRL)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var bYL=_n('view')
_rz(z,bYL,'class',0,e,s,gg)
var oZL=_n('view')
_rz(z,oZL,'class',1,e,s,gg)
var x1L=_n('view')
_rz(z,x1L,'class',2,e,s,gg)
var o2L=_oz(z,3,e,s,gg)
_(x1L,o2L)
_(oZL,x1L)
_(bYL,oZL)
var f3L=_n('view')
_rz(z,f3L,'class',4,e,s,gg)
var c4L=_mz(z,'canvas',['bindtouchstart',5,'canvasId',1,'class',2,'data-event-opts',3,'id',4],[],e,s,gg)
_(f3L,c4L)
_(bYL,f3L)
var h5L=_mz(z,'button',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var o6L=_oz(z,13,e,s,gg)
_(h5L,o6L)
_(bYL,h5L)
_(r,bYL)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var o8L=_n('view')
var l9L=_v()
_(o8L,l9L)
var a0L=function(eBM,tAM,bCM,gg){
var xEM=_n('view')
_rz(z,xEM,'class',4,eBM,tAM,gg)
var oFM=_mz(z,'view',['class',5,'style',1],[],eBM,tAM,gg)
var fGM=_n('text')
_rz(z,fGM,'style',7,eBM,tAM,gg)
var cHM=_oz(z,8,eBM,tAM,gg)
_(fGM,cHM)
_(oFM,fGM)
var hIM=_mz(z,'uni-icon',['bind:__l',9,'color',1,'size',2,'type',3,'vueId',4],[],eBM,tAM,gg)
_(oFM,hIM)
_(xEM,oFM)
var oJM=_n('view')
_rz(z,oJM,'class',14,eBM,tAM,gg)
var cKM=_v()
_(oJM,cKM)
var oLM=function(aNM,lMM,tOM,gg){
var bQM=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],aNM,lMM,gg)
var oRM=_n('text')
_rz(z,oRM,'style',22,aNM,lMM,gg)
var xSM=_oz(z,23,aNM,lMM,gg)
_(oRM,xSM)
_(bQM,oRM)
var oTM=_mz(z,'uni-icon',['bind:__l',24,'color',1,'size',2,'type',3,'vueId',4],[],aNM,lMM,gg)
_(bQM,oTM)
_(tOM,bQM)
return tOM
}
cKM.wxXCkey=4
_2z(z,17,oLM,eBM,tAM,gg,cKM,'item2','index2','index2')
_(xEM,oJM)
_(bCM,xEM)
return bCM
}
l9L.wxXCkey=4
_2z(z,2,a0L,e,s,gg,l9L,'item','index','index')
_(r,o8L)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var cVM=_n('view')
var hWM=_v()
_(cVM,hWM)
var oXM=function(oZM,cYM,l1M,gg){
var t3M=_mz(z,'uni-card',['bgcolor',4,'bind:__l',1,'note',2,'texts',3,'title',4,'vueId',5],[],oZM,cYM,gg)
_(l1M,t3M)
return l1M
}
hWM.wxXCkey=4
_2z(z,2,oXM,e,s,gg,hWM,'item','index','index')
_(r,cVM)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var b5M=_n('view')
_rz(z,b5M,'class',0,e,s,gg)
var x7M=_n('view')
_rz(z,x7M,'class',1,e,s,gg)
var o8M=_n('text')
_rz(z,o8M,'class',2,e,s,gg)
var f9M=_oz(z,3,e,s,gg)
_(o8M,f9M)
_(x7M,o8M)
var c0M=_n('text')
_rz(z,c0M,'class',4,e,s,gg)
var hAN=_oz(z,5,e,s,gg)
_(c0M,hAN)
_(x7M,c0M)
_(b5M,x7M)
var oBN=_n('view')
_rz(z,oBN,'class',6,e,s,gg)
var cCN=_mz(z,'image',['class',7,'resize',1,'src',2,'style',3],[],e,s,gg)
_(oBN,cCN)
_(b5M,oBN)
var oDN=_n('text')
_rz(z,oDN,'class',11,e,s,gg)
var lEN=_oz(z,12,e,s,gg)
_(oDN,lEN)
_(b5M,oDN)
var aFN=_n('view')
_rz(z,aFN,'class',13,e,s,gg)
var tGN=_n('view')
_rz(z,tGN,'class',14,e,s,gg)
var eHN=_mz(z,'image',['class',15,'src',1,'style',2],[],e,s,gg)
_(tGN,eHN)
var bIN=_n('text')
_rz(z,bIN,'class',18,e,s,gg)
var oJN=_oz(z,19,e,s,gg)
_(bIN,oJN)
_(tGN,bIN)
var xKN=_n('text')
_rz(z,xKN,'class',20,e,s,gg)
var oLN=_oz(z,21,e,s,gg)
_(xKN,oLN)
_(tGN,xKN)
var fMN=_n('text')
_rz(z,fMN,'class',22,e,s,gg)
var cNN=_oz(z,23,e,s,gg)
_(fMN,cNN)
_(tGN,fMN)
_(aFN,tGN)
var hON=_n('view')
_rz(z,hON,'class',24,e,s,gg)
var oPN=_mz(z,'image',['class',25,'src',1,'style',2],[],e,s,gg)
_(hON,oPN)
var cQN=_n('text')
_rz(z,cQN,'class',28,e,s,gg)
var oRN=_oz(z,29,e,s,gg)
_(cQN,oRN)
_(hON,cQN)
var lSN=_n('text')
_rz(z,lSN,'class',30,e,s,gg)
var aTN=_oz(z,31,e,s,gg)
_(lSN,aTN)
_(hON,lSN)
var tUN=_n('text')
_rz(z,tUN,'class',32,e,s,gg)
var eVN=_oz(z,33,e,s,gg)
_(tUN,eVN)
_(hON,tUN)
_(aFN,hON)
_(b5M,aFN)
var bWN=_n('view')
_rz(z,bWN,'class',34,e,s,gg)
var oXN=_mz(z,'image',['class',35,'resize',1,'src',2],[],e,s,gg)
_(bWN,oXN)
var xYN=_n('view')
_rz(z,xYN,'class',38,e,s,gg)
var oZN=_n('text')
_rz(z,oZN,'class',39,e,s,gg)
var f1N=_oz(z,40,e,s,gg)
_(oZN,f1N)
_(xYN,oZN)
var c2N=_n('text')
_rz(z,c2N,'class',41,e,s,gg)
var h3N=_oz(z,42,e,s,gg)
_(c2N,h3N)
_(xYN,c2N)
var o4N=_n('text')
_rz(z,o4N,'class',43,e,s,gg)
var c5N=_oz(z,44,e,s,gg)
_(o4N,c5N)
_(xYN,o4N)
_(bWN,xYN)
_(b5M,bWN)
var o6M=_v()
_(b5M,o6M)
if(_oz(z,45,e,s,gg)){o6M.wxVkey=1
var o6N=_n('view')
_rz(z,o6N,'class',46,e,s,gg)
var l7N=_mz(z,'image',['class',47,'src',1,'style',2],[],e,s,gg)
_(o6N,l7N)
var a8N=_mz(z,'input',['class',50,'type',1],[],e,s,gg)
_(o6N,a8N)
var t9N=_mz(z,'image',['class',52,'src',1,'style',2],[],e,s,gg)
_(o6N,t9N)
_(o6M,o6N)
}
o6M.wxXCkey=1
_(r,b5M)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var bAO=_n('view')
_rz(z,bAO,'class',0,e,s,gg)
var oBO=_n('text')
_rz(z,oBO,'class',1,e,s,gg)
var xCO=_oz(z,2,e,s,gg)
_(oBO,xCO)
_(bAO,oBO)
var oDO=_n('view')
_rz(z,oDO,'class',3,e,s,gg)
var fEO=_n('view')
_rz(z,fEO,'class',4,e,s,gg)
var cFO=_n('text')
_rz(z,cFO,'class',5,e,s,gg)
var hGO=_oz(z,6,e,s,gg)
_(cFO,hGO)
_(fEO,cFO)
var oHO=_n('text')
_rz(z,oHO,'class',7,e,s,gg)
var cIO=_oz(z,8,e,s,gg)
_(oHO,cIO)
_(fEO,oHO)
var oJO=_n('text')
_rz(z,oJO,'class',9,e,s,gg)
var lKO=_oz(z,10,e,s,gg)
_(oJO,lKO)
_(fEO,oJO)
_(oDO,fEO)
var aLO=_n('text')
_rz(z,aLO,'class',11,e,s,gg)
var tMO=_oz(z,12,e,s,gg)
_(aLO,tMO)
_(oDO,aLO)
_(bAO,oDO)
var eNO=_n('view')
_rz(z,eNO,'class',13,e,s,gg)
var bOO=_n('text')
_rz(z,bOO,'class',14,e,s,gg)
var oPO=_oz(z,15,e,s,gg)
_(bOO,oPO)
_(eNO,bOO)
_(bAO,eNO)
var xQO=_n('view')
_rz(z,xQO,'class',16,e,s,gg)
_(bAO,xQO)
var oRO=_n('text')
_rz(z,oRO,'class',17,e,s,gg)
var fSO=_oz(z,18,e,s,gg)
_(oRO,fSO)
_(bAO,oRO)
var cTO=_n('text')
_rz(z,cTO,'class',19,e,s,gg)
var hUO=_oz(z,20,e,s,gg)
_(cTO,hUO)
_(bAO,cTO)
var oVO=_n('view')
_rz(z,oVO,'class',21,e,s,gg)
_(bAO,oVO)
var cWO=_n('text')
_rz(z,cWO,'class',22,e,s,gg)
var oXO=_oz(z,23,e,s,gg)
_(cWO,oXO)
_(bAO,cWO)
var lYO=_n('view')
_rz(z,lYO,'class',24,e,s,gg)
_(bAO,lYO)
var aZO=_n('text')
_rz(z,aZO,'class',25,e,s,gg)
var t1O=_oz(z,26,e,s,gg)
_(aZO,t1O)
_(bAO,aZO)
var e2O=_n('view')
_rz(z,e2O,'class',27,e,s,gg)
var b3O=_n('text')
_rz(z,b3O,'class',28,e,s,gg)
var o4O=_oz(z,29,e,s,gg)
_(b3O,o4O)
_(e2O,b3O)
_(bAO,e2O)
_(r,bAO)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var o6O=_n('view')
_rz(z,o6O,'class',0,e,s,gg)
var oBP=_n('view')
_rz(z,oBP,'class',1,e,s,gg)
var lCP=_n('view')
_rz(z,lCP,'class',2,e,s,gg)
var aDP=_n('text')
_rz(z,aDP,'class',3,e,s,gg)
var tEP=_oz(z,4,e,s,gg)
_(aDP,tEP)
_(lCP,aDP)
var eFP=_n('text')
_rz(z,eFP,'class',5,e,s,gg)
var bGP=_oz(z,6,e,s,gg)
_(eFP,bGP)
_(lCP,eFP)
_(oBP,lCP)
var oHP=_n('view')
_rz(z,oHP,'class',7,e,s,gg)
var xIP=_n('text')
_rz(z,xIP,'class',8,e,s,gg)
var oJP=_oz(z,9,e,s,gg)
_(xIP,oJP)
_(oHP,xIP)
var fKP=_n('text')
_rz(z,fKP,'class',10,e,s,gg)
var cLP=_oz(z,11,e,s,gg)
_(fKP,cLP)
_(oHP,fKP)
var hMP=_n('text')
_rz(z,hMP,'class',12,e,s,gg)
var oNP=_oz(z,13,e,s,gg)
_(hMP,oNP)
_(oHP,hMP)
_(oBP,oHP)
var cOP=_n('view')
_rz(z,cOP,'class',14,e,s,gg)
_(oBP,cOP)
var oPP=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var lQP=_mz(z,'swiper',['autoplay',17,'class',1,'indicatorDots',2,'interval',3,'style',4],[],e,s,gg)
var aRP=_v()
_(lQP,aRP)
var tSP=function(bUP,eTP,oVP,gg){
var oXP=_mz(z,'swiper-item',['class',26,'style',1],[],bUP,eTP,gg)
var fYP=_mz(z,'image',['class',28,'resize',1,'src',2],[],bUP,eTP,gg)
_(oXP,fYP)
_(oVP,oXP)
return oVP
}
aRP.wxXCkey=2
_2z(z,24,tSP,e,s,gg,aRP,'img','index','index')
_(oPP,lQP)
_(oBP,oPP)
var cZP=_n('view')
_rz(z,cZP,'class',31,e,s,gg)
var h1P=_n('view')
_rz(z,h1P,'class',32,e,s,gg)
var o2P=_mz(z,'image',['class',33,'resize',1,'src',2,'style',3],[],e,s,gg)
_(h1P,o2P)
var c3P=_n('text')
_rz(z,c3P,'class',37,e,s,gg)
var o4P=_oz(z,38,e,s,gg)
_(c3P,o4P)
_(h1P,c3P)
_(cZP,h1P)
var l5P=_n('view')
_rz(z,l5P,'class',39,e,s,gg)
var a6P=_mz(z,'image',['class',40,'resize',1,'src',2,'style',3],[],e,s,gg)
_(l5P,a6P)
var t7P=_n('text')
_rz(z,t7P,'class',44,e,s,gg)
var e8P=_oz(z,45,e,s,gg)
_(t7P,e8P)
_(l5P,t7P)
_(cZP,l5P)
var b9P=_n('view')
_rz(z,b9P,'class',46,e,s,gg)
var o0P=_mz(z,'image',['class',47,'resize',1,'src',2,'style',3],[],e,s,gg)
_(b9P,o0P)
var xAQ=_n('text')
_rz(z,xAQ,'class',51,e,s,gg)
var oBQ=_oz(z,52,e,s,gg)
_(xAQ,oBQ)
_(b9P,xAQ)
_(cZP,b9P)
var fCQ=_n('view')
_rz(z,fCQ,'class',53,e,s,gg)
var cDQ=_mz(z,'image',['class',54,'resize',1,'src',2,'style',3],[],e,s,gg)
_(fCQ,cDQ)
var hEQ=_n('text')
_rz(z,hEQ,'class',58,e,s,gg)
var oFQ=_oz(z,59,e,s,gg)
_(hEQ,oFQ)
_(fCQ,hEQ)
_(cZP,fCQ)
_(oBP,cZP)
var cGQ=_n('view')
_rz(z,cGQ,'class',60,e,s,gg)
var oHQ=_n('view')
_rz(z,oHQ,'class',61,e,s,gg)
var lIQ=_n('text')
_rz(z,lIQ,'class',62,e,s,gg)
var aJQ=_oz(z,63,e,s,gg)
_(lIQ,aJQ)
_(oHQ,lIQ)
var tKQ=_n('text')
_rz(z,tKQ,'class',64,e,s,gg)
var eLQ=_oz(z,65,e,s,gg)
_(tKQ,eLQ)
_(oHQ,tKQ)
_(cGQ,oHQ)
var bMQ=_n('view')
_rz(z,bMQ,'class',66,e,s,gg)
var oNQ=_n('view')
_rz(z,oNQ,'class',67,e,s,gg)
_(bMQ,oNQ)
var xOQ=_n('view')
_rz(z,xOQ,'class',68,e,s,gg)
var oPQ=_n('text')
_rz(z,oPQ,'class',69,e,s,gg)
var fQQ=_oz(z,70,e,s,gg)
_(oPQ,fQQ)
_(xOQ,oPQ)
var cRQ=_n('text')
_rz(z,cRQ,'class',71,e,s,gg)
var hSQ=_oz(z,72,e,s,gg)
_(cRQ,hSQ)
_(xOQ,cRQ)
_(bMQ,xOQ)
_(cGQ,bMQ)
var oTQ=_n('text')
_rz(z,oTQ,'class',73,e,s,gg)
var cUQ=_oz(z,74,e,s,gg)
_(oTQ,cUQ)
_(cGQ,oTQ)
_(oBP,cGQ)
var oVQ=_n('view')
_rz(z,oVQ,'class',75,e,s,gg)
var lWQ=_n('view')
_rz(z,lWQ,'class',76,e,s,gg)
var aXQ=_n('text')
_rz(z,aXQ,'class',77,e,s,gg)
var tYQ=_oz(z,78,e,s,gg)
_(aXQ,tYQ)
_(lWQ,aXQ)
var eZQ=_n('text')
_rz(z,eZQ,'class',79,e,s,gg)
var b1Q=_oz(z,80,e,s,gg)
_(eZQ,b1Q)
_(lWQ,eZQ)
_(oVQ,lWQ)
var o2Q=_n('view')
_rz(z,o2Q,'class',81,e,s,gg)
var x3Q=_n('text')
_rz(z,x3Q,'class',82,e,s,gg)
var o4Q=_oz(z,83,e,s,gg)
_(x3Q,o4Q)
_(o2Q,x3Q)
var f5Q=_n('text')
_rz(z,f5Q,'class',84,e,s,gg)
var c6Q=_oz(z,85,e,s,gg)
_(f5Q,c6Q)
_(o2Q,f5Q)
_(oVQ,o2Q)
var h7Q=_n('view')
_rz(z,h7Q,'class',86,e,s,gg)
var o8Q=_n('text')
_rz(z,o8Q,'class',87,e,s,gg)
var c9Q=_oz(z,88,e,s,gg)
_(o8Q,c9Q)
_(h7Q,o8Q)
var o0Q=_n('text')
_rz(z,o0Q,'class',89,e,s,gg)
var lAR=_oz(z,90,e,s,gg)
_(o0Q,lAR)
_(h7Q,o0Q)
_(oVQ,h7Q)
var aBR=_n('view')
_rz(z,aBR,'class',91,e,s,gg)
var tCR=_n('text')
_rz(z,tCR,'class',92,e,s,gg)
var eDR=_oz(z,93,e,s,gg)
_(tCR,eDR)
_(aBR,tCR)
var bER=_n('text')
_rz(z,bER,'class',94,e,s,gg)
var oFR=_oz(z,95,e,s,gg)
_(bER,oFR)
_(aBR,bER)
_(oVQ,aBR)
var xGR=_n('view')
_rz(z,xGR,'class',96,e,s,gg)
var oHR=_n('text')
_rz(z,oHR,'class',97,e,s,gg)
var fIR=_oz(z,98,e,s,gg)
_(oHR,fIR)
_(xGR,oHR)
var cJR=_n('text')
_rz(z,cJR,'class',99,e,s,gg)
var hKR=_oz(z,100,e,s,gg)
_(cJR,hKR)
_(xGR,cJR)
_(oVQ,xGR)
var oLR=_n('view')
_rz(z,oLR,'class',101,e,s,gg)
var cMR=_n('text')
_rz(z,cMR,'class',102,e,s,gg)
var oNR=_oz(z,103,e,s,gg)
_(cMR,oNR)
_(oLR,cMR)
var lOR=_n('text')
_rz(z,lOR,'class',104,e,s,gg)
var aPR=_oz(z,105,e,s,gg)
_(lOR,aPR)
_(oLR,lOR)
_(oVQ,oLR)
_(oBP,oVQ)
var tQR=_mz(z,'view',['bindtap',106,'class',1,'data-event-opts',2],[],e,s,gg)
var eRR=_n('text')
_rz(z,eRR,'class',109,e,s,gg)
var bSR=_oz(z,110,e,s,gg)
_(eRR,bSR)
_(tQR,eRR)
_(oBP,tQR)
_(o6O,oBP)
var oTR=_n('view')
_rz(z,oTR,'class',111,e,s,gg)
var xUR=_n('text')
_rz(z,xUR,'class',112,e,s,gg)
var oVR=_oz(z,113,e,s,gg)
_(xUR,oVR)
_(oTR,xUR)
var fWR=_n('text')
_rz(z,fWR,'class',114,e,s,gg)
var cXR=_oz(z,115,e,s,gg)
_(fWR,cXR)
_(oTR,fWR)
var hYR=_n('text')
_rz(z,hYR,'class',116,e,s,gg)
var oZR=_oz(z,117,e,s,gg)
_(hYR,oZR)
_(oTR,hYR)
var c1R=_n('text')
_rz(z,c1R,'class',118,e,s,gg)
var o2R=_oz(z,119,e,s,gg)
_(c1R,o2R)
_(oTR,c1R)
var l3R=_n('text')
_rz(z,l3R,'class',120,e,s,gg)
var a4R=_oz(z,121,e,s,gg)
_(l3R,a4R)
_(oTR,l3R)
var t5R=_n('text')
_rz(z,t5R,'class',122,e,s,gg)
var e6R=_oz(z,123,e,s,gg)
_(t5R,e6R)
_(oTR,t5R)
_(o6O,oTR)
var f7O=_v()
_(o6O,f7O)
if(_oz(z,124,e,s,gg)){f7O.wxVkey=1
var b7R=_mz(z,'scroller',['bind:__l',125,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var o8R=_n('view')
_rz(z,o8R,'class',129,e,s,gg)
var x9R=_n('view')
_rz(z,x9R,'class',130,e,s,gg)
var o0R=_n('view')
_rz(z,o0R,'class',131,e,s,gg)
var fAS=_n('text')
_rz(z,fAS,'class',132,e,s,gg)
var cBS=_oz(z,133,e,s,gg)
_(fAS,cBS)
_(o0R,fAS)
var hCS=_n('text')
_rz(z,hCS,'class',134,e,s,gg)
var oDS=_oz(z,135,e,s,gg)
_(hCS,oDS)
_(o0R,hCS)
_(x9R,o0R)
var cES=_mz(z,'image',['class',136,'resize',1,'src',2,'style',3],[],e,s,gg)
_(x9R,cES)
_(o8R,x9R)
_(b7R,o8R)
_(f7O,b7R)
}
var c8O=_v()
_(o6O,c8O)
if(_oz(z,140,e,s,gg)){c8O.wxVkey=1
var oFS=_mz(z,'scroller',['bind:__l',141,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var lGS=_n('view')
_rz(z,lGS,'class',145,e,s,gg)
var aHS=_mz(z,'view',['class',146,'style',1],[],e,s,gg)
var tIS=_n('view')
_rz(z,tIS,'class',148,e,s,gg)
var eJS=_n('text')
_rz(z,eJS,'class',149,e,s,gg)
var bKS=_oz(z,150,e,s,gg)
_(eJS,bKS)
_(tIS,eJS)
var oLS=_n('view')
_rz(z,oLS,'class',151,e,s,gg)
var xMS=_mz(z,'text',['class',152,'style',1],[],e,s,gg)
var oNS=_oz(z,154,e,s,gg)
_(xMS,oNS)
_(oLS,xMS)
var fOS=_n('text')
_rz(z,fOS,'class',155,e,s,gg)
var cPS=_oz(z,156,e,s,gg)
_(fOS,cPS)
_(oLS,fOS)
_(tIS,oLS)
_(aHS,tIS)
var hQS=_n('view')
_rz(z,hQS,'class',157,e,s,gg)
_(aHS,hQS)
var oRS=_n('view')
_rz(z,oRS,'class',158,e,s,gg)
var cSS=_n('text')
_rz(z,cSS,'class',159,e,s,gg)
var oTS=_oz(z,160,e,s,gg)
_(cSS,oTS)
_(oRS,cSS)
var lUS=_n('view')
_rz(z,lUS,'class',161,e,s,gg)
var aVS=_mz(z,'text',['class',162,'style',1],[],e,s,gg)
var tWS=_oz(z,164,e,s,gg)
_(aVS,tWS)
_(lUS,aVS)
var eXS=_n('text')
_rz(z,eXS,'class',165,e,s,gg)
var bYS=_oz(z,166,e,s,gg)
_(eXS,bYS)
_(lUS,eXS)
_(oRS,lUS)
_(aHS,oRS)
_(lGS,aHS)
var oZS=_n('text')
_rz(z,oZS,'class',167,e,s,gg)
var x1S=_oz(z,168,e,s,gg)
_(oZS,x1S)
_(lGS,oZS)
_(oFS,lGS)
_(c8O,oFS)
}
var o2S=_mz(z,'scroller',['bind:__l',169,'bind:scroll',1,'class',2,'data-event-opts',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var f3S=_n('view')
_rz(z,f3S,'class',175,e,s,gg)
var c4S=_n('view')
_rz(z,c4S,'class',176,e,s,gg)
var h5S=_n('text')
_rz(z,h5S,'class',177,e,s,gg)
var o6S=_oz(z,178,e,s,gg)
_(h5S,o6S)
_(c4S,h5S)
var c7S=_n('text')
_rz(z,c7S,'class',179,e,s,gg)
var o8S=_oz(z,180,e,s,gg)
_(c7S,o8S)
_(c4S,c7S)
_(f3S,c4S)
var l9S=_n('view')
_rz(z,l9S,'class',181,e,s,gg)
var a0S=_mz(z,'input',['class',182,'type',1],[],e,s,gg)
_(l9S,a0S)
var tAT=_mz(z,'image',['class',184,'resize',1,'src',2,'style',3],[],e,s,gg)
_(l9S,tAT)
_(f3S,l9S)
var eBT=_n('view')
_rz(z,eBT,'class',188,e,s,gg)
var bCT=_mz(z,'image',['class',189,'resize',1,'src',2],[],e,s,gg)
_(eBT,bCT)
var oDT=_n('view')
_rz(z,oDT,'class',192,e,s,gg)
var xET=_n('text')
_rz(z,xET,'class',193,e,s,gg)
var oFT=_oz(z,194,e,s,gg)
_(xET,oFT)
_(oDT,xET)
var fGT=_n('text')
_rz(z,fGT,'class',195,e,s,gg)
var cHT=_oz(z,196,e,s,gg)
_(fGT,cHT)
_(oDT,fGT)
var hIT=_n('text')
_rz(z,hIT,'class',197,e,s,gg)
var oJT=_oz(z,198,e,s,gg)
_(hIT,oJT)
_(oDT,hIT)
_(eBT,oDT)
_(f3S,eBT)
var cKT=_n('view')
_rz(z,cKT,'class',199,e,s,gg)
var oLT=_mz(z,'image',['class',200,'resize',1,'src',2],[],e,s,gg)
_(cKT,oLT)
var lMT=_n('view')
_rz(z,lMT,'class',203,e,s,gg)
var aNT=_n('text')
_rz(z,aNT,'class',204,e,s,gg)
var tOT=_oz(z,205,e,s,gg)
_(aNT,tOT)
_(lMT,aNT)
var ePT=_n('text')
_rz(z,ePT,'class',206,e,s,gg)
var bQT=_oz(z,207,e,s,gg)
_(ePT,bQT)
_(lMT,ePT)
var oRT=_n('text')
_rz(z,oRT,'class',208,e,s,gg)
var xST=_oz(z,209,e,s,gg)
_(oRT,xST)
_(lMT,oRT)
_(cKT,lMT)
_(f3S,cKT)
var oTT=_n('view')
_rz(z,oTT,'class',210,e,s,gg)
var fUT=_mz(z,'image',['class',211,'resize',1,'src',2],[],e,s,gg)
_(oTT,fUT)
var cVT=_n('view')
_rz(z,cVT,'class',214,e,s,gg)
var hWT=_n('text')
_rz(z,hWT,'class',215,e,s,gg)
var oXT=_oz(z,216,e,s,gg)
_(hWT,oXT)
_(cVT,hWT)
var cYT=_n('text')
_rz(z,cYT,'class',217,e,s,gg)
var oZT=_oz(z,218,e,s,gg)
_(cYT,oZT)
_(cVT,cYT)
var l1T=_n('text')
_rz(z,l1T,'class',219,e,s,gg)
var a2T=_oz(z,220,e,s,gg)
_(l1T,a2T)
_(cVT,l1T)
_(oTT,cVT)
_(f3S,oTT)
_(o2S,f3S)
_(o6O,o2S)
var h9O=_v()
_(o6O,h9O)
if(_oz(z,221,e,s,gg)){h9O.wxVkey=1
var t3T=_mz(z,'scroller',['bind:__l',222,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var e4T=_n('view')
_rz(z,e4T,'class',226,e,s,gg)
var b5T=_mz(z,'view',['class',227,'style',1],[],e,s,gg)
var o6T=_n('text')
_rz(z,o6T,'class',229,e,s,gg)
var x7T=_oz(z,230,e,s,gg)
_(o6T,x7T)
_(b5T,o6T)
var o8T=_n('text')
_rz(z,o8T,'class',231,e,s,gg)
var f9T=_oz(z,232,e,s,gg)
_(o8T,f9T)
_(b5T,o8T)
_(e4T,b5T)
var c0T=_n('view')
_rz(z,c0T,'class',233,e,s,gg)
var hAU=_mz(z,'view',['class',234,'style',1],[],e,s,gg)
var oBU=_n('view')
_rz(z,oBU,'class',236,e,s,gg)
var cCU=_n('text')
_rz(z,cCU,'class',237,e,s,gg)
var oDU=_oz(z,238,e,s,gg)
_(cCU,oDU)
_(oBU,cCU)
var lEU=_n('text')
_rz(z,lEU,'class',239,e,s,gg)
var aFU=_oz(z,240,e,s,gg)
_(lEU,aFU)
_(oBU,lEU)
var tGU=_n('text')
_rz(z,tGU,'class',241,e,s,gg)
var eHU=_oz(z,242,e,s,gg)
_(tGU,eHU)
_(oBU,tGU)
_(hAU,oBU)
var bIU=_n('view')
_rz(z,bIU,'class',243,e,s,gg)
var oJU=_n('text')
_rz(z,oJU,'class',244,e,s,gg)
var xKU=_oz(z,245,e,s,gg)
_(oJU,xKU)
_(bIU,oJU)
var oLU=_n('text')
_rz(z,oLU,'class',246,e,s,gg)
var fMU=_oz(z,247,e,s,gg)
_(oLU,fMU)
_(bIU,oLU)
var cNU=_n('text')
_rz(z,cNU,'class',248,e,s,gg)
var hOU=_oz(z,249,e,s,gg)
_(cNU,hOU)
_(bIU,cNU)
_(hAU,bIU)
var oPU=_n('view')
_rz(z,oPU,'class',250,e,s,gg)
var cQU=_n('text')
_rz(z,cQU,'class',251,e,s,gg)
var oRU=_oz(z,252,e,s,gg)
_(cQU,oRU)
_(oPU,cQU)
var lSU=_n('text')
_rz(z,lSU,'class',253,e,s,gg)
var aTU=_oz(z,254,e,s,gg)
_(lSU,aTU)
_(oPU,lSU)
var tUU=_n('text')
_rz(z,tUU,'class',255,e,s,gg)
var eVU=_oz(z,256,e,s,gg)
_(tUU,eVU)
_(oPU,tUU)
_(hAU,oPU)
var bWU=_n('view')
_rz(z,bWU,'class',257,e,s,gg)
var oXU=_n('text')
_rz(z,oXU,'class',258,e,s,gg)
var xYU=_oz(z,259,e,s,gg)
_(oXU,xYU)
_(bWU,oXU)
var oZU=_n('text')
_rz(z,oZU,'class',260,e,s,gg)
var f1U=_oz(z,261,e,s,gg)
_(oZU,f1U)
_(bWU,oZU)
var c2U=_n('text')
_rz(z,c2U,'class',262,e,s,gg)
var h3U=_oz(z,263,e,s,gg)
_(c2U,h3U)
_(bWU,c2U)
_(hAU,bWU)
var o4U=_n('view')
_rz(z,o4U,'class',264,e,s,gg)
var c5U=_n('text')
_rz(z,c5U,'class',265,e,s,gg)
var o6U=_oz(z,266,e,s,gg)
_(c5U,o6U)
_(o4U,c5U)
var l7U=_n('text')
_rz(z,l7U,'class',267,e,s,gg)
var a8U=_oz(z,268,e,s,gg)
_(l7U,a8U)
_(o4U,l7U)
var t9U=_n('text')
_rz(z,t9U,'class',269,e,s,gg)
var e0U=_oz(z,270,e,s,gg)
_(t9U,e0U)
_(o4U,t9U)
_(hAU,o4U)
_(c0T,hAU)
var bAV=_n('view')
_rz(z,bAV,'class',271,e,s,gg)
var oBV=_n('view')
_rz(z,oBV,'class',272,e,s,gg)
var xCV=_n('text')
_rz(z,xCV,'class',273,e,s,gg)
var oDV=_oz(z,274,e,s,gg)
_(xCV,oDV)
_(oBV,xCV)
var fEV=_n('text')
_rz(z,fEV,'class',275,e,s,gg)
var cFV=_oz(z,276,e,s,gg)
_(fEV,cFV)
_(oBV,fEV)
var hGV=_n('text')
_rz(z,hGV,'class',277,e,s,gg)
var oHV=_oz(z,278,e,s,gg)
_(hGV,oHV)
_(oBV,hGV)
_(bAV,oBV)
var cIV=_n('view')
_rz(z,cIV,'class',279,e,s,gg)
var oJV=_n('text')
_rz(z,oJV,'class',280,e,s,gg)
var lKV=_oz(z,281,e,s,gg)
_(oJV,lKV)
_(cIV,oJV)
var aLV=_n('text')
_rz(z,aLV,'class',282,e,s,gg)
var tMV=_oz(z,283,e,s,gg)
_(aLV,tMV)
_(cIV,aLV)
var eNV=_n('text')
_rz(z,eNV,'class',284,e,s,gg)
var bOV=_oz(z,285,e,s,gg)
_(eNV,bOV)
_(cIV,eNV)
_(bAV,cIV)
var oPV=_n('view')
_rz(z,oPV,'class',286,e,s,gg)
var xQV=_n('text')
_rz(z,xQV,'class',287,e,s,gg)
var oRV=_oz(z,288,e,s,gg)
_(xQV,oRV)
_(oPV,xQV)
var fSV=_n('text')
_rz(z,fSV,'class',289,e,s,gg)
var cTV=_oz(z,290,e,s,gg)
_(fSV,cTV)
_(oPV,fSV)
var hUV=_n('text')
_rz(z,hUV,'class',291,e,s,gg)
var oVV=_oz(z,292,e,s,gg)
_(hUV,oVV)
_(oPV,hUV)
_(bAV,oPV)
var cWV=_n('view')
_rz(z,cWV,'class',293,e,s,gg)
var oXV=_n('text')
_rz(z,oXV,'class',294,e,s,gg)
var lYV=_oz(z,295,e,s,gg)
_(oXV,lYV)
_(cWV,oXV)
var aZV=_n('text')
_rz(z,aZV,'class',296,e,s,gg)
var t1V=_oz(z,297,e,s,gg)
_(aZV,t1V)
_(cWV,aZV)
var e2V=_n('text')
_rz(z,e2V,'class',298,e,s,gg)
var b3V=_oz(z,299,e,s,gg)
_(e2V,b3V)
_(cWV,e2V)
_(bAV,cWV)
var o4V=_n('view')
_rz(z,o4V,'class',300,e,s,gg)
var x5V=_n('text')
_rz(z,x5V,'class',301,e,s,gg)
var o6V=_oz(z,302,e,s,gg)
_(x5V,o6V)
_(o4V,x5V)
var f7V=_n('text')
_rz(z,f7V,'class',303,e,s,gg)
var c8V=_oz(z,304,e,s,gg)
_(f7V,c8V)
_(o4V,f7V)
var h9V=_n('text')
_rz(z,h9V,'class',305,e,s,gg)
var o0V=_oz(z,306,e,s,gg)
_(h9V,o0V)
_(o4V,h9V)
_(bAV,o4V)
_(c0T,bAV)
_(e4T,c0T)
_(t3T,e4T)
_(h9O,t3T)
}
var o0O=_v()
_(o6O,o0O)
if(_oz(z,307,e,s,gg)){o0O.wxVkey=1
var cAW=_mz(z,'scroller',['bind:__l',308,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oBW=_n('view')
_rz(z,oBW,'class',312,e,s,gg)
var lCW=_mz(z,'text',['class',313,'style',1],[],e,s,gg)
var aDW=_oz(z,315,e,s,gg)
_(lCW,aDW)
_(oBW,lCW)
var tEW=_n('text')
_rz(z,tEW,'class',316,e,s,gg)
var eFW=_oz(z,317,e,s,gg)
_(tEW,eFW)
_(oBW,tEW)
_(cAW,oBW)
_(o0O,cAW)
}
var cAP=_v()
_(o6O,cAP)
if(_oz(z,318,e,s,gg)){cAP.wxVkey=1
var bGW=_mz(z,'scroller',['bind:__l',319,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
var oHW=_n('view')
_rz(z,oHW,'class',323,e,s,gg)
var xIW=_n('view')
_rz(z,xIW,'class',324,e,s,gg)
var oJW=_n('text')
_rz(z,oJW,'class',325,e,s,gg)
var fKW=_oz(z,326,e,s,gg)
_(oJW,fKW)
_(xIW,oJW)
_(oHW,xIW)
var cLW=_n('view')
_rz(z,cLW,'class',327,e,s,gg)
var hMW=_n('text')
_rz(z,hMW,'class',328,e,s,gg)
var oNW=_oz(z,329,e,s,gg)
_(hMW,oNW)
_(cLW,hMW)
_(oHW,cLW)
var cOW=_n('view')
_rz(z,cOW,'class',330,e,s,gg)
var oPW=_n('text')
_rz(z,oPW,'class',331,e,s,gg)
var lQW=_oz(z,332,e,s,gg)
_(oPW,lQW)
_(cOW,oPW)
_(oHW,cOW)
var aRW=_n('view')
_rz(z,aRW,'class',333,e,s,gg)
var tSW=_n('text')
_rz(z,tSW,'class',334,e,s,gg)
var eTW=_oz(z,335,e,s,gg)
_(tSW,eTW)
_(aRW,tSW)
_(oHW,aRW)
_(bGW,oHW)
_(cAP,bGW)
}
f7O.wxXCkey=1
c8O.wxXCkey=1
h9O.wxXCkey=1
o0O.wxXCkey=1
cAP.wxXCkey=1
_(r,o6O)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var oVW=_n('view')
_rz(z,oVW,'class',0,e,s,gg)
var xWW=_n('text')
_rz(z,xWW,'class',1,e,s,gg)
var oXW=_oz(z,2,e,s,gg)
_(xWW,oXW)
_(oVW,xWW)
var fYW=_n('view')
_rz(z,fYW,'class',3,e,s,gg)
var cZW=_n('view')
_rz(z,cZW,'class',4,e,s,gg)
var h1W=_n('text')
_rz(z,h1W,'class',5,e,s,gg)
var o2W=_oz(z,6,e,s,gg)
_(h1W,o2W)
_(cZW,h1W)
var c3W=_n('text')
_rz(z,c3W,'class',7,e,s,gg)
var o4W=_oz(z,8,e,s,gg)
_(c3W,o4W)
_(cZW,c3W)
_(fYW,cZW)
var l5W=_mz(z,'image',['class',9,'resize',1,'src',2],[],e,s,gg)
_(fYW,l5W)
_(oVW,fYW)
var a6W=_n('view')
_rz(z,a6W,'class',12,e,s,gg)
var t7W=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
var e8W=_mz(z,'text',['class',16,'style',1],[],e,s,gg)
var b9W=_oz(z,18,e,s,gg)
_(e8W,b9W)
_(t7W,e8W)
_(a6W,t7W)
var o0W=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
var xAX=_mz(z,'text',['class',22,'style',1],[],e,s,gg)
var oBX=_oz(z,24,e,s,gg)
_(xAX,oBX)
_(o0W,xAX)
_(a6W,o0W)
_(oVW,a6W)
var fCX=_n('text')
_rz(z,fCX,'class',25,e,s,gg)
var cDX=_oz(z,26,e,s,gg)
_(fCX,cDX)
_(oVW,fCX)
var hEX=_n('view')
_rz(z,hEX,'class',27,e,s,gg)
var oFX=_v()
_(hEX,oFX)
var cGX=function(lIX,oHX,aJX,gg){
var eLX=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],lIX,oHX,gg)
var bMX=_mz(z,'image',['class',35,'resize',1,'src',2],[],lIX,oHX,gg)
_(eLX,bMX)
var oNX=_n('text')
_rz(z,oNX,'class',38,lIX,oHX,gg)
var xOX=_oz(z,39,lIX,oHX,gg)
_(oNX,xOX)
_(eLX,oNX)
_(aJX,eLX)
return aJX
}
oFX.wxXCkey=2
_2z(z,30,cGX,e,s,gg,oFX,'item','index','index')
_(oVW,hEX)
var oPX=_n('text')
_rz(z,oPX,'class',40,e,s,gg)
var fQX=_oz(z,41,e,s,gg)
_(oPX,fQX)
_(oVW,oPX)
var cRX=_n('view')
_rz(z,cRX,'class',42,e,s,gg)
var hSX=_v()
_(cRX,hSX)
var oTX=function(oVX,cUX,lWX,gg){
var tYX=_n('view')
_rz(z,tYX,'class',47,oVX,cUX,gg)
var eZX=_mz(z,'image',['class',48,'resize',1,'src',2],[],oVX,cUX,gg)
_(tYX,eZX)
var b1X=_n('text')
_rz(z,b1X,'class',51,oVX,cUX,gg)
var o2X=_oz(z,52,oVX,cUX,gg)
_(b1X,o2X)
_(tYX,b1X)
_(lWX,tYX)
return lWX
}
hSX.wxXCkey=2
_2z(z,45,oTX,e,s,gg,hSX,'item','index','index')
_(oVW,cRX)
var x3X=_n('view')
_rz(z,x3X,'class',53,e,s,gg)
var o4X=_n('text')
_rz(z,o4X,'class',54,e,s,gg)
var f5X=_oz(z,55,e,s,gg)
_(o4X,f5X)
_(x3X,o4X)
var c6X=_n('view')
_rz(z,c6X,'class',56,e,s,gg)
var h7X=_mz(z,'image',['class',57,'src',1,'style',2],[],e,s,gg)
_(c6X,h7X)
var o8X=_n('text')
_rz(z,o8X,'class',60,e,s,gg)
var c9X=_oz(z,61,e,s,gg)
_(o8X,c9X)
_(c6X,o8X)
_(x3X,c6X)
_(oVW,x3X)
var o0X=_n('view')
_rz(z,o0X,'class',62,e,s,gg)
_(oVW,o0X)
_(r,oVW)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var aBY=_n('view')
_rz(z,aBY,'class',0,e,s,gg)
var tCY=_n('view')
_rz(z,tCY,'class',1,e,s,gg)
var eDY=_v()
_(tCY,eDY)
var bEY=function(xGY,oFY,oHY,gg){
var cJY=_n('view')
_rz(z,cJY,'class',6,xGY,oFY,gg)
var hKY=_mz(z,'view',['class',7,'style',1],[],xGY,oFY,gg)
var oLY=_n('text')
_rz(z,oLY,'class',9,xGY,oFY,gg)
var cMY=_oz(z,10,xGY,oFY,gg)
_(oLY,cMY)
_(hKY,oLY)
var oNY=_n('text')
_rz(z,oNY,'class',11,xGY,oFY,gg)
var lOY=_oz(z,12,xGY,oFY,gg)
_(oNY,lOY)
_(hKY,oNY)
_(cJY,hKY)
_(oHY,cJY)
return oHY
}
eDY.wxXCkey=2
_2z(z,4,bEY,e,s,gg,eDY,'item','__i0__','id')
var aPY=_n('view')
_rz(z,aPY,'class',13,e,s,gg)
var tQY=_mz(z,'view',['class',14,'style',1],[],e,s,gg)
var eRY=_n('text')
_rz(z,eRY,'class',16,e,s,gg)
var bSY=_oz(z,17,e,s,gg)
_(eRY,bSY)
_(tQY,eRY)
var oTY=_n('text')
_rz(z,oTY,'class',18,e,s,gg)
var xUY=_oz(z,19,e,s,gg)
_(oTY,xUY)
_(tQY,oTY)
_(aPY,tQY)
_(tCY,aPY)
_(aBY,tCY)
_(r,aBY)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var fWY=_n('view')
_rz(z,fWY,'class',0,e,s,gg)
var cXY=_n('text')
_rz(z,cXY,'class',1,e,s,gg)
var hYY=_oz(z,2,e,s,gg)
_(cXY,hYY)
_(fWY,cXY)
var oZY=_n('view')
_rz(z,oZY,'class',3,e,s,gg)
var c1Y=_n('text')
_rz(z,c1Y,'class',4,e,s,gg)
var o2Y=_oz(z,5,e,s,gg)
_(c1Y,o2Y)
_(oZY,c1Y)
_(fWY,oZY)
var l3Y=_n('text')
_rz(z,l3Y,'class',6,e,s,gg)
var a4Y=_oz(z,7,e,s,gg)
_(l3Y,a4Y)
_(fWY,l3Y)
var t5Y=_n('view')
_rz(z,t5Y,'class',8,e,s,gg)
var e6Y=_n('text')
_rz(z,e6Y,'class',9,e,s,gg)
var b7Y=_oz(z,10,e,s,gg)
_(e6Y,b7Y)
_(t5Y,e6Y)
_(fWY,t5Y)
var o8Y=_n('text')
_rz(z,o8Y,'class',11,e,s,gg)
var x9Y=_oz(z,12,e,s,gg)
_(o8Y,x9Y)
_(fWY,o8Y)
var o0Y=_n('view')
_rz(z,o0Y,'class',13,e,s,gg)
var fAZ=_n('text')
_rz(z,fAZ,'class',14,e,s,gg)
var cBZ=_oz(z,15,e,s,gg)
_(fAZ,cBZ)
_(o0Y,fAZ)
_(fWY,o0Y)
var hCZ=_n('text')
_rz(z,hCZ,'class',16,e,s,gg)
var oDZ=_oz(z,17,e,s,gg)
_(hCZ,oDZ)
_(fWY,hCZ)
var cEZ=_n('view')
_rz(z,cEZ,'class',18,e,s,gg)
var oFZ=_n('view')
_rz(z,oFZ,'class',19,e,s,gg)
var lGZ=_n('text')
_rz(z,lGZ,'class',20,e,s,gg)
var aHZ=_oz(z,21,e,s,gg)
_(lGZ,aHZ)
_(oFZ,lGZ)
var tIZ=_n('text')
_rz(z,tIZ,'class',22,e,s,gg)
var eJZ=_oz(z,23,e,s,gg)
_(tIZ,eJZ)
_(oFZ,tIZ)
_(cEZ,oFZ)
var bKZ=_mz(z,'image',['class',24,'resize',1,'src',2,'style',3],[],e,s,gg)
_(cEZ,bKZ)
_(fWY,cEZ)
_(r,fWY)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var xMZ=_n('view')
_rz(z,xMZ,'class',0,e,s,gg)
var oNZ=_n('view')
_rz(z,oNZ,'class',1,e,s,gg)
var fOZ=_n('view')
_rz(z,fOZ,'class',2,e,s,gg)
var cPZ=_mz(z,'image',['bindlongtap',3,'data-event-opts',1,'src',2],[],e,s,gg)
_(fOZ,cPZ)
var hQZ=_n('text')
_rz(z,hQZ,'class',6,e,s,gg)
var oRZ=_oz(z,7,e,s,gg)
_(hQZ,oRZ)
_(fOZ,hQZ)
_(oNZ,fOZ)
var cSZ=_n('view')
_rz(z,cSZ,'class',8,e,s,gg)
var oTZ=_n('text')
_rz(z,oTZ,'class',9,e,s,gg)
var lUZ=_oz(z,10,e,s,gg)
_(oTZ,lUZ)
_(cSZ,oTZ)
var aVZ=_oz(z,11,e,s,gg)
_(cSZ,aVZ)
var tWZ=_n('text')
_rz(z,tWZ,'class',12,e,s,gg)
var eXZ=_oz(z,13,e,s,gg)
_(tWZ,eXZ)
_(cSZ,tWZ)
var bYZ=_oz(z,14,e,s,gg)
_(cSZ,bYZ)
var oZZ=_n('text')
_rz(z,oZZ,'class',15,e,s,gg)
var x1Z=_oz(z,16,e,s,gg)
_(oZZ,x1Z)
_(cSZ,oZZ)
var o2Z=_oz(z,17,e,s,gg)
_(cSZ,o2Z)
_(oNZ,cSZ)
var f3Z=_n('view')
_rz(z,f3Z,'class',18,e,s,gg)
var c4Z=_n('view')
_rz(z,c4Z,'class',19,e,s,gg)
var h5Z=_oz(z,20,e,s,gg)
_(c4Z,h5Z)
_(f3Z,c4Z)
var o6Z=_n('view')
_rz(z,o6Z,'class',21,e,s,gg)
var c7Z=_n('view')
_rz(z,c7Z,'class',22,e,s,gg)
var o8Z=_n('text')
_rz(z,o8Z,'space',23,e,s,gg)
var l9Z=_oz(z,24,e,s,gg)
_(o8Z,l9Z)
_(c7Z,o8Z)
var a0Z=_n('text')
var tA1=_oz(z,25,e,s,gg)
_(a0Z,tA1)
var eB1=_n('text')
_rz(z,eB1,'class',26,e,s,gg)
var bC1=_oz(z,27,e,s,gg)
_(eB1,bC1)
_(a0Z,eB1)
var oD1=_oz(z,28,e,s,gg)
_(a0Z,oD1)
_(c7Z,a0Z)
_(o6Z,c7Z)
var xE1=_n('view')
_rz(z,xE1,'class',29,e,s,gg)
var oF1=_n('text')
_rz(z,oF1,'space',30,e,s,gg)
var fG1=_oz(z,31,e,s,gg)
_(oF1,fG1)
_(xE1,oF1)
var cH1=_mz(z,'text',['bindtap',32,'class',1,'data-event-opts',2],[],e,s,gg)
var hI1=_oz(z,35,e,s,gg)
_(cH1,hI1)
_(xE1,cH1)
_(o6Z,xE1)
_(f3Z,o6Z)
_(oNZ,f3Z)
var oJ1=_mz(z,'button',['bindtap',36,'data-event-opts',1,'type',2],[],e,s,gg)
var cK1=_oz(z,39,e,s,gg)
_(oJ1,cK1)
_(oNZ,oJ1)
_(xMZ,oNZ)
var oL1=_n('view')
_rz(z,oL1,'class',40,e,s,gg)
var lM1=_oz(z,41,e,s,gg)
_(oL1,lM1)
_(xMZ,oL1)
_(r,xMZ)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var tO1=_n('view')
_rz(z,tO1,'style',0,e,s,gg)
var eP1=_n('view')
_rz(z,eP1,'style',1,e,s,gg)
var bQ1=_n('view')
_rz(z,bQ1,'class',2,e,s,gg)
var oR1=_oz(z,3,e,s,gg)
_(bQ1,oR1)
_(eP1,bQ1)
var xS1=_n('view')
_rz(z,xS1,'class',4,e,s,gg)
var oT1=_oz(z,5,e,s,gg)
_(xS1,oT1)
_(eP1,xS1)
var fU1=_n('view')
_rz(z,fU1,'class',6,e,s,gg)
var cV1=_oz(z,7,e,s,gg)
_(fU1,cV1)
_(eP1,fU1)
var hW1=_n('view')
_rz(z,hW1,'style',8,e,s,gg)
var oX1=_mz(z,'button',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var cY1=_oz(z,12,e,s,gg)
_(oX1,cY1)
_(hW1,oX1)
_(eP1,hW1)
_(tO1,eP1)
_(r,tO1)
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var l11=_n('view')
_rz(z,l11,'class',0,e,s,gg)
var a21=_n('view')
_rz(z,a21,'class',1,e,s,gg)
var t31=_n('text')
var e41=_oz(z,2,e,s,gg)
_(t31,e41)
_(a21,t31)
var b51=_mz(z,'text',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var o61=_oz(z,6,e,s,gg)
_(b51,o61)
_(a21,b51)
_(l11,a21)
var x71=_n('view')
_rz(z,x71,'class',7,e,s,gg)
var o81=_mz(z,'textarea',['bindinput',8,'class',1,'data-event-opts',2,'placeholder',3,'value',4],[],e,s,gg)
_(x71,o81)
_(l11,x71)
var f91=_n('view')
_rz(z,f91,'class',13,e,s,gg)
var c01=_n('text')
var hA2=_oz(z,14,e,s,gg)
_(c01,hA2)
_(f91,c01)
_(l11,f91)
var oB2=_n('view')
_rz(z,oB2,'class',15,e,s,gg)
var cC2=_mz(z,'input',['bindinput',16,'class',1,'data-event-opts',2,'placeholder',3,'value',4],[],e,s,gg)
_(oB2,cC2)
_(l11,oB2)
var oD2=_n('view')
_rz(z,oD2,'class',21,e,s,gg)
var lE2=_n('text')
var aF2=_oz(z,22,e,s,gg)
_(lE2,aF2)
_(oD2,lE2)
var tG2=_n('view')
_rz(z,tG2,'class',23,e,s,gg)
var eH2=_v()
_(tG2,eH2)
var bI2=function(xK2,oJ2,oL2,gg){
var cN2=_mz(z,'text',['bindtap',28,'class',1,'data-event-opts',2],[],xK2,oJ2,gg)
_(oL2,cN2)
return oL2
}
eH2.wxXCkey=2
_2z(z,26,bI2,e,s,gg,eH2,'value','key','key')
_(oD2,tG2)
_(l11,oD2)
var hO2=_mz(z,'button',['bindtap',31,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var oP2=_oz(z,35,e,s,gg)
_(hO2,oP2)
_(l11,hO2)
_(r,l11)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var oR2=_n('view')
_rz(z,oR2,'class',0,e,s,gg)
var lS2=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3],[],e,s,gg)
var aT2=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(lS2,aT2)
var tU2=_n('view')
_rz(z,tU2,'class',7,e,s,gg)
var bW2=_n('text')
_rz(z,bW2,'class',8,e,s,gg)
var oX2=_oz(z,9,e,s,gg)
_(bW2,oX2)
_(tU2,bW2)
var eV2=_v()
_(tU2,eV2)
if(_oz(z,10,e,s,gg)){eV2.wxVkey=1
var xY2=_n('text')
_rz(z,xY2,'class',11,e,s,gg)
var oZ2=_oz(z,12,e,s,gg)
_(xY2,oZ2)
_(eV2,xY2)
}
eV2.wxXCkey=1
_(lS2,tU2)
_(oR2,lS2)
var f12=_n('view')
_rz(z,f12,'class',13,e,s,gg)
var c22=_mz(z,'view',['bindtap',14,'data-event-opts',1],[],e,s,gg)
var h32=_n('view')
_rz(z,h32,'class',16,e,s,gg)
var o42=_n('text')
_rz(z,o42,'class',17,e,s,gg)
var c52=_oz(z,18,e,s,gg)
_(o42,c52)
_(h32,o42)
var o62=_n('text')
_rz(z,o62,'class',19,e,s,gg)
var l72=_oz(z,20,e,s,gg)
_(o62,l72)
_(h32,o62)
var a82=_n('text')
_rz(z,a82,'class',21,e,s,gg)
var t92=_oz(z,22,e,s,gg)
_(a82,t92)
_(h32,a82)
_(c22,h32)
_(f12,c22)
var e02=_mz(z,'view',['bindtap',23,'data-event-opts',1],[],e,s,gg)
var bA3=_n('view')
_rz(z,bA3,'class',25,e,s,gg)
var oB3=_n('text')
_rz(z,oB3,'class',26,e,s,gg)
var xC3=_oz(z,27,e,s,gg)
_(oB3,xC3)
_(bA3,oB3)
var oD3=_n('text')
_rz(z,oD3,'class',28,e,s,gg)
var fE3=_oz(z,29,e,s,gg)
_(oD3,fE3)
_(bA3,oD3)
var cF3=_n('text')
_rz(z,cF3,'class',30,e,s,gg)
var hG3=_oz(z,31,e,s,gg)
_(cF3,hG3)
_(bA3,cF3)
_(e02,bA3)
_(f12,e02)
_(oR2,f12)
var oH3=_n('view')
_rz(z,oH3,'class',32,e,s,gg)
var cI3=_mz(z,'navigator',['hoverClass',33,'url',1],[],e,s,gg)
var oJ3=_n('view')
_rz(z,oJ3,'class',35,e,s,gg)
var lK3=_n('text')
_rz(z,lK3,'class',36,e,s,gg)
var aL3=_oz(z,37,e,s,gg)
_(lK3,aL3)
_(oJ3,lK3)
var tM3=_n('text')
_rz(z,tM3,'class',38,e,s,gg)
var eN3=_oz(z,39,e,s,gg)
_(tM3,eN3)
_(oJ3,tM3)
var bO3=_n('text')
_rz(z,bO3,'class',40,e,s,gg)
var oP3=_oz(z,41,e,s,gg)
_(bO3,oP3)
_(oJ3,bO3)
_(cI3,oJ3)
_(oH3,cI3)
var xQ3=_mz(z,'navigator',['hoverClass',42,'url',1],[],e,s,gg)
var oR3=_n('view')
_rz(z,oR3,'class',44,e,s,gg)
var fS3=_n('text')
_rz(z,fS3,'class',45,e,s,gg)
var cT3=_oz(z,46,e,s,gg)
_(fS3,cT3)
_(oR3,fS3)
var hU3=_n('text')
_rz(z,hU3,'class',47,e,s,gg)
var oV3=_oz(z,48,e,s,gg)
_(hU3,oV3)
_(oR3,hU3)
var cW3=_n('text')
_rz(z,cW3,'class',49,e,s,gg)
var oX3=_oz(z,50,e,s,gg)
_(cW3,oX3)
_(oR3,cW3)
_(xQ3,oR3)
_(oH3,xQ3)
_(oR2,oH3)
var lY3=_n('view')
_rz(z,lY3,'class',51,e,s,gg)
var aZ3=_mz(z,'navigator',['hoverClass',52,'url',1],[],e,s,gg)
var t13=_n('view')
_rz(z,t13,'class',54,e,s,gg)
var e23=_n('text')
_rz(z,e23,'class',55,e,s,gg)
var b33=_oz(z,56,e,s,gg)
_(e23,b33)
_(t13,e23)
var o43=_n('text')
_rz(z,o43,'class',57,e,s,gg)
var x53=_oz(z,58,e,s,gg)
_(o43,x53)
_(t13,o43)
var o63=_n('text')
_rz(z,o63,'class',59,e,s,gg)
var f73=_oz(z,60,e,s,gg)
_(o63,f73)
_(t13,o63)
_(aZ3,t13)
_(lY3,aZ3)
_(oR2,lY3)
_(r,oR2)
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var h93=_n('view')
_rz(z,h93,'style',0,e,s,gg)
var o03=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var cA4=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(o03,cA4)
_(h93,o03)
var oB4=_n('view')
_rz(z,oB4,'class',5,e,s,gg)
var lC4=_mz(z,'input',['bindinput',6,'class',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
_(oB4,lC4)
_(h93,oB4)
var aD4=_n('view')
_rz(z,aD4,'class',13,e,s,gg)
var tE4=_mz(z,'input',['bindinput',14,'class',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
_(aD4,tE4)
_(h93,aD4)
var eF4=_n('view')
_rz(z,eF4,'style',20,e,s,gg)
var bG4=_n('text')
_rz(z,bG4,'style',21,e,s,gg)
var oH4=_oz(z,22,e,s,gg)
_(bG4,oH4)
_(eF4,bG4)
_(h93,eF4)
var xI4=_n('view')
_rz(z,xI4,'class',23,e,s,gg)
var oJ4=_mz(z,'view',['bindtap',24,'class',1,'data-event-opts',2],[],e,s,gg)
var fK4=_oz(z,27,e,s,gg)
_(oJ4,fK4)
_(xI4,oJ4)
_(h93,xI4)
_(r,h93)
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var hM4=_n('view')
_rz(z,hM4,'class',0,e,s,gg)
var oN4=_n('view')
var cO4=_mz(z,'image',['class',1,'src',1],[],e,s,gg)
_(oN4,cO4)
_(hM4,oN4)
var oP4=_n('view')
var lQ4=_n('text')
_rz(z,lQ4,'class',3,e,s,gg)
var aR4=_oz(z,4,e,s,gg)
_(lQ4,aR4)
_(oP4,lQ4)
_(hM4,oP4)
_(r,hM4)
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var eT4=_n('view')
var bU4=_n('view')
_rz(z,bU4,'class',0,e,s,gg)
var oV4=_oz(z,1,e,s,gg)
_(bU4,oV4)
_(eT4,bU4)
var xW4=_n('view')
_rz(z,xW4,'class',2,e,s,gg)
var oX4=_n('view')
_rz(z,oX4,'class',3,e,s,gg)
var fY4=_oz(z,4,e,s,gg)
_(oX4,fY4)
_(xW4,oX4)
var cZ4=_n('view')
_rz(z,cZ4,'class',5,e,s,gg)
var h14=_oz(z,6,e,s,gg)
_(cZ4,h14)
_(xW4,cZ4)
var o24=_n('view')
_rz(z,o24,'class',7,e,s,gg)
var c34=_oz(z,8,e,s,gg)
_(o24,c34)
_(xW4,o24)
var o44=_n('view')
_rz(z,o44,'class',9,e,s,gg)
var l54=_oz(z,10,e,s,gg)
_(o44,l54)
_(xW4,o44)
var a64=_n('view')
_rz(z,a64,'class',11,e,s,gg)
var t74=_oz(z,12,e,s,gg)
_(a64,t74)
_(xW4,a64)
var e84=_n('view')
_rz(z,e84,'class',13,e,s,gg)
var b94=_oz(z,14,e,s,gg)
_(e84,b94)
_(xW4,e84)
var o04=_n('view')
_rz(z,o04,'class',15,e,s,gg)
var xA5=_oz(z,16,e,s,gg)
_(o04,xA5)
_(xW4,o04)
var oB5=_n('view')
_rz(z,oB5,'class',17,e,s,gg)
var fC5=_oz(z,18,e,s,gg)
_(oB5,fC5)
_(xW4,oB5)
var cD5=_n('view')
_rz(z,cD5,'class',19,e,s,gg)
var hE5=_oz(z,20,e,s,gg)
_(cD5,hE5)
_(xW4,cD5)
var oF5=_n('view')
_rz(z,oF5,'class',21,e,s,gg)
var cG5=_oz(z,22,e,s,gg)
_(oF5,cG5)
_(xW4,oF5)
var oH5=_n('view')
_rz(z,oH5,'class',23,e,s,gg)
var lI5=_oz(z,24,e,s,gg)
_(oH5,lI5)
_(xW4,oH5)
var aJ5=_n('view')
_rz(z,aJ5,'class',25,e,s,gg)
var tK5=_oz(z,26,e,s,gg)
_(aJ5,tK5)
_(xW4,aJ5)
var eL5=_n('view')
_rz(z,eL5,'class',27,e,s,gg)
var bM5=_oz(z,28,e,s,gg)
_(eL5,bM5)
_(xW4,eL5)
var oN5=_n('view')
_rz(z,oN5,'class',29,e,s,gg)
var xO5=_oz(z,30,e,s,gg)
_(oN5,xO5)
_(xW4,oN5)
var oP5=_n('view')
_rz(z,oP5,'class',31,e,s,gg)
var fQ5=_oz(z,32,e,s,gg)
_(oP5,fQ5)
_(xW4,oP5)
var cR5=_n('view')
_rz(z,cR5,'class',33,e,s,gg)
var hS5=_oz(z,34,e,s,gg)
_(cR5,hS5)
_(xW4,cR5)
var oT5=_n('view')
_rz(z,oT5,'class',35,e,s,gg)
var cU5=_oz(z,36,e,s,gg)
_(oT5,cU5)
_(xW4,oT5)
var oV5=_n('view')
_rz(z,oV5,'class',37,e,s,gg)
var lW5=_oz(z,38,e,s,gg)
_(oV5,lW5)
_(xW4,oV5)
var aX5=_n('view')
_rz(z,aX5,'class',39,e,s,gg)
var tY5=_oz(z,40,e,s,gg)
_(aX5,tY5)
_(xW4,aX5)
var eZ5=_n('view')
_rz(z,eZ5,'class',41,e,s,gg)
var b15=_oz(z,42,e,s,gg)
_(eZ5,b15)
_(xW4,eZ5)
var o25=_n('view')
_rz(z,o25,'class',43,e,s,gg)
var x35=_oz(z,44,e,s,gg)
_(o25,x35)
_(xW4,o25)
var o45=_n('view')
_rz(z,o45,'class',45,e,s,gg)
var f55=_oz(z,46,e,s,gg)
_(o45,f55)
_(xW4,o45)
var c65=_n('view')
_rz(z,c65,'class',47,e,s,gg)
var h75=_oz(z,48,e,s,gg)
_(c65,h75)
_(xW4,c65)
var o85=_n('view')
_rz(z,o85,'class',49,e,s,gg)
var c95=_oz(z,50,e,s,gg)
_(o85,c95)
_(xW4,o85)
var o05=_n('view')
_rz(z,o05,'class',51,e,s,gg)
var lA6=_oz(z,52,e,s,gg)
_(o05,lA6)
_(xW4,o05)
var aB6=_n('view')
_rz(z,aB6,'class',53,e,s,gg)
var tC6=_oz(z,54,e,s,gg)
_(aB6,tC6)
_(xW4,aB6)
var eD6=_n('view')
_rz(z,eD6,'class',55,e,s,gg)
var bE6=_oz(z,56,e,s,gg)
_(eD6,bE6)
_(xW4,eD6)
var oF6=_n('view')
_rz(z,oF6,'class',57,e,s,gg)
var xG6=_oz(z,58,e,s,gg)
_(oF6,xG6)
_(xW4,oF6)
var oH6=_n('view')
_rz(z,oH6,'class',59,e,s,gg)
var fI6=_oz(z,60,e,s,gg)
_(oH6,fI6)
_(xW4,oH6)
var cJ6=_n('view')
_rz(z,cJ6,'class',61,e,s,gg)
var hK6=_oz(z,62,e,s,gg)
_(cJ6,hK6)
_(xW4,cJ6)
var oL6=_n('view')
_rz(z,oL6,'class',63,e,s,gg)
var cM6=_oz(z,64,e,s,gg)
_(oL6,cM6)
_(xW4,oL6)
var oN6=_n('view')
_rz(z,oN6,'class',65,e,s,gg)
var lO6=_oz(z,66,e,s,gg)
_(oN6,lO6)
_(xW4,oN6)
var aP6=_n('view')
_rz(z,aP6,'class',67,e,s,gg)
var tQ6=_oz(z,68,e,s,gg)
_(aP6,tQ6)
_(xW4,aP6)
var eR6=_n('view')
_rz(z,eR6,'class',69,e,s,gg)
var bS6=_oz(z,70,e,s,gg)
_(eR6,bS6)
_(xW4,eR6)
_(eT4,xW4)
_(r,eT4)
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["body { background: #F4F5F6; width: ",[0,750],"; overflow-x: hidden; }\n.",[1],"qiun-padding { padding: 2%; width: 96%; }\n.",[1],"qiun-wrap { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"qiun-rows { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal !important; -webkit-box-direction: normal !important; -webkit-flex-direction: row !important; -ms-flex-direction: row !important; flex-direction: row !important; }\n.",[1],"qiun-columns { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -webkit-flex-direction: column !important; -ms-flex-direction: column !important; flex-direction: column !important; }\n.",[1],"qiun-common-mt { margin-top: ",[0,10],"; }\n.",[1],"qiun-common-border-bottom { border-bottom: 1px solid #E9E9E9; }\n.",[1],"qiun-bg-white { background: #FFFFFF; }\n.",[1],"qiun-title-bar { width: 96%; padding: ",[0,10]," 2%; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"qiun-title-dot-light { border-left: ",[0,10]," solid #0ea391; padding-left: ",[0,10],"; font-size: ",[0,32],"; color: #000000 }\n.",[1],"qiun-textarea { height: ",[0,400],"; font-size: ",[0,34],"; -webkit-box-sizing: border-box; box-sizing: border-box; line-height: ",[0,50],"; width: 100%; background-color: #FFFFFF; }\n.",[1],"qiun-text-tips { font-size: ",[0,28],"; color: #dc2626; line-height: ",[0,40],"; padding: ",[0,6],"; }\n.",[1],"qiun-button { background: #2fc25b; color: #FFFFFF; margin: ",[0,20],"; }\n.",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"qiun-charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; padding: ",[0,25],"; }\n.",[1],"charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; }\n.",[1],"qiun-charts3 { width: ",[0,750],"; height: ",[0,250],"; background-color: #FFFFFF; position: relative; }\n.",[1],"charts3 { position: absolute; width: ",[0,250],"; height: ",[0,250],"; background-color: #FFFFFF; }\nbody{ background: #303238 }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/u-charts/component.wxss']=setCssToHead([".",[1],"charts.",[1],"data-v-67f2ba3a { width: 100%; height: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; background-color: #FFFFFF; }\n",],undefined,{path:"./components/u-charts/component.wxss"});    
__wxAppCode__['components/u-charts/component.wxml']=$gwx('./components/u-charts/component.wxml');

__wxAppCode__['components/uni-ui/uni-card/uni-card.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-card { margin-left: ",[0,16],"; margin-right: ",[0,16],"; margin-top: ",[0,16],"; background: #ffffff; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-card:after { content: \x27\x27; position: absolute; -webkit-transform-origin: center; -ms-transform-origin: center; transform-origin: center; -webkit-box-sizing: border-box; box-sizing: border-box; pointer-events: none; top: -50%; left: -50%; right: -50%; bottom: -50%; border: 1px solid #c8c7cc; border-radius: ",[0,12],"; -webkit-transform: scale(0.5); -ms-transform: scale(0.5); transform: scale(0.5); }\n.",[1],"uni-card__footer { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,16],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: #ffffff; }\n.",[1],"uni-card__header { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,16],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-card__header:after { position: absolute; bottom: 0; right: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); background-color: #c8c7cc; }\n.",[1],"uni-card__header-title { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; margin-right: ",[0,16],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-card__header-title-text { font-size: ",[0,32],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"uni-card__header-extra-img-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"uni-card__header-extra-img { height: ",[0,40],"; width: ",[0,40],"; margin-right: ",[0,16],"; }\n.",[1],"uni-card__header-extra-text { -webkit-box-flex: 0; -webkit-flex: 0 0 auto; -ms-flex: 0 0 auto; flex: 0 0 auto; width: 30%; margin-left: ",[0,16],"; font-size: ",[0,28],"; text-align: right; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"uni-card__content--pd { padding: ",[0,16],"; }\n.",[1],"uni-card__footer { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; color: #999; font-size: ",[0,24],"; padding-top: 0; }\n.",[1],"uni-card--full { margin: 0; }\n.",[1],"demoimages { width: 100%; height: ",[0,400],"; }\nwx-text { font-size: ",[0,32],"; color: #000000; }\n",],undefined,{path:"./components/uni-ui/uni-card/uni-card.wxss"});    
__wxAppCode__['components/uni-ui/uni-card/uni-card.wxml']=$gwx('./components/uni-ui/uni-card/uni-card.wxml');

__wxAppCode__['components/uni-ui/uni-grid/uni-grid.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-grid { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-grid__flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"uni-grid-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background-color: #FFFFFF; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1 }\n.",[1],"uni-grid-item:before { display: block; content: \x22 \x22; padding-bottom: 100% }\n.",[1],"uni-grid-item:after { content: \x27\x27; position: absolute; z-index: 1; -webkit-transform-origin: center; -ms-transform-origin: center; transform-origin: center; -webkit-box-sizing: border-box; box-sizing: border-box; top: -50%; left: -50%; right: -50%; bottom: -50%; border-color: #c8c7cc; border-style: solid; border-width: 1px; -webkit-transform: scale(.5); -ms-transform: scale(.5); transform: scale(.5); border-top-width: 0; border-left-width: 0 }\n.",[1],"uni-grid-item__content { position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-grid-item-text { font-size: ",[0,32],"; color: #333; margin-top: ",[0,12]," }\n.",[1],"uni-grid-item-hover { background-color: #f1f1f1 }\n.",[1],"uni-grid-item-image { width: ",[0,80],"; height: ",[0,80]," }\n.",[1],"uni-grid .",[1],"uni-grid__flex:first-child .",[1],"uni-grid-item:after { border-top-width: 1px }\n.",[1],"uni-grid .",[1],"uni-grid__flex .",[1],"uni-grid-item:first-child:after { border-left-width: 1px }\n.",[1],"uni-grid.",[1],"uni-grid-no-out-border .",[1],"uni-grid__flex:first-child .",[1],"uni-grid-item:after { border-top-width: 0 }\n.",[1],"uni-grid.",[1],"uni-grid-no-out-border .",[1],"uni-grid__flex:last-child .",[1],"uni-grid-item:after { border-bottom-width: 0 }\n.",[1],"uni-grid.",[1],"uni-grid-no-out-border .",[1],"uni-grid__flex .",[1],"uni-grid-item:first-child:after { border-left-width: 0 }\n.",[1],"uni-grid.",[1],"uni-grid-no-out-border .",[1],"uni-grid__flex .",[1],"uni-grid-item:last-child:after { border-right-width: 0 }\n.",[1],"uni-grid.",[1],"uni-grid-no-border .",[1],"uni-grid-item:after { border-width: 0 }\n.",[1],"uni-grid.",[1],"uni-grid-no- .",[1],"uni-grid__flex:first-child .",[1],"uni-grid-item:after { border-top-width: 0 }\n.",[1],"uni-grid.",[1],"uni-grid-no-border .",[1],"uni-grid__flex .",[1],"uni-grid-item:first-child:after { border-left-width: 0 }\n.",[1],"uni-grid-item-oblong.",[1],"uni-grid-item:before { padding-bottom: 60% }\n.",[1],"uni-grid-item-oblong .",[1],"uni-grid-item__content { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row }\n.",[1],"uni-grid-item-oblong .",[1],"uni-grid-item-image { width: ",[0,52],"; height: ",[0,52]," }\n.",[1],"uni-grid-item-oblong .",[1],"uni-grid-item-text { margin-top: 0; margin-left: ",[0,12]," }\n",],undefined,{path:"./components/uni-ui/uni-grid/uni-grid.wxss"});    
__wxAppCode__['components/uni-ui/uni-grid/uni-grid.wxml']=$gwx('./components/uni-ui/uni-grid/uni-grid.wxml');

__wxAppCode__['components/uni-ui/uni-icon/uni-icon.wxss']=setCssToHead(["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/truetype;charset\x3dutf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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AVkBWgFbAVwBXQd1bmlFMTAwB3VuaUUxMDEHdW5pRTEwMgd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvBEV1cm8AAQAB//8ADwABAAAADAAAABYAAAACAAEAAQBfAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANJrTZkAAAAA2DhhuQ\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"uni-icon { font-family: uniicons; font-size: 24px; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-closefill:before { content: \x27\\E589\x27; }\n.",[1],"uni-icon-sound:before { content: \x22\\E590\x22; }\n.",[1],"uni-icon-scan:before { content: \x22\\E612\x22; }\n",],undefined,{path:"./components/uni-ui/uni-icon/uni-icon.wxss"});    
__wxAppCode__['components/uni-ui/uni-icon/uni-icon.wxml']=$gwx('./components/uni-ui/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-ui/uni-notice-bar/uni-notice-bar.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-noticebar { padding: ",[0,12]," ",[0,24],"; font-size: ",[0,24],"; line-height: 1.5; margin: ",[0,10]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: left; -webkit-justify-content: left; -ms-flex-pack: left; justify-content: left }\n.",[1],"uni-noticebar__close { color: #999; margin-right: ",[0,24],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }\n.",[1],"uni-noticebar__content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden }\n.",[1],"uni-noticebar__content.",[1],"uni-noticebar--flex { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row }\n.",[1],"uni-noticebar__content-icon { display: inline-block; z-index: 1; padding-right: ",[0,12]," }\n.",[1],"uni-noticebar__content-more { width: ",[0,180],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; word-break: keep-all; margin-left: ",[0,10],"; color: #999 }\n.",[1],"uni-noticebar__content-more-text { font-size: ",[0,24],"; white-space: nowrap }\n.",[1],"uni-noticebar__content-text { word-break: break-all; line-height: 1.5; display: inline }\n.",[1],"uni-noticebar__content-text.",[1],"uni-noticebar--single { -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; overflow: hidden }\n.",[1],"uni-noticebar__content-text.",[1],"uni-noticebar--scrollable { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: block; overflow: hidden }\n.",[1],"uni-noticebar__content-text.",[1],"uni-noticebar--scrollable .",[1],"uni-noticebar__content-inner { padding-left: 100%; white-space: nowrap; display: inline-block; -webkit-transform: translateZ(0); transform: translateZ(0) }\n.",[1],"uni-noticebar__content-inner { font-size: ",[0,24],"; display: inline }\n@-webkit-keyframes notice { 100% { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }\n}@keyframes notice { 100% { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0) }\n}",],undefined,{path:"./components/uni-ui/uni-notice-bar/uni-notice-bar.wxss"});    
__wxAppCode__['components/uni-ui/uni-notice-bar/uni-notice-bar.wxml']=$gwx('./components/uni-ui/uni-notice-bar/uni-notice-bar.wxml');

__wxAppCode__['components/uni-ui/uni-swiper-dot/uni-swiper-dot.wxss']=setCssToHead([".",[1],"uni-swiper__warp { position: relative; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; overflow: hidden; }\n.",[1],"uni-swiper__dots-box { position: absolute; bottom: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-sizing: box-sizing; box-sizing: box-sizing; width: 100%; }\n.",[1],"uni-swiper__dots-item { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,16],"; border-radius: 50%; margin-left: ",[0,12],"; background: rgba(0, 0, 0, .3); -webkit-transition: all 0.2s linear; -o-transition: all 0.2s linear; transition: all 0.2s linear; }\n.",[1],"uni-swiper__dots-item:first-child { margin: 0; }\n.",[1],"uni-swiper__dots-default { border-radius: 50%; }\n.",[1],"uni-swiper__dots-long { border-radius: ",[0,100],"; }\n.",[1],"uni-swiper__dots-nav { bottom: 0; height: ",[0,80],"; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; background: rgba(0, 0, 0, 0.2); -webkit-box-sizing: box-sizing; box-sizing: box-sizing; overflow: hidden; }\n.",[1],"uni-swiper__dots-nav-item { overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; font-size: ",[0,28],"; color: #fff; -webkit-box-sizing: box-sizing; box-sizing: box-sizing; margin: 0 ",[0,30],"; }\n.",[1],"uni-swiper__dots-indexes { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #fff; font-size: ",[0,24],"; }\n",],undefined,{path:"./components/uni-ui/uni-swiper-dot/uni-swiper-dot.wxss"});    
__wxAppCode__['components/uni-ui/uni-swiper-dot/uni-swiper-dot.wxml']=$gwx('./components/uni-ui/uni-swiper-dot/uni-swiper-dot.wxml');

__wxAppCode__['pages/app/demo/candle.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"qiun-charts2 { width: ",[0,750],"; height: ",[0,200],"; background-color: #FFFFFF; }\n.",[1],"charts2 { width: ",[0,750],"; height: ",[0,200],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/app/demo/candle.wxss"});    
__wxAppCode__['pages/app/demo/candle.wxml']=$gwx('./pages/app/demo/candle.wxml');

__wxAppCode__['pages/app/demo/component.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; }\n",],undefined,{path:"./pages/app/demo/component.wxss"});    
__wxAppCode__['pages/app/demo/component.wxml']=$gwx('./pages/app/demo/component.wxml');

__wxAppCode__['pages/app/demo/index.wxss']=setCssToHead(["body { background: #F2F2F2; width: ",[0,750],"; overflow-x: hidden; }\n.",[1],"qiun-padding { padding: 2%; width: 96%; }\n.",[1],"qiun-wrap { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"qiun-rows { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal !important; -webkit-box-direction: normal !important; -webkit-flex-direction: row !important; -ms-flex-direction: row !important; flex-direction: row !important; }\n.",[1],"qiun-columns { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -webkit-flex-direction: column !important; -ms-flex-direction: column !important; flex-direction: column !important; }\n.",[1],"qiun-common-mt { margin-top: ",[0,10],"; }\n.",[1],"qiun-bg-white { background: #FFFFFF; }\n.",[1],"qiun-title-bar { width: 96%; padding: ",[0,10]," 2%; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"qiun-title-dot-light { border-left: ",[0,10]," solid #0ea391; padding-left: ",[0,10],"; font-size: ",[0,32],"; color: #000000 }\n.",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"qiun-charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; padding: ",[0,25],"; }\n.",[1],"charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; }\n.",[1],"qiun-charts3 { width: ",[0,750],"; height: ",[0,250],"; background-color: #FFFFFF; position: relative; }\n.",[1],"charts3 { position: absolute; width: ",[0,250],"; height: ",[0,250],"; background-color: #FFFFFF; }\n.",[1],"qiun-tip { display: block; width: auto; overflow: hidden; padding: ",[0,15],"; height: ",[0,30],"; line-height: ",[0,30],"; margin: ",[0,10],"; background: #ff9933; font-size: ",[0,30],"; border-radius: ",[0,8],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; text-align: center; border: 1px solid #dc7004; color: #FFFFFF; }\n",],undefined,{path:"./pages/app/demo/index.wxss"});    
__wxAppCode__['pages/app/demo/index.wxml']=$gwx('./pages/app/demo/index.wxml');

__wxAppCode__['pages/app/demo/scroll.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/app/demo/scroll.wxss"});    
__wxAppCode__['pages/app/demo/scroll.wxml']=$gwx('./pages/app/demo/scroll.wxml');

__wxAppCode__['pages/app/index.wxss']=setCssToHead(["body{background-color: #f4f5f6;}\n",],undefined,{path:"./pages/app/index.wxss"});    
__wxAppCode__['pages/app/index.wxml']=$gwx('./pages/app/index.wxml');

__wxAppCode__['pages/basic/arcbar/arcbar.wxss']=setCssToHead([".",[1],"qiun-charts3 { width: ",[0,750],"; height: ",[0,250],"; background-color: #FFFFFF; position: relative; }\n.",[1],"charts3 { position: absolute; width: ",[0,250],"; height: ",[0,250],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/arcbar/arcbar.wxss"});    
__wxAppCode__['pages/basic/arcbar/arcbar.wxml']=$gwx('./pages/basic/arcbar/arcbar.wxml');

__wxAppCode__['pages/basic/arcbar/mix.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,340],"; background: -webkit-gradient(linear, left bottom, left top, from(#28E5A0), to(#0BB7D6)); background: -o-linear-gradient(bottom, #28E5A0, #0BB7D6); background: linear-gradient(to top, #28E5A0, #0BB7D6); background-size: 100% 100%; }\n.",[1],"chartsa { width: ",[0,750],"; height: ",[0,340],"; }\n",],undefined,{path:"./pages/basic/arcbar/mix.wxss"});    
__wxAppCode__['pages/basic/arcbar/mix.wxml']=$gwx('./pages/basic/arcbar/mix.wxml');

__wxAppCode__['pages/basic/area/area.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/area/area.wxss"});    
__wxAppCode__['pages/basic/area/area.wxml']=$gwx('./pages/basic/area/area.wxml');

__wxAppCode__['pages/basic/area/time.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/area/time.wxss"});    
__wxAppCode__['pages/basic/area/time.wxml']=$gwx('./pages/basic/area/time.wxml');

__wxAppCode__['pages/basic/candle/candle.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"qiun-textarea{height: ",[0,300],";}\n",],undefined,{path:"./pages/basic/candle/candle.wxss"});    
__wxAppCode__['pages/basic/candle/candle.wxml']=$gwx('./pages/basic/candle/candle.wxml');

__wxAppCode__['pages/basic/column/column-scroll.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/column/column-scroll.wxss"});    
__wxAppCode__['pages/basic/column/column-scroll.wxml']=$gwx('./pages/basic/column/column-scroll.wxml');

__wxAppCode__['pages/basic/column/column.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/column/column.wxss"});    
__wxAppCode__['pages/basic/column/column.wxml']=$gwx('./pages/basic/column/column.wxml');

__wxAppCode__['pages/basic/column/mark-line.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/column/mark-line.wxss"});    
__wxAppCode__['pages/basic/column/mark-line.wxml']=$gwx('./pages/basic/column/mark-line.wxml');

__wxAppCode__['pages/basic/column/meter.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/column/meter.wxss"});    
__wxAppCode__['pages/basic/column/meter.wxml']=$gwx('./pages/basic/column/meter.wxml');

__wxAppCode__['pages/basic/column/rotate.wxss']=setCssToHead([".",[1],"qiun-charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; padding: ",[0,25],"; }\n.",[1],"charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/column/rotate.wxss"});    
__wxAppCode__['pages/basic/column/rotate.wxml']=$gwx('./pages/basic/column/rotate.wxml');

__wxAppCode__['pages/basic/column/stack.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/column/stack.wxss"});    
__wxAppCode__['pages/basic/column/stack.wxml']=$gwx('./pages/basic/column/stack.wxml');

__wxAppCode__['pages/basic/funnel/funnel.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/funnel/funnel.wxss"});    
__wxAppCode__['pages/basic/funnel/funnel.wxml']=$gwx('./pages/basic/funnel/funnel.wxml');

__wxAppCode__['pages/basic/gauge/gauge.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/gauge/gauge.wxss"});    
__wxAppCode__['pages/basic/gauge/gauge.wxml']=$gwx('./pages/basic/gauge/gauge.wxml');

__wxAppCode__['pages/basic/index.wxss']=setCssToHead([".",[1],"swiper-box{width: ",[0,750],";height: ",[0,400],";}\n.",[1],"swiper-item{width: ",[0,750],";height: ",[0,400],";}\n",],undefined,{path:"./pages/basic/index.wxss"});    
__wxAppCode__['pages/basic/index.wxml']=$gwx('./pages/basic/index.wxml');

__wxAppCode__['pages/basic/line/curve.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/line/curve.wxss"});    
__wxAppCode__['pages/basic/line/curve.wxml']=$gwx('./pages/basic/line/curve.wxml');

__wxAppCode__['pages/basic/line/line-scroll.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/line/line-scroll.wxss"});    
__wxAppCode__['pages/basic/line/line-scroll.wxml']=$gwx('./pages/basic/line/line-scroll.wxml');

__wxAppCode__['pages/basic/line/line.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/line/line.wxss"});    
__wxAppCode__['pages/basic/line/line.wxml']=$gwx('./pages/basic/line/line.wxml');

__wxAppCode__['pages/basic/line/rotate.wxss']=setCssToHead([".",[1],"qiun-charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; padding: ",[0,25],"; }\n.",[1],"charts-rotate { width: ",[0,700],"; height: ",[0,1100],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/line/rotate.wxss"});    
__wxAppCode__['pages/basic/line/rotate.wxml']=$gwx('./pages/basic/line/rotate.wxml');

__wxAppCode__['pages/basic/map/map.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,750],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,750],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/map/map.wxss"});    
__wxAppCode__['pages/basic/map/map.wxml']=$gwx('./pages/basic/map/map.wxml');

__wxAppCode__['pages/basic/mix/mix.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/mix/mix.wxss"});    
__wxAppCode__['pages/basic/mix/mix.wxml']=$gwx('./pages/basic/mix/mix.wxml');

__wxAppCode__['pages/basic/pie/pie.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/pie/pie.wxss"});    
__wxAppCode__['pages/basic/pie/pie.wxml']=$gwx('./pages/basic/pie/pie.wxml');

__wxAppCode__['pages/basic/pie/ring.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/pie/ring.wxss"});    
__wxAppCode__['pages/basic/pie/ring.wxml']=$gwx('./pages/basic/pie/ring.wxml');

__wxAppCode__['pages/basic/pie/rose.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/pie/rose.wxss"});    
__wxAppCode__['pages/basic/pie/rose.wxml']=$gwx('./pages/basic/pie/rose.wxml');

__wxAppCode__['pages/basic/radar/radar.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n",],undefined,{path:"./pages/basic/radar/radar.wxss"});    
__wxAppCode__['pages/basic/radar/radar.wxml']=$gwx('./pages/basic/radar/radar.wxml');

__wxAppCode__['pages/basic/word/word.wxss']=setCssToHead([".",[1],"qiun-charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; }\n.",[1],"charts { width: ",[0,750],"; height: ",[0,500],"; background-color: #FFFFFF; font-weight: ; }\n",],undefined,{path:"./pages/basic/word/word.wxss"});    
__wxAppCode__['pages/basic/word/word.wxml']=$gwx('./pages/basic/word/word.wxml');

__wxAppCode__['pages/doc/index.wxss']=setCssToHead(["body { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #f4f5f6; }\n.",[1],"qiun-list-title { padding: ",[0,24]," ",[0,30],"; font-size: ",[0,32],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n",],undefined,{path:"./pages/doc/index.wxss"});    
__wxAppCode__['pages/doc/index.wxml']=$gwx('./pages/doc/index.wxml');

__wxAppCode__['pages/doc/view.wxss']=setCssToHead(["body{background-color: #f4f5f6;}\n",],undefined,{path:"./pages/doc/view.wxss"});    
__wxAppCode__['pages/doc/view.wxml']=$gwx('./pages/doc/view.wxml');

__wxAppCode__['pages/stock/Chat.wxss']=setCssToHead([".",[1],"container{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"radiu-box{ border-top-left-radius: ",[0,20],"; border-top-right-radius: ",[0,20],"; border-bottom-left-radius: ",[0,20],"; border-bottom-right-radius: ",[0,20],"; background-color: #373A41; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"border{ border-width: ",[0,1],"; border-style: solid; border-color: #4C5059; }\n.",[1],"submit-btn{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,50],"; border-top-right-radius: ",[0,50],"; border-bottom-left-radius: ",[0,50],"; border-bottom-right-radius: ",[0,50],"; margin: ",[0,40]," 0; background-color: #01FFEA; }\n.",[1],"btn-40{ height: ",[0,80],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"font-center{ text-align: center; }\n.",[1],"font-green{ color: #64FF68; }\n.",[1],"font-red{ color: #FF4A80; }\n.",[1],"font-orange{ color: #FDE24B; }\n.",[1],"font-white{ color: #FFF; }\n.",[1],"font-black{ color: #373A41; }\n.",[1],"font-gray{ color: #8D8E8F; }\n.",[1],"font-light-green{ color: #01FFEA; }\n.",[1],"font-11{ font-size: ",[0,22],"; }\n.",[1],"font-13{ font-size: ",[0,26],"; }\n.",[1],"font-14{ font-size: ",[0,28],"; }\n.",[1],"font-15{ font-size: ",[0,30],"; }\n.",[1],"font-16{ font-size: ",[0,32],"; }\n.",[1],"font-18{ font-size: ",[0,36],"; }\n.",[1],"font-24{ font-size: ",[0,48],"; }\n.",[1],"font-bold{ font-weight: bold; }\n.",[1],"bg-gray{ background-color:#4C5059; }\n.",[1],"bg-black{ background-color:#303238 }\n.",[1],"bg-light-black{ background-color: #373A41; }\n.",[1],"bg-blue{ background-color: #3180FF; }\n.",[1],"bg-light-green{ background-color: #01FFEA; }\n.",[1],"m-0{ margin:0; }\n.",[1],"mt-10{ margin-top: ",[0,20],"; }\n.",[1],"mt-15{ margin-top: ",[0,30],"; }\n.",[1],"mb-10{ margin-bottom: ",[0,20],"; }\n.",[1],"mb-15{ margin-bottom: ",[0,30],"; }\n.",[1],"mb-20{ margin-bottom: ",[0,40],"; }\n.",[1],"mb-25{ margin-bottom: ",[0,50],"; }\n.",[1],"mr-5{ margin-right: ",[0,10],"; }\n.",[1],"mr-15{ margin-right: ",[0,30],"; }\n.",[1],"mr-30{ margin-right: ",[0,60],"; }\n.",[1],"ml-15{ margin-left: ",[0,30],"; }\n.",[1],"ml-20{ margin-left: ",[0,40],"; }\n.",[1],"p-0{ padding: 0; }\n.",[1],"pt-40{ padding-top: ",[0,80],"; }\n.",[1],"p-25{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,50],"; }\n.",[1],"pl-0{ padding-left: 0; }\n.",[1],"pl-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,30],"; }\n.",[1],"pr-0{ padding-right: 0; }\n.",[1],"pr-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,30],"; }\n.",[1],"w-100{ width:",[0,750],"; }\n.",[1],"flex{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-wrap{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"flex-items-start{ -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"flex-items-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"flex-items-end{ -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"flex-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"flex-row-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-row-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-row-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"flex-row-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-col-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-col-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"avatar{ width: ",[0,80],"; height: ",[0,80],"; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; margin-right: ",[0,20],"; }\n.",[1],"table-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"table-item{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,6],"; min-height: ",[0,100],"; }\n.",[1],"col-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row-center{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-text{ font-size: ",[0,26],"; color: #8D8E8F; }\n.",[1],"message-box.",[1],"data-v-257d789d{ position: fixed; width: ",[0,750],"; left: 0; bottom: ",[0,100],"; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,30],"; }\n.",[1],"message-input.",[1],"data-v-257d789d{ height:",[0,70],"; background-color:#303238; border-top-left-radius: ",[0,35],"; border-top-right-radius: ",[0,35],"; border-bottom-left-radius: ",[0,35],"; border-bottom-right-radius: ",[0,35],"; padding-left: ",[0,20],"; }\n",],undefined,{path:"./pages/stock/Chat.wxss"});    
__wxAppCode__['pages/stock/Chat.wxml']=$gwx('./pages/stock/Chat.wxml');

__wxAppCode__['pages/stock/Contrast.wxss']=setCssToHead([".",[1],"container{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"radiu-box{ border-top-left-radius: ",[0,20],"; border-top-right-radius: ",[0,20],"; border-bottom-left-radius: ",[0,20],"; border-bottom-right-radius: ",[0,20],"; background-color: #373A41; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"border{ border-width: ",[0,1],"; border-style: solid; border-color: #4C5059; }\n.",[1],"submit-btn{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,50],"; border-top-right-radius: ",[0,50],"; border-bottom-left-radius: ",[0,50],"; border-bottom-right-radius: ",[0,50],"; margin: ",[0,40]," 0; background-color: #01FFEA; }\n.",[1],"btn-40{ height: ",[0,80],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"font-center{ text-align: center; }\n.",[1],"font-green{ color: #64FF68; }\n.",[1],"font-red{ color: #FF4A80; }\n.",[1],"font-orange{ color: #FDE24B; }\n.",[1],"font-white{ color: #FFF; }\n.",[1],"font-black{ color: #373A41; }\n.",[1],"font-gray{ color: #8D8E8F; }\n.",[1],"font-light-green{ color: #01FFEA; }\n.",[1],"font-11{ font-size: ",[0,22],"; }\n.",[1],"font-13{ font-size: ",[0,26],"; }\n.",[1],"font-14{ font-size: ",[0,28],"; }\n.",[1],"font-15{ font-size: ",[0,30],"; }\n.",[1],"font-16{ font-size: ",[0,32],"; }\n.",[1],"font-18{ font-size: ",[0,36],"; }\n.",[1],"font-24{ font-size: ",[0,48],"; }\n.",[1],"font-bold{ font-weight: bold; }\n.",[1],"bg-gray{ background-color:#4C5059; }\n.",[1],"bg-black{ background-color:#303238 }\n.",[1],"bg-light-black{ background-color: #373A41; }\n.",[1],"bg-blue{ background-color: #3180FF; }\n.",[1],"bg-light-green{ background-color: #01FFEA; }\n.",[1],"m-0{ margin:0; }\n.",[1],"mt-10{ margin-top: ",[0,20],"; }\n.",[1],"mt-15{ margin-top: ",[0,30],"; }\n.",[1],"mb-10{ margin-bottom: ",[0,20],"; }\n.",[1],"mb-15{ margin-bottom: ",[0,30],"; }\n.",[1],"mb-20{ margin-bottom: ",[0,40],"; }\n.",[1],"mb-25{ margin-bottom: ",[0,50],"; }\n.",[1],"mr-5{ margin-right: ",[0,10],"; }\n.",[1],"mr-15{ margin-right: ",[0,30],"; }\n.",[1],"mr-30{ margin-right: ",[0,60],"; }\n.",[1],"ml-15{ margin-left: ",[0,30],"; }\n.",[1],"ml-20{ margin-left: ",[0,40],"; }\n.",[1],"p-0{ padding: 0; }\n.",[1],"pt-40{ padding-top: ",[0,80],"; }\n.",[1],"p-25{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,50],"; }\n.",[1],"pl-0{ padding-left: 0; }\n.",[1],"pl-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,30],"; }\n.",[1],"pr-0{ padding-right: 0; }\n.",[1],"pr-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,30],"; }\n.",[1],"w-100{ width:",[0,750],"; }\n.",[1],"flex{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-wrap{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"flex-items-start{ -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"flex-items-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"flex-items-end{ -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"flex-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"flex-row-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-row-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-row-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"flex-row-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-col-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-col-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"avatar{ width: ",[0,80],"; height: ",[0,80],"; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; margin-right: ",[0,20],"; }\n.",[1],"table-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"table-item{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,6],"; min-height: ",[0,100],"; }\n.",[1],"col-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row-center{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-text{ font-size: ",[0,26],"; color: #8D8E8F; }\n",],undefined,{path:"./pages/stock/Contrast.wxss"});    
__wxAppCode__['pages/stock/Contrast.wxml']=$gwx('./pages/stock/Contrast.wxml');

__wxAppCode__['pages/stock/Home.wxss']=setCssToHead([".",[1],"container{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"radiu-box{ border-top-left-radius: ",[0,20],"; border-top-right-radius: ",[0,20],"; border-bottom-left-radius: ",[0,20],"; border-bottom-right-radius: ",[0,20],"; background-color: #373A41; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"border{ border-width: ",[0,1],"; border-style: solid; border-color: #4C5059; }\n.",[1],"submit-btn{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,50],"; border-top-right-radius: ",[0,50],"; border-bottom-left-radius: ",[0,50],"; border-bottom-right-radius: ",[0,50],"; margin: ",[0,40]," 0; background-color: #01FFEA; }\n.",[1],"btn-40{ height: ",[0,80],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"font-center{ text-align: center; }\n.",[1],"font-green{ color: #64FF68; }\n.",[1],"font-red{ color: #FF4A80; }\n.",[1],"font-orange{ color: #FDE24B; }\n.",[1],"font-white{ color: #FFF; }\n.",[1],"font-black{ color: #373A41; }\n.",[1],"font-gray{ color: #8D8E8F; }\n.",[1],"font-light-green{ color: #01FFEA; }\n.",[1],"font-11{ font-size: ",[0,22],"; }\n.",[1],"font-13{ font-size: ",[0,26],"; }\n.",[1],"font-14{ font-size: ",[0,28],"; }\n.",[1],"font-15{ font-size: ",[0,30],"; }\n.",[1],"font-16{ font-size: ",[0,32],"; }\n.",[1],"font-18{ font-size: ",[0,36],"; }\n.",[1],"font-24{ font-size: ",[0,48],"; }\n.",[1],"font-bold{ font-weight: bold; }\n.",[1],"bg-gray{ background-color:#4C5059; }\n.",[1],"bg-black{ background-color:#303238 }\n.",[1],"bg-light-black{ background-color: #373A41; }\n.",[1],"bg-blue{ background-color: #3180FF; }\n.",[1],"bg-light-green{ background-color: #01FFEA; }\n.",[1],"m-0{ margin:0; }\n.",[1],"mt-10{ margin-top: ",[0,20],"; }\n.",[1],"mt-15{ margin-top: ",[0,30],"; }\n.",[1],"mb-10{ margin-bottom: ",[0,20],"; }\n.",[1],"mb-15{ margin-bottom: ",[0,30],"; }\n.",[1],"mb-20{ margin-bottom: ",[0,40],"; }\n.",[1],"mb-25{ margin-bottom: ",[0,50],"; }\n.",[1],"mr-5{ margin-right: ",[0,10],"; }\n.",[1],"mr-15{ margin-right: ",[0,30],"; }\n.",[1],"mr-30{ margin-right: ",[0,60],"; }\n.",[1],"ml-15{ margin-left: ",[0,30],"; }\n.",[1],"ml-20{ margin-left: ",[0,40],"; }\n.",[1],"p-0{ padding: 0; }\n.",[1],"pt-40{ padding-top: ",[0,80],"; }\n.",[1],"p-25{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,50],"; }\n.",[1],"pl-0{ padding-left: 0; }\n.",[1],"pl-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,30],"; }\n.",[1],"pr-0{ padding-right: 0; }\n.",[1],"pr-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,30],"; }\n.",[1],"w-100{ width:",[0,750],"; }\n.",[1],"flex{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-wrap{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"flex-items-start{ -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"flex-items-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"flex-items-end{ -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"flex-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"flex-row-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-row-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-row-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"flex-row-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-col-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-col-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"avatar{ width: ",[0,80],"; height: ",[0,80],"; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; margin-right: ",[0,20],"; }\n.",[1],"table-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"table-item{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,6],"; min-height: ",[0,100],"; }\n.",[1],"col-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row-center{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-text{ font-size: ",[0,26],"; color: #8D8E8F; }\n.",[1],"k-title.",[1],"data-v-9a5482b8{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-bottom: ",[0,20],"; }\n.",[1],"k-detail.",[1],"data-v-9a5482b8{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"image.",[1],"data-v-9a5482b8 { width: ",[0,690],"; height: ",[0,300],"; }\n.",[1],"grid.",[1],"data-v-9a5482b8{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; padding: ",[0,30]," 0; }\n.",[1],"grid-item.",[1],"data-v-9a5482b8{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"bid-title.",[1],"data-v-9a5482b8{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin-bottom: ",[0,24],"; }\n.",[1],"bid-ratio.",[1],"data-v-9a5482b8{ height: ",[0,30],"; border-top-left-radius: ",[0,15],"; border-top-right-radius: ",[0,15],"; border-bottom-left-radius: ",[0,15],"; border-bottom-right-radius: ",[0,15],"; background-color:#64FF68; overflow: hidden; position: relative; margin-bottom: ",[0,30],"; }\n.",[1],"bid-buy.",[1],"data-v-9a5482b8{ background-color: #FF4A80; height: ",[0,30],"; width: ",[0,472],"; }\n.",[1],"bid-ratio-font.",[1],"data-v-9a5482b8{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; position: absolute; top:0; left: 0; padding: 0 ",[0,10],"; width: ",[0,630],"; height: ",[0,30],"; }\n.",[1],"futures-detail.",[1],"data-v-9a5482b8{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"futures-item.",[1],"data-v-9a5482b8{ -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; width: ",[0,170],"; margin-bottom: ",[0,30],"; }\n.",[1],"futures-title.",[1],"data-v-9a5482b8{ margin-bottom:",[0,10],"; }\n.",[1],"look-more.",[1],"data-v-9a5482b8{ text-align: right; margin-bottom: ",[0,20],"; }\n.",[1],"say-input.",[1],"data-v-9a5482b8{ width: ",[0,550],"; height: ",[0,70],"; border-top-left-radius: ",[0,35],"; border-top-right-radius: ",[0,35],"; border-bottom-left-radius: ",[0,35],"; border-bottom-right-radius: ",[0,35],"; padding: 0 ",[0,20],"; color: #fff; }\n.",[1],"say-info.",[1],"data-v-9a5482b8{ width: ",[0,750],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"say-uname.",[1],"data-v-9a5482b8{ margin-bottom: ",[0,20],"; }\n.",[1],"say-message.",[1],"data-v-9a5482b8{ margin-bottom: ",[0,20],"; }\n.",[1],"nav.",[1],"data-v-9a5482b8{ height:",[0,80],"; }\n.",[1],"nav-box.",[1],"data-v-9a5482b8{ height:",[0,620]," }\n.",[1],"avatar.",[1],"data-v-9a5482b8{ -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,80],"; height: ",[0,80],"; }\n",],undefined,{path:"./pages/stock/Home.wxss"});    
__wxAppCode__['pages/stock/Home.wxml']=$gwx('./pages/stock/Home.wxml');

__wxAppCode__['pages/stock/More.wxss']=setCssToHead([".",[1],"container{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"radiu-box{ border-top-left-radius: ",[0,20],"; border-top-right-radius: ",[0,20],"; border-bottom-left-radius: ",[0,20],"; border-bottom-right-radius: ",[0,20],"; background-color: #373A41; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"border{ border-width: ",[0,1],"; border-style: solid; border-color: #4C5059; }\n.",[1],"submit-btn{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,50],"; border-top-right-radius: ",[0,50],"; border-bottom-left-radius: ",[0,50],"; border-bottom-right-radius: ",[0,50],"; margin: ",[0,40]," 0; background-color: #01FFEA; }\n.",[1],"btn-40{ height: ",[0,80],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"font-center{ text-align: center; }\n.",[1],"font-green{ color: #64FF68; }\n.",[1],"font-red{ color: #FF4A80; }\n.",[1],"font-orange{ color: #FDE24B; }\n.",[1],"font-white{ color: #FFF; }\n.",[1],"font-black{ color: #373A41; }\n.",[1],"font-gray{ color: #8D8E8F; }\n.",[1],"font-light-green{ color: #01FFEA; }\n.",[1],"font-11{ font-size: ",[0,22],"; }\n.",[1],"font-13{ font-size: ",[0,26],"; }\n.",[1],"font-14{ font-size: ",[0,28],"; }\n.",[1],"font-15{ font-size: ",[0,30],"; }\n.",[1],"font-16{ font-size: ",[0,32],"; }\n.",[1],"font-18{ font-size: ",[0,36],"; }\n.",[1],"font-24{ font-size: ",[0,48],"; }\n.",[1],"font-bold{ font-weight: bold; }\n.",[1],"bg-gray{ background-color:#4C5059; }\n.",[1],"bg-black{ background-color:#303238 }\n.",[1],"bg-light-black{ background-color: #373A41; }\n.",[1],"bg-blue{ background-color: #3180FF; }\n.",[1],"bg-light-green{ background-color: #01FFEA; }\n.",[1],"m-0{ margin:0; }\n.",[1],"mt-10{ margin-top: ",[0,20],"; }\n.",[1],"mt-15{ margin-top: ",[0,30],"; }\n.",[1],"mb-10{ margin-bottom: ",[0,20],"; }\n.",[1],"mb-15{ margin-bottom: ",[0,30],"; }\n.",[1],"mb-20{ margin-bottom: ",[0,40],"; }\n.",[1],"mb-25{ margin-bottom: ",[0,50],"; }\n.",[1],"mr-5{ margin-right: ",[0,10],"; }\n.",[1],"mr-15{ margin-right: ",[0,30],"; }\n.",[1],"mr-30{ margin-right: ",[0,60],"; }\n.",[1],"ml-15{ margin-left: ",[0,30],"; }\n.",[1],"ml-20{ margin-left: ",[0,40],"; }\n.",[1],"p-0{ padding: 0; }\n.",[1],"pt-40{ padding-top: ",[0,80],"; }\n.",[1],"p-25{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,50],"; }\n.",[1],"pl-0{ padding-left: 0; }\n.",[1],"pl-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,30],"; }\n.",[1],"pr-0{ padding-right: 0; }\n.",[1],"pr-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,30],"; }\n.",[1],"w-100{ width:",[0,750],"; }\n.",[1],"flex{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-wrap{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"flex-items-start{ -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"flex-items-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"flex-items-end{ -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"flex-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"flex-row-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-row-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-row-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"flex-row-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-col-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-col-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"avatar{ width: ",[0,80],"; height: ",[0,80],"; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; margin-right: ",[0,20],"; }\n.",[1],"table-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"table-item{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,6],"; min-height: ",[0,100],"; }\n.",[1],"col-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row-center{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-text{ font-size: ",[0,26],"; color: #8D8E8F; }\n.",[1],"avatar.",[1],"data-v-7a784bcc{ width: ",[0,120],"; height: ",[0,120],"; border-color: #4C5059; border-style: solid; border-width: ",[0,10],"; border-radius: 50% }\n.",[1],"icons-item.",[1],"data-v-7a784bcc{ width: ",[0,229],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"icon-image.",[1],"data-v-7a784bcc{ width: ",[0,80],"; height: ",[0,80],"; margin-bottom: ",[0,14],"; }\n",],undefined,{path:"./pages/stock/More.wxss"});    
__wxAppCode__['pages/stock/More.wxml']=$gwx('./pages/stock/More.wxml');

__wxAppCode__['pages/stock/ShowCase.wxss']=setCssToHead([".",[1],"container{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"radiu-box{ border-top-left-radius: ",[0,20],"; border-top-right-radius: ",[0,20],"; border-bottom-left-radius: ",[0,20],"; border-bottom-right-radius: ",[0,20],"; background-color: #373A41; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"border{ border-width: ",[0,1],"; border-style: solid; border-color: #4C5059; }\n.",[1],"submit-btn{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,50],"; border-top-right-radius: ",[0,50],"; border-bottom-left-radius: ",[0,50],"; border-bottom-right-radius: ",[0,50],"; margin: ",[0,40]," 0; background-color: #01FFEA; }\n.",[1],"btn-40{ height: ",[0,80],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"font-center{ text-align: center; }\n.",[1],"font-green{ color: #64FF68; }\n.",[1],"font-red{ color: #FF4A80; }\n.",[1],"font-orange{ color: #FDE24B; }\n.",[1],"font-white{ color: #FFF; }\n.",[1],"font-black{ color: #373A41; }\n.",[1],"font-gray{ color: #8D8E8F; }\n.",[1],"font-light-green{ color: #01FFEA; }\n.",[1],"font-11{ font-size: ",[0,22],"; }\n.",[1],"font-13{ font-size: ",[0,26],"; }\n.",[1],"font-14{ font-size: ",[0,28],"; }\n.",[1],"font-15{ font-size: ",[0,30],"; }\n.",[1],"font-16{ font-size: ",[0,32],"; }\n.",[1],"font-18{ font-size: ",[0,36],"; }\n.",[1],"font-24{ font-size: ",[0,48],"; }\n.",[1],"font-bold{ font-weight: bold; }\n.",[1],"bg-gray{ background-color:#4C5059; }\n.",[1],"bg-black{ background-color:#303238 }\n.",[1],"bg-light-black{ background-color: #373A41; }\n.",[1],"bg-blue{ background-color: #3180FF; }\n.",[1],"bg-light-green{ background-color: #01FFEA; }\n.",[1],"m-0{ margin:0; }\n.",[1],"mt-10{ margin-top: ",[0,20],"; }\n.",[1],"mt-15{ margin-top: ",[0,30],"; }\n.",[1],"mb-10{ margin-bottom: ",[0,20],"; }\n.",[1],"mb-15{ margin-bottom: ",[0,30],"; }\n.",[1],"mb-20{ margin-bottom: ",[0,40],"; }\n.",[1],"mb-25{ margin-bottom: ",[0,50],"; }\n.",[1],"mr-5{ margin-right: ",[0,10],"; }\n.",[1],"mr-15{ margin-right: ",[0,30],"; }\n.",[1],"mr-30{ margin-right: ",[0,60],"; }\n.",[1],"ml-15{ margin-left: ",[0,30],"; }\n.",[1],"ml-20{ margin-left: ",[0,40],"; }\n.",[1],"p-0{ padding: 0; }\n.",[1],"pt-40{ padding-top: ",[0,80],"; }\n.",[1],"p-25{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,50],"; }\n.",[1],"pl-0{ padding-left: 0; }\n.",[1],"pl-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,30],"; }\n.",[1],"pr-0{ padding-right: 0; }\n.",[1],"pr-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,30],"; }\n.",[1],"w-100{ width:",[0,750],"; }\n.",[1],"flex{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-wrap{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"flex-items-start{ -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"flex-items-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"flex-items-end{ -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"flex-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"flex-row-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-row-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-row-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"flex-row-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-col-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-col-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"avatar{ width: ",[0,80],"; height: ",[0,80],"; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; margin-right: ",[0,20],"; }\n.",[1],"table-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"table-item{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,6],"; min-height: ",[0,100],"; }\n.",[1],"col-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row-center{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-text{ font-size: ",[0,26],"; color: #8D8E8F; }\n.",[1],"content-box.",[1],"data-v-fc56efdc{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap }\n.",[1],"content-item.",[1],"data-v-fc56efdc{ width: ",[0,210],"; }\n",],undefined,{path:"./pages/stock/ShowCase.wxss"});    
__wxAppCode__['pages/stock/ShowCase.wxml']=$gwx('./pages/stock/ShowCase.wxml');

__wxAppCode__['pages/stock/Test.wxss']=setCssToHead([".",[1],"container{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; }\n.",[1],"radiu-box{ border-top-left-radius: ",[0,20],"; border-top-right-radius: ",[0,20],"; border-bottom-left-radius: ",[0,20],"; border-bottom-right-radius: ",[0,20],"; background-color: #373A41; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"border{ border-width: ",[0,1],"; border-style: solid; border-color: #4C5059; }\n.",[1],"submit-btn{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,50],"; border-top-right-radius: ",[0,50],"; border-bottom-left-radius: ",[0,50],"; border-bottom-right-radius: ",[0,50],"; margin: ",[0,40]," 0; background-color: #01FFEA; }\n.",[1],"btn-40{ height: ",[0,80],"; border-width: ",[0,10],"; border-style: solid; border-color: #4C5059; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; text-align: center; line-height: ",[0,60],"; }\n.",[1],"font-center{ text-align: center; }\n.",[1],"font-green{ color: #64FF68; }\n.",[1],"font-red{ color: #FF4A80; }\n.",[1],"font-orange{ color: #FDE24B; }\n.",[1],"font-white{ color: #FFF; }\n.",[1],"font-black{ color: #373A41; }\n.",[1],"font-gray{ color: #8D8E8F; }\n.",[1],"font-light-green{ color: #01FFEA; }\n.",[1],"font-11{ font-size: ",[0,22],"; }\n.",[1],"font-13{ font-size: ",[0,26],"; }\n.",[1],"font-14{ font-size: ",[0,28],"; }\n.",[1],"font-15{ font-size: ",[0,30],"; }\n.",[1],"font-16{ font-size: ",[0,32],"; }\n.",[1],"font-18{ font-size: ",[0,36],"; }\n.",[1],"font-24{ font-size: ",[0,48],"; }\n.",[1],"font-bold{ font-weight: bold; }\n.",[1],"bg-gray{ background-color:#4C5059; }\n.",[1],"bg-black{ background-color:#303238 }\n.",[1],"bg-light-black{ background-color: #373A41; }\n.",[1],"bg-blue{ background-color: #3180FF; }\n.",[1],"bg-light-green{ background-color: #01FFEA; }\n.",[1],"m-0{ margin:0; }\n.",[1],"mt-10{ margin-top: ",[0,20],"; }\n.",[1],"mt-15{ margin-top: ",[0,30],"; }\n.",[1],"mb-10{ margin-bottom: ",[0,20],"; }\n.",[1],"mb-15{ margin-bottom: ",[0,30],"; }\n.",[1],"mb-20{ margin-bottom: ",[0,40],"; }\n.",[1],"mb-25{ margin-bottom: ",[0,50],"; }\n.",[1],"mr-5{ margin-right: ",[0,10],"; }\n.",[1],"mr-15{ margin-right: ",[0,30],"; }\n.",[1],"mr-30{ margin-right: ",[0,60],"; }\n.",[1],"ml-15{ margin-left: ",[0,30],"; }\n.",[1],"ml-20{ margin-left: ",[0,40],"; }\n.",[1],"p-0{ padding: 0; }\n.",[1],"pt-40{ padding-top: ",[0,80],"; }\n.",[1],"p-25{ -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,50],"; }\n.",[1],"pl-0{ padding-left: 0; }\n.",[1],"pl-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-left: ",[0,30],"; }\n.",[1],"pr-0{ padding-right: 0; }\n.",[1],"pr-15{ -webkit-box-sizing: border-box; box-sizing: border-box; padding-right: ",[0,30],"; }\n.",[1],"w-100{ width:",[0,750],"; }\n.",[1],"flex{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"flex-wrap{ -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"flex-items-start{ -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; }\n.",[1],"flex-items-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"flex-items-end{ -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; }\n.",[1],"flex-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"flex-row-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-row-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-row-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"flex-row-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-between{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"flex-col-around{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"flex-col-center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"flex-col-end{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"avatar{ width: ",[0,80],"; height: ",[0,80],"; border-top-left-radius: ",[0,40],"; border-top-right-radius: ",[0,40],"; border-bottom-left-radius: ",[0,40],"; border-bottom-right-radius: ",[0,40],"; margin-right: ",[0,20],"; }\n.",[1],"table-row{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"table-item{ -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,14]," ",[0,6],"; min-height: ",[0,100],"; }\n.",[1],"col-center{ -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row-center{ -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\nwx-text{ font-size: ",[0,26],"; color: #8D8E8F; }\n",],undefined,{path:"./pages/stock/Test.wxss"});    
__wxAppCode__['pages/stock/Test.wxml']=$gwx('./pages/stock/Test.wxml');

__wxAppCode__['pages/user/about.wxss']=setCssToHead(["body, wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\nbody { min-height: 100%; background-color: #f4f5f6; }\nwx-image { width: ",[0,360],"; height: ",[0,360],"; }\n.",[1],"about { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"qrcode { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"qrcode .",[1],"tip { margin-top: ",[0,20],"; }\n.",[1],"desc { margin-top: ",[0,30],"; display: block; }\n.",[1],"code { color: #e96900; background-color: #f4f5f6; }\nwx-button { width: 100%; margin-top: ",[0,40],"; }\n.",[1],"version { height: ",[0,80],"; line-height: ",[0,80],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #ccc; }\n.",[1],"source { margin-top: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"source-list { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"link { color: #007AFF; }\n",],undefined,{path:"./pages/user/about.wxss"});    
__wxAppCode__['pages/user/about.wxml']=$gwx('./pages/user/about.wxml');

__wxAppCode__['pages/user/account.wxss']=setCssToHead([".",[1],"listcell{ padding: ",[0,20]," 0; border-bottom: 1px solid #ccc; }\n.",[1],"login-button { background: #E3162E; color: #FFFFFF; border-radius: ",[0,44],"; }\n",],undefined,{path:"./pages/user/account.wxss"});    
__wxAppCode__['pages/user/account.wxml']=$gwx('./pages/user/account.wxml');

__wxAppCode__['pages/user/feedback.wxss']=setCssToHead(["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(\x27https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf\x27) format(\x27truetype\x27); }\nbody { background-color: #f4f5f6; }\nwx-view{ font-size: ",[0,28],"; }\n.",[1],"input-view { font-size: ",[0,28],"; }\n.",[1],"close-view{ text-align: center;line-height:14px;height: 16px;width: 16px;border-radius: 50%;background: #FF5053;color: #FFFFFF;position: absolute;top: -6px;right: -4px;font-size: 12px; }\n.",[1],"uni-uploader { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-uploader-head { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"uni-uploader-info { color: #B2B2B2; }\n.",[1],"uni-uploader-body { margin-top: ",[0,16],"; }\n.",[1],"uni-uploader__files { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"uni-uploader__file { margin: ",[0,10],"; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__img { display: block; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__input-box { position: relative; margin:",[0,10],"; width: ",[0,208],"; height: ",[0,208],"; border: ",[0,2]," solid #D9D9D9; }\n.",[1],"uni-uploader__input-box:before, .",[1],"uni-uploader__input-box:after { content: \x22 \x22; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #D9D9D9; }\n.",[1],"uni-uploader__input-box:before { width: ",[0,4],"; height: ",[0,79],"; }\n.",[1],"uni-uploader__input-box:after { width: ",[0,79],"; height: ",[0,4],"; }\n.",[1],"uni-uploader__input-box:active { border-color: #999999; }\n.",[1],"uni-uploader__input-box:active:before, .",[1],"uni-uploader__input-box:active:after { background-color: #999999; }\n.",[1],"uni-uploader__input { position: absolute; z-index: 1; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; }\n.",[1],"feedback-title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20],"; color: #8f8f94; font-size: ",[0,28],"; }\n.",[1],"feedback-star-view.",[1],"feedback-title { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; margin: 0; }\n.",[1],"feedback-quick { position: relative; padding-right: ",[0,40],"; }\n.",[1],"feedback-quick:after { font-family: uniicons; font-size: ",[0,40],"; content: \x27\\E581\x27; position: absolute; right: 0; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"feedback-body { background: #fff; }\n.",[1],"feedback-textare { height: ",[0,200],"; font-size: ",[0,34],"; line-height: ",[0,50],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20]," ",[0,30]," 0; background-color: #FFFFFF; }\n.",[1],"feedback-input { font-size: ",[0,34],"; height: ",[0,50],"; min-height: ",[0,50],"; padding: ",[0,15]," ",[0,20],"; line-height: ",[0,50],"; background-color: #FFFFFF; }\n.",[1],"feedback-uploader { padding: ",[0,22]," ",[0,20],"; }\n.",[1],"feedback-star { font-family: uniicons; font-size: ",[0,40],"; margin-left: ",[0,6],"; }\n.",[1],"feedback-star-view { margin-left: ",[0,20],"; }\n.",[1],"feedback-star:after { content: \x27\\E408\x27; }\n.",[1],"feedback-star.",[1],"active { color: #FFB400; }\n.",[1],"feedback-star.",[1],"active:after { content: \x27\\E438\x27; }\n.",[1],"feedback-submit { background: #2fc25b; color: #FFFFFF; margin: ",[0,20],"; }\n",],undefined,{path:"./pages/user/feedback.wxss"});    
__wxAppCode__['pages/user/feedback.wxml']=$gwx('./pages/user/feedback.wxml');

__wxAppCode__['pages/user/index.wxss']=setCssToHead(["@font-face { font-family: texticons; font-weight: normal; font-style: normal; src: url(\x27https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf\x27) format(\x27truetype\x27); }\nbody, wx-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\nbody { background-color: #f4f5f6; }\n.",[1],"center { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"logo { width: ",[0,750],"; height: ",[0,240],"; padding: ",[0,20],"; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #2fc25b; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"logo-hover { opacity: 0.8; }\n.",[1],"logo-img { width: ",[0,150],"; height: ",[0,150],"; border-radius: ",[0,150],"; }\n.",[1],"logo-title { height: ",[0,150],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; margin-left: ",[0,20],"; }\n.",[1],"uer-name { height: ",[0,60],"; line-height: ",[0,60],"; font-size: ",[0,38],"; color: #FFFFFF; }\n.",[1],"go-login.",[1],"navigat-arrow { font-size: ",[0,38],"; color: #FFFFFF; }\n.",[1],"login-title { height: ",[0,150],"; -webkit-box-align: self-start; -webkit-align-items: self-start; -ms-flex-align: self-start; align-items: self-start; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,20],"; }\n.",[1],"center-list { background-color: #FFFFFF; margin-top: ",[0,20],"; width: ",[0,750],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"center-list-item { height: ",[0,90],"; width: ",[0,750],"; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; padding: ",[0,0]," ",[0,20],"; }\n.",[1],"border-bottom { border-bottom-width: ",[0,1],"; border-color: #c8c7cc; border-bottom-style: solid; }\n.",[1],"list-icon { width: ",[0,40],"; height: ",[0,90],"; line-height: ",[0,90],"; font-size: ",[0,34],"; color: #2fc25b; text-align: center; font-family: texticons; margin-right: ",[0,20],"; }\n.",[1],"list-text { height: ",[0,90],"; line-height: ",[0,90],"; font-size: ",[0,34],"; color: #555; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: left; }\n.",[1],"navigat-arrow { height: ",[0,90],"; width: ",[0,40],"; line-height: ",[0,90],"; font-size: ",[0,34],"; color: #555; text-align: right; font-family: texticons; }\n",],undefined,{path:"./pages/user/index.wxss"});    
__wxAppCode__['pages/user/index.wxml']=$gwx('./pages/user/index.wxml');

__wxAppCode__['pages/user/login.wxss']=setCssToHead([".",[1],"inputArea { padding: ",[0,30]," 10%; }\n.",[1],"inputClass { border: 2px solid #ccc; border-radius: ",[0,44],"; outline: 0; width: 90%; padding: ",[0,16]," ",[0,30],"; background-color: #FFFFFF; }\n.",[1],"logo-img { width: ",[0,150],"; height: ",[0,150],"; border-radius: ",[0,150],"; }\n.",[1],"login-button { background: #2fc25b; color: #FFFFFF; border-radius: ",[0,44],"; font-size: ",[0,36],"; text-align: center; padding: ",[0,20],"; }\n",],undefined,{path:"./pages/user/login.wxss"});    
__wxAppCode__['pages/user/login.wxml']=$gwx('./pages/user/login.wxml');

__wxAppCode__['pages/user/message.wxss']=setCssToHead(["body{background: #FFFFFF;}\n.",[1],"qiun-center{ display: -webkit-box; display: -ms-flexbox; display: flex; display: -webkit-flex; -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center; -webkit-box-pack:center; -webkit-justify-content:center; -ms-flex-pack:center; justify-content:center; padding-top: ",[0,100],"; }\n.",[1],"qiun-none{ width: ",[0,391],"; height: ",[0,388],"; }\n.",[1],"qiun-text2{ font-size: ",[0,32],"; color: #666666; }\n",],undefined,{path:"./pages/user/message.wxss"});    
__wxAppCode__['pages/user/message.wxml']=$gwx('./pages/user/message.wxml');

__wxAppCode__['pages/user/service.wxss']=setCssToHead([".",[1],"qiun-title{font-size: ",[0,36],";font-weight: bold;text-align: center;padding: ",[0,20]," ",[0,0],";}\n.",[1],"qiun-text-view{background-color: #FFFFFF;margin: ",[0,10],";padding: ",[0,10],";}\n.",[1],"qiun-text-title{font-size: ",[0,32],";font-weight: bold;line-height: ",[0,64],";text-align: left;}\n.",[1],"qiun-text{font-size: ",[0,30],";line-height: ",[0,50],";width: 100%;text-align: left;text-indent: ",[0,60],";}\n",],undefined,{path:"./pages/user/service.wxss"});    
__wxAppCode__['pages/user/service.wxml']=$gwx('./pages/user/service.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
