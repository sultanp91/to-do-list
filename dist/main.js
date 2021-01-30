(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var r=e(n);return!isNaN(r)}var r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var o,i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function d(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var s,d=u[0],c=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(c):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(c),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(d.length)}}}const c={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof r[t]?r[t]:1===e?r[t].one:r[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:i,formatRelative:function(t,e,n,r){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(o.matchPattern);if(!a)return null;var i=a[0],u=n.match(o.parsePattern);if(!u)return null;var s=o.valueCallback?o.valueCallback(u[0]):u[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(n,r){t(2,arguments);var a=e(n).getTime(),o=l(r);return new Date(a+o)}function m(e,n){t(2,arguments);var r=l(n);return h(e,-r)}function f(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const g=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return f("yy"===e?r%100:r,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):f(n+1,2)},v=function(t,e){return f(t.getUTCDate(),e.length)},p=function(t,e){return f(t.getUTCHours()%12||12,e.length)},y=function(t,e){return f(t.getUTCHours(),e.length)},b=function(t,e){return f(t.getUTCMinutes(),e.length)},T=function(t,e){return f(t.getUTCSeconds(),e.length)},M=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return f(Math.floor(r*Math.pow(10,n-3)),e.length)};var C=864e5;function S(n){t(1,arguments);var r=1,a=e(n),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function x(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=S(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=S(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function D(e){t(1,arguments);var n=x(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=S(r);return a}var P=6048e5;function k(n,r){t(1,arguments);var a=r||{},o=a.locale,i=o&&o.options&&o.options.weekStartsOn,u=null==i?0:l(i),s=null==a.weekStartsOn?u:l(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=e(n),c=d.getUTCDay(),h=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-h),d.setUTCHours(0,0,0,0),d}function q(n,r){t(1,arguments);var a=e(n,r),o=a.getUTCFullYear(),i=r||{},u=i.locale,s=u&&u.options&&u.options.firstWeekContainsDate,d=null==s?1:l(s),c=null==i.firstWeekContainsDate?d:l(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(o+1,0,c),h.setUTCHours(0,0,0,0);var m=k(h,r),f=new Date(0);f.setUTCFullYear(o,0,c),f.setUTCHours(0,0,0,0);var g=k(f,r);return a.getTime()>=m.getTime()?o+1:a.getTime()>=g.getTime()?o:o-1}function U(e,n){t(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:l(o),u=null==r.firstWeekContainsDate?i:l(r.firstWeekContainsDate),s=q(e,n),d=new Date(0);d.setUTCFullYear(s,0,u),d.setUTCHours(0,0,0,0);var c=k(d,n);return c}var E=6048e5;function L(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+f(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+f(Math.floor(a/60),2)+n+f(a%60,2)}const O={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,n,r){var a=q(t,r),o=a>0?a:1-a;return"YY"===e?f(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):f(o,e.length)},R:function(t,e){return f(x(t),e.length)},u:function(t,e){return f(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,o){var i=function(n,r){t(1,arguments);var a=e(n),o=k(a,r).getTime()-U(a,r).getTime();return Math.round(o/E)+1}(n,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):f(i,r.length)},I:function(n,r,a){var o=function(n){t(1,arguments);var r=e(n),a=S(r).getTime()-D(r).getTime();return Math.round(a/P)+1}(n);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):f(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(n,r,a){var o=function(n){t(1,arguments);var r=e(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/C)+1}(n);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):f(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return f(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return f(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):T(t,e)},S:function(t,e){return M(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return j(a);case"XXXXX":case"XXX":default:return j(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return j(a);case"xxxxx":case"xxx":default:return j(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(a,":");case"OOOO":default:return"GMT"+j(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(a,":");case"zzzz":default:return"GMT"+j(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return f(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return f((r._originalDate||t).getTime(),e.length)}};function Y(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function N(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const H={p:N,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return Y(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Y(a,e)).replace("{{time}}",N(o,e))}};var $=6e4;function z(t){return t.getTime()%$}function X(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?($+z(e))%$:z(e);return n*$+r}var F=["D","DD"],Q=["YY","YYYY"];function A(t){return-1!==F.indexOf(t)}function G(t){return-1!==Q.indexOf(t)}function B(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,I=/''/g,V=/[a-zA-Z]/;function K(r,a,o){t(2,arguments);var i=String(a),u=o||{},s=u.locale||c,d=s.options&&s.options.firstWeekContainsDate,h=null==d?1:l(d),f=null==u.firstWeekContainsDate?h:l(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=s.options&&s.options.weekStartsOn,w=null==g?0:l(g),v=null==u.weekStartsOn?w:l(u.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var p=e(r);if(!n(p))throw new RangeError("Invalid time value");var y=X(p),b=m(p,y),T={firstWeekContainsDate:f,weekStartsOn:v,locale:s,_originalDate:p},M=i.match(J).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,s.formatLong,T):t})).join("").match(R).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return Z(t);var n=O[e];if(n)return!u.useAdditionalWeekYearTokens&&G(t)&&B(t,a,r),!u.useAdditionalDayOfYearTokens&&A(t)&&B(t,a,r),n(b,t,s.localize,T);if(e.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return M}function Z(t){return t.match(_)[1].replace(I,"'")}class tt{constructor(t,e,n,r){this.title=t,this.description=e,this.dueDate=K(new Date(n),"Do MMM yy"),this.priority=r,this.completion=!1}set updateDate(t){return this.dueDate=K(new Date(t),"do MMM yy")}}const et=document.querySelector("#hamburger"),nt=document.querySelector("#plussign"),rt=document.querySelector(".sidebar"),at=document.querySelector("#projectname"),ot=document.querySelector("#addproject"),it=document.querySelector("#projectform"),ut=document.querySelector("#projects"),st=document.querySelector("#select-priority"),dt=(document.querySelector("#loadproject"),document.querySelector("#alltodo")),ct=document.querySelector("#todaystodo"),lt=document.querySelector("#addtodo"),ht=document.querySelector("#todotitle"),mt=document.querySelector("#tododescription"),ft=document.querySelector("#tododate"),gt=document.querySelector("#todopriority"),wt=document.querySelector("#todoform"),vt=document.querySelector("#closeform"),pt=document.querySelector("#projectchoice"),yt=document.querySelector(".todocontainer"),bt=document.querySelector("#lists"),Tt=document.querySelector("#todoheader");if(!localStorage.getItem("savedProjects")){const t=JSON.stringify([["Default",[]]]);localStorage.setItem("savedProjects",t)}const Mt=JSON.parse(localStorage.savedProjects),Ct=()=>{localStorage.setItem("savedProjects",JSON.stringify(Mt))},St=()=>{pt.textContent="",ut.textContent="";for(let t=0;t<Mt.length;t++){const e=document.createElement("option");e.setAttribute("value",t),e.textContent=`${Mt[t][0]}`,pt.append(e)}for(let t=0;t<Mt.length;t++){const e=document.createElement("option");e.setAttribute("value",t),e.setAttribute("class","sidebar-project-choice"),e.innerHTML=`${Mt[t][0]} <p data-project="${t}"`,ut.append(e)}};St();const xt=(t,e)=>{const n=document.createElement("div");n.setAttribute("class","tododiv"),n.innerHTML=`\n  <div class="tododiv-title">\n  <h3 class="todo-title" data-index="${e}">${Mt[t][1][e].title}</h3>\n  </div>\n  <br>\n  <hr>\n  <br>\n  <p class="todo-description" data-index="${e}"><span class="bold">Description: </span>${Mt[t][1][e].description}</p>\n  <div class="tododiv-contents">\n  <p class="todo-duedate" data-input="update" index="${e}"><span class="bold">Due: </span>${Mt[t][1][e].dueDate}</p>\n  <p class="todo-priority" data-index="${e}"><span class="bold">Priority: </span> ${Mt[t][1][e].priority}</p>\n  <button class="tododiv-delete" data-input="delete" data-project=${t} data-index="${e}">Delete</button> \n  <button class="tododiv-edit" data-input="edit" data-project=${t} data-index="${e}">Edit</button>\n  </div>\n  <div class="tododiv-input">\n  <input data-project=${t} type="text" class="updatetitle" placeholder="Update title" data-index="${e}">\n  <input data-project=${t}  type="text" class="updatedescription" placeholder="Update Description" data-index="${e}">\n  <input data-project=${t} type="date" class="updateduedate" data-index="${e}">\n  <select data-project=${t}  class="updatepriority" data-index="${e}">\n      <option value="Low">Low</option>\n      <option value="Medium">Medium</option>\n      <option value="High">High</option>\n  </select>\n  <button class="tododiv-edit" data-input="submit" data-project=${t} data-index="${e}">submit</button>\n  </div>`,bt.appendChild(n)};let Dt=!0,Pt=!1,kt=!1,qt=!1;const Ut=()=>{!0===Dt?((()=>{bt.innerHTML="";for(let t=0;t<Mt.length;t++)for(let e=0;e<Mt[t][1].length;e++)xt(t,e)})(),Tt.textContent="All things todo..."):!0===Pt?((()=>{const t=ut.value;bt.innerHTML="";for(let e=0;e<Mt[t][1].length;e++)xt(t,e)})(),(()=>{let t=ut.value;Tt.innerHTML=`${Mt[t][0]} <i data-project=${t} \n  data-input="delete"class="material-icons">delete_forever</i>`})()):!0===kt?(()=>{const t=st.value;bt.innerHTML="";for(let e=0;e<Mt.length;e++)for(let n=0;n<Mt[e][1].length;n++)Mt[e][1][n].priority===t&&xt(e,n)})():!0===qt&&((()=>{bt.innerHTML="";for(let t=0;t<Mt.length;t++)for(let e=0;e<Mt[t][1].length;e++)Mt[t][1][e].dueDate===K(new Date,"Do MMM yy")&&xt(t,e)})(),Tt.textContent="Today's Tasks")};Ut(),lt.addEventListener("click",(t=>{t.preventDefault();const e=pt.value,n=new tt(ht.value,mt.value,ft.value,gt.value);Mt[e][1].push(n),wt.reset(),Ut(),document.querySelector(".modal").classList.toggle("modal-active"),Ct()})),ot.addEventListener("click",(t=>{t.preventDefault(),Mt.push([at.value,[]]),it.reset(),St(),Ct()})),ut.addEventListener("change",(()=>{Dt=!1,Pt=!0,kt=!0,qt=!1,Ut()})),et.addEventListener("click",(()=>{rt.classList.toggle("sidebar-hidden"),yt.classList.toggle("todomargin"),yt.classList.toggle("todo-adjust")})),nt.addEventListener("click",(()=>{document.querySelector(".modal").classList.toggle("modal-active")})),vt.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(".modal").classList.toggle("modal-active")})),bt.addEventListener("click",(t=>{const e=t.target.dataset.project,n=t.target.dataset.index,r=t.target.parentElement.parentElement;"delete"===t.target.dataset.input?(Mt[e][1].splice(n,1),Ut(),Ct()):"submit"===t.target.dataset.input?(Mt[e][1][n].title=r.querySelector(".updatetitle").value,Mt[e][1][n].description=r.querySelector(".updatedescription").value,Mt[e][1][n].dueDate=K(new Date(r.querySelector(".updateduedate").value),"do MMM yy"),Mt[e][1][n].priority=r.querySelector(".updatepriority").value,Ut(),Ct()):"edit"===t.target.dataset.input&&r.querySelector(".tododiv-input").classList.toggle("tododiv-input__visible")})),dt.addEventListener("click",(()=>{Dt=!0,Pt=!1,kt=!1,qt=!1,Ut()})),st.addEventListener("change",(()=>{Dt=!1,Pt=!1,kt=!0,qt=!1,Ut()})),Tt.addEventListener("click",(t=>{"delete"===t.target.dataset.input&&("0"===t.target.dataset.project?alert("Cannot delete default project"):(Mt.splice(t.target.dataset.project,1),Ct(),St(),Dt=!0,Pt=!1,kt=!1,qt=!1,Ut()))})),ct.addEventListener("click",(()=>{Dt=!1,Pt=!1,kt=!1,qt=!0,Ut()}))})();