// Custom_js
// Matrial_js
// Bootstrap_js
// Floating_Action_Button
// Sidebar_js
// Burder_js

function MaterialButton(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialCheckbox(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialIconToggle(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialMenu(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialProgress(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialRadio(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialSlider(t) {
    "use strict";
    this.element_ = t, this.isIE_ = window.navigator.msPointerEnabled, this.init()
}

function MaterialSpinner(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialSwitch(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialTabs(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialTab(t, e) {
    "use strict";
    if (t) {
        if (e.element_.classList.contains(e.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
            var s = document.createElement("span");
            s.classList.add(e.CssClasses_.MDL_RIPPLE_CONTAINER), s.classList.add(e.CssClasses_.MDL_JS_RIPPLE_EFFECT);
            var i = document.createElement("span");
            i.classList.add(e.CssClasses_.MDL_RIPPLE), s.appendChild(i), t.appendChild(s)
        }
        t.addEventListener("click", function (s) {
            s.preventDefault();
            var i = t.href.split("#")[1],
                n = e.element_.querySelector("#" + i);
            e.resetTabState_(), e.resetPanelState_(), t.classList.add(e.CssClasses_.ACTIVE_CLASS), n.classList.add(e.CssClasses_.ACTIVE_CLASS)
        })
    }
}

function MaterialTextfield(t) {
    "use strict";
    this.element_ = t, this.maxRows = this.Constant_.NO_MAX_ROWS, this.init()
}

function MaterialTooltip(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialLayout(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialLayoutTab(t, e, s, i) {
    "use strict";
    if (t) {
        if (i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)) {
            var n = document.createElement("span");
            n.classList.add(i.CssClasses_.RIPPLE_CONTAINER), n.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);
            var a = document.createElement("span");
            a.classList.add(i.CssClasses_.RIPPLE), n.appendChild(a), t.appendChild(n)
        }
        t.addEventListener("click", function (n) {
            n.preventDefault();
            var a = t.href.split("#")[1],
                o = i.content_.querySelector("#" + a);
            i.resetTabState_(e), i.resetPanelState_(s), t.classList.add(i.CssClasses_.IS_ACTIVE), o.classList.add(i.CssClasses_.IS_ACTIVE)
        })
    }
}

function MaterialDataTable(t) {
    "use strict";
    this.element_ = t, this.init()
}

function MaterialRipple(t) {
    "use strict";
    this.element_ = t, this.init()
}



//**********************************
//**********************************
//**********************************   Custom_js
//**********************************
//**********************************

Array.prototype.forEach.call(document.querySelectorAll(".mdl-card__media"), function (t) {
    var e = t.querySelector("a");
    if (e) {
        var s = e.getAttribute("href");
        s && t.addEventListener("click", function () {
            location.href = s
        })
    }
});

// Auto fill visitor-url "http://"
$("#visitor-url").focus(function () {
    this.placeholder = "http://"
});

$("#visitor-url").blur(function () {
    this.placeholder = ""
});

// Auto delete input content & placeholder
$(".search-input").blur(function () {
    this.value = "";
    this.placeholder = "";
});

// Auto hidden share/tags popup block
$("#article-fuctions-share-button, #article-functions-viewtags-button").click(function () {
    $(".is-visible").removeClass("is-visible")
});

// Add 'fab' class to the PageNav <a>
$(".fabs .prev, .fabs .next, .fabs .prev-content").addClass("fab");
var componentHandler = function () {
    "use strict";

    function t(t, e) {
        for (var s = 0; s < p.length; s++)
            if (p[s].className === t) return void 0 !== e && (p[s] = e), p[s];
        return !1
    }

    function e(t) {
        var e = t.getAttribute("data-upgraded");
        return null === e ? [""] : e.split(",")
    }

    function s(t, s) {
        var i = e(t);
        return -1 !== i.indexOf(s)
    }

    function i(e, s) {
        if (void 0 === e && void 0 === s)
            for (var a = 0; a < p.length; a++) i(p[a].className, p[a].cssClass);
        else {
            var o = e;
            if (void 0 === s) {
                var r = t(o);
                r && (s = r.cssClass)
            }
            for (var l = document.querySelectorAll("." + s), h = 0; h < l.length; h++) n(l[h], o)
        }
    }

    function n(i, n) {
        if (!("object" == typeof i && i instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
        var a = e(i),
            o = [];
        if (n) s(i, n) || o.push(t(n));
        else {
            var r = i.classList;
            p.forEach(function (t) {
                r.contains(t.cssClass) && -1 === o.indexOf(t) && !s(i, t.className) && o.push(t)
            })
        }
        for (var l, h = 0, d = o.length; d > h; h++) {
            if (l = o[h], !l) throw new Error("Unable to find a registered component for the given class.");
            a.push(l.className), i.setAttribute("data-upgraded", a.join(","));
            var c = new l.classConstructor(i);
            c[m] = l, u.push(c);
            for (var _ = 0, f = l.callbacks.length; f > _; _++) l.callbacks[_](i);
            l.widget && (i[l.className] = c);
            var C = document.createEvent("Events");
            C.initEvent("mdl-componentupgraded", !0, !0), i.dispatchEvent(C)
        }
    }

    function a(t) {
        Array.isArray(t) || (t = "function" == typeof t.item ? Array.prototype.slice.call(t) : [t]);
        for (var e, s = 0, i = t.length; i > s; s++) e = t[s], e instanceof HTMLElement && (e.children.length > 0 && a(e.children), n(e))
    }

    function o(e) {
        var s = {
            classConstructor: e.constructor,
            className: e.classAsString,
            cssClass: e.cssClass,
            widget: void 0 === e.widget ? !0 : e.widget,
            callbacks: []
        };
        if (p.forEach(function (t) {
                if (t.cssClass === s.cssClass) throw new Error("The provided cssClass has already been registered.");
                if (t.className === s.className) throw new Error("The provided className has already been registered")
            }), e.constructor.prototype.hasOwnProperty(m)) throw new Error("MDL component classes must not have " + m + " defined as a property.");
        var i = t(e.classAsString, s);
        i || p.push(s)
    }

    function r(e, s) {
        var i = t(e);
        i && i.callbacks.push(s)
    }

    function l() {
        for (var t = 0; t < p.length; t++) i(p[t].className)
    }

    function h(t) {
        for (var e = 0; e < u.length; e++) {
            var s = u[e];
            if (s.element_ === t) return s
        }
    }

    function d(t) {
        if (t && t[m].classConstructor.prototype.hasOwnProperty(_)) {
            t[_]();
            var e = u.indexOf(t);
            u.splice(e, 1);
            var s = t.element_.getAttribute("data-upgraded").split(","),
                i = s.indexOf(t[m].classAsString);
            s.splice(i, 1), t.element_.setAttribute("data-upgraded", s.join(","));
            var n = document.createEvent("Events");
            n.initEvent("mdl-componentdowngraded", !0, !0), t.element_.dispatchEvent(n)
        }
    }

    function c(t) {
        var e = function (t) {
            d(h(t))
        };
        if (t instanceof Array || t instanceof NodeList)
            for (var s = 0; s < t.length; s++) e(t[s]);
        else {
            if (!(t instanceof Node)) throw new Error("Invalid argument provided to downgrade MDL nodes.");
            e(t)
        }
    }
    var p = [],
        u = [],
        _ = "mdlDowngrade_",
        m = "mdlComponentConfigInternal_";
    return {
        upgradeDom: i,
        upgradeElement: n,
        upgradeElements: a,
        upgradeAllRegistered: l,
        registerUpgradedCallback: r,
        register: o,
        downgradeElements: c
    }
}();
if (window.addEventListener("load", function () {
        "use strict";
        "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), componentHandler.upgradeAllRegistered()) : componentHandler.upgradeElement = componentHandler.register = function () {}
    }), function () {
        "use strict";
        Date.now || (Date.now = function () {
            return (new Date).getTime()
        });
        for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
            var s = t[e];
            window.requestAnimationFrame = window[s + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var i = 0;
            window.requestAnimationFrame = function (t) {
                var e = Date.now(),
                    s = Math.max(i + 16, e);
                return setTimeout(function () {
                    t(i = s)
                }, s - e)
            }, window.cancelAnimationFrame = clearTimeout
        }
    }(), MaterialButton.prototype.Constant_ = {}, MaterialButton.prototype.CssClasses_ = {
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_CONTAINER: "mdl-button__ripple-container",
        RIPPLE: "mdl-ripple"
    }, MaterialButton.prototype.blurHandler = function (t) {
        "use strict";
        t && this.element_.blur()
    }, MaterialButton.prototype.disable = function () {
        "use strict";
        this.element_.disabled = !0
    }, MaterialButton.prototype.enable = function () {
        "use strict";
        this.element_.disabled = !1
    }, MaterialButton.prototype.init = function () {
        "use strict";
        if (this.element_) {
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                var t = document.createElement("span");
                t.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleElement_ = document.createElement("span"), this.rippleElement_.classList.add(this.CssClasses_.RIPPLE), t.appendChild(this.rippleElement_), this.boundRippleBlurHandler = this.blurHandler.bind(this), this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler), this.element_.appendChild(t)
            }
            this.boundButtonBlurHandler = this.blurHandler.bind(this), this.element_.addEventListener("mouseup", this.boundButtonBlurHandler), this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler)
        }
    }, MaterialButton.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.rippleElement_ && this.rippleElement_.removeEventListener("mouseup", this.boundRippleBlurHandler), this.element_.removeEventListener("mouseup", this.boundButtonBlurHandler), this.element_.removeEventListener("mouseleave", this.boundButtonBlurHandler)
    }, componentHandler.register({
        constructor: MaterialButton,
        classAsString: "MaterialButton",
        cssClass: "mdl-js-button",
        widget: !0
    }), MaterialCheckbox.prototype.Constant_ = {
        TINY_TIMEOUT: .001
    }, MaterialCheckbox.prototype.CssClasses_ = {
        INPUT: "mdl-checkbox__input",
        BOX_OUTLINE: "mdl-checkbox__box-outline",
        FOCUS_HELPER: "mdl-checkbox__focus-helper",
        TICK_OUTLINE: "mdl-checkbox__tick-outline",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-checkbox__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked",
        IS_UPGRADED: "is-upgraded"
    }, MaterialCheckbox.prototype.onChange_ = function (t) {
        "use strict";
        this.updateClasses_()
    }, MaterialCheckbox.prototype.onFocus_ = function (t) {
        "use strict";
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, MaterialCheckbox.prototype.onBlur_ = function (t) {
        "use strict";
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, MaterialCheckbox.prototype.onMouseUp_ = function (t) {
        "use strict";
        this.blur_()
    }, MaterialCheckbox.prototype.updateClasses_ = function () {
        "use strict";
        this.checkDisabled(), this.checkToggleState()
    }, MaterialCheckbox.prototype.blur_ = function (t) {
        "use strict";
        window.setTimeout(function () {
            this.inputElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, MaterialCheckbox.prototype.checkToggleState = function () {
        "use strict";
        this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, MaterialCheckbox.prototype.checkDisabled = function () {
        "use strict";
        this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, MaterialCheckbox.prototype.disable = function () {
        "use strict";
        this.inputElement_.disabled = !0, this.updateClasses_()
    }, MaterialCheckbox.prototype.enable = function () {
        "use strict";
        this.inputElement_.disabled = !1, this.updateClasses_()
    }, MaterialCheckbox.prototype.check = function () {
        "use strict";
        this.inputElement_.checked = !0, this.updateClasses_()
    }, MaterialCheckbox.prototype.uncheck = function () {
        "use strict";
        this.inputElement_.checked = !1, this.updateClasses_()
    }, MaterialCheckbox.prototype.init = function () {
        "use strict";
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
            var t = document.createElement("span");
            t.classList.add(this.CssClasses_.BOX_OUTLINE);
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.FOCUS_HELPER);
            var s = document.createElement("span");
            if (s.classList.add(this.CssClasses_.TICK_OUTLINE), t.appendChild(s), this.element_.appendChild(e), this.element_.appendChild(t), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
                var i = document.createElement("span");
                i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
            }
            this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementMouseUp), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, MaterialCheckbox.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundRippleMouseUp), this.inputElement_.removeEventListener("change", this.boundInputOnChange), this.inputElement_.removeEventListener("focus", this.boundInputOnFocus), this.inputElement_.removeEventListener("blur", this.boundInputOnBlur), this.element_.removeEventListener("mouseup", this.boundElementMouseUp)
    }, componentHandler.register({
        constructor: MaterialCheckbox,
        classAsString: "MaterialCheckbox",
        cssClass: "mdl-js-checkbox",
        widget: !0
    }), MaterialIconToggle.prototype.Constant_ = {
        TINY_TIMEOUT: .001
    }, MaterialIconToggle.prototype.CssClasses_ = {
        INPUT: "mdl-icon-toggle__input",
        JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-icon-toggle__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked"
    }, MaterialIconToggle.prototype.onChange_ = function (t) {
        "use strict";
        this.updateClasses_()
    }, MaterialIconToggle.prototype.onFocus_ = function (t) {
        "use strict";
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, MaterialIconToggle.prototype.onBlur_ = function (t) {
        "use strict";
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, MaterialIconToggle.prototype.onMouseUp_ = function (t) {
        "use strict";
        this.blur_()
    }, MaterialIconToggle.prototype.updateClasses_ = function () {
        "use strict";
        this.checkDisabled(), this.checkToggleState()
    }, MaterialIconToggle.prototype.blur_ = function (t) {
        "use strict";
        window.setTimeout(function () {
            this.inputElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, MaterialIconToggle.prototype.checkToggleState = function () {
        "use strict";
        this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, MaterialIconToggle.prototype.checkDisabled = function () {
        "use strict";
        this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, MaterialIconToggle.prototype.disable = function () {
        "use strict";
        this.inputElement_.disabled = !0, this.updateClasses_()
    }, MaterialIconToggle.prototype.enable = function () {
        "use strict";
        this.inputElement_.disabled = !1, this.updateClasses_()
    }, MaterialIconToggle.prototype.check = function () {
        "use strict";
        this.inputElement_.checked = !0, this.updateClasses_()
    }, MaterialIconToggle.prototype.uncheck = function () {
        "use strict";
        this.inputElement_.checked = !1, this.updateClasses_()
    }, MaterialIconToggle.prototype.init = function () {
        "use strict";
        if (this.element_) {
            if (this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
                var t = document.createElement("span");
                t.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(t), this.element_.appendChild(this.rippleContainerElement_)
            }
            this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementOnMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementOnMouseUp), this.updateClasses_(), this.element_.classList.add("is-upgraded")
        }
    }, MaterialIconToggle.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundRippleMouseUp), this.inputElement_.removeEventListener("change", this.boundInputOnChange), this.inputElement_.removeEventListener("focus", this.boundInputOnFocus), this.inputElement_.removeEventListener("blur", this.boundInputOnBlur), this.element_.removeEventListener("mouseup", this.boundElementOnMouseUp)
    }, componentHandler.register({
        constructor: MaterialIconToggle,
        classAsString: "MaterialIconToggle",
        cssClass: "mdl-js-icon-toggle",
        widget: !0
    }), MaterialMenu.prototype.Constant_ = {
        TRANSITION_DURATION_SECONDS: .3,
        TRANSITION_DURATION_FRACTION: .8,
        CLOSE_TIMEOUT: 150
    }, MaterialMenu.prototype.Keycodes_ = {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        UP_ARROW: 38,
        DOWN_ARROW: 40
    }, MaterialMenu.prototype.CssClasses_ = {
        CONTAINER: "mdl-menu__container",
        OUTLINE: "mdl-menu__outline",
        ITEM: "mdl-menu__item",
        ITEM_RIPPLE_CONTAINER: "mdl-menu__item-ripple-container",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE: "mdl-ripple",
        IS_UPGRADED: "is-upgraded",
        IS_VISIBLE: "is-visible",
        IS_ANIMATING: "is-animating",
        BOTTOM_LEFT: "mdl-menu--bottom-left",
        BOTTOM_RIGHT: "mdl-menu--bottom-right",
        TOP_LEFT: "mdl-menu--top-left",
        TOP_RIGHT: "mdl-menu--top-right",
        UNALIGNED: "mdl-menu--unaligned"
    }, MaterialMenu.prototype.init = function () {
        "use strict";
        if (this.element_) {
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_), this.container_ = t;
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.OUTLINE), this.outline_ = e, t.insertBefore(e, this.element_);
            var s = this.element_.getAttribute("for"),
                i = null;
            s && (i = document.getElementById(s), i && (this.forElement_ = i, i.addEventListener("click", this.handleForClick_.bind(this)), i.addEventListener("keydown", this.handleForKeyboardEvent_.bind(this))));
            for (var n = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), a = 0; a < n.length; a++) n[a].addEventListener("click", this.handleItemClick_.bind(this)), n[a].tabIndex = "-1", n[a].addEventListener("keydown", this.handleItemKeyboardEvent_.bind(this));
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))
                for (this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), a = 0; a < n.length; a++) {
                    var o = n[a],
                        r = document.createElement("span");
                    r.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
                    var l = document.createElement("span");
                    l.classList.add(this.CssClasses_.RIPPLE), r.appendChild(l), o.appendChild(r), o.classList.add(this.CssClasses_.RIPPLE_EFFECT)
                }
            this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT), this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT), this.element_.classList.contains(this.CssClasses_.TOP_LEFT) && this.outline_.classList.add(this.CssClasses_.TOP_LEFT), this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) && this.outline_.classList.add(this.CssClasses_.TOP_RIGHT), this.element_.classList.contains(this.CssClasses_.UNALIGNED) && this.outline_.classList.add(this.CssClasses_.UNALIGNED), t.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, MaterialMenu.prototype.handleForClick_ = function (t) {
        "use strict";
        if (this.element_ && this.forElement_) {
            var e = this.forElement_.getBoundingClientRect(),
                s = this.forElement_.parentElement.getBoundingClientRect();
            this.element_.classList.contains(this.CssClasses_.UNALIGNED) || (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? (this.container_.style.right = s.right - e.right + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px") : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.bottom = s.bottom - e.top + "px") : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (this.container_.style.right = s.right - e.right + "px", this.container_.style.bottom = s.bottom - e.top + "px") : (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px"))
        }
        this.toggle(t)
    }, MaterialMenu.prototype.handleForKeyboardEvent_ = function (t) {
        "use strict";
        if (this.element_ && this.container_ && this.forElement_) {
            var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
            e && e.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) && (t.keyCode === this.Keycodes_.UP_ARROW ? (t.preventDefault(), e[e.length - 1].focus()) : t.keyCode === this.Keycodes_.DOWN_ARROW && (t.preventDefault(), e[0].focus()))
        }
    }, MaterialMenu.prototype.handleItemKeyboardEvent_ = function (t) {
        "use strict";
        if (this.element_ && this.container_) {
            var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
            if (e && e.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
                var s = Array.prototype.slice.call(e).indexOf(t.target);
                if (t.keyCode === this.Keycodes_.UP_ARROW) t.preventDefault(), s > 0 ? e[s - 1].focus() : e[e.length - 1].focus();
                else if (t.keyCode === this.Keycodes_.DOWN_ARROW) t.preventDefault(), e.length > s + 1 ? e[s + 1].focus() : e[0].focus();
                else if (t.keyCode === this.Keycodes_.SPACE || t.keyCode === this.Keycodes_.ENTER) {
                    t.preventDefault();
                    var i = new MouseEvent("mousedown");
                    t.target.dispatchEvent(i), i = new MouseEvent("mouseup"), t.target.dispatchEvent(i), t.target.click()
                } else t.keyCode === this.Keycodes_.ESCAPE && (t.preventDefault(), this.hide())
            }
        }
    }, MaterialMenu.prototype.handleItemClick_ = function (t) {
        "use strict";
        null !== t.target.getAttribute("disabled") ? t.stopPropagation() : (this.closing_ = !0, window.setTimeout(function (t) {
            this.hide(), this.closing_ = !1
        }.bind(this), this.Constant_.CLOSE_TIMEOUT))
    }, MaterialMenu.prototype.applyClip_ = function (t, e) {
        "use strict";
        this.element_.style.clip = this.element_.classList.contains(this.CssClasses_.UNALIGNED) ? null : this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? "rect(0 " + e + "px 0 " + e + "px)" : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? "rect(" + t + "px 0 " + t + "px 0)" : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? "rect(" + t + "px " + e + "px " + t + "px " + e + "px)" : null
    }, MaterialMenu.prototype.addAnimationEndListener_ = function () {
        "use strict";
        var t = function () {
            this.element_.removeEventListener("transitionend", t), this.element_.removeEventListener("webkitTransitionEnd", t), this.element_.classList.remove(this.CssClasses_.IS_ANIMATING)
        }.bind(this);
        this.element_.addEventListener("transitionend", t), this.element_.addEventListener("webkitTransitionEnd", t)
    }, MaterialMenu.prototype.show = function (t) {
        "use strict";
        if (this.element_ && this.container_ && this.outline_) {
            var e = this.element_.getBoundingClientRect().height,
                s = this.element_.getBoundingClientRect().width;
            this.container_.style.width = s + "px", this.container_.style.height = e + "px", this.outline_.style.width = s + "px", this.outline_.style.height = e + "px";
            for (var i = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION, n = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), a = 0; a < n.length; a++) {
                var o = null;
                o = this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (e - n[a].offsetTop - n[a].offsetHeight) / e * i + "s" : n[a].offsetTop / e * i + "s", n[a].style.transitionDelay = o
            }
            this.applyClip_(e, s), window.requestAnimationFrame(function () {
                this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.element_.style.clip = "rect(0 " + s + "px " + e + "px 0)", this.container_.classList.add(this.CssClasses_.IS_VISIBLE)
            }.bind(this)), this.addAnimationEndListener_();
            var r = function (e) {
                e === t || this.closing_ || (document.removeEventListener("click", r), this.hide())
            }.bind(this);
            document.addEventListener("click", r)
        }
    }, MaterialMenu.prototype.hide = function () {
        "use strict";
        if (this.element_ && this.container_ && this.outline_) {
            for (var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), e = 0; e < t.length; e++) t[e].style.transitionDelay = null;
            var s = this.element_.getBoundingClientRect().height,
                i = this.element_.getBoundingClientRect().width;
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.applyClip_(s, i), this.container_.classList.remove(this.CssClasses_.IS_VISIBLE), this.addAnimationEndListener_()
        }
    }, MaterialMenu.prototype.toggle = function (t) {
        "use strict";
        this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) ? this.hide() : this.show(t)
    }, componentHandler.register({
        constructor: MaterialMenu,
        classAsString: "MaterialMenu",
        cssClass: "mdl-js-menu",
        widget: !0
    }), MaterialProgress.prototype.Constant_ = {}, MaterialProgress.prototype.CssClasses_ = {
        INDETERMINATE_CLASS: "mdl-progress__indeterminate"
    }, MaterialProgress.prototype.setProgress = function (t) {
        "use strict";
        this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS) || (this.progressbar_.style.width = t + "%")
    }, MaterialProgress.prototype.setBuffer = function (t) {
        "use strict";
        this.bufferbar_.style.width = t + "%", this.auxbar_.style.width = 100 - t + "%"
    }, MaterialProgress.prototype.init = function () {
        "use strict";
        if (this.element_) {
            var t = document.createElement("div");
            t.className = "progressbar bar bar1", this.element_.appendChild(t), this.progressbar_ = t, t = document.createElement("div"), t.className = "bufferbar bar bar2", this.element_.appendChild(t), this.bufferbar_ = t, t = document.createElement("div"), t.className = "auxbar bar bar3", this.element_.appendChild(t), this.auxbar_ = t, this.progressbar_.style.width = "0%", this.bufferbar_.style.width = "100%", this.auxbar_.style.width = "0%", this.element_.classList.add("is-upgraded")
        }
    }, MaterialProgress.prototype.mdlDowngrade_ = function () {
        "use strict";
        for (; this.element_.firstChild;) this.element_.removeChild(this.element_.firstChild)
    }, componentHandler.register({
        constructor: MaterialProgress,
        classAsString: "MaterialProgress",
        cssClass: "mdl-js-progress",
        widget: !0
    }), MaterialRadio.prototype.Constant_ = {
        TINY_TIMEOUT: .001
    }, MaterialRadio.prototype.CssClasses_ = {
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked",
        IS_UPGRADED: "is-upgraded",
        JS_RADIO: "mdl-js-radio",
        RADIO_BTN: "mdl-radio__button",
        RADIO_OUTER_CIRCLE: "mdl-radio__outer-circle",
        RADIO_INNER_CIRCLE: "mdl-radio__inner-circle",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-radio__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple"
    }, MaterialRadio.prototype.onChange_ = function (t) {
        "use strict";
        for (var e = document.getElementsByClassName(this.CssClasses_.JS_RADIO), s = 0; s < e.length; s++) {
            var i = e[s].querySelector("." + this.CssClasses_.RADIO_BTN);
            i.getAttribute("name") === this.btnElement_.getAttribute("name") && e[s].MaterialRadio.updateClasses_()
        }
    }, MaterialRadio.prototype.onFocus_ = function (t) {
        "use strict";
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, MaterialRadio.prototype.onBlur_ = function (t) {
        "use strict";
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, MaterialRadio.prototype.onMouseup_ = function (t) {
        "use strict";
        this.blur_()
    }, MaterialRadio.prototype.updateClasses_ = function () {
        "use strict";
        this.checkDisabled(), this.checkToggleState()
    }, MaterialRadio.prototype.blur_ = function (t) {
        "use strict";
        window.setTimeout(function () {
            this.btnElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, MaterialRadio.prototype.checkDisabled = function () {
        "use strict";
        this.btnElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, MaterialRadio.prototype.checkToggleState = function () {
        "use strict";
        this.btnElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, MaterialRadio.prototype.disable = function () {
        "use strict";
        this.btnElement_.disabled = !0, this.updateClasses_()
    }, MaterialRadio.prototype.enable = function () {
        "use strict";
        this.btnElement_.disabled = !1, this.updateClasses_()
    }, MaterialRadio.prototype.check = function () {
        "use strict";
        this.btnElement_.checked = !0, this.updateClasses_()
    }, MaterialRadio.prototype.uncheck = function () {
        "use strict";
        this.btnElement_.checked = !1, this.updateClasses_()
    }, MaterialRadio.prototype.init = function () {
        "use strict";
        if (this.element_) {
            this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.RADIO_BTN);
            var t = document.createElement("span");
            t.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
            var e = document.createElement("span");
            e.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE), this.element_.appendChild(t), this.element_.appendChild(e);
            var s;
            if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), s = document.createElement("span"), s.classList.add(this.CssClasses_.RIPPLE_CONTAINER), s.classList.add(this.CssClasses_.RIPPLE_EFFECT), s.classList.add(this.CssClasses_.RIPPLE_CENTER), s.addEventListener("mouseup", this.onMouseup_.bind(this));
                var i = document.createElement("span");
                i.classList.add(this.CssClasses_.RIPPLE), s.appendChild(i), this.element_.appendChild(s)
            }
            this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseup_.bind(this)), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, componentHandler.register({
        constructor: MaterialRadio,
        classAsString: "MaterialRadio",
        cssClass: "mdl-js-radio",
        widget: !0
    }), MaterialSlider.prototype.Constant_ = {}, MaterialSlider.prototype.CssClasses_ = {
        IE_CONTAINER: "mdl-slider__ie-container",
        SLIDER_CONTAINER: "mdl-slider__container",
        BACKGROUND_FLEX: "mdl-slider__background-flex",
        BACKGROUND_LOWER: "mdl-slider__background-lower",
        BACKGROUND_UPPER: "mdl-slider__background-upper",
        IS_LOWEST_VALUE: "is-lowest-value",
        IS_UPGRADED: "is-upgraded"
    }, MaterialSlider.prototype.onInput_ = function (t) {
        "use strict";
        this.updateValueStyles_()
    }, MaterialSlider.prototype.onChange_ = function (t) {
        "use strict";
        this.updateValueStyles_()
    }, MaterialSlider.prototype.onMouseUp_ = function (t) {
        "use strict";
        t.target.blur()
    }, MaterialSlider.prototype.onContainerMouseDown_ = function (t) {
        "use strict";
        if (t.target === this.element_.parentElement) {
            t.preventDefault();
            var e = new MouseEvent("mousedown", {
                target: t.target,
                buttons: t.buttons,
                clientX: t.clientX,
                clientY: this.element_.getBoundingClientRect().y
            });
            this.element_.dispatchEvent(e)
        }
    }, MaterialSlider.prototype.updateValueStyles_ = function (t) {
        "use strict";
        var e = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
        0 === e ? this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE) : this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE), this.isIE_ || (this.backgroundLower_.style.flex = e, this.backgroundLower_.style.webkitFlex = e, this.backgroundUpper_.style.flex = 1 - e, this.backgroundUpper_.style.webkitFlex = 1 - e)
    }, MaterialSlider.prototype.disable = function () {
        "use strict";
        this.element_.disabled = !0
    }, MaterialSlider.prototype.enable = function () {
        "use strict";
        this.element_.disabled = !1
    }, MaterialSlider.prototype.change = function (t) {
        "use strict";
        t && (this.element_.value = t), this.updateValueStyles_()
    }, MaterialSlider.prototype.init = function () {
        "use strict";
        if (this.element_) {
            if (this.isIE_) {
                var t = document.createElement("div");
                t.classList.add(this.CssClasses_.IE_CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_)
            } else {
                var e = document.createElement("div");
                e.classList.add(this.CssClasses_.SLIDER_CONTAINER), this.element_.parentElement.insertBefore(e, this.element_),
                    this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_);
                var s = document.createElement("div");
                s.classList.add(this.CssClasses_.BACKGROUND_FLEX), e.appendChild(s), this.backgroundLower_ = document.createElement("div"), this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER), s.appendChild(this.backgroundLower_), this.backgroundUpper_ = document.createElement("div"), this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER), s.appendChild(this.backgroundUpper_)
            }
            this.boundInputHandler = this.onInput_.bind(this), this.boundChangeHandler = this.onChange_.bind(this), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this), this.element_.addEventListener("input", this.boundInputHandler), this.element_.addEventListener("change", this.boundChangeHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.addEventListener("mousedown", this.boundContainerMouseDownHandler), this.updateValueStyles_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, MaterialSlider.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.element_.removeEventListener("input", this.boundInputHandler), this.element_.removeEventListener("change", this.boundChangeHandler), this.element_.removeEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.removeEventListener("mousedown", this.boundContainerMouseDownHandler)
    }, componentHandler.register({
        constructor: MaterialSlider,
        classAsString: "MaterialSlider",
        cssClass: "mdl-js-slider",
        widget: !0
    }), MaterialSpinner.prototype.Constant_ = {
        MDL_SPINNER_LAYER_COUNT: 4
    }, MaterialSpinner.prototype.CssClasses_ = {
        MDL_SPINNER_LAYER: "mdl-spinner__layer",
        MDL_SPINNER_CIRCLE_CLIPPER: "mdl-spinner__circle-clipper",
        MDL_SPINNER_CIRCLE: "mdl-spinner__circle",
        MDL_SPINNER_GAP_PATCH: "mdl-spinner__gap-patch",
        MDL_SPINNER_LEFT: "mdl-spinner__left",
        MDL_SPINNER_RIGHT: "mdl-spinner__right"
    }, MaterialSpinner.prototype.createLayer = function (t) {
        "use strict";
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.MDL_SPINNER_LAYER), e.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + "-" + t);
        var s = document.createElement("div");
        s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
        var i = document.createElement("div");
        i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
        var n = document.createElement("div");
        n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
        for (var a = [s, i, n], o = 0; o < a.length; o++) {
            var r = document.createElement("div");
            r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE), a[o].appendChild(r)
        }
        e.appendChild(s), e.appendChild(i), e.appendChild(n), this.element_.appendChild(e)
    }, MaterialSpinner.prototype.stop = function () {
        "use strict";
        this.element_.classList.remove("is-active")
    }, MaterialSpinner.prototype.start = function () {
        "use strict";
        this.element_.classList.add("is-active")
    }, MaterialSpinner.prototype.init = function () {
        "use strict";
        if (this.element_) {
            for (var t = 1; t <= this.Constant_.MDL_SPINNER_LAYER_COUNT; t++) this.createLayer(t);
            this.element_.classList.add("is-upgraded")
        }
    }, componentHandler.register({
        constructor: MaterialSpinner,
        classAsString: "MaterialSpinner",
        cssClass: "mdl-js-spinner",
        widget: !0
    }), MaterialSwitch.prototype.Constant_ = {
        TINY_TIMEOUT: .001
    }, MaterialSwitch.prototype.CssClasses_ = {
        INPUT: "mdl-switch__input",
        TRACK: "mdl-switch__track",
        THUMB: "mdl-switch__thumb",
        FOCUS_HELPER: "mdl-switch__focus-helper",
        RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE_CONTAINER: "mdl-switch__ripple-container",
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE: "mdl-ripple",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_CHECKED: "is-checked"
    }, MaterialSwitch.prototype.onChange_ = function (t) {
        "use strict";
        this.updateClasses_()
    }, MaterialSwitch.prototype.onFocus_ = function (t) {
        "use strict";
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, MaterialSwitch.prototype.onBlur_ = function (t) {
        "use strict";
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, MaterialSwitch.prototype.onMouseUp_ = function (t) {
        "use strict";
        this.blur_()
    }, MaterialSwitch.prototype.updateClasses_ = function () {
        "use strict";
        this.checkDisabled(), this.checkToggleState()
    }, MaterialSwitch.prototype.blur_ = function (t) {
        "use strict";
        window.setTimeout(function () {
            this.inputElement_.blur()
        }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, MaterialSwitch.prototype.checkDisabled = function () {
        "use strict";
        this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, MaterialSwitch.prototype.checkToggleState = function () {
        "use strict";
        this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, MaterialSwitch.prototype.disable = function () {
        "use strict";
        this.inputElement_.disabled = !0, this.updateClasses_()
    }, MaterialSwitch.prototype.enable = function () {
        "use strict";
        this.inputElement_.disabled = !1, this.updateClasses_()
    }, MaterialSwitch.prototype.on = function () {
        "use strict";
        this.inputElement_.checked = !0, this.updateClasses_()
    }, MaterialSwitch.prototype.off = function () {
        "use strict";
        this.inputElement_.checked = !1, this.updateClasses_()
    }, MaterialSwitch.prototype.init = function () {
        "use strict";
        if (this.element_) {
            this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.TRACK);
            var e = document.createElement("div");
            e.classList.add(this.CssClasses_.THUMB);
            var s = document.createElement("span");
            if (s.classList.add(this.CssClasses_.FOCUS_HELPER), e.appendChild(s), this.element_.appendChild(t), this.element_.appendChild(e), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.rippleContainerElement_.addEventListener("mouseup", this.boundMouseUpHandler);
                var i = document.createElement("span");
                i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
            }
            this.boundChangeHandler = this.onChange_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.inputElement_.addEventListener("change", this.boundChangeHandler), this.inputElement_.addEventListener("focus", this.boundFocusHandler), this.inputElement_.addEventListener("blur", this.boundBlurHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.updateClasses_(), this.element_.classList.add("is-upgraded")
        }
    }, MaterialSwitch.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundMouseUpHandler), this.inputElement_.removeEventListener("change", this.boundChangeHandler), this.inputElement_.removeEventListener("focus", this.boundFocusHandler), this.inputElement_.removeEventListener("blur", this.boundBlurHandler), this.element_.removeEventListener("mouseup", this.boundMouseUpHandler)
    }, componentHandler.register({
        constructor: MaterialSwitch,
        classAsString: "MaterialSwitch",
        cssClass: "mdl-js-switch",
        widget: !0
    }), MaterialTabs.prototype.Constant_ = {}, MaterialTabs.prototype.CssClasses_ = {
        TAB_CLASS: "mdl-tabs__tab",
        PANEL_CLASS: "mdl-tabs__panel",
        ACTIVE_CLASS: "is-active",
        UPGRADED_CLASS: "is-upgraded",
        MDL_JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
        MDL_RIPPLE_CONTAINER: "mdl-tabs__ripple-container",
        MDL_RIPPLE: "mdl-ripple",
        MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events"
    }, MaterialTabs.prototype.initTabs_ = function (t) {
        "use strict";
        this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT) && this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS), this.tabs_ = this.element_.querySelectorAll("." + this.CssClasses_.TAB_CLASS), this.panels_ = this.element_.querySelectorAll("." + this.CssClasses_.PANEL_CLASS);
        for (var e = 0; e < this.tabs_.length; e++) new MaterialTab(this.tabs_[e], this);
        this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)
    }, MaterialTabs.prototype.resetTabState_ = function () {
        "use strict";
        for (var t = 0; t < this.tabs_.length; t++) this.tabs_[t].classList.remove(this.CssClasses_.ACTIVE_CLASS)
    }, MaterialTabs.prototype.resetPanelState_ = function () {
        "use strict";
        for (var t = 0; t < this.panels_.length; t++) this.panels_[t].classList.remove(this.CssClasses_.ACTIVE_CLASS)
    }, MaterialTabs.prototype.init = function () {
        "use strict";
        this.element_ && this.initTabs_()
    }, componentHandler.register({
        constructor: MaterialTabs,
        classAsString: "MaterialTabs",
        cssClass: "mdl-js-tabs"
    }), MaterialTextfield.prototype.Constant_ = {
        NO_MAX_ROWS: -1,
        MAX_ROWS_ATTRIBUTE: "maxrows"
    }, MaterialTextfield.prototype.CssClasses_ = {
        LABEL: "mdl-textfield__label",
        INPUT: "mdl-textfield__input",
        IS_DIRTY: "is-dirty",
        IS_FOCUSED: "is-focused",
        IS_DISABLED: "is-disabled",
        IS_INVALID: "is-invalid",
        IS_UPGRADED: "is-upgraded"
    }, MaterialTextfield.prototype.onKeyDown_ = function (t) {
        "use strict";
        var e = t.target.value.split("\n").length;
        13 === t.keyCode && e >= this.maxRows && t.preventDefault()
    }, MaterialTextfield.prototype.onFocus_ = function (t) {
        "use strict";
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, MaterialTextfield.prototype.onBlur_ = function (t) {
        "use strict";
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, MaterialTextfield.prototype.updateClasses_ = function () {
        "use strict";
        this.checkDisabled(), this.checkValidity(), this.checkDirty()
    }, MaterialTextfield.prototype.checkDisabled = function () {
        "use strict";
        this.input_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, MaterialTextfield.prototype.checkValidity = function () {
        "use strict";
        this.input_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID)
    }, MaterialTextfield.prototype.checkDirty = function () {
        "use strict";
        this.input_.value && this.input_.value.length > 0 ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
    }, MaterialTextfield.prototype.disable = function () {
        "use strict";
        this.input_.disabled = !0, this.updateClasses_()
    }, MaterialTextfield.prototype.enable = function () {
        "use strict";
        this.input_.disabled = !1, this.updateClasses_()
    }, MaterialTextfield.prototype.change = function (t) {
        "use strict";
        t && (this.input_.value = t), this.updateClasses_()
    }, MaterialTextfield.prototype.init = function () {
        "use strict";
        this.element_ && (this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL), this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.input_ && (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (this.maxRows = this.Constant_.NO_MAX_ROWS)), this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.input_.addEventListener("input", this.boundUpdateClassesHandler), this.input_.addEventListener("focus", this.boundFocusHandler), this.input_.addEventListener("blur", this.boundBlurHandler), this.maxRows !== this.Constant_.NO_MAX_ROWS && (this.boundKeyDownHandler = this.onKeyDown_.bind(this), this.input_.addEventListener("keydown", this.boundKeyDownHandler)), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)))
    }, MaterialTextfield.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.input_.removeEventListener("input", this.boundUpdateClassesHandler), this.input_.removeEventListener("focus", this.boundFocusHandler), this.input_.removeEventListener("blur", this.boundBlurHandler), this.boundKeyDownHandler && this.input_.removeEventListener("keydown", this.boundKeyDownHandler)
    }, componentHandler.register({
        constructor: MaterialTextfield,
        classAsString: "MaterialTextfield",
        cssClass: "mdl-js-textfield",
        widget: !0
    }), MaterialTooltip.prototype.Constant_ = {}, MaterialTooltip.prototype.CssClasses_ = {
        IS_ACTIVE: "is-active"
    }, MaterialTooltip.prototype.handleMouseEnter_ = function (t) {
        "use strict";
        t.stopPropagation();
        var e = t.target.getBoundingClientRect(),
            s = e.left + e.width / 2,
            i = -1 * (this.element_.offsetWidth / 2);
        0 > s + i ? (this.element_.style.left = 0, this.element_.style.marginLeft = 0) : (this.element_.style.left = s + "px", this.element_.style.marginLeft = i + "px"), this.element_.style.top = e.top + e.height + 10 + "px", this.element_.classList.add(this.CssClasses_.IS_ACTIVE), window.addEventListener("scroll", this.boundMouseLeaveHandler, !1), window.addEventListener("touchmove", this.boundMouseLeaveHandler, !1)
    }, MaterialTooltip.prototype.handleMouseLeave_ = function (t) {
        "use strict";
        t.stopPropagation(), this.element_.classList.remove(this.CssClasses_.IS_ACTIVE), window.removeEventListener("scroll", this.boundMouseLeaveHandler), window.removeEventListener("touchmove", this.boundMouseLeaveHandler, !1)
    }, MaterialTooltip.prototype.init = function () {
        "use strict";
        if (this.element_) {
            var t = this.element_.getAttribute("for");
            t && (this.forElement_ = document.getElementById(t)), this.forElement_ && (this.forElement_.getAttribute("tabindex") || this.forElement_.setAttribute("tabindex", "0"), this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this), this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this), this.forElement_.addEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("click", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("blur", this.boundMouseLeaveHandler), this.forElement_.addEventListener("touchstart", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("mouseleave", this.boundMouseLeaveHandler))
        }
    }, MaterialTooltip.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.forElement_ && (this.forElement_.removeEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("click", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("touchstart", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("mouseleave", this.boundMouseLeaveHandler))
    }, componentHandler.register({
        constructor: MaterialTooltip,
        classAsString: "MaterialTooltip",
        cssClass: "mdl-tooltip"
    }), MaterialLayout.prototype.Constant_ = {
        MAX_WIDTH: "(max-width: 1024px)",
        TAB_SCROLL_PIXELS: 100,
        MENU_ICON: "menu",
        CHEVRON_LEFT: "chevron_left",
        CHEVRON_RIGHT: "chevron_right"
    }, MaterialLayout.prototype.Mode_ = {
        STANDARD: 0,
        SEAMED: 1,
        WATERFALL: 2,
        SCROLL: 3
    }, MaterialLayout.prototype.CssClasses_ = {
        CONTAINER: "mdl-layout__container",
        HEADER: "mdl-layout__header",
        DRAWER: "mdl-layout__drawer",
        CONTENT: "mdl-layout__content",
        DRAWER_BTN: "mdl-layout__drawer-button",
        ICON: "material-icons",
        JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
        RIPPLE_CONTAINER: "mdl-layout__tab-ripple-container",
        RIPPLE: "mdl-ripple",
        RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        HEADER_SEAMED: "mdl-layout__header--seamed",
        HEADER_WATERFALL: "mdl-layout__header--waterfall",
        HEADER_SCROLL: "mdl-layout__header--scroll",
        FIXED_HEADER: "mdl-layout--fixed-header",
        OBFUSCATOR: "mdl-layout__obfuscator",
        TAB_BAR: "mdl-layout__tab-bar",
        TAB_CONTAINER: "mdl-layout__tab-bar-container",
        TAB: "mdl-layout__tab",
        TAB_BAR_BUTTON: "mdl-layout__tab-bar-button",
        TAB_BAR_LEFT_BUTTON: "mdl-layout__tab-bar-left-button",
        TAB_BAR_RIGHT_BUTTON: "mdl-layout__tab-bar-right-button",
        PANEL: "mdl-layout__tab-panel",
        HAS_DRAWER: "has-drawer",
        HAS_TABS: "has-tabs",
        HAS_SCROLLING_HEADER: "has-scrolling-header",
        CASTING_SHADOW: "is-casting-shadow",
        IS_COMPACT: "is-compact",
        IS_SMALL_SCREEN: "is-small-screen",
        IS_DRAWER_OPEN: "is-visible",
        IS_ACTIVE: "is-active",
        IS_UPGRADED: "is-upgraded",
        IS_ANIMATING: "is-animating",
        ON_LARGE_SCREEN: "mdl-layout--large-screen-only",
        ON_SMALL_SCREEN: "mdl-layout--small-screen-only"
    }, MaterialLayout.prototype.contentScrollHandler_ = function () {
        "use strict";
        this.header_.classList.contains(this.CssClasses_.IS_ANIMATING) || (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT) ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.header_.classList.add(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING)) : this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING)))
    }, MaterialLayout.prototype.screenSizeHandler_ = function () {
        "use strict";
        this.screenSizeMediaQuery_.matches ? this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN) : (this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN), this.drawer_ && this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN))
    }, MaterialLayout.prototype.drawerToggleHandler_ = function () {
        "use strict";
        this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN)
    }, MaterialLayout.prototype.headerTransitionEndHandler = function () {
        "use strict";
        this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)
    }, MaterialLayout.prototype.headerClickHandler = function () {
        "use strict";
        this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
    }, MaterialLayout.prototype.resetTabState_ = function (t) {
        "use strict";
        for (var e = 0; e < t.length; e++) t[e].classList.remove(this.CssClasses_.IS_ACTIVE)
    }, MaterialLayout.prototype.resetPanelState_ = function (t) {
        "use strict";
        for (var e = 0; e < t.length; e++) t[e].classList.remove(this.CssClasses_.IS_ACTIVE)
    }, MaterialLayout.prototype.init = function () {
        "use strict";
        if (this.element_) {
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_);
            for (var e = this.element_.childNodes, s = 0; s < e.length; s++) {
                var i = e[s];
                i.classList && i.classList.contains(this.CssClasses_.HEADER) && (this.header_ = i), i.classList && i.classList.contains(this.CssClasses_.DRAWER) && (this.drawer_ = i), i.classList && i.classList.contains(this.CssClasses_.CONTENT) && (this.content_ = i)
            }
            this.header_ && (this.tabBar_ = this.header_.querySelector("." + this.CssClasses_.TAB_BAR));
            var n = this.Mode_.STANDARD;
            if (this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH), this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)), this.screenSizeHandler_(), this.header_ && (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED) ? n = this.Mode_.SEAMED : this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL) ? (n = this.Mode_.WATERFALL, this.header_.addEventListener("transitionend", this.headerTransitionEndHandler.bind(this)), this.header_.addEventListener("click", this.headerClickHandler.bind(this))) : this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL) && (n = this.Mode_.SCROLL, t.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)), n === this.Mode_.STANDARD ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)) : n === this.Mode_.SEAMED || n === this.Mode_.SCROLL ? (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)) : n === this.Mode_.WATERFALL && (this.content_.addEventListener("scroll", this.contentScrollHandler_.bind(this)), this.contentScrollHandler_())), this.drawer_) {
                var a = document.createElement("div");
                a.classList.add(this.CssClasses_.DRAWER_BTN), this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN) ? a.classList.add(this.CssClasses_.ON_LARGE_SCREEN) : this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN) && a.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
                var o = document.createElement("i");
                o.classList.add(this.CssClasses_.ICON), o.textContent = this.Constant_.MENU_ICON, a.appendChild(o), a.addEventListener("click", this.drawerToggleHandler_.bind(this)), this.element_.classList.add(this.CssClasses_.HAS_DRAWER), this.element_.classList.contains(this.CssClasses_.FIXED_HEADER) ? this.header_.insertBefore(a, this.header_.firstChild) : this.element_.insertBefore(a, this.content_);
                var r = document.createElement("div");
                r.classList.add(this.CssClasses_.OBFUSCATOR), this.element_.appendChild(r), r.addEventListener("click", this.drawerToggleHandler_.bind(this))
            }
            if (this.header_ && this.tabBar_) {
                this.element_.classList.add(this.CssClasses_.HAS_TABS);
                var l = document.createElement("div");
                l.classList.add(this.CssClasses_.TAB_CONTAINER), this.header_.insertBefore(l, this.tabBar_), this.header_.removeChild(this.tabBar_);
                var h = document.createElement("div");
                h.classList.add(this.CssClasses_.TAB_BAR_BUTTON), h.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
                var d = document.createElement("i");
                d.classList.add(this.CssClasses_.ICON), d.textContent = this.Constant_.CHEVRON_LEFT, h.appendChild(d), h.addEventListener("click", function () {
                    this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS
                }.bind(this));
                var c = document.createElement("div");
                c.classList.add(this.CssClasses_.TAB_BAR_BUTTON), c.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
                var p = document.createElement("i");
                p.classList.add(this.CssClasses_.ICON), p.textContent = this.Constant_.CHEVRON_RIGHT, c.appendChild(p), c.addEventListener("click", function () {
                    this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS
                }.bind(this)), l.appendChild(h), l.appendChild(this.tabBar_), l.appendChild(c);
                var u = function () {
                    this.tabBar_.scrollLeft > 0 ? h.classList.add(this.CssClasses_.IS_ACTIVE) : h.classList.remove(this.CssClasses_.IS_ACTIVE), this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth ? c.classList.add(this.CssClasses_.IS_ACTIVE) : c.classList.remove(this.CssClasses_.IS_ACTIVE)
                }.bind(this);
                this.tabBar_.addEventListener("scroll", u), u(), this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT) && this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                for (var _ = this.tabBar_.querySelectorAll("." + this.CssClasses_.TAB), m = this.content_.querySelectorAll("." + this.CssClasses_.PANEL), f = 0; f < _.length; f++) new MaterialLayoutTab(_[f], _, m, this)
            }
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, componentHandler.register({
        constructor: MaterialLayout,
        classAsString: "MaterialLayout",
        cssClass: "mdl-js-layout"
    }), MaterialDataTable.prototype.Constant_ = {}, MaterialDataTable.prototype.CssClasses_ = {
        DATA_TABLE: "mdl-data-table",
        SELECTABLE: "mdl-data-table--selectable",
        IS_SELECTED: "is-selected",
        IS_UPGRADED: "is-upgraded"
    }, MaterialDataTable.prototype.selectRow_ = function (t, e, s) {
        "use strict";
        return e ? function () {
            t.checked ? e.classList.add(this.CssClasses_.IS_SELECTED) : e.classList.remove(this.CssClasses_.IS_SELECTED)
        }.bind(this) : s ? function () {
            var e, i;
            if (t.checked)
                for (e = 0; e < s.length; e++) i = s[e].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.check(), s[e].classList.add(this.CssClasses_.IS_SELECTED);
            else
                for (e = 0; e < s.length; e++) i = s[e].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.uncheck(), s[e].classList.remove(this.CssClasses_.IS_SELECTED)
        }.bind(this) : void 0
    }, MaterialDataTable.prototype.createCheckbox_ = function (t, e) {
        "use strict";
        var s = document.createElement("label");
        s.classList.add("mdl-checkbox"), s.classList.add("mdl-js-checkbox"), s.classList.add("mdl-js-ripple-effect"), s.classList.add("mdl-data-table__select");
        var i = document.createElement("input");
        return i.type = "checkbox", i.classList.add("mdl-checkbox__input"), t ? i.addEventListener("change", this.selectRow_(i, t)) : e && i.addEventListener("change", this.selectRow_(i, null, e)), s.appendChild(i), componentHandler.upgradeElement(s, "MaterialCheckbox"), s
    }, MaterialDataTable.prototype.init = function () {
        "use strict";
        if (this.element_) {
            var t = this.element_.querySelector("th"),
                e = this.element_.querySelector("tbody").querySelectorAll("tr");
            if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
                var s = document.createElement("th"),
                    i = this.createCheckbox_(null, e);
                s.appendChild(i), t.parentElement.insertBefore(s, t);
                for (var n = 0; n < e.length; n++) {
                    var a = e[n].querySelector("td");
                    if (a) {
                        var o = document.createElement("td"),
                            r = this.createCheckbox_(e[n]);
                        o.appendChild(r), e[n].insertBefore(o, a)
                    }
                }
            }
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
    }, componentHandler.register({
        constructor: MaterialDataTable,
        classAsString: "MaterialDataTable",
        cssClass: "mdl-js-data-table"
    }), MaterialRipple.prototype.Constant_ = {
        INITIAL_SCALE: "scale(0.0001, 0.0001)",
        INITIAL_SIZE: "1px",
        INITIAL_OPACITY: "0.4",
        FINAL_OPACITY: "0",
        FINAL_SCALE: ""
    }, MaterialRipple.prototype.CssClasses_ = {
        RIPPLE_CENTER: "mdl-ripple--center",
        RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
        RIPPLE: "mdl-ripple",
        IS_ANIMATING: "is-animating",
        IS_VISIBLE: "is-visible"
    }, MaterialRipple.prototype.downHandler_ = function (t) {
        "use strict";
        if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
            var e = this.element_.getBoundingClientRect();
            this.boundHeight = e.height, this.boundWidth = e.width, this.rippleSize_ = 2 * Math.sqrt(e.width * e.width + e.height * e.height) + 2, this.rippleElement_.style.width = this.rippleSize_ + "px", this.rippleElement_.style.height = this.rippleSize_ + "px"
        }
        if (this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE), "mousedown" === t.type && this.ignoringMouseDown_) this.ignoringMouseDown_ = !1;
        else {
            "touchstart" === t.type && (this.ignoringMouseDown_ = !0);
            var s = this.getFrameCount();
            if (s > 0) return;
            this.setFrameCount(1);
            var i, n, a = t.currentTarget.getBoundingClientRect();
            if (0 === t.clientX && 0 === t.clientY) i = Math.round(a.width / 2), n = Math.round(a.height / 2);
            else {
                var o = t.clientX ? t.clientX : t.touches[0].clientX,
                    r = t.clientY ? t.clientY : t.touches[0].clientY;
                i = Math.round(o - a.left), n = Math.round(r - a.top)
            }
            this.setRippleXY(i, n), this.setRippleStyles(!0), window.requestAnimationFrame(this.animFrameHandler.bind(this))
        }
    }, MaterialRipple.prototype.upHandler_ = function (t) {
        "use strict";
        t && 2 !== t.detail && this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)
    }, MaterialRipple.prototype.init = function () {
        "use strict";
        if (this.element_) {
            var t = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
            this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS) || (this.rippleElement_ = this.element_.querySelector("." + this.CssClasses_.RIPPLE), this.frameCount_ = 0, this.rippleSize_ = 0, this.x_ = 0, this.y_ = 0, this.ignoringMouseDown_ = !1, this.boundDownHandler = this.downHandler_.bind(this), this.element_.addEventListener("mousedown", this.boundDownHandler), this.element_.addEventListener("touchstart", this.boundDownHandler), this.boundUpHandler = this.upHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundUpHandler), this.element_.addEventListener("mouseleave", this.boundUpHandler), this.element_.addEventListener("touchend", this.boundUpHandler), this.element_.addEventListener("blur", this.boundUpHandler), this.getFrameCount = function () {
                return this.frameCount_
            }, this.setFrameCount = function (t) {
                this.frameCount_ = t
            }, this.getRippleElement = function () {
                return this.rippleElement_
            }, this.setRippleXY = function (t, e) {
                this.x_ = t, this.y_ = e
            }, this.setRippleStyles = function (e) {
                if (null !== this.rippleElement_) {
                    var s, i, n, a = "translate(" + this.x_ + "px, " + this.y_ + "px)";
                    e ? (i = this.Constant_.INITIAL_SCALE, n = this.Constant_.INITIAL_SIZE) : (i = this.Constant_.FINAL_SCALE, n = this.rippleSize_ + "px", t && (a = "translate(" + this.boundWidth / 2 + "px, " + this.boundHeight / 2 + "px)")), s = "translate(-50%, -50%) " + a + i, this.rippleElement_.style.webkitTransform = s, this.rippleElement_.style.msTransform = s, this.rippleElement_.style.transform = s, e ? this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING) : this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)
                }
            }, this.animFrameHandler = function () {
                this.frameCount_-- > 0 ? window.requestAnimationFrame(this.animFrameHandler.bind(this)) : this.setRippleStyles(!1)
            })
        }
    }, MaterialRipple.prototype.mdlDowngrade_ = function () {
        "use strict";
        this.element_.removeEventListener("mousedown", this.boundDownHandler), this.element_.removeEventListener("touchstart", this.boundDownHandler), this.element_.removeEventListener("mouseup", this.boundUpHandler), this.element_.removeEventListener("mouseleave", this.boundUpHandler), this.element_.removeEventListener("touchend", this.boundUpHandler), this.element_.removeEventListener("blur", this.boundUpHandler)
    }, componentHandler.register({
        constructor: MaterialRipple,
        classAsString: "MaterialRipple",
        cssClass: "mdl-js-ripple-effect",
        widget: !1
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var s in e)
            if (void 0 !== t.style[s]) return {
                end: e[s]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var s = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            s = !0
        });
        var n = function () {
            s || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var s = t(this),
                n = s.data("bs.alert");
            n || s.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(s)
        })
    }
    var s = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", s, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function (e) {
        function s() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            n = i.attr("data-target");
        n || (n = i.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(n);
        e && e.preventDefault(), a.length || (a = i.hasClass("alert") ? i : i.parent()), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", s, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.button"),
                a = "object" == typeof e && e;
            n || i.data("bs.button", n = new s(this, a)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }
    var s = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.isLoading = !1
    };
    s.VERSION = "3.2.0", s.DEFAULTS = {
        loadingText: "loading..."
    }, s.prototype.setState = function (e) {
        var s = "disabled",
            i = this.$element,
            n = i.is("input") ? "val" : "html",
            a = i.data();
        e += "Text", null == a.resetText && i.data("resetText", i[n]()), i[n](null == a[e] ? this.options[e] : a[e]), setTimeout(t.proxy(function () {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(s).attr(s, s)) : this.isLoading && (this.isLoading = !1, i.removeClass(s).removeAttr(s))
        }, this), 0)
    }, s.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var s = this.$element.find("input");
            "radio" == s.prop("type") && (s.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && s.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = s, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (s) {
        var i = t(s.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), s.preventDefault()
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.carousel"),
                a = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : a.slide;
            n || i.data("bs.carousel", n = new s(this, a)), "number" == typeof e ? n.to(e) : o ? n[o]() : a.interval && n.pause().cycle()
        })
    }
    var s = function (e, s) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)),
            this.$indicators = this.$element.find(".carousel-indicators"), this.options = s, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    s.VERSION = "3.2.0", s.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, s.prototype.keydown = function (t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, s.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, s.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, s.prototype.to = function (e) {
        var s = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            s.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, s.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, s.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, s.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, s.prototype.slide = function (e, s) {
        var i = this.$element.find(".item.active"),
            n = s || i[e](),
            a = this.interval,
            o = "next" == e ? "left" : "right",
            r = "next" == e ? "first" : "last",
            l = this;
        if (!n.length) {
            if (!this.options.wrap) return;
            n = this.$element.find(".item")[r]()
        }
        if (n.hasClass("active")) return this.sliding = !1;
        var h = n[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: o
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: o
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, i.addClass(o), n.addClass(o), i.one("bsTransitionEnd", function () {
                n.removeClass([e, o].join(" ")).addClass("active"), i.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = s, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (s) {
        var i, n = t(this),
            a = t(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (a.hasClass("carousel")) {
            var o = t.extend({}, a.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (o.interval = !1), e.call(a, o), r && a.data("bs.carousel").to(r), s.preventDefault()
        }
    }), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var s = t(this);
            e.call(s, s.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.collapse"),
                a = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && a.toggle && "show" == e && (e = !e), n || i.data("bs.collapse", n = new s(this, a)), "string" == typeof e && n[e]()
        })
    }
    var s = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    s.VERSION = "3.2.0", s.DEFAULTS = {
        toggle: !0
    }, s.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, s.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var s = t.Event("show.bs.collapse");
            if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var n = i.data("bs.collapse");
                    if (n && n.transitioning) return;
                    e.call(i, "hide"), n || i.data("bs.collapse", null)
                }
                var a = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[a](0), this.transitioning = 1;
                var o = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                var r = t.camelCase(["scroll", a].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350)[a](this.$element[0][r])
            }
        }
    }, s.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var s = this.dimension();
                this.$element[s](this.$element[s]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[s](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, s.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (s) {
        var i, n = t(this),
            a = n.attr("data-target") || s.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(a),
            r = o.data("bs.collapse"),
            l = r ? "toggle" : n.data(),
            h = n.attr("data-parent"),
            d = h && t(h);
        r && r.transitioning || (d && d.find('[data-toggle="collapse"][data-parent="' + h + '"]').not(n).addClass("collapsed"), n[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(o, l)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(n).remove(), t(a).each(function () {
            var i = s(t(this)),
                n = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", n)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", n))
        }))
    }

    function s(e) {
        var s = e.attr("data-target");
        s || (s = e.attr("href"), s = s && /#[A-Za-z]/.test(s) && s.replace(/.*(?=#[^\s]*$)/, ""));
        var i = s && t(s);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function () {
            var s = t(this),
                i = s.data("bs.dropdown");
            i || s.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(s)
        })
    }
    var n = ".dropdown-backdrop",
        a = '[data-toggle="dropdown"]',
        o = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.2.0", o.prototype.toggle = function (i) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var a = s(n),
                o = a.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {
                    relatedTarget: this
                };
                if (a.trigger(i = t.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
                n.trigger("focus"), a.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, o.prototype.keydown = function (e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var n = s(i),
                    o = n.hasClass("open");
                if (!o || o && 27 == e.keyCode) return 27 == e.which && n.find(a).trigger("focus"), i.trigger("click");
                var r = " li:not(.divider):visible a",
                    l = n.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (l.length) {
                    var h = l.index(l.filter(":focus"));
                    38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, o.prototype.toggle).on("keydown.bs.dropdown.data-api", a + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var n = t(this),
                a = n.data("bs.modal"),
                o = t.extend({}, s.DEFAULTS, n.data(), "object" == typeof e && e);
            a || n.data("bs.modal", a = new s(this, o)), "string" == typeof e ? a[e](i) : o.show && a.show(i)
        })
    }
    var s = function (e, s) {
        this.options = s, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    s.VERSION = "3.2.0", s.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, s.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, s.prototype.show = function (e) {
        var s = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
            var i = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), i && s.$element[0].offsetWidth, s.$element.addClass("in").attr("aria-hidden", !1), s.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? s.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                s.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(300) : s.$element.trigger("focus").trigger(n)
        }))
    }, s.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, s.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, s.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, s.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$element.trigger("hidden.bs.modal")
        })
    }, s.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, s.prototype.backdrop = function (e) {
        var s = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                s.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a()
        } else e && e()
    }, s.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, s.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, s.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, s.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = s, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (s) {
        var i = t(this),
            n = i.attr("href"),
            a = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = a.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(n) && n
            }, a.data(), i.data());
        i.is("a") && s.preventDefault(), a.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(a, o, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.tooltip"),
                a = "object" == typeof e && e;
            (n || "destroy" != e) && (n || i.data("bs.tooltip", n = new s(this, a)), "string" == typeof e && n[e]())
        })
    }
    var s = function (t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    s.VERSION = "3.2.0", s.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, s.prototype.init = function (e, s, i) {
        this.enabled = !0, this.type = e, this.$element = t(s), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var n = this.options.trigger.split(" "), a = n.length; a--;) {
            var o = n[a];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var r = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, s.prototype.getDefaults = function () {
        return s.DEFAULTS
    }, s.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, s.prototype.getDelegateOptions = function () {
        var e = {},
            s = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            s[t] != i && (e[t] = i)
        }), e
    }, s.prototype.enter = function (e) {
        var s = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return s || (s = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, s)), clearTimeout(s.timeout), s.hoverState = "in", s.options.delay && s.options.delay.show ? void(s.timeout = setTimeout(function () {
            "in" == s.hoverState && s.show()
        }, s.options.delay.show)) : s.show()
    }, s.prototype.leave = function (e) {
        var s = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return s || (s = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, s)), clearTimeout(s.timeout), s.hoverState = "out", s.options.delay && s.options.delay.hide ? void(s.timeout = setTimeout(function () {
            "out" == s.hoverState && s.hide()
        }, s.options.delay.hide)) : s.hide()
    }, s.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var s = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !s) return;
            var i = this,
                n = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), n.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && n.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                r = /\s?auto?\s?/i,
                l = r.test(o);
            l && (o = o.replace(r, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var h = this.getPosition(),
                d = n[0].offsetWidth,
                c = n[0].offsetHeight;
            if (l) {
                var p = o,
                    u = this.$element.parent(),
                    _ = this.getPosition(u);
                o = "bottom" == o && h.top + h.height + c - _.scroll > _.height ? "top" : "top" == o && h.top - _.scroll - c < 0 ? "bottom" : "right" == o && h.right + d > _.width ? "left" : "left" == o && h.left - d < _.left ? "right" : o, n.removeClass(p).addClass(o)
            }
            var m = this.getCalculatedOffset(o, h, d, c);
            this.applyPlacement(m, o);
            var f = function () {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        }
    }, s.prototype.applyPlacement = function (e, s) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            a = i[0].offsetHeight,
            o = parseInt(i.css("margin-top"), 10),
            r = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(r) && (r = 0), e.top = e.top + o, e.left = e.left + r, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            h = i[0].offsetHeight;
        "top" == s && h != a && (e.top = e.top + a - h);
        var d = this.getViewportAdjustedDelta(s, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var c = d.left ? 2 * d.left - n + l : 2 * d.top - a + h,
            p = d.left ? "left" : "top",
            u = d.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(c, i[0][u], p)
    }, s.prototype.replaceArrow = function (t, e, s) {
        this.arrow().css(s, t ? 50 * (1 - t / e) + "%" : "")
    }, s.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, s.prototype.hide = function () {
        function e() {
            "in" != s.hoverState && i.detach(), s.$element.trigger("hidden.bs." + s.type)
        }
        var s = this,
            i = this.tip(),
            n = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(n), n.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, s.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, s.prototype.hasContent = function () {
        return this.getTitle()
    }, s.prototype.getPosition = function (e) {
        e = e || this.$element;
        var s = e[0],
            i = "BODY" == s.tagName;
        return t.extend({}, "function" == typeof s.getBoundingClientRect ? s.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, s.prototype.getCalculatedOffset = function (t, e, s, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - s / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - s / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - s
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, s.prototype.getViewportAdjustedDelta = function (t, e, s, i) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var a = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - a - o.scroll,
                l = e.top + a - o.scroll + i;
            r < o.top ? n.top = o.top - r : l > o.top + o.height && (n.top = o.top + o.height - l)
        } else {
            var h = e.left - a,
                d = e.left + a + s;
            h < o.left ? n.left = o.left - h : d > o.width && (n.left = o.left + o.width - d)
        }
        return n
    }, s.prototype.getTitle = function () {
        var t, e = this.$element,
            s = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof s.title ? s.title.call(e[0]) : s.title)
    }, s.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, s.prototype.tip = function () {
        return this.$tip = this.$tip || t(this.options.template)
    }, s.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, s.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, s.prototype.enable = function () {
        this.enabled = !0
    }, s.prototype.disable = function () {
        this.enabled = !1
    }, s.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, s.prototype.toggle = function (e) {
        var s = this;
        e && (s = t(e.currentTarget).data("bs." + this.type), s || (s = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, s))), s.tip().hasClass("in") ? s.leave(s) : s.enter(s)
    }, s.prototype.destroy = function () {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = s, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.popover"),
                a = "object" == typeof e && e;
            (n || "destroy" != e) && (n || i.data("bs.popover", n = new s(this, a)), "string" == typeof e && n[e]())
        })
    }
    var s = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.2.0", s.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), s.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), s.prototype.constructor = s, s.prototype.getDefaults = function () {
        return s.DEFAULTS
    }, s.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            s = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof s ? "html" : "append" : "text"](s), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, s.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = s, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(s, i) {
        var n = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(s).is("body") ? window : s), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", n), this.refresh(), this.process()
    }

    function s(s) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.scrollspy"),
                a = "object" == typeof s && s;
            n || i.data("bs.scrollspy", n = new e(this, a)), "string" == typeof s && n[s]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = "offset",
            s = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", s = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function () {
            var i = t(this),
                n = i.data("target") || i.attr("href"),
                a = /^#./.test(n) && t(n);
            return a && a.length && a.is(":visible") && [[a[e]().top + s, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            s = this.getScrollHeight(),
            i = this.options.offset + s - this.$scrollElement.height(),
            n = this.offsets,
            a = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != s && this.refresh(), e >= i) return o != (t = a[a.length - 1]) && this.activate(t);
        if (o && e <= n[0]) return o != (t = a[0]) && this.activate(t);
        for (t = n.length; t--;) o != a[t] && e >= n[t] && (!n[t + 1] || e <= n[t + 1]) && this.activate(a[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var s = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(s).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = s, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            s.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.tab");
            n || i.data("bs.tab", n = new s(this)), "string" == typeof e && n[e]()
        })
    }
    var s = function (e) {
        this.element = t(e)
    };
    s.VERSION = "3.2.0", s.prototype.show = function () {
        var e = this.element,
            s = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = s.find(".active:last a")[0],
                a = t.Event("show.bs.tab", {
                    relatedTarget: n
                });
            if (e.trigger(a), !a.isDefaultPrevented()) {
                var o = t(i);
                this.activate(e.closest("li"), s), this.activate(o, o.parent(), function () {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n
                    })
                })
            }
        }
    }, s.prototype.activate = function (e, s, i) {
        function n() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var a = s.find("> .active"),
            o = i && t.support.transition && a.hasClass("fade");
        o ? a.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = s, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (s) {
        s.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                n = i.data("bs.affix"),
                a = "object" == typeof e && e;
            n || i.data("bs.affix", n = new s(this, a)), "string" == typeof e && n[e]()
        })
    }
    var s = function (e, i) {
        this.options = t.extend({}, s.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    s.VERSION = "3.2.0", s.RESET = "affix affix-top affix-bottom", s.DEFAULTS = {
        offset: 0,
        target: window
    }, s.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(s.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, s.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, s.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                n = this.$element.offset(),
                a = this.options.offset,
                o = a.top,
                r = a.bottom;
            "object" != typeof a && (r = o = a), "function" == typeof o && (o = a.top(this.$element)), "function" == typeof r && (r = a.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= n.top ? !1 : null != r && n.top + this.$element.height() >= e - r ? "bottom" : null != o && o >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var h = "affix" + (l ? "-" + l : ""),
                    d = t.Event(h + ".bs.affix");
                this.$element.trigger(d), d.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(s.RESET).addClass(h).trigger(t.Event(h.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - r
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = s, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var s = t(this),
                i = s.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(s, i)
        })
    })
}(jQuery);


//**********************************
//**********************************
//**********************************   Floating_Action_Button
//**********************************
//**********************************
$("#prime").click(function () {
    toggleFab()
});

//Toggle chat and links
function toggleFab() {
    $(".prime").toggleClass("is-active");
    $(".fab").toggleClass("is-visible");
}

//Rotate prime-i-add
 $('#prime').click(function(){
     var addbutton = $('.prime-i-add');
     alert(addbutton);
     if (addbutton.hasClass('prime-active')) {
         addbutton.addClass('prime-inactive');
         addbutton.removeClass('prime-active');
     } else {
         addbutton.addClass('prime-active');
         addbutton.removeClass('prime-inactive');
     }
 });

// Ripple effect
var target, ink, d, x, y;
$(".fab").click(function (t) {
    target = $(this)0 == target.find(".ink").length && target.prepend("<span class='ink'></span>"), ink = target.find(".ink"), ink.removeClass("animate"), ink.height() || ink.width() || (d = Math.max(target.outerWidth(), target.outerHeight()), ink.css({
        height: d,
        width: d
    })), x = t.pageX - target.offset().left - ink.width() / 2, y = t.pageY - target.offset().top - ink.height() / 2, ink.css({
        top: y + "px",
        left: x + "px"
    }).addClass("animate")
});

//**********************************
//**********************************
//**********************************   Sidebar_js
//**********************************
//**********************************

$(document).ready(function () {
    var t = $(".sidebar-overlay");
    $(".sidebar-toggle").on("click", function () {
        var e = $("#sidebar");
        e.toggleClass("open"), e.hasClass("sidebar-fixed-left") && e.hasClass("open") ? (t.addClass("active"), $(".MD-burger-layer").remove("MD-burger-line"), $(".MD-burger-layer").add("MD-burger-arrow")) : (t.removeClass("active"), $(".MD-burger-layer").removeClass("MD-burger-arrow"), $(".MD-burger-layer").addClass("MD-burger-line"))
    }), t.on("click", function () {
        $(this).removeClass("active"), $("#sidebar").removeClass("open"), $(".MD-burger-layer").removeClass("MD-burger-arrow"), $(".MD-burger-layer").addClass("MD-burger-line")
    })
}), $(document).ready(function () {
    var t = $("#sidebar"),
        e = $("#sidebar .sidebar-header"),
        i = (e.css("background-image"), $(".sidebar-toggle"));
    i.css("display", "initial"), $("body").css("display", "initial"), $("#sidebar-position").change(function () {
        var e = $(this).val();
        t.removeClass("sidebar-fixed-left").addClass(e).addClass("open"), "sidebar-fixed-left" == e && $(".sidebar-overlay").addClass("active")
    })
}),
function (t) {
    var e = t(".dropdown");
    e.on("show.bs.dropdown", function (e) {
        t(this).find(".dropdown-menu").first().stop(!0, !0).slideDown()
    }), e.on("hide.bs.dropdown", function (e) {
        t(this).find(".dropdown-menu").first().stop(!0, !0).slideUp()
    })
}(jQuery),
function (t) {
    jQuery.fn.removeClass = function (e) {
        if (e && "function" == typeof e.test)
            for (var s = 0, i = this.length; i > s; s++) {
                var n = this[s];
                if (1 === n.nodeType && n.className) {
                    for (var a = n.className.split(/\s+/), o = a.length; o--;) e.test(a[o]) && a.splice(o, 1);
                    n.className = jQuery.trim(a.join(" "))
                }
            } else t.call(this, e);
        return this
    }
}(jQuery.fn.removeClass);

//**********************************
//**********************************
//**********************************   Burder_js
//**********************************
//**********************************
function () {
    "use strict";
    document.querySelector(".MD-burger-icon").addEventListener("click", function () {
        var t;
        t = this.childNodes[1].classList, t.contains("MD-burger-arrow") ? (t.remove("MD-burger-arrow"), t.add("MD-burger-line")) : (t.remove("MD-burger-line"), t.add("MD-burger-arrow"))
    })
}();