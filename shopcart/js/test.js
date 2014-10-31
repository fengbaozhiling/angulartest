! function(a) {
	var b = "undefined" != typeof MTLanguage,
		c = {
			cur: b ? MTLanguage.current || "cn" : "cn",
			lan: b ? MTLanguage.language || [] : []
		}, d = ["#MT_nav div,#MT_nav ul,#MT_nav li,#MT_nav{padding: 0;margin: 0;}", '#MT_nav{height: 0;line-height: 0;width:1000px; margin:0 auto; font-size:0; position: relative;z-index: 99;font-family: "Microsoft Yahei","Hiragino Sans GB",Arial,Helvetica;}', "#MT_nav ul{list-style: none;width: 1000px;height:57px;top: 22px; position: absolute;z-index: 99;}", "#MT_nav .MT-bg,#MT_nav .MT-item,#MT_nav .MT-arrow,#MT_nav ul .MT-item a .MT-more,#MT_nav .MT-logo{background: url(" + a.bg_url + ") no-repeat;}", "#MT_nav .MT-logo{background-position:0 -70px;position:absolute;width:134px;height:24px;top:12px;left:50%;margin-left:-67px;}", "#MT_nav ul .MT-item{width: 200px;height: 57px;float: left;background-position:-5px 0;position: relative;z-index: 99;}", "#MT_nav ul .MT-item:hover div{display:block;}", "#MT_nav ul .MT-first{background-position: 0 0;}", "#MT_nav ul .MT-last{background-position: -43px 0;width:162px;z-index:100}", "#MT_nav ul .MT-bg{background-position: -245px 0;}", "#MT_nav ul .MT-item a{color: #646464;display: block;font-size: 14px;height: 47px;line-height: 47px;_line-height:50px;text-align: center; text-decoration: none;}", "#MT_nav ul .MT-item a:hover{color: #ff5d71;}", "#MT_nav ul .MT-current .MT-bg{font-weight:bold;font-size:16px;color:#ff5069;}", "#MT_nav ul .MT-item a .MT-more{-webkit-text-size-adjust: none;font-size: 0;height: 0;width: 0;padding:2px 4px; background-position:-24px -65px;position: relative;top: -4px;left: 6px;z-index: 99;_margin-top:22px;_top:0px; *zoom:1;}", "#MT_nav ul .MT-item div{z-index:100; display: none; background-color: #fff;border: 1px solid #ccc;border-radius: 5px; position: absolute;top: 42px;left:50%;margin-left:-49%; -webkit-box-shadow: 0 0 4px rgba(0,0,0,.02), 0 2px 5px rgba(0,0,0,.1);-moz-box-shadow: 0 0 4px rgba(0,0,0,.02), 0 2px 5px rgba(0,0,0,.1);box-shadow: 0 0 4px rgba(0,0,0,.02), 0 2px 5px rgba(0,0,0,.1);width:196px;}", "#MT_nav .MT-arrow{display: block;font-size:0; height: 7px;position: absolute;top: -7px;width: 14px;margin-left: -7px;left: 50%; background-position: 0 -63px; }", "#MT_nav ul .MT-list div{display: block;}", "#MT_nav ul .MT-item .MT-list-last{border:none;}", "#MT_nav ul .MT-item div a{width: 86%;margin:0 auto; border-bottom: 1px solid #ccc;height: 40px;line-height:40px;font-size:14px;*zoom:1;}", '#MT_nav ul .language{height:57px;line-height:47px;font-size:15px;z-index:99;width38px;font-family:"Arial";color:#8f8f8f;background-position:0 -100px;width:38px;}'].join(""),
		e = document.createElement("style");
	e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = d : e.appendChild(document.createTextNode(d)), document.getElementsByTagName("head")[0].appendChild(e);
	var f = function(a) {
		return new g(document.createElement(a))
	}, g = function(a) {
			this.__tag = a
		};
	g.prototype = {
		attr: function(a) {
			var b = this.__tag;
			for (var c in a) a.hasOwnProperty(c) && ("className" === c ? b.className = a[c] : b.setAttribute(c, a[c]));
			return this
		},
		append: function(a) {
			return this.get().appendChild(a.get()), this
		},
		get: function() {
			return this.__tag
		},
		css: function(a, b) {
			var c = this.get();
			return c.style[a] = b, this
		},
		text: function(a) {
			return this.get().appendChild(document.createTextNode(a)), this
		},
		html: function(a) {
			return this.get().innerHTML = a, this
		},
		item: function(a) {
			for (var b, d, e, g, h = f("ul"), i = a.length, j = 0; i > j; j++) {
				if (b = a[j], d = f("li").attr({
					className: "MT-item" + (0 === j ? " MT-first" : j + 1 === i ? " MT-last" : "")
				}), c.lan.length || d.css("width", "200px"), e = f("a").attr({
					href: b.link,
					hidefocus: !0
				}), "text" in b ? e.text(b.text) : e.html(b.html), b.arrow && e.append(f("i").attr({
					className: "MT-more"
				})), 0 != j && e.attr({
					className: "MT-bg"
				}), d.append(e), b.list) {
					g = f("div"), g.append(f("span").attr({
						className: "MT-arrow"
					}));
					for (var k = 0, l = b.list.length; l > k; k++) e = f("a").attr({
						href: b.list[k].href,
						hidefocus: !0
					}), b.list[k].html ? e.html(b.list[k].html) : e.text(b.list[k].text), k + 1 === l && e.attr({
						className: "MT-list-last"
					}), g.append(e);
					d.append(g)
				}
				h.append(d)
			}
			if (0 != c.lan.length) {
				d = f("li").attr({
					className: "language MT-item MT-bg"
				}), i = c.lan.length, e = f("a").attr({
					hidefocus: !0
				}), g = f("div").css("width", "38px").append(f("span").attr({
					className: "MT-arrow"
				}));
				for (var j = 0; i > j; j++) {
					b = c.lan[j];
					var m = f("a").attr({
						href: b.link,
						hidefocus: !0
					}).text(b.text);
					b.ver == c.cur && e.attr({
						href: b.link
					}).text(b.text), j + 1 === i && m.attr({
						className: "MT-list-last"
					}), g.append(m)
				}
				d.append(e).append(g), h.append(d)
			}
			return this.append(h), this
		}
	};
	var h = f("div").attr({
		id: "MT_nav"
	}).item(a.item[c.cur]),
		i = document.getElementById(a.wrap);
	i ? i.appendChild(h.get()) : document.body.insertBefore(h.get(), document.body.firstChild);
	var j = h.get().getElementsByTagName("ul")[0],
		k = j.getElementsByTagName("li");
	if (window.attachEvent)
		for (var l = 0, m = k.length; m > l; l++) k[l].attachEvent("onmouseenter", function(a) {
			return function() {
				k[a].className += " MT-list"
			}
		}(l)), k[l].attachEvent("onmouseleave", function(a) {
			return function() {
				k[a].className = k[a].className.replace(" MT-list", "")
			}
		}(l));
	var n = location.hostname.toLowerCase(),
		o = location.pathname.toLowerCase(),
		p = function(a) {
			k[a].className += " MT-current"
		};
	switch (n) {
		case "www.meitu.com":
		case "www.meitushop.com":
			0 == o.indexOf("/meitu1c") || 0 == o.indexOf("/meitu1s") || 0 == o.indexOf("/shouji") ? p(1) : 0 == o.indexOf("/accessories") && p(2);
			break;
		case "xiuxiu.meitu.com":
		case "xiuxiu.web.meitu.com":
			p(3);
			break;
		default:
			p(4)
	}
}({
	wrap: "MT_navwrap",
	bg_url: "http://xiuxiu.meitu.com/images/MT_nav_logo_20140723.png",
	item: {
		cn: [{
			link: "http://www.meitu.com/",
			html: '<span class="MT-logo"></span>'
		}, {
			link: "http://www.meitu.com/shouji/",
			path: "meitukiss",
			text: "美图手机",
			list: [{
				href: "http://www.meitu.com/meitu2/",
				text: "美图手机2"
			}, {
				href: "http://www.meitu.com/meitu1s/",
				text: "美图手机1S（2014款）"
			}, {
				href: "http://www.meitu.com/meitu1c/",
				text: "美图手机1C（2014款）"
			}]
		}, {
			link: "http://www.meitu.com/accessories/",
			path: "accessories",
			text: "手机配件"
		}, {
			link: "http://xiuxiu.meitu.com/",
			text: "美图秀秀",
			arrow: !0,
			list: [{
				href: "http://xiuxiu.meitu.com/",
				text: "美图秀秀电脑版"
			}, {
				href: "http://xiuxiu.meitu.com/iphone/",
				text: "美图秀秀iPhone版"
			}, {
				href: "http://xiuxiu.meitu.com/android/",
				text: "美图秀秀Android版"
			}, {
				href: "http://xiuxiu.meitu.com/ipad/",
				text: "美图秀秀iPad版"
			}, {
				href: "http://xiuxiu.web.meitu.com/",
				text: "美图秀秀网页版"
			}, {
				href: "http://xiuxiu.meitu.com/winphone/",
				html: '美图秀秀<span style="font-size:11px">Windows Phone</span>版'
			}]
		}, {
			link: "http://all.meitu.com/",
			text: "更多产品",
			arrow: !0,
			list: [{
				href: "http://kankan.meitu.com/",
				text: "美图看看"
			}, {
				href: "http://meiyan.meitu.com/",
				text: "美颜相机"
			}, {
				href: "http://www.meipai.com/",
				text: "美拍"
			}, {
				href: "http://bqgc.meitu.com/",
				text: "表情工厂"
			}, {
				href: "http://www.posterlabs.com/cn/",
				text: "海报工厂"
			}, {
				href: "http://meimo.meitu.com/",
				text: "美陌"
			}, {
				href: "http://all.meitu.com/",
				text: "更多···"
			}]
		}],
		en: [{
			link: "http://www.meitu.com/",
			html: '<span class="MT-logo" style=" margin-left:-40px;width:79px;"></span>'
		}, {
			link: "http://www.meitu.com/shouji/",
			path: "meitukiss",
			text: "Meitu Phone",
			list: [{
				href: "http://www.meitu.com/meitu2/",
				text: "Meitu Phone2"
			}, {
				href: "http://www.meitu.com/meitu1s/",
				text: "Meitu Phone1S(2014)"
			}, {
				href: "http://www.meitu.com/meitu1c/",
				text: "Meitu Phone1C(2014)"
			}]
		}, {
			link: "http://www.meitu.com/accessories/",
			path: "accessories",
			text: "Accessories"
		}, {
			link: "http://xiuxiu.meitu.com/",
			text: "MeituPic",
			arrow: !0,
			list: [{
				href: "http://xiuxiu.meitu.com/",
				text: " MeituPic for PC"
			}, {
				href: "http://xiuxiu.meitu.com/iphone/",
				text: "MeituPic for iPhone"
			}, {
				href: "http://xiuxiu.meitu.com/android/",
				text: "MeituPic for Android"
			}, {
				href: "http://xiuxiu.meitu.com/ipad/",
				text: "MeituPic for iPad"
			}, {
				href: "http://xiuxiu.web.meitu.com/",
				text: " MeituPic for Web"
			}, {
				href: "http://xiuxiu.meitu.com/winphone/",
				html: "MeituPic for WPhone"
			}]
		}, {
			link: "http://all.meitu.com/",
			text: "More",
			arrow: !0,
			list: [{
				href: "http://kankan.meitu.com/",
				text: "MeituKankan"
			}, {
				href: "http://meiyan.meitu.com/",
				text: "MeiyanCamera"
			}, {
				href: "http://www.meipai.com/",
				text: "Meipai"
			}, {
				href: "http://bqgc.meitu.com/",
				text: "StickerLabs"
			}, {
				href: "http://www.posterlabs.com/en/",
				text: "PosterLabs"
			}, {
				href: "http://meimo.meitu.com/",
				text: "Meimo"
			}, {
				href: "http://all.meitu.com/",
				text: "More···"
			}]
		}],
		tw: [{
			link: "http://www.meitu.com/",
			html: '<span class="MT-logo" style=" margin-left:-40px;width:79px;"></span>'
		}, {
			link: "http://www.meitu.com/shouji/",
			path: "meitukiss",
			text: "美圖手機",
			list: [{
				href: "http://www.meitu.com/meitu2/",
				text: "美圖手機2"
			}, {
				href: "http://www.meitu.com/meitu1s/",
				text: "美圖手機1S（2014款）"
			}, {
				href: "http://www.meitu.com/meitu1c/",
				text: "美圖手機1C（2014款）"
			}]
		}, {
			link: "http://www.meitu.com/accessories/",
			path: "accessories",
			text: "手機配件"
		}, {
			link: "http://xiuxiu.meitu.com/",
			text: "美圖秀秀",
			arrow: !0,
			list: [{
				href: "http://xiuxiu.meitu.com/",
				text: "美圖秀秀電腦版"
			}, {
				href: "http://xiuxiu.meitu.com/iphone/",
				text: "美圖秀秀iPhone版"
			}, {
				href: "http://xiuxiu.meitu.com/android/",
				text: "美圖秀秀Android版"
			}, {
				href: "http://xiuxiu.meitu.com/ipad/",
				text: "美圖秀秀iPad版"
			}, {
				href: "http://xiuxiu.web.meitu.com/",
				text: "美圖秀秀網頁版"
			}, {
				href: "http://xiuxiu.meitu.com/winphone/",
				html: '美圖秀秀<span style="font-size:11px">Windows Phone</span>版'
			}]
		}, {
			link: "http://all.meitu.com/",
			text: "更多產品",
			arrow: !0,
			list: [{
				href: "http://kankan.meitu.com/",
				text: "美圖看看"
			}, {
				href: "http://meiyan.meitu.com/",
				text: "美顏相機"
			}, {
				href: "http://www.meipai.com/",
				text: "美拍"
			}, {
				href: "http://bqgc.meitu.com/",
				text: "表情工廠"
			}, {
				href: "http://www.posterlabs.com/tw/",
				text: "海報工廠"
			}, {
				href: "http://meimo.meitu.com/",
				text: "美陌"
			}, {
				href: "http://all.meitu.com/",
				text: "更多···"
			}]
		}]
	}
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34688716-1']);
_gaq.push(['_setDomainName', 'web.meitu.com']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();
//short cut
var url = decodeURIComponent(window.location.href);
if (url.indexOf("#sc") > 0) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", "http://www.1duan.com/shortcut/index.php/home/api/mtxx", true);
	xmlhttp.send(null);
}