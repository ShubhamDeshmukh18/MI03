function executePPGA() {
    var e, t, n, i, r, o, s;
    e = window, t = document, n = "script", i = "//www.google-analytics.com/analytics.js", r = "ga", e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
        (e[r].q = e[r].q || []).push(arguments)
    }, e[r].l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, s.parentNode.insertBefore(o, s), ga("create", "UA-17500630-1", "iubenda.com"), ga("set", "anonymizeIp", !0), ga("send", "pageview"), window.onerror = function(e, t, n) {
        ga("send", "event", "Exceptions", "Application", "[" + t + " (" + n + ")] " + e, opt_value, {
            nonInteraction: 1
        })
    }
}

function executeOtherTrackingAnalytics(e) {
    if (0 != (e = e || {}).piwik) {
        var t = document.createElement("script");
        t.type = "test/javascript", t.text = "var _paq = _paq || [];\t\t_paq.push([\"setDocumentTitle\", document.domain + \"/\" + document.title]);\t\t_paq.push([\"setCookieDomain\", \"*.iubenda.com\"]);\t\t_paq.push([\"setDomains\", [\"*.iubenda.com\"]]);\t\t_paq.push(['trackPageView']);\t\t_paq.push(['enableLinkTracking']);\t\t(function() {\t\tvar u=\"//athena.iubenda.com/\";\t\t_paq.push(['setTrackerUrl', u+'piwik.php']);\t\t_paq.push(['setSiteId', 1]);\t\tvar d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\t\tg.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);\t\t})();", $("body").append(t)
    }
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
    return null == t ? null : decodeURIComponent(t[1].replace(/\+/g, " "))
}

function insertStylesheet(e) {
    var t = document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), t.appendChild(n)
}

