$.getScript("/MicroJS/jquery-Micro-SVG.js"); (function($) {
    $.MicroSVGShow = function(showAreaSize, scaleType, setWinColor, setCoorXYtext, mgdpicTextSize, mgdtxtMove, extOpt) {
        var defaultW = 320,
        defaultH = 260;
        var defaultArea = $("body");
        if (!$.isArray(showAreaSize)) {
            showAreaSize = [{
                area: defaultArea,
                w: defaultW,
                h: defaultH
            }]
        }
        if ($.Micro.IsEmpty(showAreaSize[0].area)) {
            showAreaSize[0].area = defaultArea
        }
        if (showAreaSize[0].area.length == 0) {
            return true
        }
        if ($.Micro.IsEmpty(scaleType)) {
            scaleType = "js"
        }
        if ($.Micro.IsEmpty(setWinColor)) {
            setWinColor = 0
        }
        if ($.Micro.IsEmpty(setCoorXYtext)) {
            setCoorXYtext = 1
        }
        if ($.Micro.IsEmpty(mgdpicTextSize)) {
            mgdpicTextSize = 21
        }
        if ($.Micro.IsEmpty(mgdtxtMove)) {
            mgdtxtMove = 1
        }
        var diffID = false;
        var keepScale = false;
        if (extOpt) {
            diffID = extOpt.diffID;
            keepScale = extOpt.keepScale
        }
        var OuterTag = "parentOuter";
        var scaleCSSTag = "noLimitFSize";
        for (var i = 0; i < showAreaSize.length; i++) {
            showAreaSize[i].area.find("[id*='mBackGround']").remove();
            $.each(showAreaSize[i].area.find("svg[id!=" + mDrawSvgCanvasDefineID + "]:visible"),
            function(_index) {
                with($(this)) {
                    if (diffID) {
                        var newID = MicroDraw_NewUniqueID($("body"), "newsvg" + _index);
                        attr("id", newID)
                    }
                    if (mgdtxtMove == 1 && !keepScale) {
                        $.each(find('[mgdtxtbelongtoproperty="mgddowntxt"],[mgdtxtbelongtoproperty="mgduptxt"]'),
                        function() {
                            with($(this)) {
                                var frameID = attr("mgdtxtbelongto");
                                if ($("#" + frameID).length == 0) {
                                    return true
                                }
                                var _size = $.Micro_SVG.getSVGRect($("#" + frameID));
                                var _x = Number(find("text").attr("x")) + 3;
                                var _y = Number(find("text").attr("y")) + 2;
                                find("text").attr("x", _x);
                                if (attr("mgdtxtbelongtoproperty") == "mgddowntxt") {
                                    find("text").attr("y", _y)
                                }
                            }
                        })
                    }
                    if (scaleType == "css" && parents("[class=" + scaleCSSTag + "]").length > 0) {
                        var _html = parent().html();
                        var _Outer = parents("[class=" + OuterTag + "]");
                        appendTo(_Outer.parent());
                        _Outer.remove()
                    } else {
                        if (scaleType == "js" && parents("[class=" + OuterTag + "]").length > 0) {
                            return true
                        }
                    }
                    parent().addClass("PrintPict");
                    var changeObjs = $.Micro.MergeObjs([find("[mtype=custom_g][mgdbelongto]"), find("[mtype=" + mDrawFlag_Cornergdpic + "]")]);
                    if (!keepScale) {
                        $.each(changeObjs,
                        function() {
                            with($(this)) {
                                $.each(find("text"),
                                function() {
                                    $(this)[0].setAttribute("font-size", mgdpicTextSize)
                                });
                                if (mgdpicTextSize > 14) {
                                    var transform = attr("transform");
                                    transform = $.Micro.IsEmpty(transform) ? "": transform;
                                    attr("transform", "matrix(1,0,0,1,0,2) " + transform)
                                }
                            }
                        })
                    }
                    var areaW = Number(showAreaSize[i].w);
                    var areaH = Number(showAreaSize[i].h);
                    if (areaW == 0) {
                        areaW = defaultW
                    }
                    if (areaH == 0) {
                        areaH = defaultH
                    }
                    var svgId = attr("id");
                    get(0).removeAttribute("viewBox");
                    if (children().length == 1 && children().eq(0).get(0).tagName.toLowerCase() == "g") {
                        children().eq(0).get(0).removeAttribute("transform")
                    } else {
                        var newG = "<g>" + html() + "</g>";
                        html(newG)
                    }
                    var _this = children().eq(0);
                    if (_this.length == 0) {
                        return true
                    }
                    var _getGRect = $.Micro_SVG.getSVGRect(_this);
                    var _getSVGRect = $.Micro_SVG.getSVGRect($(this));
                    var gX = Number(_getGRect.x);
                    var gY = Number(_getGRect.y);
                    var svgX = Number(_getSVGRect.x);
                    var svgY = Number(_getSVGRect.y);
                    var gWidth = Number(_getGRect.width);
                    var gHeight = Number(_getGRect.height);
                    var margin = 18;
                    var matrixStr = ["matrix(1,0,0,1,", svgX - gX + margin, ",", svgY - gY + margin, ")"].join("");
                    var scale = $.Micro_SVG.getShowAreaScale({
                        w: areaW,
                        h: areaH
                    },
                    {
                        w: gWidth + margin * 2,
                        h: gHeight + margin * 2
                    });
                    if (scaleType == "js") {
                        _this.attr("transform", ["scale(" + scale + ")", matrixStr].join(" "));
                        attr("width", Math.ceil((gWidth + (margin + 9) * 2) * scale));
                        attr("height", Math.ceil((gHeight + (margin + 9) * 2) * scale));
                        var newOuter = $('<span class="' + OuterTag + '"></span>');
                        parent().append(newOuter);
                        appendTo(newOuter)
                    } else {
                        if (scaleType == "css") {
                            _this.attr("transform", matrixStr);
                            attr("width", Math.ceil(gWidth + margin * 2));
                            attr("height", Math.ceil(gHeight + margin * 2));
                            with(parent()) {
                                width(areaW);
                                height(areaH);
                                var newHTML = "";
                                newHTML += '<div class="' + OuterTag + '" style="width: ' + $.Micro.Oper_Sub([areaW], [$.Micro.Oper_Mul([_getGRect.width, scale])]) + 'px;">';
                                newHTML += '<div class="centerOuter"><div class="centerInner">';
                                newHTML += '<div class="' + scaleCSSTag + '" style="position:absolute;-webkit-transform-origin:0 0;-webkit-transform:scale(' + scale + ')">' + html() + "</div>";
                                newHTML += "</div></div></div>";
                                html(newHTML)
                            }
                        }
                    }
                    find("[ondblclick]").removeAttr("ondblclick");
                    find("[onclick]").removeAttr("onclick")
                }
                if (setCoorXYtext == 1) {
                    MicroDraw_setCoorXYtext(svgId, extOpt)
                }
                if ($("body[id=mainFrame]").length == 0) {
                    var tempSVG;
                    if ($("#" + svgId + "_HTML").length == 0) {
                        tempSVG = $('<div style="display:none"></div>');
                        tempSVG.insertAfter($("#" + svgId));
                        tempSVG.attr("id", svgId + "_HTML")
                    } else {
                        tempSVG = $("#" + svgId + "_HTML")
                    }
                    tempSVG.html($("#" + svgId).html())
                }
                if (keepScale) {
                    var oriSVG;
                    if ($("#" + svgId + "_oriSVG").length == 0) {
                        oriSVG = $('<div style="display:none;"></div>');
                        oriSVG.insertAfter($("#" + svgId));
                        oriSVG.attr("id", svgId + "_oriSVG")
                    } else {
                        oriSVG = $("#" + svgId + "_oriSVG")
                    }
                    oriSVG.html($("#" + svgId).prop("outerHTML"));
                    var hSVG = oriSVG.find("svg");
                    hSVG.removeAttr("id");
                    hSVG.find("[id]").removeAttr("id");
                    if (scaleType == "js") {
                        hSVG.attr("width", Math.ceil(Number(hSVG.attr("width")) / scale));
                        hSVG.attr("height", Math.ceil(Number(hSVG.attr("height")) / scale));
                        hSVG.children().eq(0).attr("transform", ["scale(1)", matrixStr].join(" "))
                    }
                }
                if (setWinColor == 0) {
                    MicroDraw_setWinColor(svgId, "white", "white", "white", 0)
                }
                $(this).find("[id]").removeAttr("id")
            })
        }
    };
    $.Micro_PRINT_SHOWCOLOR = function(area) {
        if ($.Micro.IsEmpty(area)) {
            area = $("body")
        }
        $("#PRINT_SHOWCOLOR_AREA").html("<input id=\"PRINT_SHOWCOLOR\" class=\"easyui-switchbutton\" data-options=\"onText:'原色显示',offText:'黑白显示', width:'102px'\">");
        $("#PRINT_SHOWCOLOR").switchbutton({
            onChange: function(checked) {
                $.each($("svg[id!=" + mDrawSvgCanvasDefineID + "]:visible"),
                function() {
                    svgId = $(this).attr("id");
                    var oriSVG = $("#" + svgId + "_HTML");
                    if (checked) {
                        $("#" + svgId).html($("#" + svgId + "_HTML").html())
                    } else {
                        $.each(area.find("svg[id!=" + mDrawSvgCanvasDefineID + "]:visible"),
                        function() {
                            MicroDraw_setWinColor($(this).attr("id"), "white", "white", "white", 0)
                        })
                    }
                })
            }
        })
    };
    $.Micro_PRINT_MONEY = function(area) {
        if ($.Micro.IsEmpty(area)) {
            area = $("body")
        }
        $("#PRINT_MONEY_AREA").html("<input id=\"PRINT_MONEY\" class=\"easyui-switchbutton\" checked data-options=\"onText:'显示金额',offText:'不显示金额', width:'102px'\">");
        $("#PRINT_MONEY").switchbutton({
            onChange: function(checked) {
                $.each(area.find("[tag=PRINT_MONEY]"),
                function() {
                    if (checked) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                })
            }
        })
    };
    $.Micro_PRINT_CREAT_WEIXINQRCODE = function() {
        $("#PRINT_CREAT_WEIXINQRCODE").click(function() {
            $("<div></div>").dialog({
                id: "PRINT_CREAT_WEIXINQRCODE_WIN",
                title: "生成微信二维码",
                href: "../MicroVerDraw/PRINT_CREAT_WEIXINQRCODE_WIN.html",
                height: 636,
                width: 576,
                modal: true,
                iconCls: "icon-man",
                buttons: [{
                    text: "确定",
                    iconCls: "icon-add",
                    handler: function() {
                        $("#PRINT_CREAT_WEIXINQRCODE_WIN").dialog("destroy")
                    }
                }],
                onClose: function() {
                    $("#PRINT_CREAT_WEIXINQRCODE_WIN").dialog("destroy")
                },
                onLoad: function() {
                    var qrcode = new QRCode("PRINT_CREAT_WEIXINQRCODE_WIN_AREA", {
                        width: 512,
                        height: 512
                    });
                    var currURL = location.href;
                    mCompanyId = getCompanyId(0);
                    if (currURL.indexOf("?") > -1) {
                        currURL += "&companyId=" + mCompanyId
                    } else {
                        currURL += "?companyId=" + mCompanyId
                    }
                    qrcode.makeCode(currURL);
                    var T_copyqrcode = setTimeout(function() {
                        Fun_copyqrcode()
                    },
                    0);
                    var Fun_copyqrcode = function() {
                        if (!$.Micro.IsEmpty($("#PRINT_CREAT_WEIXINQRCODE_WIN_AREA img").attr("src"))) {
                            window.clearTimeout(T_copyqrcode)
                        } else {
                            T_copyqrcode = setTimeout(function() {
                                Fun_copyqrcode()
                            },
                            50)
                        }
                    }
                }
            })
        })
    }
})(jQuery);
$(function(A) {
    mCompanyId = getCompanyId(0);
    if ($.Micro.IsEmpty(mCompanyId)) {
        mCompanyId = $.Micro.getQueryStr("companyId")
    }
    if ($.Micro.IsEmpty(mCompanyId)) {
        $("#PRINT_CREAT_WEIXINQRCODE").remove()
    }
    if ($("#PRINT_SHOWCOLOR_AREA").length > 0) {
        $.Micro_PRINT_SHOWCOLOR()
    }
    if ($("#PRINT_CREAT_WEIXINQRCODE").length > 0) {
        $.Micro_PRINT_CREAT_WEIXINQRCODE()
    }
    if ($("#PRINT_MONEY_AREA").length > 0) {
        $.Micro_PRINT_MONEY()
    } (function() {
        var B = $("body");
        $("#PRINT_TOTAL_AREA").html("<input id=\"PRINT_TOTAL\" class=\"easyui-switchbutton\" checked data-options=\"onText:'显示总计',offText:'不显示总计', width:'102px'\">");
        $("#PRINT_TOTAL").switchbutton({
            onChange: function(C) {
                if (C) {
                    $("#totalArea").show()
                } else {
                    $("#totalArea").hide()
                }
            }
        })
    })()
});