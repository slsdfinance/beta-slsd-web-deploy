(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{4637:function(e){var t,n,i,a,s,u,r,o,l,d,p,c,m,y,h,f,v,x,g,b,_;e.exports=(t="millisecond",n="second",i="minute",a="hour",s="week",u="month",r="quarter",o="year",l="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},(h={})[y="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},f=function(e){return e instanceof b},v=function e(t,n,i){var a;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();h[s]&&(a=s),n&&(h[s]=n,a=s);var u=t.split("-");if(!a&&u.length>1)return e(u[0])}else{var r=t.name;h[r]=t,a=r}return!i&&a&&(y=a),a||!i&&y},x=function(e,t){if(f(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new b(n)},(g={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(n/60),2,"0")+":"+m(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,u),s=n-a<0,r=t.clone().add(i+(s?-1:1),u);return+(-(i+(n-a)/(s?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:u,y:o,w:s,d:"day",D:l,h:a,m:i,s:n,ms:t,Q:r})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=v,g.i=f,g.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},_=(b=function(){function e(e){this.$L=v(e.locale,null,!0),this.parse(e)}var m=e.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var a=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return g},m.isValid=function(){return this.$d.toString()!==d},m.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return x(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<x(e)},m.$g=function(e,t,n){return g.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var r=this,d=!!g.u(t)||t,p=g.p(e),c=function(e,t){var n=g.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return d?n:n.endOf("day")},m=function(e,t){return g.w(r.toDate()[e].apply(r.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},y=this.$W,h=this.$M,f=this.$D,v="set"+(this.$u?"UTC":"");switch(p){case o:return d?c(1,0):c(31,11);case u:return d?c(1,h):c(0,h+1);case s:var x=this.$locale().weekStart||0,b=(y<x?y+7:y)-x;return c(d?f-b:f+(6-b),h);case"day":case l:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case n:return m(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,s){var r,d=g.p(e),p="set"+(this.$u?"UTC":""),c=((r={}).day=p+"Date",r[l]=p+"Date",r[u]=p+"Month",r[o]=p+"FullYear",r[a]=p+"Hours",r[i]=p+"Minutes",r[n]=p+"Seconds",r[t]=p+"Milliseconds",r)[d],m="day"===d?this.$D+(s-this.$W):s;if(d===u||d===o){var y=this.clone().set(l,1);y.$d[c](m),y.init(),this.$d=y.set(l,Math.min(this.$D,y.daysInMonth())).$d}else c&&this.$d[c](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[g.p(e)]()},m.add=function(e,t){var r,l=this;e=Number(e);var d=g.p(t),p=function(t){var n=x(l);return g.w(n.date(n.date()+Math.round(t*e)),l)};if(d===u)return this.set(u,this.$M+e);if(d===o)return this.set(o,this.$y+e);if("day"===d)return p(1);if(d===s)return p(7);var c=((r={})[i]=6e4,r[a]=36e5,r[n]=1e3,r)[d]||1,m=this.$d.getTime()+e*c;return g.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=g.z(this),s=this.$H,u=this.$m,r=this.$M,o=n.weekdays,l=n.months,p=function(e,n,a,s){return e&&(e[n]||e(t,i))||a[n].slice(0,s)},m=function(e){return g.s(s%12||12,e,"0")},y=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:g.s(r+1,2,"0"),MMM:p(n.monthsShort,r,l,3),MMMM:p(l,r),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:p(n.weekdaysMin,this.$W,o,2),ddd:p(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:m(1),hh:m(2),a:y(s,u,!0),A:y(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:a};return i.replace(c,function(e,t){return t||h[e]||a.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,t,l){var d,p=g.p(t),c=x(e),m=(c.utcOffset()-this.utcOffset())*6e4,y=this-c,h=g.m(this,c);return h=((d={})[o]=h/12,d[u]=h,d[r]=h/3,d[s]=(y-m)/6048e5,d.day=(y-m)/864e5,d[a]=y/36e5,d[i]=y/6e4,d[n]=y/1e3,d)[p]||y,l?h:g.a(h)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return h[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=v(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return g.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=_,[["$ms",t],["$s",n],["$m",i],["$H",a],["$W","day"],["$M",u],["$y",o],["$D",l]].forEach(function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,b,x),e.$i=!0),x},x.locale=v,x.isDayjs=f,x.unix=function(e){return x(1e3*e)},x.en=h[y],x.Ls=h,x.p={},x)},8957:function(e){var t,n,i;e.exports=(t="minute",n=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g,function(e,a,s){var u=a.prototype;s.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},u.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},u.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var r=u.parse;u.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),r.call(this,e)};var o=u.init;u.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else o.call(this)};var l=u.utcOffset;u.utcOffset=function(e,a){var s=this.$utils().u;if(s(e))return this.$u?0:s(this.$offset)?l.call(this):this.$offset;if("string"==typeof e&&null===(e=function(e){void 0===e&&(e="");var t=e.match(n);if(!t)return null;var a=(""+t[0]).match(i)||["-",0,0],s=a[0],u=60*+a[1]+ +a[2];return 0===u?0:"+"===s?u:-u}(e)))return this;var u=16>=Math.abs(e)?60*e:e,r=this;if(a)return r.$offset=u,r.$u=0===e,r;if(0!==e){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(r=this.local().add(u+o,t)).$offset=u,r.$x.$localOffset=o}else r=this.utc();return r};var d=u.format;u.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,t)},u.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var p=u.toDate;u.toDate=function(e){return"s"===e&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():p.call(this)};var c=u.diff;u.diff=function(e,t,n){if(e&&this.$u===e.$u)return c.call(this,e,t,n);var i=this.local(),a=s(e).local();return c.call(i,a,t,n)}})},4754:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farm",function(){return n(1944)}])},1944:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var i=n(1527),a=n(4257),s=n(2740),u=n(2822);let r=(0,a.zo)("div",{display:"grid",gap:20,marginTop:32,gridTemplateColumns:"100%","@lg":{gridTemplateColumns:"1fr 1fr"}}),o=(0,a.zo)("div",{width:"100%",padding:20,border:"1px solid $primary",display:"flex",gap:20,maxWidth:"100%",flexDirection:"column","@lg":{"&:nth-child(3)":{gridColumnStart:1,gridColumnEnd:3}},"& .vest_title":{fontSize:22,fontWeight:600,lineHeight:"27px"},"& .btn_group":{display:"flex",gap:20}}),l=(0,a.zo)("div",{padding:"20px 50px",background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(3px)",display:"flex",justifyContent:"space-between",flex:1,fontSize:22,lineHeight:"20px","& .title":{fontWeight:600,color:"#A090FF"},"& .value":{marginTop:10}}),d=(0,a.zo)("div",{display:"flex",flexDirection:"column",overflowX:"auto","& .vp_table":{minWidth:913},"& .vp_header":{fontSize:18,fontWeight:600,lineHeight:1.5,color:"#A091FF",display:"grid",gridTemplateColumns:"repeat(5, 1fr) 1.5fr",whiteSpace:"nowrap"},"& .vp_header_item":{padding:"11.5px 12px"},"& .vp_body_item":{fontSize:18,lineHeight:1.5,display:"grid",whiteSpace:"nowrap",gridTemplateColumns:"repeat(5, 1fr) 1.5fr","&:nth-child(2n+1)":{background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(3px)"}},"& .vp_body:nth-child(2n+1)":{},"& .vp_body_item_child":{padding:"11.5px 12px"}});function p(){return(0,i.jsxs)("div",{className:"vp_body_item",children:[(0,i.jsx)("div",{className:"vp_body_item_child",children:"2023-3-22"}),(0,i.jsx)("div",{className:"vp_body_item_child",children:"7days"}),(0,i.jsx)("div",{className:"vp_body_item_child",children:"123hrs 30mins"}),(0,i.jsx)("div",{className:"vp_body_item_child",children:"0.6"}),(0,i.jsx)("div",{className:"vp_body_item_child",children:"2323 $SLSD"}),(0,i.jsx)("div",{className:"vp_body_item_child",children:(0,i.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,i.jsx)(u.z,{style:{height:30,width:90},children:"Cancel"}),(0,i.jsx)(u.z,{style:{height:30,width:90},children:"Claim"})]})})]})}function c(){return(0,i.jsxs)("div",{style:{marginTop:60},children:[(0,i.jsx)(s.Dx,{children:"Vest"}),(0,i.jsxs)(r,{children:[(0,i.jsxs)(o,{children:[(0,i.jsx)("div",{className:"vest_title",children:"Convert $eSLSD to $SLSD"}),(0,i.jsxs)(l,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"$eSLSD balance"}),(0,i.jsx)("div",{className:"value",children:"2,323 $eSLSD"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"Staked $eSLSD"}),(0,i.jsx)("div",{className:"value",children:"2,323 $eSLSD"})]})]}),(0,i.jsx)(u.z,{style:{width:"100%"},children:"Vest"})]}),(0,i.jsxs)(o,{children:[(0,i.jsx)("div",{className:"vest_title",children:"Stake $eSLSD to earn Dimond hand rewards"}),(0,i.jsxs)(l,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"Earned"}),(0,i.jsx)("div",{className:"value",children:"2,323 $eSLSD"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"APR"}),(0,i.jsx)("div",{className:"value",children:"12.34%"})]})]}),(0,i.jsxs)("div",{className:"btn_group",children:[(0,i.jsx)(u.z,{style:{flex:1},children:"Approve"}),(0,i.jsx)(u.z,{style:{flex:1},children:"Withdraw"}),(0,i.jsx)(u.z,{style:{flex:1},children:"Claim"})]})]}),(0,i.jsxs)(o,{children:[(0,i.jsx)("div",{className:"vest_title",children:"Vesting in progress"}),(0,i.jsx)(d,{children:(0,i.jsxs)("div",{className:"vp_table",children:[(0,i.jsxs)("div",{className:"vp_header",children:[(0,i.jsx)("div",{className:"vp_header_item",children:"Start from"}),(0,i.jsx)("div",{className:"vp_header_item",children:"Duration"}),(0,i.jsx)("div",{className:"vp_header_item",children:"Count down"}),(0,i.jsx)("div",{className:"vp_header_item",children:"Vest ratio"}),(0,i.jsx)("div",{className:"vp_header_item",children:"Final Amount"}),(0,i.jsx)("div",{className:"vp_header_item"})]}),(0,i.jsx)("div",{className:"vp_body",children:[1,2,3,4,5].map((e,t)=>(0,i.jsx)(p,{},"vp_"+t))})]})})]})]})]})}var m=n(9061),y=n(6353);function h(e){return e.mul(120).div(100)}var f=n(6987),v=n(2354),x=n(9865);let g=[{name:"TokenExchange",inputs:[{name:"buyer",type:"address",indexed:!0},{name:"sold_id",type:"int128",indexed:!1},{name:"tokens_sold",type:"uint256",indexed:!1},{name:"bought_id",type:"int128",indexed:!1},{name:"tokens_bought",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"AddLiquidity",inputs:[{name:"provider",type:"address",indexed:!0},{name:"token_amounts",type:"uint256[4]",indexed:!1},{name:"fees",type:"uint256[4]",indexed:!1},{name:"invariant",type:"uint256",indexed:!1},{name:"token_supply",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"RemoveLiquidity",inputs:[{name:"provider",type:"address",indexed:!0},{name:"token_amounts",type:"uint256[4]",indexed:!1},{name:"fees",type:"uint256[4]",indexed:!1},{name:"token_supply",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"RemoveLiquidityOne",inputs:[{name:"provider",type:"address",indexed:!0},{name:"token_amount",type:"uint256",indexed:!1},{name:"coin_amount",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"RemoveLiquidityImbalance",inputs:[{name:"provider",type:"address",indexed:!0},{name:"token_amounts",type:"uint256[4]",indexed:!1},{name:"fees",type:"uint256[4]",indexed:!1},{name:"invariant",type:"uint256",indexed:!1},{name:"token_supply",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"CommitNewAdmin",inputs:[{name:"deadline",type:"uint256",indexed:!0},{name:"admin",type:"address",indexed:!0}],anonymous:!1,type:"event"},{name:"NewAdmin",inputs:[{name:"admin",type:"address",indexed:!0}],anonymous:!1,type:"event"},{name:"CommitNewFee",inputs:[{name:"deadline",type:"uint256",indexed:!0},{name:"fee",type:"uint256",indexed:!1},{name:"admin_fee",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"NewFee",inputs:[{name:"fee",type:"uint256",indexed:!1},{name:"admin_fee",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"RampA",inputs:[{name:"old_A",type:"uint256",indexed:!1},{name:"new_A",type:"uint256",indexed:!1},{name:"initial_time",type:"uint256",indexed:!1},{name:"future_time",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{name:"StopRampA",inputs:[{name:"A",type:"uint256",indexed:!1},{name:"t",type:"uint256",indexed:!1}],anonymous:!1,type:"event"},{stateMutability:"nonpayable",type:"constructor",inputs:[{name:"_owner",type:"address"},{name:"_coins",type:"address[4]"},{name:"_pool_token",type:"address"},{name:"_A",type:"uint256"},{name:"_fee",type:"uint256"},{name:"_admin_fee",type:"uint256"}],outputs:[]},{stateMutability:"view",type:"function",name:"A",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"A_precise",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"balances",inputs:[{name:"i",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"get_virtual_price",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"calc_token_amount",inputs:[{name:"amounts",type:"uint256[4]"},{name:"is_deposit",type:"bool"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"payable",type:"function",name:"add_liquidity",inputs:[{name:"amounts",type:"uint256[4]"},{name:"min_mint_amount",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"get_dy",inputs:[{name:"i",type:"int128"},{name:"j",type:"int128"},{name:"dx",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"get_dx",inputs:[{name:"i",type:"int128"},{name:"j",type:"int128"},{name:"dy",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"payable",type:"function",name:"exchange",inputs:[{name:"i",type:"int128"},{name:"j",type:"int128"},{name:"dx",type:"uint256"},{name:"min_dy",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",name:"remove_liquidity",inputs:[{name:"_amount",type:"uint256"},{name:"_min_amounts",type:"uint256[4]"}],outputs:[{name:"",type:"uint256[4]"}]},{stateMutability:"nonpayable",type:"function",name:"remove_liquidity_imbalance",inputs:[{name:"_amounts",type:"uint256[4]"},{name:"_max_burn_amount",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"calc_withdraw_one_coin",inputs:[{name:"_token_amount",type:"uint256"},{name:"i",type:"int128"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",name:"remove_liquidity_one_coin",inputs:[{name:"_token_amount",type:"uint256"},{name:"i",type:"int128"},{name:"_min_amount",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",name:"ramp_A",inputs:[{name:"_future_A",type:"uint256"},{name:"_future_time",type:"uint256"}],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"stop_ramp_A",inputs:[],outputs:[],gas:154860},{stateMutability:"nonpayable",type:"function",name:"commit_new_fee",inputs:[{name:"new_fee",type:"uint256"},{name:"new_admin_fee",type:"uint256"}],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"apply_new_fee",inputs:[],outputs:[],gas:160702},{stateMutability:"nonpayable",type:"function",name:"revert_new_parameters",inputs:[],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"commit_transfer_ownership",inputs:[{name:"_owner",type:"address"}],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"apply_transfer_ownership",inputs:[],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"revert_transfer_ownership",inputs:[],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"withdraw_admin_fees",inputs:[],outputs:[]},{stateMutability:"nonpayable",type:"function",name:"donate_admin_fees",inputs:[],outputs:[],gas:140458},{stateMutability:"nonpayable",type:"function",name:"kill_me",inputs:[],outputs:[],gas:40325},{stateMutability:"nonpayable",type:"function",name:"unkill_me",inputs:[],outputs:[],gas:23162},{stateMutability:"view",type:"function",name:"coins",inputs:[{name:"arg0",type:"uint256"}],outputs:[{name:"",type:"address"}]},{stateMutability:"view",type:"function",name:"admin_balances",inputs:[{name:"arg0",type:"uint256"}],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"fee",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"admin_fee",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"owner",inputs:[],outputs:[{name:"",type:"address"}]},{stateMutability:"view",type:"function",name:"lp_token",inputs:[],outputs:[{name:"",type:"address"}]},{stateMutability:"view",type:"function",name:"initial_A",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"future_A",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"initial_A_time",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"future_A_time",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"admin_actions_deadline",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"transfer_ownership_deadline",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"future_fee",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"future_admin_fee",inputs:[],outputs:[{name:"",type:"uint256"}]},{stateMutability:"view",type:"function",name:"future_owner",inputs:[],outputs:[{name:"",type:"address"}]}],b=[{inputs:[{internalType:"contract RocketStorageInterface",name:"_rocketStorageAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"EtherDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"TokensBurned",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"TokensMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rethAmount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"depositExcess",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"depositExcessCollateral",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getCollateralRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_rethAmount",type:"uint256"}],name:"getEthValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getExchangeRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_ethAmount",type:"uint256"}],name:"getRethValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalCollateral",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_ethAmount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],_=()=>{let e={address:x.mp[(0,x.ZA)()],abi:g,chainId:(0,x.ZA)()},{data:t}=(0,f.Dm)({contracts:[...x.wc.map((t,n)=>({...e,functionName:"balances",args:[n]}))],watch:!0,cacheOnBlock:!1});return{balances:t}};var w=n(959),S=n(1232),$=n(4637),M=n.n($),j=n(8957),T=n.n(j),k=n(570);M().extend(T());let D=()=>{var e;let{data:t}=(0,f.Ov)({chainId:(0,x.ZA)()}),{data:n}=(0,f.Dm)({contracts:[{address:x.mp[(0,x.ZA)()],abi:g,functionName:"get_virtual_price",chainId:(0,x.ZA)()},{address:x.wc[3].address[(0,x.ZA)()],abi:b,functionName:"getExchangeRate",chainId:(0,x.ZA)()}]}),i=null==n?void 0:null===(e=n[1])||void 0===e?void 0:e.toString(),{balances:a}=_(),{data:s}=(0,f.do)({address:x.vQ[(0,x.ZA)()],abi:v.em,functionName:"totalSupply",chainId:(0,x.ZA)()}),u=M()().unix(),r=M()().utc().startOf("day").unix(),o=(0,w.useMemo)(()=>{if(t)return t-Number(new S.Z((u-r)/12).toFixed(0))},[t]),l=(0,w.useMemo)(()=>{if(o)return o-7200},[o]),{data:d}=(0,f.do)({address:x.mp[(0,x.ZA)()],abi:g,functionName:"get_virtual_price",chainId:(0,x.ZA)(),enabled:!!l&&l>0,overrides:{blockTag:l}}),p=d||k.parseEther("1"),{data:c}=(0,f.do)({address:x.mp[(0,x.ZA)()],abi:g,functionName:"get_virtual_price",chainId:(0,x.ZA)(),enabled:!!o&&o>0,overrides:{blockTag:o}}),m=c||k.parseEther("1"),y=(0,w.useMemo)(()=>{if(a&&s){let e=a.reduce((e,t,n)=>{let a="rETH"===x.wc[n].symbol?new S.Z(i||"1").div(1e18).toFixed():"1";return e.plus(new S.Z(t?t.toString():"0").multipliedBy(null!=a?a:"1"))},new S.Z(0));return e.div(s.toString()).multipliedBy(1e18).toFixed()}return new S.Z(1e18).toFixed()},[s,a]),h=(0,w.useMemo)(()=>{if(m&&p){var e,t;return m&&p&&new S.Z(null!==(e=null==m?void 0:m.toString())&&void 0!==e?e:"0").minus(null!==(t=null==p?void 0:p.toString())&&void 0!==t?t:"0")}},[m,p]),$=(0,w.useMemo)(()=>h&&p?h.div(p.toString()).multipliedBy(36500).toFixed(2):"0.00",[h,p]);return{virtualPrice:m,baseAPR:$,rRate:i,balances:a,ethxTotalSupply:s,ethxPrice:y}};var N=n(968),A=n(4567),C=n(5276);function z(e){try{return k.parseEther(e)}catch(e){return k.parseUnits("0",0)}}let O=(0,a.zo)("div",{width:"100%",height:"100%",display:"flex",flexDirection:"column"}),H=(0,a.zo)("div",{display:"flex",flexDirection:"column",width:"100%",padding:20,gap:20,"& .title_info":{display:"flex",alignItems:"center",justifyContent:"space-between"},"& .icon_name":{display:"flex",alignItems:"center",gap:10},"& .icon":{},"& .name":{fontWeight:500,fontSize:22,lineHeight:"27px"},"& .earn":{fontSize:18,lineHeight:"22px"},"& .infos":{padding:20,background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(3px)",display:"flex",justifyContent:"space-between"},"& .title":{fontWeight:600,fontSize:16,lineHeight:"20px",color:"#A090FF"},"& .value":{marginTop:10,fontSize:16,lineHeight:"20px"}}),I=(0,a.zo)("div",{display:"flex",flexDirection:"column",width:"100%",padding:20,gap:20,height:200,"& .balance":{fontSize:16,lineHeight:"19px"},"& .earned":{flex:1,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,lineHeight:"19px"}}),Z=(0,a.zo)("div",{height:50,padding:"10px 20px",fontSize:16,display:"flex",alignItems:"center",background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(3px)","& input":{outline:"none",border:"none",flex:1,color:"White",fontSize:16,height:"100%",lineHeight:"30px",whiteSpace:"nowrap",background:"transparent"},"& .symbol":{lineHeight:"30px",padding:"0 10px"},"& .maxbtn":{cursor:"pointer",fontWeight:500,lineHeight:"18px",padding:"6px 10px",background:"White",color:"Black"}}),F=(0,a.zo)("div",{display:"flex",border:"1px solid $primary",height:52}),L=e=>"UNI-V2"===e?(0,i.jsx)("img",{className:"icon",src:"/icons/lsd_eth_uni_v2_lp.png",alt:"lp",width:"auto",height:32}):(0,i.jsx)("img",{className:"icon",src:"/icons/".concat(e.toLowerCase(),".png"),width:32,height:32,alt:"icon"});function W(e){var t;let{pool:n,addressInfoOfPool:a}=e,{ethPrice:r,lsdPrice:o,lpPrice:l}=(0,w.useContext)(N.g),{data:d}=(0,f.mx)(),{ethxPrice:p}=D(),[c,x]=(0,w.useState)("Stake"),g=!!(null==n?void 0:null===(t=n.tokenSymbol)||void 0===t?void 0:t.includes("UNI")),b=g?l:(null==n?void 0:n.tokenSymbol.includes("ETHx"))?new S.Z(null!=p?p:"1").multipliedBy(r).div(1e18).toFixed(2):r,_=(0,f.cq)({address:n.tokenAddress,abi:v.em,signerOrProvider:d}),$=(0,w.useMemo)(()=>{if((null==a?void 0:a.periodFinish)<M()().unix())return"0.00";let e=b;n.tokenSymbol.includes("UNI")&&(e=l);let t=new S.Z(null==a?void 0:a.rewardRate).multipliedBy(31536e3).multipliedBy(o),i=new S.Z(null==a?void 0:a.totalSupply).multipliedBy(e);return i.eq(0)?"0.00":t.div(i).multipliedBy(100).toFixed(2)},[a,n,r]),j=async()=>{var e;let t=z(K.get("stake"));t.eq(0)||await (null==E?void 0:null===(e=E.estimateGas)||void 0===e?void 0:e.stake(t,{value:"ETH"===n.tokenSymbol?t:0}).then(async e=>{var i;console.log("estimated: before",null==e?void 0:e.toString()),console.log("estimated after",null===(i=h(e))||void 0===i?void 0:i.toString());let a=await (null==E?void 0:E.stake(t,{value:"ETH"===n.tokenSymbol?t:0}).catch(e=>{console.error("deposit: ",e)}));console.log(a)}).catch(e=>console.error("estimate: ",e)))},T=async()=>{if(!E)return;let e=z(K.get("withdraw"));e.eq(0)||await E.estimateGas.withdraw(e).then(async t=>{var n;console.log("estimated: before",t.toString()),console.log("estimated after",null===(n=h(t))||void 0===n?void 0:n.toString());let i=await E.withdraw(e).catch(e=>{console.error("withdraw: ",e)});console.log(i)}).catch(e=>console.error("estimate: ",e))},W=async()=>{_&&await _.estimateGas.approve(n.poolAddress,A.Bz).then(async()=>{await _.approve(n.poolAddress,A.Bz).catch(e=>{console.error("deposit: ",e)})}).catch(e=>console.error("estimate: ",e))},E=(0,f.cq)({address:null==n?void 0:n.poolAddress,abi:m.H,signerOrProvider:d}),q=async()=>{E&&await E.estimateGas.getReward().then(async e=>{console.log("estimated: before",e.toString()),console.log("estimated after",h(e).toString());let t=await E.getReward().catch(e=>{console.error("getReward: ",e)});console.log(t)}).catch(e=>console.error("getReward: ",e))},[Y,{height:B}]=(0,C.h4)(),R=(B-10)*Math.tan(30*Math.PI/180),U=R+10,[V,{width:P}]=(0,C.h4)(),[X,G]=(0,w.useState)(!0),[J,Q]=(0,w.useState)(!1),[K,ee]=(0,C.Sx)([["stake",""],["withdraw",""]]),et=async()=>{Q(!0),"Stake"===c?X&&"ETH"!==n.tokenSymbol?await W():await j():"Withdraw"==c?await T():await q(),Q(!1)},en=e=>{let t=c==e;return(0,i.jsxs)("div",{style:{flex:1,flexShrink:0,display:"flex",height:"100%",position:"relative",left:-R*("Stake"==e?0:"Withdraw"==e?1:2),cursor:"pointer"},onClick:()=>x(e),children:["Stake"!==e&&(0,i.jsx)("div",{style:{width:U,maxWidth:U,height:"100%",flexShrink:0,zIndex:-1,transform:"Withdraw"===e?"skewX(".concat(30,"deg)"):"skewX(-".concat(30,"deg)"),position:"relative",left:U/2,background:t?"var(--colors-primary)":"none",borderLeft:"1px solid var(--colors-primary)"}}),(0,i.jsx)("div",{style:{flex:1,overflow:"hidden",height:"100%",fontWeight:600,lineHeight:"50px",fontSize:22,background:t?"var(--colors-primary)":"transparent",textAlign:"center",color:t?"black":"white"},children:e}),"Claim"!==e&&(0,i.jsx)("div",{style:{width:U,height:"100%",flexShrink:0,zIndex:-1,position:"relative",left:-U/2,transform:"Withdraw"===e?"skewX(-".concat(30,"deg)"):"skewX(".concat(30,"deg)"),background:t?"var(--colors-primary)":"none",borderRight:"1px solid var(--colors-primary)"}})]})};return(0,i.jsx)(s.im,{ref:V,children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(H,{children:[(0,i.jsxs)("div",{className:"title_info",children:[(0,i.jsxs)("div",{className:"icon_name",children:[L(null==n?void 0:n.tokenSymbol),(0,y.fj)(null==n?void 0:n.tokenSymbol)]}),(0,i.jsx)("div",{className:"earn",children:"Earn $eSLSD"})]}),(0,i.jsxs)("div",{className:"infos",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"TVL"}),(0,i.jsx)("div",{className:"value",children:(0,y.dq)(null==a?void 0:a.totalSupply)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"APR"}),(0,i.jsxs)("div",{className:"value",children:[$,"%"]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"title",children:"Earned"}),(0,i.jsxs)("div",{className:"value",children:[(0,y.dq)(null==a?void 0:a.earned)," $eSLSD"]})]})]})]}),(0,i.jsxs)(F,{ref:Y,style:{width:P+2*R},children:[en("Stake"),en("Withdraw"),en("Claim")]}),(0,i.jsxs)(I,{children:["Stake"==c&&(0,i.jsxs)("div",{className:"balance",children:["Balandce: ",(0,y.dq)(null==a?void 0:a.tokenBalance)]}),"Withdraw"==c&&(0,i.jsxs)("div",{className:"balance",children:["Staked: ",(0,y.dq)(null==a?void 0:a.balanceOf)]}),"Claim"==c&&(0,i.jsxs)("div",{className:"earned",children:["Earned: ",(0,y.dq)(null==a?void 0:a.earned)]}),"Claim"!==c&&(0,i.jsxs)(Z,{children:["Stake"===c&&(0,i.jsx)("input",{value:K.get("stake"),onChange:e=>{ee.set("stake",e.target.value);let t=z(e.target.value);console.info("allow:",null==a?void 0:a.tokenAllowance),G(t.lte(0)||t.gt((null==a?void 0:a.tokenAllowance)||0))}}),"Withdraw"===c&&(0,i.jsx)("input",{value:K.get("withdraw"),onChange:e=>ee.set("withdraw",e.target.value)}),(0,i.jsx)("div",{className:"symbol",children:n.tokenSymbol}),(0,i.jsx)("div",{className:"maxbtn",onClick:()=>{"Stake"==c?ee.set("stake",k.formatEther((null==a?void 0:a.tokenBalance)||"0")):ee.set("withdraw",k.formatEther((null==a?void 0:a.balanceOf)||"0"))},children:"Max"})]}),(0,i.jsx)(u.z,{loading:J,onClick:et,style:{width:"100%"},children:"Stake"==c&&X&&"ETH"!==n.tokenSymbol?"Approve":c})]})]})})}let E=(0,a.zo)("div",{marginTop:60}),q=(0,a.zo)("div",{marginTop:32,gap:24,rowGap:32,display:"flex",flexWrap:"wrap",justifyContent:"center"});function Y(){let{pools:e,addressInfoOfPools:t}=(0,w.useContext)(N.g);return(0,i.jsxs)(E,{className:"farms",children:[(0,i.jsx)(s.Dx,{children:"Farm"}),(0,i.jsx)(q,{children:e&&t&&(0,i.jsx)(i.Fragment,{children:e.map((e,n)=>(0,i.jsx)(W,{pool:e,addressInfoOfPool:t[n]},"farm_"+n))})})]})}(0,a.zo)("svg",{fill:"$title",width:17,height:16,viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg"});let B=(0,a.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center",gap:10,textAlign:"center","@md":{gap:20}}),R=(0,a.zo)("div",{color:"$title",fontWeight:700,fontSize:36}),U=(0,a.zo)("div",{color:"$title",fontSize:18});function V(e){return(0,i.jsxs)(B,{style:e.style,children:[(0,i.jsx)(U,{children:e.title}),(0,i.jsx)(R,{children:e.value})]})}var P=n(137);let X=(0,a.zo)("div",{marginTop:72});function G(){var e,t;let n=(0,P.q)(),{data:a,isError:u,isLoading:r}=(0,f.KQ)({address:n.treasury,token:n.tokenAddress}),{data:o}=(0,f.dQ)({address:n.tokenAddress,chainId:n.chainId}),{addressInfoOfPools:l,lsdPrice:d,pools:p,poolLsdBalanceOfs:c,ethAmountInLP:m}=(0,w.useContext)(N.g),h=l&&p&&l.reduce((e,t,n)=>{var i,a,s;return(null===(i=p[n])||void 0===i?void 0:null===(a=i.tokenSymbol)||void 0===a?void 0:a.includes("UNI"))?e:new S.Z(null!=e?e:"0").plus(null!==(s=null==t?void 0:t.totalSupply)&&void 0!==s?s:"0").toString()},0),v=new S.Z(null!=h?h:"0").plus(null!=m?m:"0").toFixed(),x=(0,w.useMemo)(()=>{if(!c)return;let e=new S.Z(0);for(let t=0;t<(null==c?void 0:c.length);t++)e=e.plus(new S.Z(c[t]));return e.toFixed()},[c]),g=new S.Z(49225e3*1e18).minus(null!=x?x:"0").toFixed(),b=new S.Z(d).multipliedBy(g).div(1e18).toFormat(2),_=[{value:"$"+b,title:"$SLSD Price",src:"/images/coin.png"},{value:"$2,232,223",title:"$SLSD Circulation Supply",src:"/images/data.png"},{value:(0,y.dq)(v,18,0),title:"TVL",src:"/images/cash.png"},{value:(0,y.dq)(new S.Z(null!==(t=null==a?void 0:null===(e=a.value)||void 0===e?void 0:e.toString())&&void 0!==t?t:"0"),18,0)+" $SLSD",title:"Treasury",src:"/images/coins.png"}];return(0,i.jsxs)(X,{className:"statistics",children:[(0,i.jsx)(s.Dx,{children:"Stats"}),(0,i.jsx)(s.Zt,{children:_.map((e,t)=>(0,i.jsx)(V,{value:e.value,title:e.title},t))})]})}(0,a.zo)("a",{display:"flex",width:36,height:36,alignItems:"center",justifyContent:"center",cursor:"pointer",color:"$title",background:"rgba(0, 0, 0, 0.05)",backdropFilter:"blur(4px)",borderRadius:6});let J=(0,a.zo)("section",{paddingBottom:240,paddingTop:120,margin:"0 auto",zIndex:1,position:"relative",paddingLeft:32,paddingRight:32,maxWidth:1440});function Q(){return(0,i.jsxs)(J,{style:{position:"relative",zIndex:100},children:[(0,i.jsx)(G,{}),(0,i.jsx)(Y,{}),(0,i.jsx)(c,{})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4754)}),_N_E=e.O()}]);