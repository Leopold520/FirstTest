function MicroXwin_isExistsXwin(B, A) {
    var C = "";
    $("#" + B + " [mtype='" + A + "']").each(function(D, E) {
        C = E.getAttribute("id")
    });
    return C
}
function MicroXwin_isTwoObjOverlap(F, a) {
    var W = "";
    var J = $("#" + F).get(0);
    var U = J.getAttribute("mtype");
    var L = $("#" + a).get(0);
    var A = L.getAttribute("mtype");
    var M = $(J).parents("[mtype=" + mDrawFlag_Win + "]").get(0);
    var Q = M.getAttribute("id");
    var K = $("#" + Q + ' [mtype="' + mDrawFlag_FrameRect + '"]')[0];
    var R = K.getAttribute("mwidth");
    var E = K.getAttribute("mheight");
    var C = MicroDraw_getXcxlValueByObjId(F, "O", "框宽度", "prid");
    var G = MicroDraw_getXcxlValueByObjId(F, "O", "框槽深度", "prid");
    var N = MicroDraw_getXcxlValueByObjId(F, "O", "普通中挺宽度", "prid");
    switch (U) {
    case mDrawFlag_FrameRect:
        switch (A) {
        case mDrawFlag_Custom_qj_rt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            W = T.toString() + "," + X.toString();
            break;
        case mDrawFlag_Custom_qj_rb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            W = T.toString() + "," + X.toString();
            break;
        case mDrawFlag_Custom_qj_lt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            W = T.toString() + "," + X.toString();
            break;
        case mDrawFlag_Custom_qj_lb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            W = T.toString() + "," + X.toString();
            break;
        default:
        }
        break;
    case mDrawFlag_TingH:
        var D = J.getAttribute("mx");
        var S = J.getAttribute("my");
        var B = J.getAttribute("mwidth");
        var P = J.getAttribute("mlid");
        var O = J.getAttribute("mrid");
        switch (A) {
        case mDrawFlag_Custom_qj_rt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(S) < Number(X) && Number(D) + Number(B) > Number(R) - Number(T)) {
                if (O == "") {
                    W = Number(D) + Number(B) - (Number(R) - Number(T))
                } else {
                    W = Number(D) + Number(B) - (Number(R) - Number(T)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        case mDrawFlag_Custom_qj_rb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(S) > (Number(E) - Number(X)) && Number(D) + Number(B) > Number(R) - Number(T)) {
                if (O == "") {
                    W = Number(D) + Number(B) - (Number(R) - Number(T))
                } else {
                    W = Number(D) + Number(B) - (Number(R) - Number(T)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        case mDrawFlag_Custom_qj_lt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(S) < Number(X) && Number(D) < Number(T)) {
                if (P == "") {
                    W = Number(T) - Number(D)
                } else {
                    W = Number(T) - Number(D) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        case mDrawFlag_Custom_qj_lb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(S) > (Number(E) - Number(X)) && Number(D) < Number(T)) {
                if (P == "") {
                    W = Number(T) - Number(D)
                } else {
                    W = Number(T) - Number(D) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        default:
        }
        break;
    case mDrawFlag_TingV:
        var D = J.getAttribute("mx");
        var S = J.getAttribute("my");
        var V = J.getAttribute("mheight");
        var I = J.getAttribute("mtid");
        var Y = J.getAttribute("mbid");
        switch (A) {
        case mDrawFlag_Custom_qj_rt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) > (Number(R) - Number(T)) && Number(S) < Number(X)) {
                if (I == "") {
                    W = Number(X) - Number(S)
                } else {
                    W = Number(X) - Number(S) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        case mDrawFlag_Custom_qj_rb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) > (Number(R) - Number(T)) && (Number(S) + Number(V)) > (Number(E) - Number(X))) {
                if (Y == "") {
                    W = Number(S) + Number(V) - (Number(E) - Number(X))
                } else {
                    W = Number(S) + Number(V) - (Number(E) - Number(X)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        case mDrawFlag_Custom_qj_lt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) < Number(T) && Number(S) < Number(X)) {
                if (I == "") {
                    W = Number(X) - Number(S)
                } else {
                    W = Number(X) - Number(S) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        case mDrawFlag_Custom_qj_lb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) < Number(T) && (Number(S) + Number(V)) > (Number(E) - Number(X))) {
                if (Y == "") {
                    W = Number(S) + Number(V) - (Number(E) - Number(X))
                } else {
                    W = Number(S) + Number(V) - (Number(E) - Number(X)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                return W
            }
            break;
        default:
        }
        break;
    case mDrawFlag_Glass:
        var D = J.getAttribute("mx");
        var S = J.getAttribute("my");
        var B = J.getAttribute("mwidth");
        var V = J.getAttribute("mheight");
        var P = J.getAttribute("mlid");
        var O = J.getAttribute("mrid");
        var I = J.getAttribute("mtid");
        var Y = J.getAttribute("mbid");
        var Z = "";
        var H = "";
        switch (A) {
        case mDrawFlag_Custom_qj_rt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(S) < Number(X) && Number(D) + Number(B) > Number(R) - Number(T)) {
                if (O == "") {
                    Z = Number(D) + Number(B) - (Number(R) - Number(T))
                } else {
                    Z = Number(D) + Number(B) - (Number(R) - Number(T)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                if (I == "") {
                    H = Number(X) - Number(S)
                } else {
                    H = Number(X) - Number(S) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                W = Z + "," + H;
                return W
            }
            break;
        case mDrawFlag_Custom_qj_rb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) + Number(B) > Number(R) - Number(T) && Number(S) + Number(V) > Number(E) - Number(X)) {
                if (O == "") {
                    Z = Number(D) + Number(B) - (Number(R) - Number(T))
                } else {
                    Z = Number(D) + Number(B) - (Number(R) - Number(T)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                if (Y == "") {
                    H = Number(S) + Number(V) - (Number(E) - Number(X))
                } else {
                    H = Number(S) + Number(V) - (Number(E) - Number(X)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                W = Z + "," + H;
                return W
            }
            break;
        case mDrawFlag_Custom_qj_lt:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) < Number(T) && Number(S) < Number(X)) {
                if (P == "") {
                    Z = Number(T) - Number(D)
                } else {
                    Z = Number(T) - Number(D) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                if (I == "") {
                    H = Number(X) - Number(S)
                } else {
                    H = Number(X) - Number(S) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                W = Z + "," + H;
                return W
            }
            break;
        case mDrawFlag_Custom_qj_lb:
            var T = L.getAttribute("mw");
            var X = L.getAttribute("mh");
            if (Number(D) < Number(T) && Number(S) + Number(V) > Number(E) - Number(X)) {
                if (P == "") {
                    Z = Number(T) - Number(D)
                } else {
                    Z = Number(T) - Number(D) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                if (Y == "") {
                    H = Number(S) + Number(V) - (Number(E) - Number(X))
                } else {
                    H = Number(S) + Number(V) - (Number(E) - Number(X)) - Number(Number(N) / 2 - Number(G)) + Number(Number(C) - Number(G))
                }
                W = Z + "," + H;
                return W
            }
            break;
        default:
        }
        break;
    default:
    }
    return W
}
function MicroXwin_calcAllExp() {
    var addOpt = false;
    var mcflWinsArr = $.Micro.MergeObjs([$("#" + mDrawFlag_SvgId + " [mtype='" + mDrawFlag_Win + "']"), $("#" + mDrawFlag_SvgId + " [mtype='" + mDrawFlag_Custom_arc + "']")]);
    $.each(mcflWinsArr,
    function() {
        var win = $(this).get(0);
        var winId = win.getAttribute("id");
        $("#" + winId + " [mtype='" + mDrawFlag_FrameRect + "']").each(function(i, obj) {
            var objId = obj.getAttribute("id");
            var xcxlId = obj.getAttribute("mxcxlid");
            var kDmWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "框大面宽度", "prid");
            var kytWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "框压线面宽", "prid");
            var zklWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "固玻转换料面宽", "prid");
            if ($.Micro.IsEmpty(kDmWidth) || $.Micro.IsEmpty(kytWidth) || $.Micro.IsEmpty(zklWidth)) {
                MicroXwin_addXwinOpt(xcxlId);
                addOpt = true;
                if (addOpt) {
                    return
                }
            }
        });
        if (addOpt) {
            return
        }
        $("#" + winId + " [mtype='" + mDrawFlag_FrameRect + "']").each(function(i, obj) {
            var objId = obj.getAttribute("id");
            var frameAngle = obj.getAttribute("mpjstyle");
            var frameWidth = obj.getAttribute("mwidth");
            var frameHeight = obj.getAttribute("mheight");
            var xcxlId = obj.getAttribute("mxcxlid");
            var xcxljgStr = MicroDraw_genData_getXcxljgByXcxlId(xcxlId);
            var xcxljgJson = eval("(" + xcxljgStr + ")");
            var kWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "框宽度", "prid");
            var kcDeep = MicroDraw_getXcxlValueByObjId(objId, "O", "框槽深度", "prid");
            var kDmWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "框大面宽度", "prid");
            var topRow = new Array();
            var bottomRow = new Array();
            var leftRow = new Array();
            var rightRow = new Array();
            var topIdx = new Array();
            var bottomIdx = new Array();
            var leftIdx = new Array();
            var rightIdx = new Array();
            var rows = $("#" + mDrawPrProperty).datagrid("getRows");
            $.each(rows,
            function(j, row) {
                if (row.ObjId == objId && row.Memo == "上") {
                    topRow.push(row);
                    topIdx.push(j)
                }
                if (row.ObjId == objId && row.Memo == "下") {
                    bottomRow.push(row);
                    bottomIdx.push(j)
                }
                if (row.ObjId == objId && row.Memo == "左") {
                    leftRow.push(row);
                    leftIdx.push(j)
                }
                if (row.ObjId == objId && row.Memo == "右") {
                    rightRow.push(row);
                    rightIdx.push(j)
                }
            });
            var rtSub = "";
            var rbSub = "";
            var ltSub = "";
            var lbSub = "";
            var qj_rt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rt);
            if (qj_rt_id.length > 0) {
                rtSub = MicroXwin_isTwoObjOverlap(objId, qj_rt_id)
            }
            var qj_rb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rb);
            if (qj_rb_id.length > 0) {
                rbSub = MicroXwin_isTwoObjOverlap(objId, qj_rb_id)
            }
            var qj_lt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lt);
            if (qj_lt_id.length > 0) {
                ltSub = MicroXwin_isTwoObjOverlap(objId, qj_lt_id)
            }
            var qj_lb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lb);
            if (qj_lb_id.length > 0) {
                lbSub = MicroXwin_isTwoObjOverlap(objId, qj_lb_id)
            }
            if (ltSub != "" && rtSub != "") {
                switch (frameAngle) {
                case "45":
                    var ltSubArr = ltSub.split(",");
                    var rtSubArr = rtSub.split(",");
                    $.each(topRow,
                    function(x, topObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                var origLen = topObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: topIdx[x],
                                    row: {
                                        Len: Number(frameWidth) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                        LenExp: Number(frameWidth) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(ltSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(ltSubArr[0]) + Number(kDmWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(rtSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(rtSubArr[0]) + Number(kDmWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "H":
                    var ltSubArr = ltSub.split(",");
                    var rtSubArr = rtSub.split(",");
                    $.each(topRow,
                    function(x, topObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                var origLen = topObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: topIdx[x],
                                    row: {
                                        Len: Number(frameWidth) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                        LenExp: Number(frameWidth) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(ltSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(ltSubArr[0]) + Number(kDmWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(rtSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(rtSubArr[0]) + Number(kDmWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "V":
                    var ltSubArr = ltSub.split(",");
                    var rtSubArr = rtSub.split(",");
                    $.each(topRow,
                    function(x, topObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                var origLen = topObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: topIdx[x],
                                    row: {
                                        Len: Number(frameWidth) - Number(ltSubArr[0]) - Number(rtSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        LenExp: Number(frameWidth) - Number(ltSubArr[0]) - Number(rtSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(ltSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(ltSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(rtSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(rtSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                default:
                }
            } else {
                if (ltSub == "" && rtSub != "") {
                    switch (frameAngle) {
                    case "45":
                        var ltSubArr = ltSub.split(",");
                        var rtSubArr = rtSub.split(",");
                        $.each(topRow,
                        function(x, topObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                    var origLen = topObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: topIdx[x],
                                        row: {
                                            Len: Number(frameWidth) - Number(rtSubArr[0]),
                                            LenExp: Number(frameWidth) - Number(rtSubArr[0]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: topObjrow.Numx,
                                            ObjId: topObjrow.ObjId,
                                            ProductId: topObjrow.ProductId,
                                            Len: Number(rtSubArr[0]) + Number(kDmWidth),
                                            LenExp: Number(rtSubArr[0]) + Number(kDmWidth),
                                            Cnt: topObjrow.Cnt,
                                            CntExp: topObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: topObjrow.BcpType,
                                            Memo: topObjrow.Memo,
                                            color: topObjrow.color,
                                            colorExp: topObjrow.colorExp,
                                            xcxljgid: topObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "H":
                        var ltSubArr = ltSub.split(",");
                        var rtSubArr = rtSub.split(",");
                        $.each(topRow,
                        function(x, topObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                    var origLen = topObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: topIdx[x],
                                        row: {
                                            Len: Number(frameWidth) - Number(rtSubArr[0]),
                                            LenExp: Number(frameWidth) - Number(rtSubArr[0]),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: topObjrow.Numx,
                                            ObjId: topObjrow.ObjId,
                                            ProductId: topObjrow.ProductId,
                                            Len: Number(rtSubArr[0]) + Number(kDmWidth),
                                            LenExp: Number(rtSubArr[0]) + Number(kDmWidth),
                                            Cnt: topObjrow.Cnt,
                                            CntExp: topObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: topObjrow.BcpType,
                                            Memo: topObjrow.Memo,
                                            color: topObjrow.color,
                                            colorExp: topObjrow.colorExp,
                                            xcxljgid: topObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "V":
                        var ltSubArr = ltSub.split(",");
                        var rtSubArr = rtSub.split(",");
                        $.each(topRow,
                        function(x, topObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                    var origLen = topObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: topIdx[x],
                                        row: {
                                            Len: Number(frameWidth) - Number(rtSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            LenExp: Number(frameWidth) - Number(rtSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: topObjrow.Numx,
                                            ObjId: topObjrow.ObjId,
                                            ProductId: topObjrow.ProductId,
                                            Len: Number(rtSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            LenExp: Number(rtSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            Cnt: topObjrow.Cnt,
                                            CntExp: topObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: topObjrow.BcpType,
                                            Memo: topObjrow.Memo,
                                            color: topObjrow.color,
                                            colorExp: topObjrow.colorExp,
                                            xcxljgid: topObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    default:
                    }
                } else {
                    if (ltSub != "" && rtSub == "") {
                        switch (frameAngle) {
                        case "45":
                            var ltSubArr = ltSub.split(",");
                            var rtSubArr = rtSub.split(",");
                            $.each(topRow,
                            function(x, topObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                        var origLen = topObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: topIdx[x],
                                            row: {
                                                Len: Number(frameWidth) - Number(ltSubArr[0]),
                                                LenExp: Number(frameWidth) - Number(ltSubArr[0]),
                                                Angle: "45-45"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: topObjrow.Numx,
                                                ObjId: topObjrow.ObjId,
                                                ProductId: topObjrow.ProductId,
                                                Len: Number(ltSubArr[0]) + Number(kDmWidth),
                                                LenExp: Number(ltSubArr[0]) + Number(kDmWidth),
                                                Cnt: topObjrow.Cnt,
                                                CntExp: topObjrow.CntExp,
                                                Angle: "平行45-45",
                                                BcpType: topObjrow.BcpType,
                                                Memo: topObjrow.Memo,
                                                color: topObjrow.color,
                                                colorExp: topObjrow.colorExp,
                                                xcxljgid: topObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "H":
                            var ltSubArr = ltSub.split(",");
                            var rtSubArr = rtSub.split(",");
                            $.each(topRow,
                            function(x, topObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                        var origLen = topObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: topIdx[x],
                                            row: {
                                                Len: Number(frameWidth) - Number(ltSubArr[0]),
                                                LenExp: Number(frameWidth) - Number(ltSubArr[0]),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: topObjrow.Numx,
                                                ObjId: topObjrow.ObjId,
                                                ProductId: topObjrow.ProductId,
                                                Len: Number(ltSubArr[0]) + Number(kDmWidth),
                                                LenExp: Number(ltSubArr[0]) + Number(kDmWidth),
                                                Cnt: topObjrow.Cnt,
                                                CntExp: topObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: topObjrow.BcpType,
                                                Memo: topObjrow.Memo,
                                                color: topObjrow.color,
                                                colorExp: topObjrow.colorExp,
                                                xcxljgid: topObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "V":
                            var ltSubArr = ltSub.split(",");
                            var rtSubArr = rtSub.split(",");
                            $.each(topRow,
                            function(x, topObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "上框" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                        var origLen = topObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: topIdx[x],
                                            row: {
                                                Len: Number(frameWidth) - Number(ltSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                LenExp: Number(frameWidth) - Number(ltSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: topObjrow.Numx,
                                                ObjId: topObjrow.ObjId,
                                                ProductId: topObjrow.ProductId,
                                                Len: Number(ltSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                LenExp: Number(ltSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                Cnt: topObjrow.Cnt,
                                                CntExp: topObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: topObjrow.BcpType,
                                                Memo: topObjrow.Memo,
                                                color: topObjrow.color,
                                                colorExp: topObjrow.colorExp,
                                                xcxljgid: topObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        default:
                        }
                    }
                }
            }
            if (lbSub != "" && rbSub != "") {
                switch (frameAngle) {
                case "45":
                    var lbSubArr = lbSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(bottomRow,
                    function(x, bottomObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                var origLen = bottomObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: bottomIdx[x],
                                    row: {
                                        Len: Number(frameWidth) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                        LenExp: Number(frameWidth) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(lbSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(lbSubArr[0]) + Number(kDmWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(rbSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(rbSubArr[0]) + Number(kDmWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "H":
                    var lbSubArr = lbSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(bottomRow,
                    function(x, bottomObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                var origLen = bottomObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: bottomIdx[x],
                                    row: {
                                        Len: Number(frameWidth) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                        LenExp: Number(frameWidth) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(lbSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(lbSubArr[0]) + Number(kDmWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(rbSubArr[0]) + Number(kDmWidth),
                                        LenExp: Number(rbSubArr[0]) + Number(kDmWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "V":
                    var lbSubArr = lbSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(bottomRow,
                    function(x, bottomObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                var origLen = bottomObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: bottomIdx[x],
                                    row: {
                                        Len: Number(frameWidth) - Number(lbSubArr[0]) - Number(rbSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        LenExp: Number(frameWidth) - Number(lbSubArr[0]) - Number(rbSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(lbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(lbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(rbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(rbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                default:
                }
            } else {
                if (lbSub == "" && rbSub != "") {
                    switch (frameAngle) {
                    case "45":
                        var lbSubArr = lbSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(bottomRow,
                        function(x, bottomObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                    var origLen = bottomObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: bottomIdx[x],
                                        row: {
                                            Len: Number(frameWidth) - Number(rbSubArr[0]),
                                            LenExp: Number(frameWidth) - Number(rbSubArr[0]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: bottomObjrow.Numx,
                                            ObjId: bottomObjrow.ObjId,
                                            ProductId: bottomObjrow.ProductId,
                                            Len: Number(rbSubArr[0]) + Number(kDmWidth),
                                            LenExp: Number(rbSubArr[0]) + Number(kDmWidth),
                                            Cnt: bottomObjrow.Cnt,
                                            CntExp: bottomObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: bottomObjrow.BcpType,
                                            Memo: bottomObjrow.Memo,
                                            color: bottomObjrow.color,
                                            colorExp: bottomObjrow.colorExp,
                                            xcxljgid: bottomObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "H":
                        var lbSubArr = lbSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(bottomRow,
                        function(x, bottomObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                    var origLen = bottomObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: bottomIdx[x],
                                        row: {
                                            Len: Number(frameWidth) - Number(rbSubArr[0]),
                                            LenExp: Number(frameWidth) - Number(rbSubArr[0]),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: bottomObjrow.Numx,
                                            ObjId: bottomObjrow.ObjId,
                                            ProductId: bottomObjrow.ProductId,
                                            Len: Number(rbSubArr[0]) + Number(kDmWidth),
                                            LenExp: Number(rbSubArr[0]) + Number(kDmWidth),
                                            Cnt: bottomObjrow.Cnt,
                                            CntExp: bottomObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: bottomObjrow.BcpType,
                                            Memo: bottomObjrow.Memo,
                                            color: bottomObjrow.color,
                                            colorExp: bottomObjrow.colorExp,
                                            xcxljgid: bottomObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "V":
                        var lbSubArr = lbSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(bottomRow,
                        function(x, bottomObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                    var origLen = bottomObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: bottomIdx[x],
                                        row: {
                                            Len: Number(frameWidth) - Number(rbSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            LenExp: Number(frameWidth) - Number(rbSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: bottomObjrow.Numx,
                                            ObjId: bottomObjrow.ObjId,
                                            ProductId: bottomObjrow.ProductId,
                                            Len: Number(rbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            LenExp: Number(rbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            Cnt: bottomObjrow.Cnt,
                                            CntExp: bottomObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: bottomObjrow.BcpType,
                                            Memo: bottomObjrow.Memo,
                                            color: bottomObjrow.color,
                                            colorExp: bottomObjrow.colorExp,
                                            xcxljgid: bottomObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    default:
                    }
                } else {
                    if (lbSub != "" && rbSub == "") {
                        switch (frameAngle) {
                        case "45":
                            var lbSubArr = lbSub.split(",");
                            var rbSubArr = rbSub.split(",");
                            $.each(bottomRow,
                            function(x, bottomObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                        var origLen = bottomObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: bottomIdx[x],
                                            row: {
                                                Len: Number(frameWidth) - Number(lbSubArr[0]),
                                                LenExp: Number(frameWidth) - Number(lbSubArr[0]),
                                                Angle: "45-45"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: bottomObjrow.Numx,
                                                ObjId: bottomObjrow.ObjId,
                                                ProductId: bottomObjrow.ProductId,
                                                Len: Number(lbSubArr[0]) + Number(kDmWidth),
                                                LenExp: Number(lbSubArr[0]) + Number(kDmWidth),
                                                Cnt: bottomObjrow.Cnt,
                                                CntExp: bottomObjrow.CntExp,
                                                Angle: "平行45-45",
                                                BcpType: bottomObjrow.BcpType,
                                                Memo: bottomObjrow.Memo,
                                                color: bottomObjrow.color,
                                                colorExp: bottomObjrow.colorExp,
                                                xcxljgid: bottomObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "H":
                            var lbSubArr = lbSub.split(",");
                            var rbSubArr = rbSub.split(",");
                            $.each(bottomRow,
                            function(x, bottomObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                        var origLen = bottomObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: bottomIdx[x],
                                            row: {
                                                Len: Number(frameWidth) - Number(lbSubArr[0]),
                                                LenExp: Number(frameWidth) - Number(lbSubArr[0]),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: bottomObjrow.Numx,
                                                ObjId: bottomObjrow.ObjId,
                                                ProductId: bottomObjrow.ProductId,
                                                Len: Number(lbSubArr[0]) + Number(kDmWidth),
                                                LenExp: Number(lbSubArr[0]) + Number(kDmWidth),
                                                Cnt: bottomObjrow.Cnt,
                                                CntExp: bottomObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: bottomObjrow.BcpType,
                                                Memo: bottomObjrow.Memo,
                                                color: bottomObjrow.color,
                                                colorExp: bottomObjrow.colorExp,
                                                xcxljgid: bottomObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "V":
                            var lbSubArr = lbSub.split(",");
                            var rbSubArr = rbSub.split(",");
                            $.each(bottomRow,
                            function(x, bottomObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "下框" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                        var origLen = bottomObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: bottomIdx[x],
                                            row: {
                                                Len: Number(frameWidth) - Number(lbSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                LenExp: Number(frameWidth) - Number(lbSubArr[0]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: bottomObjrow.Numx,
                                                ObjId: bottomObjrow.ObjId,
                                                ProductId: bottomObjrow.ProductId,
                                                Len: Number(lbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                LenExp: Number(lbSubArr[0]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                Cnt: bottomObjrow.Cnt,
                                                CntExp: bottomObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: bottomObjrow.BcpType,
                                                Memo: bottomObjrow.Memo,
                                                color: bottomObjrow.color,
                                                colorExp: bottomObjrow.colorExp,
                                                xcxljgid: bottomObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        default:
                        }
                    }
                }
            }
            if (ltSub != "" && lbSub != "") {
                switch (frameAngle) {
                case "45":
                    var ltSubArr = ltSub.split(",");
                    var lbSubArr = lbSub.split(",");
                    $.each(leftRow,
                    function(x, leftObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                var origLen = leftObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: leftIdx[x],
                                    row: {
                                        Len: Number(frameHeight) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                        LenExp: Number(frameHeight) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(ltSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(ltSubArr[1]) + Number(kDmWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(lbSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(lbSubArr[1]) + Number(kDmWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "H":
                    var ltSubArr = ltSub.split(",");
                    var lbSubArr = lbSub.split(",");
                    $.each(leftRow,
                    function(x, leftObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                var origLen = leftObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: leftIdx[x],
                                    row: {
                                        Len: Number(frameHeight) - Number(ltSubArr[1]) - Number(lbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        LenExp: Number(frameHeight) - Number(ltSubArr[1]) - Number(lbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(ltSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(ltSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(lbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(lbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "V":
                    var ltSubArr = ltSub.split(",");
                    var lbSubArr = lbSub.split(",");
                    $.each(leftRow,
                    function(x, leftObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                var origLen = leftObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: leftIdx[x],
                                    row: {
                                        Len: Number(frameHeight) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                        LenExp: Number(frameHeight) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(ltSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(ltSubArr[1]) + Number(kDmWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(lbSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(lbSubArr[1]) + Number(kDmWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                default:
                }
            } else {
                if (ltSub == "" && lbSub != "") {
                    switch (frameAngle) {
                    case "45":
                        var ltSubArr = ltSub.split(",");
                        var lbSubArr = lbSub.split(",");
                        $.each(leftRow,
                        function(x, leftObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                    var origLen = leftObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: leftIdx[x],
                                        row: {
                                            Len: Number(frameHeight) - Number(lbSubArr[1]),
                                            LenExp: Number(frameHeight) - Number(lbSubArr[1]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: leftObjrow.Numx,
                                            ObjId: leftObjrow.ObjId,
                                            ProductId: leftObjrow.ProductId,
                                            Len: Number(lbSubArr[1]) + Number(kDmWidth),
                                            LenExp: Number(lbSubArr[1]) + Number(kDmWidth),
                                            Cnt: leftObjrow.Cnt,
                                            CntExp: leftObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: leftObjrow.BcpType,
                                            Memo: leftObjrow.Memo,
                                            color: leftObjrow.color,
                                            colorExp: leftObjrow.colorExp,
                                            xcxljgid: leftObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "H":
                        var ltSubArr = ltSub.split(",");
                        var lbSubArr = lbSub.split(",");
                        $.each(leftRow,
                        function(x, leftObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                    var origLen = leftObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: leftIdx[x],
                                        row: {
                                            Len: Number(frameHeight) - Number(lbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            LenExp: Number(frameHeight) - Number(lbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: leftObjrow.Numx,
                                            ObjId: leftObjrow.ObjId,
                                            ProductId: leftObjrow.ProductId,
                                            Len: Number(lbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            LenExp: Number(lbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            Cnt: leftObjrow.Cnt,
                                            CntExp: leftObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: leftObjrow.BcpType,
                                            Memo: leftObjrow.Memo,
                                            color: leftObjrow.color,
                                            colorExp: leftObjrow.colorExp,
                                            xcxljgid: leftObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "V":
                        var ltSubArr = ltSub.split(",");
                        var lbSubArr = lbSub.split(",");
                        $.each(leftRow,
                        function(x, leftObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                    var origLen = leftObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: leftIdx[x],
                                        row: {
                                            Len: Number(frameHeight) - Number(lbSubArr[1]),
                                            LenExp: Number(frameHeight) - Number(lbSubArr[1]),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: leftObjrow.Numx,
                                            ObjId: leftObjrow.ObjId,
                                            ProductId: leftObjrow.ProductId,
                                            Len: Number(lbSubArr[1]) + Number(kDmWidth),
                                            LenExp: Number(lbSubArr[1]) + Number(kDmWidth),
                                            Cnt: leftObjrow.Cnt,
                                            CntExp: leftObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: leftObjrow.BcpType,
                                            Memo: leftObjrow.Memo,
                                            color: leftObjrow.color,
                                            colorExp: leftObjrow.colorExp,
                                            xcxljgid: leftObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    default:
                    }
                } else {
                    if (ltSub != "" && lbSub == "") {
                        switch (frameAngle) {
                        case "45":
                            var ltSubArr = ltSub.split(",");
                            var lbSubArr = lbSub.split(",");
                            $.each(leftRow,
                            function(x, leftObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                        var origLen = leftObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: leftIdx[x],
                                            row: {
                                                Len: Number(frameHeight) - Number(ltSubArr[1]),
                                                LenExp: Number(frameHeight) - Number(ltSubArr[1]),
                                                Angle: "45-45"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: leftObjrow.Numx,
                                                ObjId: leftObjrow.ObjId,
                                                ProductId: leftObjrow.ProductId,
                                                Len: Number(ltSubArr[1]) + Number(kDmWidth),
                                                LenExp: Number(ltSubArr[1]) + Number(kDmWidth),
                                                Cnt: leftObjrow.Cnt,
                                                CntExp: leftObjrow.CntExp,
                                                Angle: "平行45-45",
                                                BcpType: leftObjrow.BcpType,
                                                Memo: leftObjrow.Memo,
                                                color: leftObjrow.color,
                                                colorExp: leftObjrow.colorExp,
                                                xcxljgid: leftObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "H":
                            var ltSubArr = ltSub.split(",");
                            var lbSubArr = lbSub.split(",");
                            $.each(leftRow,
                            function(x, leftObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                        var origLen = leftObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: leftIdx[x],
                                            row: {
                                                Len: Number(frameHeight) - Number(ltSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                LenExp: Number(frameHeight) - Number(ltSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: leftObjrow.Numx,
                                                ObjId: leftObjrow.ObjId,
                                                ProductId: leftObjrow.ProductId,
                                                Len: Number(ltSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                LenExp: Number(ltSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                Cnt: leftObjrow.Cnt,
                                                CntExp: leftObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: leftObjrow.BcpType,
                                                Memo: leftObjrow.Memo,
                                                color: leftObjrow.color,
                                                colorExp: leftObjrow.colorExp,
                                                xcxljgid: leftObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "V":
                            var ltSubArr = ltSub.split(",");
                            var lbSubArr = lbSub.split(",");
                            $.each(leftRow,
                            function(x, leftObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "左框" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                        var origLen = leftObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: leftIdx[x],
                                            row: {
                                                Len: Number(frameHeight) - Number(ltSubArr[1]),
                                                LenExp: Number(frameHeight) - Number(ltSubArr[1]),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: leftObjrow.Numx,
                                                ObjId: leftObjrow.ObjId,
                                                ProductId: leftObjrow.ProductId,
                                                Len: Number(ltSubArr[1]) + Number(kDmWidth),
                                                LenExp: Number(ltSubArr[1]) + Number(kDmWidth),
                                                Cnt: leftObjrow.Cnt,
                                                CntExp: leftObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: leftObjrow.BcpType,
                                                Memo: leftObjrow.Memo,
                                                color: leftObjrow.color,
                                                colorExp: leftObjrow.colorExp,
                                                xcxljgid: leftObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        default:
                        }
                    }
                }
            }
            if (rtSub != "" && rbSub != "") {
                switch (frameAngle) {
                case "45":
                    var rtSubArr = rtSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(rightRow,
                    function(x, rightObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                var origLen = rightObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: rightIdx[x],
                                    row: {
                                        Len: Number(frameHeight) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                        LenExp: Number(frameHeight) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rtSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(rtSubArr[1]) + Number(kDmWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rbSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(rbSubArr[1]) + Number(kDmWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "H":
                    var rtSubArr = rtSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(rightRow,
                    function(x, rightObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                var origLen = rightObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: rightIdx[x],
                                    row: {
                                        Len: Number(frameHeight) - Number(rtSubArr[1]) - Number(rbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        LenExp: Number(frameHeight) - Number(rtSubArr[1]) - Number(rbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rtSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(rtSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        LenExp: Number(rbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                case "V":
                    var rtSubArr = rtSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(rightRow,
                    function(x, rightObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                var origLen = rightObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: rightIdx[x],
                                    row: {
                                        Len: Number(frameHeight) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                        LenExp: Number(frameHeight) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                        Angle: "90-90"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rtSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(rtSubArr[1]) + Number(kDmWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "90-45",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rbSubArr[1]) + Number(kDmWidth),
                                        LenExp: Number(rbSubArr[1]) + Number(kDmWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "45-90",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    });
                    break;
                default:
                }
            } else {
                if (rtSub == "" && rbSub != "") {
                    switch (frameAngle) {
                    case "45":
                        var rtSubArr = rtSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(rightRow,
                        function(x, rightObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                    var origLen = rightObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: rightIdx[x],
                                        row: {
                                            Len: Number(frameHeight) - Number(rbSubArr[1]),
                                            LenExp: Number(frameHeight) - Number(rbSubArr[1]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: rightObjrow.Numx,
                                            ObjId: rightObjrow.ObjId,
                                            ProductId: rightObjrow.ProductId,
                                            Len: Number(rbSubArr[1]) + Number(kDmWidth),
                                            LenExp: Number(rbSubArr[1]) + Number(kDmWidth),
                                            Cnt: rightObjrow.Cnt,
                                            CntExp: rightObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: rightObjrow.BcpType,
                                            Memo: rightObjrow.Memo,
                                            color: rightObjrow.color,
                                            colorExp: rightObjrow.colorExp,
                                            xcxljgid: rightObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "H":
                        var rtSubArr = rtSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(rightRow,
                        function(x, rightObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                    var origLen = rightObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: rightIdx[x],
                                        row: {
                                            Len: Number(frameHeight) - Number(rbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            LenExp: Number(frameHeight) - Number(rbSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: rightObjrow.Numx,
                                            ObjId: rightObjrow.ObjId,
                                            ProductId: rightObjrow.ProductId,
                                            Len: Number(rbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            LenExp: Number(rbSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                            Cnt: rightObjrow.Cnt,
                                            CntExp: rightObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: rightObjrow.BcpType,
                                            Memo: rightObjrow.Memo,
                                            color: rightObjrow.color,
                                            colorExp: rightObjrow.colorExp,
                                            xcxljgid: rightObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    case "V":
                        var rtSubArr = rtSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(rightRow,
                        function(x, rightObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                    var origLen = rightObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: rightIdx[x],
                                        row: {
                                            Len: Number(frameHeight) - Number(rbSubArr[1]),
                                            LenExp: Number(frameHeight) - Number(rbSubArr[1]),
                                            Angle: "90-90"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: rightObjrow.Numx,
                                            ObjId: rightObjrow.ObjId,
                                            ProductId: rightObjrow.ProductId,
                                            Len: Number(rbSubArr[1]) + Number(kDmWidth),
                                            LenExp: Number(rbSubArr[1]) + Number(kDmWidth),
                                            Cnt: rightObjrow.Cnt,
                                            CntExp: rightObjrow.CntExp,
                                            Angle: "45-90",
                                            BcpType: rightObjrow.BcpType,
                                            Memo: rightObjrow.Memo,
                                            color: rightObjrow.color,
                                            colorExp: rightObjrow.colorExp,
                                            xcxljgid: rightObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        });
                        break;
                    default:
                    }
                } else {
                    if (rtSub != "" && rbSub == "") {
                        switch (frameAngle) {
                        case "45":
                            var rtSubArr = rtSub.split(",");
                            var rbSubArr = rbSub.split(",");
                            $.each(rightRow,
                            function(x, rightObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                        var origLen = rightObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: rightIdx[x],
                                            row: {
                                                Len: Number(frameHeight) - Number(rtSubArr[1]),
                                                LenExp: Number(frameHeight) - Number(rtSubArr[1]),
                                                Angle: "45-45"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: rightObjrow.Numx,
                                                ObjId: rightObjrow.ObjId,
                                                ProductId: rightObjrow.ProductId,
                                                Len: Number(rtSubArr[1]) + Number(kDmWidth),
                                                LenExp: Number(rtSubArr[1]) + Number(kDmWidth),
                                                Cnt: rightObjrow.Cnt,
                                                CntExp: rightObjrow.CntExp,
                                                Angle: "平行45-45",
                                                BcpType: rightObjrow.BcpType,
                                                Memo: rightObjrow.Memo,
                                                color: rightObjrow.color,
                                                colorExp: rightObjrow.colorExp,
                                                xcxljgid: rightObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "H":
                            var rtSubArr = rtSub.split(",");
                            var rbSubArr = rbSub.split(",");
                            $.each(rightRow,
                            function(x, rightObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                        var origLen = rightObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: rightIdx[x],
                                            row: {
                                                Len: Number(frameHeight) - Number(rtSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                LenExp: Number(frameHeight) - Number(rtSubArr[1]) - 2 * Number(kWidth) + 2 * Number(kcDeep),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: rightObjrow.Numx,
                                                ObjId: rightObjrow.ObjId,
                                                ProductId: rightObjrow.ProductId,
                                                Len: Number(rtSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                LenExp: Number(rtSubArr[1]) - Number(kWidth) + Number(kcDeep) + Number(kDmWidth),
                                                Cnt: rightObjrow.Cnt,
                                                CntExp: rightObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: rightObjrow.BcpType,
                                                Memo: rightObjrow.Memo,
                                                color: rightObjrow.color,
                                                colorExp: rightObjrow.colorExp,
                                                xcxljgid: rightObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        case "V":
                            var rtSubArr = rtSub.split(",");
                            var rbSubArr = rbSub.split(",");
                            $.each(rightRow,
                            function(x, rightObjrow) {
                                $.each(xcxljgJson,
                                function(k, fcObj) {
                                    if (fcObj.type == "P" && fcObj.name == "右框" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                        var origLen = rightObjrow.Len;
                                        $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                            index: rightIdx[x],
                                            row: {
                                                Len: Number(frameHeight) - Number(rtSubArr[1]),
                                                LenExp: Number(frameHeight) - Number(rtSubArr[1]),
                                                Angle: "90-90"
                                            }
                                        });
                                        $("#" + mDrawPrProperty).datagrid("insertRow", {
                                            index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                            row: {
                                                Numx: rightObjrow.Numx,
                                                ObjId: rightObjrow.ObjId,
                                                ProductId: rightObjrow.ProductId,
                                                Len: Number(rtSubArr[1]) + Number(kDmWidth),
                                                LenExp: Number(rtSubArr[1]) + Number(kDmWidth),
                                                Cnt: rightObjrow.Cnt,
                                                CntExp: rightObjrow.CntExp,
                                                Angle: "90-45",
                                                BcpType: rightObjrow.BcpType,
                                                Memo: rightObjrow.Memo,
                                                color: rightObjrow.color,
                                                colorExp: rightObjrow.colorExp,
                                                xcxljgid: rightObjrow.xcxljgid
                                            }
                                        })
                                    }
                                })
                            });
                            break;
                        default:
                        }
                    }
                }
            }
        });
        $("#" + winId + " [mtype='" + mDrawFlag_TingH + "']").each(function(i, obj) {
            var objId = obj.getAttribute("id");
            var qj_rt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rt);
            if (qj_rt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rt_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
            var qj_rb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rb);
            if (qj_rb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rb_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
            var qj_lt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lt);
            if (qj_lt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lt_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
            var qj_lb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lb);
            if (qj_lb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lb_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
        });
        $("#" + winId + " [mtype='" + mDrawFlag_TingV + "']").each(function(i, obj) {
            var objId = obj.getAttribute("id");
            var qj_rt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rt);
            if (qj_rt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rt_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
            var qj_rb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rb);
            if (qj_rb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rb_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
            var qj_lt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lt);
            if (qj_lt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lt_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
            var qj_lb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lb);
            if (qj_lb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lb_id);
                if (sub.toString().length > 0) {
                    var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                    for (j = 0; j < rows.length; j++) {
                        var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                        if (objId == rows[j].ObjId) {
                            var origLen = rows[j].Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: idx,
                                row: {
                                    Len: Number(origLen) - Number(sub),
                                    LenExp: Number(origLen) - Number(sub)
                                }
                            })
                        }
                    }
                }
            }
        });
        $("#" + winId + " [mtype='" + mDrawFlag_Glass + "']").each(function(i, obj) {
            var objId = obj.getAttribute("id");
            var mwidth = obj.getAttribute("mwidth");
            var mheight = obj.getAttribute("mheight");
            var qj_rt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rt);
            if (qj_rt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rt_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "左" || rows[j].Memo == "右")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(ySub),
                                        LenExp: Number(origLen) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "上" || rows[j].Memo == "下")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(xSub),
                                        LenExp: Number(origLen) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
            var qj_rb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rb);
            if (qj_rb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rb_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "左" || rows[j].Memo == "右")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(ySub),
                                        LenExp: Number(origLen) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "上" || rows[j].Memo == "下")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(xSub),
                                        LenExp: Number(origLen) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
            var qj_lt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lt);
            if (qj_lt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lt_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "左" || rows[j].Memo == "右")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(ySub),
                                        LenExp: Number(origLen) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "上" || rows[j].Memo == "下")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(xSub),
                                        LenExp: Number(origLen) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
            var qj_lb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lb);
            if (qj_lb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lb_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "左" || rows[j].Memo == "右")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(ySub),
                                        LenExp: Number(origLen) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawPrProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawPrProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId && (rows[j].Memo == "上" || rows[j].Memo == "下")) {
                                var origLen = rows[j].Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        Len: Number(origLen) - Number(xSub),
                                        LenExp: Number(origLen) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
        });
        $("#" + winId + " [mtype='" + mDrawFlag_Glass + "']").each(function(i, obj) {
            var objId = obj.getAttribute("id");
            var mwidth = obj.getAttribute("mwidth");
            var mheight = obj.getAttribute("mheight");
            var qj_rt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rt);
            if (qj_rt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rt_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origH = rows[j].H;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        H: Number(origH) - Number(ySub),
                                        HExp: Number(origH) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origW = rows[j].W;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        W: Number(origW) - Number(xSub),
                                        WExp: Number(origW) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
            var qj_rb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rb);
            if (qj_rb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_rb_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origH = rows[j].H;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        H: Number(origH) - Number(ySub),
                                        HExp: Number(origH) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origW = rows[j].W;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        W: Number(origW) - Number(xSub),
                                        WExp: Number(origW) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
            var qj_lt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lt);
            if (qj_lt_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lt_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origH = rows[j].H;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        H: Number(origH) - Number(ySub),
                                        HExp: Number(origH) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origW = rows[j].W;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        W: Number(origW) - Number(xSub),
                                        WExp: Number(origW) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
            var qj_lb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lb);
            if (qj_lb_id.length > 0) {
                var sub = MicroXwin_isTwoObjOverlap(objId, qj_lb_id);
                if (sub.toString().length > 0) {
                    var subArr = sub.split(",");
                    var xSub = subArr[0];
                    var ySub = subArr[1];
                    if (Number(xSub) > Number(mwidth)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origH = rows[j].H;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        H: Number(origH) - Number(ySub),
                                        HExp: Number(origH) - Number(ySub)
                                    }
                                })
                            }
                        }
                    }
                    if (Number(ySub) > Number(mheight)) {
                        var rows = $("#" + mDrawGlProperty).datagrid("getRows");
                        for (j = 0; j < rows.length; j++) {
                            var idx = $("#" + mDrawGlProperty).datagrid("getRowIndex", rows[j]);
                            if (objId == rows[j].ObjId) {
                                var origW = rows[j].W;
                                $("#" + mDrawGlProperty).propertygrid("updateRow", {
                                    index: idx,
                                    row: {
                                        W: Number(origW) - Number(xSub),
                                        WExp: Number(origW) - Number(xSub)
                                    }
                                })
                            }
                        }
                    }
                }
            }
        })
    });
    if (addOpt) {
        return
    }
    var xGlassInfoStr = MicroXwin_getXGlassInfoList();
    if (xGlassInfoStr.length > 0) {
        var xGlassInfoArr = xGlassInfoStr.split(";");
        for (var i = 0; i < xGlassInfoArr.length; i++) {
            var xGlassInfoSubArr = xGlassInfoArr[i].split(",");
            var objId = xGlassInfoSubArr[0];
            var glassObj = $("#" + objId).get(0);
            var winNode = $(glassObj).parents("[mtype=" + mDrawFlag_Win + "]").get(0);
            var winId = winNode.getAttribute("id");
            var frameNode = $("#" + winId + " [mtype='" + mDrawFlag_FrameRect + "']").get(0);
            var frameId = frameNode.getAttribute("id");
            var xcxlId = frameNode.getAttribute("mxcxlid");
            var xcxljgStr = MicroDraw_genData_getXcxljgByXcxlId(xcxlId);
            var xcxljgJson = eval("(" + xcxljgStr + ")");
            var mytpjstyle = glassObj.getAttribute("mytpjstyle");
            var kytWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "框压线面宽", "prid");
            var zklWidth = MicroDraw_getXcxlValueByObjId(objId, "O", "固玻转换料面宽", "prid");
            var topRow = new Array();
            var bottomRow = new Array();
            var leftRow = new Array();
            var rightRow = new Array();
            var topIdx = new Array();
            var bottomIdx = new Array();
            var leftIdx = new Array();
            var rightIdx = new Array();
            var rows = $("#" + mDrawPrProperty).datagrid("getRows");
            $.each(rows,
            function(j, row) {
                if (row.ObjId == objId && row.Memo == "上") {
                    topRow.push(row);
                    topIdx.push(j)
                }
                if (row.ObjId == objId && row.Memo == "下") {
                    bottomRow.push(row);
                    bottomIdx.push(j)
                }
                if (row.ObjId == objId && row.Memo == "左") {
                    leftRow.push(row);
                    leftIdx.push(j)
                }
                if (row.ObjId == objId && row.Memo == "右") {
                    rightRow.push(row);
                    rightIdx.push(j)
                }
            });
            var rtSub = "";
            var rbSub = "";
            var ltSub = "";
            var lbSub = "";
            var qj_rt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rt);
            if (qj_rt_id.length > 0) {
                rtSub = MicroXwin_isTwoObjOverlap(objId, qj_rt_id)
            }
            var qj_rb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_rb);
            if (qj_rb_id.length > 0) {
                rbSub = MicroXwin_isTwoObjOverlap(objId, qj_rb_id)
            }
            var qj_lt_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lt);
            if (qj_lt_id.length > 0) {
                ltSub = MicroXwin_isTwoObjOverlap(objId, qj_lt_id)
            }
            var qj_lb_id = MicroXwin_isExistsXwin(winId, mDrawFlag_Custom_qj_lb);
            if (qj_lb_id.length > 0) {
                lbSub = MicroXwin_isTwoObjOverlap(objId, qj_lb_id)
            }
            if (ltSub != "" && rtSub != "") {
                var ltSubArr = ltSub.split(",");
                var rtSubArr = rtSub.split(",");
                $.each(topRow,
                function(x, topObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻上压线" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                            var origLen = topObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: topIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                    LenExp: Number(origLen) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: topObjrow.Numx,
                                    ObjId: topObjrow.ObjId,
                                    ProductId: topObjrow.ProductId,
                                    Len: Number(ltSubArr[0]) + Number(kytWidth),
                                    LenExp: Number(ltSubArr[0]) + Number(kytWidth),
                                    Cnt: topObjrow.Cnt,
                                    CntExp: topObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: topObjrow.BcpType,
                                    Memo: topObjrow.Memo,
                                    color: topObjrow.color,
                                    colorExp: topObjrow.colorExp,
                                    xcxljgid: topObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: topObjrow.Numx,
                                    ObjId: topObjrow.ObjId,
                                    ProductId: topObjrow.ProductId,
                                    Len: Number(rtSubArr[0]) + Number(kytWidth),
                                    LenExp: Number(rtSubArr[0]) + Number(kytWidth),
                                    Cnt: topObjrow.Cnt,
                                    CntExp: topObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: topObjrow.BcpType,
                                    Memo: topObjrow.Memo,
                                    color: topObjrow.color,
                                    colorExp: topObjrow.colorExp,
                                    xcxljgid: topObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (ltSub == "" && rtSub != "") {
                    var ltSubArr = ltSub.split(",");
                    var rtSubArr = rtSub.split(",");
                    $.each(topRow,
                    function(x, topObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻上压线" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                var origLen = topObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: topIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(rtSubArr[0]),
                                        LenExp: Number(origLen) - Number(rtSubArr[0]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(rtSubArr[0]) + Number(kytWidth),
                                        LenExp: Number(rtSubArr[0]) + Number(kytWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (ltSub != "" && rtSub == "") {
                        var ltSubArr = ltSub.split(",");
                        var rtSubArr = rtSub.split(",");
                        $.each(topRow,
                        function(x, topObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻上压线" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                    var origLen = topObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: topIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(ltSubArr[0]),
                                            LenExp: Number(origLen) - Number(ltSubArr[0]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: topObjrow.Numx,
                                            ObjId: topObjrow.ObjId,
                                            ProductId: topObjrow.ProductId,
                                            Len: Number(ltSubArr[0]) + Number(kytWidth),
                                            LenExp: Number(ltSubArr[0]) + Number(kytWidth),
                                            Cnt: topObjrow.Cnt,
                                            CntExp: topObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: topObjrow.BcpType,
                                            Memo: topObjrow.Memo,
                                            color: topObjrow.color,
                                            colorExp: topObjrow.colorExp,
                                            xcxljgid: topObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (lbSub != "" && rbSub != "") {
                var lbSubArr = lbSub.split(",");
                var rbSubArr = rbSub.split(",");
                $.each(bottomRow,
                function(x, bottomObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻下压线" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                            var origLen = bottomObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: bottomIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                    LenExp: Number(origLen) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: bottomObjrow.Numx,
                                    ObjId: bottomObjrow.ObjId,
                                    ProductId: bottomObjrow.ProductId,
                                    Len: Number(lbSubArr[0]) + Number(kytWidth),
                                    LenExp: Number(lbSubArr[0]) + Number(kytWidth),
                                    Cnt: bottomObjrow.Cnt,
                                    CntExp: bottomObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: bottomObjrow.BcpType,
                                    Memo: bottomObjrow.Memo,
                                    color: bottomObjrow.color,
                                    colorExp: bottomObjrow.colorExp,
                                    xcxljgid: bottomObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: bottomObjrow.Numx,
                                    ObjId: bottomObjrow.ObjId,
                                    ProductId: bottomObjrow.ProductId,
                                    Len: Number(rbSubArr[0]) + Number(kytWidth),
                                    LenExp: Number(rbSubArr[0]) + Number(kytWidth),
                                    Cnt: bottomObjrow.Cnt,
                                    CntExp: bottomObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: bottomObjrow.BcpType,
                                    Memo: bottomObjrow.Memo,
                                    color: bottomObjrow.color,
                                    colorExp: bottomObjrow.colorExp,
                                    xcxljgid: bottomObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (lbSub == "" && rbSub != "") {
                    var lbSubArr = lbSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(bottomRow,
                    function(x, bottomObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻下压线" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                var origLen = bottomObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: bottomIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(rbSubArr[0]),
                                        LenExp: Number(origLen) - Number(rbSubArr[0]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(rbSubArr[0]) + Number(kytWidth),
                                        LenExp: Number(rbSubArr[0]) + Number(kytWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (lbSub != "" && rbSub == "") {
                        var lbSubArr = lbSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(bottomRow,
                        function(x, bottomObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻下压线" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                    var origLen = bottomObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: bottomIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(lbSubArr[0]),
                                            LenExp: Number(origLen) - Number(lbSubArr[0]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: bottomObjrow.Numx,
                                            ObjId: bottomObjrow.ObjId,
                                            ProductId: bottomObjrow.ProductId,
                                            Len: Number(lbSubArr[0]) + Number(kytWidth),
                                            LenExp: Number(lbSubArr[0]) + Number(kytWidth),
                                            Cnt: bottomObjrow.Cnt,
                                            CntExp: bottomObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: bottomObjrow.BcpType,
                                            Memo: bottomObjrow.Memo,
                                            color: bottomObjrow.color,
                                            colorExp: bottomObjrow.colorExp,
                                            xcxljgid: bottomObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (ltSub != "" && lbSub != "") {
                var ltSubArr = ltSub.split(",");
                var lbSubArr = lbSub.split(",");
                $.each(leftRow,
                function(x, leftObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻左压线" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                            var origLen = leftObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: leftIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                    LenExp: Number(origLen) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: leftObjrow.Numx,
                                    ObjId: leftObjrow.ObjId,
                                    ProductId: leftObjrow.ProductId,
                                    Len: Number(ltSubArr[1]) + Number(kytWidth),
                                    LenExp: Number(ltSubArr[1]) + Number(kytWidth),
                                    Cnt: leftObjrow.Cnt,
                                    CntExp: leftObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: leftObjrow.BcpType,
                                    Memo: leftObjrow.Memo,
                                    color: leftObjrow.color,
                                    colorExp: leftObjrow.colorExp,
                                    xcxljgid: leftObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: leftObjrow.Numx,
                                    ObjId: leftObjrow.ObjId,
                                    ProductId: leftObjrow.ProductId,
                                    Len: Number(lbSubArr[1]) + Number(kytWidth),
                                    LenExp: Number(lbSubArr[1]) + Number(kytWidth),
                                    Cnt: leftObjrow.Cnt,
                                    CntExp: leftObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: leftObjrow.BcpType,
                                    Memo: leftObjrow.Memo,
                                    color: leftObjrow.color,
                                    colorExp: leftObjrow.colorExp,
                                    xcxljgid: leftObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (ltSub == "" && lbSub != "") {
                    var ltSubArr = ltSub.split(",");
                    var lbSubArr = lbSub.split(",");
                    $.each(leftRow,
                    function(x, leftObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻左压线" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                var origLen = leftObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: leftIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(lbSubArr[1]),
                                        LenExp: Number(origLen) - Number(lbSubArr[1]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(lbSubArr[1]) + Number(kytWidth),
                                        LenExp: Number(lbSubArr[1]) + Number(kytWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (ltSub != "" && lbSub == "") {
                        var ltSubArr = ltSub.split(",");
                        var lbSubArr = lbSub.split(",");
                        $.each(leftRow,
                        function(x, leftObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻左压线" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                    var origLen = leftObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: leftIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(ltSubArr[1]),
                                            LenExp: Number(origLen) - Number(ltSubArr[1]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: leftObjrow.Numx,
                                            ObjId: leftObjrow.ObjId,
                                            ProductId: leftObjrow.ProductId,
                                            Len: Number(ltSubArr[1]) + Number(kytWidth),
                                            LenExp: Number(ltSubArr[1]) + Number(kytWidth),
                                            Cnt: leftObjrow.Cnt,
                                            CntExp: leftObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: leftObjrow.BcpType,
                                            Memo: leftObjrow.Memo,
                                            color: leftObjrow.color,
                                            colorExp: leftObjrow.colorExp,
                                            xcxljgid: leftObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (rtSub != "" && rbSub != "") {
                var rtSubArr = rtSub.split(",");
                var rbSubArr = rbSub.split(",");
                $.each(rightRow,
                function(x, rightObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻右压线" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                            var origLen = rightObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: rightIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                    LenExp: Number(origLen) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: rightObjrow.Numx,
                                    ObjId: rightObjrow.ObjId,
                                    ProductId: rightObjrow.ProductId,
                                    Len: Number(rtSubArr[1]) + Number(kytWidth),
                                    LenExp: Number(rtSubArr[1]) + Number(kytWidth),
                                    Cnt: rightObjrow.Cnt,
                                    CntExp: rightObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: rightObjrow.BcpType,
                                    Memo: rightObjrow.Memo,
                                    color: rightObjrow.color,
                                    colorExp: rightObjrow.colorExp,
                                    xcxljgid: rightObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: rightObjrow.Numx,
                                    ObjId: rightObjrow.ObjId,
                                    ProductId: rightObjrow.ProductId,
                                    Len: Number(rbSubArr[1]) + Number(kytWidth),
                                    LenExp: Number(rbSubArr[1]) + Number(kytWidth),
                                    Cnt: rightObjrow.Cnt,
                                    CntExp: rightObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: rightObjrow.BcpType,
                                    Memo: rightObjrow.Memo,
                                    color: rightObjrow.color,
                                    colorExp: rightObjrow.colorExp,
                                    xcxljgid: rightObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (rtSub == "" && rbSub != "") {
                    var rtSubArr = rtSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(rightRow,
                    function(x, rightObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻右压线" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                var origLen = rightObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: rightIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(rbSubArr[1]),
                                        LenExp: Number(origLen) - Number(rbSubArr[1]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rbSubArr[1]) + Number(kytWidth),
                                        LenExp: Number(rbSubArr[1]) + Number(kytWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (rtSub != "" && rbSub == "") {
                        var rtSubArr = rtSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(rightRow,
                        function(x, rightObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻右压线" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                    var origLen = rightObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: rightIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(rtSubArr[1]),
                                            LenExp: Number(origLen) - Number(rtSubArr[1]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: rightObjrow.Numx,
                                            ObjId: rightObjrow.ObjId,
                                            ProductId: rightObjrow.ProductId,
                                            Len: Number(rtSubArr[1]) + Number(kytWidth),
                                            LenExp: Number(rtSubArr[1]) + Number(kytWidth),
                                            Cnt: rightObjrow.Cnt,
                                            CntExp: rightObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: rightObjrow.BcpType,
                                            Memo: rightObjrow.Memo,
                                            color: rightObjrow.color,
                                            colorExp: rightObjrow.colorExp,
                                            xcxljgid: rightObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (ltSub != "" && rtSub != "") {
                var ltSubArr = ltSub.split(",");
                var rtSubArr = rtSub.split(",");
                $.each(topRow,
                function(x, topObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻上转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                            var origLen = topObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: topIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                    LenExp: Number(origLen) - Number(ltSubArr[0]) - Number(rtSubArr[0]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: topObjrow.Numx,
                                    ObjId: topObjrow.ObjId,
                                    ProductId: topObjrow.ProductId,
                                    Len: Number(ltSubArr[0]) + Number(zklWidth),
                                    LenExp: Number(ltSubArr[0]) + Number(zklWidth),
                                    Cnt: topObjrow.Cnt,
                                    CntExp: topObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: topObjrow.BcpType,
                                    Memo: topObjrow.Memo,
                                    color: topObjrow.color,
                                    colorExp: topObjrow.colorExp,
                                    xcxljgid: topObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: topObjrow.Numx,
                                    ObjId: topObjrow.ObjId,
                                    ProductId: topObjrow.ProductId,
                                    Len: Number(rtSubArr[0]) + Number(zklWidth),
                                    LenExp: Number(rtSubArr[0]) + Number(zklWidth),
                                    Cnt: topObjrow.Cnt,
                                    CntExp: topObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: topObjrow.BcpType,
                                    Memo: topObjrow.Memo,
                                    color: topObjrow.color,
                                    colorExp: topObjrow.colorExp,
                                    xcxljgid: topObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (ltSub == "" && rtSub != "") {
                    var ltSubArr = ltSub.split(",");
                    var rtSubArr = rtSub.split(",");
                    $.each(topRow,
                    function(x, topObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻上转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                var origLen = topObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: topIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(rtSubArr[0]),
                                        LenExp: Number(origLen) - Number(rtSubArr[0]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: topObjrow.Numx,
                                        ObjId: topObjrow.ObjId,
                                        ProductId: topObjrow.ProductId,
                                        Len: Number(rtSubArr[0]) + Number(zklWidth),
                                        LenExp: Number(rtSubArr[0]) + Number(zklWidth),
                                        Cnt: topObjrow.Cnt,
                                        CntExp: topObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: topObjrow.BcpType,
                                        Memo: topObjrow.Memo,
                                        color: topObjrow.color,
                                        colorExp: topObjrow.colorExp,
                                        xcxljgid: topObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (ltSub != "" && rtSub == "") {
                        var ltSubArr = ltSub.split(",");
                        var rtSubArr = rtSub.split(",");
                        $.each(topRow,
                        function(x, topObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻上转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == topObjrow.ProductId) {
                                    var origLen = topObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: topIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(ltSubArr[0]),
                                            LenExp: Number(origLen) - Number(ltSubArr[0]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: topObjrow.Numx,
                                            ObjId: topObjrow.ObjId,
                                            ProductId: topObjrow.ProductId,
                                            Len: Number(ltSubArr[0]) + Number(zklWidth),
                                            LenExp: Number(ltSubArr[0]) + Number(zklWidth),
                                            Cnt: topObjrow.Cnt,
                                            CntExp: topObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: topObjrow.BcpType,
                                            Memo: topObjrow.Memo,
                                            color: topObjrow.color,
                                            colorExp: topObjrow.colorExp,
                                            xcxljgid: topObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (lbSub != "" && rbSub != "") {
                var lbSubArr = lbSub.split(",");
                var rbSubArr = rbSub.split(",");
                $.each(bottomRow,
                function(x, bottomObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻下转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                            var origLen = bottomObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: bottomIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                    LenExp: Number(origLen) - Number(lbSubArr[0]) - Number(rbSubArr[0]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: bottomObjrow.Numx,
                                    ObjId: bottomObjrow.ObjId,
                                    ProductId: bottomObjrow.ProductId,
                                    Len: Number(lbSubArr[0]) + Number(zklWidth),
                                    LenExp: Number(lbSubArr[0]) + Number(zklWidth),
                                    Cnt: bottomObjrow.Cnt,
                                    CntExp: bottomObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: bottomObjrow.BcpType,
                                    Memo: bottomObjrow.Memo,
                                    color: bottomObjrow.color,
                                    colorExp: bottomObjrow.colorExp,
                                    xcxljgid: bottomObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: bottomObjrow.Numx,
                                    ObjId: bottomObjrow.ObjId,
                                    ProductId: bottomObjrow.ProductId,
                                    Len: Number(rbSubArr[0]) + Number(zklWidth),
                                    LenExp: Number(rbSubArr[0]) + Number(zklWidth),
                                    Cnt: bottomObjrow.Cnt,
                                    CntExp: bottomObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: bottomObjrow.BcpType,
                                    Memo: bottomObjrow.Memo,
                                    color: bottomObjrow.color,
                                    colorExp: bottomObjrow.colorExp,
                                    xcxljgid: bottomObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (lbSub == "" && rbSub != "") {
                    var lbSubArr = lbSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(bottomRow,
                    function(x, bottomObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻下转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                var origLen = bottomObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: bottomIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(rbSubArr[0]),
                                        LenExp: Number(origLen) - Number(rbSubArr[0]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: bottomObjrow.Numx,
                                        ObjId: bottomObjrow.ObjId,
                                        ProductId: bottomObjrow.ProductId,
                                        Len: Number(rbSubArr[0]) + Number(zklWidth),
                                        LenExp: Number(rbSubArr[0]) + Number(zklWidth),
                                        Cnt: bottomObjrow.Cnt,
                                        CntExp: bottomObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: bottomObjrow.BcpType,
                                        Memo: bottomObjrow.Memo,
                                        color: bottomObjrow.color,
                                        colorExp: bottomObjrow.colorExp,
                                        xcxljgid: bottomObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (lbSub != "" && rbSub == "") {
                        var lbSubArr = lbSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(bottomRow,
                        function(x, bottomObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻下转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == bottomObjrow.ProductId) {
                                    var origLen = bottomObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: bottomIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(lbSubArr[0]),
                                            LenExp: Number(origLen) - Number(lbSubArr[0]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: bottomObjrow.Numx,
                                            ObjId: bottomObjrow.ObjId,
                                            ProductId: bottomObjrow.ProductId,
                                            Len: Number(lbSubArr[0]) + Number(zklWidth),
                                            LenExp: Number(lbSubArr[0]) + Number(zklWidth),
                                            Cnt: bottomObjrow.Cnt,
                                            CntExp: bottomObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: bottomObjrow.BcpType,
                                            Memo: bottomObjrow.Memo,
                                            color: bottomObjrow.color,
                                            colorExp: bottomObjrow.colorExp,
                                            xcxljgid: bottomObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (ltSub != "" && lbSub != "") {
                var ltSubArr = ltSub.split(",");
                var lbSubArr = lbSub.split(",");
                $.each(leftRow,
                function(x, leftObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻左转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                            var origLen = leftObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: leftIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                    LenExp: Number(origLen) - Number(ltSubArr[1]) - Number(lbSubArr[1]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: leftObjrow.Numx,
                                    ObjId: leftObjrow.ObjId,
                                    ProductId: leftObjrow.ProductId,
                                    Len: Number(ltSubArr[1]) + Number(zklWidth),
                                    LenExp: Number(ltSubArr[1]) + Number(zklWidth),
                                    Cnt: leftObjrow.Cnt,
                                    CntExp: leftObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: leftObjrow.BcpType,
                                    Memo: leftObjrow.Memo,
                                    color: leftObjrow.color,
                                    colorExp: leftObjrow.colorExp,
                                    xcxljgid: leftObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: leftObjrow.Numx,
                                    ObjId: leftObjrow.ObjId,
                                    ProductId: leftObjrow.ProductId,
                                    Len: Number(lbSubArr[1]) + Number(zklWidth),
                                    LenExp: Number(lbSubArr[1]) + Number(zklWidth),
                                    Cnt: leftObjrow.Cnt,
                                    CntExp: leftObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: leftObjrow.BcpType,
                                    Memo: leftObjrow.Memo,
                                    color: leftObjrow.color,
                                    colorExp: leftObjrow.colorExp,
                                    xcxljgid: leftObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (ltSub == "" && lbSub != "") {
                    var ltSubArr = ltSub.split(",");
                    var lbSubArr = lbSub.split(",");
                    $.each(leftRow,
                    function(x, leftObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻左转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                var origLen = leftObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: leftIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(lbSubArr[1]),
                                        LenExp: Number(origLen) - Number(lbSubArr[1]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: leftObjrow.Numx,
                                        ObjId: leftObjrow.ObjId,
                                        ProductId: leftObjrow.ProductId,
                                        Len: Number(lbSubArr[1]) + Number(zklWidth),
                                        LenExp: Number(lbSubArr[1]) + Number(zklWidth),
                                        Cnt: leftObjrow.Cnt,
                                        CntExp: leftObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: leftObjrow.BcpType,
                                        Memo: leftObjrow.Memo,
                                        color: leftObjrow.color,
                                        colorExp: leftObjrow.colorExp,
                                        xcxljgid: leftObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (ltSub != "" && lbSub == "") {
                        var ltSubArr = ltSub.split(",");
                        var lbSubArr = lbSub.split(",");
                        $.each(leftRow,
                        function(x, leftObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻左转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == leftObjrow.ProductId) {
                                    var origLen = leftObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: leftIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(ltSubArr[1]),
                                            LenExp: Number(origLen) - Number(ltSubArr[1]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: leftObjrow.Numx,
                                            ObjId: leftObjrow.ObjId,
                                            ProductId: leftObjrow.ProductId,
                                            Len: Number(ltSubArr[1]) + Number(zklWidth),
                                            LenExp: Number(ltSubArr[1]) + Number(zklWidth),
                                            Cnt: leftObjrow.Cnt,
                                            CntExp: leftObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: leftObjrow.BcpType,
                                            Memo: leftObjrow.Memo,
                                            color: leftObjrow.color,
                                            colorExp: leftObjrow.colorExp,
                                            xcxljgid: leftObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
            if (rtSub != "" && rbSub != "") {
                var rtSubArr = rtSub.split(",");
                var rbSubArr = rbSub.split(",");
                $.each(rightRow,
                function(x, rightObjrow) {
                    $.each(xcxljgJson,
                    function(k, fcObj) {
                        if (fcObj.type == "P" && fcObj.name == "固玻右转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                            var origLen = rightObjrow.Len;
                            $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                index: rightIdx[x],
                                row: {
                                    Len: Number(origLen) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                    LenExp: Number(origLen) - Number(rtSubArr[1]) - Number(rbSubArr[1]),
                                    Angle: "45-45"
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: rightObjrow.Numx,
                                    ObjId: rightObjrow.ObjId,
                                    ProductId: rightObjrow.ProductId,
                                    Len: Number(rtSubArr[1]) + Number(zklWidth),
                                    LenExp: Number(rtSubArr[1]) + Number(zklWidth),
                                    Cnt: rightObjrow.Cnt,
                                    CntExp: rightObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: rightObjrow.BcpType,
                                    Memo: rightObjrow.Memo,
                                    color: rightObjrow.color,
                                    colorExp: rightObjrow.colorExp,
                                    xcxljgid: rightObjrow.xcxljgid
                                }
                            });
                            $("#" + mDrawPrProperty).datagrid("insertRow", {
                                index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                row: {
                                    Numx: rightObjrow.Numx,
                                    ObjId: rightObjrow.ObjId,
                                    ProductId: rightObjrow.ProductId,
                                    Len: Number(rbSubArr[1]) + Number(zklWidth),
                                    LenExp: Number(rbSubArr[1]) + Number(zklWidth),
                                    Cnt: rightObjrow.Cnt,
                                    CntExp: rightObjrow.CntExp,
                                    Angle: "平行45-45",
                                    BcpType: rightObjrow.BcpType,
                                    Memo: rightObjrow.Memo,
                                    color: rightObjrow.color,
                                    colorExp: rightObjrow.colorExp,
                                    xcxljgid: rightObjrow.xcxljgid
                                }
                            })
                        }
                    })
                })
            } else {
                if (rtSub == "" && rbSub != "") {
                    var rtSubArr = rtSub.split(",");
                    var rbSubArr = rbSub.split(",");
                    $.each(rightRow,
                    function(x, rightObjrow) {
                        $.each(xcxljgJson,
                        function(k, fcObj) {
                            if (fcObj.type == "P" && fcObj.name == "固玻右转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                var origLen = rightObjrow.Len;
                                $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                    index: rightIdx[x],
                                    row: {
                                        Len: Number(origLen) - Number(rbSubArr[1]),
                                        LenExp: Number(origLen) - Number(rbSubArr[1]),
                                        Angle: "45-45"
                                    }
                                });
                                $("#" + mDrawPrProperty).datagrid("insertRow", {
                                    index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                    row: {
                                        Numx: rightObjrow.Numx,
                                        ObjId: rightObjrow.ObjId,
                                        ProductId: rightObjrow.ProductId,
                                        Len: Number(rbSubArr[1]) + Number(zklWidth),
                                        LenExp: Number(rbSubArr[1]) + Number(zklWidth),
                                        Cnt: rightObjrow.Cnt,
                                        CntExp: rightObjrow.CntExp,
                                        Angle: "平行45-45",
                                        BcpType: rightObjrow.BcpType,
                                        Memo: rightObjrow.Memo,
                                        color: rightObjrow.color,
                                        colorExp: rightObjrow.colorExp,
                                        xcxljgid: rightObjrow.xcxljgid
                                    }
                                })
                            }
                        })
                    })
                } else {
                    if (rtSub != "" && rbSub == "") {
                        var rtSubArr = rtSub.split(",");
                        var rbSubArr = rbSub.split(",");
                        $.each(rightRow,
                        function(x, rightObjrow) {
                            $.each(xcxljgJson,
                            function(k, fcObj) {
                                if (fcObj.type == "P" && fcObj.name == "固玻右转换料" && fcObj.bmain.toString() == "true" && fcObj.prid == rightObjrow.ProductId) {
                                    var origLen = rightObjrow.Len;
                                    $("#" + mDrawPrProperty).propertygrid("updateRow", {
                                        index: rightIdx[x],
                                        row: {
                                            Len: Number(origLen) - Number(rtSubArr[1]),
                                            LenExp: Number(origLen) - Number(rtSubArr[1]),
                                            Angle: "45-45"
                                        }
                                    });
                                    $("#" + mDrawPrProperty).datagrid("insertRow", {
                                        index: $("#" + mDrawPrProperty).datagrid("getRows").length,
                                        row: {
                                            Numx: rightObjrow.Numx,
                                            ObjId: rightObjrow.ObjId,
                                            ProductId: rightObjrow.ProductId,
                                            Len: Number(rtSubArr[1]) + Number(zklWidth),
                                            LenExp: Number(rtSubArr[1]) + Number(zklWidth),
                                            Cnt: rightObjrow.Cnt,
                                            CntExp: rightObjrow.CntExp,
                                            Angle: "平行45-45",
                                            BcpType: rightObjrow.BcpType,
                                            Memo: rightObjrow.Memo,
                                            color: rightObjrow.color,
                                            colorExp: rightObjrow.colorExp,
                                            xcxljgid: rightObjrow.xcxljgid
                                        }
                                    })
                                }
                            })
                        })
                    }
                }
            }
        }
    }
    var xGlassInfoStr = MicroXwin_getXGlassInfoList();
    if (xGlassInfoStr.length > 0) {
        var Numx = MicroBudget_getPropertyValue(mBudgetWinProperty, "Numx");
        para = {};
        para.action = "delXGlassSvg";
        para.Numx = Numx;
        $.ajax({
            url: "../MicroBudget/WEB_BUDGET.ashx",
            data: para,
            type: "POST",
            dataType: "text",
            async: false,
            success: function(result) {
                if (result == "ok") {} else {
                    jQuery.messager.alert("提示:", Numx + " 删除异形玻璃SVG失败!", "error");
                    return
                }
            }
        });
        var xGlassInfoArr = xGlassInfoStr.split(";");
        for (var i = 0; i < xGlassInfoArr.length; i++) {
            var svgStr = MicroXwin_getXGlassSvg(xGlassInfoArr[i]);
            var xGlassInfoSubArr = xGlassInfoArr[i].split(",");
            var glassObjId = xGlassInfoSubArr[0];
            var glassFlagTxt = xGlassInfoSubArr[11];
            var Glass = xGlassInfoSubArr[12];
            var glassGy = xGlassInfoSubArr[13];
            var glassDb = xGlassInfoSubArr[14];
            var glassMb = xGlassInfoSubArr[15];
            var Cnt = xGlassInfoSubArr[16];
            para = {};
            para.action = "saveXGlassSvg";
            para.Numx = Numx;
            para.glassObjId = glassObjId;
            para.glassFlagTxt = glassFlagTxt;
            para.Glass = Glass;
            para.glassGy = glassGy;
            para.glassDb = glassDb;
            para.glassMb = glassMb;
            para.Cnt = Cnt;
            para.svgStr = svgStr;
            $.ajax({
                url: "../MicroBudget/WEB_BUDGET.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(result) {
                    if (result == "ok") {} else {
                        jQuery.messager.alert("提示:", Numx + " glassId: " + glassObjId + " 插入异形玻璃SVG失败!", "error");
                        return
                    }
                }
            })
        }
    }
}
function MicroXwin_addXwinOpt(A) {
    var D = "MicroXwin_addXwinOpt_dlg";
    var C = "";
    for (var B = 0; B < mPublicXcxlList.length; B++) {
        if (mPublicXcxlList[B].id == A) {
            C = mPublicXcxlList[B].name
        }
    }
    $("<div></div>").dialog({
        id: D,
        title: C + " 增加异形窗参数...",
        href: "../MicroBase/WEB_DR_XCXL_addDmWidthOpt.html",
        height: 430,
        width: 900,
        modal: true,
        iconCls: "icon-add",
        buttons: [{
            text: "确定",
            iconCls: "icon-add",
            handler: function() {
                $("#WEB_DR_XCXL_ADDDMWIDTH_FORM").form("submit", {
                    url: "../MicroBase/WEB_DR_XCXL.ashx",
                    onSubmit: function(E) {
                        E.action = "addXwinOpt";
                        E.xcxlId = A;
                        return $(this).form("validate")
                    },
                    success: function(E) {
                        if (E.substring(0, 2) == "ok") {
                            jQuery.messager.alert("提示:", "增加参数成功!" + E, "info");
                            $("#" + D).dialog("destroy");
                            mXcxljgStrArray = new Array();
                            MicroDraw_genData_getXcxljgByXcxlId(A);
                            setTimeout(function() {
                                MicroXwin_calcAllExp()
                            },
                            500)
                        } else {
                            jQuery.messager.alert("提示:", "增加参数失败！" + E, "error")
                        }
                    }
                })
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#" + D).dialog("destroy")
            }
        }],
        onClose: function() {
            $("#" + D).dialog("destroy")
        },
        onLoad: function() {
            $("#WEB_DR_XCXL_ADDDMWIDTH_FORM_kdmWidth").textbox("setValue", "0");
            $("#WEB_DR_XCXL_ADDDMWIDTH_FORM_kytWidth").textbox("setValue", "0");
            $("#WEB_DR_XCXL_ADDDMWIDTH_FORM_zklWidth").textbox("setValue", "0")
        }
    })
}
function MicroXwin_isXGlass(M) {
    var F = false;
    var J = $("#" + M).get(0);
    var E = J.getAttribute("mwidth");
    var K = J.getAttribute("mheight");
    var B = $(J).parents("[mtype=" + mDrawFlag_Win + "]").get(0);
    var I = B.getAttribute("id");
    var D = MicroXwin_isExistsXwin(I, mDrawFlag_Custom_qj_rt);
    if (D.length > 0) {
        var L = MicroXwin_isTwoObjOverlap(M, D);
        if (L.toString().length > 0) {
            var A = L.split(",");
            var O = A[0];
            var H = A[1];
            if (Number(O) < Number(E) && Number(H) < Number(K)) {
                F = true
            }
        }
    }
    var G = MicroXwin_isExistsXwin(I, mDrawFlag_Custom_qj_rb);
    if (G.length > 0) {
        var L = MicroXwin_isTwoObjOverlap(M, G);
        if (L.toString().length > 0) {
            var A = L.split(",");
            var O = A[0];
            var H = A[1];
            if (Number(O) < Number(E) && Number(H) < Number(K)) {
                F = true
            }
        }
    }
    var N = MicroXwin_isExistsXwin(I, mDrawFlag_Custom_qj_lt);
    if (N.length > 0) {
        var L = MicroXwin_isTwoObjOverlap(M, N);
        if (L.toString().length > 0) {
            var A = L.split(",");
            var O = A[0];
            var H = A[1];
            if (Number(O) < Number(E) && Number(H) < Number(K)) {
                F = true
            }
        }
    }
    var C = MicroXwin_isExistsXwin(I, mDrawFlag_Custom_qj_lb);
    if (C.length > 0) {
        var L = MicroXwin_isTwoObjOverlap(M, C);
        if (L.toString().length > 0) {
            var A = L.split(",");
            var O = A[0];
            var H = A[1];
            if (Number(O) < Number(E) && Number(H) < Number(K)) {
                F = true
            }
        }
    }
    return F
}
function MicroXwin_getXGlassInfoList() {
    var A = "";
    var B = $.Micro.MergeObjs([$("#" + mDrawFlag_SvgId + " [mtype='" + mDrawFlag_Win + "']"), $("#" + mDrawFlag_SvgId + " [mtype='" + mDrawFlag_Custom_arc + "']")]);
    $.each(B,
    function() {
        var D = $(this).get(0);
        var C = D.getAttribute("id");
        $("#" + C + " [mtype='" + mDrawFlag_Glass + "']").each(function(L, M) {
            var K = M.getAttribute("id");
            if (MicroXwin_isXGlass(K)) {
                var I = K;
                var d = 0;
                var J = 0;
                var c = "";
                var E = "";
                var b = "";
                var X = "";
                var e = "";
                var G = 0;
                var a = $("#" + mDrawGlProperty).datagrid("getRows");
                for (j = 0; j < a.length; j++) {
                    var S = $("#" + mDrawGlProperty).datagrid("getRowIndex", a[j]);
                    if (K == a[j].ObjId) {
                        d = a[j].W;
                        J = a[j].H;
                        c = a[j].Flag;
                        E = a[j].Glass;
                        b = a[j].glassGy;
                        X = a[j].glassDb;
                        e = a[j].glassMb;
                        G = a[j].Cnt
                    }
                }
                var f = 0,
                V = 0;
                var U = MicroXwin_isExistsXwin(C, mDrawFlag_Custom_qj_lt);
                if (U.length > 0) {
                    var T = MicroXwin_isTwoObjOverlap(K, U);
                    if (T.toString().length > 0) {
                        var R = T.split(",");
                        var f = R[0];
                        var V = R[1]
                    }
                }
                var W = 0,
                N = 0;
                var O = MicroXwin_isExistsXwin(C, mDrawFlag_Custom_qj_rt);
                if (O.length > 0) {
                    var T = MicroXwin_isTwoObjOverlap(K, O);
                    if (T.toString().length > 0) {
                        var R = T.split(",");
                        var W = R[0];
                        var N = R[1]
                    }
                }
                var Z = 0,
                Y = 0;
                var P = MicroXwin_isExistsXwin(C, mDrawFlag_Custom_qj_rb);
                if (P.length > 0) {
                    var T = MicroXwin_isTwoObjOverlap(K, P);
                    if (T.toString().length > 0) {
                        var R = T.split(",");
                        var Z = R[0];
                        var Y = R[1]
                    }
                }
                var Q = 0,
                F = 0;
                var H = MicroXwin_isExistsXwin(C, mDrawFlag_Custom_qj_lb);
                if (H.length > 0) {
                    var T = MicroXwin_isTwoObjOverlap(K, H);
                    if (T.toString().length > 0) {
                        var R = T.split(",");
                        var Q = R[0];
                        var F = R[1]
                    }
                }
                A = A + ";" + I + "," + d + "," + J + "," + f + "," + V + "," + W + "," + N + "," + Z + "," + Y + "," + Q + "," + F + "," + c + "," + E + "," + b + "," + X + "," + e + "," + G
            }
        })
    });
    if (A.length > 0) {
        A = A.substr(1)
    }
    return A
}
function MicroXwin_getXGlassSvg(w) {
    var t = "";
    var G = "";
    var L = 25;
    var q = 25;
    var p = 50;
    var x = 25;
    var I = 120;
    var h = 100;
    var o = "";
    var Af = 0;
    var Ac = 0;
    var Ad = 0,
    Ae = 0;
    var i = 0,
    k = 0;
    var S = 0,
    Aa = 0;
    var l = 0,
    m = 0;
    var W = "";
    var v = w.split(",");
    o = v[0];
    Af = v[1];
    Ac = v[2];
    Ad = v[3];
    Ae = v[4];
    i = v[5];
    k = v[6];
    S = v[7];
    Aa = v[8];
    l = v[9];
    m = v[10];
    W = v[11];
    var d = 0,
    N = 0;
    var K = 0,
    J = 0;
    var z = 0,
    y = 0;
    var s = 0,
    r = 0;
    var b = 0,
    T = 0;
    var Ag = 0,
    A = 0;
    var Z = 0,
    a = 0;
    var Q = 0,
    R = 0;
    var c = 0,
    U = 0;
    var Y = 0,
    X = 0;
    var F = 0,
    E = 0;
    var g = 0,
    P = 0;
    var e = 0,
    H = 0;
    var n = 0,
    V = 0;
    var C = 0,
    D = 0;
    var O = 0,
    Ab = 0;
    d = I;
    N = h;
    b = d + (Af / 1000) * mDrawPixelPerM;
    T = N;
    c = b;
    U = T + (Ac / 1000) * mDrawPixelPerM;
    e = d;
    H = U;
    if (! (Ad == 0 && Ae == 0)) {
        K = d + (Ad / 1000) * mDrawPixelPerM;
        J = N;
        z = d + (Ad / 1000) * mDrawPixelPerM;
        y = N + (Ae / 1000) * mDrawPixelPerM;
        s = d;
        r = N + (Ae / 1000) * mDrawPixelPerM
    } else {
        if (Ad >= Af && Ae < Ac) {
            K = 0;
            J = 0;
            z = 0;
            y = 0;
            s = 0;
            r = 0;
            Ag = 0;
            A = 0;
            Z = 0;
            a = 0;
            Q = 0;
            R = 0;
            N = N + (Ae / 1000) * mDrawPixelPerM;
            T = T + (Ae / 1000) * mDrawPixelPerM
        } else {
            if (Ad < Af && Ae >= Ac) {
                K = 0;
                J = 0;
                z = 0;
                y = 0;
                s = 0;
                r = 0;
                n = 0;
                V = 0;
                C = 0;
                D = 0;
                O = 0;
                Ab = 0;
                d = d + (Ad / 1000) * mDrawPixelPerM;
                e = e + (Ad / 1000) * mDrawPixelPerM
            }
        }
    }
    if (! (i == 0 && k == 0)) {
        Ag = b;
        A = T + (k / 1000) * mDrawPixelPerM;
        Z = b - (i / 1000) * mDrawPixelPerM;
        a = T + (k / 1000) * mDrawPixelPerM;
        Q = b - (i / 1000) * mDrawPixelPerM;
        R = T
    } else {
        if (i >= Af && k < Ac) {
            K = 0;
            J = 0;
            z = 0;
            y = 0;
            s = 0;
            r = 0;
            Ag = 0;
            A = 0;
            Z = 0;
            a = 0;
            Q = 0;
            R = 0;
            N = N + (k / 1000) * mDrawPixelPerM;
            T = T + (k / 1000) * mDrawPixelPerM
        } else {
            if (i < Af && k >= Ac) {
                Ag = 0;
                A = 0;
                Z = 0;
                a = 0;
                Q = 0;
                R = 0;
                Y = 0;
                X = 0;
                F = 0;
                E = 0;
                g = 0;
                P = 0;
                b = b - (i / 1000) * mDrawPixelPerM;
                c = c - (i / 1000) * mDrawPixelPerM
            }
        }
    }
    if (! (S == 0 && Aa == 0)) {
        Y = c - (S / 1000) * mDrawPixelPerM;
        X = U;
        F = c - (S / 1000) * mDrawPixelPerM;
        E = U - (Aa / 1000) * mDrawPixelPerM;
        g = c;
        P = U - (Aa / 1000) * mDrawPixelPerM
    } else {
        if (S >= Af && Aa < Ac) {
            Y = 0;
            X = 0;
            F = 0;
            E = 0;
            g = 0;
            P = 0;
            n = 0;
            V = 0;
            C = 0;
            D = 0;
            O = 0;
            Ab = 0;
            U = U - (Aa / 1000) * mDrawPixelPerM;
            H = H - (Aa / 1000) * mDrawPixelPerM
        } else {
            if (S < Af && Aa >= Ac) {
                Ag = 0;
                A = 0;
                Z = 0;
                a = 0;
                Q = 0;
                R = 0;
                Y = 0;
                X = 0;
                F = 0;
                E = 0;
                g = 0;
                P = 0;
                b = b - (S / 1000) * mDrawPixelPerM;
                e = e - (S / 1000) * mDrawPixelPerM
            }
        }
    }
    if (! (l == 0 && m == 0)) {
        n = e;
        V = H - (m / 1000) * mDrawPixelPerM;
        C = e + (l / 1000) * mDrawPixelPerM;
        D = H - (m / 1000) * mDrawPixelPerM;
        O = e + (l / 1000) * mDrawPixelPerM;
        Ab = H
    } else {
        if (l >= Af && m < Ac) {
            Y = 0;
            X = 0;
            F = 0;
            E = 0;
            g = 0;
            P = 0;
            n = 0;
            V = 0;
            C = 0;
            D = 0;
            O = 0;
            Ab = 0;
            U = U - (m / 1000) * mDrawPixelPerM;
            H = H - (m / 1000) * mDrawPixelPerM
        } else {
            if (l < Af && m >= Ac) {
                K = 0;
                J = 0;
                z = 0;
                y = 0;
                s = 0;
                r = 0;
                n = 0;
                V = 0;
                C = 0;
                D = 0;
                O = 0;
                Ab = 0;
                d = d + (l / 1000) * mDrawPixelPerM;
                e = e + (l / 1000) * mDrawPixelPerM
            }
        }
    }
    var B = "";
    if (s == 0) {
        B = B + " " + d.toString() + "," + N.toString()
    } else {
        B = B + " " + s.toString() + "," + r.toString();
        B = B + " " + z.toString() + "," + y.toString();
        B = B + " " + K.toString() + "," + J.toString()
    }
    if (Ag == 0) {
        B = B + " " + b.toString() + "," + T.toString()
    } else {
        B = B + " " + Q.toString() + "," + R.toString();
        B = B + " " + Z.toString() + "," + a.toString();
        B = B + " " + Ag.toString() + "," + A.toString()
    }
    if (Y == 0) {
        B = B + " " + c.toString() + "," + U.toString()
    } else {
        B = B + " " + g.toString() + "," + P.toString();
        B = B + " " + F.toString() + "," + E.toString();
        B = B + " " + Y.toString() + "," + X.toString()
    }
    if (n == 0) {
        B = B + " " + e.toString() + "," + H.toString()
    } else {
        B = B + " " + O.toString() + "," + Ab.toString();
        B = B + " " + C.toString() + "," + D.toString();
        B = B + " " + n.toString() + "," + V.toString()
    }
    if (B.length > 0) {
        B = B.substr(1)
    }
    if (s != 0 && Q != 0) {
        G = G + MicroXwin_getXGlassRulerSvgStr(s, r - ((Ae / 1000) * mDrawPixelPerM) - L, z, y - ((Ae / 1000) * mDrawPixelPerM) - L, Ad.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(K, J - L, Q, R - L, (Af - Ad - i).toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(Z, a - ((k / 1000) * mDrawPixelPerM) - L, Ag, A - ((k / 1000) * mDrawPixelPerM) - L, i.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(d, N - L - q, b, T - L - q, Af.toString())
    } else {
        if (s != 0 && Q == 0) {
            G = G + MicroXwin_getXGlassRulerSvgStr(s, r - ((Ae / 1000) * mDrawPixelPerM) - L, z, y - ((Ae / 1000) * mDrawPixelPerM) - L, Ad.toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(K, J - L, b, T - L, (Af - Ad - i).toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(d, N - L - q, b, T - L - q, Af.toString())
        } else {
            if (s == 0 && Q != 0) {
                G = G + MicroXwin_getXGlassRulerSvgStr(Z, a - ((k / 1000) * mDrawPixelPerM) - L, Ag, A - ((k / 1000) * mDrawPixelPerM) - L, i.toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(d, N - L, Q, R - L, (Af - i).toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(d, N - L - q, b, T - L - q, Af.toString())
            } else {
                G = G + MicroXwin_getXGlassRulerSvgStr(d, N - L, b, T - L, Af.toString())
            }
        }
    }
    if (Q != 0 && g != 0) {
        G = G + MicroXwin_getXGlassRulerSvgStr(Q + ((i / 1000) * mDrawPixelPerM) + L, R, Ag + L, A, k.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(Ag + L, A, g + L, P, (Ac - k - Aa).toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(g + L, P, Y + ((S / 1000) * mDrawPixelPerM) + L, X, Aa.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(b + L + p, T, c + L + p, U, Ac.toString())
    } else {
        if (Q != 0 && g == 0) {
            G = G + MicroXwin_getXGlassRulerSvgStr(Q + ((i / 1000) * mDrawPixelPerM) + L, R, Ag + L, A, k.toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(Ag + L, A, c + L, U, (Ac - k).toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(b + L + p, T, c + L + p, U, Ac.toString())
        } else {
            if (Q == 0 && g != 0) {
                G = G + MicroXwin_getXGlassRulerSvgStr(b + L, T, g + L, P, (Ac - Aa).toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(g + L, P, Y + ((S / 1000) * mDrawPixelPerM) + L, X, Aa.toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(b + L + p, T, c + L + p, U, Ac.toString())
            } else {
                G = G + MicroXwin_getXGlassRulerSvgStr(b + L, T, c + L, U, Ac.toString())
            }
        }
    }
    if (O != 0 && g != 0) {
        G = G + MicroXwin_getXGlassRulerSvgStr(n, V + ((m / 1000) * mDrawPixelPerM) + L, C, D + ((m / 1000) * mDrawPixelPerM) + L, l.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(O, Ab + L, Y, X + L, (Af - l - S).toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(Y, X + L, g, P + ((Aa / 1000) * mDrawPixelPerM) + L, S.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(e, H + L + q, c, U + L + q, Af.toString())
    } else {
        if (O != 0 && g == 0) {
            G = G + MicroXwin_getXGlassRulerSvgStr(n, V + ((m / 1000) * mDrawPixelPerM) + L, C, D + ((m / 1000) * mDrawPixelPerM) + L, l.toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(O, Ab + L, c, U + L, (Af - l).toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(e, H + L + q, c, U + L + q, Af.toString())
        } else {
            if (O == 0 && g != 0) {
                G = G + MicroXwin_getXGlassRulerSvgStr(e, H + L, Y, X + L, (Af - S).toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(Y, X + L, g, P + ((Aa / 1000) * mDrawPixelPerM) + L, S.toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(e, H + L + q, c, U + L + q, Af.toString())
            } else {
                G = G + MicroXwin_getXGlassRulerSvgStr(e, H + L, c, U + L, Af.toString())
            }
        }
    }
    if (s != 0 && O != 0) {
        G = G + MicroXwin_getXGlassRulerSvgStr(K - ((Ad / 1000) * mDrawPixelPerM) - L - x, J, s - L - x, r, Ae.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(s - L - x, r, n - L - x, V, (Ac - Ae - m).toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(n - L - x, V, O - ((l / 1000) * mDrawPixelPerM) - L - x, Ab, m.toString());
        G = G + MicroXwin_getXGlassRulerSvgStr(d - L - x - p, N, e - L - x - p, H, Ac.toString())
    } else {
        if (s != 0 && O == 0) {
            G = G + MicroXwin_getXGlassRulerSvgStr(K - ((Ad / 1000) * mDrawPixelPerM) - L - x, J, s - L - x, r, Ae.toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(s - L - x, r, e - L - x, H, (Ac - Ae).toString());
            G = G + MicroXwin_getXGlassRulerSvgStr(d - L - x - p, N, e - L - x - p, H, Ac.toString())
        } else {
            if (s == 0 && O != 0) {
                G = G + MicroXwin_getXGlassRulerSvgStr(d - L - x, N, n - L - x, V, (Ac - Ae - m).toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(n - L - x, V, O - ((l / 1000) * mDrawPixelPerM) - L - x, Ab, m.toString());
                G = G + MicroXwin_getXGlassRulerSvgStr(d - L - x - p, N, e - L - x - p, H, Ac.toString())
            } else {
                G = G + MicroXwin_getXGlassRulerSvgStr(d - L - x, N, e - L - x, H, Ac.toString())
            }
        }
    }
    var M = W;
    var f = d + ((Af / 1000) * mDrawPixelPerM) / 2;
    var u = N + ((Ac / 1000) * mDrawPixelPerM) / 2;
    t = t + '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    t = t + '<polygon points="' + B + '" style="fill:white;stroke:black;stroke-width:3"/>';
    t = t + '<g stroke="black">';
    t = t + G;
    t = t + "</g>";
    t = t + '<text x="' + f.toString() + '" y="' + u.toString() + '" font-size="16" fill="#000000" writing-mode="lr" font-weight="700">' + M + "</text>";
    t = t + "</svg>";
    return t
}
function MicroXwin_getXGlassRulerSvgStr(A, B, D, E, G) {
    var F = "";
    var C = MicroDraw_getRulerDataInfo(A, B, D, E, G);
    var H = C.split(",");
    A = H[0];
    B = H[1];
    D = H[2];
    E = H[3];
    xx1 = H[4];
    yy1 = H[5];
    xx2 = H[6];
    yy2 = H[7];
    xx3 = H[8];
    yy3 = H[9];
    xx4 = H[10];
    yy4 = H[11];
    tx1 = H[12];
    ty1 = H[13];
    F = F + '<line x1="' + xx1.toString() + '" y1="' + yy1.toString() + '" x2="' + xx2.toString() + '" y2="' + yy2.toString() + '"/>';
    F = F + '<line x1="' + A.toString() + '" y1="' + B.toString() + '" x2="' + D.toString() + '" y2="' + E.toString() + '"/>';
    F = F + '<line x1="' + xx3.toString() + '" y1="' + yy3.toString() + '" x2="' + xx4.toString() + '" y2="' + yy4.toString() + '"/>';
    F = F + '<text x="' + tx1.toString() + '" y="' + ty1.toString() + '">' + G + "</text>";
    return F
};