var WEB_BUDGET_BUserTags;
var WEB_BUDGET_mBxdUser = 0;
var WEB_BUDGET_mBxdUser_UI = 0;
var WEB_BUDGET_mBsjUser = 0;
var MicroDraw_OrderModel;
var MicroDraw_OrderModel_mainMenus = [{
    title: "我要查单",
    url: "../MicroBudget/WEB_ORDER_QUERY.html",
    closable: false,
    icon: "icon-mSubMenu"
},
{
    title: "我要下单",
    url: "../MicroBudget/WEB_ORDER.aspx",
    closable: false,
    icon: "icon-mSubMenu"
},
{
    title: "修改密码",
    url: "../MicroBudget/WEB_ORDER_SETTING.html",
    closable: false,
    icon: "icon-mSubMenu"
}];
var mNavVersion = "";
var WEB_BUDGET_WIN_MODEL = false;
var MicroDraw_SysSelectObj = null;
function Setting_mBxdUserStyle() {
    if (WEB_BUDGET_mBxdUser_UI == 1) {
        $("#Micro_userId").remove();
        $("#mainFrame").layout("remove", "west");
        $("#mainTab").tabs("close", "流程导航");
        var A = MicroDraw_OrderModel_mainMenus;
        setTimeout(function() {
            for (var B = 0; B < A.length; B++) {
                var C = (B == 1) ? "": A[B].url;
                addTab(A[B].title, C, A[B].icon, A[B].closable)
            }
            $("#mainTab").tabs("select", A[1].title);
            $.Micro.RefreshEasyUITab($("#mainTab"), "", A[1].url)
        },
        500)
    } else {
        $.Micro.RefreshEasyUITab($("#mainTab"), $("#mNavigation"), "navigation.html")
    }
}
mOrderNumRule = "A";
$(document).ready(function() {
    mVersion = getCompanyVersion();
    try {
        WEB_BUDGET_BUserTags = eval(getMicroBUserTags())[0];
        WEB_BUDGET_mBxdUser = Number(WEB_BUDGET_BUserTags.BxdUser);
        WEB_BUDGET_mBsjUser = Number(WEB_BUDGET_BUserTags.BsjUser)
    } catch(e) {}
    switch (mVersion) {
    case "DRAW":
    case "DRAW_M":
    case "DRAW_JX":
    case "OPT":
    case "STORE":
    case "STR+YSYF":
        $("#Micro_ChangemBxdUserUI_LAYOUT").remove();
        WEB_BUDGET_mBxdUser_UI = 0;
        break;
    default:
        if (WEB_BUDGET_mBxdUser == 1 && WEB_BUDGET_mBsjUser == 1) {
            $("#Micro_ChangemBxdUserUI_LAYOUT").show();
            WEB_BUDGET_mBxdUser_UI = getMicroBxdUser_UI();
            if (WEB_BUDGET_mBxdUser_UI == 1) {
                $("#Micro_ChangemBxdUserUI").switchbutton({
                    checked: true
                })
            } else {
                $("#Micro_ChangemBxdUserUI").switchbutton({
                    checked: false
                })
            }
            $("#Micro_ChangemBxdUserUI").switchbutton({
                onChange: function(checked) {
                    setTimeout(function() {
                        setMicroBxdUser_UI();
                        window.location.reload()
                    },
                    200)
                }
            })
        } else {
            $("#Micro_ChangemBxdUserUI_LAYOUT").remove();
            if (WEB_BUDGET_mBxdUser == 1) {
                WEB_BUDGET_mBxdUser_UI = 1
            } else {
                if (WEB_BUDGET_mBsjUser == 1) {
                    WEB_BUDGET_mBxdUser_UI = 0
                }
            }
        }
    }
    var MobileInit = function() {
        var screen_width = window.screen.width;
        var screen_scale = 0.6;
        if (screen_width >= 768) {
            screen_scale = 0.9
        } else {
            if (screen_width < 768 && screen_width >= 480) {
                screen_scale = 0.7
            }
        }
        $("#MicroViewPort").attr("content", "initial-scale=" + screen_scale + ", maximum-scale=" + screen_scale + ",user-scalable=no");
        if (!isPcUserAgent()) {}
    };
    MobileInit();
    $.Micro.Bind($("body"), "mousedown",
    function(e) {
        MicroDraw_SysSelectObj = $(e.target)
    });
    if (isPcUserAgent()) {} else {
        $("#mainFrame").layout("remove", "south")
    }
    mCurUserId = getCurrentUserId();
    mCurUserPwd = getCurrentUserPwd();
    mCompanyId = getCompanyId();
    mIsAllowAll = getIsAllowAll();
    mIsInUser = getIsInUser();
    MaterUserId = getMaterUserId();
    mIsShowSplice = getIsShowSplice();
    if (mVersion == "ERP_ENT") {
        $(".Top_DefinedBTs a").remove()
    } else {
        $(".Top_DefinedBTs .dwhome").show();
        $(".Top_DefinedBTs .shareorder").show()
    }
    mShowTooltips = getShowTooltips();
    para = {};
    para.action = "getAllPower";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        async: false,
        success: function(result) {
            mPublicUserAllPowerList = result
        }
    });
    switch (mVersion) {
    case "DRAW":
    case "DRAW_M":
    case "DRAW_JX":
        addTab("出图报价", "../MicroBudget/WEB_BUDGET.aspx", "icon-mSubMenu", true);
        para = {};
        para.action = "getUser";
        $.ajax({
            url: "../MicroSys/MicroDDDL.ashx",
            data: para,
            type: "POST",
            dataType: "json",
            success: function(result) {
                mPublicUserList = result
            }
        });
        para = {};
        para.action = "getClient";
        $.ajax({
            url: "../MicroSys/MicroDDDL.ashx",
            data: para,
            type: "POST",
            dataType: "json",
            success: function(result) {
                mPublicClientList = result
            }
        });
        para = {};
        para.action = "getWebBudgetFinish";
        $.ajax({
            url: "../MicroSys/MicroDDDL.ashx",
            data: para,
            type: "POST",
            dataType: "json",
            success: function(result) {
                mPublicFinishFlag = result
            }
        });
        initPublicList_gd();
    case "OPT":
    case "DESIGN":
    case "DESIGN_S":
    case "DESIGN_M":
    case "DESIGN_E":
    case "STORE":
    case "DSN+STR":
    case "DSN+STR_ENT":
    case "STR+YSYF":
    default:
        InitLeftMenu();
        initPublicList();
        Micro_InitRemind(1)
    }
    $("#Micro_userId").attr("title", mCurUserId);
    para = {};
    para.action = "getWebBudgeUserInfo";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: true,
        success: function(result) {
            if (result.substring(0, 2) == "ok") {
                var infoArr = result.substring(3).split(",");
                if (infoArr[7].length > 0) {
                    $("#Micro_brand").text("- " + infoArr[7])
                } else {
                    $("#Micro_brand").text("")
                }
                mBxdMoney = infoArr[12] == "True" ? true: false
            } else {
                jQuery.messager.alert("提示:", "获取用户信息失败！", "error");
                location.href = "../MicroLogin/"
            }
        }
    });
    $("#MicroLogoutMain").click(function() {
        MicroWebSocket_close();
        logout()
    });
    $("#Micro_userId").click(function() {
        addTab("系统设置", "../MicroBudget/WEB_BUDGET_SETTING.html", "icon-mSubMenu")
    });
    $("#mainTab").tabs({
        onSelect: function(title) {
            mDrawCopyingObjId = "";
            mDrawCustomObjList = "";
            if (!isEmptyOrNull(mDrawCopyingObjId) || !isEmptyOrNull(mDrawCustomObjList)) {
                MicroDraw_UnselectObj()
            }
        },
        onClose: function(title, index) {
            if (title == "型材优化") {
                mMicroOpt_numList = "";
                mMicroOpt_client = "";
                mMicroOpt_table = ""
            }
        }
    });
    para = {};
    para.action = "getUserMgrHelpRight";
    $.ajax({
        url: "../MicroSys/WEB_HELP.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: true,
        success: function(result) {
            if (result.substr(0, 2) == "ok") {
                if (result.substr(3) == "1") {
                    $("#MicroMgrHelpSys").css("display", "normal")
                } else {
                    $("#MicroMgrHelpSys").remove()
                }
            } else {
                jQuery.messager.alert("提示:", "失败!", "error")
            }
            if (mShowTooltips == "Y") {
                introJs().setOption("doneLabel", "下次登录不再提示").setOption("showBullets", false).setOption("showStepNumbers", false).start().oncomplete(function() {
                    setLoginNoTooltips()
                })
            }
        }
    });
    if (mPublicLoginStyle == "crmLogin") {} else {
        MicroWebSocket_init()
    }
    var autoOpenMiniwin = function() {
        if (mVersion == "ERP_ENT") {
            return
        } (function() {
            $.ajax({
                url: "../MicroSys/MicroDDDL.ashx",
                data: {
                    action: "getSysSettingJson"
                },
                type: "POST",
                dataType: "json",
                async: true,
                success: function(result) {
                    var row = result.rows[0];
                    var bMiniwinOpen = row.bMiniwinOpen;
                    var MiniwinOpenTime = (row.MiniwinOpenTime || "16:00") + ":00";
                    if (bMiniwinOpen) {
                        $.ajax({
                            url: "../MicroSys/MicroDDDL.ashx",
                            data: {
                                action: "getUserOpenMiniwinTime"
                            },
                            type: "GET",
                            dataType: "JSON",
                            async: true,
                            success: function(result) {
                                try {
                                    var user_OpenMiniwinTime = result[0].OpenMiniwinTime;
                                    var currDateTime = result[0].SysCurrTime;
                                    var currDate = new Date(currDateTime).pattern("yyyy-MM-dd");
                                    MiniwinOpenTime = currDate + " " + MiniwinOpenTime;
                                    var _MiniwinOpenTime = Date.parse(MiniwinOpenTime);
                                    var _user_OpenMiniwinTime = Date.parse(user_OpenMiniwinTime);
                                    var _currDateTime = Date.parse(currDateTime);
                                    var waitOpen = true;
                                    var user_OpenMiniwinDate = new Date(user_OpenMiniwinTime).pattern("yyyy-MM-dd");
                                    if (String(user_OpenMiniwinDate) != String(currDate)) {
                                        setTimeout(function() {
                                            autoOpen_MICRO_MINIWIN({
                                                setUserOpenMiniwinTime: true
                                            });
                                            setTimeout(function() {
                                                autoOpenMiniwin()
                                            },
                                            1000 * 60 * 5)
                                        },
                                        1000 * 10)
                                    } else {
                                        if (_user_OpenMiniwinTime < _MiniwinOpenTime) {
                                            var autoOpen = function() {
                                                autoOpen_MICRO_MINIWIN({
                                                    setUserOpenMiniwinTime: true
                                                })
                                            };
                                            if (_currDateTime >= _MiniwinOpenTime) {
                                                waitOpen = false
                                            } else {
                                                waitOpen = true
                                            }
                                            if (waitOpen) {
                                                var autoT;
                                                var checkTime = function() {
                                                    currDateTime = $.Micro.STA_CurrTime("long");
                                                    _currDateTime = Date.parse(currDateTime);
                                                    if (_currDateTime >= _MiniwinOpenTime) {
                                                        clearTimeout(autoT);
                                                        autoOpen()
                                                    } else {
                                                        autoT = setTimeout(function() {
                                                            checkTime()
                                                        },
                                                        1000 * 60)
                                                    }
                                                };
                                                checkTime()
                                            } else {
                                                setTimeout(function() {
                                                    autoOpen()
                                                },
                                                1000 * 10)
                                            }
                                        }
                                    }
                                } catch(e) {
                                    console.log(e.name + ":" + e.message)
                                }
                            }
                        })
                    }
                }
            })
        })()
    };
    autoOpenMiniwin()
});
function InitLeftMenu() {
    para = {};
    para.action = "getMenu";
    $.ajax({
        url: "MicroMenu.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(I) {
            mPublicUserPowerList = I;
            if (mPublicUserPowerList.menus && mPublicUserPowerList.menus.length > 0) {
                var F = mPublicUserPowerList.menus;
                var B = false;
                for (var D = 0; D < F.length; D++) {
                    var C = F[D].menuid;
                    if (C == "budget") {
                        var E = F[D].menus;
                        for (var A = 0; A < E.length; A++) {
                            var G = E[A].menuid;
                            if (G == "WEB_BUDGET") {
                                B = true;
                                break
                            }
                        }
                        break
                    }
                }
                if (B) {
                    if (!isPcUserAgent() && WEB_BUDGET_mBxdUser_UI == 0) {
                        if (!$.Micro.isInArray(J, ["DRAW", "DRAW_M", "DRAW_JX", "OPT", "STORE", "STR+YSYF"])) {
                            addTab("出图报价", "../MicroBudget/WEB_BUDGET.aspx", "icon-mSubMenu", true)
                        }
                    }
                }
            }
            $("#westreg").empty();
            var H = "";
            H += '<div class="easyui-accordion" fit="true" border="false">';
            $.each(I.menus,
            function(K, L) {
                H += '<div title="' + L.menuname + '" data-options="iconCls:\'' + L.icon + '\'" style="overflow: auto; padding: 5px;">';
                H += "<ul>";
                $.each(L.menus,
                function(N, M) {
                    if (String(FromCRM_lmClientSecret) != "1") {
                        if ($.inArray(M.menuid, ["CC_SYS_USER", "CC_SYS_USER_BRAND", "CC_SYS_USER_CUSTOMER", "SYS_USER_RIGHT"]) > -1) {
                            return true
                        }
                    }
                    H += '<li><div><a href="#" rel="' + M.url + '" ref="' + M.menuid + '"><span class="' + M.icon + '" style="width: 16px; display: inline-block">&nbsp;</span><span class="nav">' + M.menuname + "</span></a></div></li>"
                });
                H += "</ul></div>"
            });
            H += "</div>";
            $("#westreg").append(H);
            $(".easyui-accordion li a").click(function() {
                var M = $(this).children(".nav").text();
                var L = $(this).attr("rel");
                var K = $(this).attr("ref");
                var N = $(this).children("span").first().attr("class");
                addTab(M, L, N);
                $(".easyui-accordion li div").removeClass("selected");
                $(this).parent().addClass("selected")
            }).hover(function() {
                $(this).parent().addClass("hover")
            },
            function() {
                $(this).parent().removeClass("hover")
            });
            var J = getCompanyVersion();
            $(".easyui-accordion").accordion({
                onSelect: function(L, M) {
                    switch (L) {
                    case "型材仓库":
                        mNavVersion = (J == "STR+YSYF") ? "SALE_STORE_PR": "STORE_PR";
                        break;
                    case "玻璃仓库":
                        mNavVersion = "STORE_GL";
                        break;
                    case "成品仓库":
                        mNavVersion = "STORE_CP";
                        break;
                    case "配件仓库":
                        mNavVersion = (J == "STR+YSYF") ? "SALE_STORE_WJ": "STORE_WJ";
                        break;
                    case "采购管理":
                        mNavVersion = "BUY";
                        break;
                    case "委外加工":
                        mNavVersion = "WWJG";
                        break;
                    default:
                        switch (J) {
                        case "DSN+STR":
                        case "DSN+STR_ENT":
                            mNavVersion = "DSN_STR";
                            break;
                        case "STORE":
                            mNavVersion = "STORE_PR";
                            break;
                        case "STR+YSYF":
                            mNavVersion = "SALE_STORE_PR";
                            break;
                        default:
                            mNavVersion = J
                        }
                    }
                    var K = $("#mainTab").tabs("getTab", "流程导航");
                    $.Micro.RefreshEasyUITab($("#mainTab"), K)
                }
            })
        }
    })
}
function addTab(A, B, C, D, F) {
    if ($.Micro.IsEmpty(D)) {
        D = true
    }
    if ($.Micro.IsEmpty(F)) {
        F = false
    }
    var E = ["我要下单", "客服审核", "财务核价", "客服二审"];
    if (Micro_CheckExistWin(A, B, C, D, E)) {
        return
    }
    E = ["型材申购单", "委外申购单"];
    if (Micro_CheckExistWin(A, B, C, D, E)) {
        return
    }
    E = ["型材采购单", "委外采购单"];
    if (Micro_CheckExistWin(A, B, C, D, E)) {
        return
    }
    E = ["型材申购明细汇总", "委外申购明细汇总"];
    if (Micro_CheckExistWin(A, B, C, D, E)) {
        return
    }
    E = ["型材采购明细汇总", "委外采购明细汇总"];
    if (Micro_CheckExistWin(A, B, C, D, E)) {
        return
    }
    E = ["型材采购进度表", "委外加工进度"];
    if (Micro_CheckExistWin(A, B, C, D, E)) {
        return
    }
    if (Micro_IsExistWebBudgetPage(A, B)) {
        return
    }
    if (!$("#mainTab").tabs("exists", A)) {
        $("#mainTab").tabs("add", {
            title: A,
            href: B,
            closable: D,
            icon: C,
            loadingMessage: "正在加载中......"
        })
    } else {
        $("#mainTab").tabs("select", A)
    }
}
function Micro_CheckExistWin(A, B, D, E, F) {
    if ($.inArray(A, F) >= 0) {
        var G = 0;
        var C = "";
        $.each(F,
        function(H, I) {
            if ($("#mainTab").tabs("exists", I)) {
                if (I == A) {
                    G = 2
                } else {
                    G = 1;
                    C = I
                }
                return false
            }
        });
        if (G == 1) {
            $.messager.alert("提示", "请关闭窗口[" + C + "]，才能打开[" + A + "]！");
            return true
        }
        return false
    }
}
function Micro_IsExistWebBudgetPage(A, B) {
    var D = ["出图报价", "我要下单"];
    if ($("#mainTab").tabs("exists", A)) {
        return false
    }
    if ($.inArray(A, D) == -1) {
        return false
    }
    if ($("#" + mDrawOptProperty).length > 0) {
        var E = false;
        var F = "";
        var C = false;
        if ($("#" + mWEB_ORDER_DrawOptProperty).length > 0) {
            F = "我要下单";
            if ($("#mainTab").tabs("exists", F)) {
                E = true
            }
        } else {
            F = "出图报价";
            if ($("#mainTab").tabs("exists", F) && B == "../MicroBudget/WEB_ORDER.aspx") {
                E = true
            }
        }
        if (E) {
            $.messager.alert("提示", "请先关闭" + F + "窗口，才能打开" + A + "窗口！");
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
function mobileFrame() {
    switch (mVersion) {
    case "DRAW_M":
    case "DRAW_JX":
        location.href = "../MobileDraw/mobileDrawFrame.aspx";
        break;
    default:
        location.href = "../Mobile/mobileFrame.aspx";
        break
    }
}
function microReflashList() {
    var A = $.messager.progress({
        title: "请等待",
        msg: "正在刷新列表..."
    });
    initPublicList();
    setTimeout(function() {
        $.messager.progress("close")
    },
    2000)
}
function microHelp(E) {
    var B = $("#mainTab").tabs("getSelected");
    var C = B.panel("options").title;
    mMicroHelpParm = C;
    var A = "微帮助";
    if ($("#mainTab").tabs("exists", A)) {
        $("#mainTab").tabs("close", A)
    }
    var D = "";
    if (!$.Micro.IsEmpty(E)) {
        D = "?id=" + E
    }
    addTab(A, "../MicroSys/WEB_HELP.html" + D, "icon-help")
}
function microHelpMgr() {
    window.open("../MicroSys/WEB_HELP_MGR.html")
}
window.onload = function() {
    Setting_mBxdUserStyle()
};
function microCourse(F, A) {
    var C = $("#mainTab").tabs("getSelected");
    var D = C.panel("options").title;
    mMicroHelpParm = D;
    var B = "微通知";
    switch (A) {
    case 1:
        B = "微通知";
        break;
    case 2:
        B = "常见问题";
        break;
    case 3:
        B = "升级日志";
        break
    }
    if ($("#mainTab").tabs("exists", B)) {
        $("#mainTab").tabs("close", B)
    }
    var E = "";
    if (!$.Micro.IsEmpty(F)) {
        E = "?id=" + F
    }
    addTab(B, "../MicroAskAnswer/WEB_COURSE_DETAIL.html" + E, "icon-help")
};