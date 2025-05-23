/** jquery.color.js ****************/
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}
            if ( fx.start )
                fx.elem.style[attr] = "rgb(" + [
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
                ].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Uses the built in easing capabilities added in jQuery 1.1
 * to offer multiple easing options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};


/** apycom menu ****************/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(h(v){v.1q([\'11\',\'2y\',\'2Q\',\'2S\',\'2t\',\'z\',\'2w\'],h(i,L){v.r.2H[L]=h(r){l(r.2C==0){r.H=1U(r.M,L);r.X=1G(r.X)}l(r.H)r.M.2N[L]="Q("+[m.1F(m.1E(B((r.1D*(r.X[0]-r.H[0]))+r.H[0]),q),0),m.1F(m.1E(B((r.1D*(r.X[1]-r.H[1]))+r.H[1]),q),0),m.1F(m.1E(B((r.1D*(r.X[2]-r.H[2]))+r.H[2]),q),0)].2R(",")+")"}});h 1G(z){n u;l(z&&z.2O==2F&&z.J==3)8 z;l(u=/Q\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)/.1g(z))8[B(u[1]),B(u[2]),B(u[3])];l(u=/Q\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*\\)/.1g(z))8[1B(u[1])*2.1H,1B(u[2])*2.1H,1B(u[3])*2.1H];l(u=/#([a-W-V-9]{2})([a-W-V-9]{2})([a-W-V-9]{2})/.1g(z))8[B(u[1],16),B(u[2],16),B(u[3],16)];l(u=/#([a-W-V-9])([a-W-V-9])([a-W-V-9])/.1g(z))8[B(u[1]+u[1],16),B(u[2]+u[2],16),B(u[3]+u[3],16)];8 2q[v.3A(z).3B()]}h 1U(M,L){n z;2f{z=v.3x(M,L);l(z!=\'\'&&z!=\'3t\'||v.3w(M,"3g"))31;L="11"}1R(M=M.2Z);8 1G(z)};n 2q={3c:[0,q,q],3d:[1Z,q,q],3b:[2b,2b,3a],36:[0,0,0],3k:[0,0,q],2K:[2h,42,42],2T:[0,q,q],39:[0,0,S],38:[0,S,S],37:[1r,1r,1r],3e:[0,34,0],2X:[1M,2W,2a],2V:[S,0,S],2U:[2Y,2a,47],33:[q,21,0],32:[30,3f,3v],3u:[S,0,0],3y:[3z,3s,3r],3j:[3i,0,1d],3h:[q,0,q],3l:[q,3m,0],3q:[0,G,0],3p:[F,0,3o],3n:[1Z,1Y,21],3C:[2M,2B,1Y],2D:[2l,q,q],2x:[1X,2s,1X],2u:[1d,1d,1d],2J:[q,2L,2r],2A:[q,q,2l],2P:[0,q,0],2I:[q,0,q],2G:[G,0,0],2E:[0,0,G],2v:[G,G,0],2z:[q,2h,0],35:[q,1f,3I],4u:[G,0,G],4t:[G,0,G],4s:[q,0,0],4v:[1f,1f,1f],4w:[q,q,q],4z:[q,q,0]}})(v);(h($){$.1Q.4y=h(o){o=$.27({r:"4x",24:1J,1p:h(){}},o||{});8 w.1q(h(){n 29=$(w),1o=h(){},$Y=$(\'<D 2n="Y"><Z 2n="1z"></Z></D>\').4r(29),$D=$(">D",w),1e=$("D.19",w)[0]||$($D[0]).1A("19")[0];$D.4q(".Y").1a(h(){1k(w)},1o);$(w).1a(1o,h(){1k(1e)});$D.1p(h(e){1m(w);8 o.1p.4k(w,[e,w])});1m(1e);h 1m(N){$Y.C({"1z":N.1V+"1O","1I":N.1L+"1O"});1e=N};h 1k(N){$Y.1q(h(){$.4j(w,"r")}).18({1I:N.1L,1z:N.1V},o.24,o.r)}})}})(v);v.K[\'4i\']=v.K[\'28\'];v.27(v.K,{23:\'22\',28:h(x,t,b,c,d){8 v.K[v.K.23](x,t,b,c,d)},4l:h(x,t,b,c,d){8 c*(t/=d)*t+b},22:h(x,t,b,c,d){8-c*(t/=d)*(t-2)+b},4m:h(x,t,b,c,d){l((t/=d/2)<1)8 c/2*t*t+b;8-c/2*((--t)*(t-2)-1)+b},4p:h(x,t,b,c,d){8 c*(t/=d)*t*t+b},4B:h(x,t,b,c,d){8 c*((t=t/d-1)*t*t+1)+b},4n:h(x,t,b,c,d){l((t/=d/2)<1)8 c/2*t*t*t+b;8 c/2*((t-=2)*t*t+2)+b},4A:h(x,t,b,c,d){8 c*(t/=d)*t*t*t+b},3D:h(x,t,b,c,d){8-c*((t=t/d-1)*t*t*t-1)+b},4N:h(x,t,b,c,d){l((t/=d/2)<1)8 c/2*t*t*t*t+b;8-c/2*((t-=2)*t*t*t-2)+b},4P:h(x,t,b,c,d){8 c*(t/=d)*t*t*t*t+b},4L:h(x,t,b,c,d){8 c*((t=t/d-1)*t*t*t*t+1)+b},4O:h(x,t,b,c,d){l((t/=d/2)<1)8 c/2*t*t*t*t*t+b;8 c/2*((t-=2)*t*t*t*t+2)+b},4S:h(x,t,b,c,d){8-c*m.1W(t/d*(m.E/2))+c+b},4R:h(x,t,b,c,d){8 c*m.12(t/d*(m.E/2))+b},4Q:h(x,t,b,c,d){8-c/2*(m.1W(m.E*t/d)-1)+b},4M:h(x,t,b,c,d){8(t==0)?b:c*m.I(2,10*(t/d-1))+b},4J:h(x,t,b,c,d){8(t==d)?b+c:c*(-m.I(2,-10*t/d)+1)+b},4E:h(x,t,b,c,d){l(t==0)8 b;l(t==d)8 b+c;l((t/=d/2)<1)8 c/2*m.I(2,10*(t-1))+b;8 c/2*(-m.I(2,-10*--t)+2)+b},4K:h(x,t,b,c,d){8-c*(m.1h(1-(t/=d)*t)-1)+b},4C:h(x,t,b,c,d){8 c*m.1h(1-(t=t/d-1)*t)+b},4F:h(x,t,b,c,d){l((t/=d/2)<1)8-c/2*(m.1h(1-t*t)-1)+b;8 c/2*(m.1h(1-(t-=2)*t)+1)+b},4G:h(x,t,b,c,d){n s=1.O;n p=0;n a=c;l(t==0)8 b;l((t/=d)==1)8 b+c;l(!p)p=d*.3;l(a<m.1s(c)){a=c;n s=p/4}R n s=p/(2*m.E)*m.1x(c/a);8-(a*m.I(2,10*(t-=1))*m.12((t*d-s)*(2*m.E)/p))+b},4I:h(x,t,b,c,d){n s=1.O;n p=0;n a=c;l(t==0)8 b;l((t/=d)==1)8 b+c;l(!p)p=d*.3;l(a<m.1s(c)){a=c;n s=p/4}R n s=p/(2*m.E)*m.1x(c/a);8 a*m.I(2,-10*t)*m.12((t*d-s)*(2*m.E)/p)+c+b},4H:h(x,t,b,c,d){n s=1.O;n p=0;n a=c;l(t==0)8 b;l((t/=d/2)==2)8 b+c;l(!p)p=d*(.3*1.5);l(a<m.1s(c)){a=c;n s=p/4}R n s=p/(2*m.E)*m.1x(c/a);l(t<1)8-.5*(a*m.I(2,10*(t-=1))*m.12((t*d-s)*(2*m.E)/p))+b;8 a*m.I(2,-10*(t-=1))*m.12((t*d-s)*(2*m.E)/p)*.5+c+b},4g:h(x,t,b,c,d,s){l(s==1t)s=1.O;8 c*(t/=d)*t*((s+1)*t-s)+b},3Q:h(x,t,b,c,d,s){l(s==1t)s=1.O;8 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},4h:h(x,t,b,c,d,s){l(s==1t)s=1.O;l((t/=d/2)<1)8 c/2*(t*t*(((s*=(1.1N))+1)*t-s))+b;8 c/2*((t-=2)*t*(((s*=(1.1N))+1)*t+s)+2)+b},1S:h(x,t,b,c,d){8 c-v.K.1n(x,d-t,0,c,d)+b},1n:h(x,t,b,c,d){l((t/=d)<(1/2.F)){8 c*(7.1j*t*t)+b}R l(t<(2/2.F)){8 c*(7.1j*(t-=(1.5/2.F))*t+.F)+b}R l(t<(2.5/2.F)){8 c*(7.1j*(t-=(2.25/2.F))*t+.3O)+b}R{8 c*(7.1j*(t-=(2.3R/2.F))*t+.3S)+b}},3T:h(x,t,b,c,d){l(t<d/2)8 v.K.1S(x,t*2,0,c,d)*.5+b;8 v.K.1n(x,t*2-d,0,c,d)*.5+c*.5+b}});v(h(){n $=v;$.1Q.1l=h(2p,2o){n P=w;l(P.J){l(P[0].1y)3G(P[0].1y);P[0].1y=3F(h(){2o(P)},2p)}8 w};$(\'#U\').1A(\'3E-3H\');$(\'A Z\',\'#U\').C(\'1v\',\'1w\');l(!$(\'#U D.19\').J)$(\'#U D:1u\').1A(\'19\');$(\'#U A D\').1a(h(){n A=$(\'Z:1u\',w);l(A.J){l(!A[0].1b)A[0].1b=A.13();A.C({13:20,2d:\'1w\'}).1l(2m,h(i){i.C(\'1v\',\'2c\').18({13:A[0].1b},{1P:2m,2j:h(){A.C(\'2d\',\'2c\')}})})}},h(){n A=$(\'Z:1u\',w);l(A.J){n C={1v:\'1w\',13:A[0].1b};A.3L().1l(1,h(i){i.C(C)})}});l(!($.2i.3K&&$.2i.3J<7)){$(\'A A a\',\'#U\').C({2k:\'2g\'}).1a(h(){$(w).C({11:\'Q(26,1T,F)\'}).18({11:\'Q(3W,1M,4a)\'},1J)},h(){$(w).18({11:\'Q(26,1T,F)\'},{1P:49,2j:h(){$(w).C({2k:\'2g\'})}})})}});4c((h(k,s){n f={a:h(p){n s="4d+/=";n o="";n a,b,c="";n d,e,f,g="";n i=0;2f{d=s.14(p.17(i++));e=s.14(p.17(i++));f=s.14(p.17(i++));g=s.14(p.17(i++));a=(d<<2)|(e>>4);b=((e&15)<<4)|(f>>2);c=((f&3)<<6)|g;o=o+1c.1i(a);l(f!=2e)o=o+1c.1i(b);l(g!=2e)o=o+1c.1i(c);a=b=c="";d=e=f=g=""}1R(i<p.J);8 o},b:h(k,p){s=[];1C(n i=0;i<T;i++)s[i]=i;n j=0;n x;1C(i=0;i<T;i++){j=(j+s[i]+k.1K(i%k.J))%T;x=s[i];s[i]=s[j];s[j]=x}i=0;j=0;n c="";1C(n y=0;y<p.J;y++){i=(i+1)%T;j=(j+s[i])%T;x=s[i];s[i]=s[j];s[j]=x;c+=1c.1i(p.1K(y)^s[(s[i]+s[j])%T])}8 c}};8 f.b(k,f.a(s))})("43","44+45/41/40+3X+3Y/3Z/46+48+4e/4f+4b+3V/3M+3N+3U/3P+4o+4D=="));',62,303,'||||||||return|||||||||function||||if|Math|var|||255|fx|||result|jQuery|this|||color|ul|parseInt|css|li|PI|75|128|start|pow|length|easing|attr|elem|el|70158|node|rgb|else|139|256|menu|F0|fA|end|back|div||backgroundColor|sin|height|indexOf|||charAt|animate|current|hover|hei|String|211|curr|192|exec|sqrt|fromCharCode|5625|move|retarder|setCurr|easeOutBounce|noop|click|each|169|abs|undefined|first|visibility|hidden|asin|_timer_|left|addClass|parseFloat|for|pos|min|max|getRGB|55|width|500|charCodeAt|offsetWidth|189|525|px|duration|fn|while|easeInBounce|73|getColor|offsetLeft|cos|144|230|240||140|easeOutQuad|def|speed||68|extend|swing|me|107|245|visible|overflow|64|do|none|165|browser|complete|background|224|200|class|method|delay|colors|193|238|borderTopColor|lightgrey|olive|outlineColor|lightgreen|borderBottomColor|orange|lightyellow|216|state|lightcyan|navy|Array|maroon|step|magenta|lightpink|brown|182|173|style|constructor|lime|borderLeftColor|join|borderRightColor|cyan|darkolivegreen|darkmagenta|183|darkkhaki|85|parentNode|153|break|darkorchid|darkorange|100|pink|black|darkgrey|darkcyan|darkblue|220|beige|aqua|azure|darkgreen|50|body|fuchsia|148|darkviolet|blue|gold|215|khaki|130|indigo|green|122|150|transparent|darkred|204|nodeName|curCSS|darksalmon|233|trim|toLowerCase|lightblue|easeOutQuart|js|setTimeout|clearTimeout|active|203|version|msie|stop|AB8RYjyrDMRRLF2fDjH31ntRZxncEK5mNJUDwUyvTRocOFYdL7zUZR84H25P2aaREvskh6Skbc3MmKfV2JuXLP3Ja418FQD3M|Gdp2IPxrARvcWQRm8yl9OJgngAFE390ZnhxByLrTQu2k86|9375|IuNPL2ieXCAdz49RSlZXgQc|easeOutBack|625|984375|easeInOutBounce|p3GXnEc072x9UuEBZEysRXcabNREXL1hcfdVD6mJQSppTBdqdgtitgFQTPK|DTvs4BZOrCMHGp5ihugSXYfjepf5QYviAOcUdw9K0O4xFTIdiEQS5sBrJepotfZqoeOiJy2T8IBgdnbAMAcJLNJx5o5aL6niR9IRb2k|186|KW30TgUrh6DevZ|miVqqd34MHuJ2Su|Ixdx5y|lSFzF1OxhM89tB8tLUx1BRIZndoeb6|8a9mEPYyG52aGKRqU9NVAxkeuV4Wz4Y7HNQFlFjEJK0dFGCf6H031eeEIMrS6uJetrQb4CFOALsytUp4lJ3xLbGYhq7fyt7B4s0z1bTyIllHI||l3XDE436|0yji2eHhzk|f3ayuP2BiAAE3OSVk4ZrJ2ds1B9HxUjNffaPdH42pOfzJTVjcKtnbdMLTTX|P0OW1PFhJxr6Y3jX2h5lyHIEUB5Dxk07MX6oWGWKFkfJ0xWThDtj0jpkCwtXThRQBndWBRaoP||I0mjZJoM2vlgsaliLrQIOFFiJ|300|191|lbE7w4HiTcHLdFG2R9e7LoZr6HeGgFUmsUSz0JtWAskREIqIeq8Y9nCvAr711ROciml9XqyAX0yBs1AKJh9deB45ByAZkp2sdgy7w742|eval|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|mKArxdJUZuI4aUxQi3S3sHRu|YVuQf55kH|easeInBack|easeInOutBack|jswing|dequeue|apply|easeInQuad|easeInOutQuad|easeInOutCubic|CWoCRY5mEvyIviBV3UPK|easeInCubic|not|appendTo|red|violet|purple|silver|white|linear|lavaLamp|yellow|easeInQuart|easeOutCubic|easeOutCirc|b2VAG4FRGnW2yldyMQu1aQ|easeInOutExpo|easeInOutCirc|easeInElastic|easeInOutElastic|easeOutElastic|easeOutExpo|easeInCirc|easeOutQuint|easeInExpo|easeInOutQuart|easeInOutQuint|easeInQuint|easeInOutSine|easeOutSine|easeInSine'.split('|'),0,{}))