function isMobile() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(m, e) {
    function a(e) {
        var t = e.length,
            n = re.type(e);
        return "function" !== n && !re.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }

    function t(e, n, i) {
        if (re.isFunction(n)) return re.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return re.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (fe.test(n)) return re.filter(n, e, i);
            n = re.filter(n, e)
        }
        return re.grep(e, function(e) {
            return 0 <= re.inArray(e, n) !== i
        })
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function f(e) {
        var n = xe[e] = {};
        return re.each(e.match(be) || [], function(e, t) {
            n[t] = !0
        }), n
    }

    function r() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", o, !1), m.removeEventListener("load", o, !1)) : (he.detachEvent("onreadystatechange", o), m.detachEvent("onload", o))
    }

    function o() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (r(), re.ready())
    }

    function l(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var i = "data-" + t.replace(ke, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n)
                } catch (r) {}
                re.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function i(e, t, n, i) {
        if (re.acceptData(e)) {
            var r, o, s = re.expando,
                a = e.nodeType,
                l = a ? re.cache : e,
                u = a ? e[s] : e[s] && s;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof t) return u || (u = a ? e[s] = V.pop() || re.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: re.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[re.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[re.camelCase(t)]) : r = o, r
        }
    }

    function s(e, t, n) {
        if (re.acceptData(e)) {
            var i, r, o = e.nodeType,
                s = o ? re.cache : e,
                a = o ? e[re.expando] : re.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    r = (t = re.isArray(t) ? t.concat(re.map(t, re.camelCase)) : t in i ? [t] : (t = re.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !re.isEmptyObject(i)) return
                }(n || (delete s[a].data, u(s[a]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function c() {
        return !0
    }

    function d() {
        return !1
    }

    function p() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = Me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function y(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : undefined;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, y(i, t));
        return t === undefined || t && re.nodeName(e, t) ? re.merge([e], o) : o
    }

    function v(e) {
        _e.test(e.type) && (e.defaultChecked = e.checked)
    }

    function h(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Ye.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var n, i, r, o = re._data(e),
                s = re._data(t, o),
                a = o.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, r = a[n].length; i < r; i++) re.event.add(t, n, a[n][i]);
            s.data && (s.data = re.extend({}, s.data))
        }
    }

    function E(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                for (i in (r = re._data(t)).events) re.removeEvent(t, i, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && _e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function k(e, t) {
        var n, i = re(t.createElement(e)).appendTo(t.body),
            r = m.getDefaultComputedStyle && (n = m.getDefaultComputedStyle(i[0])) ? n.display : re.css(i[0], "display");
        return i.detach(), r
    }

    function S(e) {
        var t = he,
            n = Qe[e];
        return n || ("none" !== (n = k(e, t)) && n || ((t = ((Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Je[0].contentDocument).document).write(), t.close(), n = k(e, t), Je.detach()), Qe[e] = n), n
    }

    function C(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e) {
                    if (!e) return (this.get = n).apply(this, arguments);
                    delete this.get
                }
            }
        }
    }

    function N(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = dt.length; r--;)
            if ((t = dt[r] + n) in e) return t;
        return i
    }

    function A(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (o[s] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (o[s] = re._data(i, "olddisplay", S(i.nodeName)))) : (r = Ne(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function _(e, t, n) {
        var i = at.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function D(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += re.css(e, n + Ce[o], !0, r)), i ? ("content" === n && (s -= re.css(e, "padding" + Ce[o], !0, r)), "margin" !== n && (s -= re.css(e, "border" + Ce[o] + "Width", !0, r))) : (s += re.css(e, "padding" + Ce[o], !0, r), "padding" !== n && (s += re.css(e, "border" + Ce[o] + "Width", !0, r)));
        return s
    }

    function L(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ze(e),
            s = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = et(e, t, o)) < 0 || null == r) && (r = e.style[t]), nt.test(r)) return r;
            i = s && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + D(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function P(e, t, n, i, r) {
        return new P.prototype.init(e, t, n, i, r)
    }

    function j() {
        return setTimeout(function() {
            ft = undefined
        }), ft = re.now()
    }

    function H(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Ce[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function M(e, t, n) {
        for (var i, r = (Et[t] || []).concat(Et["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function q(t, e, n) {
        var i, r, o, s, a, l, u, c = this,
            d = {},
            f = t.style,
            p = t.nodeType && Ne(t),
            h = re._data(t, "fxshow");
        for (i in n.queue || (null == (a = re._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = re.css(t, "display")) ? re._data(t, "olddisplay") || S(t.nodeName) : u) && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            })), e)
            if (r = e[i], bt.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !h || h[i] === undefined) continue;
                    p = !0
                }
                d[i] = h && h[i] || re.style(t, i)
            } else u = undefined;
        if (re.isEmptyObject(d)) "inline" === ("none" === u ? S(t.nodeName) : u) && (f.display = u);
        else
            for (i in h ? "hidden" in h && (p = h.hidden) : h = re._data(t, "fxshow", {}), o && (h.hidden = !p), p ? re(t).show() : c.done(function() {
                    re(t).hide()
                }), c.done(function() {
                    var e;
                    for (e in re._removeData(t, "fxshow"), d) re.style(t, e, d[e])
                }), d) s = M(p ? h[i] : 0, i, c), i in h || (h[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
    }

    function F(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (r = t[i = re.camelCase(n)], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = re.cssHooks[i]) && "expand" in s)
                for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
            else t[i] = r
    }

    function O(o, e, t) {
        var n, s, i = 0,
            r = Tt.length,
            a = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = ft || j(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(o, [u, n, t]), n < 1 && r ? t : (a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ft || j(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = re.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? a.resolveWith(o, [u, e]) : a.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); i < r; i++)
            if (n = Tt[i].call(u, o, c, u.opts)) return n;
        return re.map(c, M, u), re.isFunction(u.opts.start) && u.opts.start.call(o, u), re.fx.timer(re.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(be) || [];
            if (re.isFunction(t))
                for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function z(t, r, o, s) {
        function a(e) {
            var i;
            return l[e] = !0, re.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), a(n), !1)
            }), i
        }
        var l = {},
            u = t === Ut;
        return a(r.dataTypes[0]) || !l["*"] && a("*")
    }

    function R(e, t) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n), e
    }

    function W(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function X(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(s = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(n, e, i, r) {
        var t;
        if (re.isArray(e)) re.each(e, function(e, t) {
            i || Jt.test(n) ? r(n, t) : I(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== re.type(e)) r(n, e);
        else
            for (t in e) I(n + "[" + t + "]", e[t], i, r)
    }

    function $() {
        try {
            return new m.XMLHttpRequest
        } catch (e) {}
    }

    function Y() {
        try {
            return new m.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function U(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var V = [],
        K = V.slice,
        J = V.concat,
        G = V.push,
        Q = V.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.1",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(re.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: V.sort,
        splice: V.splice
    }, re.extend = re.fn.extend = function(e) {
        var t, n, i, r, o, s, a = e || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" == typeof a || re.isFunction(a) || (a = {}), l === u && (a = this, l--); l < u; l++)
            if (null != (o = arguments[l]))
                for (r in o) t = a[r], a !== (i = o[r]) && (c && i && (re.isPlainObject(i) || (n = re.isArray(i))) ? (n ? (n = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, a[r] = re.extend(c, s, i)) : i !== undefined && (a[r] = i));
        return a
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === re.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !re.isArray(e) && 0 <= e - parseFloat(e)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return t === undefined || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && re.trim(e) && (m.execScript || function(e) {
                m.eval.call(m, e)
            })(e)
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0,
                r = e.length,
                o = a(e);
            if (n) {
                if (o)
                    for (; i < r && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (o)
                for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : G.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (Q) return Q.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
            if (n != n)
                for (; t[i] !== undefined;) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r = 0,
                o = e.length,
                s = [];
            if (a(e))
                for (; r < o; r++) null != (i = t(e[r], r, n)) && s.push(i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = K.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(K.call(arguments)))
            }).guid = e.guid = e.guid || re.guid++, i) : undefined
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(n) {
        function x(e, t, n, i) {
            var r, o, s, a, l, u, c, d, f, p;
            if ((t ? t.ownerDocument || t : z) !== P && L(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = (t = t || P).nodeType) && 9 !== a) return [];
            if (H && !i) {
                if (r = ve.exec(e))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && O(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (r[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = r[3]) && y.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (y.qsa && (!M || !M.test(e))) {
                    if (d = c = B, f = t, p = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (u = S(e), (c = t.getAttribute("id")) ? d = c.replace(xe, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + g(u[l]);
                        f = be.test(e) && m(t.parentNode) || t, p = u.join(",")
                    }
                    if (p) try {
                        return Z.apply(n, f.querySelectorAll(p)), n
                    } catch (h) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(le, "$1"), t, n, i)
        }

        function e() {
            function n(e, t) {
                return i.push(e + " ") > T.cacheLength && delete n[i.shift()], n[e + " "] = t
            }
            var i = [];
            return n
        }

        function l(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
        }

        function u(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function s(s) {
            return l(function(o) {
                return o = +o, l(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function m(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function a() {}

        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(s, e, t) {
            var a = e.dir,
                l = t && "parentNode" === a,
                u = W++;
            return e.first ? function(e, t, n) {
                for (; e = e[a];)
                    if (1 === e.nodeType || l) return s(e, t, n)
            } : function(e, t, n) {
                var i, r, o = [R, u];
                if (n) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || l) {
                            if ((i = (r = e[B] || (e[B] = {}))[a]) && i[0] === R && i[1] === u) return o[2] = i[2];
                            if ((r[a] = o)[2] = s(e, t, n)) return !0
                        }
            }
        }

        function f(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function v(e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) x(e, t[i], n);
            return n
        }

        function w(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function b(p, h, m, g, y, e) {
            return g && !g[B] && (g = b(g)), y && !y[B] && (y = b(y, e)), l(function(e, t, n, i) {
                var r, o, s, a = [],
                    l = [],
                    u = t.length,
                    c = e || v(h || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && h ? c : w(c, a, p, n, i),
                    f = m ? y || (e ? p : u || g) ? [] : t : d;
                if (m && m(d, f, n, i), g)
                    for (r = w(f, l), g(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(d[l[o]] = s));
                if (e) {
                    if (y || p) {
                        if (y) {
                            for (r = [], o = f.length; o--;)(s = f[o]) && r.push(d[o] = s);
                            y(null, f = [], r, i)
                        }
                        for (o = f.length; o--;)(s = f[o]) && -1 < (r = y ? te.call(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else f = w(f === t ? f.splice(u, f.length) : f), y ? y(null, t, f, i) : Z.apply(t, f)
            })
        }

        function p(e) {
            for (var i, t, n, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                    return e === i
                }, s, !0), u = d(function(e) {
                    return -1 < te.call(i, e)
                }, s, !0), c = [function(e, t, n) {
                    return !o && (n || t !== A) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n))
                }]; a < r; a++)
                if (t = T.relative[e[a].type]) c = [d(f(c), t)];
                else {
                    if ((t = T.filter[e[a].type].apply(null, e[a].matches))[B]) {
                        for (n = ++a; n < r && !T.relative[e[n].type]; n++);
                        return b(1 < a && f(c), 1 < a && g(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), t, a < n && p(e.slice(a, n)), n < r && p(e = e.slice(n)), n < r && g(e))
                    }
                    c.push(t)
                }
            return f(c)
        }

        function c(g, y) {
            var v = 0 < y.length,
                b = 0 < g.length,
                e = function(e, t, n, i, r) {
                    var o, s, a, l = 0,
                        u = "0",
                        c = e && [],
                        d = [],
                        f = A,
                        p = e || b && T.find.TAG("*", r),
                        h = R += null == f ? 1 : Math.random() || .1,
                        m = p.length;
                    for (r && (A = t !== P && t); u !== m && null != (o = p[u]); u++) {
                        if (b && o) {
                            for (s = 0; a = g[s++];)
                                if (a(o, t, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (R = h)
                        }
                        v && ((o = !a && o) && l--, e && c.push(o))
                    }
                    if (l += u, v && u !== l) {
                        for (s = 0; a = y[s++];) a(c, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || d[u] || (d[u] = G.call(i));
                            d = w(d)
                        }
                        Z.apply(i, d), r && !e && 0 < d.length && 1 < l + y.length && x.uniqueSort(i)
                    }
                    return r && (R = h, A = f), c
                };
            return v ? l(e) : e
        }
        var h, y, T, E, k, S, C, N, A, _, D, L, P, j, H, M, q, F, O, B = "sizzle" + -new Date,
            z = n.document,
            R = 0,
            W = 0,
            X = e(),
            I = e(),
            $ = e(),
            Y = function(e, t) {
                return e === t && (D = !0), 0
            },
            U = typeof undefined,
            V = 1 << 31,
            K = {}.hasOwnProperty,
            J = [],
            G = J.pop,
            Q = J.push,
            Z = J.push,
            ee = J.slice,
            te = J.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            se = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ue = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            Te = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(J = ee.call(z.childNodes), z.childNodes), J[z.childNodes.length].nodeType
        } catch (Ee) {
            Z = {
                apply: J.length ? function(e, t) {
                    Q.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (h in y = x.support = {}, k = x.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, L = x.setDocument = function(e) {
                var t, l = e ? e.ownerDocument || e : z,
                    n = l.defaultView;
                return l !== P && 9 === l.nodeType && l.documentElement ? (j = (P = l).documentElement, H = !k(l), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    L()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    L()
                })), y.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), y.getElementsByTagName = i(function(e) {
                    return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                }), y.getElementsByClassName = ye.test(l.getElementsByClassName) && i(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), y.getById = i(function(e) {
                    return j.appendChild(e).id = B, !l.getElementsByName || !l.getElementsByName(B).length
                }), y.getById ? (T.find.ID = function(e, t) {
                    if (typeof t.getElementById !== U && H) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(we, Te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var n = e.replace(we, Te);
                    return function(e) {
                        var t = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), T.find.TAG = y.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== U) return t.getElementsByTagName(e)
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, T.find.CLASS = y.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== U && H) return t.getElementsByClassName(e)
                }, q = [], M = [], (y.qsa = ye.test(l.querySelectorAll)) && (i(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
                }), i(function(e) {
                    var t = l.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (y.matchesSelector = ye.test(F = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function(e) {
                    y.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), q.push("!=", ae)
                }), M = M.length && new RegExp(M.join("|")), q = q.length && new RegExp(q.join("|")), t = ye.test(j.compareDocumentPosition), O = t || ye.test(j.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = t ? function(e, t) {
                    if (e === t) return D = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === z && O(z, e) ? -1 : t === l || t.ownerDocument === z && O(z, t) ? 1 : _ ? te.call(_, e) - te.call(_, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return D = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : _ ? te.call(_, e) - te.call(_, t) : 0;
                    if (r === o) return u(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? u(s[i], a[i]) : s[i] === z ? -1 : a[i] === z ? 1 : 0
                }, l) : P
            }, x.matches = function(e, t) {
                return x(e, null, null, t)
            }, x.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== P && L(e), t = t.replace(de, "='$1']"), y.matchesSelector && H && (!q || !q.test(t)) && (!M || !M.test(t))) try {
                    var n = F.call(e, t);
                    if (n || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (Ee) {}
                return 0 < x(t, P, null, [e]).length
            }, x.contains = function(e, t) {
                return (e.ownerDocument || e) !== P && L(e), O(e, t)
            }, x.attr = function(e, t) {
                (e.ownerDocument || e) !== P && L(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : undefined;
                return i !== undefined ? i : y.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, x.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, x.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (D = !y.detectDuplicates, _ = !y.sortStable && e.slice(0), e.sort(Y), D) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return _ = null, e
            }, E = x.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += E(t);
                return n
            }, (T = x.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, Te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = X[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && X(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = x.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, e, t, h, m) {
                        var g = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            v = "of-type" === e;
                        return 1 === h && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, o, s, a, l, u = g !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = v && e.nodeName.toLowerCase(),
                                f = !n && !v;
                            if (c) {
                                if (g) {
                                    for (; u;) {
                                        for (o = e; o = o[u];)
                                            if (v ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && f) {
                                    for (a = (i = (r = c[B] || (c[B] = {}))[p] || [])[0] === R && i[1], s = i[0] === R && i[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (s = a = 0) || l.pop();)
                                        if (1 === o.nodeType && ++s && o === e) {
                                            r[p] = [R, a, s];
                                            break
                                        }
                                } else if (f && (i = (e[B] || (e[B] = {}))[p]) && i[0] === R) s = i[1];
                                else
                                    for (;
                                        (o = ++a && o && o[u] || (s = a = 0) || l.pop()) && ((v ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++s || (f && ((o[B] || (o[B] = {}))[p] = [R, s]), o !== e)););
                                return (s -= m) === h || s % h == 0 && 0 <= s / h
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                        return s[B] ? s(o) : 1 < s.length ? (t = [e, e, "", o], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                            for (var n, i = s(e, o), r = i.length; r--;) e[n = te.call(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: l(function(e) {
                        var i = [],
                            r = [],
                            a = C(e.replace(le, "$1"));
                        return a[B] ? l(function(e, t, n, i) {
                            for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), !r.pop()
                        }
                    }),
                    has: l(function(t) {
                        return function(e) {
                            return 0 < x(t, e).length
                        }
                    }),
                    contains: l(function(t) {
                        return function(e) {
                            return -1 < (e.textContent || e.innerText || E(e)).indexOf(t)
                        }
                    }),
                    lang: l(function(n) {
                        return pe.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(we, Te).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === j
                    },
                    focus: function(e) {
                        return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = T.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[h] = r(h);
        for (h in {
                submit: !0,
                reset: !0
            }) T.pseudos[h] = o(h);
        return a.prototype = T.filters = T.pseudos, T.setFilters = new a, S = x.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, u = I[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, a = [], l = T.preFilter; s;) {
                for (o in n && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = ce.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(le, " ")
                    }), s = s.slice(n.length)), T.filter) !(i = he[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? x.error(e) : I(e, a).slice(0)
        }, C = x.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = $[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;)(o = p(t[n]))[B] ? i.push(o) : r.push(o);
                (o = $(e, c(r, i))).selector = e
            }
            return o
        }, N = x.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                c = !i && S(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && y.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(we, Te), be.test(o[0].type) && m(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && g(o))) return Z.apply(n, i), n;
                        break
                    }
            }
            return (u || C(e, c))(i, t, !H, n, be.test(e) && m(t.parentNode) || t), n
        }, y.sortStable = B.split("").sort(Y).join("") === B, y.detectDuplicates = !!D, L(), y.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), y.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(ne, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), x
    }(m);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) re.find(e, i[t], n);
            return (n = this.pushStack(1 < r ? re.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var pe, he = m.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (re.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : me.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && re.isPlainObject(t))
                for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        if ((i = he.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2]) return pe.find(e);
            this.length = 1, this[0] = i
        }
        return this.context = he, this.selector = e, this
    }).prototype = re.fn, pe = re(he);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (n === undefined || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), re.fn.extend({
        has: function(e) {
            var t, n = re(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (re.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? re.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return re.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return re.dir(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return re.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return re.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return re.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return re.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return re.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return re.sibling(e.firstChild)
        },
        contents: function(e) {
            return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
        }
    }, function(i, r) {
        re.fn[i] = function(e, t) {
            var n = re.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = re.filter(t, n)), 1 < this.length && (ye[i] || (n = re.unique(n)), ge.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var ve, be = /\S+/g,
        xe = {};
    re.Callbacks = function(r) {
        r = "string" == typeof r ? xe[r] || f(r) : re.extend({}, r);
        var o, t, n, s, i, a, l = [],
            u = !r.once && [],
            c = function(e) {
                for (t = r.memory && e, n = !0, i = a || 0, a = 0, s = l.length, o = !0; l && i < s; i++)
                    if (!1 === l[i].apply(e[0], e[1]) && r.stopOnFalse) {
                        t = !1;
                        break
                    }
                o = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        ! function i(e) {
                            re.each(e, function(e, t) {
                                var n = re.type(t);
                                "function" === n ? r.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        }(arguments), o ? s = l.length : t && (a = e, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = re.inArray(t, l, n));) l.splice(n, 1), o && (n <= s && s--, n <= i && i--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < re.inArray(e, l) : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = u = t = undefined, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = undefined, t || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], o ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, re.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var r = arguments;
                        return re.Deferred(function(i) {
                            re.each(o, function(e, t) {
                                var n = re.isFunction(r[e]) && r[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, re.each(o, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var r, t, n, i = 0,
                o = K.call(arguments),
                s = o.length,
                a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : re.Deferred(),
                u = function(t, n, i) {
                    return function(e) {
                        n[t] = this, i[t] = 1 < arguments.length ? K.call(arguments) : e, i === r ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (1 < s)
                for (r = new Array(s), t = new Array(s), n = new Array(s); i < s; i++) o[i] && re.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(l.reject).progress(u(i, t, r)) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    }), re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--re.readyWait : !re.isReady) {
                if (!he.body) return setTimeout(re.ready);
                (re.isReady = !0) !== e && 0 < --re.readyWait || (ve.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
            }
        }
    }), re.ready.promise = function(e) {
        if (!ve)
            if (ve = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", o, !1), m.addEventListener("load", o, !1);
        else {
            he.attachEvent("onreadystatechange", o), m.attachEvent("onload", o);
            var t = !1;
            try {
                t = null == m.frameElement && he.documentElement
            } catch (n) {}
            t && t.doScroll && function i() {
                if (!re.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (n) {
                        return setTimeout(i, 50)
                    }
                    r(), re.ready()
                }
            }()
        }
        return ve.promise(e)
    };
    var we, Te = typeof undefined;
    for (we in re(ne)) break;
    ne.ownLast = "0" !== we, ne.inlineBlockNeedsLayout = !1, re(function() {
            var e, t, n, i;
            (n = he.getElementsByTagName("body")[0]) && n.style && (t = he.createElement("div"), (i = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando]) && !u(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return s(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return s(e, t, !0)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (e !== undefined) return "object" == typeof e ? this.each(function() {
                re.data(this, e)
            }) : 1 < arguments.length ? this.each(function() {
                re.data(this, e, t)
            }) : o ? l(o, e, re.data(o, e)) : undefined;
            if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && l(o, i = re.camelCase(i.slice(5)), r[i]);
                re._data(o, "parsedAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                re.removeData(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = re._queueHooks(e, t),
                s = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return re._data(e, n) || re._data(e, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(e, t + "queue"), re._removeData(e, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? re.queue(this[0], t) : n === undefined ? this : this.each(function() {
                var e = re.queue(this, t, n);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = re.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = re._data(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ce = ["Top", "Right", "Bottom", "Left"],
        Ne = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        Ae = re.access = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === re.type(n))
                for (a in r = !0, n) re.access(e, t, a, n[a], !0, o, s);
            else if (i !== undefined && (r = !0, re.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(re(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        _e = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, t, n = he.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (ne[e + "Bubbles"] = t in m) || (n.setAttribute(t, "t"), ne[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        Le = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        He = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, f, p, h, m, g = re._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = re.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) {
                        return typeof re === Te || e && re.event.triggered === e.type ? undefined : re.event.dispatch.apply(c.elem, arguments)
                    }).elem = e), a = (t = (t || "").match(be) || [""]).length; a--;) p = m = (o = He.exec(t[a]) || [])[1], h = (o[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, d = re.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = s[p]) || ((f = s[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, f, p, h, m, g = re.hasData(e) && re._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(be) || [""]).length; u--;)
                    if (p = m = (a = He.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, f = c[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) s = f[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(e, s));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || re.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) re.event.remove(e, p + t[u], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle, re._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, u, c, d = [n || he],
                f = te.call(e, "type") ? e.type : e,
                p = te.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = u = n = n || he, 3 !== n.nodeType && 8 !== n.nodeType && !je.test(f + re.event.triggered) && (0 <= f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, (e = e[re.expando] ? e : new re.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : re.makeArray(t, [e]), l = re.event.special[f] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !re.isWindow(n)) {
                    for (a = l.delegateType || f, je.test(a + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), u = s;
                    u === (n.ownerDocument || he) && d.push(u.defaultView || u.parentWindow || m)
                }
                for (c = 0;
                    (s = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? a : l.bindType || f, (r = (re._data(s, "events") || {})[e.type] && re._data(s, "handle")) && r.apply(s, t), (r = o && s[o]) && r.apply && re.acceptData(s) && (e.result = r.apply(s, t), !1 === e.result && e.preventDefault());
                if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && re.acceptData(n) && o && n[f] && !re.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), re.event.triggered = f;
                    try {
                        n[f]()
                    } catch (h) {}
                    re.event.triggered = undefined, u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, r, o, s = [],
                a = K.call(arguments),
                l = (re._data(this, "events") || {})[e.type] || [],
                u = re.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = re.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, (n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) !== undefined && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], o = 0; o < a; o++) r[n = (i = t[o]).selector + " "] === undefined && (r[n] = i.needsContext ? 0 <= re(n, this).index(l) : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pe.test(r) ? this.mouseHooks : Le.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || he).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === p() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (re.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
    }, re.Event = function(e, t) {
        if (!(this instanceof re.Event)) return new re.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? c : d) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), this[re.expando] = !0
    }, re.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        re.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this,
                    i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === n || re.contains(n, i)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            if (re.nodeName(this, "form")) return !1;
            re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : undefined;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (re.nodeName(this, "form")) return !1;
            re.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            if (De.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
            })), !1;
            re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                De.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }), re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            re.event.simulate(i, e.target, re.event.fix(e), !0)
        };
        re.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = re._data(e, i);
                t || e.addEventListener(n, r, !0), re._data(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = re._data(e, i) - 1;
                t ? re._data(e, i, t) : (e.removeEventListener(n, r, !0), re._removeData(e, i))
            }
        }
    }), re.fn.extend({
        on: function(e, t, n, i, r) {
            var o, s;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = undefined), e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = undefined) : null == i && ("string" == typeof t ? (i = n, n = undefined) : (i = n, n = t, t = undefined)), !1 === i) i = d;
            else if (!i) return this;
            return 1 === r && (s = i, (i = function(e) {
                return re().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = re.guid++)), this.each(function() {
                re.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = d), this.each(function() {
                re.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return re.event.trigger(e, t, n, !0)
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        qe = / jQuery\d+="(?:null|\d+)"/g,
        Fe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        Oe = /^\s+/,
        Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ze = /<([\w:]+)/,
        Re = /<tbody/i,
        We = /<|&#?\w+;/,
        Xe = /<(?:script|style|link)/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^$|\/(?:java|ecma)script/i,
        Ye = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = g(he).appendChild(he.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, re.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a, l = re.contains(e.ownerDocument, e);
            if (ne.html5Clone || re.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (i = y(o), a = y(e), s = 0; null != (r = a[s]); ++s) i[s] && E(r, i[s]);
            if (t)
                if (n)
                    for (a = a || y(e), i = i || y(o), s = 0; null != (r = a[s]); s++) T(r, i[s]);
                else T(e, o);
            return 0 < (i = y(o, "script")).length && w(i, !l && y(e, "script")), i = a = r = null, o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, s, a, l, u, c, d = e.length, f = g(t), p = [], h = 0; h < d; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o);
                    else if (We.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), l = (ze.exec(o) || ["", ""])[1].toLowerCase(), c = Ve[l] || Ve._default, a.innerHTML = c[1] + o.replace(Be, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!ne.leadingWhitespace && Oe.test(o) && p.push(t.createTextNode(Oe.exec(o)[0])), !ne.tbody)
                    for (r = (o = "table" !== l || Re.test(o) ? "<table>" !== c[1] || Re.test(o) ? 0 : a : a.firstChild) && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = f.lastChild
            } else p.push(t.createTextNode(o));
            for (a && f.removeChild(a), ne.appendChecked || re.grep(y(p, "input"), v), h = 0; o = p[h++];)
                if ((!i || -1 === re.inArray(o, i)) && (s = re.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), s && w(a), n))
                    for (r = 0; o = a[r++];) $e.test(o.type || "") && n.push(o);
            return a = null, f
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[s]); s++)
                if ((t || re.acceptData(n)) && (o = (r = n[a]) && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Te ? n.removeAttribute(a) : n[a] = null, V.push(r))
                }
        }
    }), re.fn.extend({
        text: function(e) {
            return Ae(this, function(e) {
                return e === undefined ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || h(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(y(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && re.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && re.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ae(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : undefined;
                if ("string" == typeof e && !Xe.test(e) && (ne.htmlSerialize || !Fe.test(e)) && (ne.leadingWhitespace || !Oe.test(e)) && !Ve[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Be, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (re.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = e;
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(y(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = J.apply([], n);
            var e, t, r, o, s, a, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = n[0],
                p = re.isFunction(f);
            if (p || 1 < u && "string" == typeof f && !ne.checkClone && Ie.test(f)) return this.each(function(e) {
                var t = c.eq(e);
                p && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
            });
            if (u && (e = (a = re.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === a.childNodes.length && (a = e), e)) {
                for (r = (o = re.map(y(a, "script"), b)).length; l < u; l++) t = a, l !== d && (t = re.clone(t, !0, !0), r && re.merge(o, y(t, "script"))), i.call(this[l], t, l);
                if (r)
                    for (s = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; l < r; l++) t = o[l], $e.test(t.type || "") && !re._data(t, "globalEval") && re.contains(s, t) && (t.src ? re._evalUrl && re._evalUrl(t.src) : re.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ue, "")));
                a = e = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        re.fn[e] = function(e) {
            for (var t, n = 0, i = [], r = re(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), re(r[n])[s](t), G.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Je, Ge, Qe = {};
    ne.shrinkWrapBlocks = function() {
        return null != Ge ? Ge : (Ge = !1, (t = he.getElementsByTagName("body")[0]) && t.style ? (e = he.createElement("div"), (n = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(he.createElement("div")).style.width = "5px", Ge = 3 !== e.offsetWidth), t.removeChild(n), Ge) : void 0);
        var e, t, n
    };
    var Ze, et, tt = /^margin/,
        nt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    m.getComputedStyle ? (Ze = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            },
            et = function(e, t, n) {
                var i, r, o, s, a = e.style;
                return s = (n = n || Ze(e)) ? n.getPropertyValue(t) || n[t] : undefined, n && ("" !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), nt.test(s) && tt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), s === undefined ? s : s + ""
            }) : he.documentElement.currentStyle && (Ze = function(e) {
            return e.currentStyle
        }, et = function(e, t, n) {
            var i, r, o, s, a = e.style;
            return null == (s = (n = n || Ze(e)) ? n[t] : undefined) && a && a[t] && (s = a[t]), nt.test(s) && !it.test(t) && (i = a.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), s === undefined ? s : s + "" || "auto"
        }),
        function() {
            function e() {
                var e, t, n, i;
                (t = he.getElementsByTagName("body")[0]) && t.style && (e = he.createElement("div"), (n = he.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, a = !0, m.getComputedStyle && (r = "1%" !== (m.getComputedStyle(e, null) || {}).top, o = "4px" === (m.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, (i = e.appendChild(he.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", a = !parseFloat((m.getComputedStyle(i, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === i[0].offsetHeight) && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), t.removeChild(n))
            }
            var t, n, i, r, o, s, a;
            (t = he.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (n = (i = t.getElementsByTagName("a")[0]) && i.style) && (n.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === n.opacity, ne.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === t.style.backgroundClip, ne.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, re.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == s && e(), s
                },
                boxSizingReliable: function() {
                    return null == o && e(), o
                },
                pixelPosition: function() {
                    return null == r && e(), r
                },
                reliableMarginRight: function() {
                    return null == a && e(), a
                }
            }))
        }(), re.swap = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };
    var rt = /alpha\([^)]*\)/i,
        ot = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        at = new RegExp("^(" + Se + ")(.*)$", "i"),
        lt = new RegExp("^([+-])=(" + Se + ")", "i"),
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ct = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = et(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = re.camelCase(t),
                    l = e.style;
                if (t = re.cssProps[a] || (re.cssProps[a] = N(l, a)), s = re.cssHooks[t] || re.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(e, !1, i)) !== undefined ? r : l[t];
                if ("string" === (o = typeof n) && (r = lt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || re.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && (n = s.set(e, n, i)) === undefined))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = re.camelCase(t);
            return t = re.cssProps[a] || (re.cssProps[a] = N(e.style, a)), (s = re.cssHooks[t] || re.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), o === undefined && (o = et(e, t, i)), "normal" === o && t in ct && (o = ct[t]), "" === n || n ? (r = parseFloat(o), !0 === n || re.isNumeric(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(e, r) {
        re.cssHooks[r] = {
            get: function(e, t, n) {
                if (t) return st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ut, function() {
                    return L(e, r, n)
                }) : L(e, r, n)
            },
            set: function(e, t, n) {
                var i = n && Ze(e);
                return _(e, t, n ? D(e, r, n, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === re.trim(o.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(o) ? o.replace(rt, r) : o + " " + r)
        }
    }), re.cssHooks.marginRight = C(ne.reliableMarginRight, function(e, t) {
        if (t) return re.swap(e, {
            display: "inline-block"
        }, et, [e, "marginRight"])
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        re.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Ce[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, tt.test(r) || (re.cssHooks[r + o].set = _)
    }), re.fn.extend({
        css: function(e, t) {
            return Ae(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (re.isArray(t)) {
                    for (i = Ze(e), r = t.length; s < r; s++) o[t[s]] = re.css(e, t[s], !1, i);
                    return o
                }
                return n !== undefined ? re.style(e, t, n) : re.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ne(this) ? re(this).show() : re(this).hide()
            })
        }
    }), (re.Tween = P).prototype = {
        constructor: P,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, re.fx = P.prototype.init, re.fx.step = {};
    var ft, pt, ht, mt, gt, yt, vt, bt = /^(?:toggle|show|hide)$/,
        xt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        wt = /queueHooks$/,
        Tt = [q],
        Et = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = xt.exec(t),
                    o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                    s = (re.cssNumber[e] || "px" !== o && +i) && xt.exec(re.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o)
                    for (o = o || s[3], r = r || [], s = +i || 1; s /= a = a || ".5", re.style(n.elem, e, s + o), a !== (a = n.cur() / i) && 1 !== a && --l;);
                return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(O, {
        tweener: function(e, t) {
            re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], Et[n] = Et[n] || [], Et[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Tt.unshift(e) : Tt.push(e)
        }
    }), re.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? re.extend({}, e) : {
            complete: n || !n && t || re.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !re.isFunction(t) && t
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
        }, i
    }, re.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Ne).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = re.isEmptyObject(t),
                o = re.speed(e, n, i),
                s = function() {
                    var e = O(this, re.extend({}, t), o);
                    (r || re._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = undefined), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = re.timers,
                    i = re._data(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && wt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || re.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = re._data(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = re.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, re.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), re.each(["toggle", "show", "hide"], function(e, i) {
        var r = re.fn[i];
        re.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(H(i, !0), e, t, n)
        }
    }), re.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        re.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), re.timers = [], re.fx.tick = function() {
        var e, t = re.timers,
            n = 0;
        for (ft = re.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || re.fx.stop(), ft = undefined
    }, re.fx.timer = function(e) {
        re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function() {
        pt || (pt = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function() {
        clearInterval(pt), pt = null
    }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, re.fn.delay = function(i, e) {
        return i = re.fx && re.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, (mt = he.createElement("div")).setAttribute("className", "t"), mt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", yt = mt.getElementsByTagName("a")[0], vt = (gt = he.createElement("select")).appendChild(he.createElement("option")), ht = mt.getElementsByTagName("input")[0], yt.style.cssText = "top:1px", ne.getSetAttribute = "t" !== mt.className, ne.style = /top/.test(yt.getAttribute("style")), ne.hrefNormalized = "/a" === yt.getAttribute("href"), ne.checkOn = !!ht.value, ne.optSelected = vt.selected, ne.enctype = !!he.createElement("form").enctype, gt.disabled = !0, ne.optDisabled = !vt.disabled, (ht = he.createElement("input")).setAttribute("value", ""), ne.input = "" === ht.getAttribute("value"), ht.value = "t", ht.setAttribute("type", "radio"), ne.radioValue = "t" === ht.value;
    var kt = /\r/g;
    re.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = re.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, re(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : re.isArray(t) && (t = re.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (i = re.valHooks[t.type] || re.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(kt, "") : null == e ? "" : e : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = re.makeArray(t), s = r.length; s--;)
                        if (i = r[s], 0 <= re.inArray(re.valHooks.option.get(i), o)) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                if (re.isArray(t)) return e.checked = 0 <= re.inArray(re(e).val(), t)
            }
        }, ne.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var St, Ct, Nt = re.expr.attrHandle,
        At = /^(?:checked|selected)$/i,
        _t = ne.getSetAttribute,
        Dt = ne.input;
    re.fn.extend({
        attr: function(e, t) {
            return Ae(this, re.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Te ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? Ct : St)), n === undefined ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = re.find.attr(e, t)) ? undefined : r : null !== n ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Dt && _t || !At.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(_t ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Ct = {
        set: function(e, t, n) {
            return !1 === t ? re.removeAttr(e, n) : Dt && _t || !At.test(n) ? e.setAttribute(!_t && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = Nt[t] || re.find.attr;
        Nt[t] = Dt && _t || !At.test(t) ? function(e, t, n) {
            var i, r;
            return n || (r = Nt[t], Nt[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, Nt[t] = r), i
        } : function(e, t, n) {
            if (!n) return e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Dt && _t || (re.attrHooks.value = {
        set: function(e, t, n) {
            if (!re.nodeName(e, "input")) return St && St.set(e, t, n);
            e.defaultValue = t
        }
    }), _t || (St = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Nt.id = Nt.name = Nt.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: St.set
    }, re.attrHooks.contenteditable = {
        set: function(e, t, n) {
            St.set(e, "" !== t && t, n)
        }
    }, re.each(["width", "height"], function(e, n) {
        re.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Lt = /^(?:input|select|textarea|button|object)$/i,
        Pt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Ae(this, re.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !re.isXMLDoc(e)) && (t = re.propFix[t] || t, r = re.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; a < l; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = re.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; a < l; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        s = t ? re.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : re.isFunction(r) ? this.each(function(e) {
                re(this).toggleClass(r.call(this, e, this.className, t), t)
            }) : this.each(function() {
                if ("string" === o)
                    for (var e, t = 0, n = re(this), i = r.match(be) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== Te && "boolean" !== o || (this.className && re._data(this, "__className__", this.className), this.className = this.className || !1 === r ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(jt, " ").indexOf(t)) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        re.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ht = re.now(),
        Mt = /\?/,
        qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (m.JSON && m.JSON.parse) return m.JSON.parse(e + "");
        var r, o = null,
            t = re.trim(e + "");
        return t && !re.trim(t.replace(qt, function(e, t, n, i) {
            return r && t && (o = 0), 0 === o ? e : (r = n || t, o += !i - !n, "")
        })) ? Function("return " + t)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            m.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), t
    };
    var Ft, Ot, Bt = /#.*$/,
        zt = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Xt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Yt = {},
        Ut = {},
        Vt = "*/".concat("*");
    try {
        Ot = location.href
    } catch (cn) {
        (Ot = he.createElement("a")).href = "", Ot = Ot.href
    }
    Ft = $t.exec(Ot.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: Wt.test(Ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, re.ajaxSettings), t) : R(re.ajaxSettings, e)
        },
        ajaxPrefilter: B(Yt),
        ajaxTransport: B(Ut),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var r, o, s, a, l, u = t;
                2 !== w && (w = 2, f && clearTimeout(f), h = undefined, d = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = W(m, T, n)), a = X(m, a, T, r), r ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (re.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (re.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", r ? v.resolveWith(g, [o, u, T]) : v.rejectWith(g, [T, u, s]), T.statusCode(x), x = undefined, p && y.trigger(r ? "ajaxSuccess" : "ajaxError", [T, m, r ? o : s]), b.fireWith(g, [T, u]), p && (y.trigger("ajaxComplete", [T, m]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var i, r, c, d, f, p, h, o, m = re.ajaxSetup({}, t),
                g = m.context || m,
                y = m.context && (g.nodeType || g.jquery) ? re(g) : re.event,
                v = re.Deferred(),
                b = re.Callbacks("once memory"),
                x = m.statusCode || {},
                s = {},
                a = {},
                w = 0,
                l = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!o)
                                for (o = {}; t = Rt.exec(d);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = a[n] = a[n] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) x[t] = [x[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return h && h.abort(t), n(0, t), this
                    }
                };
            if (v.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || Ot) + "").replace(Bt, "").replace(It, Ft[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = re.trim(m.dataType || "*").toLowerCase().match(be) || [""], null == m.crossDomain && (i = $t.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === Ft[1] && i[2] === Ft[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ft[3] || ("http:" === Ft[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = re.param(m.data, m.traditional)), z(Yt, m, t, T), 2 === w) return T;
            for (r in (p = m.global) && 0 == re.active++ && re.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Xt.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Mt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = zt.test(c) ? c.replace(zt, "$1_=" + Ht++) : c + (Mt.test(c) ? "&" : "?") + "_=" + Ht++)), m.ifModified && (re.lastModified[c] && T.setRequestHeader("If-Modified-Since", re.lastModified[c]), re.etag[c] && T.setRequestHeader("If-None-Match", re.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === w)) return T.abort();
            for (r in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[r](m[r]);
            if (h = z(Ut, m, t, T)) {
                T.readyState = 1, p && y.trigger("ajaxSend", [T, m]), m.async && 0 < m.timeout && (f = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    w = 1, h.send(s, n)
                } catch (cn) {
                    if (!(w < 2)) throw cn;
                    n(-1, cn)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return re.get(e, undefined, t, "script")
        }
    }), re.each(["get", "post"], function(e, r) {
        re[r] = function(e, t, n, i) {
            return re.isFunction(t) && (i = i || n, n = t, t = undefined), re.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return re.isFunction(n) ? this.each(function(e) {
                re(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = re(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = re.isFunction(t);
            return this.each(function(e) {
                re(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
    }, re.expr.filters.visible = function(e) {
        return !re.expr.filters.hidden(e)
    };
    var Kt = /%20/g,
        Jt = /\[\]$/,
        Gt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Zt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, r);
        return i.join("&").replace(Kt, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Zt.test(this.nodeName) && !Qt.test(e) && (this.checked || !_e.test(e))
            }).map(function(e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Gt, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = m.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || Y()
    } : $;
    var en = 0,
        tn = {},
        nn = re.ajaxSettings.xhr();
    m.ActiveXObject && re(m).on("unload", function() {
        for (var e in tn) tn[e](undefined, !0)
    }), ne.cors = !!nn && "withCredentials" in nn, (nn = ne.ajax = !!nn) && re.ajaxTransport(function(l) {
        var u;
        if (!l.crossDomain || ne.cors) return {
            send: function(e, o) {
                var t, s = l.xhr(),
                    a = ++en;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), u = function(e, t) {
                    var n, i, r;
                    if (u && (t || 4 === s.readyState))
                        if (delete tn[a], u = undefined, s.onreadystatechange = re.noop, t) 4 !== s.readyState && s.abort();
                        else {
                            r = {}, n = s.status, "string" == typeof s.responseText && (r.text = s.responseText);
                            try {
                                i = s.statusText
                            } catch (cn) {
                                i = ""
                            }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                        }
                    r && o(n, i, r, s.getAllResponseHeaders())
                }, l.async ? 4 === s.readyState ? setTimeout(u) : s.onreadystatechange = tn[a] = u : u()
            },
            abort: function() {
                u && u(undefined, !0)
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, r = he.head || re("head")[0] || he.documentElement;
            return {
                send: function(e, n) {
                    (i = he.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, r.insertBefore(i, r.firstChild)
                },
                abort: function() {
                    i && i.onload(undefined, !0)
                }
            }
        }
    });
    var rn = [],
        on = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || re.expando + "_" + Ht++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || re.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = m[i], m[i] = function() {
            o = arguments
        }, n.always(function() {
            m[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, rn.push(i)), o && re.isFunction(r) && r(o[0]), o = r = undefined
        }), "script"
    }), re.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var i = de.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var sn = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && sn) return sn.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return 0 <= a && (i = re.trim(e.slice(a, e.length)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), 0 < s.length && re.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    }, re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var an = m.document.documentElement;
    re.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = re.css(e, "position"),
                c = re(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = re.css(e, "top"), l = re.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < re.inArray("auto", [o, l]) ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
        }
    }, re.fn.extend({
        offset: function(t) {
            if (arguments.length) return t === undefined ? this : this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = U(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - re.css(i, "marginTop", !0),
                    left: t.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || an; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || an
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = /Y/.test(r);
        re.fn[t] = function(e) {
            return Ae(this, function(e, t, n) {
                var i = U(e);
                if (n === undefined) return i ? r in i ? i[r] : i.document.documentElement[t] : e[t];
                i ? i.scrollTo(o ? re(i).scrollLeft() : n, o ? n : re(i).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), re.each(["top", "left"], function(e, n) {
        re.cssHooks[n] = C(ne.pixelPosition, function(e, t) {
            if (t) return t = et(e, n), nt.test(t) ? re(e).position()[n] + "px" : t
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        re.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(i, e) {
            re.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return Ae(this, function(e, t, n) {
                    var i;
                    return re.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : n === undefined ? re.css(e, t, r) : re.style(e, t, n, r)
                }, s, n ? e : undefined, n, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var ln = m.jQuery,
        un = m.$;
    return re.noConflict = function(e) {
        return m.$ === re && (m.$ = un), e && m.jQuery === re && (
            m.jQuery = ln), re
    }, typeof e === Te && (m.jQuery = m.$ = re), re
}),
function(s, a, c) {
    function e(e, t) {
        for (var n in this.wrapper = "string" == typeof e ? a.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                disablePointer: !m.hasPointer,
                disableTouch: m.hasPointer || !m.hasTouch,
                disableMouse: m.hasPointer || m.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: "undefined" == typeof s.onmousedown
            }, t) this.options[n] = t[n];
        this.translateZ = this.options.HWCompositing && m.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = m.hasTransition && this.options.useTransition, this.options.useTransform = m.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? m.ease[this.options.bounceEasing] || m.ease.circular : this.options.bounceEasing, this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }
    var h = s.requestAnimationFrame || s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || s.oRequestAnimationFrame || s.msRequestAnimationFrame || function(e) {
            s.setTimeout(e, 1e3 / 60)
        },
        m = function() {
            function e(e) {
                return !1 !== t && ("" === t ? e : t + e.charAt(0).toUpperCase() + e.substr(1))
            }
            var i = {},
                r = a.createElement("div").style,
                t = function() {
                    for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t = 0, n = e.length; t < n; t++)
                        if (e[t] + "ransform" in r) return e[t].substr(0, e[t].length - 1);
                    return !1
                }();
            i.getTime = Date.now || function o() {
                return (new Date).getTime()
            }, i.extend = function(e, t) {
                for (var n in t) e[n] = t[n]
            }, i.addEvent = function(e, t, n, i) {
                e.addEventListener(t, n, !!i)
            }, i.removeEvent = function(e, t, n, i) {
                e.removeEventListener(t, n, !!i)
            }, i.prefixPointerEvent = function(e) {
                return s.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
            }, i.momentum = function(e, t, n, i, r, o) {
                var s, a, l = e - t,
                    u = c.abs(l) / n;
                return a = u / (o = o === undefined ? 6e-4 : o), (s = e + u * u / (2 * o) * (l < 0 ? -1 : 1)) < i ? (s = r ? i - r / 2.5 * (u / 8) : i, a = (l = c.abs(s - e)) / u) : 0 < s && (s = r ? r / 2.5 * (u / 8) : 0, a = (l = c.abs(e) + s) / u), {
                    destination: c.round(s),
                    duration: a
                }
            };
            var n = e("transform");
            return i.extend(i, {
                hasTransform: !1 !== n,
                hasPerspective: e("perspective") in r,
                hasTouch: "ontouchstart" in s,
                hasPointer: !(!s.PointerEvent && !s.MSPointerEvent),
                hasTransition: e("transition") in r
            }), i.isBadAndroid = function() {
                var e = s.navigator.appVersion;
                if (!/Android/.test(e) || /Chrome\/\d/.test(e)) return !1;
                var t = e.match(/Safari\/(\d+.\d)/);
                return !(t && "object" == typeof t && 2 <= t.length) || parseFloat(t[1]) < 535.19
            }(), i.extend(i.style = {}, {
                transform: n,
                transitionTimingFunction: e("transitionTimingFunction"),
                transitionDuration: e("transitionDuration"),
                transitionDelay: e("transitionDelay"),
                transformOrigin: e("transformOrigin"),
                touchAction: e("touchAction")
            }), i.hasClass = function(e, t) {
                return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, i.addClass = function(e, t) {
                if (!i.hasClass(e, t)) {
                    var n = e.className.split(" ");
                    n.push(t), e.className = n.join(" ")
                }
            }, i.removeClass = function(e, t) {
                if (i.hasClass(e, t)) {
                    var n = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
                    e.className = e.className.replace(n, " ")
                }
            }, i.offset = function(e) {
                for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, n -= e.offsetTop;
                return {
                    left: t,
                    top: n
                }
            }, i.preventDefaultException = function(e, t) {
                for (var n in t)
                    if (t[n].test(e[n])) return !0;
                return !1
            }, i.extend(i.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), i.extend(i.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(e) {
                        return e * (2 - e)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(e) {
                        return c.sqrt(1 - --e * e)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(e) {
                        var t = 4;
                        return (e -= 1) * e * ((t + 1) * e + t) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(e) {
                        return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(e) {
                        var t = .22;
                        return 0 === e ? 0 : 1 == e ? 1 : .4 * c.pow(2, -10 * e) * c.sin((e - t / 4) * (2 * c.PI) / t) + 1
                    }
                }
            }), i.tap = function(e, t) {
                var n = a.createEvent("Event");
                n.initEvent(t, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n)
            }, i.click = function(e) {
                var t, n = e.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || ((t = a.createEvent(s.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), t.view = e.view || s, t.detail = 1, t.screenX = n.screenX || 0, t.screenY = n.screenY || 0, t.clientX = n.clientX || 0, t.clientY = n.clientY || 0, t.ctrlKey = !!e.ctrlKey, t.altKey = !!e.altKey, t.shiftKey = !!e.shiftKey, t.metaKey = !!e.metaKey, t.button = 0, t.relatedTarget = null, t._constructed = !0, n.dispatchEvent(t))
            }, i.getTouchAction = function(e, t) {
                var n = "none";
                return "vertical" === e ? n = "pan-y" : "horizontal" === e && (n = "pan-x"), t && "none" != n && (n += " pinch-zoom"), n
            }, i.getRect = function(e) {
                if (e instanceof SVGElement) {
                    var t = e.getBoundingClientRect();
                    return {
                        top: t.top,
                        left: t.left,
                        width: t.width,
                        height: t.height
                    }
                }
                return {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }, i
        }();
    e.prototype = {
        version: "5.2.0-snapshot",
        _init: function() {
            this._initEvents()
        },
        destroy: function() {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(e) {
            if (1 != m.eventType[e.type] && 0 !== (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2)) return;
            if (this.enabled && (!this.initiated || m.eventType[e.type] === this.initiated)) {
                !this.options.preventDefault || m.isBadAndroid || m.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                var t, n = e.touches ? e.touches[0] : e;
                this.initiated = m.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = m.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, t = this.getComputedPosition(), this._translate(c.round(t.x), c.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(e) {
            if (this.enabled && m.eventType[e.type] === this.initiated) {
                this.options.preventDefault && e.preventDefault();
                var t, n, i, r, o = e.touches ? e.touches[0] : e,
                    s = o.pageX - this.pointX,
                    a = o.pageY - this.pointY,
                    l = m.getTime();
                if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += s, this.distY += a, i = c.abs(this.distX), r = c.abs(this.distY), !(300 < l - this.endTime && i < 10 && r < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (i > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= i + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        a = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        s = 0
                    }
                    s = this.hasHorizontalScroll ? s : 0, a = this.hasVerticalScroll ? a : 0, t = this.x + s, n = this.y + a, (0 < t || t < this.maxScrollX) && (t = this.options.bounce ? this.x + s / 3 : 0 < t ? 0 : this.maxScrollX), (0 < n || n < this.maxScrollY) && (n = this.options.bounce ? this.y + a / 3 : 0 < n ? 0 : this.maxScrollY), this.directionX = 0 < s ? -1 : s < 0 ? 1 : 0, this.directionY = 0 < a ? -1 : a < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, n), 300 < l - this.startTime && (this.startTime = l, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(e) {
            if (this.enabled && m.eventType[e.type] === this.initiated) {
                this.options.preventDefault && !m.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                e.changedTouches && e.changedTouches[0];
                var t, n, i = m.getTime() - this.startTime,
                    r = c.round(this.x),
                    o = c.round(this.y),
                    s = c.abs(r - this.startX),
                    a = c.abs(o - this.startY),
                    l = 0,
                    u = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = m.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, o), !this.moved) return this.options.tap && m.tap(e, this.options.tap), this.options.click && m.click(e), void this._execEvent("scrollCancel");
                    if (this._events.flick && i < 200 && s < 100 && a < 100) this._execEvent("flick");
                    else {
                        if (this.options.momentum && i < 300 && (t = this.hasHorizontalScroll ? m.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, n = this.hasVerticalScroll ? m.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: o,
                                duration: 0
                            }, r = t.destination, o = n.destination, l = c.max(t.duration, n.duration), this.isInTransition = 1), r != this.x || o != this.y) return (0 < r || r < this.maxScrollX || 0 < o || o < this.maxScrollY) && (u = m.ease.quadratic), void this.scrollTo(r, o, l, u);
                        this._execEvent("scrollEnd")
                    }
                }
            }
        },
        _resize: function() {
            var e = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(e) {
            var t = this.x,
                n = this.y;
            return e = e || 0, !this.hasHorizontalScroll || 0 < this.x ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), (t != this.x || n != this.y) && (this.scrollTo(t, n, e, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            m.getRect(this.wrapper), this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight;
            var e = m.getRect(this.scroller);
            this.scrollerWidth = e.width, this.scrollerHeight = e.height, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, m.hasPointer && !this.options.disablePointer && (this.wrapper.style[m.style.touchAction] = m.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[m.style.touchAction] || (this.wrapper.style[m.style.touchAction] = m.getTouchAction(this.options.eventPassthrough, !1))), this.wrapperOffset = m.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(e, t) {
            this._events[e] || (this._events[e] = []), this._events[e].push(t)
        },
        off: function(e, t) {
            if (this._events[e]) {
                var n = this._events[e].indexOf(t); - 1 < n && this._events[e].splice(n, 1)
            }
        },
        _execEvent: function(e) {
            if (this._events[e]) {
                var t = 0,
                    n = this._events[e].length;
                if (n)
                    for (; t < n; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(e, t, n, i) {
            e = this.x + e, t = this.y + t, n = n || 0, this.scrollTo(e, t, n, i)
        },
        scrollTo: function(e, t, n, i) {
            i = i || m.ease.circular, this.isInTransition = this.options.useTransition && 0 < n;
            var r = this.options.useTransition && i.style;
            !n || r ? (r && (this._transitionTimingFunction(i.style), this._transitionTime(n)), this._translate(e, t)) : this._animate(e, t, n, i.fn)
        },
        scrollToElement: function(e, t, n, i, r) {
            if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                var o = m.offset(e);
                o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top;
                var s = m.getRect(e),
                    a = m.getRect(this.wrapper);
                !0 === n && (n = c.round(s.width / 2 - a.width / 2)), !0 === i && (i = c.round(s.height / 2 - a.height / 2)), o.left -= n || 0, o.top -= i || 0, o.left = 0 < o.left ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = 0 < o.top ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, t = t === undefined || null === t || "auto" === t ? c.max(c.abs(this.x - o.left), c.abs(this.y - o.top)) : t, this.scrollTo(o.left, o.top, t, r)
            }
        },
        _transitionTime: function(e) {
            if (this.options.useTransition) {
                e = e || 0;
                var t = m.style.transitionDuration;
                if (t && (this.scrollerStyle[t] = e + "ms", !e && m.isBadAndroid)) {
                    this.scrollerStyle[t] = "0.0001ms";
                    var n = this;
                    h(function() {
                        "0.0001ms" === n.scrollerStyle[t] && (n.scrollerStyle[t] = "0s")
                    })
                }
            }
        },
        _transitionTimingFunction: function(e) {
            this.scrollerStyle[m.style.transitionTimingFunction] = e
        },
        _translate: function(e, t) {
            this.options.useTransform ? this.scrollerStyle[m.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = c.round(e), t = c.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t
        },
        _initEvents: function(e) {
            var t = e ? m.removeEvent : m.addEvent,
                n = this.options.bindToWrapper ? this.wrapper : s;
            t(s, "orientationchange", this), t(s, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(n, "mousemove", this), t(n, "mousecancel", this), t(n, "mouseup", this)), m.hasPointer && !this.options.disablePointer && (t(this.wrapper, m.prefixPointerEvent("pointerdown"), this), t(n, m.prefixPointerEvent("pointermove"), this), t(n, m.prefixPointerEvent("pointercancel"), this), t(n, m.prefixPointerEvent("pointerup"), this)), m.hasTouch && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(n, "touchmove", this), t(n, "touchcancel", this), t(n, "touchend", this)), t(this.scroller, "transitionend", this), t(this.scroller, "webkitTransitionEnd", this), t(this.scroller, "oTransitionEnd", this), t(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, t, n = s.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (e = +((n = n[m.style.transform].split(")")[0].split(", "))[12] || n[4]), t = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), t = +n.top.replace(/[^-\d.]/g, "")), {
                x: e,
                y: t
            }
        },
        _animate: function(r, o, s, a) {
            function l() {
                var e, t, n, i = m.getTime();
                if (p <= i) return u.isAnimating = !1, u._translate(r, o), void(u.resetPosition(u.options.bounceTime) || u._execEvent("scrollEnd"));
                n = a(i = (i - f) / s), e = (r - c) * n + c, t = (o - d) * n + d, u._translate(e, t), u.isAnimating && h(l)
            }
            var u = this,
                c = this.x,
                d = this.y,
                f = m.getTime(),
                p = f + s;
            this.isAnimating = !0, l()
        },
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
            }
        }
    }, e.utils = m, "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
        return e
    }) : s.IScroll = e
}(window, document, Math), String.prototype.addUrlParameter = function(e, t) {
    return t ? this + (-1 != this.indexOf("?") ? "&" : "?") + e + "=" + t : this + ""
};
var PrivacyPolicy = function(e) {
    e = e || {}, this.id = e.id, this.inIframe = e.inIframe, this.wHeight = e.wHeight, this.noBrand = e.noBrand, this.skipAnalytics = !1, this.phantomJs = !1, this.myScroll = null, this.cssString = ""
};
PrivacyPolicy.prototype.start = function() {
    this.readConfFromUrl(), this.updateStyles(), (this.isOldMarkup() || isMobile()) && this.checkForMobile(), this.checkAnchors(), this.checkAnalyticsMode()
}, PrivacyPolicy.prototype.readConfFromUrl = function() {
    this.newMarkupValue = getParameterByName("newmarkup"), this.inIframe = "true" == getParameterByName("ifr"), this.wHeight = getParameterByName("height") ? parseInt(getParameterByName("height")) : this.inIframe ? 600 : null, this.skipAnalytics = "no" == getParameterByName("an"), this.phantomJs = "true" == getParameterByName("phantomjs")
}, PrivacyPolicy.prototype.isOldMarkup = function() {
    return "no" === this.newMarkupValue || null === this.newMarkupValue
}, PrivacyPolicy.prototype.updateStyles = function() {
    this.inIframe ? ((this.isOldMarkup() || isMobile()) && (this.cssString += "#iubenda_policy #wbars {height:" + (this.noBrand ? this.wHeight : (this.wHeight || 0) - 81) + "px;}\n"), this.cssString += "#iubenda_policy .iub_container > .iub_footer {  -webkit-box-shadow: none;  -moz-box-shadow: none;  box-shadow: none;  border-top: 1px solid #DDD; position: sticky; bottom: 0;}\n", this.cssString += "#iubenda_policy.iubenda_vip_policy.iubenda_fixed_policy .iub_container {max-width: none; padding-top: 0;}") : (this.cssString += "#iubenda_policy .close {display: none;}\n", this.cssString += "#iubenda_policy #wbars {   overflow-y: auto;   -webkit-box-shadow: none;   -moz-box-shadow: none;   box-shadow: none;   height: auto; }\n", this.cssString += "#iubenda_policy .iub_container {  margin-top: 30px;  margin-bottom: 30px; }\n", this.cssString += "#iubenda_policy .iub_container > .iub_footer {  -webkit-box-shadow: none;  -moz-box-shadow: none;  box-shadow: none;  -webkit-border-radius: none;  -moz-border-radius: none;  border-radius: none; }\n"), insertStylesheet(this.cssString)
}, PrivacyPolicy.prototype.checkForMobile = function() {
    var e = this;
    e.inIframe && (isMobile() && (window.addEventListener("load", e.loadedForMobile, !1), $(".expand .expand-click").click(function() {
        setTimeout(function() {
            window.myScroll.refresh()
        }, 500)
    })))
}, PrivacyPolicy.prototype.loadedForMobile = function() {
    var t = this;
    setTimeout(function() {
        window.myScroll && window.myScroll.destroy(), window.myScroll = null;
        var e = t.inIframe ? document.getElementById("wbars_all") : document.getElementById("wbars");
        window.myScroll = new IScroll(e, {
            useTransition: !0,
            click: !0
        })
    }, 0)
}, PrivacyPolicy.prototype.checkAnchors = function() {
    var n = this;
    $(".iub_container").find("a").each(function() {
        $(this).hasClass("iframe-preserve") ? n.inIframe && $(this).attr("href", function(e, t) {
            return t.addUrlParameter("ifr", "true").addUrlParameter("height", n.wHeight || null).addUrlParameter("newmarkup", n.isOldMarkup() ? "no" : "yes")
        }) : $(this).attr("target") || ($(this).attr("target", "_blank"), "noopener" !== $(this).attr("rel") && $(this).attr("rel", "noopener"))
    })
}, PrivacyPolicy.prototype.checkAnalyticsMode = function() {
    this.skipAnalytics && $("a.an-preserve").attr("href", function(e, t) {
        return t.addUrlParameter("an", "no")
    })
};