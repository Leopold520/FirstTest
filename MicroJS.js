var mPageSize = 100;
var mPageList = [3, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 100, 1000, 10000, 100000000];
var msearchPageList = [3, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 100, 1000, 1500];
var mCurUserId;
var mCurUserPwd;
var mCompanyId;
var mIsAllowAll;
var mIsInUser;
var mIsShowSplice;
var MaterUserId;
var mShowTooltips;
var mVersion;
var mCurMcflId;
var mCurXcxlId;
var mCurXcxlName;
var mCurPriceSysId;
var mCurPriceSysName;
var mMicroHelpParm;
var mPublicOptionList;
var mPublicUserList;
var mPublicAllUserList;
var mPublicUserPowerList;
var mPublicUserAllPowerList;
var mPublicUserMobilePowerList;
var mBxdMoney;
var mPublicReportOrderNum;
var mPublicPcStoreToPc;
var mPublicPrAlarmToRequest;
var mPublicWjAlarmToRequest;
var mPublicMcflList;
var mPublicMcfljgNameList;
var mPublicXcxljgTypeList;
var mPublicXcxlList;
var mPublicAllXcxlList;
var mPublicXcxlRouteList;
var mPublicProjectOrderTypeList;
var mPublicProjectList;
var mPublicColorList;
var mPublicPrList;
var mPublicGlList;
var mPublicGl_glList;
var mPublicGl_swList;
var mPublicWjList;
var mPublicBjType;
var mPublicSupplierList;
var mPublicClientList;
var mPublicClassList;
var mPublicStationList;
var mPublicLinkManList;
var mPublicProceList;
var mPublicRouteList;
var mPublicPrLocationList;
var mPublicPrInTypeList;
var mPublicPrOutTypeList;
var mPublicPrPdTypeList;
var mPublicWjLocationList;
var mPublicWjInTypeList;
var mPublicWjOutTypeList;
var mPublicWjPdTypeList;
var mPublicGlReqTypeList;
var mPublicGlBuyTypeList;
var mPublicGlLocationList;
var mPublicGlInTypeList;
var mPublicGlOutTypeList;
var mPublicGlPdTypeList;
var mPublicCpLocationList;
var mPublicCpInTypeList;
var mPublicCpOutTypeList;
var mPublicCpPdTypeList;
var mPublicXcxljgBjTypeList;
var mPublicPrGlWjList;
var mPublicFinishFlag;
var mPublicUnit;
var mPublicWinProductIdList;
var mPublicAllWinProductIdList;
var mPublicWwProceList;
var mPublicWwCalcModeList;
var mPublicYSList;
var mPublicRZList;
var mPublicYFList;
var mPublicPrAlarmList;
var mPublicBrandsList;
var mPublicLoginStyle;
var mPublicUseOperHistory;
var mDepartment;
var mPublicPLine;
var mPublicRack;
var mPublicBfactoryList;
var mCurrBfactory;
var FromCRM_lmClientSecret;
var mPublicPayWayList = [{
    "id": 1,
    "name": "现金"
},
{
    "id": 2,
    "name": "银行转账"
},
{
    "id": 3,
    "name": "支票"
},
{
    "id": 4,
    "name": "其他"
}];
var mPublicPLineFileTypeList = [{
    text: "--",
    value: ""
},
{
    text: "xls开料中心文件",
    value: "xls开料中心文件"
},
{
    text: "xml加工中心文件",
    value: "xml加工中心文件"
},
{
    text: "txt加工中心文件",
    value: "txt加工中心文件"
}];
var mPublicXlTypeList;
var mPublicPrGlWjInTypeList;
var mMicroVisitEncryptStr = "F3DF01B4-27E7-4DD0-A891-391BB0D3460F";
var mMicroDATASOURCEs = [{
    name: "微高软件(家装)",
    url: "http://www.weigaoruanjian.com/"
},
{
    name: "微高软件(工装)",
    url: "http://www.weigaoruanjian.com:8888/"
},
{
    name: "罗兰西尼",
    url: "http://www.weigaoruanjian.com:8033/"
},
{
    name: "奥迪斯",
    url: "http://www.weigaoruanjian.com:8073/"
},
{
    name: "保富",
    url: "http://www.weigaoruanjian.com:8043/"
}];
var mRegVersions = [{
    version: "OPT",
    text: "型材优化"
},
{
    version: "DRAW",
    text: "门窗画图（小画家-电脑版）"
},
{
    version: "DRAW_M",
    text: "门窗画图（指尖-手机版）"
},
{
    version: "DRAW_JX",
    text: "门窗画图（小画家+指尖）"
},
{
    version: "DESIGN",
    text: "门窗算料（精算师-精简版）"
},
{
    version: "DESIGN_S",
    text: "门窗算料（精算师-单用户）"
},
{
    version: "DESIGN_M",
    text: "门窗算料（精算师-多用户）"
},
{
    version: "DESIGN_E",
    text: "门窗算料（精算师-企业版）"
},
{
    version: "DESIGN_CS",
    text: "材神"
},
{
    version: "DSN+STR",
    text: "算料+仓库（小标杆-标准版）"
},
{
    version: "DSN+STR_ENT",
    text: "算料+仓库（小标杆-企业版）"
},
{
    version: "DSN+YS",
    text: "算料+应收（接单王-标准版）"
},
{
    version: "DSN+YS_ENT",
    text: "算料+应收（接单王-企业版）"
},
{
    version: "STORE",
    text: "仓库管理（铝管家）"
},
{
    version: "STR+YSYF",
    text: "仓库+应收应付（铝行家）"
},
{
    version: "ERP_PRO",
    text: "ERP专业版"
},
{
    version: "ERP_ENT",
    text: "ERP企业版"
}];
var mPublicRouteProceTypeList = [{
    value: "A",
    name: "中挺位划线"
},
{
    value: "B",
    name: "中挺位排水孔"
}];
var mPublicProcessModeList = [{
    value: "A",
    name: "正常"
},
{
    value: "B",
    name: "机械对接"
}];
var MicroNews_ADsList = [{
    src: "http://www.weigaoruanjian.com:8810/MicroADs/720_160.jpg"
}];
var mPublicRackFieldList = []; (function() {
    var A = function(E) {
        var D = Number(E);
        D = D < 10 ? [0, D].join("") : D;
        return D
    };
    for (var B = 1; B <= 20; B++) {
        var C = String(A(B));
        mPublicRackFieldList.push({
            id: C,
            text: C
        })
    }
} ());
function formater_mRegVersions(G, A, E) {
    var D = "";
    var F = [];
    for (var B = 0; B < mRegVersions.length; B++) {
        if (A) {
            var C = G.split(",");
            $.each(C,
            function(I, H) {
                if (mRegVersions[B].version == H) {
                    F.push(mRegVersions[B].text);
                    return false
                }
            })
        } else {
            if (mRegVersions[B].version == G) {
                return mRegVersions[B].text
            }
        }
    }
    if (A) {
        return F.join(E)
    }
    return D
}
var MicroDraw_genData_Action = false;
var mPublicGdList_mDraw_tlc_2_ff_01;
var mPublicGdList_mDraw_tlc_2_kf_01;
var mPublicGdList_mDraw_tlc_2_gf_01;
var mPublicGdList_mDraw_tlc_3_fff_010;
var mPublicGdList_mDraw_tlc_3_fff_011;
var mPublicGdList_mDraw_tlc_3_fff_012;
var mPublicGdList_mDraw_tlc_3_fgf_010;
var mPublicGdList_mDraw_tlc_4_ffff_0110;
var mPublicGdList_mDraw_tlc_4_kffk_0110;
var mPublicGdList_mDraw_tlc_4_gffg_0110;
var mPublicGdList_mDraw_tlc_6_ffffff_012210;
var mPublicGdHandle_ks;
var mPublicGdHandle_zs;
var mPublicGdHandle_dls_l;
var mPublicGdHandle_dls_r;
var mPublicGdHandle_aoxing01, mPublicGdHandle_aoxing02, mPublicGdHandle_aoxing03, mPublicGdHandle_aoxing04;
var mPublicGdHandle_quejiao01, mPublicGdHandle_quejiao02, mPublicGdHandle_quejiao03, mPublicGdHandle_quejiao04;
var mPublicGdHandle_xiexing01, mPublicGdHandle_xiexing02;
var mPublicGlassTech;
var mPublicGlassTexture;
var mPublicConfirmFlagList;
var mPublicRemindInterval;
var mPublicCosts;
var mMcflIdOptStrArray;
var mXcxljgStrArray;
var mOrderNumRule;
var mMicroADsInforURL = "http://www.weigaoruanjian.com:8800/";
var mMicroAskAnswerInforURL = "http://www.weigaoruanjian.com:8800/";
if (window.location.href.indexOf("localhost") > -1 || window.location.href.indexOf("192.168.") > -1) {
    mMicroAskAnswerInforURL = "http://localhost:800/"
}
var ueEditorSimpleToolbars = ["fullscreen", "undo", "redo", "bold", "italic", "underline", "forecolor", "backcolor", "fontsize", "removeformat", "formatmatch", "autotypeset", "pasteplain", "justifyleft", "justifycenter", "justifyright", "simpleupload", "emotion", "print"];
var mBudget_AutoFromWin;
var MicroCookie_ValidityTime = 60 * 60;
var MicroCookie_ShoppingCart = "MicroCJXCXL_ShoppingCart";
var MicroCookie_OperName = "MicroCookie_OperName";
var mCJXCXLAccount_companyId;
var MicroSplitStr = "#%MicroSplitStr%#";
var MicrosysUserIds = ["11111111111", "22222222222", "33333333333"];
var mPublicSalesM_PRToTaskInOut;
var mPublicSalesM_WJToTaskInOut;
var mWEB_BUDGET_CLIENTINFORs = {
    age: [{
        id: "<25"
    },
    {
        id: "25-35"
    },
    {
        id: "35-45"
    },
    {
        id: "45-50"
    },
    {
        id: "50以上"
    }],
    sex: [{
        id: "男"
    },
    {
        id: "女"
    }],
    vocation: [{
        id: "企业主"
    },
    {
        id: "公务员"
    },
    {
        id: "高管"
    },
    {
        id: "自由职业"
    },
    {
        id: "退休人员"
    },
    {
        id: "其他"
    }],
    income: [{
        id: "<20万"
    },
    {
        id: "20-50万"
    },
    {
        id: "50-100万"
    },
    {
        id: ">100万"
    }],
    orderchannel: [{
        id: "自然进店"
    },
    {
        id: "老客户推荐"
    },
    {
        id: "设计师推荐"
    },
    {
        id: "亲友推荐/社会关系"
    },
    {
        id: "活动推广"
    }]
};
var mPublicSuppWJjcPrice;
$.extend($.fn.validatebox.defaults.rules, {
    confirmPass: {
        validator: function(B, A) {
            var C = $(A[0]).passwordbox("getValue");
            return B == C
        },
        message: "两次输入的密码不一致！"
    },
    phoneRex: {
        validator: function(C) {
            var B = /^1[3-9]+\d{9}$/;
            if (!B.test(C)) {
                $.fn.validatebox.defaults.rules.phoneRex.message = "请输入正确的手机号码格式！";
                return false
            }
            var A;
            para = {};
            para.action = "isRegUserExists";
            para.tableName = "cc_sys_user";
            para.keyField = "c_userid";
            para.keyVal = C;
            $.ajax({
                url: "../MicroLogin/register.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(D) {
                    if (D.substr(0, 2) == "ok") {
                        if (D.substr(3).length > 0) {
                            A = D.substr(3)
                        }
                    } else {
                        jQuery.messager.alert("提示:", "获取记录是否存在失败！" + D, "error")
                    }
                }
            });
            if (A == "1") {
                $.fn.validatebox.defaults.rules.phoneRex.message = "该用户已注册！";
                return false
            }
            return true
        }
    },
    phoneCheck: {
        validator: function(B) {
            var A = /^1[3-9]+\d{9}$/;
            if (!A.test(B) || B.length != 11) {
                $.fn.validatebox.defaults.rules.phoneCheck.message = "请输入正确的手机号码格式！";
                return false
            }
            return true
        }
    },
    validArcH: {
        validator: function(C, A) {
            var B = $("#" + A[0])[0].getAttribute("mwidth");
            if (Number(C) * 2 > Number(B)) {
                return false
            } else {
                return true
            }
        },
        message: "高度的两倍值不能大于宽度！"
    },
    validArcW: {
        validator: function(C, B) {
            var A = $("#" + B[0])[0].getAttribute("mheight");
            if (Number(A) * 2 > Number(C)) {
                return false
            } else {
                return true
            }
        },
        message: "高度的两倍值不能大于宽度！"
    }
});
$.fn.extend({
    "rowspan": function(A) {
        return this.each(function() {
            var B;
            $("tr", this).each(function(C) {
                $("td:eq(" + A + ")", this).filter(":visible").each(function(D) {
                    if (B != null && $(this).html() == $(B).html()) {
                        rowspan = $(B).attr("rowSpan");
                        if (rowspan == undefined) {
                            $(B).attr("rowSpan", 1);
                            rowspan = $(B).attr("rowSpan")
                        }
                        rowspan = Number(rowspan) + 1;
                        $(B).attr("rowSpan", rowspan);
                        $(this).hide()
                    } else {
                        B = this
                    }
                })
            })
        })
    },
    "rowspanMultiCol2": function(A, B) {
        return this.each(function() {
            colIdxArr = B.split(",");
            var C;
            $("tr", this).each(function(E) {
                var D = this;
                var F = true;
                $("td:eq(" + A + ")", this).each(function(G) {
                    if (C != null) {
                        var H = $("td", C);
                        $("td", D).each(function(I, J) {
                            if ($.inArray(I.toString(), colIdxArr) >= 0) {
                                if ($(J).html() != H.eq(I).html()) {
                                    F = false
                                }
                            }
                        })
                    }
                    if (C != null && F) {
                        rowspan = H.eq(A).attr("rowSpan");
                        if (rowspan == undefined) {
                            H.eq(A).attr("rowSpan", 1);
                            rowspan = H.eq(A).attr("rowSpan")
                        }
                        rowspan = Number(rowspan) + 1;
                        H.eq(A).attr("rowSpan", rowspan);
                        $(this).hide()
                    } else {
                        C = D
                    }
                })
            })
        })
    },
    "rowspanMultiCol": function(A) {
        return this.each(function() {
            var B;
            $("tr", this).each(function(D) {
                var C = this;
                var E = true;
                $("td:eq(" + A + ")", this).filter(":visible").each(function(F) {
                    if (B != null) {
                        var G = $("td", B);
                        $("td", C).each(function(H, I) {
                            if (H <= A) {
                                if ($(I).html() != G.eq(H).html()) {
                                    E = false
                                }
                            }
                        })
                    }
                    if (B != null && E) {
                        rowspan = G.eq(A).attr("rowSpan");
                        if (rowspan == undefined) {
                            G.eq(A).attr("rowSpan", 1);
                            rowspan = G.eq(A).attr("rowSpan")
                        }
                        rowspan = Number(rowspan) + 1;
                        G.eq(A).attr("rowSpan", rowspan);
                        $(this).hide()
                    } else {
                        B = C
                    }
                })
            })
        })
    }
});
$.fn.extend($.fn.datagrid.defaults, {
    pageSize: mPageSize,
    pageList: mPageList
});
function GetQueryString(C) {
    var B = new RegExp("(^|&)" + C + "=([^&]*)(&|$)");
    var A = window.location.search.substr(1).match(B);
    if (A != null) {
        return unescape(A[2])
    }
    return null
}
function initPublicList_gd() {
    mPublicGdList_mDraw_tlc_2_ff_01 = [{
        id: "0,1",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_2_kf_01 = [{
        id: "k,f",
        name: "左空右扇",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/><rect x='49' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "f,k",
        name: "左扇右空",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='49' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_2_gf_01 = [{
        id: "0,1",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_3_fff_010 = [{
        id: "0,1,0",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='75' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0,1",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='75' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_3_fff_011 = [{
        id: "0,1,1",
        name: "单扇屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='85' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0,0",
        name: "单扇屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='85' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "0,0,1",
        name: "双扇屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='50' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='85' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,1,0",
        name: "双扇屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='50' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='85' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_3_fff_012 = [{
        id: "0,1,2",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='10' width='40' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='75' y='15' width='40' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "2,1,0",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='10' width='40' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='75' y='5' width='40' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_3_fgf_010 = [{
        id: "0,1,0",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='75' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0,1",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='40' y='5' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='75' y='15' width='40' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_4_ffff_0110 = [{
        id: "0,1,1,0",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='30' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='62' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='87' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0,0,1",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='30' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='62' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='87' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_4_kffk_0110 = [{
        id: "0,1,1,0",
        name: "中间两扇",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/><rect x='32' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='59' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='86' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/></svg>"
    },
    {
        id: "1,1,0,0",
        name: "左边两扇",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='32' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='59' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/><rect x='86' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/></svg>"
    },
    {
        id: "0,0,1,1",
        name: "右边两扇",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/><rect x='32' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='none' pointer-events='none'/><rect x='59' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='86' y='5' width='25' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_4_gffg_0110 = [{
        id: "0,1,1,0",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='30' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='62' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='87' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "1,0,0,1",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='30' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='62' y='5' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='87' y='15' width='30' height='10' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdList_mDraw_tlc_6_ffffff_012210 = [{
        id: "0,1,2,2,1,0",
        name: "左扇靠屏内",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='5' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='20' y='10' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='35' y='15' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='57' y='15' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='72' y='10' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='87' y='5' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    },
    {
        id: "2,1,0,0,1,2",
        name: "左扇靠屏外",
        gdpic: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='120' height='30' ><rect x='5' y='15' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='20' y='10' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='35' y='5' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='57' y='5' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='72' y='10' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/><rect x='87' y='15' width='20' height='5' stroke='#000000' stroke-width='1px' fill='#000000' pointer-events='none'/></svg>"
    }];
    mPublicGdHandle_ks = MicroDraw_getSvgStore("ks.svg");
    mPublicGdHandle_zs = MicroDraw_getSvgStore("zs.svg");
    mPublicGdHandle_dls_l = MicroDraw_getSvgStore("dls_l.svg");
    mPublicGdHandle_dls_r = MicroDraw_getSvgStore("dls_r.svg")
}
function initPublicList() {
    para = {};
    para.action = "checkBaseDefault";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {}
    });
    para = {};
    para.action = "getUser";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicAllUserList = A;
            mPublicUserList = [];
            $.each(mPublicAllUserList,
            function(B, C) {
                if (C.b_check == 1) {
                    mPublicUserList.push(C)
                }
            })
        }
    });
    para = {};
    para.action = "getMcfl";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicMcflList = A
        }
    });
    mPublicXcxljgTypeList = [{
        id: "O",
        name: "参数"
    },
    {
        id: "C",
        name: "限制"
    },
    {
        id: "P",
        name: "型材"
    },
    {
        id: "G",
        name: "玻璃"
    },
    {
        id: "F",
        name: "配件"
    },
    {
        id: "B",
        name: "报价"
    },
    {
        id: "A",
        name: "成本"
    },
    {
        id: "L",
        name: "包装"
    }];
    para = {};
    para.action = "getXcxljgBjType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicXcxljgBjTypeList = A
        }
    });
    para = {};
    para.action = "getXcxl";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicXcxlList = A
        }
    });
    para = {};
    para.action = "getXcxl";
    para.getData = "all";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicAllXcxlList = A
        }
    });
    para = {};
    para.action = "getProject";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicProjectList = A
        }
    });
    para = {};
    para.action = "getProjectOrderType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicProjectOrderTypeList = A
        }
    });
    para = {};
    para.action = "getColor";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicColorList = A
        }
    });
    para = {};
    para.action = "getPr";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrList = A
        }
    });
    para = {};
    para.action = "getGl";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlList = A
        }
    });
    para = {};
    para.action = "getGl_gl";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGl_glList = A
        }
    });
    para = {};
    para.action = "getGl_sw";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGl_swList = A
        }
    });
    para = {};
    para.action = "getWj";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicWjList = A
        }
    });
    para = {};
    para.action = "getSuppWJjcPrice";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicSuppWJjcPrice = A
        }
    });
    para = {};
    para.action = "getPrGlWj";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrGlWjList = A
        }
    });
    mPublicBjType = [{
        id: "D",
        text: "基础部分"
    },
    {
        id: "A",
        text: "加价部分"
    }];
    para = {};
    para.action = "getSupplier";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicSupplierList = A
        }
    });
    para = {};
    para.action = "getClient";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicClientList = A
        }
    });
    para = {};
    para.action = "getClass";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicClassList = A
        }
    });
    para = {};
    para.action = "getBfactory";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicBfactoryList = A
        }
    });
    para = {};
    para.action = "getStation";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicStationList = A
        }
    });
    para = {};
    para.action = "getLinkMan";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicLinkManList = A
        }
    });
    para = {};
    para.action = "getProce";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicProceList = A
        }
    });
    para = {};
    para.action = "getRoute";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicRouteList = A
        }
    });
    para = {};
    para.action = "getPrLocation";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrLocationList = A
        }
    });
    para = {};
    para.action = "getPrInType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrInTypeList = A
        }
    });
    para = {};
    para.action = "getPrOutType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrOutTypeList = A
        }
    });
    para = {};
    para.action = "getPrPdType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrPdTypeList = A
        }
    });
    para = {};
    para.action = "getWjLocation";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicWjLocationList = A
        }
    });
    para = {};
    para.action = "getWjInType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicWjInTypeList = A
        }
    });
    para = {};
    para.action = "getWjOutType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicWjOutTypeList = A
        }
    });
    para = {};
    para.action = "getWjPdType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicWjPdTypeList = A
        }
    });
    para = {};
    para.action = "getGlReqType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlReqTypeList = A
        }
    });
    para = {};
    para.action = "getGlBuyType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlBuyTypeList = A
        }
    });
    para = {};
    para.action = "getGlLocation";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlLocationList = A
        }
    });
    para = {};
    para.action = "getGlInType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlInTypeList = A
        }
    });
    para = {};
    para.action = "getGlOutType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlOutTypeList = A
        }
    });
    para = {};
    para.action = "getGlPdType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlPdTypeList = A
        }
    });
    para = {};
    para.action = "getCpLocation";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicCpLocationList = A
        }
    });
    para = {};
    para.action = "getCpInType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicCpInTypeList = A
        }
    });
    para = {};
    para.action = "getCpOutType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicCpOutTypeList = A
        }
    });
    para = {};
    para.action = "getCpPdType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicCpPdTypeList = A
        }
    });
    para = {};
    para.action = "getWebBudgetFinish";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicFinishFlag = A
        }
    });
    para = {};
    para.action = "getAlNoticeItemFinish";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicNoticeFinishFlag = A
        }
    });
    mPublicConfirmFlagList = [{
        id: 0,
        name: "未确认"
    },
    {
        id: 1,
        name: "已确认"
    }];
    initPublicList_gd();
    para = {};
    para.action = "getGlassTech";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlassTech = A
        }
    });
    para = {};
    para.action = "getGlassTexture";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicGlassTexture = A
        }
    });
    para = {};
    para.action = "getUnit";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicUnit = A
        }
    });
    para = {};
    para.action = "getWwProce";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicWwProceList = A
        }
    });
    para = {};
    para.action = "getYSkind";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicYSList = A
        }
    });
    para = {};
    para.action = "getRZkind";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicRZList = A
        }
    });
    para = {};
    para.action = "getYFkind";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicYFList = A
        }
    });
    para = {};
    para.action = "getPrGlWjInType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrGlWjInTypeList = A
        }
    });
    para = {};
    para.action = "getPLine";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPLine = A
        }
    });
    para = {};
    para.action = "getRack";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicRack = A
        }
    });
    mPublicWwCalcModeList = [{
        id: "A",
        name: "按数量"
    },
    {
        id: "B",
        name: "按重量"
    },
    {
        id: "C",
        name: "按双面面积"
    },
    {
        id: "D",
        name: "按外面面积"
    },
    {
        id: "E",
        name: "按内面面积"
    }];
    para = {};
    para.action = "getPrAlarm";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicPrAlarmList = A
        }
    });
    para = {};
    para.action = "getBrands";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            var E = [];
            if (A) {
                for (var D = 0; D < A.length; D++) {
                    var C = A[D].Brand.split(",");
                    for (var B = 0; B < C.length; B++) {
                        if (!$.Micro.isInArray(C[B], E)) {
                            E.push(C[B])
                        }
                    }
                }
            }
            mPublicBrandsList = E
        }
    });
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: {
            action: "getWProductIdByXcxl",
            xcxlid: 0
        },
        type: "POST",
        dataType: "json",
        async: false,
        success: function(A) {
            mPublicAllWinProductIdList = A
        }
    });
    para = {};
    para.action = "getloginStyle";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {
            mPublicLoginStyle = A
        }
    });
    para = {};
    para.action = "getUseOperHistory";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {
            mPublicUseOperHistory = A
        }
    });
    para = {};
    para.action = "getDepartment";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {
            mDepartment = A
        }
    });
    para = {};
    para.action = "getCurrBfactory";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        async: true,
        data: para,
        type: "POST",
        dataType: "text",
        success: function(A) {
            mCurrBfactory = A
        }
    });
    mMcflIdOptStrArray = new Array();
    mXcxljgStrArray = new Array();
    para = {};
    para.action = "getOption";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicOptionList = A
        }
    });
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: {
            action: "getFromCRM_lmClientSecret"
        },
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {
            FromCRM_lmClientSecret = A
        }
    });
    para = {};
    para.action = "getXlType";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(A) {
            mPublicXlTypeList = A
        }
    });
    para = {};
    para.action = "getRemindInterval";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        async: false,
        success: function(A) {
            mPublicRemindInterval = A
        }
    });
    getCJXCXLAccount();
    para = {};
    para.action = "getCosts";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        async: false,
        success: function(A) {
            mPublicCosts = A
        }
    })
}
function dataGridMoveRow(B, G, F) {
    if ("up" == G) {
        if (B != 0) {
            var I = $("#" + F).datagrid("getData").rows[B];
            var J = $("#" + F).datagrid("getData").rows[B - 1];
            var H;
            var E;
            var D;
            var C = $("#" + F).datagrid("getChecked");
            E = false;
            D = false;
            $.each(C,
            function(L, K) {
                H = $("#" + F).datagrid("getRowIndex", K);
                if (B == H) {
                    E = true
                }
                if ((B - 1) == H) {
                    D = true
                }
            });
            $("#" + F).datagrid("getData").rows[B] = J;
            $("#" + F).datagrid("getData").rows[B - 1] = I;
            $("#" + F).datagrid("refreshRow", B);
            $("#" + F).datagrid("refreshRow", B - 1);
            $("#" + F).datagrid("selectRow", B - 1);
            if (D) {
                $("#" + F).datagrid("checkRow", B)
            } else {
                $("#" + F).datagrid("uncheckRow", B)
            }
            if (E) {
                $("#" + F).datagrid("checkRow", B - 1)
            } else {
                $("#" + F).datagrid("uncheckRow", B - 1)
            }
        }
    } else {
        if ("down" == G) {
            var A = $("#" + F).datagrid("getRows").length;
            if (B != A - 1) {
                var J = $("#" + F).datagrid("getData").rows[B];
                var I = $("#" + F).datagrid("getData").rows[B + 1];
                var H;
                var E;
                var D;
                var C = $("#" + F).datagrid("getChecked");
                E = false;
                D = false;
                $.each(C,
                function(L, K) {
                    H = $("#" + F).datagrid("getRowIndex", K);
                    if ((B + 1) == H) {
                        E = true
                    }
                    if (B == H) {
                        D = true
                    }
                });
                $("#" + F).datagrid("getData").rows[B + 1] = J;
                $("#" + F).datagrid("getData").rows[B] = I;
                $("#" + F).datagrid("refreshRow", B);
                $("#" + F).datagrid("refreshRow", B + 1);
                $("#" + F).datagrid("selectRow", B + 1);
                if (D) {
                    $("#" + F).datagrid("checkRow", B + 1)
                } else {
                    $("#" + F).datagrid("uncheckRow", B + 1)
                }
                if (E) {
                    $("#" + F).datagrid("checkRow", B)
                } else {
                    $("#" + F).datagrid("uncheckRow", B)
                }
            }
        }
    }
}
function dataGridSetColVisible(C, A) {
    var B;
    if ($("#" + C).length > 0) {
        B = $("#" + C).datagrid("options").queryParams
    } else {
        return
    }
    para = B || {};
    para.action = "search";
    para.tableName = A;
    $.ajax({
        url: "../MicroSys/SYS_VISIBLE.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        success: function(W) {
            var P = W.substr(2);
            if (W.substr(0, 2) == "ok") {
                var S = P.split(";");
                var J;
                var U;
                var Y;
                var D = {};
                var X = 1;
                U = $("#" + C).datagrid("options").columns;
                for (var E = 0; E < S.length; E++) {
                    J = S[E].split(",");
                    for (var F = 0; F < U[0].length; F++) {
                        if (J[0] == U[0][F].field) {
                            Y = U[0][F];
                            U[0][F] = U[0][X];
                            if (J.length > 2) {
                                Y.width = J[2]
                            }
                            U[0][X] = Y;
                            X = X + 1
                        }
                    }
                }
                D.columns = U;
                $("#" + C).datagrid(D);
                var Z = $("#" + C).datagrid("getColumnFields");
                for (var E = 0; E < S.length; E++) {
                    J = S[E].split(",");
                    if ($.inArray(J[0], Z) != -1) {
                        if (J[1] == "0") {
                            $("#" + C).datagrid("hideColumn", J[0])
                        } else {
                            $("#" + C).datagrid("showColumn", J[0])
                        }
                    }
                }
            } else {
                var U;
                var D = {};
                U = $("#" + C).datagrid("options").columns;
                for (var E = 0; E < U[0].length; E++) {
                    if (U[0][E].ori_formatter) {
                        U[0][E].formatter = U[0][E].ori_formatter
                    }
                }
                D.columns = U;
                $("#" + C).datagrid(D);
                var T = function(a, c, b) {
                    if (a.length == 0 || c == "") {
                        return true
                    }
                    var d = [];
                    switch (mVersion) {
                    case "ERP_ENT":
                        break;
                    default:
                        d = Micro_getItemDefaultHiddenCols(mCompanyId, b).cols
                    }
                    if (d.length > 0) {
                        if ($.inArray(c, d) > -1) {
                            a.datagrid("hideColumn", c)
                        }
                    }
                };
                for (var E = 0; E < U[0].length; E++) {
                    if (U[0][E].hidden == false) {
                        $("#" + C).datagrid("showColumn", U[0][E].field)
                    }
                    T($("#" + C), U[0][E].field, A)
                }
            }
            Micro_setMoneyDisplay(C);
            if ((A.indexOf("_IN") != -1 || A.indexOf("_OUT") != -1 || A.indexOf("_DB") != -1 || A.indexOf("_PD") != -1 || A.indexOf("_DETAIL_STORE") != -1) && A.indexOf("_BCP") == -1) {
                var M = "N";
                var I = "N";
                var N = "";
                var H = "";
                if (A.indexOf("_ITEM") != -1) {
                    H = A.substring(0, A.length - 5)
                }
                if (A.indexOf("_PR_") != -1) {
                    N = "型材仓库"
                } else {
                    if (A.indexOf("_GL_") != -1) {
                        N = "玻璃仓库"
                    } else {
                        if (A.indexOf("_WJ_") != -1) {
                            N = "配件仓库"
                        }
                    }
                }
                M = formatter_option(N, "供应商是否进库存");
                I = formatter_option(N, "工程是否进库存");
                if (isEmptyOrNull(M)) {
                    M = "D"
                }
                if (isEmptyOrNull(I)) {
                    I = "Y"
                }
                var L = $("#" + C).datagrid("options").columns;
                var O = "";
                var R = "";
                var V = "";
                var Q = "";
                var K = "";
                for (var G = 1; G < L[0].length; G++) {
                    if (L[0][G].field.indexOf("供应商") != -1) {
                        if (L[0][G].field == "供应商h") {
                            R = "供应商h";
                            O = "供应商d"
                        } else {
                            if (L[0][G].field == "供应商1") {
                                R = "供应商1";
                                O = "供应商"
                            } else {
                                if (L[0][G].field == "供应商d") {
                                    R = "供应商h";
                                    O = "供应商d"
                                } else {
                                    O = "供应商"
                                }
                            }
                        }
                    } else {
                        if (L[0][G].field == "SuppId") {
                            O = "SuppId"
                        }
                    }
                    if (L[0][G].field == "工程") {
                        V = "工程"
                    } else {
                        if (L[0][G].field == "从工程") {
                            Q = "从工程"
                        } else {
                            if (L[0][G].field == "到工程") {
                                K = "到工程"
                            } else {
                                if (L[0][G].field == "ProjectNum") {
                                    V = "ProjectNum"
                                } else {
                                    if (L[0][G].field == "FromProjectNum") {
                                        Q = "FromProjectNum"
                                    } else {
                                        if (L[0][G].field == "ToProjectNum") {
                                            K = "ToProjectNum"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (M == "N") {
                    if (O.length > 0) {
                        if (A.indexOf("_DETAIL_STORE") != -1) {
                            $("#" + C).datagrid("hideColumn", "供应商编码")
                        }
                        $("#" + C).datagrid("hideColumn", O);
                        $("#" + A + "_SUPPLIERS").css("visibility", "hidden")
                    }
                } else {
                    if (M == "Y" && A.indexOf("_PD") == -1 && A.indexOf("_DB") == -1) {
                        $("#M_" + H + "_SuppId").hide();
                        $("#M_" + H + "_SuppId_TITLE").hide();
                        if (R.length > 0) {
                            $("#" + C).datagrid("hideColumn", R);
                            $("#" + A + "_SUPPLIERHS").css("visibility", "hidden")
                        }
                    }
                }
                if (I == "N" && A.indexOf("_DB") == -1) {
                    if (V.length > 0) {
                        $("#" + C).datagrid("hideColumn", V);
                        $("#" + A + "_PROJECTS").css("visibility", "hidden")
                    }
                } else {
                    if (I == "N" && A.indexOf("_DB") != -1) {
                        if (Q.length > 0 && K.length > 0) {
                            $("#" + C).datagrid("hideColumn", Q);
                            $("#" + C).datagrid("hideColumn", K);
                            $("#" + A + "_PROJECTS").css("visibility", "hidden")
                        }
                    }
                }
            }
        }
    })
}
function isEmptyOrNull(A) {
    if (A == undefined || A == "" || A == null) {
        return true
    }
    return false
}
$.extend($.fn.datagrid.defaults, {
    onLoadError: function() {
        Micro_AutoLogin()
    }
});
$.extend($.fn.datagrid.defaults, {
    onRowContextMenu: function(e, index, row) {
        e.preventDefault();
        var contextMenu = null;
        contextMenu = $("<div id='DataGridContextMenu'/>").appendTo("body");
        var fields = $(this).datagrid("getColumnFields");
        var filterRules = [];
        var dgId = $(this).attr("id");
        $.each(fields,
        function(i, field) {
            var type = Micro_getColumnType(dgId, field);
            if (type == "NUM") {
                filterRules.push({
                    field: field,
                    type: "numberbox",
                    options: {
                        precision: 4
                    },
                    op: ["equal", "notequal", "less", "lessorequal", "greater", "greaterorequal"]
                })
            } else {
                if (type == "DATETIME") {
                    filterRules.push({
                        field: field,
                        type: "dateRange",
                        op: ["equal", "notequal", "less", "lessorequal", "greater", "greaterorequal", "between"]
                    })
                } else {
                    filterRules.push({
                        field: field,
                        type: "text",
                        op: ["contains", "notcontains", "equal", "notequal", "beginwith", "endwith"]
                    })
                }
            }
        });
        contextMenu.menu({
            onClick: function(item) {
                if (item.name == "启用筛选") {
                    $("#" + dgId).datagrid("disableFilter");
                    $("#" + dgId).datagrid("destroyFilter");
                    $("#" + dgId).datagrid("enableFilter", filterRules)
                } else {
                    if (item.name == "取消筛选") {
                        $("#" + dgId).datagrid("removeFilterRule");
                        $("#" + dgId).datagrid("disableFilter")
                    } else {
                        if (item.name == "显示隐藏列") {
                            var winName = dgId.substr(0, dgId.length - 3);
                            var INITFUN = "dataGridSetColVisible('" + dgId + "', '" + winName + "')";
                            eval("dataGridShowHideCol(dgId, winName, " + winName + "_COLINFO_SUB, INITFUN)")
                        }
                    }
                }
            }
        });
        contextMenu.menu("appendItem", {
            name: "启用筛选",
            text: "启用筛选"
        });
        contextMenu.menu("appendItem", {
            name: "取消筛选",
            text: "取消筛选"
        });
        if (dgId.indexOf("FROM") > 2) {
            contextMenu.menu("appendItem", {
                name: "显示隐藏列",
                text: "显示隐藏列"
            })
        }
        contextMenu.menu("show", {
            left: e.pageX,
            top: e.pageY
        })
    }
});
$.fn.datagrid.defaults.loader = function(C, A, D) {
    var B = $(this).datagrid("options");
    if (!B.url) {
        return false
    }
    $.ajax({
        type: B.method,
        url: B.url,
        data: C,
        dataType: "json",
        async: !B.sync,
        success: function(E) {
            A(E)
        },
        error: function() {
            D.apply(this, arguments)
        }
    })
};
$.extend($.fn.dialog.defaults, {
    onOpen: function() {
        var A = $(this).attr("id");
        if (!isEmptyOrNull(A)) {
            if (A.indexOf("FROM") > 2) {
                setTimeout(function() {
                    if ($("#" + A).length > 0) {
                        dataGridSetColVisible(A + "_DG", A)
                    }
                },
                200)
            }
        }
    }
});
$.extend($.fn.datagrid.methods, {
    getExcelXml: function(A, E) {
        var F = this.createWorksheet(A, E);
        var C = 0;
        var D = $(A).datagrid("getColumnFields");
        for (var B = 1; B < D.length; B++) {
            C += $(A).datagrid("getColumnOption", D[B]).width
        }
        return '<?xml version="1.0" encoding="utf-8"?><ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:o="urn:schemas-microsoft-com:office:office"><o:DocumentProperties><o:Title>' + E.title + "</o:Title></o:DocumentProperties><ss:ExcelWorkbook><ss:WindowHeight>" + F.height + "</ss:WindowHeight><ss:WindowWidth>" + F.width + '</ss:WindowWidth><ss:ProtectStructure>False</ss:ProtectStructure><ss:ProtectWindows>False</ss:ProtectWindows></ss:ExcelWorkbook><ss:Styles><ss:Style ss:ID="Default"><ss:Alignment ss:Vertical="Top"  /><ss:Font ss:FontName="arial" ss:Size="10" /><ss:Borders><ss:Border  ss:Weight="1" ss:LineStyle="Continuous" ss:Position="Top" /><ss:Border  ss:Weight="1" ss:LineStyle="Continuous" ss:Position="Bottom" /><ss:Border  ss:Weight="1" ss:LineStyle="Continuous" ss:Position="Left" /><ss:Border ss:Weight="1" ss:LineStyle="Continuous" ss:Position="Right" /></ss:Borders><ss:Interior /><ss:NumberFormat /><ss:Protection /></ss:Style><ss:Style ss:ID="title"><ss:Borders /><ss:Font /><ss:Alignment  ss:Vertical="Center" ss:Horizontal="Center" /><ss:NumberFormat ss:Format="@" /></ss:Style><ss:Style ss:ID="headercell"><ss:Font ss:Bold="1" ss:Size="10" /><ss:Alignment  ss:Horizontal="Center" /><ss:Interior ss:Pattern="Solid"  /></ss:Style><ss:Style ss:ID="even"><ss:Interior ss:Pattern="Solid"  /></ss:Style><ss:Style ss:Parent="even" ss:ID="evendate"><ss:NumberFormat ss:Format="yyyy-mm-dd" /></ss:Style><ss:Style ss:Parent="even" ss:ID="evenint"><ss:NumberFormat ss:Format="0" /></ss:Style><ss:Style ss:Parent="even" ss:ID="evenfloat"><ss:NumberFormat ss:Format="0.00" /></ss:Style><ss:Style ss:ID="odd"><ss:Interior ss:Pattern="Solid"  /></ss:Style><ss:Style ss:Parent="odd" ss:ID="odddate"><ss:NumberFormat ss:Format="yyyy-mm-dd" /></ss:Style><ss:Style ss:Parent="odd" ss:ID="oddint"><ss:NumberFormat ss:Format="0" /></ss:Style><ss:Style ss:Parent="odd" ss:ID="oddfloat"><ss:NumberFormat ss:Format="0.00" /></ss:Style></ss:Styles>' + F.xml + "</ss:Workbook>"
    },
    createWorksheet: function(B, N) {
        var R = [];
        var O = [];
        var T = 0;
        var J = "";
        var M = "";
        var Q = 0;
        var V = $(B).datagrid("getColumnFields");
        var K = V.length;
        for (var H = 1; H < K; H++) {
            if (V[H] != "") {
                var C = $(B).datagrid("getColumnOption", V[H]).width;
                T += C;
                if (V[H] === "") {
                    R.push("None");
                    O.push(""); ++Q
                } else {
                    J += '<ss:Column ss:AutoFitWidth="1" ss:Width="130" />';
                    M += '<ss:Cell ss:StyleID="headercell"><ss:Data ss:Type="String">' + $(B).datagrid("getColumnOption", V[H]).title + '</ss:Data><ss:NamedCell ss:Name="Print_Titles" /></ss:Cell>';
                    R.push("String");
                    O.push("")
                }
            }
        }
        var E = R.length - Q;
        var F = {
            height: 9000,
            width: Math.floor(T * 30) + 50
        };
        var U = $(B).datagrid("getRows");
        var D = '<ss:Worksheet ss:Name="' + N.title + '"><ss:Names><ss:NamedRange ss:Name="Print_Titles" ss:RefersTo="=\'' + N.title + '\'!R1:R2" /></ss:Names><ss:Table x:FullRows="1" x:FullColumns="1" ss:ExpandedColumnCount="' + (E + 2) + '" ss:ExpandedRowCount="' + (U.length + 2) + '">' + J + '<ss:Row ss:AutoFitHeight="1">' + M + "</ss:Row>";
        for (var H = 0,
        A = U,
        I = A.length; H < I; H++) {
            D += "<ss:Row>";
            var L = (H & 1) ? "odd": "even";
            r = A[H];
            var G = 0;
            for (var S = 1; S < K; S++) {
                if (V[S] != "") {
                    var P = r[V[S]];
                    if (R[G] !== "None") {
                        D += '<ss:Cell ss:StyleID="' + L + O[G] + '"><ss:Data ss:Type="' + R[G] + '">';
                        if (R[G] == "DateTime") {
                            D += P.format("Y-m-d")
                        } else {
                            D += P
                        }
                        D += "</ss:Data></ss:Cell>"
                    }
                    G++
                }
            }
            D += "</ss:Row>"
        }
        F.xml = D + '</ss:Table><x:WorksheetOptions><x:PageSetup><x:Layout x:CenterHorizontal="1" x:Orientation="Landscape" /><x:Footer x:Data="Page &P of &N" x:Margin="0.5" /><x:PageMargins x:Top="0.5" x:Right="0.5" x:Left="0.5" x:Bottom="0.8" /></x:PageSetup><x:FitToPage /><x:Print><x:PrintErrors>Blank</x:PrintErrors><x:FitWidth>1</x:FitWidth><x:FitHeight>32767</x:FitHeight><x:ValidPrinterInfo /><x:VerticalResolution>600</x:VerticalResolution></x:Print><x:Selected /><x:DoNotDisplayGridlines /><x:ProtectObjects>False</x:ProtectObjects><x:ProtectScenarios>False</x:ProtectScenarios></x:WorksheetOptions></ss:Worksheet>';
        return F
    }
});
$.extend($.fn.datagrid.methods, {
    showRow: function(A, B) {
        return A.each(function() {
            var C = $(this).datagrid("options");
            C.finder.getTr(this, B).show()
        })
    },
    hideRow: function(A, B) {
        return A.each(function() {
            var C = $(this).datagrid("options");
            C.finder.getTr(this, B).hide()
        })
    }
});
$.extend($.fn.datagrid.methods, {
    getEditingRowIndexs: function(B) {
        var C = $.data(B[0], "datagrid").panel.find(".datagrid-row-editing");
        var A = [];
        C.each(function(D, E) {
            var F = E.sectionRowIndex;
            if (A.indexOf(F) == -1) {
                A.push(F)
            }
        });
        return A
    }
});
$.extend($.fn.datagrid.methods, {
    checkRowEditStatus: function(A, B) {
        var C = false;
        var D = $.data(A[0], "datagrid").panel.find(".datagrid-row-editing");
        D.each(function(E, F) {
            var G = F.sectionRowIndex;
            if (B == G) {
                C = true;
                return false
            }
        });
        return C
    }
});
$.extend($.fn.datagrid.methods, {
    resizeColumn: function(A, B) {
        return A.each(function() {
            var D = $(this);
            var C = D.datagrid("getColumnOption", B.field);
            C.boxWidth = B.width + (C.boxWidth - C.width);
            C.width = B.width;
            D.datagrid("fixColumnSize", B.field)
        })
    }
});
function dataGridToExcel(A) {
    $.messager.progress({
        title: "正在导出excel",
        msg: "正在导出excel中..."
    });
    var C = $("#" + A).datagrid("getExcelXml", {
        title: "GridDataToXls"
    });
    var B = "../MicroSys/datagrid-to-excel.ashx";
    $.ajax({
        url: B,
        data: {
            data: C
        },
        type: "POST",
        dataType: "text",
        success: function(E) {
            if (mPublicUseOperHistory == 1) {
                var D = "导出";
                Micro_AddOperHistory([{
                    companyId: mCompanyId,
                    OperUserid: mCurUserId,
                    AddTime: "$录入时间$",
                    UIName: $("#mainTab").tabs("getSelected").panel("options").title,
                    TabelName: A.replace("_DG", ""),
                    OperName: D,
                    OperDetail: $("#mainTab").tabs("getSelected").panel("options").title + D
                }])
            }
            $.messager.progress("close");
            alert("导出excel成功！");
            window.location = E
        },
        error: function(D) {
            $.messager.progress("close");
            alert("动态页有问题\nstatus：" + D.status + "\nresponseText：" + D.responseText)
        }
    });
    return false
}
$.extend($.fn.datagrid.methods, {
    toExcel: function(A, B) {
        return A.each(function() {
            var E = "data:application/vnd.ms-excel;base64,",
            D = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            G = function(L) {
                return window.btoa(unescape(encodeURIComponent(L)))
            },
            F = function(L, M) {
                return L.replace(/{(\w+)}/g,
                function(O, N) {
                    return M[N]
                })
            };
            var J = $('<a style="display:none;" z-index="10000"></a>').appendTo("body")[0];
            var C = $(this).datagrid("getPanel").find("div.datagrid-view");
            var K = $(this).datagrid("getPanel").find("div.datagrid-view2").clone();
            var I = K.find(">tbody");
            C.find("div.datagrid-view1 table.datagrid-btable>tbody>tr").each(function(L) {
                $(this).clone().children().prependTo(I.children("tr:eq(" + L + ")"))
            });
            var H = {
                worksheet: name || "Worksheet",
                table: K.html() || ""
            };
            J.href = E + G(F(D, H));
            J.download = B;
            J.click();
            J.remove()
        })
    }
});
function dataGridToExcel2(A) {
    var B = getLocalDateTimeFileName() + ".xls";
    $("#" + A).datagrid("toExcel", B)
}
function dataGridShowHideCol(dgId, tableName, cif, callbackfun) {
    $("<div></div>").dialog({
        id: "SYS_VISIBLE_DLG",
        title: "设置显示隐藏列以及顺序",
        href: "../MicroSys/SYS_VISIBLE.html",
        height: 450,
        width: 320,
        resizable: true,
        modal: true,
        iconCls: "icon-mSetting",
        buttons: [{
            text: "上移",
            iconCls: "icon-mUp",
            handler: function() {
                var r = $("#SYS_VISIBLE_DG").datagrid("getSelected");
                if (isEmptyOrNull(r)) {
                    jQuery.messager.alert("提示:", "请选择一条需要上移的记录!", "info");
                    return
                }
                var rowIndex = $("#SYS_VISIBLE_DG").datagrid("getRowIndex", r);
                dataGridMoveRow(rowIndex, "up", "SYS_VISIBLE_DG")
            }
        },
        {
            text: "下移",
            iconCls: "icon-mDown",
            handler: function() {
                var r = $("#SYS_VISIBLE_DG").datagrid("getSelected");
                if (isEmptyOrNull(r)) {
                    jQuery.messager.alert("提示:", "请选择一条需要下移的记录!", "info");
                    return
                }
                var rowIndex = $("#SYS_VISIBLE_DG").datagrid("getRowIndex", r);
                dataGridMoveRow(rowIndex, "down", "SYS_VISIBLE_DG")
            }
        },
        {
            text: "默认",
            iconCls: "icon-ok",
            handler: function() {
                para = {};
                para.action = "default";
                para.tableName = tableName;
                $.ajax({
                    url: "../MicroSys/SYS_VISIBLE.ashx",
                    data: para,
                    type: "POST",
                    dataType: "text",
                    success: function(result) {
                        if (result.substr(0, 2) == "ok") {
                            eval(callbackfun);
                            $("#SYS_VISIBLE_DLG").dialog("destroy")
                        }
                    }
                });
                $("#SYS_VISIBLE_DLG").dialog("destroy")
            }
        },
        {
            text: "确定",
            iconCls: "icon-ok",
            handler: function() {
                var rows = $("#SYS_VISIBLE_DG").datagrid("getRows");
                $.each(rows,
                function(i, row) {
                    var idx = $("#SYS_VISIBLE_DG").datagrid("getRowIndex", row);
                    $("#SYS_VISIBLE_DG").datagrid("endEdit", idx)
                });
                var rows = $("#SYS_VISIBLE_DG").datagrid("getRows");
                var str = "";
                var ischeck = "0";
                var strArr = [];
                for (var i = 0; i < rows.length; i++) {
                    var checkRows = $("#SYS_VISIBLE_DG").datagrid("getChecked");
                    ischeck = "0";
                    $.each(checkRows,
                    function(j, n) {
                        if (rows[i].colId == n.colId) {
                            ischeck = "1"
                        }
                    });
                    if ($.inArray(rows[i].colId, strArr) == -1) {
                        strArr.push(rows[i].colId);
                        str = str + ";" + rows[i].colId + "," + ischeck;
                        if (isNumber(rows[i].colWidth) && rows[i].colWidth > 0) {
                            str += "," + rows[i].colWidth
                        }
                    }
                }
                str = str.substr(1);
                para = {};
                para.action = "save";
                para.tableName = tableName;
                para.colInfo = str;
                $.ajax({
                    url: "../MicroSys/SYS_VISIBLE.ashx",
                    data: para,
                    type: "POST",
                    dataType: "text",
                    success: function(result) {
                        if (result.substr(0, 2) == "ok") {
                            eval(callbackfun);
                            $("#SYS_VISIBLE_DLG").dialog("destroy")
                        } else {
                            jQuery.messager.alert("提示:", "设置出错：" + result, "error")
                        }
                    }
                });
                $("#SYS_VISIBLE_DLG").dialog("destroy")
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#SYS_VISIBLE_DLG").dialog("destroy")
            }
        }],
        onClose: function() {
            $("#SYS_VISIBLE_DLG").dialog("destroy")
        },
        onLoad: function() {
            para = {};
            para.action = "search";
            para.tableName = tableName;
            $.ajax({
                url: "../MicroSys/SYS_VISIBLE.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                success: function(result) {
                    var colStr = result.substr(2);
                    if (result.substr(0, 2) == "ok") {
                        var colsArr = colStr.split(";");
                        var colArr;
                        getcols = $("#" + dgId).datagrid("getColumnFields");
                        var exists = [];
                        var x = 0;
                        for (var j = 0; j < colsArr.length; j++) {
                            colArr = colsArr[j].split(",");
                            var colOption = "";
                            if ($.inArray(colArr[0], getcols) != -1) {
                                colOption = $("#" + dgId).datagrid("getColumnOption", colArr[0]);
                                if (!colOption.checkbox) {
                                    rowId = $("#SYS_VISIBLE_DG").datagrid("appendRow", {
                                        colId: colArr[0],
                                        colName: colOption.title
                                    }).datagrid("getRows").length - 1;
                                    if (colArr[1] == "1") {
                                        $("#SYS_VISIBLE_DG").datagrid("checkRow", rowId)
                                    }
                                }
                                exists[x] = colArr[0];
                                x++
                            }
                        }
                        var noexists = diff(getcols, exists);
                        for (var i = 0; i < noexists.length; i++) {
                            colOption = $("#" + dgId).datagrid("getColumnOption", noexists[i]);
                            if (!colOption.checkbox) {
                                rowId = $("#SYS_VISIBLE_DG").datagrid("appendRow", {
                                    colId: noexists[i],
                                    colName: colOption.title
                                }).datagrid("getRows").length - 1;
                                $("#SYS_VISIBLE_DG").datagrid("checkRow", rowId)
                            }
                        }
                    } else {
                        var col;
                        for (var j = 0; j < cif.length; j++) {
                            col = cif[j];
                            if (col.hidden) {
                                continue
                            }
                            if (!col.checkbox) {
                                rowId = $("#SYS_VISIBLE_DG").datagrid("appendRow", {
                                    colId: col.field,
                                    colName: col.title
                                }).datagrid("getRows").length - 1;
                                var hideCols = Micro_getItemDefaultHiddenCols(mCompanyId, tableName).cols;
                                if ($.inArray(col.field, hideCols) == -1 || mVersion == "ERP_ENT") {
                                    $("#SYS_VISIBLE_DG").datagrid("checkRow", rowId)
                                }
                            }
                        }
                    }
                }
            })
        }
    })
}
function dataGridSetDefaultValueSetting(A, C, B) {
    $("<div></div>").dialog({
        id: "SYS_DATAGRID_COLVAL_DEFAULT_DLG",
        title: "设置列默认值",
        href: "../MicroSys/SYS_DATAGRID_COLVAL_DEFAULT.html",
        mParams: {
            DgColOptions: B
        },
        height: 500,
        width: 380,
        resizable: true,
        modal: true,
        iconCls: "icon-mSetting",
        buttons: [{
            text: "清空",
            iconCls: "icon-ok",
            handler: function() {
                $.messager.confirm("确认", "是否清空?",
                function(D) {
                    if (D) {
                        para = {};
                        para.action = "default";
                        para.tableName = C;
                        para.dgid = A;
                        $.ajax({
                            url: "../MicroSys/SYS_DATAGRID_COLVAL_DEFAULT.ashx",
                            data: para,
                            type: "POST",
                            dataType: "text",
                            success: function(E) {
                                if (E.substr(0, 2) == "ok") {
                                    $.messager.show({
                                        title: "提示",
                                        msg: "保存成功!",
                                        timeout: 1000
                                    });
                                    $("#SYS_DATAGRID_COLVAL_DEFAULT_DLG").dialog("destroy")
                                }
                            }
                        });
                        $("#SYS_DATAGRID_COLVAL_DEFAULT_DLG").dialog("destroy")
                    }
                })
            }
        },
        {
            text: "确定",
            iconCls: "icon-ok",
            handler: function() {
                var F = $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("getRows");
                if (F.length < 1) {
                    return
                }
                $.each(F,
                function(H, I) {
                    $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("endEdit", H)
                });
                var G = $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("getChanges", "deleted");
                var D = $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("getChanges", "updated");
                var E = $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("getChanges", "inserted");
                para = {};
                para.action = "save";
                para.rowsAdd = JSON.stringify(E);
                para.rowsDelete = JSON.stringify(G);
                para.rowsUpdate = JSON.stringify(D);
                $.ajax({
                    url: "../MicroSys/SYS_DATAGRID_COLVAL_DEFAULT.ashx",
                    data: para,
                    type: "POST",
                    dataType: "text",
                    success: function(H) {
                        if (H.substr(0, 2) == "ok") {
                            $.messager.show({
                                title: "提示",
                                msg: "保存成功!",
                                timeout: 1000
                            });
                            $("#SYS_DATAGRID_COLVAL_DEFAULT_DLG").dialog("destroy")
                        } else {
                            jQuery.messager.alert("提示:", "设置出错：" + H, "error")
                        }
                    }
                });
                $("#SYS_DATAGRID_COLVAL_DEFAULT_DLG").dialog("destroy")
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#SYS_DATAGRID_COLVAL_DEFAULT_DLG").dialog("destroy")
            }
        }],
        onClose: function() {
            $("#SYS_DATAGRID_COLVAL_DEFAULT_DLG").dialog("destroy")
        },
        onLoad: function() {
            para = {};
            para.action = "search";
            para.tableName = C;
            para.dgid = A;
            $.ajax({
                url: "../MicroSys/SYS_DATAGRID_COLVAL_DEFAULT.ashx",
                data: para,
                type: "POST",
                dataType: "json",
                async: false,
                success: function(E) {
                    if (E.total > 0) {
                        $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("loadData", E)
                    } else {
                        var D;
                        for (var F = 0; F < B.length; F++) {
                            D = B[F];
                            if (D.field == "ck") {
                                continue
                            }
                            if (D.field == "Num" || D.field == "Numx") {
                                continue
                            }
                            if (D.hidden) {
                                continue
                            }
                            if (isEmptyOrNull(D.editor)) {
                                continue
                            }
                            if (D.editor.options.readonly) {
                                continue
                            }
                            $("#SYS_DATAGRID_COLVAL_DEFAULT_DG").datagrid("appendRow", {
                                userid: mCurUserId,
                                dgid: A,
                                tablename: C,
                                colName: D.field,
                                colText: D.title,
                                isDefaultPrior: 0,
                                colType: (isEmptyOrNull(D.type) ? "": D.type)
                            })
                        }
                    }
                }
            })
        }
    })
}
function dataGridSetDefaultValue(C, G, B, H) {
    var J = [];
    para.action = "search";
    para.dgid = C;
    para.tableName = G;
    $.ajax({
        url: "../MicroSys/SYS_DATAGRID_COLVAL_DEFAULT.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        async: false,
        success: function(L) {
            J = L.rows
        }
    });
    if (H.length > 0) {
        for (var F = 0; F < J.length; F++) {
            for (var D = 0; D < H.length; D++) {
                if (J[F]["colName"] == H[D]["colName"]) {
                    J[F]["defaultValue"] = H[D]["defaultValue"];
                    break
                }
            }
        }
        if (J.length > 0) {
            H = J
        }
    } else {
        H = J
    }
    if (H.length < 1) {
        return
    }
    if (B < 0) {
        return
    }
    var K = B - 1;
    var I = undefined;
    if (K >= 0) {
        var A = $("#" + C).datagrid("getRows");
        if (A.length > 0) {
            I = A[K]
        }
    }
    var E = $("#" + C).datagrid("getEditors", B);
    $.each(H,
    function(M, L) {
        if (isEmptyOrNull(E)) {
            var N;
            if (L.isDefaultPrior && K >= 0) {
                N = I[L.colName]
            } else {
                N = L.defaultValue
            }
            var O = {};
            O[L.colName] = N;
            $("#" + C).datagrid("updateRow", {
                index: B,
                row: O
            })
        } else {
            $.each(E,
            function(P, Q) {
                if (L.colName == Q.field) {
                    var R;
                    if (L.isDefaultPrior && K >= 0) {
                        R = I[L.colName]
                    } else {
                        R = L.defaultValue
                    }
                    switch (Q.type) {
                    case "textbox":
                        if (!isEmptyOrNull(R)) {
                            Q.target.textbox("setValue", R)
                        }
                        break;
                    case "numberbox":
                        if (!isEmptyOrNull(R)) {
                            Q.target.numberbox("setValue", R)
                        }
                        break;
                    case "numberspinner":
                        Q.target.numberspinner("setValue", R);
                        break;
                    case "combobox":
                        Q.target.combobox("setValue", R);
                        break;
                    case "combotree":
                        Q.target.combotree("setValue", R);
                        break;
                    case "combogrid":
                        Q.target.combogrid("setValue", R);
                        break;
                    case "datebox":
                        Q.target.datebox("setValue", R);
                        break;
                    case "datetimebox":
                        Q.target.datetimebox("setValue", R);
                        break;
                    case "timespinner":
                        Q.target.timespinner("setValue", R);
                        break;
                    case "datetimespinner":
                        Q.target.datetimespinner("setValue", R);
                        break;
                    case "textarea":
                        break;
                    case "checkbox":
                        break;
                    case "validatebox":
                        Q.target.validatebox("setValue", R);
                        break
                    }
                }
            })
        }
    })
}
function dataGridSearchData(B, A) {
    var C = arguments;
    $("<div></div>").dialog({
        id: "SYS_QUERY_DLG",
        title: "查询",
        href: "../MicroSys/SYS_QUERY.html",
        height: 300,
        width: 600,
        resizable: true,
        modal: true,
        iconCls: "icon-search",
        buttons: [{
            text: "增加",
            iconCls: "icon-add",
            handler: function() {
                var E = $("#SYS_QUERY_DG").datagrid("appendRow", {
                    lkh: "(",
                    col: "",
                    opr: "=",
                    val: "",
                    rkh: ")",
                    con: "and"
                }).datagrid("getRows").length - 1;
                $("#SYS_QUERY_DG").datagrid("beginEdit", E);
                var D = $("#SYS_QUERY_DG").datagrid("getEditor", {
                    index: E,
                    field: "col"
                });
                $(D.target).combobox({
                    data: B
                })
            }
        },
        {
            text: "插入",
            iconCls: "icon-add",
            handler: function() {
                var F = $("#SYS_QUERY_DG").datagrid("getChecked");
                if (F.length > 0) {
                    var E = $("#SYS_QUERY_DG").datagrid("getRowIndex", F[0]);
                    $("#SYS_QUERY_DG").datagrid("insertRow", {
                        index: E,
                        row: {
                            lkh: "(",
                            col: "",
                            opr: "=",
                            val: "",
                            rkh: ")",
                            con: "and"
                        }
                    })
                }
                $("#SYS_QUERY_DG").datagrid("beginEdit", E);
                var D = $("#SYS_QUERY_DG").datagrid("getEditor", {
                    index: E,
                    field: "col"
                });
                $(D.target).combobox({
                    data: B
                })
            }
        },
        {
            text: "删除",
            iconCls: "icon-remove",
            handler: function() {
                var D = $("#SYS_QUERY_DG").datagrid("getChecked");
                $.each(D,
                function(E, G) {
                    var F = $("#SYS_QUERY_DG").datagrid("getRowIndex", G);
                    $("#SYS_QUERY_DG").datagrid("deleteRow", F)
                })
            }
        },
        {
            text: "确定",
            iconCls: "icon-edit",
            handler: function() {
                var F = $("#SYS_QUERY_DG").datagrid("getRows");
                var G = "";
                $.each(F,
                function(N, O) {
                    var J = $("#SYS_QUERY_DG").datagrid("getRowIndex", O);
                    var K, R, S, M, P, L, I, Q;
                    K = $("#SYS_QUERY_DG").datagrid("getEditor", {
                        index: J,
                        field: "lkh"
                    });
                    R = $(K.target).combobox("getValue");
                    K = $("#SYS_QUERY_DG").datagrid("getEditor", {
                        index: J,
                        field: "col"
                    });
                    S = $(K.target).combobox("getValue");
                    K = $("#SYS_QUERY_DG").datagrid("getEditor", {
                        index: J,
                        field: "opr"
                    });
                    M = $(K.target).combobox("getValue");
                    K = $("#SYS_QUERY_DG").datagrid("getEditor", {
                        index: J,
                        field: "val"
                    });
                    P = $(K.target).combobox("getValue");
                    K = $("#SYS_QUERY_DG").datagrid("getEditor", {
                        index: J,
                        field: "rkh"
                    });
                    L = $(K.target).combobox("getValue");
                    K = $("#SYS_QUERY_DG").datagrid("getEditor", {
                        index: J,
                        field: "con"
                    });
                    I = $(K.target).combobox("getValue");
                    Q = "";
                    $.each(B,
                    function(U, T) {
                        if (T.field == S) {
                            Q = T.type
                        }
                    });
                    if (M == "IS" && (P != "NULL" || P != "NOT NULL")) {
                        jQuery.messager.alert("提示:", "第 " + (N + 1).toString() + " 行表达式为 是 的时候 值 只能选 空 或 非空!", "warning");
                        return
                    }
                    if (M == "BETWEEN" && P.toLowerCase().indexOf("and") == -1) {
                        jQuery.messager.alert("提示:", "第 " + (N + 1).toString() + " 行表达式为 介于 的时候 值 必需包含 and 关键字!", "warning");
                        return
                    }
                    if (Q == "NUM" && isNaN(P)) {
                        jQuery.messager.alert("提示:", "第 " + (N + 1).toString() + " 行 值 只能录入数字!", "warning");
                        return
                    }
                    if (Q == "CHAR") {
                        if (M == "LIKE" || M == "NOT LIKE") {
                            P = "'%" + P + "%'"
                        } else {
                            P = "'" + P + "'"
                        }
                    } else {
                        if (Q == "DATETIME") {
                            if (M != "BETWEEN") {
                                P = "'" + P + "'"
                            }
                        } else {
                            if (Q == "NUM") {}
                        }
                    }
                    G = G + R + S + " " + M + " " + P + L;
                    if (F.length != N + 1) {
                        G = G + " " + I + " "
                    }
                });
                if (G == "( = )") {
                    G = ""
                }
                var E = "";
                if (C.length > 2) {
                    if (!isEmptyOrNull(C[2])) {
                        if (C[2] == "ALL") {
                            if (!isEmptyOrNull(C[3])) {
                                if (C[3] == "V_WEB_BUDGET_DETAIL_OPT") {
                                    var D = $("#" + A).datagrid("options");
                                    var H = D["whereParams"];
                                    if (!isEmptyOrNull(H)) {
                                        var E = H["whereStr"];
                                        if (!isEmptyOrNull(E)) {
                                            if (!isEmptyOrNull(G)) {
                                                G += " and " + E
                                            } else {
                                                G = E
                                            }
                                        }
                                    }
                                    if (G.indexOf("下单选项") == -1) {
                                        jQuery.messager.alert("提示:", "查询时，下单选项的查询条件不能为空！", "warning");
                                        return
                                    }
                                } else {
                                    var D = $("#" + A).datagrid("options");
                                    var H = D["whereParams"];
                                    if (!isEmptyOrNull(H)) {
                                        var E = H["whereStr"];
                                        if (!isEmptyOrNull(E)) {
                                            if (!isEmptyOrNull(G)) {
                                                G += " and " + E
                                            } else {
                                                G = E
                                            }
                                        }
                                    }
                                }
                            } else {
                                var D = $("#" + A).datagrid("options");
                                var H = D["whereParams"];
                                if (!isEmptyOrNull(H)) {
                                    var E = H["whereStr"];
                                    if (!isEmptyOrNull(E)) {
                                        if (!isEmptyOrNull(G)) {
                                            G += " and " + E
                                        } else {
                                            G = E
                                        }
                                    }
                                }
                            }
                        } else {
                            if (!isEmptyOrNull(G)) {
                                G += " and " + C[2]
                            } else {
                                G = C[2]
                            }
                        }
                    }
                }
                $("#" + A).datagrid("load", {
                    action: "search",
                    whereStr: G,
                    page: 1,
                    rows: $("#" + A).datagrid("options").rows
                });
                $("#SYS_QUERY_DLG").dialog("destroy")
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#SYS_QUERY_DLG").dialog("destroy")
            }
        }],
        onClose: function() {
            $("#SYS_QUERY_DLG").dialog("destroy")
        },
        onLoad: function() {
            rowId = $("#SYS_QUERY_DG").datagrid("appendRow", {
                lkh: "(",
                col: "",
                opr: "=",
                val: "",
                rkh: ")",
                con: "and"
            }).datagrid("getRows").length - 1;
            $("#SYS_QUERY_DG").datagrid("beginEdit", rowId);
            var D = $("#SYS_QUERY_DG").datagrid("getEditor", {
                index: rowId,
                field: "col"
            });
            $(D.target).combobox({
                data: B
            })
        }
    })
}
function baseObject_checkBasInfor(K) {
    var C = [];
    var H = K;
    var D = function() {
        for (var M = 0; M < mPublicGlList.length; M++) {
            C.push(mPublicGlList[M].glass)
        }
    };
    var I = $("#" + H).find('[name="name"]:first').val();
    var E = $("#" + H).find('[name="optList"]:first').val();
    if ($.Micro.IsEmpty(E)) {
        E = ""
    }
    var J = $("#" + H).find('[name="optListExp"]:first').val();
    var L = "";
    var A = [];
    var G = [];
    var F = function() {
        if (J != "") {
            L = J
        } else {
            L = E
        }
        L = replaceAll(L, "'", '"');
        var S = new RegExp(/\?[^\?\:]+\:/g);
        var O = L.match(S);
        var N = ["", "无", "未选"];
        if (O && O.length > 0) {
            for (var Q = 0; Q < O.length; Q++) {
                var T = O[Q];
                T = T.replace("?", "").replace(":", "");
                T = $.trim(T);
                T = replaceAll(T, '"', "");
                for (var P = 0; P < T.split(",").length; P++) {
                    var R = T.split(",")[P];
                    if (!$.Micro.isInArray(R, G)) {
                        G.push(R)
                    }
                }
            }
            var M = L.split(":");
            var R = $.trim(M[M.length - 1]);
            R = replaceAll(R, '"', "");
            if (!$.Micro.isInArray(R, G)) {
                G.push(R)
            }
            for (var Q = 0; Q < G.length; Q++) {
                if ($.Micro.isInArray(G[Q], N)) {
                    continue
                }
                if (!$.Micro.isInArray(G[Q], C)) {
                    A.push('"' + G[Q] + '"')
                }
            }
        } else {
            L = replaceAll(L, '"', "");
            for (var P = 0; P < L.split(",").length; P++) {
                var R = L.split(",")[P];
                if ($.Micro.isInArray(R, N)) {
                    continue
                }
                if (!$.Micro.isInArray(R, C)) {
                    A.push('"' + R + '"')
                }
            }
        }
    };
    switch (I) {
    case "MGG":
        D();
        F();
        break
    }
    if (A.length > 0) {
        var B = "以下基础资料信息未定义：<br><br><br>" + A.join("<br>");
        jQuery.messager.alert("提示:", B, "error");
        return false
    }
    return true
}
function baseEditObject(C, I, M, H, G, D, F, A) {
    var B = $("#" + C).datagrid("getChecked");
    if (B.length < 1) {
        jQuery.messager.alert("提示:", "请选择一条需要修改的记录!", "info");
        return
    }
    if (B.length > 1) {
        jQuery.messager.alert("提示:", "一次只能修改一条记录", "info");
        $("#" + C).datagrid("clearSelections").datagrid("clearChecked");
        return
    }
    var L, J, E;
    var K = B[0][M];
    $("<div></div>").dialog({
        id: I + "_EDITDLG",
        title: "修改资料",
        href: H,
        queryParams: {
            parm: A
        },
        height: F,
        width: D,
        modal: true,
        iconCls: "icon-edit",
        buttons: [{
            text: "确定",
            iconCls: "icon-edit",
            handler: function() {
                if (!baseObject_checkBasInfor(I + "_FORM")) {
                    return
                }
                var Q = function() {
                    if (mPublicUseOperHistory != 1) {
                        return true
                    }
                    try {
                        if (XCXLJG_beforeEditDetail) {
                            if (XCXLJG_beforeEditDetail.length > 0) {
                                L = XCXLJG_beforeEditDetail;
                                XCXLJG_beforeEditDetail = []
                            }
                        }
                    } catch(V) {}
                    J = Micro_ModifyEditorDetail($("#" + I + "_FORM"), M);
                    E = Micro_CompareModifyEditorDetail(L, J)[0];
                    var R = "";
                    R = Micro_ModifiedEditorDetail(E);
                    var Z = [];
                    var Y = "修改";
                    var d = "";
                    switch (M) {
                    case "id":
                        d = "id";
                        try {
                            var X = I.split("_");
                            var U = X[X.length - 1].toLowerCase();
                            switch (U) {
                            case "fitting":
                                U = "material";
                                break;
                            case "xcxltype":
                                U = "XlType";
                                break
                            }
                            switch (I.toUpperCase()) {
                            case "AL_BAS_GLASS_TEXTURE":
                                U = "GlassTexture";
                                break;
                            case "AL_BAS_GLASS_TECH":
                                U = "GlassTech";
                                break;
                            case "AL_BAS_PROCEDURE":
                                U = "Proce";
                                break;
                            case "AL_BAS_LINKMAN":
                                U = "LinkMan";
                                break;
                            case "AL_BAS_STATION_CLIENT":
                                U = "bsStation";
                                break;
                            case "AL_BAS_WW_PROCE":
                                U = "WwProce";
                                break;
                            case "AL_BAS_INACCOUNT":
                                U = "rzKind";
                                break;
                            case "AL_BAS_FAILINSTALL":
                                U = "Causes";
                                break;
                            case "AL_BAS_ERPNCLIST":
                                U = "ERP";
                                break;
                            case "AL_BAS_MATERIALFILE":
                                U = "matter";
                                break;
                            case "AL_BAS_CONSIGNEE":
                                U = "getter";
                                break;
                            case "AL_BAS_CONSIGNEE_ADDR":
                                U = "getstore";
                                break
                            }
                            var T = U.substring(0, 1).toUpperCase() + U.substring(1);
                            var c = "";
                            var g = [{
                                name: "Name",
                                text: "名称"
                            },
                            {
                                name: "name",
                                text: "名称"
                            },
                            {
                                name: U + "Id",
                                text: "编码"
                            },
                            {
                                name: U + "id",
                                text: "编码"
                            },
                            {
                                name: U,
                                text: "名称"
                            },
                            {
                                name: U + "Name",
                                text: "名称"
                            },
                            {
                                name: U + "name",
                                text: "名称"
                            },
                            {
                                name: T + "Id",
                                text: "编码"
                            },
                            {
                                name: T + "id",
                                text: "编码"
                            },
                            {
                                name: T,
                                text: "名称"
                            },
                            {
                                name: T + "Name",
                                text: "名称"
                            },
                            {
                                name: T + "name",
                                text: "名称"
                            },
                            {
                                name: U + "Kind",
                                text: "类型"
                            },
                            ];
                            for (var b = 0; b < g.length; b++) {
                                var f = g[b].name;
                                var a = g[b].text;
                                var W = f.toUpperCase();
                                if (f != W) {
                                    if (!$.Micro.IsEmpty(B[0][f])) {
                                        B[0][W] = B[0][f]
                                    } else {
                                        B[0][f] = B[0][W]
                                    }
                                }
                                if (!$.Micro.IsEmpty(B[0][f])) {
                                    c = B[0][f]
                                } else {
                                    if (!$.Micro.IsEmpty(B[0][W])) {
                                        c = B[0][W]
                                    }
                                }
                                if (!$.Micro.IsEmpty(c)) {
                                    d = "[id:" + K + "] " + a;
                                    K = c;
                                    break
                                }
                            }
                        } catch(V) {
                            d = "id"
                        }
                        break;
                    case "c_userid":
                        d = "用户编码";
                        break;
                    default:
                        d = "id"
                    }
                    var S = $("#mainTab").tabs("getSelected").panel("options").title;
                    if (I == "WEB_DR_XCXLJG") {
                        S += "--" + $("#WEB_DR_XCXLJG_TABS").tabs("getSelected").panel("options").title
                    }
                    Z.push({
                        companyId: mCompanyId,
                        OperUserid: mCurUserId,
                        AddTime: "$录入时间$",
                        UIName: S,
                        TabelName: I,
                        OperName: Y,
                        OperDetail: d + ": [" + K + "] " + Y + R
                    });
                    Micro_AddOperHistory(Z)
                };
                var N = function() {
                    $("#" + I + "_FORM").form("submit", {
                        url: G,
                        onSubmit: function(S) {
                            var R = JSON.stringify($("#" + I + "_FORM").serializeJSON());
                            R = Micro_changeJSON(I, R);
                            S.data = R;
                            S.action = "edit";
                            S.oldId = B[0][M];
                            return $(this).form("validate")
                        },
                        success: function(R) {
                            if (R == "ok") {
                                Q();
                                $("#" + I + "_EDITDLG").dialog("destroy");
                                $("#" + C).datagrid("reload").datagrid("clearSelections").datagrid("clearChecked");
                                if (I == "AL_BAS_CLASS") {
                                    AL_BAS_CLASS_IDS = getSelectedTreePathId("AL_BAS_CLASS_TREE");
                                    $("#AL_BAS_CLASS_TREE").tree("reload")
                                }
                            } else {
                                jQuery.messager.alert("提示:", R, "error")
                            }
                        }
                    })
                };
                if (!isEmptyOrNull(A)) {
                    if (A.powertype == "search") {
                        return
                    }
                    if (String(A.parm) == "8") {
                        var O = $("#WEB_DR_XCXLJG_exp").textbox("getValue");
                        var P = $("#WEB_DR_XCXLJG_CntExp2").textbox("getValue");
                        if (!$.Micro.IsEmpty(O) && !$.Micro.IsEmpty(P)) {
                            $.messager.confirm("提示:", "属性公式与属性默认值不能同时非空，确定只保留默认值吗？",
                            function(R) {
                                if (R) {
                                    $("#WEB_DR_XCXLJG_exp").textbox("setValue", "");
                                    N()
                                }
                            })
                        } else {
                            if (!$.Micro.IsEmpty(P)) {
                                $("#WEB_DR_XCXLJG_exp").textbox("setValue", "")
                            }
                            N()
                        }
                    } else {
                        N()
                    }
                } else {
                    N()
                }
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#" + I + "_EDITDLG").dialog("destroy");
                $("#" + C).datagrid("reload").datagrid("clearSelections").datagrid("clearChecked")
            }
        }],
        onClose: function() {
            $("#" + I + "_EDITDLG").dialog("destroy")
        },
        onLoad: function() {
            $("#" + I + "_FORM").form({
                onLoadSuccess: function(P) {
                    if (mPublicUseOperHistory == 1) {
                        L = Micro_ModifyEditorDetail($("#" + I + "_FORM"), M, {
                            encryptPW: 1
                        })
                    }
                }
            }).form("load", B[0]);
            var N = new Date();
            var O = N.getFullYear() + "-";
            O += ((N.getMonth() + 1) < 10 ? ("0" + (N.getMonth() + 1)) : (N.getMonth() + 1)) + "-";
            O += ((N.getDate() < 10 ? ("0" + N.getDate()) : N.getDate())) + " ";
            O += ((N.getHours() < 10 ? ("0" + N.getHours()) : N.getHours())) + ":";
            O += ((N.getMinutes() < 10 ? ("0" + N.getMinutes()) : N.getMinutes())) + ":";
            O += (N.getSeconds() < 10 ? ("0" + N.getSeconds()) : N.getSeconds());
            $("#LastModifyDate").datetimebox("setValue", O);
            $("#LastModifier").val(mCurUserId);
            $("#LastModifier").attr("readonly", true);
            if (I == "WEB_DR_XCXL") {
                $("#mcflId").combobox("readonly", true)
            }
            if (I == "CC_SYS_USER") {
                $("#CC_SYS_USER_c_pwd").val(dencrypt($("#CC_SYS_USER_c_pwd").val()))
            }
            if (I == "AL_BAS_PRODUCT") {
                AL_BAS_PRODUCT_getProductPic(B[0].productId)
            }
            if (I == "AL_BAS_GD") {
                AL_BAS_GD_getGDPic(B[0].gdId)
            }
            if (I == "AL_BAS_FITTING") {
                AL_BAS_FITTING_getFittingPic(B[0].materialId)
            }
            if (I == "AL_BAS_GLASS_TECH") {
                AL_BAS_GLASS_TECH_getFittingPic(B[0].GlassTech)
            }
        }
    })
}
function baseAddObject(C, H, G, I, D, F, A) {
    if (H == "CC_SYS_USER" || H == "AL_BAS_CLASS" || H == "AL_BAS_XCXLTYPE" || H == "WEB_DR_XCXL" || H == "CC_SYS_ARTICLETYPE_CATALOG_CJWT" || H == "CC_SYS_ARTICLETYPE_CATALOG_SJRZ" || H == "CC_SYS_ARTICLETYPE_DETAIL_CJWT" || H == "CC_SYS_ARTICLETYPE_DETAIL_SJRZ") {
        if (isEmptyOrNull(A)) {
            A = {}
        }
        var J = "0";
        var E = "";
        var B = $("#" + H + "_TREE").tree("getSelected");
        if (!isEmptyOrNull(B)) {
            J = B.id;
            E = B.version
        }
        $.extend(A, {
            treeid: J,
            version: E
        })
    }
    $("<div></div>").dialog({
        id: H + "_ADDDLG",
        title: "添加资料",
        href: G,
        queryParams: {
            parm: A
        },
        height: F,
        width: D,
        modal: true,
        iconCls: "icon-add",
        buttons: [{
            text: "确定",
            iconCls: "icon-add",
            handler: function() {
                if (!baseObject_checkBasInfor(H + "_FORM")) {
                    return
                }
                var K = function() {
                    $("#" + H + "_FORM").form("submit", {
                        url: I,
                        onSubmit: function(O) {
                            var N = JSON.stringify($("#" + H + "_FORM").serializeJSON());
                            N = Micro_changeJSON(H, N);
                            O.data = N;
                            O.action = "add";
                            return $(this).form("validate")
                        },
                        success: function(P) {
                            if (P == "ok") {
                                if (mPublicUseOperHistory == 1) {
                                    var O = $("#mainTab").tabs("getSelected").panel("options").title;
                                    if (H == "WEB_DR_XCXLJG") {
                                        O += "--" + $("#WEB_DR_XCXLJG_TABS").tabs("getSelected").panel("options").title
                                    }
                                    var N = "增加";
                                    Micro_AddOperHistory([{
                                        companyId: mCompanyId,
                                        OperUserid: mCurUserId,
                                        AddTime: "$录入时间$",
                                        UIName: O,
                                        TabelName: H,
                                        OperName: N,
                                        OperDetail: O + ":" + N
                                    }])
                                }
                                $("#" + H + "_ADDDLG").dialog("destroy");
                                $("#" + C).datagrid("reload");
                                if (H == "AL_BAS_CLASS") {
                                    AL_BAS_CLASS_IDS = getSelectedTreePathId("AL_BAS_CLASS_TREE");
                                    $("#AL_BAS_CLASS_TREE").tree("reload")
                                }
                            } else {
                                jQuery.messager.alert("提示:", P, "error")
                            }
                        }
                    })
                };
                if (!isEmptyOrNull(A)) {
                    if (A == "8") {
                        var L = $("#WEB_DR_XCXLJG_ADD_exp").textbox("getValue");
                        var M = $("#WEB_DR_XCXLJG_ADD_CntExp2").textbox("getValue");
                        if (!$.Micro.IsEmpty(L) && !$.Micro.IsEmpty(M)) {
                            $.messager.confirm("提示:", "属性公式与属性默认值不能同时非空，确定只保留默认值吗？",
                            function(N) {
                                if (N) {
                                    $("#WEB_DR_XCXLJG_ADD_exp").textbox("setValue", "");
                                    K()
                                }
                            })
                        } else {
                            if (!$.Micro.IsEmpty(M)) {
                                $("#WEB_DR_XCXLJG_ADD_exp").textbox("setValue", "")
                            }
                            K()
                        }
                    } else {
                        K()
                    }
                } else {
                    K()
                }
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#" + H + "_ADDDLG").dialog("destroy")
            }
        }],
        onClose: function() {
            $("#" + H + "_ADDDLG").dialog("destroy")
        },
        onLoad: function() {
            var K = new Date();
            var L = K.getFullYear() + "-";
            L += ((K.getMonth() + 1) < 10 ? ("0" + (K.getMonth() + 1)) : (K.getMonth() + 1)) + "-";
            L += ((K.getDate() < 10 ? ("0" + K.getDate()) : K.getDate())) + " ";
            L += ((K.getHours() < 10 ? ("0" + K.getHours()) : K.getHours())) + ":";
            L += ((K.getMinutes() < 10 ? ("0" + K.getMinutes()) : K.getMinutes())) + ":";
            L += (K.getSeconds() < 10 ? ("0" + K.getSeconds()) : K.getSeconds());
            $("#LastModifyDate").datetimebox("setValue", L);
            $("#LastModifier").val(mCurUserId);
            $("#LastModifier").attr("readonly", true)
        }
    })
}
function getSelectedTreePathId(A) {
    var C = "";
    var B = $("#" + A).tree("getSelected");
    while (B != null) {
        C += B.id.toString() + ",";
        B = $("#" + A).tree("getParent", B.target)
    }
    if (C.length > 0) {
        C = C.substr(0, C.length - 1)
    }
    return C.split(",")
}
function findSelectedTreePathId(A, C) {
    if (isEmptyOrNull(C)) {
        return
    }
    if (C.length <= 0) {
        return
    }
    if (C.length > 0) {
        var B = $("#" + A).tree("find", C[C.length - 1]);
        if (C.length > 1) {
            $("#" + A).tree("expand", B.target)
        }
        $("#" + A).tree("select", B.target);
        C.pop()
    }
}
function baseDelObject(dgId, keyCol, delAshx, isDefault) {
    var rows = $("#" + dgId).datagrid("getChecked");
    if (rows.length < 1) {
        jQuery.messager.alert("提示:", "请选择需要删除的记录!", "warning");
        return
    }
    var delEvent = function() {
        para = {};
        para.action = "del";
        para.delList = "";
        $.each(rows,
        function(i, row) {
            para.delList = para.delList + "'" + row[keyCol] + "',"
        });
        $.messager.progress({
            title: "正在删除",
            msg: "正在删除中..."
        });
        $.ajax({
            url: delAshx,
            data: para,
            type: "POST",
            dataType: "text",
            success: function(result) {
                setTimeout(function() {
                    $.messager.progress("close")
                },
                100);
                if (result == "ok") {
                    if (mPublicUseOperHistory == 1) {
                        var OperLabel = "";
                        switch (keyCol) {
                        case "id":
                            OperLabel = "id";
                            break;
                        case "c_userid":
                            OperLabel = "用户编码";
                            break;
                        default:
                            OperLabel = "id"
                        }
                        var UIName = $("#mainTab").tabs("getSelected").panel("options").title;
                        var tableName = dgId.replace("_DG", "");
                        if (tableName.indexOf("WEB_DR_XCXLJG_") > -1) {
                            UIName += "--" + $("#WEB_DR_XCXLJG_TABS").tabs("getSelected").panel("options").title
                        }
                        var OperName = "删除";
                        var delListStr = replaceAll(para.delList, "'", "");
                        delListStr = $.Micro.Left(delListStr, delListStr.length - 1);
                        Micro_AddOperHistory([{
                            companyId: mCompanyId,
                            OperUserid: mCurUserId,
                            AddTime: "$录入时间$",
                            UIName: UIName,
                            TabelName: tableName,
                            OperName: OperName,
                            OperDetail: OperLabel + ":" + delListStr + OperName
                        }])
                    }
                    $("#" + dgId).datagrid("reload").datagrid("clearSelections").datagrid("clearChecked");
                    if (dgId == "AL_BAS_CLASS_DG") {
                        AL_BAS_CLASS_IDS = getSelectedTreePathId("AL_BAS_CLASS_TREE");
                        $("#AL_BAS_CLASS_TREE").tree("reload")
                    }
                } else {
                    jQuery.messager.alert("提示:", result, "error")
                }
            },
            error: function() {
                setTimeout(function() {
                    $.messager.progress("close")
                },
                100)
            }
        })
    };
    if (dgId == "WEB_DR_XCXL_DG") {
        var main = function() {
            with($("#WEB_DR_XCXL_enterPW_dlg")) {
                dialog("open").dialog("center");
                $("#WEB_DR_XCXL_enterPW_dlg_pw").textbox("setValue", "");
                $("#WEB_DR_XCXL_enterPW_dlg_pw").textbox("textbox").focus();
                var surePW = function() {
                    var password = $("#WEB_DR_XCXL_enterPW_dlg_pw").textbox("getValue");
                    $.ajax({
                        type: "POST",
                        dataType: "text",
                        url: "../MicroSys/MicroDDDL.ashx",
                        data: {
                            action: "getPWD"
                        },
                        success: function(data) {
                            if (dencrypt(data) == password) {
                                dialog("close");
                                delEvent()
                            } else {
                                $.messager.alert("错误", "密码错误，请重新输入!", "error");
                                return
                            }
                        },
                        error: function() {
                            $.messager.alert("错误", "调用失败，请刷新页面!", "error");
                            return
                        }
                    })
                };
                parent().find(".dialog-button a").eq(0).linkbutton({
                    onClick: function() {
                        surePW()
                    }
                });
                parent().find(".dialog-button a").eq(1).linkbutton({
                    onClick: function() {
                        dialog("close")
                    }
                })
            }
        };
        var delList = [];
        $.each(rows,
        function(i, row) {
            delList.push("'" + row[keyCol] + "'")
        });
        $.ajax({
            type: "POST",
            dataType: "text",
            async: false,
            url: "../MicroBase/WEB_DR_XCXLJG.ashx",
            data: {
                action: "del_checkExist",
                delList: delList.join(",")
            },
            success: function(result) {
                console.log(delList);
                console.log(result);
                if (result == "no") {
                    $.messager.confirm("提示！", "有图库使用了该系列结构，删除后原图库会有异常，要继续删除吗？",
                    function(r) {
                        if (r) {
                            main()
                        }
                    })
                } else {
                    main()
                }
            },
            error: function() {
                $.messager.alert("错误", "系统有误!", "error")
            }
        })
    } else {
        if (isDefault && $.inArray(dgId, ["WEB_DR_XCXLJG_OPT_DG", "WEB_DR_XCXLJG_XC_DG", "WEB_DR_XCXLJG_GL_DG", "WEB_DR_XCXLJG_WJ_DG", "WEB_DR_XCXLJG_BJ_DG", "WEB_DR_XCXLJG_COST_DG", "WEB_DR_XCXLJG_LIMIT_DG", "WEB_DR_XCXLJG_LABEL_DG"]) > -1) {
            with($("#WEB_DR_XCXLJG_enterPW_dlg")) {
                dialog("open").dialog("center");
                $("#WEB_DR_XCXLJG_enterPW_dlg_pw").textbox("setValue", "");
                $("#WEB_DR_XCXLJG_enterPW_dlg_pw").textbox("textbox").focus();
                var surePW = function() {
                    var password = $("#WEB_DR_XCXLJG_enterPW_dlg_pw").textbox("getValue");
                    $.ajax({
                        type: "POST",
                        dataType: "text",
                        url: "../MicroSys/MicroDDDL.ashx",
                        data: {
                            action: "getPWD"
                        },
                        success: function(data) {
                            if (dencrypt(data) == password) {
                                dialog("close");
                                delEvent()
                            } else {
                                $.messager.alert("错误", "密码错误，请重新输入!", "error");
                                return
                            }
                        },
                        error: function() {
                            $.messager.alert("错误", "调用失败，请刷新页面!", "error");
                            return
                        }
                    })
                };
                parent().find(".dialog-button a").eq(0).linkbutton({
                    onClick: function() {
                        surePW()
                    }
                });
                parent().find(".dialog-button a").eq(1).linkbutton({
                    onClick: function() {
                        dialog("close")
                    }
                })
            }
        } else {
            $.messager.confirm("提示！", "确定删除这" + rows.length + "个记录?",
            function(r) {
                if (r) {
                    delEvent()
                }
            })
        }
    }
}
function baseReflashObject(A, B) {
    dataGridSetColVisible(A, B)
}
function baseImpXlsObject(dgId, tableName, reflash_fun) {
    $("<div></div>").dialog({
        id: "SYS_IMPXLS_DLG",
        title: "导入资料",
        href: "../MicroSys/SYS_IMPXLS.html",
        height: "100%",
        width: "100%",
        modal: true,
        iconCls: "icon-mXls",
        onClose: function() {
            dataGridSetColVisible(dgId, tableName);
            $("#SYS_IMPXLS_DLG").dialog("destroy")
        },
        onLoad: function() {
            $("#SYS_IMPXLS_DIV").focus();
            var cols = $("#" + dgId).datagrid("options").columns;
            if (dgId == "AL_BAS_PRODUCT_ALARM_DG") {
                cols = AL_BAS_PRODUCT_ALARM_COLINFO_IMP
            } else {
                if (dgId == "AL_BAS_FITTING_DG") {
                    cols = AL_BAS_FITTING_COLINFO_IMP
                } else {
                    if (dgId == "AL_BAS_CLIENT_DG") {
                        cols = AL_BAS_CLIENT_COLINFO_IMP
                    } else {
                        if (dgId == "AL_BAS_PRODUCT_DG") {
                            cols = AL_BAS_PRODUCT_COLINFO_IMP
                        } else {
                            if (dgId == "AL_BAS_COLOR_DG") {
                                cols = AL_BAS_COLOR_COLINFO_IMP
                            } else {
                                if (dgId == "AL_BAS_LINKMAN_DG") {
                                    cols = AL_BAS_LINKMAN_COLINFO_IMP
                                } else {
                                    if (dgId == "AL_BAS_STATION_CLIENT_DG") {
                                        cols = AL_BAS_STATION_CLIENT_COLINFO_IMP
                                    } else {
                                        if (dgId == "AL_BAS_WINPRODUCT_DG") {
                                            cols = AL_BAS_WINPRODUCT_COLINFO_IMP
                                        } else {
                                            if (dgId == "AL_BAS_STATION_DG") {
                                                cols = AL_BAS_STATION_COLINFO_IMP
                                            } else {
                                                var md = dgId.replace("_DG", "");
                                                if (eval("typeof " + md + '_COLINFO_IMP != "undefined"')) {
                                                    cols = eval(md + "_COLINFO_IMP")
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var copyArr = $.extend(true, [], cols[0]);
            for (i = copyArr.length - 1; i >= 0; i--) {
                if (copyArr[i].field == "id") {
                    copyArr.splice(i, 1)
                }
            }
            cols = [copyArr];
            $("#SYS_IMPXLS_DG").datagrid({
                url: "",
                iconCls: "icon-edit",
                height: "95.5%",
                width: "100%",
                rownumbers: true,
                nowrap: false,
                pagination: true,
                fitColumns: true,
                autoSizeColumn: true,
                striped: true,
                collapsible: false,
                toolbar: "SYS_IMPXLS_TB",
                rownumbers: true,
                columns: cols,
                params: {
                    tableName: tableName
                },
                onBeforeLoad: function(parm) {
                    if ($(this).datagrid("options").singleSelect == false) {
                        $(this).datagrid({
                            singleSelect: true
                        })
                    }
                    if ($(this).datagrid("options").selectOnCheck == true) {
                        $(this).datagrid({
                            selectOnCheck: false
                        })
                    }
                    if ($(this).datagrid("options").checkOnSelect == true) {
                        $(this).datagrid({
                            checkOnSelect: false
                        })
                    }
                    if ($(this).datagrid("options").multiSort == true) {
                        $(this).datagrid({
                            multiSort: false
                        })
                    }
                    $("#impTableName").val(tableName);
                    $("#impDialogName").val("SYS_IMPXLS_DLG");
                    $("#impDataGridReflash").val(reflash_fun)
                }
            })
        }
    });
    $("#SYS_IMPXLS_DG").datagrid("load", {})
}
function baseInit(dgId, tableName, keyField, gridDataUrl, colInfo, addHtml, procAshx, mWidth, mHeight, queryParams) {
    var newtoolbar = [];
    para = {};
    para.action = "getMenuToolbar";
    para.resourceId = tableName;
    $.ajax({
        url: "MicroMenu.ashx",
        data: para,
        type: "POST",
        dataType: "json",
        success: function(result) {
            $.each(result.toolBar,
            function(i, btn) {
                if (tableName == "AL_BAS_CLASS" || tableName == "CC_SYS_USER") {
                    if (btn.name == "刷新" || btn.name == "查找") {
                        return true
                    }
                }
                newtoolbar[newtoolbar.length] = {
                    id: dgId + "_TB_BTN" + i.toString(),
                    text: btn.name,
                    iconCls: btn.icon,
                    handler: function() {
                        eval(btn.event)
                    }
                }
            })
        }
    });
    var fitcol = true;
    if (mVersion == "ERP_ENT" && dgId == "AL_BAS_CLIENT_DG") {
        fitcol = false
    }
    if (queryParams) {
        var options = $("#" + dgId).datagrid("options");
        options.queryParams = queryParams
    }
    $("#" + dgId).datagrid({
        url: gridDataUrl,
        iconCls: "icon-edit",
        rownumbers: true,
        nowrap: false,
        pagination: true,
        fitColumns: fitcol,
        autoSizeColumn: true,
        striped: true,
        collapsible: false,
        rownumbers: true,
        toolbar: newtoolbar,
        multiSort: true,
        columns: colInfo,
        showFooter: true,
        onLoadSuccess: function(record) {
            if ($(this).datagrid("options").singleSelect == false) {
                $(this).datagrid({
                    singleSelect: true
                })
            }
            if ($(this).datagrid("options").selectOnCheck == true) {
                $(this).datagrid({
                    selectOnCheck: false
                })
            }
            if ($(this).datagrid("options").checkOnSelect == true) {
                $(this).datagrid({
                    checkOnSelect: false
                })
            }
            $("#" + dgId).datagrid("columnMoving");
            var tb = $("#" + dgId).datagrid("options").toolbar;
            for (var i = 0; i < tb.length; i++) {
                $("#" + tb[i].id).linkbutton({
                    plain: false
                })
            }
            $(".datagrid-ftable tr td div").each(function(i, th) {
                var val = $(th).text();
                $(th).html("<label style='font-weight: bolder;'>" + val + "</label>")
            })
        },
        onDblClickRow: function(rowIndex, rowData) {
            $("#" + dgId).datagrid("clearSelections").datagrid("clearChecked").datagrid("checkRow", rowIndex);
            if ($("a[id^='" + dgId + "_TB_BTN'] .l-btn-text:contains('修改')").length > 0) {
                baseEditObject(dgId, tableName, keyField, addHtml, procAshx, mWidth, mHeight)
            }
        },
        onHeaderContextMenu: function(e, field) {
            e.preventDefault();
            $("#DataGridContextMenu").remove();
            var contextMenu = null;
            contextMenu = $("<div id='DataGridContextMenu'/>").appendTo("body");
            contextMenu.menu({
                onClick: function(item) {
                    if (item.name == "批量赋值") {
                        var checkRows = $("#" + dgId).datagrid("getChecked");
                        if (checkRows.length < 1) {
                            $.messager.alert("提示", "请勾选要赋值的记录!");
                            return
                        }
                        var colOption = $("#" + dgId).datagrid("getColumnOption", field);
                        if (!colOption.editor) {
                            return
                        }
                        $("<div></div>").dialog({
                            id: "SYS_BATCH_SET_VALUE_DLG",
                            title: "批量赋值",
                            href: "../MicroSys/SYS_BATCH_SET_VALUE_BASE.html",
                            params: {
                                dgId: dgId,
                                field: field,
                                tableName: tableName
                            },
                            height: 130,
                            width: 316,
                            resizable: true,
                            modal: true,
                            iconCls: "icon-mSetting",
                            onClose: function() {
                                $("#" + dgId).datagrid("reload");
                                $("#SYS_BATCH_SET_VALUE_DLG").dialog("destroy")
                            }
                        })
                    }
                }
            });
            contextMenu.menu("appendItem", {
                name: "批量赋值",
                text: "批量赋值"
            });
            contextMenu.menu("show", {
                left: e.pageX,
                top: e.pageY
            })
        }
    });
    $("#" + dgId).datagrid({
        pageSize: mPageSize,
        pageList: mPageList
    });
    dataGridSetColVisible(dgId, tableName)
}
function baseInitToolbar(C, H, J, D, K, G, E, A, F, B, I) {
    if ($.Micro.IsEmpty(I)) {
        I = false
    }
    $("#" + C).datagrid({
        url: D,
        iconCls: "icon-edit",
        rownumbers: true,
        nowrap: false,
        pagination: true,
        autoSizeColumn: true,
        striped: true,
        collapsible: false,
        rownumbers: true,
        toolbar: B,
        multiSort: true,
        columns: K,
        showFooter: true,
        fitColumns: I,
        onLoadSuccess: function(N) {
            if ($(this).datagrid("options").singleSelect == false) {
                $(this).datagrid({
                    singleSelect: true
                })
            }
            if ($(this).datagrid("options").selectOnCheck == true) {
                $(this).datagrid({
                    selectOnCheck: false
                })
            }
            if ($(this).datagrid("options").checkOnSelect == true) {
                $(this).datagrid({
                    checkOnSelect: false
                })
            }
            $("#" + C).datagrid("columnMoving");
            var L = $("#" + C).datagrid("options").toolbar;
            for (var M = 0; M < L.length; M++) {
                $("#" + L[M].id).linkbutton({
                    plain: false
                })
            }
            $(".datagrid-ftable tr td div").each(function(O, P) {
                var Q = $(P).text();
                $(P).html("<label style='font-weight: bolder;'>" + Q + "</label>")
            })
        },
        onLoadError: function(L) {
            console.log(L);
            $(this).datagrid("loadData", {
                total: 0,
                rows: []
            })
        },
        onDblClickRow: function(M, L) {
            $("#" + C).datagrid("clearSelections").datagrid("clearChecked").datagrid("checkRow", M);
            if (H && H.indexOf("V_") >= 0) {
                ReportOpenWindow(C, H)
            } else {
                if ($.Micro.IsEmpty(G)) {
                    return
                }
                baseEditObject(C, H, J, G, E, A, F)
            }
        }
    });
    $("#" + C).datagrid({
        pageSize: mPageSize,
        pageList: mPageList
    });
    MD_InitToolbar_Other(H);
    dataGridSetColVisible(C, H)
}
function basePrint(dgId) {
    var tableString = '<table cellspacing="0" class="pb">';
    var frozenColumns = $("#" + dgId).datagrid("options").frozenColumns;
    var columns = $("#" + dgId).datagrid("options").columns;
    console.clear();
    var nameList = "";
    var colWidthList = "";
    var colWidthArr;
    if (typeof columns != "undefined" && columns != "") {
        $(columns).each(function(index) {
            tableString += "\n<tr>";
            tableString += '\n<th width="15px"';
            tableString += ">序号</th>";
            if (typeof frozenColumns != "undefined" && typeof frozenColumns[index] != "undefined") {
                for (var i = 0; i < frozenColumns[index].length; ++i) {
                    if (!frozenColumns[index][i].hidden) {
                        tableString += '\n<th width="' + frozenColumns[index][i].width + '"';
                        if (typeof frozenColumns[index][i].rowspan != "undefined" && frozenColumns[index][i].rowspan > 1) {
                            tableString += ' rowspan="' + frozenColumns[index][i].rowspan + '"'
                        }
                        if (typeof frozenColumns[index][i].colspan != "undefined" && frozenColumns[index][i].colspan > 1) {
                            tableString += ' colspan="' + frozenColumns[index][i].colspan + '"'
                        }
                        if (typeof frozenColumns[index][i].field != "undefined" && frozenColumns[index][i].field != "") {
                            nameList += ',{"f":"' + frozenColumns[index][i].field + '", "a":"' + frozenColumns[index][i].align + '", "ffun":' + frozenColumns[index][i].formatter + "}"
                        }
                        tableString += ">" + frozenColumns[0][i].title + "</th>"
                    }
                }
            }
            for (var i = 0; i < columns[index].length; ++i) {
                if (!columns[index][i].checkbox == true) {
                    if (!columns[index][i].hidden) {
                        colWidthList = colWidthList + "," + columns[index][i].width;
                        tableString += '\n<th width="' + columns[index][i].width + '"';
                        if (typeof columns[index][i].rowspan != "undefined" && columns[index][i].rowspan > 1) {
                            tableString += ' rowspan="' + columns[index][i].rowspan + '"'
                        }
                        if (typeof columns[index][i].colspan != "undefined" && columns[index][i].colspan > 1) {
                            tableString += ' colspan="' + columns[index][i].colspan + '"'
                        }
                        if (typeof columns[index][i].field != "undefined" && columns[index][i].field != "") {
                            nameList += ',{"f":"' + columns[index][i].field + '", "a":"' + columns[index][i].align + '", "ffun":' + columns[index][i].formatter + "}"
                        }
                        tableString += ">" + columns[index][i].title + "</th>"
                    }
                }
            }
            tableString += "\n</tr>"
        })
    }
    colWidthList = colWidthList.substr(1);
    colWidthArr = colWidthList.split(",");
    var rows = $("#" + dgId).datagrid("getChecked");
    if (rows.length <= 0) {
        rows = $("#" + dgId).datagrid("getRows")
    }
    var nl = eval("([" + nameList.substring(1) + "])");
    for (var i = 0; i < rows.length; ++i) {
        tableString += "\n<tr>";
        tableString += "\n<td";
        tableString += ' style="text-align:center;width:15px;"';
        tableString += ">";
        tableString += i + 1;
        tableString += "</td>";
        $(nl).each(function(j) {
            var e = nl[j].f.lastIndexOf("_0");
            tableString += "\n<td";
            if (nl[j].a != "undefined" && nl[j].a != "") {
                tableString += ' style="text-align:' + nl[j].a + ";width:" + colWidthArr[j] + ';"'
            }
            tableString += ">";
            var cont = rows[i][nl[j].f];
            var Col = columns[0][j];
            var formatterFun = nl[j].ffun;
            if (typeof(formatterFun) == "function") {
                try {
                    eval("var formatter_Fun = " + formatterFun);
                    cont = formatter_Fun(cont, rows[i], nl[j].f)
                } catch(e) {
                    console.log(e.name + ":" + e.message)
                }
            }
            if ($.Micro.IsEmpty(cont)) {
                cont = ""
            }
            tableString += cont;
            tableString += "</td>"
        });
        tableString += "\n</tr>"
    }
    var footerTable = $("#" + dgId).parent().find(".datagrid-view2 .datagrid-ftable");
    if (footerTable.length > 0) {
        tableString += '<tr style="text-align:center;font-weight: bolder;">';
        $.each(footerTable.find("tr:first").find("td"),
        function() {
            var isHidden = $(this).is(":hidden");
            var hideStyle = isHidden ? "display:none": "";
            var label = $(this).find("label").text();
            tableString += '<td style="' + hideStyle + '">' + label + "</td>"
        });
        tableString += "</tr>"
    }
    tableString += "\n</table>";
    var printDialog = $("<div></div>").dialog({
        id: dgId + "PRT",
        title: "打印资料",
        href: "../MicroSys/BASE_PRINT.htm",
        width: "97%",
        height: "50%",
        modal: true,
        iconCls: "icon-print",
        onClose: function() {
            $("#" + dgId + "PRT").dialog("destroy")
        },
        onLoad: function() {
            $("#mBasePrintDiv").html(tableString)
        }
    })
}
function formatter_finishflag_budget(D, C, B, E) {
    if (C.name == "完成标识" && !$.Micro.IsEmpty(mPublicFinishFlag)) {
        for (A = 0; A < mPublicFinishFlag.length; A++) {
            if (C[E] == mPublicFinishFlag[A].scode) {
                return mPublicFinishFlag[A].name
            }
        }
    } else {
        if (C.dbCol == "mxcxlid") {
            for (var A = 0; A < mPublicXcxlList.length; A++) {
                if (mPublicXcxlList[A].id == D) {
                    return mPublicXcxlList[A].name
                }
            }
        }
    }
    return D
}
function formatter_property_order(C, B, A, D) {
    if (B.name == "客户" && !$.Micro.IsEmpty(mPublicClientList)) {
        for (i = 0; i < mPublicClientList.length; i++) {
            if (B[D] == mPublicClientList[i].id) {
                return mPublicClientList[i].clientname
            }
        }
    }
    return C
}
function formatter_finishflag(C, B, A, D) {
    for (i = 0; i < mPublicFinishFlag.length; i++) {
        if (B[D] == mPublicFinishFlag[i].scode) {
            return mPublicFinishFlag[i].name
        }
    }
    return C
}
function formatter_noticefinishflag(C, B, A, D) {
    for (i = 0; i < mPublicNoticeFinishFlag.length; i++) {
        if (B[D] == mPublicNoticeFinishFlag[i].scode) {
            return mPublicNoticeFinishFlag[i].name
        }
    }
}
function formatter_confirmflag(C, B, A, D) {
    for (i = 0; i < mPublicConfirmFlagList.length; i++) {
        if (B[D] == mPublicConfirmFlagList[i].id) {
            return mPublicConfirmFlagList[i].name
        }
    }
}
function formatter_user(C, B, A, D) {
    for (i = 0; i < mPublicAllUserList.length; i++) {
        if (B[D] == mPublicAllUserList[i].c_userid) {
            return mPublicAllUserList[i].c_user_name
        }
    }
    if (C == "13827734857") {
        return "系统管理员"
    } else {
        return ""
    }
}
function formatter_class(C, B, A, D) {
    for (i = 0; i < mPublicClassList.length; i++) {
        if (B[D] == mPublicClassList[i].id) {
            return mPublicClassList[i]["class"]
        }
    }
    return ""
}
function formatter_supplier(C, B, A, D) {
    for (i = 0; i < mPublicSupplierList.length; i++) {
        if (B[D] == mPublicSupplierList[i].id) {
            return mPublicSupplierList[i].suppliername
        }
    }
    return ""
}
function fromSupplierGetID(A, B) {
    for (i = 0; i < mPublicSupplierList.length; i++) {
        if (A == mPublicSupplierList[i].supplierid) {
            return mPublicSupplierList[i].id
        }
    }
    return 0
}
function fromLocationGetID(A, B) {
    for (i = 0; i < mPublicPrLocationList.length; i++) {
        if (A == mPublicPrLocationList[i].location) {
            return mPublicPrLocationList[i].id
        }
    }
    return 0
}
function formatter_client(C, B, A, D) {
    for (i = 0; i < mPublicClientList.length; i++) {
        if (B[D] == mPublicClientList[i].id) {
            return mPublicClientList[i].clientname
        }
    }
    return C
}
function formatter_clientshortname(C, B, A, D) {
    for (i = 0; i < mPublicClientList.length; i++) {
        if (B[D] == mPublicClientList[i].id) {
            return mPublicClientList[i].shortname
        }
    }
    return C
}
function formatter_project(C, B, A, D) {
    for (i = 0; i < mPublicProjectList.length; i++) {
        if (B[D] == mPublicProjectList[i].id) {
            return mPublicProjectList[i].projectname
        }
    }
    return ""
}
function fromProjectGetID(B, A) {
    for (i = 0; i < mPublicProjectList.length; i++) {
        if (B == mPublicProjectList[i].projectid) {
            return mPublicProjectList[i].id
        }
    }
    return 0
}
function formatter_color(C, B, A, D) {
    if (mPublicColorList) {
        for (i = 0; i < mPublicColorList.length; i++) {
            if (B[D] == mPublicColorList[i].id) {
                return mPublicColorList[i].name
            }
        }
    }
    return C
}
function formatter_location(E, D, C, F, A) {
    var B;
    if (A == "pr") {
        B = mPublicPrLocationList
    } else {
        if (A == "wj") {
            B = mPublicWjLocationList
        } else {
            if (A == "gl") {
                B = mPublicGlLocationList
            } else {
                if (A == "cp") {
                    B = mPublicCpLocationList
                }
            }
        }
    }
    for (i = 0; i < B.length; i++) {
        if (D[F] == B[i].id) {
            return B[i].location
        }
    }
    return ""
}
function formatter_productid(C, B, A, D) {
    for (i = 0; i < mPublicPrList.length; i++) {
        if (B[D] == mPublicPrList[i].id) {
            return mPublicPrList[i].productid
        }
    }
    return B[D]
}
function formatter_materialid(C, B, A, D) {
    for (i = 0; i < mPublicWjList.length; i++) {
        if (B[D] == mPublicWjList[i].id) {
            return mPublicWjList[i].materialid
        }
    }
    return ""
}
function formatter_glassid(C, B, A, D) {
    for (i = 0; i < mPublicGlList.length; i++) {
        if (B[D] == mPublicGlList[i].id) {
            return mPublicGlList[i].glass
        }
    }
    return ""
}
function formatter_glasstexture(C, B, A, D) {
    for (i = 0; i < mPublicGlassTexture.length; i++) {
        if (B[D] == mPublicGlassTexture[i].id) {
            return mPublicGlassTexture[i].GlassTexture
        }
    }
    return ""
}
function formatter_glasstech(C, B, A, D) {
    for (i = 0; i < mPublicGlassTech.length; i++) {
        if (B[D] == mPublicGlassTech[i].id) {
            return mPublicGlassTech[i].GlassTech
        }
    }
    return ""
}
function formatter_ysid(C, B, A, D) {
    for (i = 0; i < mPublicYSList.length; i++) {
        if (B[D] == mPublicYSList[i].id) {
            return mPublicYSList[i].ysKind
        }
    }
    return ""
}
function formatter_rzid(C, B, A, D) {
    for (i = 0; i < mPublicRZList.length; i++) {
        if (B[D] == mPublicRZList[i].id) {
            return mPublicRZList[i].rzKind
        }
    }
    return ""
}
function formatter_yfid(C, B, A, D) {
    for (i = 0; i < mPublicYFList.length; i++) {
        if (B[D] == mPublicYFList[i].id) {
            return mPublicYFList[i].yfKind
        }
    }
    return ""
}
function formatter_paywayid(C, B, A, D) {
    for (i = 0; i < mPublicPayWayList.length; i++) {
        if (B[D] == mPublicPayWayList[i].id) {
            return mPublicPayWayList[i].name
        }
    }
    return ""
}
function formatter_costs(C, B, A, D) {
    for (i = 0; i < mPublicCosts.length; i++) {
        if (B[D] == mPublicCosts[i].scode) {
            return mPublicCosts[i].name
        }
    }
    return B[D]
}
function myformatter(E, C, B, G) {
    var A = new Date(C[G]);
    var F = A.getFullYear();
    var D = A.getMonth() + 1;
    return F + "-" + D
}
function formatter_bcheck(value, row, index, colName) {
    var returnText = "";
    try {
        var result = eval(row[colName]);
        if (result) {
            returnText = "√"
        }
    } catch(e) {}
    return returnText
}
function formatter_plinefiletype(C) {
    var A = "";
    for (var B = 0; B < mPublicPLineFileTypeList.length; B++) {
        if (mPublicPLineFileTypeList[B].value == C) {
            return mPublicPLineFileTypeList[B].text
        }
    }
    return A
}
function formatter_mcfl(C, B, A, D) {
    for (i = 0; i < mPublicMcflList.length; i++) {
        if (B[D] == mPublicMcflList[i].id.toString()) {
            return mPublicMcflList[i].name
        }
    }
    return ""
}
function formatter_xcxl(C, B, A, D) {
    for (i = 0; i < mPublicXcxlList.length; i++) {
        if (B[D] == mPublicXcxlList[i].id) {
            return mPublicXcxlList[i].name
        }
    }
    return ""
}
function formatter_xcxljg_type(C, B, A, D) {
    for (i = 0; i < mPublicXcxljgTypeList.length; i++) {
        if (B[D] == mPublicXcxljgTypeList[i].id.toString()) {
            return mPublicXcxljgTypeList[i].name
        }
    }
    return ""
}
function formatter_xcxljg_bjType(C, B, A, D) {
    for (i = 0; i < mPublicXcxljgBjTypeList.length; i++) {
        if (B[D] == mPublicXcxljgBjTypeList[i].scode.toString()) {
            return mPublicXcxljgBjTypeList[i].name
        }
    }
    return ""
}
function formatter_yesno(C, B, A, D) {
    if (B[D] == "Y") {
        return "是"
    } else {
        return "否"
    }
}
function formatter_station(C, B, A, D) {
    for (i = 0; i < mPublicStationList.length; i++) {
        if (B[D] == mPublicStationList[i].id) {
            return mPublicStationList[i].station
        }
    }
    return ""
}
function formatter_proce(C, B, A, D) {
    for (i = 0; i < mPublicProceList.length; i++) {
        if (B[D] == mPublicProceList[i].id) {
            return mPublicProceList[i].proce
        }
    }
    return ""
}
function formatter_route(C, B, A, D) {
    for (i = 0; i < mPublicRouteList.length; i++) {
        if (B[D] == mPublicRouteList[i].num) {
            return mPublicRouteList[i].routename
        }
    }
    return ""
}
function formatter_ordertype(C, B, A, D) {
    for (i = 0; i < mPublicProjectOrderTypeList.length; i++) {
        if (B[D] == mPublicProjectOrderTypeList[i].scode) {
            return mPublicProjectOrderTypeList[i].name
        }
    }
    return ""
}
function formatter_wwcalcmode(C, B, A, D) {
    for (i = 0; i < mPublicWwCalcModeList.length; i++) {
        if (B[D] == mPublicWwCalcModeList[i].id) {
            return mPublicWwCalcModeList[i].name
        }
    }
}
function formatter_wwproce(C, B, A, D) {
    for (i = 0; i < mPublicWwProceList.length; i++) {
        if (B[D] == mPublicWwProceList[i].id) {
            return mPublicWwProceList[i].WwProce
        }
    }
}
function formatter_printype(C, B, A, D) {
    for (i = 0; i < mPublicPrInTypeList.length; i++) {
        if (B[D] == mPublicPrInTypeList[i].scode) {
            return mPublicPrInTypeList[i].name
        }
    }
    return ""
}
function formatter_prouttype(C, B, A, D) {
    for (i = 0; i < mPublicPrOutTypeList.length; i++) {
        if (B[D] == mPublicPrOutTypeList[i].scode) {
            return mPublicPrOutTypeList[i].name
        }
    }
    return ""
}
function formatter_cpintype(C, B, A, D) {
    for (i = 0; i < mPublicCpInTypeList.length; i++) {
        if (B[D] == mPublicCpInTypeList[i].scode) {
            return mPublicCpInTypeList[i].name
        }
    }
    return ""
}
function formatter_cpouttype(C, B, A, D) {
    for (i = 0; i < mPublicCpOutTypeList.length; i++) {
        if (B[D] == mPublicCpOutTypeList[i].scode) {
            return mPublicCpOutTypeList[i].name
        }
    }
    return ""
}
function formatter_option(A, B) {
    var C = "";
    if (mPublicOptionList) {
        for (i = 0; i < mPublicOptionList.length; i++) {
            if (mPublicOptionList[i].c_type.toString() == A && mPublicOptionList[i].c_name.toString() == B) {
                C = mPublicOptionList[i].c_value.toString();
                break
            }
        }
    }
    return C
}
function formatter_xltype(C, B, A, D) {
    for (i = 0; i < mPublicXlTypeList.length; i++) {
        if (B[D] == mPublicXlTypeList[i].id) {
            return mPublicXlTypeList[i].xltype
        }
    }
    return C
}
function formatter_routeprocetype(C, B, A, D) {
    for (i = 0; i < mPublicRouteProceTypeList.length; i++) {
        if (C == mPublicRouteProceTypeList[i].value) {
            return mPublicRouteProceTypeList[i].name
        }
    }
    return ""
}
function formatter_processmodetype(C, B, A, D) {
    for (i = 0; i < mPublicProcessModeList.length; i++) {
        if (B[D] == mPublicProcessModeList[i].value) {
            return mPublicProcessModeList[i].name
        }
    }
    return ""
}
function getMdNewNum(A) {
    var B;
    para = {};
    para.action = "getNewNum";
    para.tableName = A;
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(C) {
            if (C.substr(0, 2) == "ok") {
                if (C.substr(3).length > 0) {
                    B = C.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取单号失败！", "error")
            }
        }
    });
    return B
}
function getMdNewNumx(A, B) {
    var C;
    para = {};
    para.action = "getNewNumx";
    para.keyVal = B;
    para.tableName = A;
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(E) {
            if (E.substr(0, 2) == "ok") {
                if (E.substr(3).length > 0) {
                    var H = E.substr(3);
                    var D = H.substr(0, H.indexOf("-"));
                    var G = parseInt(H.substr(H.indexOf("-") + 1));
                    var F = G - 1;
                    $.each(A.split(","),
                    function(I, J) {
                        var K = $("#" + J + "_DG_DETAIL").datagrid("getRows");
                        $.each(K,
                        function(M, N) {
                            var L = N["Numx"];
                            if (!isEmptyOrNull(L)) {
                                var P = L.substr(0, L.indexOf("-"));
                                var O = parseInt(L.substr(L.indexOf("-") + 1));
                                if (F < O) {
                                    F = O
                                }
                            }
                        })
                    });
                    if (parseInt(F + 1).toString().length >= 3) {
                        C = D + "-" + parseInt(F + 1).toString()
                    } else {
                        if (parseInt(F + 1).toString().length == 2) {
                            C = D + "-0" + parseInt(F + 1).toString()
                        } else {
                            if (parseInt(F + 1).toString().length == 1) {
                                C = D + "-00" + parseInt(F + 1).toString()
                            }
                        }
                    }
                }
            } else {
                jQuery.messager.alert("提示:", "获取项目号失败！", "error")
            }
        }
    });
    return C
}
function getCurrentUserId(A) {
    var B;
    para = {};
    para.action = "getCurrentUserId";
    try {
        $.ajax({
            url: "../MicroSys/MicroSys.ashx",
            data: para,
            type: "POST",
            dataType: "text",
            async: false,
            success: function(D) {
                if (D.substr(0, 2) == "ok") {
                    if (D.substr(3).length > 0) {
                        B = D.substr(3)
                    }
                } else {
                    if (A == 0) {
                        B = ""
                    } else {
                        console.clear();
                        jQuery.messager.alert("提示:", "获取用户失败！", "error");
                        location.href = "../MicroLogin/"
                    }
                }
            }
        })
    } catch(C) {
        console.clear()
    }
    return B
}
function getCurrentUserPwd() {
    var A;
    para = {};
    para.action = "getCurrentUserPwd";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取密码失败！", "error")
            }
        }
    });
    return A
}
function getCompanyId(A) {
    var C;
    para = {};
    para.action = "getCompanyId";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(D) {
            if (D.substr(0, 2) == "ok") {
                if (D.substr(3).length > 0) {
                    C = D.substr(3)
                }
            } else {
                if (A == 0) {
                    C = ""
                } else {
                    console.clear();
                    jQuery.messager.alert("提示:", "获取用户失败！", "error");
                    location.href = "../MicroLogin/"
                }
            }
        }
    });
    try {} catch(B) {
        console.clear()
    }
    return C
}
function getIsAllowAll() {
    var A;
    para = {};
    para.action = "getIsAllowAll";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取用户失败！", "error")
            }
        }
    });
    return A
}
function getIsInUser() {
    var A;
    para = {};
    para.action = "getIsInUser";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取用户失败！", "error")
            }
        }
    });
    return A
}
function getMaterUserId() {
    var A;
    para = {};
    para.action = "getMaterUserId";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取用户失败！", "error")
            }
        }
    });
    return A
}
function getIsShowSplice() {
    var A;
    para = {};
    para.action = "getIsShowSplice";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取用户失败！", "error")
            }
        }
    });
    return A
}
function getBxdMoney() {
    var A;
    para = {};
    para.action = "getBxdMoney";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取用户失败！", "error")
            }
        }
    });
    return A
}
function getShowTooltips() {
    var A;
    para = {};
    para.action = "getShowTooltips";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取用户失败！", "error")
            }
        }
    });
    return A
}
function setLoginNoTooltips() {
    para = {};
    para.action = "setLoginNoTooltips";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {
            if (A == "ok") {
                mShowTooltips = "N"
            } else {
                jQuery.messager.alert("提示:", "设置失败！", "error");
                return false
            }
        }
    })
}
function getCompanyVersion() {
    var A;
    para = {};
    para.action = "getCompanyVersion";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    B = B.substr(3);
                    var C = B.split(",");
                    A = C[0];
                    mOrderNumRule = C[1]
                }
            } else {
                jQuery.messager.alert("提示:", "获取公司版本失败！", "error")
            }
        }
    });
    if (isEmptyOrNull(A)) {
        A = "DESIGN"
    }
    return A
}
function getMicroBUserTags() {
    var A = [];
    para = {};
    para.action = "getBUserTags";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = B.substr(3)
                }
            } else {
                $.messager.alert("提示:", "获取用户标识失败！", "error")
            }
        }
    });
    return A
}
function setMicroBxdUser_UI() {
    var A = 0;
    para = {};
    para.action = "setSession_BxdUser";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = Number(B.substr(3))
                }
            } else {
                $.messager.alert("提示:", "切换下单用户当前界面失败！", "error")
            }
        }
    });
    return A
}
function getMicroBxdUser_UI() {
    var A = 0;
    para = {};
    para.action = "getSession_BxdUser";
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                if (B.substr(3).length > 0) {
                    A = Number(B.substr(3))
                }
            } else {
                $.messager.alert("提示:", "获取下单用户当前界面失败！", "error")
            }
        }
    });
    return A
}
function getLocalDateTimeFileName() {
    var A = new Date();
    var B = A.getFullYear();
    B += ((A.getMonth() + 1) < 10 ? ("0" + (A.getMonth() + 1)) : (A.getMonth() + 1));
    B += ((A.getDate() < 10 ? ("0" + A.getDate()) : A.getDate()));
    B += ((A.getHours() < 10 ? ("0" + A.getHours()) : A.getHours()));
    B += ((A.getMinutes() < 10 ? ("0" + A.getMinutes()) : A.getMinutes()));
    B += (A.getSeconds() < 10 ? ("0" + A.getSeconds()) : A.getSeconds());
    return B
}
function getLocalDateTime() {
    var A = new Date();
    var B = A.getFullYear() + "-";
    B += ((A.getMonth() + 1) < 10 ? ("0" + (A.getMonth() + 1)) : (A.getMonth() + 1)) + "-";
    B += ((A.getDate() < 10 ? ("0" + A.getDate()) : A.getDate())) + " ";
    B += ((A.getHours() < 10 ? ("0" + A.getHours()) : A.getHours())) + ":";
    B += ((A.getMinutes() < 10 ? ("0" + A.getMinutes()) : A.getMinutes())) + ":";
    B += (A.getSeconds() < 10 ? ("0" + A.getSeconds()) : A.getSeconds());
    return B
}
function getLocalDate() {
    var A = new Date();
    var B = A.getFullYear() + "-";
    B += ((A.getMonth() + 1) < 10 ? ("0" + (A.getMonth() + 1)) : (A.getMonth() + 1)) + "-";
    B += ((A.getDate() < 10 ? ("0" + A.getDate()) : A.getDate())) + "";
    return B
}
Date.prototype.pattern = function(B) {
    if (isEmptyOrNull(this) || this == "Invalid Date") {
        return ""
    }
    var C = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    var A = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(B)) {
        B = B.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(B)) {
        B = B.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f": "/u5468") : "") + A[this.getDay() + ""])
    }
    for (var D in C) {
        if (new RegExp("(" + D + ")").test(B)) {
            B = B.replace(RegExp.$1, (RegExp.$1.length == 1) ? (C[D]) : (("00" + C[D]).substr(("" + C[D]).length)))
        }
    }
    return B
};
Number.prototype.toFixed = function(C) {
    var A = this;
    var B = this.toString().split(".");
    if (B.length >= 2) {
        if (B[1].length >= 12) {
            if (B[1].substr(C + 1, 8) == "99999999") {
                A = Math.round(this * Math.pow(10, (C + 1))) / Math.pow(10, (C + 1))
            }
        }
    }
    return Math.round(A * Math.pow(10, C)) / Math.pow(10, C)
};
Number.prototype.mul = function(C) {
    var D = 0,
    A = this.toString(),
    E = C.toString();
    try {
        D += A.split(".")[1].length
    } catch(B) {}
    try {
        D += E.split(".")[1].length
    } catch(B) {}
    return Number(A.replace(".", "")) * Number(E.replace(".", "")) / Math.pow(10, D)
};
Number.prototype.toLowerCase = function() {
    return this.toString()
};
function isPcUserAgent() {
    var A = navigator.userAgent.toLowerCase();
    var F = A.match(/ipad/i) == "ipad";
    var I = A.match(/iphone os/i) == "iphone os";
    var B = A.match(/midp/i) == "midp";
    var J = A.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var H = A.match(/ucweb/i) == "ucweb";
    var C = A.match(/ucbrowser/i) == "ucbrowser";
    var E = A.match(/android/i) == "android";
    var G = A.match(/windows ce/i) == "windows ce";
    var D = A.match(/windows mobile/i) == "windows mobile";
    if (F || I || B || J || H || C || E || G || D) {
        return false
    } else {
        return true
    }
}
function isTableRecordExists(B, A, D) {
    var C;
    para = {};
    para.action = "isTableRecordExists";
    para.tableName = B;
    para.keyField = A;
    para.keyVal = D;
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(E) {
            if (E.substr(0, 2) == "ok") {
                if (E.substr(3).length > 0) {
                    C = E.substr(3)
                }
            } else {
                alert("获取记录是否存在失败！" + E)
            }
        }
    });
    if (C == "1") {
        return true
    } else {
        return false
    }
}
function isTableRecordExistsSQL(B) {
    var A;
    para = {};
    para.action = "isTableRecordExistsSQL";
    para.sql = B;
    $.ajax({
        url: "../MicroSys/MicroSys.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(C) {
            if (C.substr(0, 2) == "ok") {
                if (C.substr(3).length > 0) {
                    A = C.substr(3)
                }
            } else {
                jQuery.messager.alert("提示:", "获取记录是否存在失败！", "error")
            }
        }
    });
    if (A == "1") {
        return true
    } else {
        return false
    }
}
function replaceAll(C, A, B) {
    A = A.replace(/\(/g, "\\(");
    A = A.replace(/\)/g, "\\)");
    A = A.replace(/\-/g, "\\-");
    A = A.replace(/\|/g, "\\|");
    A = A.replace(/\+/g, "\\+");
    A = A.replace(/\*/g, "\\*");
    var E = new RegExp(A, "g");
    var D = C;
    if (!isEmptyOrNull(C)) {
        D = C.replace(E, B)
    }
    return D
}
function RandomNumBoth(E, D) {
    var A = D - E;
    var B = Math.random();
    var C = E + Math.round(B * A);
    return C
}
function FixedLenRandomNum(B) {
    var E = Math.random() * 10;
    if (E == 0) {
        E = 1
    } else {
        if (E == 10) {
            E = 9
        }
    }
    var C = (Math.floor(E * Math.pow(10, (B - 1)))).toString();
    var D = C.length;
    for (var A = 0; A < B - D; A++) {
        C = C + "0".toString()
    }
    return C
}
function encrypt(G) {
    var C = "";
    var E, D;
    var F, A, B;
    A = G.length;
    E = "abcdefghi_jklmnopqrstuvwx.yz0123456789ABCDEFGHIJK-LMNOPQRSTUVWXYZ";
    D = "gL23Kijvabc45-pqrlmnu6odtefsMh7BkxyCDwRSTz.01FGHIJPQN89WXYAO_ZEUV";
    for (F = 0; F < A; F++) {
        B = E.indexOf(G.substr(F, 1));
        if (B > -1) {
            C = C + D.substr(B, 1)
        } else {
            C = C + G.substr(F, 1)
        }
    }
    return C
}
function dencrypt(G) {
    var C = "";
    var E, D;
    var F, A;
    var B;
    A = G.length;
    E = "abcdefghi_jklmnopqrstuvwx.yz0123456789ABCDEFGHIJK-LMNOPQRSTUVWXYZ";
    D = "gL23Kijvabc45-pqrlmnu6odtefsMh7BkxyCDwRSTz.01FGHIJPQN89WXYAO_ZEUV";
    for (F = 0; F < A; F++) {
        B = D.indexOf(G.substr(F, 1));
        if (B > -1) {
            C = C + E.substr(B, 1)
        } else {
            C = C + G.substr(F, 1)
        }
    }
    return C
}
function MicroHelp_Add() {
    $("#microHelpId").textbox("setValue", MicroDraw_GUID());
    var A = $("#WEB_HELP_MGR_tt").tree("getSelected");
    if (isEmptyOrNull(A)) {
        $("#microHelpCate").textbox("setValue", "")
    } else {
        if (isEmptyOrNull(A.children)) {} else {
            $("#microHelpCate").textbox("setValue", A.text)
        }
    }
    $("#microHelpTitle").textbox("setValue", "");
    $("#microHelpSeq").textbox("setValue", "0");
    UE.getEditor("editor").setContent("", false)
}
function MicroHelp_Del() {
    var A = $("#microHelpId").textbox("getValue");
    if (A.toString().length > 0) {
        para = {};
        para.action = "del";
        para.delList = "'" + A + "'";
        $.ajax({
            url: "../MicroSys/WEB_HELP.ashx",
            data: para,
            type: "POST",
            dataType: "text",
            async: true,
            success: function(B) {
                if (B == "ok") {
                    var C = $.messager.progress({
                        title: "正在删除",
                        msg: "正在删除中..."
                    });
                    setTimeout(function() {
                        $.messager.progress("close")
                    },
                    100)
                } else {
                    jQuery.messager.alert("提示:", "删除失败!", "error")
                }
            }
        })
    }
    $("#microHelpId").textbox("setValue", "");
    $("#microHelpCate").textbox("setValue", "");
    $("#microHelpTitle").textbox("setValue", "");
    $("#microHelpSeq").textbox("setValue", "0");
    UE.getEditor("editor").setContent("", false);
    MicroHelp_ReflashTree()
}
function MicroHelp_Save() {
    var E;
    var F = $("#microHelpId").textbox("getValue");
    var A = $("#microHelpCate").textbox("getValue");
    var C = $("#microHelpTitle").textbox("getValue");
    var B = $("#microHelpSeq").textbox("getValue");
    var D = UE.getEditor("editor").getContent();
    if (F.length == 0) {
        jQuery.messager.alert("提示:", "标识不能为空，请先点击增加按钮!", "error");
        return
    }
    if (isTableRecordExists("WEB_HELP", "id", F)) {
        E = "edit"
    } else {
        E = "add"
    }
    para = {};
    para.action = E;
    para.id = F;
    para.cate = A;
    para.title = C;
    para.helpContent = D;
    para.seq = B;
    para.oldId = F;
    $.ajax({
        url: "../MicroSys/WEB_HELP.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: true,
        success: function(G) {
            if (G == "ok") {
                var H = $.messager.progress({
                    title: "正在保存",
                    msg: "正在计算，请等待..."
                });
                setTimeout(function() {
                    $.messager.progress("close")
                },
                100)
            } else {
                jQuery.messager.alert("提示:", "保存失败!", "error")
            }
        }
    });
    MicroHelp_ReflashTree()
}
function MicroHelp_GetTree() {
    para = {};
    para.action = "getHelpTree";
    $.ajax({
        url: "../MicroSys/WEB_HELP.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: true,
        success: function(B) {
            if (B.substr(0, 2) == "ok") {
                var A = $("#WEB_HELP_MGR_tt").tree("getRoot");
                var D = "";
                var E = "";
                var G = B.substr(3).split("[;]");
                if (G.length > 0 && B.substr(3).length > 0) {
                    for (i = 0; i < G.length; i++) {
                        var F = G[i].split("[,]");
                        if (D == "" || D != F[1]) {
                            $("#WEB_HELP_MGR_tt").tree("append", {
                                parent: A.target,
                                data: [{
                                    id: F[1],
                                    text: F[1]
                                }]
                            });
                            var C = $("#WEB_HELP_MGR_tt").tree("find", F[1]);
                            $("#WEB_HELP_MGR_tt").tree("append", {
                                parent: C.target,
                                data: [{
                                    id: F[0],
                                    text: F[2],
                                    seq: F[3]
                                }]
                            })
                        } else {
                            var C = $("#WEB_HELP_MGR_tt").tree("find", F[1]);
                            $("#WEB_HELP_MGR_tt").tree("append", {
                                parent: C.target,
                                data: [{
                                    id: F[0],
                                    text: F[2],
                                    seq: F[3]
                                }]
                            })
                        }
                        D = F[1]
                    }
                }
            } else {
                jQuery.messager.alert("提示:", "失败!", "error")
            }
        }
    });
    $("#WEB_HELP_MGR_tt").tree({
        onSelect: function(B) {
            if (isEmptyOrNull(B.children)) {
                $("#microHelpId").textbox("setValue", B.id);
                var A = $("#WEB_HELP_MGR_tt").tree("getParent", B.target);
                $("#microHelpCate").textbox("setValue", A.text);
                $("#microHelpTitle").textbox("setValue", B.text);
                $("#microHelpSeq").textbox("setValue", B.seq);
                para = {};
                para.action = "getContentById";
                para.id = B.id;
                $.ajax({
                    url: "../MicroSys/WEB_HELP.ashx",
                    data: para,
                    type: "POST",
                    dataType: "text",
                    async: true,
                    success: function(C) {
                        if (C.substr(0, 2) == "ok") {
                            UE.getEditor("editor").setContent(C.substr(3), false)
                        } else {
                            jQuery.messager.alert("提示:", "失败!", "error")
                        }
                    }
                })
            } else {}
        }
    })
}
function MicroHelp_ReflashTree() {
    var A = $("#WEB_HELP_MGR_tt").tree("getRoot");
    var B = $("#WEB_HELP_MGR_tt").tree("getChildren", A.target);
    $.each(B,
    function(C, D) {
        $("#WEB_HELP_MGR_tt").tree("remove", D.target)
    });
    MicroHelp_GetTree()
}
function WebHelp_getTree(A) {
    para = {};
    para.action = "getHelpTree";
    $.ajax({
        url: "../MicroSys/WEB_HELP.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: true,
        success: function(C) {
            if (C.substr(0, 2) == "ok") {
                var B = $("#" + A).tree("getRoot");
                var E = "";
                var F = "";
                var H = C.substr(3).split("[;]");
                if (H.length > 0 && C.substr(3).length > 0) {
                    for (i = 0; i < H.length; i++) {
                        var G = H[i].split("[,]");
                        if (E == "" || E != G[1]) {
                            switch (mVersion) {
                            case "DRAW":
                            case "DRAW_M":
                            case "DRAW_JX":
                                if (G[1].indexOf("XHJ") >= 0) {
                                    $("#" + A).tree("append", {
                                        parent: B.target,
                                        data: [{
                                            id: G[1],
                                            text: G[1]
                                        }]
                                    });
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "OPT":
                                break;
                            case "DESIGN":
                            case "DESIGN_S":
                            case "DESIGN_M":
                            case "DESIGN_E":
                            case "DESIGN_CS":
                                if (G[1].indexOf("JSS") >= 0 || G[1].indexOf("XHJ") >= 0) {
                                    $("#" + A).tree("append", {
                                        parent: B.target,
                                        data: [{
                                            id: G[1],
                                            text: G[1]
                                        }]
                                    });
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "STORE":
                                if (G[1].indexOf("型材仓库") >= 0 || G[1].indexOf("配件仓库") >= 0 || G[1].indexOf("玻璃仓库") >= 0 || G[1].indexOf("新手上路") >= 0 || G[1].indexOf("常用下载") >= 0) {
                                    $("#" + A).tree("append", {
                                        parent: B.target,
                                        data: [{
                                            id: G[1],
                                            text: G[1]
                                        }]
                                    });
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "STR+YSYF":
                                if (G[1].indexOf("型材仓库") >= 0 || G[1].indexOf("配件仓库") >= 0 || G[1].indexOf("玻璃仓库") >= 0 || G[1].indexOf("新手上路") >= 0 || G[1].indexOf("常用下载") >= 0) {
                                    $("#" + A).tree("append", {
                                        parent: B.target,
                                        data: [{
                                            id: G[1],
                                            text: G[1]
                                        }]
                                    });
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "DSN+STR":
                            case "DSN+STR_ENT":
                            case "ERP_PRO":
                                if (G[1].indexOf("XBG") >= 0 || G[1].indexOf("JSS") >= 0 || G[1].indexOf("XHJ") >= 0) {
                                    $("#" + A).tree("append", {
                                        parent: B.target,
                                        data: [{
                                            id: G[1],
                                            text: G[1]
                                        }]
                                    });
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "DSN+YS":
                            case "DSN+YS_ENT":
                            case "ERP_ENT":
                                $("#" + A).tree("append", {
                                    parent: B.target,
                                    data: [{
                                        id: G[1],
                                        text: G[1]
                                    }]
                                });
                                var D = $("#" + A).tree("find", G[1]);
                                $("#" + A).tree("append", {
                                    parent: D.target,
                                    data: [{
                                        id: G[0],
                                        text: G[2]
                                    }]
                                });
                                break;
                            default:
                            }
                        } else {
                            switch (mVersion) {
                            case "DRAW":
                            case "DRAW_M":
                            case "DRAW_JX":
                                if (G[1].indexOf("XHJ") >= 0) {
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "OPT":
                                break;
                            case "DESIGN":
                            case "DESIGN_S":
                            case "DESIGN_M":
                            case "DESIGN_E":
                            case "DESIGN_CS":
                                if (G[1].indexOf("JSS") >= 0 || G[1].indexOf("XHJ") >= 0) {
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "STORE":
                                if (G[1].indexOf("型材仓库") >= 0 || G[1].indexOf("配件仓库") >= 0 || G[1].indexOf("玻璃仓库") >= 0 || G[1].indexOf("新手上路") >= 0 || G[1].indexOf("常用下载") >= 0) {
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "STR+YSYF":
                                if (G[1].indexOf("型材仓库") >= 0 || G[1].indexOf("配件仓库") >= 0 || G[1].indexOf("玻璃仓库") >= 0 || G[1].indexOf("新手上路") >= 0 || G[1].indexOf("常用下载") >= 0) {
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "DSN+STR":
                            case "DSN+STR_ENT":
                            case "ERP_PRO":
                                if (G[1].indexOf("XBG") >= 0 || G[1].indexOf("JSS") >= 0 || G[1].indexOf("XHJ") >= 0) {
                                    var D = $("#" + A).tree("find", G[1]);
                                    $("#" + A).tree("append", {
                                        parent: D.target,
                                        data: [{
                                            id: G[0],
                                            text: G[2]
                                        }]
                                    })
                                }
                                break;
                            case "DSN+YS":
                            case "DSN+YS_ENT":
                            case "ERP_ENT":
                                var D = $("#" + A).tree("find", G[1]);
                                $("#" + A).tree("append", {
                                    parent: D.target,
                                    data: [{
                                        id: G[0],
                                        text: G[2]
                                    }]
                                });
                                break;
                            default:
                            }
                        }
                        E = G[1]
                    }
                }
            } else {
                jQuery.messager.alert("提示:", "失败!", "error")
            }
        }
    })
}
var successLogin = function() {
    if (isPcUserAgent()) {
        location.href = "../MicroSys/frame.aspx"
    } else {
        var A = getCompanyVersion();
        if (A == "DRAW_M" || A == "DRAW_JX" || A == "DESIGN_S" || A == "DESIGN_M" || A == "DESIGN_E" || A == "DSN+YS" || A == "DSN+YS_ENT" || A == "DSN+STR" || A == "DSN+STR_ENT") {
            location.href = "../MobileDraw/mobileDrawFrame.aspx"
        } else {
            location.href = "../Mobile/mobileFrame.aspx"
        }
    }
};
function Micro_CheckInUserlogin(D, E, F) {
    var A = 0;
    $.ajax({
        type: "POST",
        async: false,
        dataType: "text",
        url: "../MicroLogin/login.ashx?action=CheckInUserLogin",
        data: {
            loginid: D,
            pwd: E
        },
        success: function(H) {
            if (H.substr(0, 2) == "ok") {
                var G = H.substr(3);
                if (G == "1") {
                    A = 1;
                    $("<div></div>").dialog({
                        id: "CheckInUserLoginDialog",
                        params: {
                            name: D,
                            pwd: E,
                            easyui: F
                        },
                        title: "请选择版本",
                        href: "../MicroLogin/CheckInUserLoginMobile.html",
                        height: "315",
                        width: "300",
                        resizable: true,
                        modal: true,
                        iconCls: "icon-edit",
                        onClose: function() {
                            $("#CheckInUserLoginDialog").dialog("destroy")
                        },
                        onLoad: function() {
                            if (!isPcUserAgent()) {
                                $(".panel-htop").addClass("inuserscale")
                            }
                        }
                    })
                }
            }
        },
        error: function() {
            $.messager.alert("错误", "调用失败!", "error")
        }
    });
    var B = D;
    var C = E;
    if (A == 0) {
        login(B, C, F)
    }
}
function login(C, D, E) {
    var B = C;
    var A = D;
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../MicroLogin/login.ashx?action=Login",
        data: {
            loginid: B,
            pwd: A
        },
        success: function(H) {
            if (H[0].Status == "1") {
                var G = document.referrer.toString();
                if (G.toUpperCase().indexOf("RETURNURL") >= 0 && G.toUpperCase().indexOf("V_SYS_USER.ASPX") >= 0) {
                    location.href = "../MicroSys/V_SYS_USER.aspx"
                } else {
                    if (G.toUpperCase().indexOf("VICEFRAME.ASPX") >= 0) {
                        mCurUserId = getCurrentUserId();
                        mCompanyId = getCompanyId();
                        var F = $.Micro.getCookie(MicroCookie_OperName);
                        switch (F) {
                        case "CJXCXL_BUY":
                            Micro_BuyXCXL_AutoCopyXCXL("successLogin()");
                            break
                        }
                    } else {
                        successLogin()
                    }
                }
            } else {
                if (H[0].Status == "outDate") {
                    payMoney(B)
                } else {
                    $.messager.alert("错误", "账号或密码错误!", "error");
                    if (E == 0) {
                        $("#btnLogin").removeClass("disable")
                    } else {
                        $("#btnLogin").linkbutton("enable")
                    }
                }
            }
        },
        error: function() {
            $.messager.alert("错误", "调用失败!", "error");
            if (E == 0) {
                $("#btnLogin").removeClass("disable")
            } else {
                $("#btnLogin").linkbutton("enable")
            }
        }
    })
}
function register() {
    $("<div></div>").dialog({
        id: "mMicroReg",
        title: "用户注册...",
        href: "../MicroLogin/register.html",
        height: 320,
        width: 350,
        modal: true,
        iconCls: "icon-man",
        buttons: [{
            text: "确定",
            iconCls: "icon-add",
            handler: function() {
                var B = $("#REG_VERSION").textbox("getValue");
                if (B.indexOf("ERP") > -1) {
                    $("#mMicroReg").dialog("destroy");
                    $.messager.progress("close");
                    $.messager.alert("提示", "您现在注册的ERP版本需要管理员授权，请直接联系13827734857！");
                    return
                }
                var A = $.messager.progress({
                    title: "正在注册",
                    msg: "正在注册用户资料，请等待..."
                });
                $("#Register_Form").form("submit", {
                    url: "../MicroLogin/register.ashx",
                    onSubmit: function(D) {
                        var E = GetQueryString("wxId");
                        if (isEmptyOrNull(E)) {
                            E = ""
                        }
                        D.action = "register";
                        D.wxId = E;
                        var C = $(this).form("validate");
                        if (!C) {
                            $.messager.progress("close");
                            $.messager.alert("提示", "请按要求填写注册信息(背景色红色的需要重新填写)！")
                        }
                        return C
                    },
                    success: function(C) {
                        setTimeout(function() {
                            $.messager.progress("close")
                        },
                        1000);
                        if (C.substring(0, 2) == "ok") {
                            jQuery.messager.alert("提示:", "注册完成! 请登录", "info");
                            $("#mMicroReg").dialog("destroy")
                        } else {
                            jQuery.messager.alert("提示:", "注册失败！" + C, "error")
                        }
                    }
                })
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#mMicroReg").dialog("destroy")
            }
        }],
        onClose: function() {
            $("#mMicroReg").dialog("destroy")
        },
        onLoad: function() {}
    })
}
function regsiterAndPay() {
    if (isEmptyOrNull($("#REG_VERSION").combobox("getValue"))) {
        jQuery.messager.alert("提示:", "软件版本 不能为空!", "info");
        return
    }
    if (isEmptyOrNull($("#REG_USERID").textbox("getValue"))) {
        jQuery.messager.alert("提示:", "手机号 不能为空!", "info");
        return
    }
    if (isEmptyOrNull($("#REG_PWD").textbox("getValue"))) {
        jQuery.messager.alert("提示:", "密码 不能为空!", "info");
        return
    }
    para = {};
    para.action = "registerAndPay";
    para.REG_USERID = $("#REG_USERID").textbox("getValue");
    para.REG_USERNAME = $("#REG_USERNAME").textbox("getValue");
    para.REG_PWD = $("#REG_PWD").textbox("getValue");
    para.REG_COMPANY = $("#REG_COMPANY").textbox("getValue");
    para.REG_TEL = $("#REG_TEL").textbox("getValue");
    para.REG_FAX = $("#REG_FAX").textbox("getValue");
    para.REG_WWW = $("#REG_WWW").textbox("getValue");
    para.REG_VERSION = $("#REG_VERSION").combobox("getValue");
    para.REG_MEMO = $("#REG_MEMO").textbox("getValue");
    para.REG_WXID = $("#REG_WXID").combobox("getValue");
    $.ajax({
        url: "../MicroLogin/register.ashx",
        data: para,
        type: "POST",
        dataType: "text",
        async: false,
        success: function(A) {
            if (A == "ok") {
                $.ajax({
                    type: "POST",
                    dataType: "JSON",
                    url: "../MicroLogin/login.ashx?action=Login",
                    data: {
                        loginid: $("#REG_USERID").textbox("getValue"),
                        pwd: $("#REG_PWD").textbox("getValue")
                    },
                    success: function(C) {
                        if (C[0].Status == "1") {
                            var B = document.referrer.toString();
                            if (B.toUpperCase().indexOf("RETURNURL") >= 0 && B.toUpperCase().indexOf("V_SYS_USER.ASPX") >= 0) {
                                location.href = "../MicroSys/V_SYS_USER.aspx"
                            } else {
                                if (isPcUserAgent()) {
                                    location.href = "../MicroSys/frame.aspx"
                                } else {
                                    location.href = "../Mobile/mobileFrame.aspx"
                                }
                            }
                        } else {
                            if (C[0].Status == "outDate") {
                                payMoney($("#REG_USERID").textbox("getValue"))
                            } else {
                                $.messager.alert("错误", "账号或密码错误!", "error")
                            }
                        }
                    },
                    error: function() {
                        $.messager.alert("错误", "调用失败!", "error")
                    }
                })
            } else {
                jQuery.messager.alert("提示:", "注册失败!" + A, "error")
            }
        }
    })
}
function logout() {
    $.ajax({
        type: "POST",
        dataType: "text",
        url: "../MicroSys/MicroSys.ashx?action=logout",
        success: function(A) {
            if (A == "ok") {
                location.href = "../MicroLogin/"
            } else {
                location.href = "../MicroLogin/"
            }
        },
        error: function() {
            location.href = "../MicroLogin/"
        }
    })
}
function payMoney(B) {
    var A = 0;
    var C = setInterval(function() {
        A = A + 1;
        if (isUserInService(B, $("#outTradeNo").text()) == "1") {
            $("#mMicroPay").dialog("destroy");
            clearInterval(C);
            if (window.location.toString().indexOf("registerAndPay") >= 0) {
                jQuery.messager.alert("提示:", "帐号已开通！", "info")
            } else {
                var F = document.getElementById("username").value;
                var E = document.getElementById("password").value;
                login(F, E)
            }
        } else {
            if (A >= 60) {
                $("#mMicroPay").dialog("destroy");
                clearInterval(C);
                jQuery.messager.alert("提示:", "收款二维码已过期，请重新登录！", "info")
            }
        }
    },
    6000);
    var D = "";
    if (window.location.toString().indexOf("registerAndPay") >= 0) {
        D = "../MicroLogin/wxNativePayPage.aspx?userId=" + B + "&payType=registerAndPay"
    } else {
        D = "../MicroLogin/wxNativePayPage.aspx?userId=" + B + "&payType=pay"
    }
    $("<div></div>").dialog({
        id: "mMicroPay",
        title: "付款开通...",
        href: D,
        height: 556,
        width: 700,
        modal: true,
        iconCls: "icon-man",
        buttons: [{
            text: "确定",
            iconCls: "icon-add",
            handler: function() {
                clearInterval(C);
                $("#mMicroPay").dialog("destroy")
            }
        }],
        onClose: function() {
            clearInterval(C);
            $("#mMicroPay").dialog("destroy")
        },
        onLoad: function() {}
    })
}
function isUserInService(A, C) {
    var B = "";
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../MicroLogin/login.ashx?action=isUserInService",
        data: {
            userId: A,
            outTradeNo: C
        },
        async: false,
        success: function(D) {
            if (D[0].Status == "1") {
                B = "1"
            } else {
                B = "0"
            }
        },
        error: function() {
            B = "0"
        }
    });
    return B
}
function reLogin() {
    $("<div></div>").dialog({
        id: "mMicroReLogin",
        title: "用户已经断开连接，请重新登录",
        href: "../MicroLogin/reLogin.html",
        height: 200,
        width: 350,
        modal: true,
        iconCls: "icon-man",
        buttons: [{
            text: "确定",
            iconCls: "icon-add",
            handler: function() {
                $("#reLogin_Form").form("submit", {
                    url: "../MicroLogin/login.ashx",
                    onSubmit: function(param) {
                        param.action = "Login";
                        var bValidate = $(this).form("validate");
                        if (!bValidate) {
                            $.messager.alert("提示", "请按要求填写帐号、密码！")
                        }
                        return bValidate
                    },
                    success: function(result) {
                        var resultJSON = eval(result);
                        if (resultJSON[0].Status == "1") {
                            $.messager.alert("错误", "重新登录成功，请再次执行操作!", "info");
                            $("#mMicroReLogin").dialog("destroy")
                        } else {
                            $.messager.alert("错误", "帐号或密码错误!", "error")
                        }
                    }
                })
            }
        },
        {
            text: "取消",
            iconCls: "icon-cancel",
            handler: function() {
                $("#mMicroReLogin").dialog("destroy")
            }
        }],
        onClose: function() {
            $("#mMicroReLogin").dialog("destroy")
        },
        onLoad: function() {}
    })
}
function isLoginPage(A) {
    if (A.indexOf("//登录界面不能删除") > 0) {
        return true
    } else {
        return false
    }
}
function MicroDecodeHtml(A) {
    var C = {
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&nbsp;": " ",
        "&quot;": '"',
        "&copy;": ""
    };
    var D = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
    var E = /&\w+;|&#(\d+);/g;
    var B = /(^\s*)|(\s*$)/g;
    A = (A != undefined) ? A: "";
    return (typeof A != "string") ? A: A.replace(E,
    function(H, F) {
        var G = C[H];
        if (G == undefined) {
            if (!isNaN(F)) {
                G = String.fromCharCode((F == 160) ? 32 : F)
            } else {
                G = H
            }
        }
        return G
    })
}
function MicroGetWinProductId(A) {
    mPublicWinProductIdList = [];
    if (isEmptyOrNull(A) || A <= 0) {
        return mPublicWinProductIdList
    }
    if (isEmptyOrNull(mPublicAllWinProductIdList)) {
        return mPublicWinProductIdList
    }
    if (mPublicAllWinProductIdList.length <= 0) {
        return mPublicWinProductIdList
    }
    $.each(mPublicAllWinProductIdList,
    function(B, C) {
        if (C.id == A) {
            mPublicWinProductIdList.push(C)
        }
    });
    return mPublicWinProductIdList
}
function MicroGetOrderNum(D, E, G, F) {
    var A = "";
    if (isEmptyOrNull(D)) {
        A = "num"
    } else {
        A = "numx"
    }
    var C = new Date();
    var B = C.getFullYear().toString().substr(2) + "";
    B += ((C.getMonth() + 1) < 10 ? ("0" + (C.getMonth() + 1)) : (C.getMonth() + 1)) + "";
    if (A == "num") {
        switch (mOrderNumRule) {
        case "C":
            if (isEmptyOrNull(F)) {
                var C = new Date();
                var B = C.getFullYear().toString().substr(2) + "";
                B += ((C.getMonth() + 1) < 10 ? ("0" + (C.getMonth() + 1)) : (C.getMonth() + 1)) + "";
                B += ((C.getDate() < 10 ? ("0" + C.getDate()) : C.getDate())) + "";
                B += ((C.getHours() < 10 ? ("0" + C.getHours()) : C.getHours())) + "";
                B += ((C.getMinutes() < 10 ? ("0" + C.getMinutes()) : C.getMinutes())) + "";
                B += (C.getSeconds() < 10 ? ("0" + C.getSeconds()) : C.getSeconds());
                D = B;
                return D
            }
            if (!isNumber(F)) {
                $.messager.alert("提示", "请选择客户下拉列表内容，不能手工录入!");
                return "-1"
            }
            para = {};
            para.action = "getOrderNumIdForC";
            para.type = A;
            para.cid = F;
            para.num = E;
            $.ajax({
                url: "../MicroSys/MicroSys.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(H) {
                    if (H.substr(0, 2) == "ok") {
                        H = H.substr(3);
                        D = H
                    } else {
                        jQuery.messager.alert("提示:", "获取数据失败!" + H, "error")
                    }
                },
                error: function(H) {
                    jQuery.messager.alert("提示:", "连接超时！获取数据失败！", "error")
                }
            });
            break;
        case "B":
            para = {};
            para.action = "getOrderNumId";
            para.type = A;
            para.ordernum = B;
            para.num = E;
            $.ajax({
                url: "../MicroSys/MicroSys.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(H) {
                    if (H.substr(0, 2) == "ok") {
                        H = H.substr(3);
                        D = B + H
                    } else {
                        jQuery.messager.alert("提示:", "获取数据失败!" + H, "error")
                    }
                },
                error: function(H) {
                    jQuery.messager.alert("提示:", "连接超时！获取数据失败！", "error")
                }
            });
            break;
        case "D":
            B += ((C.getDate() < 10 ? ("0" + C.getDate()) : C.getDate()));
            para = {};
            para.action = "getOrderNumIdForD";
            para.type = A;
            para.ordernum = B;
            para.num = E;
            $.ajax({
                url: "../MicroSys/MicroSys.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(H) {
                    if (H.substr(0, 2) == "ok") {
                        H = H.substr(3);
                        D = B + H
                    } else {
                        jQuery.messager.alert("提示:", "获取数据失败!" + H, "error")
                    }
                },
                error: function(H) {
                    jQuery.messager.alert("提示:", "连接超时！获取数据失败！", "error")
                }
            });
            break;
        default:
            var C = new Date();
            var B = C.getFullYear().toString().substr(2) + "";
            B += ((C.getMonth() + 1) < 10 ? ("0" + (C.getMonth() + 1)) : (C.getMonth() + 1)) + "";
            B += ((C.getDate() < 10 ? ("0" + C.getDate()) : C.getDate())) + "";
            B += ((C.getHours() < 10 ? ("0" + C.getHours()) : C.getHours())) + "";
            B += ((C.getMinutes() < 10 ? ("0" + C.getMinutes()) : C.getMinutes())) + "";
            B += (C.getSeconds() < 10 ? ("0" + C.getSeconds()) : C.getSeconds());
            D = B;
            break
        }
        return D
    } else {
        switch (mOrderNumRule) {
        case "C":
            D = D + "-" + MicroBudget_getNextOrderNumxSeqFor3(G, E);
            break;
        case "B":
            para = {};
            para.action = "getOrderNumId";
            para.type = A;
            para.ordernum = D;
            para.num = E;
            $.ajax({
                url: "../MicroSys/MicroSys.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(H) {
                    if (H.substr(0, 2) == "ok") {
                        H = H.substr(3);
                        D = D + "-" + H
                    } else {
                        jQuery.messager.alert("提示:", "获取数据失败!" + H, "error")
                    }
                }
            });
            break;
        case "D":
            para = {};
            para.action = "getOrderNumIdForD";
            para.type = A;
            para.ordernum = D;
            para.num = E;
            $.ajax({
                url: "../MicroSys/MicroSys.ashx",
                data: para,
                type: "POST",
                dataType: "text",
                async: false,
                success: function(H) {
                    if (H.substr(0, 2) == "ok") {
                        H = H.substr(3);
                        D = D + "-" + H
                    } else {
                        jQuery.messager.alert("提示:", "获取数据失败!" + H, "error")
                    }
                }
            });
            break;
        default:
            D = D + "-" + MicroBudget_getNextOrderNumxSeq(G);
            break
        }
        return D
    }
}
function MicroRemoveDoubleQuote(A) {
    if (isEmptyOrNull(A)) {
        return A
    }
    if (typeof A == "string" && A.substr(0, 1) == '"') {
        return A.substr(1, A.length - 2)
    }
    return A
}
function F_PrintPageOverFlow() {
    var maxHeight = 1100;
    var outText = "";
    setTimeout(function() {
        var TPage = $("div[PrintTag=PrintPage]");
        var totalPage = TPage.length;
        $.each(TPage,
        function() {
            var _this = $(this);
            with(_this) {
                if (Number(outerHeight()) > maxHeight) {
                    totalPage++
                }
            }
        });
        var startNum = 1;
        $.each(TPage,
        function() {
            var _this = $(this);
            with(_this) {
                var _itemNum = find("#itemNum").text();
                if (Number(outerHeight()) > maxHeight) {
                    prepend('<div class="DivisionPageNum">' + _itemNum + "(第" + 1 + "页，共" + 2 + "页)</div>");
                    append('<div class="DivisionPageNum">' + _itemNum + "(第" + 2 + "页，共" + 2 + "页))</div>")
                } else {
                    append('<div class="DivisionPageNum">' + _itemNum + "(第" + 1 + "页，共" + 1 + "页))</div>")
                }
            }
            startNum++
        })
    },
    1000)
}
function isExistsUserRight(B) {
    var A = false;
    if ($.Micro.IsEmpty(mPublicUserPowerList)) {
        return A
    }
    $.each(mPublicUserPowerList,
    function(C, D) {
        if (D.id == B && D.isPower == 1) {
            A = true;
            return false
        }
    });
    return A
}
function ReportOpenWindow(C, F) {
    var B = $("#" + C).datagrid("getChecked");
    if (B.length < 1) {
        jQuery.messager.alert("提示:", "请选择一条需要打开录单窗口的记录!", "info");
        return
    }
    if (B.length > 1) {
        jQuery.messager.alert("提示:", "一次只能选择一条记录", "info");
        $("#" + C).datagrid("clearSelections").datagrid("clearChecked");
        return
    }
    if (B[0].单号 == undefined) {
        return
    }
    mPublicReportOrderNum = B[0].单号;
    var J = "";
    switch (F) {
    case "V_AL_OPR_LABEL_DETAIL":
        J = "AL_OPR_LABEL";
        break;
    case "V_AL_OPR_TASK_FI_DETAIL":
        J = "AL_OPR_TASK_FI";
        break;
    case "V_AL_OPR_TASK_GL_DETAIL":
        J = "AL_OPR_TASK_GL";
        break;
    case "V_AL_OPR_TASK_PR_DETAIL":
        J = "AL_OPR_TASK_PR";
        break;
    case "V_AL_PC_DETAIL":
        J = "AL_PC";
        break;
    case "V_AL_GXCC_DETAIL":
        J = "AL_GXCC";
        break;
    case "V_BCP_DETAIL_DB":
        J = "AL_BCP_DB";
        break;
    case "V_BCP_DETAIL_IN":
        J = "AL_BCP_IN";
        break;
    case "V_BCP_DETAIL_OUT":
        J = "AL_BCP_OUT";
        break;
    case "V_BCP_DETAIL_PD":
        J = "AL_BCP_PD";
        break;
    case "V_GL_DETAIL_BUY":
        J = "AL_GL_BUY";
        break;
    case "V_GL_DETAIL_DB":
        J = "AL_GL_DB";
        break;
    case "V_GL_DETAIL_IN":
        J = "AL_GL_IN";
        break;
    case "V_GL_DETAIL_OUT":
        J = "AL_GL_OUT";
        break;
    case "V_GL_DETAIL_PD":
        J = "AL_GL_PD";
        break;
    case "V_GL_DETAIL_REQUEST":
        J = "AL_GL_REQUEST";
        break;
    case "V_PR_DETAIL_BUY":
        J = "AL_PR_BUY";
        break;
    case "V_PR_DETAIL_BUY_WW":
        J = "AL_PR_BUY_WW";
        break;
    case "V_PR_DETAIL_DB":
        J = "AL_PR_DB";
        break;
    case "V_PR_DETAIL_IN":
        J = "AL_PR_IN";
        break;
    case "V_PR_DETAIL_OUT":
        J = "AL_PR_OUT";
        break;
    case "V_PR_DETAIL_PD":
        J = "AL_PR_PD";
        break;
    case "V_PR_DETAIL_REQUEST":
        J = "AL_PR_REQUEST";
        break;
    case "V_PR_DETAIL_REQUEST_WW":
        J = "AL_PR_REQUEST_WW";
        break;
    case "V_WEB_BUDGET_DETAIL":
        J = "AL_PROJECT";
        break;
    case "V_WEB_BUDGET_DETAIL_GL":
    case "V_WEB_BUDGET_DETAIL_PR_ORIG":
    case "V_WEB_BUDGET_DETAIL_WJ":
    case "V_WEB_BUDGET_DETAIL_COST":
    case "V_WEB_BUDGET_DETAIL_CP":
        J = "AL_PROJECT";
        break;
    case "V_WJ_DETAIL_BUY":
        J = "AL_WJ_BUY";
        break;
    case "V_WJ_DETAIL_DB":
        J = "AL_WJ_DB";
        break;
    case "V_WJ_DETAIL_IN":
        J = "AL_WJ_IN";
        break;
    case "V_WJ_DETAIL_OUT":
        J = "AL_WJ_OUT";
        break;
    case "V_WJ_DETAIL_PD":
        J = "AL_WJ_PD";
        break;
    case "V_WJ_DETAIL_REQUEST":
        J = "AL_WJ_REQUEST";
        break;
    case "V_AL_YF_DETAIL":
        J = "AL_YF_YF";
        break;
    case "V_AL_YF_DETAIL_SF":
        J = "AL_YF_SF";
        break;
    case "V_AL_YS_DETAIL":
        J = "AL_YS_YS";
        break;
    case "V_AL_YS_DETAIL_SS":
        J = "AL_YS_SS";
        break;
    case "V_AL_YS_DETAIL_YUS":
        J = "AL_YS_YUS";
        break;
    default:
        break
    }
    var A = false;
    var G;
    $.each(mPublicUserPowerList.menus,
    function(K, M) {
        var L = M.menus;
        $.each(L,
        function(O, N) {
            if (N.menuid == J) {
                A = true;
                G = N;
                return false
            }
        })
    });
    if (A) {
        var H = G.url;
        var D = G.menuid;
        var E = G.icon;
        var I = G.menuname;
        addTab(I, H, E)
    } else {
        $.messager.alert("提示", "您没有权限！", "info")
    }
}
function Micro_DatagridSort(E, A, F) {
    if ("up" == A) {
        if (E != 0) {
            var C = $("#" + F).datagrid("getData").rows[E];
            var B = $("#" + F).datagrid("getData").rows[E - 1];
            $("#" + F).datagrid("getData").rows[E] = B;
            $("#" + F).datagrid("getData").rows[E - 1] = C;
            $("#" + F).datagrid("refreshRow", E);
            $("#" + F).datagrid("refreshRow", E - 1);
            $("#" + F).datagrid("selectRow", E - 1)
        }
    } else {
        if ("down" == A) {
            var D = $("#" + F).datagrid("getRows").length;
            if (E != D - 1) {
                var B = $("#" + F).datagrid("getData").rows[E];
                var C = $("#" + F).datagrid("getData").rows[E + 1];
                $("#" + F).datagrid("getData").rows[E + 1] = B;
                $("#" + F).datagrid("getData").rows[E] = C;
                $("#" + F).datagrid("refreshRow", E);
                $("#" + F).datagrid("refreshRow", E + 1);
                $("#" + F).datagrid("selectRow", E + 1)
            }
        }
    }
}
function Micro_DatagridMoveUp(B) {
    var A = $("#" + B).datagrid("getSelected");
    var C = $("#" + B).datagrid("getRowIndex", A);
    $("#" + B).datagrid("clearSelections");
    Micro_DatagridSort(C, "up", B)
}
function Micro_DatagridMoveDown(B) {
    var A = $("#" + B).datagrid("getSelected");
    var C = $("#" + B).datagrid("getRowIndex", A);
    $("#" + B).datagrid("clearSelections");
    Micro_DatagridSort(C, "down", B)
}
function isNumber(A) {
    return /(0|^[1-9]\d*$)/.test(A)
}
function CheckDateTime(E) {
    var B = false;
    if (isEmptyOrNull(E)) {
        return false
    }
    var A = E.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (A != null) {
        var D = new Date(A[1], A[3] - 1, A[4]);
        B = (D.getFullYear() == A[1] && (D.getMonth() + 1) == A[3] && D.getDate() == A[4])
    }
    if (!B) {
        var C = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var A = E.match(C);
        if (A == null) {
            return false
        }
        var D = new Date(A[1], A[3] - 1, A[4], A[5], A[6], A[7]);
        B = (D.getFullYear() == A[1] && (D.getMonth() + 1) == A[3] && D.getDate() == A[4] && D.getHours() == A[5] && D.getMinutes() == A[6] && D.getSeconds() == A[7])
    }
    return B
}
Date.prototype.getLastDate = function() {
    var C = this;
    var A = new Date(C.getYear(), C.getMonth() + 1, 1);
    var B = new Date(A - 86400000);
    return B.getDate()
};
Date.prototype.dateAdd = function(F, A) {
    var C = this;
    switch (F) {
    case "s":
        return new Date(Date.parse(C) + (1000 * A));
    case "n":
        return new Date(Date.parse(C) + (60000 * A));
    case "h":
        return new Date(Date.parse(C) + (3600000 * A));
    case "d":
        return new Date(Date.parse(C) + (86400000 * A));
    case "w":
        return new Date(Date.parse(C) + ((86400000 * 7) * A));
    case "q":
        return new Date(C.getFullYear(), (C.getMonth()) + A * 3, C.getDate(), C.getHours(), C.getMinutes(), C.getSeconds());
    case "m":
        var E = C.getDate();
        var D = new Date(C.getFullYear(), (C.getMonth()) + A, "01", C.getHours(), C.getMinutes(), C.getSeconds()).getLastDate();
        var B;
        if (E > D) {
            B = D
        } else {
            B = E
        }
        return new Date(C.getFullYear(), (C.getMonth()) + A, B, C.getHours(), C.getMinutes(), C.getSeconds());
    case "y":
        return new Date((C.getFullYear() + A), C.getMonth(), C.getDate(), C.getHours(), C.getMinutes(), C.getSeconds())
    }
};
Date.prototype.dateDiff = function(D, A) {
    var B = this,
    C = {},
    E = B.getTime(),
    F = A.getTime();
    C["y"] = A.getFullYear() - B.getFullYear();
    C["q"] = C["y"] * 4 + Math.floor(A.getMonth() / 4) - Math.floor(B.getMonth() / 4);
    C["m"] = C["y"] * 12 + A.getMonth() - B.getMonth();
    C["ms"] = A.getTime() - B.getTime();
    C["w"] = Math.floor((F + 345600000) / (604800000)) - Math.floor((E + 345600000) / (604800000));
    C["d"] = Math.floor(F / 86400000) - Math.floor(E / 86400000);
    C["h"] = Math.floor(F / 3600000) - Math.floor(E / 3600000);
    C["n"] = Math.floor(F / 60000) - Math.floor(E / 60000);
    C["s"] = Math.floor(F / 1000) - Math.floor(E / 1000);
    return C[D]
};
function Handle_EasyUIHidePanel(A, F, B) {
    var D = function(I, M) {
        if (I) {
            var L;
            var N;
            var K;
            var H;
            var G = true;
            if (M.attr("class").indexOf("combogrid") > -1) {
                L = M.combogrid("options").idField;
                N = M.combogrid("getValue");
                K = M.combogrid("getText");
                H = M.combogrid("options").data
            } else {
                if (M.attr("class").indexOf("combobox") > -1) {
                    L = M.combobox("options").valueField;
                    N = M.combobox("getValue");
                    K = M.combobox("getText");
                    H = M.combobox("options").data
                } else {
                    return true
                }
            }
            if (K == "") {
                return true
            }
            for (var J = 0; J < H.length; J++) {
                if (String(N) == String(H[J][L])) {
                    G = false;
                    break
                }
            }
            if (G) {
                $.messager.alert("提示", "“" + K + "”不在下拉列表中！", "info");
                if (M.attr("class").indexOf("combogrid") > -1) {
                    M.combogrid("clear")
                } else {
                    if (M.attr("class").indexOf("combobox") > -1) {
                        M.combobox("clear")
                    }
                }
            }
        }
    };
    for (var C = 0; C < B.length; C++) {
        var E = A.datagrid("getColumnOption", B[C]);
        if (E) {
            $.extend(E.editor.options, {
                onHidePanel: function() {
                    D(F, $(this))
                }
            })
        }
    }
}
function Check_DatagridFieldRequired(dgObj, checkDatas, toTab) {
    if ((dgObj && dgObj.length > 0) && $.isArray(checkDatas)) {
        var dgOptions = dgObj.datagrid("options");
        var dgColumns = dgOptions.columns[0];
        var dgCheckCols = [];
        for (var i = 0; i < dgColumns.length; i++) {
            var dgColRequired = false;
            var dgField = dgColumns[i].field;
            var dgEditor = dgColumns[i].editor;
            if (!$.Micro.IsEmpty(dgEditor)) {
                var dgColOpts = dgEditor.options;
                if (!$.Micro.IsEmpty(dgColOpts)) {
                    dgColRequired = dgColOpts.required;
                    if ($.Micro.IsEmpty(dgColRequired)) {
                        dgColRequired = false
                    }
                }
            }
            if (dgColRequired) {
                dgCheckCols.push(i)
            }
        }
        for (var i = 0; i < dgCheckCols.length; i++) {
            var ColField = dgColumns[dgCheckCols[i]].field;
            var ColTitle = dgColumns[dgCheckCols[i]].title;
            for (var j = 0; j < checkDatas.length; j++) {
                if (eval("$.Micro.IsEmpty(checkDatas[j]." + ColField + ")")) {
                    if (toTab) {
                        var tabObj = toTab.tab;
                        var tabTitle = toTab.title;
                        if (tabObj.tabs("exists", tabTitle)) {
                            tabObj.tabs("select", tabTitle)
                        }
                    }
                    $.messager.show({
                        title: "提示",
                        msg: "“" + ColTitle + "”内容不能为空！",
                        timeout: 2000
                    });
                    dgObj.datagrid("beginEdit", j);
                    var ed = dgObj.datagrid("getEditor", {
                        index: j,
                        field: ColField
                    });
                    try {
                        if (ed) {
                            with($(ed.target).parent().find("input").filter(".validatebox-invalid").eq(0)) {
                                focus();
                                select()
                            }
                        }
                    } catch(e) {}
                    return false
                }
            }
        }
    }
    return true
}
function Micro_addSingleQuotes(D) {
    if (isEmptyOrNull(D)) {
        return ""
    }
    var B = D.split(",");
    var C = "";
    for (var A = 0; A < B.length; A++) {
        C += "'" + B[A] + "',"
    }
    C = C.substr(0, C.length - 1);
    return C
}
function Micro_getColumnType(C, D) {
    var A = $("#" + C).datagrid("getColumnOption", D);
    var E = A["type"];
    if (isEmptyOrNull(E)) {
        E = ""
    }
    if (E == "") {
        var F = $("#" + C).datagrid("getRows");
        if (F.length > 0) {
            var B = F[0][D];
            if (isNumber(B)) {
                E = "NUM"
            } else {
                if (CheckDateTime(B)) {
                    E = "DATE"
                } else {
                    E = "CHAR"
                }
            }
        }
    }
    return E
}
function Micro_SplitPage(C, G, F) {
    var I = 1;
    var K = $(".PageBody table").find(".TabBody").length;
    if (G <= 0) {
        G = 1090
    }
    var M = G - $(".PageHeader").height() - $(".PageFooter").height() - $(".TabHeader").height() - $(".TabFooter").height();
    var A = 0;
    $.each($(".TabSummary"),
    function(N, O) {
        A += $(O).height()
    });
    if (K > 0) {
        var H = 1;
        var L = 0;
        var J = $(".page").clone();
        var D = 0;
        var E = 0;
        var B = F.split(",");
        if (B.length > 0 && B[0] != "") {
            $.each(B,
            function(N, O) {
                $("#" + C).rowspanMultiCol(O)
            })
        }
        $.each($(".PageBody table").find(".TabBody"),
        function(O, Q) {
            var P = $(Q).height();
            if (((L + P) >= M) || (O == K - 1)) {
                if (O == K - 1 && (L + P + A) <= M) {
                    E = O
                } else {
                    E = O - 1
                }
                var S = false;
                if (O == K - 1 && (L + P + A) > M) {
                    S = true
                }
                var R = H + "/" + I;
                var T = J.clone();
                T.find(".PageBody").find(".TabBody:lt(" + (D) + ")").remove();
                T.find(".PageBody").find(".TabBody:gt(" + (E - D) + ")").remove();
                T.find(".pageInfoDiv").html(R);
                $("#printarea").append(T);
                var N = T.find(".PageBody").find("table");
                if (B.length > 0 && B[0] != "") {
                    $.each(B,
                    function(U, V) {
                        $(N).rowspanMultiCol(V)
                    })
                }
                D = O;
                H++;
                L = P;
                if (S) {
                    E = O;
                    var R = H + "/" + I;
                    var T = J.clone();
                    T.find(".PageBody").find(".TabBody:lt(" + D + ")").remove();
                    T.find(".PageBody").find(".TabBody:gt(" + (E - D) + ")").remove();
                    T.find(".pageInfoDiv").html(R);
                    $("#printarea").append(T);
                    var N = T.find(".PageBody").find("table");
                    if (B.length > 0) {
                        $.each(B,
                        function(U, V) {
                            $(N).rowspanMultiCol(V)
                        })
                    }
                }
            } else {
                L = L + P
            }
        });
        $(".page").eq(0).remove();
        I = $(".page").length;
        $.each($(".page"),
        function(N, O) {
            if (N < I - 1) {
                $(O).find(" .TabSummary").remove()
            }
        });
        I = $(".page .pageInfoDiv").length;
        $.each($(".page .pageInfoDiv"),
        function(N, P) {
            var O = (N + 1) + "/" + I;
            $(P).html(O)
        })
    }
}
function Micro_SplitPage_ByType(A, F, N) {
    var H = 1;
    var M = $(".PageBody table").find(".TabBody").length;
    if (F <= 0) {
        F = 1090
    }
    var O = F - $(".PageHeader").height() - $(".PageFooter").height() - $(".TabHeader").height() - $(".TabFooter").height();
    if (M > 0) {
        var G = 1;
        var B = 0;
        var J = $(".page").clone();
        var C = 0;
        var D = 0;
        var K = N.split(",");
        var L = "",
        E = "";
        var I = false;
        $.each($(".PageBody table").find(".TabBody"),
        function(Q, S) {
            L = "";
            $.each(K,
            function(X, W) {
                L += "@" + $("td:eq(" + W + ")", S).html()
            });
            if (L != E && Q > 0) {
                I = true
            } else {
                I = false
            }
            E = L;
            var R = $(S).height();
            if (((B + R) >= O) || (Q == M - 1) || (I)) {
                if (Q == M - 1 && (B + R) <= O) {
                    D = Q
                } else {
                    D = Q - 1
                }
                var U = false;
                if (Q == M - 1 && (B + R) > O) {
                    U = true
                }
                var T = G + "/" + H;
                var V = J.clone();
                V.find(".PageBody").find(".TabBody:lt(" + (C) + ")").remove();
                V.find(".PageBody").find(".TabBody:gt(" + (D - C) + ")").remove();
                V.find(".pageInfoDiv").html(T);
                $("#printarea").append(V);
                var P = V.find(".PageBody").find("table");
                C = Q;
                G++;
                B = R;
                if (U) {
                    D = Q;
                    var T = G + "/" + H;
                    var V = J.clone();
                    V.find(".PageBody").find(".TabBody:lt(" + C + ")").remove();
                    V.find(".PageBody").find(".TabBody:gt(" + (D - C) + ")").remove();
                    V.find(".pageInfoDiv").html(T);
                    $("#printarea").append(V);
                    var P = V.find(".PageBody").find("table")
                }
            } else {
                B = B + R
            }
        });
        $(".page").eq(0).remove();
        H = $(".page .pageInfoDiv").length;
        $.each($(".page .pageInfoDiv"),
        function(P, R) {
            var Q = (P + 1) + "/" + H;
            $(R).html(Q)
        })
    }
}
function Micro_Print_Subtotal(B, D, I) {
    var A = D.split(",");
    if (A.length <= 0) {
        return
    }
    var G = I.split(",");
    var A = D.split(",");
    var J = [];
    var H = "",
    F = "";
    var C;
    var E = false;
    $.each(A,
    function(L, K) {
        J[L] = 0
    });
    $.each($("#" + B).find(".TabBody"),
    function(K, L) {
        H = "";
        $.each(G,
        function(O, N) {
            H += "@" + $("td:eq(" + N + ")", L).html()
        });
        if (H != F && K > 0) {
            E = true
        } else {
            E = false
        }
        F = H;
        if (E) {
            var M = $(C).clone();
            $.each(A,
            function(O, N) {
                $("td:eq(" + N + ")", M).html(J[O]);
                $("td:eq(" + N + ")", M).css("font-weight", "bold");
                $("td:eq(" + N + ")", M).addClass("subtotal")
            });
            $.each(G,
            function(O, N) {
                $("td:eq(" + N + ")", M).css("font-weight", "bold");
                $("td:eq(" + N + ")", M).addClass("subtotal");
                var P = $("td:eq(" + N + ")", M).html();
                P = "[ " + P + " ]";
                $("td:eq(" + N + ")", M).html(P)
            });
            $("td", M).not(".subtotal").html("");
            M.insertBefore(L);
            $.each(A,
            function(O, N) {
                J[O] = parseFloat($("td:eq(" + N + ")", L).html())
            })
        } else {
            $.each(A,
            function(O, N) {
                J[O] += parseFloat($("td:eq(" + N + ")", L).html())
            })
        }
        $.each(J,
        function(O, N) {
            J[O] = J[O].toFixed(4)
        });
        C = L
    })
}
function Micro_ToExcel(D, E, N, L, M) {
    var B = "";
    var O = "";
    var H = $("#" + E).datagrid("options");
    $.each(H.columns[0],
    function(P, Q) {
        if (H.columns[0][P].field != "ck") {
            if (H.columns[0][P].hidden == undefined || H.columns[0][P].hidden == false) {
                B += H.columns[0][P].title + ",";
                O += H.columns[0][P].field + ","
            }
        }
    });
    B = B.substr(0, B.length - 1);
    O = O.substr(0, O.length - 1);
    $.messager.progress({
        title: "正在导出excel",
        msg: "正在导出excel中..."
    });
    var I = $("#" + E).datagrid("options").queryParams;
    var F = I["whereStr"];
    if (isEmptyOrNull(F)) {
        F = " 1 = 1 "
    } else {
        if (F.indexOf("1 = 0") >= 0) {
            F = replaceAll(F, "1 = 0", "1 = 1")
        } else {
            if (F.indexOf("1=0") >= 0) {
                F = replaceAll(F, "1=0", "1 = 1")
            } else {
                if (F.indexOf("单号 = ''") >= 0) {
                    F = replaceAll(F, "单号 = ''", "1 = 1")
                }
            }
        }
    }
    if (D == "V_AL_PROJECT_BJEDIT") {
        var A = $("#" + D + "_SDATE").datebox("getValue");
        var G = $("#" + D + "_EDATE").datebox("getValue");
        F += " and 二审日期 between '" + A + " 00:00:00' and '" + G + " 23:59:59' "
    } else {
        if ($("#" + D + "_DATETYPE").length > 0) {
            var K = $("#" + D + "_DATETYPE").combobox("getValue");
            if (F.indexOf(K) < 0) {
                if ($("#" + D + "_SDATE").length > 0 && $("#" + D + "_EDATE").length > 0) {
                    var A = $("#" + D + "_SDATE").datebox("getValue");
                    var G = $("#" + D + "_EDATE").datebox("getValue");
                    F += " and " + K + " between '" + A + " 00:00:00' and '" + G + " 23:59:59' "
                }
            }
        } else {
            if ($.inArray("单据日期", B) >= 0) {
                if (F.indexOf("单据日期") < 0) {
                    if ($("#" + D + "_SDATE").length > 0 && $("#" + D + "_EDATE").length > 0) {
                        var A = $("#" + D + "_SDATE").datebox("getValue");
                        var G = $("#" + D + "_EDATE").datebox("getValue");
                        F += " and 单据日期 between '" + A + " 00:00:00' and '" + G + " 23:59:59' "
                    }
                }
            }
        }
    }
    var C = $("#" + E).parent().find(".datagrid-view2 .datagrid-ftable");
    var J = [];
    if (C.length > 0) {
        $.each(C.find("tr:first").find("td"),
        function() {
            var P = $(this).find("label").parent().is(":hidden") || $(this).find("label").parent().css("visibility") == "hidden" || $(this).is(":hidden");
            var Q = $(this).find("label").text();
            if (!P) {
                J.push(Q)
            }
        });
        $.extend(I, {
            action: "toExcel",
            colstr: O,
            colNameStr: B,
            whereStr: F,
            type: M,
            totalFields: J.join(",")
        })
    } else {
        $.extend(I, {
            action: "toExcel",
            colstr: O,
            colNameStr: B,
            whereStr: F,
            type: M
        })
    }
    if (!isEmptyOrNull(L)) {
        $.extend(I, L)
    }
    $.ajax({
        url: N,
        data: $("#" + E).datagrid("options").queryParams,
        type: "POST",
        dataType: "text",
        success: function(Q) {
            if (mPublicUseOperHistory == 1) {
                var P = "导出";
                Micro_AddOperHistory([{
                    companyId: mCompanyId,
                    OperUserid: mCurUserId,
                    AddTime: "$录入时间$",
                    UIName: $("#mainTab").tabs("getSelected").panel("options").title,
                    TabelName: D,
                    OperName: P,
                    OperDetail: $("#mainTab").tabs("getSelected").panel("options").title + P
                }])
            }
            $.messager.progress("close");
            window.location = Q
        },
        error: function(P) {
            $.messager.progress("close");
            alert("导出错误！\nstatus：" + P.status + "\nresponseText：" + P.responseText)
        }
    })
}
function Micro_Dynamic_POST(B, E) {
    var C = document.createElement("form");
    C.action = B;
    C.target = "_blank";
    C.method = "post";
    C.style.display = "none";
    for (var D in E) {
        var A = document.createElement("textarea");
        A.name = D;
        A.value = E[D];
        C.appendChild(A)
    }
    document.body.appendChild(C);
    C.submit();
    document.body.removeChild(C)
}
function Micro_ReplaceConstValue(F, B, D) {
    var E, G;
    var J = 0,
    C = 0;
    var I;
    if (isEmptyOrNull(F)) {
        return F
    }
    if (!isNaN(F)) {
        return F
    }
    if (F.indexOf('"') < 0) {
        return F
    }
    for (i = 0; i < F.length; i++) {
        if (F.substr(i, 1) == "'" || F.substr(i, 1) == '"') {
            G = F.substr(i, 1);
            if (isEmptyOrNull(E)) {
                E = G;
                J = i;
                continue
            } else {
                if (E == G) {
                    C = i;
                    I = false;
                    for (j = 0; j < B.length; j++) {
                        if (B[j].data == F.substr(J, C - J + 1)) {
                            I = true
                        }
                    }
                    if (!I) {
                        var A = MicroDraw_newConstTag(J, C, D);
                        var H = {
                            startIdx: J,
                            endIdx: C,
                            index: A,
                            data: F.substr(J, C - J + 1)
                        };
                        B.push(H)
                    }
                    E = "";
                    G = "";
                    J = 0;
                    C = 0
                }
            }
        }
    }
    if (E && E.length > 0) {
        jQuery.messager.alert("提示:", "选项内容公式包含非法字符串", "info");
        return
    }
    $.each(B,
    function(L, K) {
        F = replaceAll(F, K.data, K.index)
    });
    return F
}
$.extend($.fn.linkbutton.methods, {
    enable: function(A) {
        return A.each(function() {
            var E = $.data(this, "linkbutton");
            if ($(this).hasClass("l-btn-disabled")) {
                var C;
                try {
                    C = E._eventsStore
                } catch(B) {}
                if (C.href) {
                    $(this).attr("href", C.href)
                }
                if (C.onclicks) {
                    for (var D = 0; D < C.onclicks.length; D++) {
                        $(this).bind("click", C.onclicks[D])
                    }
                }
                C.target = null;
                C.onclicks = [];
                $(this).removeClass("l-btn-disabled")
            }
        })
    },
    disable: function(A) {
        return A.each(function() {
            var H = $.data(this, "linkbutton");
            if (H == undefined) {
                return
            }
            if (!H._eventsStore) {
                H._eventsStore = {}
            }
            if (!$(this).hasClass("l-btn-disabled")) {
                var E = {};
                E.target = this;
                E.onclicks = [];
                var D = $(this).attr("href");
                if (D) {
                    E.href = D;
                    $(this).attr("href", "javascript:void(0)")
                }
                var B = $(this).attr("onclick");
                if (B && B != "") {
                    E.onclicks[E.onclicks.length] = new Function(B);
                    $(this).attr("onclick", "")
                }
                var G = $(this).data("events") || $._data(this, "events");
                if (G["click"]) {
                    var F = G["click"];
                    for (var C = 0; C < F.length; C++) {
                        if (F[C].namespace != "menu") {
                            E.onclicks[E.onclicks.length] = F[C]["handler"];
                            $(this).unbind("click", F[C]["handler"]);
                            C--
                        }
                    }
                }
                H._eventsStore = E;
                $(this).addClass("l-btn-disabled")
            }
        })
    }
});
$.extend($.fn.menu.methods, {
    enableItem: function(A, B) {
        return A.each(function() {
            var C = $(B);
            var D = $.data(this, "menu");
            if (C.length > 0) {
                C.each(function() {
                    if ($(this).hasClass("menu-item-disabled")) {
                        for (var E = 0; E < D._eventsStore.length; E++) {
                            var F = D._eventsStore[E];
                            if (F.target == this) {
                                if (F.href) {
                                    $(this).attr("href", F.href)
                                }
                                if (F.onclicks) {
                                    for (var G = 0; G < F.onclicks.length; G++) {
                                        $(this).bind("click", F.onclicks[G])
                                    }
                                }
                                F.target = null;
                                F.onclicks = [];
                                $(this).removeClass("menu-item-disabled")
                            }
                        }
                    }
                })
            }
        })
    },
    disableItem: function(A, B) {
        return A.each(function() {
            var C = $(B);
            var D = $.data(this, "menu");
            if (D == undefined) {
                return
            }
            if (C.length > 0) {
                if (!D._eventsStore) {
                    D._eventsStore = []
                }
                C.each(function() {
                    if (!$(this).hasClass("menu-item-disabled")) {
                        var J = {};
                        J.target = this;
                        J.onclicks = [];
                        var L = $(this).attr("href");
                        if (L) {
                            J.href = L;
                            $(this).attr("href", "javascript:void(0)")
                        }
                        var M = $(this).attr("onclick");
                        if (M && M != "") {
                            J.onclicks[J.onclicks.length] = new Function(M);
                            $(this).attr("onclick", "")
                        }
                        var E = $(this).data("events") || $._data(this, "events");
                        if (E["click"]) {
                            var G = E["click"];
                            for (var I = 0; I < G.length; I++) {
                                if (G[I].namespace != "menu") {
                                    J.onclicks[J.onclicks.length] = G[I]["handler"];
                                    $(this).unbind("click", G[I]["handler"]);
                                    I--
                                }
                            }
                        }
                        var K = false;
                        for (var H = 0; H < D._eventsStore.length; H++) {
                            var F = D._eventsStore[H];
                            if (F.target == null) {
                                K = true;
                                D._eventsStore[H] = J
                            }
                        }
                        if (K == false) {
                            D._eventsStore[D._eventsStore.length] = J
                        }
                        $(this).addClass("menu-item-disabled")
                    }
                })
            }
        })
    }
});
function Micro_datagridDoSearch(C, E, A, B) {
    B.combogrid("grid").datagrid("loadData", []);
    if (C == "") {
        B.combogrid("grid").datagrid("loadData", E);
        return
    }
    var D = [];
    $.each(E,
    function(F, G) {
        for (var H in A) {
            var I = G[A[H]];
            if ( !! I && I.toString().indexOf(C) >= 0) {
                D.push(G);
                break
            }
        }
    });
    if (D.length == 0) {
        B.combogrid("grid").datagrid("loadData", []);
        return
    }
    B.combogrid("grid").datagrid("loadData", D);
    if (D.length == 1) {
        B.combogrid("grid").datagrid("selectRow", 0)
    }
}
function MD_AddBrandColumn(B, E) {
    $("#" + E + "_AREA").append('<input id="' + E + '" class="easyui-combobox" style="width:100px;">');
    if (mPublicBrandsList && mPublicBrandsList.length > 0) {
        var C = {
            field: "品牌",
            title: "品牌",
            width: 80,
            align: "center",
            sortable: true,
            type: "CHAR"
        };
        B.push(C);
        var A = [];
        A.push({
            id: "",
            name: "全部品牌"
        });
        for (var D = 0; D < mPublicBrandsList.length; D++) {
            A.push({
                id: mPublicBrandsList[D],
                name: mPublicBrandsList[D]
            })
        }
        $("#" + E).combobox({
            data: A,
            valueField: "id",
            textField: "name",
            editable: false
        });
        $("#" + E + "_AREA").show()
    } else {
        $("#" + E + "_AREA").hide()
    }
}
function Micro_ChangePrintBrand(B) {
    var C = function() {
        var D = $("[name=PrintBrandName]:first");
        var I = $("[name=companyLogo]");
        var H = $("[name=PrintTitle]");
        if (mPublicBrandsList && mPublicBrandsList.length > 0 && D.length > 0) {
            if (!B) {
                B = {
                    filetype: "jpg"
                }
            }
            var F = B.filetype;
            var E = D.val();
            var G = $("#PrintCompanyName").val();
            if (E != "" && !$.Micro.IsEmpty(G)) {
                $.each(H,
                function() {
                    var J = $(this).html();
                    J = replaceAll(J, G, E);
                    $(this).html(J)
                });
                $.each(I,
                function() {
                    var J = $(this).attr("src");
                    J = replaceAll(J, "." + F, "_" + E + "." + F);
                    $(this).attr("src", J)
                })
            }
        }
    };
    var A = {};
    A.action = "getBrands";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: A,
        type: "POST",
        dataType: "json",
        success: function(D) {
            var H = [];
            if (D) {
                for (var G = 0; G < D.length; G++) {
                    var F = D[G].Brand.split(",");
                    for (var E = 0; E < F.length; E++) {
                        if (!$.Micro.isInArray(F[E], H)) {
                            H.push(F[E])
                        }
                    }
                }
            }
            mPublicBrandsList = H;
            C()
        }
    })
}
function Micro_ioskeyboard(G, C) {
    try {
        if (G.length == 0) {
            return true
        }
        if ($.Micro.IsEmpty(C)) {
            C = 0
        }
        if ($.Micro.IsEmpty($("#MicroViewPort").attr("content"))) {
            return
        }
        var F = $("#MicroViewPort").attr("content").split(",");
        var E = 1;
        if (F.length > 0) {
            E = F[0].split("=")[1]
        }
        var H = $.Micro.getBrowser_OS();
        var D = H.mwidth;
        var B;
        if (D >= 768) {
            B = {
                keyboardRadix: 72
            }
        } else {
            if (D < 768 && D >= 480) {
                B = {
                    keyboardRadix: 70
                }
            } else {
                B = {
                    keyboardRadix: 60
                };
                return true
            }
        }
        G.trigger("blur");
        G.attr("readonly", "readonly");
        G.ioskeyboard(B);
        if (C == 1) {
            G.trigger("focus")
        }
    } catch(A) {
        console.log(A.name + ":" + A.message)
    }
}
function Micro_DownChromeTips() {
    var B = false;
    var G = $.Micro.getBrowser_OS();
    var H = G.mtype;
    var C = G.broType;
    var E = "mDialog_DownChromeTips";
    var D = "../MicroLogin/DownChromeTips.html?=mtype" + H + "&broType=" + C;
    var F, A;
    if (H == "PC") {
        F = 510;
        A = 356;
        if (C != "Chrome") {
            B = true
        }
    } else {
        F = 356;
        A = 260;
        if (C != "Chrome") {
            B = true
        } else {
            if (H == "ucbrowser") {
                B = true
            }
        }
    }
    if (B) {
        $("<div></div>").dialog({
            id: E,
            title: "谷歌浏览器下载提示...",
            href: D,
            height: A,
            width: F,
            iconCls: "icon-mlogin",
            modal: true,
            buttons: [{
                text: "确定",
                iconCls: "icon-add",
                handler: function() {
                    $("#" + E).dialog("destroy")
                }
            }],
            onClose: function() {
                $("#" + E).dialog("destroy")
            },
            onLoad: function() {}
        });
        if (document.activeElement) {
            $(document.activeElement).trigger("blur")
        }
    }
}
function Micro_Add_MobileDrawTools(C, B, D) {
    var E = $.Micro.getBrowser_OS();
    var A = E.mtype;
    if (A == "PC") {
        return true
    }
    if ($.Micro.IsEmpty(D)) {
        D = "工具栏"
    }
    $("#" + B).window({
        modal: false,
        width: 142,
        height: 630,
        top: 3,
        left: $(window).width() - 180,
        closable: false,
        collapsible: true,
        minimizable: false,
        maximizable: false,
        resizable: false,
        inline: true,
        title: D
    });
    C.appendTo($("#" + B));
    C.find("a").addClass("toolsBT")
}
function Micro_AutoLogin() {
    var B = mCurUserId;
    var A = mCurUserPwd;
    $.ajax({
        type: "POST",
        dataType: "JSON",
        url: "../MicroLogin/login.ashx?action=Login&loginAction=" + mPublicLoginStyle,
        data: {
            loginid: B,
            pwd: A
        },
        success: function(C) {
            if (C[0].Status == "1") {} else {
                if (C[0].Status == "outDate") {
                    payMoney(B)
                } else {
                    $.messager.alert("错误", "账号或密码错误!", "error")
                }
            }
        },
        error: function() {
            $.messager.alert("错误", "调用失败!", "error")
        }
    })
}
function Micro_checkExpExistsChineseChar(A) {
    var B = /[\uff1f|\uff01|\uff0c|\uff1a|\uff08|\uff09|\u201c|\u201d|\u2018|\u2019]/;
    if (B.test(A)) {
        return A + " <br/><br/>存在中文标点符号！"
    } else {
        return ""
    }
}
function Micro_setMoneyDisplay(A) {
    if (!mBxdMoney) {
        var C = $("#" + A).datagrid("getColumnFields");
        for (var B = 0; B < C.length; B++) {
            if (!isEmptyOrNull(C[B]) && (C[B].toLowerCase().indexOf("money") >= 0 || C[B].toLowerCase().indexOf("price") >= 0 || C[B].toLowerCase().indexOf("单价") >= 0 || C[B].toLowerCase().indexOf("金额") >= 0)) {
                $("#" + A).datagrid("hideColumn", C[B])
            }
        }
    }
}
function Micro_DataGridFocusSelect(B, C, D) {
    var A = $("#" + B).datagrid("getEditor", {
        index: C,
        field: D
    });
    if (A) {
        switch (A.type) {
        case "textbox":
            $(A.target).textbox("textbox").focus();
            $(A.target).textbox("textbox").select();
            break;
        case "text":
            $(A.target).textbox("textbox").focus();
            $(A.target).textbox("textbox").select();
            break;
        case "combobox":
            $(A.target).combobox("textbox").focus();
            $(A.target).combobox("textbox").select();
            break;
        case "combogrid":
            $(A.target).combogrid("textbox").focus();
            $(A.target).combogrid("textbox").select();
            break;
        case "datebox":
            $(A.target).datebox("textbox").focus();
            $(A.target).datebox("textbox").select();
            break;
        case "datetimebox":
            $(A.target).datetimebox("textbox").focus();
            $(A.target).datetimebox("textbox").select();
            break;
        case "numberbox":
            $(A.target).numberbox("textbox").focus();
            $(A.target).numberbox("textbox").select();
            break;
        default:
            $(A.target).focus();
            $(A.target).select();
            break
        }
    }
}
function Micro_DelDatagridData(A, C) {
    if (A.length > 0) {
        if (C == "datagrid") {
            var D = A.datagrid("getRows");
            for (var B = D.length - 1; B >= 0; B--) {
                idx = A.datagrid("getRowIndex", D[B]);
                A.datagrid("deleteRow", idx)
            }
        } else {
            if (C == "propertygrid") {
                var D = A.propertygrid("getRows");
                for (var B = D.length - 1; B >= 0; B--) {
                    idx = A.propertygrid("getRowIndex", D[B]);
                    A.propertygrid("deleteRow", idx)
                }
            }
        }
    }
}
function Micro_EndEditDatagrid(A, B) {
    if (A.length > 0) {
        if (B == "datagrid") {
            var C = A.datagrid("getRows");
            $.each(C,
            function(D, E) {
                var F = A.datagrid("getRowIndex", E);
                A.datagrid("endEdit", F)
            });
            var C = A.datagrid("getRows");
            $.each(C,
            function(D, E) {
                var F = A.datagrid("getRowIndex", E);
                var G = A.datagrid("validateRow", F);
                if (G) {
                    A.datagrid("endEdit", F)
                } else {
                    A.datagrid("cancelEdit", F)
                }
            })
        } else {
            if (B == "propertygrid") {
                var C = A.propertygrid("getRows");
                $.each(C,
                function(D, E) {
                    var F = A.propertygrid("getRowIndex", E);
                    A.propertygrid("endEdit", F)
                });
                $.each(C,
                function(D, E) {
                    var F = A.propertygrid("getRowIndex", E);
                    var G = A.propertygrid("validateRow", F);
                    if (G) {
                        A.propertygrid("endEdit", F)
                    } else {
                        A.propertygrid("cancelEdit", F)
                    }
                })
            }
        }
    }
}
function diff(D, E) {
    var F = [];
    var G = [];
    for (var B = 0; B < D.length; B++) {
        if (E.indexOf(D[B]) === -1) {
            G.push(D[B])
        }
    }
    var A = [];
    for (var C = 0; C < E.length; C++) {
        if (D.indexOf(E[C]) === -1) {
            A.push(E[C])
        }
    }
    F = G.concat(A);
    return F
}
function Micro_CheckUploadFile(target, uploadBT, filetypes, filemaxsize) {
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    var fileSize = 0;
    var filepath = target.value;
    if ($.Micro.IsEmpty(filepath)) {
        filepath = $(target).filebox("getValue")
    }
    if ($.Micro.IsEmpty(filetypes)) {
        filetypes = [".jpg"]
    }
    if ($.Micro.IsEmpty(filemaxsize)) {
        filemaxsize = 512
    } else {
        if (isNaN(filemaxsize)) {
            filemaxsize = 512
        } else {
            if (filemaxsize <= 0) {
                filemaxsize = 512
            }
        }
    }
    var changeUploadBT = function(check) {
        with(uploadBT) {
            if (length > 0) {
                if (hasClass("easyui-linkbutton")) {
                    if (check) {
                        linkbutton("enable")
                    } else {
                        linkbutton("disable")
                    }
                }
            }
        }
    };
    if (filepath) {
        var isnext = false;
        var fileend = filepath.substring(filepath.lastIndexOf("."));
        if (filetypes && filetypes.length > 0) {
            for (var i = 0; i < filetypes.length; i++) {
                if (filetypes[i] == fileend) {
                    isnext = true;
                    break
                }
            }
        }
        if (!isnext) {
            $.messager.alert("提示:", "不接受此文件类型！", "info");
            target.value = "";
            changeUploadBT(false);
            return false
        }
    } else {
        changeUploadBT(false);
        return false
    }
    changeUploadBT(true)
}
function Micro_getItemDefaultHiddenCols(E, D) {
    var A = [{
        "colName": "FromProjectNum",
        "defaultValue": fromProjectGetID("--", E)
    },
    {
        "colName": "ToProjectNum",
        "defaultValue": fromProjectGetID("--", E)
    },
    {
        "colName": "SuppId",
        "defaultValue": fromSupplierGetID("--", E)
    },
    {
        "colName": "SupId",
        "defaultValue": fromSupplierGetID("--", E)
    },
    {
        "colName": "assistCnt",
        "defaultValue": 0
    },
    {
        "colName": "assistPrice",
        "defaultValue": 0
    },
    {
        "colName": "yclPrice",
        "defaultValue": 0
    },
    {
        "colName": "工程",
        "defaultValue": fromProjectGetID("--", E)
    },
    {
        "colName": "从工程",
        "defaultValue": fromProjectGetID("--", E)
    },
    {
        "colName": "到工程",
        "defaultValue": fromProjectGetID("--", E)
    },
    {
        "colName": "供应商",
        "defaultValue": fromSupplierGetID("--", E)
    },
    {
        "colName": "供应商1",
        "defaultValue": fromSupplierGetID("--", E)
    },
    {
        "colName": "供应商编码",
        "defaultValue": fromSupplierGetID("--", E)
    },
    ];
    if ($.inArray(D, ["AL_YS_YS"]) == -1) {
        A.push({
            "colName": "ProjectNum",
            "defaultValue": fromProjectGetID("--", E)
        })
    }
    if ((D && D.indexOf("_PR") > -1) || (D && D.indexOf("_WJ") > -1)) {
        A.push({
            "colName": "scnum",
            "defaultValue": ""
        });
        A.push({
            "colName": "生产单号",
            "defaultValue": ""
        });
        A.push({
            "colName": "辅助数量",
            "defaultValue": ""
        });
        A.push({
            "colName": "辅助单价",
            "defaultValue": ""
        })
    }
    var B = [];
    for (var C = 0; C < A.length; C++) {
        B.push(A[C]["colName"])
    }
    return {
        infor: A,
        cols: B
    }
}
var WEB_BUDGET_SUBMIT_PRINTWIN = function(turl, datas) {
    if ($.Micro.IsEmpty(turl)) {
        return
    }
    var tForm = $("<form></form>");
    $("body").append(tForm);
    tForm.hide();
    var tNumxs = $('<input name="Numxs" />');
    tForm.append(tNumxs);
    var Numxs = "";
    if ($("#DrawOrder_DG_DETAIL").length > 0) {
        var checkRows = $("#DrawOrder_DG_DETAIL").datagrid("getChecked");
        $.each(checkRows,
        function(i, row) {
            Numxs += "'" + row["流水号明细"] + "',"
        });
        Numxs = Numxs.substring(0, Numxs.length - 1);
        tNumxs.val(Numxs)
    } else {
        if ($("#AL_PROJECT_DG_DETAIL").length > 0) {
            var checkRows = $("#AL_PROJECT_DG_DETAIL").datagrid("getChecked");
            $.each(checkRows,
            function(i, row) {
                Numxs += "'" + row["Numx"] + "',"
            });
            Numxs = Numxs.substring(0, Numxs.length - 1);
            tNumxs.val(Numxs)
        } else {
            if ($("input[name=mDrawDetailCheck]").length > 0) {
                $.each($("input[name=mDrawDetailCheck]:checked"),
                function() {
                    Numxs += "'" + $(this).attr("numx") + "',"
                });
                Numxs = Numxs.substring(0, Numxs.length - 1);
                tNumxs.val(Numxs)
            } else {
                if ($("#DrawBudget_DG_DETAIL").length > 0) {
                    var checkRows = $("#DrawBudget_DG_DETAIL").datagrid("getChecked");
                    $.each(checkRows,
                    function(i, row) {
                        Numxs += "'" + row["流水号明细"] + "',"
                    });
                    Numxs = Numxs.substring(0, Numxs.length - 1);
                    tNumxs.val(Numxs)
                }
            }
        }
    }
    if (datas) {
        for (var o in datas) {
            var _input = $('<input name="' + datas[o].name + '" />');
            tForm.append(_input);
            _input.val(datas[o].value)
        }
    }
    with(tForm[0]) {
        action = turl;
        method = "post";
        target = "_blank";
        submit()
    }
    tForm.remove()
};
function transferColor(C) {
    var B = $("#" + C).datagrid("getRows");
    if (B.length < 1) {
        return
    }
    var G = [];
    if (!mPublicColorList) {
        $.messager.alert("提示:", "颜色资料加载未完成，请关闭页面等下再试！", "error");
        return
    }
    for (var F = 0; F < mPublicColorList.length; F++) {
        if (mPublicColorList[F].name.indexOf("烤漆") >= 0) {
            G.push(mPublicColorList[F])
        }
    }
    for (var F = 0; F < B.length; F++) {
        var D = B[F].color;
        if (isEmptyOrNull(D)) {
            continue
        }
        if (D.indexOf("烤漆") < 0) {
            continue
        }
        for (var E = 0; E < G.length; E++) {
            if (D == G[E].name) {
                var H = G[E].AColorName;
                var A = G[E].BColorName;
                if (D.indexOf("烤漆") >= 0 && isEmptyOrNull(A)) {
                    $("#" + C).datagrid("updateRow", {
                        index: F,
                        row: {
                            color: "杂色"
                        }
                    })
                } else {
                    if (!isEmptyOrNull(A) && H.indexOf("烤漆") >= 0 && A.indexOf("烤漆") >= 0) {
                        $("#" + C).datagrid("updateRow", {
                            index: F,
                            row: {
                                color: "杂色"
                            }
                        })
                    } else {
                        if (!isEmptyOrNull(A) && H.indexOf("烤漆") >= 0 && A.indexOf("烤漆") < 0) {
                            $("#" + C).datagrid("updateRow", {
                                index: F,
                                row: {
                                    color: A
                                }
                            })
                        } else {
                            if (H.indexOf("烤漆") < 0 && A.indexOf("烤漆") >= 0) {
                                $("#" + C).datagrid("updateRow", {
                                    index: F,
                                    row: {
                                        color: H
                                    }
                                })
                            }
                        }
                    }
                }
            }
        }
    }
}
function MD_InitToolbar_Other(A) {
    if (A == "V_AL_PC_STORE_ANALYSE" || A == "AL_PROJECT_BJEDIT") {
        return
    }
    var B = $("#" + A + "_DG_TOOLBAR a");
    $.each(B,
    function(D, E) {
        $(E).attr("m_power", "false")
    });
    var C = Micro_getToolBarPower(A, true);
    $.each(B,
    function(D, E) {
        $.each(C,
        function(F, G) {
            if ($.trim($(E).text()) == G.name) {
                $(E).attr("m_power", "true")
            }
        })
    });
    $.each(B,
    function(D, E) {
        if (! ($(E).attr("m_power") == "true")) {
            $(E).hide()
        }
    })
}
function Micro_getEasyUITabURL(E, F) {
    if (E.length == 0) {
        return true
    }
    var D = E.tabs("getSelected");
    var C = D.panel("options");
    var B = C.href;
    var A = "";
    if (!$.Micro.IsEmpty(F)) {
        A = $.Micro.getQueryStr(F, C.href)
    }
    return {
        url: B,
        parmVal: A
    }
}
function Micro_getToolBarPower(D, E, A) {
    if ($.Micro.IsEmpty(E)) {
        E = true
    }
    if (isEmptyOrNull(A)) {
        A = mPublicUserAllPowerList
    }
    var B = [];
    var C = {};
    if (E) {
        if (isEmptyOrNull(A)) {
            return B
        }
        $.each(A,
        function(F, G) {
            if (G.parent == D && G.isPower == 1) {
                B[B.length] = G
            }
        });
        return B
    } else {
        if (isEmptyOrNull(A)) {
            return C
        }
        $.each(A,
        function(F, G) {
            if (G.id == D && G.isPower == 1) {
                C = G;
                return false
            }
        });
        return C
    }
}
Function.prototype.getName = function() {
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
};
function Micro_triggerDgOnChange(C, A, J) {
    var D = false;
    var B = $("#" + C).datagrid("getEditor", {
        index: A,
        field: J
    });
    var H = B.target;
    var F;
    var E;
    switch (B.type) {
    case "textbox":
        F = B.target.textbox("options").onChange.toString();
        E = B.target.textbox("textbox").val();
        break;
    case "validatebox":
        F = B.target.validatebox("options").onChange.toString();
        E = B.target.val();
        break;
    case "text":
        F = B.target.textbox("options").onChange.toString();
        E = B.target.textbox("textbox").val();
        break;
    case "combobox":
        F = B.target.combobox("options").onChange.toString();
        E = B.target.combobox("textbox").val();
        break;
    case "combogrid":
        F = B.target.combogrid("options").onChange.toString();
        E = B.target.combogrid("textbox").val();
        break;
    case "datebox":
        F = B.target.datebox("options").onChange.toString();
        E = B.target.datebox("textbox").val();
        break;
    case "datetimebox":
        F = B.target.datetimebox("options").onChange.toString();
        E = B.target.datetimebox("textbox").val();
        break;
    case "numberbox":
        F = B.target.numberbox("options").onChange.toString();
        E = B.target.numberbox("textbox").val();
        break;
    default:
        break
    }
    if (F.indexOf("{\n}") >= 0) {
        D = false
    } else {
        D = true
    }
    if (D) {
        var I = {};
        I[J] = E;
        var B = $("#" + C).datagrid("getEditor", {
            index: A,
            field: J
        });
        var H = B.target;
        switch (B.type) {
        case "textbox":
            $(H).textbox("setValue", E);
            break;
        case "validatebox":
            $(H).validatebox("setValue", E);
            break;
        case "text":
            $(H).textbox("setValue", E);
            break;
        case "combobox":
            $(H).combobox("setValue", E);
            break;
        case "combogrid":
            $(H).combogrid("setValue", E);
            break;
        case "datebox":
            $(H).datebox("setValue", E);
            break;
        case "datetimebox":
            $(H).datetimebox("setValue", E);
            break;
        case "numberbox":
            $(H).numberbox("setValue", E);
            break;
        default:
            break
        }
        var G = $("#" + C).datagrid("getColumnOption", J);
        if (!isEmptyOrNull(G.editor.options.onChange)) {
            G.editor.options.onChange.call(H, E, "")
        }
    }
}
function Micro_DG_EnterEvent(A, B) {
    $(".datagrid-editable .textbox,.datagrid-editable .datagrid-editable-input,.datagrid-editable .textbox-text").bind("keydown",
    function(C) {
        var D = C.keyCode || C.which;
        if (D == 13) {
            A.datagrid("acceptChanges");
            A.datagrid("endEdit", B)
        }
    })
}
function Micro_triggerDgOnClickCell(D, B, A) {
    var C = $("#" + D).datagrid("options");
    if (!isEmptyOrNull(C.onClickCell)) {
        C.onClickCell.call($("#" + D), B, A, "")
    }
}
function Micro_AddOperHistory(A) {
    if (mPublicUseOperHistory != 1) {
        return true
    }
    if (!$.isArray(A)) {
        return true
    }
    if (A.length == 0) {
        return true
    }
    var B = {};
    B["action"] = "add";
    B["logsAdd"] = JSON.stringify(A);
    $.ajax({
        async: true,
        url: "../MicroSys/CC_SYS_OPERHISTORY.ashx",
        data: B,
        type: "POST",
        dataType: "text",
        success: function(C) {
            if (C.substr(0, 2) == "ok") {} else {
                console.clear();
                console.log(C)
            }
        },
        error: function(C) {
            console.clear();
            console.log(C)
        }
    })
}
function Micro_ModifyEditorDetail(L, A, D) {
    var F = [];
    var E = [];
    if (L && L.length > 0) {
        var H;
        if (D && $.isPlainObject(D)) {
            H = D["encryptPW"]
        }
        var J = L.find("[class*='datagrid-view']:last");
        if (J.length > 0) {
            var G = J.find("table[class='datagrid-htable']");
            var C = J.find("table[class='datagrid-btable']");
            $.each(C.find("tr"),
            function() {
                var M = "";
                E = [];
                $.each($(this).find("td[field!='ck']"),
                function() {
                    var N = $(this);
                    var O = N.attr("field");
                    var P = G.find("td[field='" + O + "']").text();
                    if (A == O) {
                        M = N.text()
                    }
                    E.push({
                        id: O,
                        value: N.text(),
                        text: P
                    })
                });
                F.push({
                    key: M,
                    data: E
                })
            })
        } else {
            var B = L.find("input[type!=hidden][name!='checkbox'],textarea");
            var K = "";
            var I;
            if (L[0].tagName == "FORM") {
                I = L.serializeJSON()
            }
            $.each(B,
            function() {
                var b = $(this);
                var Z = b.attr("readonly");
                var O = String(b.attr("disabled"));
                var T = b.attr("name");
                var R = b.attr("id");
                var V = !$.Micro.IsEmpty(T) ? "name": "id";
                var X = b.val();
                if (H == 1) {
                    if ((R == "CC_SYS_USER_c_pwd")) {
                        X = dencrypt(X)
                    }
                }
                X = String(X);
                if ((!$.Micro.IsEmpty(R) || !$.Micro.IsEmpty(T)) && b.is(":visible")) {
                    try {
                        if (b.attr("type") == "radio") {
                            if (I) {
                                X = I[b.attr(V)]
                            } else {
                                return true
                            }
                            var P = b.attr("checked");
                            if ($.Micro.IsEmpty(P)) {
                                return true
                            }
                        }
                        var Y = "";
                        var W = b.parents("td:first");
                        var c = "";
                        if (W.length > 0) {
                            Y = W.text();
                            if (L.attr("id") && L.attr("id") == "WEB_DR_XCXLJG_FORM") {
                                var S = b.parents(".item");
                                var N = S.find(".itemtext");
                                Y = N.text()
                            }
                        }
                        var a = W.prev();
                        if (a.length > 0) {
                            if ($.Micro.IsEmpty(Y) || (b.attr("type") == "radio" && Y == "是否")) {
                                Y = a.text()
                            }
                        }
                        Y = $.trim(Y);
                        var Q = ["&nbsp;", " ", ":", "："];
                        for (var M = 0; M < Q.length; M++) {
                            Y = replaceAll(Y, Q[M], "")
                        }
                    } catch(U) {
                        console.log(U.name + ":" + U.message);
                        Y = ""
                    }
                    if (A == b.attr(V)) {
                        K = X
                    }
                    E.push({
                        id: b.attr(V),
                        value: X,
                        text: Y
                    })
                }
            });
            F.push({
                key: K,
                data: E
            })
        }
    } else {
        F.push({
            key: "",
            data: []
        })
    }
    return F
}
function Micro_CompareModifyEditorDetail(J, S) {
    var P = [];
    var I = [];
    var Q = [];
    var N = [];
    if ($.isArray(J) && $.isArray(S)) {
        for (var M = 0; M < S.length; M++) {
            var C = S[M].data;
            var H = S[M].key;
            var O = true;
            for (var D = 0; D < J.length; D++) {
                if (J[D].key == H) {
                    O = false;
                    Q.push({
                        key: H,
                        data: J[D].data
                    });
                    break
                }
            }
            if (!O) {
                N.push({
                    key: H,
                    data: C
                })
            }
        }
        for (var M = 0; M < N.length; M++) {
            var G = Q[M].data;
            var C = N[M].data;
            var E = Q[M].key;
            I = [];
            for (var D = 0; D < C.length; D++) {
                var B = C[D].id;
                var L = C[D].value;
                var K = C[D].text;
                for (var F = 0; F < G.length; F++) {
                    var A = G[F].id;
                    var R = G[F].value;
                    if (A == B) {
                        if (R != L) {
                            I.push({
                                key: E,
                                id: B,
                                oldValue: R,
                                newValue: L,
                                text: K
                            });
                            break
                        }
                    }
                }
            }
            if (I.length > 0) {
                P.push(I)
            }
        }
    } else {
        P.push([])
    }
    if (P.length == 0) {
        P.push([])
    }
    return P
}
function Micro_ModifiedEditorDetail(A) {
    var B = "";
    for (var C = 0; C < A.length; C++) {
        if (B != "") {
            B += ","
        }
        B += A[C].text + ":" + A[C].oldValue + "→" + A[C].newValue
    }
    if (B != "") {
        B = "——" + B
    }
    return B
}
function getMicroPCMobileUI() {
    var B = window.location.toString();
    var A = "";
    if (B.indexOf("MicroSys/frame.aspx") > -1) {
        A = "PC"
    } else {
        if (B.indexOf("MobileDraw/mobileDrawFrame.aspx") > -1) {
            A = "MOBILE"
        }
    }
    return A
}
function Micro_isDistributor(A) {
    if ($.Micro.IsEmpty(A) || A.indexOf("经销") == -1) {
        return false
    } else {
        return true
    }
}
function checkDistributorLimit(D, A) {
    var C = true;
    if ($.Micro.IsEmpty(A)) {
        A = "删改"
    }
    if (Micro_isDistributor(mDepartment) && !$.Micro.IsEmpty(D)) {
        C = false;
        var B = "";
        $.each(mPublicAllUserList,
        function(E, F) {
            if (F.c_userid == D) {
                B = F.Department;
                return true
            }
        });
        if (Micro_isDistributor(B)) {
            C = true
        }
    }
    if (!C) {
        $.messager.alert("提示:", "抱歉！对当前单据没有" + A + "权限", "error")
    }
    return C
}
function formatter_option(A, B, D) {
    var C = D || "";
    if (mPublicOptionList) {
        for (i = 0; i < mPublicOptionList.length; i++) {
            if (mPublicOptionList[i].c_type.toString() == A && mPublicOptionList[i].c_name.toString() == B) {
                C = mPublicOptionList[i].c_value.toString();
                break
            }
        }
    }
    return C
}
var mRemindTsendMessBox;
function Micro_InitRemind(tag) {
    mPublicRemindInterval = Number($.Micro.IsEmpty(mPublicRemindInterval) ? 0 : mPublicRemindInterval);
    mPublicRemindInterval = (mPublicRemindInterval < 1) ? 0 : mPublicRemindInterval;
    var sendMessBox = function(tag) {
        var datas = {
            action: "newRecord",
            page: 1,
            rows: 100000
        };
        if (tag == 1) {
            $.ajax({
                async: true,
                url: "../MicroSys/CC_SYS_REMIND_RECEIVE.ashx",
                data: datas,
                type: "POST",
                dataType: "text",
                success: function(result) {
                    try {
                        eval("var Results = " + result);
                        var rows = Results.rows;
                        var total = Results.total;
                        var SCnt = Number(rows[0].SCnt);
                        var tipsTimeout = -1;
                        var dialogID = $.Micro.CurrTime();
                        if (SCnt > 0) {
                            var msgTitle = "系统提示";
                            try {
                                $.each($(".panel-tool-close"),
                                function(i, o) {
                                    var tp = $(o).parent().parent();
                                    if (tp.find(".panel-title").length > 0) {
                                        if (tp.find(".panel-title").text() == msgTitle) {
                                            $(o).trigger("click")
                                        }
                                    }
                                })
                            } catch(e) {}
                            $.messager.show({
                                title: msgTitle,
                                msg: '<div style="text-align: left;font-size: 14px;margin-top:3px;cursor: pointer;" id="' + dialogID + '">系统有&nbsp;<b style="color:red;">' + SCnt + "</b>&nbsp;条最新通知！</div>",
                                timeout: tipsTimeout
                            });
                            $('[id="' + dialogID + '"]').unbind("click");
                            $('[id="' + dialogID + '"]').bind("click",
                            function() {
                                $.each($(".panel-title"),
                                function() {
                                    var _this = $(this);
                                    var tText = _this.text();
                                    if (tText == msgTitle) {
                                        _this.parent().find(".panel-tool-close").trigger("click");
                                        return false
                                    }
                                });
                                var winName = "系统提醒通知";
                                if ($("#mainTab").tabs("exists", winName)) {
                                    $("#mainTab").tabs("select", winName);
                                    $("#CC_SYS_REMIND_RECEIVE_dgId_TB_BTN1").trigger("click")
                                } else {
                                    addTab(winName, "../MicroSys/CC_SYS_REMIND_RECEIVE.html", "icon-mSubMenu", true)
                                }
                            });
                            $('[id="' + dialogID + '"]').trigger("click")
                        }
                    } catch(e) {
                        console.clear();
                        clearTimeout(mRemindTsendMessBox)
                    }
                },
                error: function(result) {
                    console.clear();
                    clearTimeout(mRemindTsendMessBox)
                }
            })
        } else {
            tag = 1
        }
        mRemindTsendMessBox = setTimeout(function() {
            sendMessBox(tag)
        },
        1000 * 60 * mPublicRemindInterval)
    };
    if (mPublicRemindInterval > 0) {
        setTimeout(function() {
            sendMessBox(tag)
        },
        0)
    }
}
function formatter_showPic(C, E, B) {
    var G, H;
    var F, D;
    var A;
    if (isNaN(E) && isNaN(B)) {
        G = 100;
        H = 100;
        F = "100%";
        D = "auto"
    } else {
        if (isNaN(E)) {
            H = B;
            G = B;
            F = "auto";
            D = "100%"
        } else {
            if (isNaN(B)) {
                G = E;
                H = E;
                F = "100%";
                D = "auto"
            } else {
                G = E;
                H = B;
                F = "100%";
                D = "auto"
            }
        }
    }
    A = "<div style='width:" + G + "px;height:" + H + "px;margin-right: auto;margin-left: auto;background-repeat: no-repeat;background-position: center center;background-size: " + [F, D].join(" ") + ";background-image: url(" + C + ");cursor: pointer;'></div>";
    return A
}
function Micro_BuyXCXL_AutoCopyXCXL(evt) {
    var ShoppingCart = [];
    var ShoppingCartStr = $.Micro.getCookie(MicroCookie_ShoppingCart);
    if (!$.Micro.IsEmpty(ShoppingCartStr)) {
        ShoppingCart = ShoppingCartStr.split(",")
    }
    if (ShoppingCart.length == 0) {
        $.messager.alert("提示", "购物车已清空！", "info");
        return
    } else {
        getCJXCXLAccount();
        if ($.Micro.IsEmpty(mCJXCXLAccount_companyId)) {
            $.messager.alert("提示", "获取型材系列账号失败！", "info");
            return
        }
        var whereStr = "&whereStr=" + ($.Micro.IsEmpty(ShoppingCartStr) ? "id=0": "id In(" + ShoppingCartStr + ")");
        $.ajax({
            url: "../MicroCJXCXL/CJXCXL_XCXL.ashx?action=search",
            data: {
                whereStr: "id In(" + ShoppingCartStr + ")"
            },
            type: "POST",
            dataType: "json",
            success: function(result) {
                var rows = result.rows;
                var oldSeriesIds = [];
                var newSeriesNames = [];
                $.each(rows,
                function(i, o) {
                    oldSeriesIds.push(o.id);
                    newSeriesNames.push(o.fxlName + "_" + $.Micro.CurrTime())
                });
                $.messager.progress({
                    title: "复制",
                    text: "复制进行中，请稍后 ……",
                    interval: 100
                });
                $.ajax({
                    url: "../MicroBase/WEB_DR_XCXL_COPYSERIES.ashx",
                    data: {
                        action: "copy",
                        oldSeriesIds: oldSeriesIds.join(","),
                        newSeriesNames: newSeriesNames.join(","),
                        FromCompanyId: mCJXCXLAccount_companyId
                    },
                    type: "POST",
                    dataType: "text",
                    success: function(result) {
                        $.messager.progress("close");
                        $.Micro.delCookie(MicroCookie_ShoppingCart);
                        $.Micro.delCookie(MicroCookie_OperName);
                        if (result.substr(0, 2) == "ok") {
                            $.messager.show({
                                title: "提示",
                                msg: "复制成功!",
                                timeout: 1500
                            })
                        } else {
                            jQuery.messager.alert("提示:", "复制失败！" + result, "error")
                        }
                        setTimeout(function() {
                            eval(evt)
                        },
                        1000)
                    },
                    error: function(result) {
                        $.Micro.delCookie(MicroCookie_ShoppingCart);
                        $.Micro.delCookie(MicroCookie_OperName)
                    }
                })
            }
        })
    }
}
function getCJXCXLAccount() {
    var A = {};
    A.action = "getCJXCXLAccount";
    $.ajax({
        url: "../MicroSys/MicroDDDL.ashx",
        data: A,
        type: "POST",
        dataType: "json",
        async: false,
        success: function(C) {
            try {
                if (C.length > 0) {
                    mCJXCXLAccount_companyId = C[0].id
                } else {
                    mCJXCXLAccount_companyId = ""
                }
            } catch(B) {
                mCJXCXLAccount_companyId = ""
            }
        },
        error: function(B) {
            mCJXCXLAccount_companyId = ""
        }
    })
}
function Micro_DefinedPrintEdit() {
    try {
        mCurUserId = getCurrentUserId(0);
        mCompanyId = getCompanyId(0);
        var editAreaTag = "MicroPrint_EditArea";
        var PrintEditBTsId = "PrintEditBTs";
        var PrintEditBTs;
        var actionURL = "/MicroSys/WEB_PRINT_DEFINEDEDIT.ashx";
        var rowsAdd = [];
        var rowsUpdate = [];
        var editType = "";
        var editID = 0;
        var _getRootPath = $.Micro.getRootPath();
        var pathName = _getRootPath.pathName.toUpperCase();
        var editsStr = '<div id="' + PrintEditBTsId + '">';
        editsStr += '<div class="edit" title="编辑打印"></div>';
        editsStr += '<div class="ok" title="确定"></div>';
        editsStr += '<div class="cannel" title="取消"></div>';
        editsStr += "</div>";
        var checkBAdmin = function() {
            var checkOK = false;
            if (!$.Micro.IsEmpty(mCurUserId) && !$.Micro.IsEmpty(mCompanyId)) {
                var para = {};
                para.action = "getWebBudgeUserInfo";
                $.ajax({
                    url: "../MicroSys/MicroSys.ashx",
                    data: para,
                    type: "POST",
                    dataType: "text",
                    async: false,
                    success: function(result) {
                        if (result.substring(0, 2) == "ok") {
                            var infoArr = result.substring(3).split(",");
                            if ($.Micro.isInArray(infoArr[9].toLowerCase(), ["1", "true"])) {
                                checkOK = true
                            }
                        }
                    }
                })
            }
            return checkOK
        };
        var Init = function() {
            $.ajax({
                async: false,
                url: actionURL + "?action=search&companyId=" + $.Micro.getQueryStr("companyId"),
                data: {
                    rurl: pathName
                },
                type: "POST",
                dataType: "json",
                success: function(result) {
                    var rows = result.rows;
                    if (rows.length > 0) {
                        editType = "edit";
                        editID = rows[0].id;
                        var editContent = eval(rows[0].editContent);
                        for (var i = 0; i < editContent.length; i++) {
                            $("[id=" + editContent[i].id + "]").html(editContent[i].content)
                        }
                    } else {
                        editType = "add"
                    }
                },
                error: function(result) {
                    return true
                }
            })
        };
        var Save = function() {
            var editContent = [];
            var editAreaTagIDs = [];
            $.each($("[class=" + editAreaTag + "]"),
            function(i, o) {
                var id = $(o).attr("id");
                if ($.inArray(id, editAreaTagIDs) > -1) {
                    return true
                }
                var content = $(o).html();
                editContent.push({
                    id: id,
                    content: content
                });
                editAreaTagIDs.push(id)
            });
            if (editType == "edit") {
                rowsAdd = [];
                rowsUpdate = [{
                    id: editID,
                    companyId: "$当前companyId$",
                    url: pathName,
                    editContent: JSON.stringify(editContent),
                    LastModifier: "$修改人$",
                    LastModifyDate: "$修改时间$"
                }]
            } else {
                if (editType == "add") {
                    rowsAdd = [{
                        companyId: "$当前companyId$",
                        url: pathName,
                        editContent: JSON.stringify(editContent),
                        LastModifier: "$修改人$",
                        LastModifyDate: "$修改时间$"
                    }];
                    rowsUpdate = []
                }
            }
            $.ajax({
                async: true,
                url: actionURL + "?action=save",
                data: {
                    rowsAdd: JSON.stringify(rowsAdd),
                    rowsUpdate: JSON.stringify(rowsUpdate),
                    rurl: pathName
                },
                type: "POST",
                dataType: "html",
                success: function(result) {
                    if (result.substr(0, 2) == "ok") {
                        $.messager.show({
                            title: "提示",
                            msg: "保存成功!",
                            timeout: 1500
                        })
                    } else {
                        $.messager.show({
                            title: "提示",
                            msg: "保存失败!",
                            timeout: 1500
                        })
                    }
                },
                error: function(result) {
                    $.messager.show({
                        title: "提示",
                        msg: "保存失败!",
                        timeout: 1500
                    });
                    return true
                }
            })
        };
        if ($("[class=" + editAreaTag + "]").length == 0) {
            return true
        } else {
            if (checkBAdmin()) {
                $("body").append(editsStr);
                PrintEditBTs = $("#" + PrintEditBTsId);
                PrintEditBTs.find("[class=ok],[class=cannel]").hide();
                PrintEditBTs.find("[class=edit]").click(function() {
                    $(this).hide();
                    PrintEditBTs.find("[class=ok],[class=cannel]").show();
                    var editAreaTagIDs = [];
                    $.each($("[class=" + editAreaTag + "]"),
                    function(i, o) {
                        var id = $(o).attr("id");
                        if ($.inArray(id, editAreaTagIDs) > -1) {
                            return true
                        }
                        var editHeight = Number($(o).height()) + 12;
                        var editWidth = Number($(o).width());
                        if (editHeight < 30) {
                            editHeight = 30
                        }
                        var content = $(o).html();
                        content = replaceAll(content, " ", "");
                        content = replaceAll(content, "\n", "");
                        $(o).attr("oriContent", content);
                        content = replaceAll(content, "&nbsp;&nbsp;", " ");
                        content = replaceAll(content, "<br>", "\n");
                        var editHTML = '<div style="text-align: center;"><textarea name="editText" style="width:99%;height:' + editHeight + 'px;background-color:#FC3;color:#000;">' + content + "</textarea></div>";
                        $(o).html(editHTML);
                        editAreaTagIDs.push(id)
                    })
                });
                PrintEditBTs.find("[class=ok]").click(function() {
                    PrintEditBTs.find("[class=ok],[class=cannel]").hide();
                    PrintEditBTs.find("[class=edit]").show();
                    $.each($("[class=" + editAreaTag + "]"),
                    function(i, o) {
                        var editor = $(o).find("[name=editText]");
                        if (editor.length == 0) {
                            return true
                        }
                        var content = editor.val();
                        content = replaceAll(content, " ", "&nbsp;&nbsp;");
                        content = replaceAll(content, "\n", "<br>");
                        $("[id=" + $(o).attr("id")).html(content)
                    });
                    Save()
                });
                PrintEditBTs.find("[class=cannel]").click(function() {
                    PrintEditBTs.find("[class=ok],[class=cannel]").hide();
                    PrintEditBTs.find("[class=edit]").show();
                    $.each($("[class=" + editAreaTag + "]"),
                    function(i, o) {
                        var content = $(o).attr("oriContent");
                        $(o).html(content)
                    })
                })
            }
        }
        Init()
    } catch(e) {
        console.clear()
    }
}
function getPreMonth(K) {
    var G = K.split("-");
    var F = G[0];
    var B = G[1];
    var C = G[2];
    var A = new Date(F, B, 0);
    A = A.getDate();
    var I = F;
    var E = parseInt(B) - 1;
    if (E == 0) {
        I = parseInt(I) - 1;
        E = 12
    }
    var J = C;
    var D = new Date(I, E, 0);
    D = D.getDate();
    if (J > D) {
        J = D
    }
    if (E < 10) {
        E = "0" + E
    }
    var H = I + "-" + E + "-" + J;
    return H
}
function Micro_changeJSON(A, B) {
    var G = ["versions"];
    var F = [];
    $.each(G,
    function(H, I) {
        F.push("[name=" + I + "]")
    });
    try {
        if ($("#" + A + "_FORM").find(F.join(",")).length > 0) {
            var C = $("#" + A + "_FORM").serializeArray();
            var D = {};
            $.each(C,
            function(I, J) {
                var K = J.name;
                var H = J.value;
                if ($.inArray(J.name, G) == -1) {
                    D[K] = H
                } else {
                    $.each(G,
                    function(L, N) {
                        var O = $("#" + A + "_FORM [comboname=" + N + "]");
                        if (O.length > 0) {
                            var M = $("#" + O.attr("id")).combogrid("options");
                            if (M.multiple) {
                                var P = [];
                                $.each($("#" + A + "_FORM [name=" + N + "]"),
                                function(R, Q) {
                                    P.push($(Q).val())
                                });
                                D[K] = P.join(",")
                            } else {
                                D[K] = H
                            }
                        } else {
                            D[K] = H
                        }
                    })
                }
            });
            return JSON.stringify(D)
        }
    } catch(E) {}
    return B
}
function Micro_ShowArticleDetail(dialogObj, area, rowData) {
    var outText = "";
    var nid = rowData.id;
    var tid = rowData.detail;
    var updateTime = rowData.LastModifyDate;
    outText += '<h1 class="title"></h1>';
    outText += '<div class="updateTime"></div>';
    outText += '<div class="content"></div>';
    outText += '<div class="back"></div>';
    area.html(outText);
    if (dialogObj) {
        area.find(".back").html('<a href="####"><img title="返回" src="../MicroThemes/IMG/back.png" /></a>');
        area.find(".back").click(function() {
            dialogObj.dialog("destroy")
        })
    }
    var win = $.messager.progress({
        title: "请等待",
        msg: "正在加载内容..."
    });
    var para = {
        action: "datail",
        visitStyle: "Client",
        id: tid,
        page: 1,
        rows: 10000
    };
    $.ajax({
        url: "../MicroAskAnswer/WEB_ASK_ANSWER.ashx",
        data: para,
        type: "get",
        dataType: "text",
        async: true,
        success: function(result) {
            $(".recordList").html("");
            if (result.substr(0, 2) == "ok") {
                if (result.substr(3).length > 0) {
                    Micro_updateArticleClick(nid, "clicks");
                    try {
                        eval("var Result = " + result.substr(3));
                        var rows = Result["rows"];
                        var outText = "";
                        var itemCSS = "";
                        var rowsNum = rows.length;
                        var title = "";
                        var details = "";
                        for (var i = 0; i < rowsNum; i++) {
                            var id = rows[i]["id"];
                            var pid = rows[i]["pid"];
                            var c_userid = rows[i]["c_userid"].toUpperCase();
                            var userType = Number(rows[i]["userType"]);
                            title = rows[i]["title"];
                            var detail = rows[i]["detail"];
                            var secretInfor = rows[i]["secretInfor"];
                            var addTime = rows[i]["addTime"];
                            var updateTime = rows[i]["updateTime"];
                            var EndTie = rows[i]["EndTie"];
                            var EndTieTime = rows[i]["EndTieTime"];
                            details += detail
                        }
                        area.find(".title").html(title);
                        area.find(".updateTime").html("更新时间：" + updateTime);
                        area.find(".content").html(details)
                    } catch(e) {}
                }
            } else {
                $.messager.alert("提示:", "获取明细失败！" + result, "error")
            }
            setTimeout(function() {
                $.messager.progress("close")
            },
            300)
        },
        error: function() {
            setTimeout(function() {
                $.messager.progress("close")
            },
            300)
        }
    })
}
function Micro_updateArticleClick(C, B) {
    var A = {
        action: "UpdateClicks",
        id: C,
        clickField: B
    };
    $.ajax({
        url: "../MicroBase/CC_SYS_ARTICLE.ashx",
        dataType: "text",
        data: A,
        type: "post",
        async: true,
        success: function(D) {},
        error: function(D) {}
    })
}
function autoOpen_MICRO_MINIWIN(parm) {
    if ($("#MICRO_MINIWIN").parent().css("display") != "none") {
        return
    }
    $("#MICRO_MINIWIN").window("open"); (function() {
        var showArea = $("#MICRO_MINIWIN_TAB_MCTT .Conts");
        var rowsNum = 16;
        var tHomeURL = "http://www.weigaoruanjian.com:8810/";
        var showAD_divRowsNum = 8;
        var ADs_runNum = 0;
        var showAD_HTML = function() {
            var text = "";
            var ad_src = MicroNews_ADsList[ADs_runNum].src;
            text = "<div class='ADs'><img border=0 src='" + ad_src + "'/></div>";
            if (ADs_runNum + 1 >= MicroNews_ADsList.length) {
                ADs_runNum = 0
            } else {
                ADs_runNum++
            }
            return text
        };
        var showPublicsh_HTML = "";
        var openDetail = function(id) {
            var _item = showArea.find(".item[id=" + id + "]");
            var list_sort = Number(_item.attr("sort"));
            var list_currPage = Math.ceil(list_sort / rowsNum);
            var turl = tHomeURL + "News/detail.html?id=" + id + "&uid=" + mCurUserId;
            window.open(turl)
        };
        var articleList = function(page) {
            $.messager.progress({
                title: "请等待",
                msg: "正在加载..."
            });
            var para = {
                action: "search",
                page: page,
                rows: rowsNum,
                visitStyle: 1
            };
            $.ajax({
                url: tHomeURL + "News/article.ashx",
                type: "get",
                dataType: "jsonp",
                jsonp: "callbackparam",
                data: para,
                async: true,
                success: function(result) {
                    setTimeout(function() {
                        $.messager.progress("close")
                    },
                    300);
                    var total = Number(result.total);
                    var rows = result.rows;
                    var outText = "";
                    var row_runNum = 0;
                    var Mobile_titleLimit = 25;
                    var PC_summaryLimit = 70;
                    var Mobile_summaryLimit = 28;
                    var summaryLimit = PC_summaryLimit;
                    for (var i = 0; i < rows.length; i++) {
                        outText = "";
                        if (i == 0 && showArea.html() == "") {
                            outText += showAD_HTML();
                            outText += showPublicsh_HTML
                        }
                        row_runNum++;
                        var id = rows[i].id;
                        var title = rows[i].title;
                        var img = rows[i].mainPict;
                        if (img.indexOf("http") == -1) {
                            img = "http://www.weigaoruanjian.com:8800" + img
                        }
                        img = formatter_showPic(img, 130, 100);
                        var summary = rows[i].summary;
                        var clicks = (Number(rows[i].RandClick) + Number(rows[i].Clicks) + Number(rows[i].MClicks)).toFixed(0);
                        var AddDate = new Date(rows[i].AddDate);
                        summary = summary.length >= summaryLimit ? ($.Micro.Left(summary, summaryLimit) + "……") : summary;
                        outText += '<div id="' + id + '" class="item" sort="' + ((page - 1) * rowsNum + i + 1) + '" title="' + title + '">';
                        outText += '<div class="img">' + img + "</div>";
                        outText += '<div class="text">';
                        outText += '<a class="title" href="' + tHomeURL + "News/detail.html?id=" + id + "&uid=" + mCurUserId + '">' + title + "</a>";
                        outText += '<div class="summary">' + summary + "</div>";
                        outText += '<div class="other">阅读量：' + clicks + "&nbsp;&nbsp;&nbsp;&nbsp;" + AddDate.pattern("yyyy-MM-dd") + "</div>";
                        outText += "</div>";
                        outText += "</div>";
                        outText += '<div class="Hline nextRow"></div>';
                        if (row_runNum >= showAD_divRowsNum) {
                            row_runNum = 0;
                            outText += showAD_HTML();
                            outText += showPublicsh_HTML
                        }
                        showArea.append(outText);
                        var _item = showArea.find(".item[id=" + id + "]");
                        with(_item) {
                            mouseover(function() {
                                addClass("mouseoverBg")
                            });
                            mouseout(function() {
                                removeClass("mouseoverBg")
                            });
                            find(".img,.title,.summary").click(function(e) {
                                var self = $(this);
                                if (self.hasClass("title")) {
                                    self.attr("href", "javascript:void(0);")
                                }
                                var tid = self.parents(".item").attr("id");
                                openDetail(tid)
                            })
                        }
                    }
                    var itemNum = showArea.find(".item").length;
                    $("#MICRO_MINIWIN_TAB_MCTT #moreList").remove();
                    if (itemNum < total) {
                        var $moreList = $('<div class="layout" id="moreList">+加载更多+</div>');
                        with($moreList) {
                            mouseover(function() {
                                addClass("mouseover")
                            });
                            mouseout(function() {
                                removeClass("mouseover")
                            });
                            click(function() {
                                articleList(page + 1)
                            })
                        }
                        $moreList.insertAfter(showArea)
                    }
                    $(".publish img").unbind("click");
                    $(".publish img").bind("click",
                    function() {
                        publish_register()
                    })
                },
                error: function(result) {
                    setTimeout(function() {
                        $.messager.progress("close")
                    },
                    300);
                    $.messager.alert("提示:", "门窗头条加载失败！", "error")
                }
            })
        };
        articleList(1)
    })(); (function() {
        var Fun_OpenDetail = function(rowData) {
            var detailShowID = "CC_SYS_SHOWARTICLEDETAIL";
            $("<div></div>").dialog({
                id: detailShowID + "_DLG",
                title: rowData.title,
                content: '<div id="' + detailShowID + '"></div>',
                height: "100%",
                width: "100%",
                resizable: false,
                modal: true,
                onClose: function() {
                    $(this).dialog("destroy")
                },
                onLoad: function() {}
            });
            Micro_ShowArticleDetail($("#" + detailShowID + "_DLG"), $("#" + detailShowID), rowData)
        };
        var WEB_HELP_TYPE_DG_INIT = function(layout, typeId, sort, order) {
            var courseTag = 0;
            switch (String(typeId)) {
            case "1":
                courseTag = 2;
                break;
            case "2":
                courseTag = 3;
                break
            }
            return {
                url: "../MicroBase/CC_SYS_ARTICLE.ashx?action=search&typeId=" + typeId + "&searchType=help&sort=" + sort + "&order=" + order,
                iconCls: "icon-edit",
                rownumbers: true,
                nowrap: false,
                pagination: true,
                fitColumns: true,
                autoSizeColumn: true,
                striped: true,
                collapsible: false,
                toolbar: "",
                multiSort: true,
                singleSelect: true,
                columns: [[{
                    field: "title",
                    title: "标题",
                    width: 600,
                    align: "left",
                    halign: "center",
                    sortable: false,
                    type: "CHAR"
                },
                {
                    field: "detail",
                    title: "内容",
                    width: 80,
                    align: "center",
                    sortable: false,
                    type: "CHAR",
                    formatter: function(value, row, index) {
                        var outText = '<a class="defA" href="####" onclick="javascript:void(0)">【查看】</a>';
                        return outText
                    }
                },
                {
                    field: "clicks",
                    title: "阅读量",
                    width: 60,
                    align: "center",
                    sortable: false,
                    type: "CHAR"
                },
                {
                    field: "LastModifyDate",
                    title: "更新日期",
                    width: 120,
                    align: "center",
                    sortable: false,
                    type: "DATETIME",
                    formatter: function(value, row, index) {
                        var date = new Date(value);
                        return date.pattern("yyyy-MM-dd")
                    }
                },
                ]],
                showFooter: true,
                pageSize: 50,
                pageList: [10, 20, 50, 100, 200],
                onLoadSuccess: function(record) {},
                onClickRow: function(rowIndex, rowData) {},
                onClickCell: function(index, field, value) {
                    if (field == "detail") {
                        Fun_OpenDetail($(this).datagrid("getRows")[index])
                    }
                },
                onDblClickRow: function(rowIndex, rowData) {
                    Fun_OpenDetail(rowData)
                }
            }
        };
        var InitObjs = [{
            layout: $("#MICRO_MINIWIN_TAB_CJWT"),
            typeId: 1,
            sort: "clicks",
            order: " Desc "
        },
        {
            layout: $("#MICRO_MINIWIN_TAB_SJRZ"),
            typeId: 2,
            sort: "LastModifyDate",
            order: " Desc"
        },
        ];
        $.each(InitObjs,
        function(i, o) {
            var layoutObj = o.layout;
            var dgObj = layoutObj.find(".easyui-datagrid");
            var _options = dgObj.datagrid("options");
            if (!$.Micro.IsEmpty(_options.url)) {
                return true
            }
            dgObj.datagrid(WEB_HELP_TYPE_DG_INIT(layoutObj, o.typeId, o.sort, o.order));
            with(layoutObj) {
                var searchBT = find(".searchBT");
                var searchKey = find(".searchKey");
                var dg = find(".easyui-datagrid");
                searchBT.unbind("click");
                searchBT.bind("click",
                function() {
                    var whereStr = " 1=1 ";
                    var key = searchKey.textbox("getValue");
                    if (!$.Micro.IsEmpty(key)) {
                        whereStr += " AND title like '%" + key + "%' "
                    }
                    var options = dg.datagrid("options");
                    options.queryParams = {
                        whereStr: whereStr
                    };
                    options.whereParams = {
                        whereStr: whereStr
                    };
                    dg.datagrid("reload")
                })
            }
        })
    })();
    if (parm) {
        if (parm.setUserOpenMiniwinTime) {
            $.ajax({
                url: "../MicroSys/MicroDDDL.ashx",
                data: {
                    action: "setUserOpenMiniwinTime"
                },
                type: "POST",
                dataType: "text",
                async: true,
                success: function(result) {}
            })
        }
    }
}
function Micro_EasyuiAddTab(C, A, B, D, E, F) {
    if (C.length == 0) {
        return
    }
    if ($.Micro.IsEmpty(E)) {
        E = true
    }
    if ($.Micro.IsEmpty(F)) {
        F = false
    }
    if (C.tabs("exists", A) && F) {
        C.tabs("close", A)
    }
    if (!C.tabs("exists", A)) {
        C.tabs("add", {
            title: A,
            href: B,
            closable: E,
            icon: D,
            loadingMessage: "正在加载中......"
        })
    } else {
        C.tabs("select", A)
    }
}
function Micro_creatWinPages(areaObj, PageSize, PageIndex, PageSizeList) {
    var totalPage = function(TotalRecord, PageSize) {
        return Math.ceil(TotalRecord / PageSize)
    };
    with(areaObj.find(".PageInfor")) {
        if (length > 0 && areaObj.find("[name=TotalRecord]").length > 0) {
            var TotalRecord = areaObj.find("[name=TotalRecord]").val();
            var TotalPage = totalPage(TotalRecord, PageSize);
            var pageStr = "";
            pageStr = pageStr + "<table width='100%' border='0' cellspacing='0' cellpadding='0'>";
            pageStr = pageStr + "<tr>";
            pageStr = pageStr + "<td align='center' height='30'>每页";
            pageStr = pageStr + "&nbsp;";
            var psizeStr = "";
            pageStr = pageStr + "<select class='Psize'>";
            for (var i = 0; i < PageSizeList.length; i++) {
                psizeStr = psizeStr + "<option value='" + PageSizeList[i] + "'";
                if (PageSizeList[i] == Number(PageSize)) {
                    psizeStr = psizeStr + " selected='selected'"
                }
                psizeStr = psizeStr + ">" + PageSizeList[i] + "</option>"
            }
            pageStr = pageStr + psizeStr;
            pageStr = pageStr + "</select>";
            pageStr = pageStr + "&nbsp;条记录";
            pageStr = pageStr + "&nbsp;&nbsp;&nbsp;&nbsp;";
            if (PageIndex == 1) {
                pageStr = pageStr + "[首页]"
            } else {
                pageStr = pageStr + "<a pagetag='first' href='javascript:;'>[首页]</a>"
            }
            pageStr = pageStr + "&nbsp;&nbsp;";
            if (PageIndex - 1 >= 1) {
                pageStr = pageStr + "<a pagetag='prev' href='javascript:;'>[上一页]</a>"
            } else {
                pageStr = pageStr + "[上一页]"
            }
            pageStr = pageStr + "&nbsp;&nbsp;第&nbsp;<input class='TotalPageList' type='text' value='" + PageIndex + "' size='2' maxlength='3' style='text-align:center'/>&nbsp;页&nbsp;&nbsp;";
            pageStr = pageStr + "/&nbsp; 共" + TotalPage + "页（共" + TotalRecord + "条记录）";
            pageStr = pageStr + "&nbsp;&nbsp;&nbsp;&nbsp;";
            if (PageIndex + 1 <= TotalPage) {
                pageStr = pageStr + "<a pagetag='next' href='javascript:;'>[下一页]</a> "
            } else {
                pageStr = pageStr + "[下一页]"
            }
            pageStr = pageStr + "&nbsp;&nbsp;";
            if (PageIndex == TotalPage) {
                pageStr = pageStr + "[末页]"
            } else {
                pageStr = pageStr + "<a pagetag='last' href='javascript:;'>[末页]</a>"
            }
            pageStr = pageStr + "</td>";
            pageStr = pageStr + "</tr>";
            pageStr = pageStr + "</table>";
            html(pageStr);
            var toPage = function(TotalPage) {
                var ntpage = areaObj.find(".TotalPageList").val();
                if (isNaN(ntpage)) {
                    ntpage = 1
                }
                if (ntpage < 1) {
                    ntpage = 1
                } else {
                    if (ntpage > TotalPage) {
                        ntpage = TotalPage
                    }
                }
                return ntpage
            };
            $.Micro.Bind(find("a[pagetag='first']"), "click",
            function() {
                Fun_search(areaObj.find(".Psize").val(), 1, PageSizeList)
            });
            $.Micro.Bind(find("a[pagetag='next']"), "click",
            function() {
                Fun_search(areaObj.find(".Psize").val(), (PageIndex + 1), PageSizeList)
            });
            $.Micro.Bind(find("a[pagetag='prev']"), "click",
            function() {
                Fun_search(areaObj.find(".Psize").val(), (PageIndex - 1), PageSizeList)
            });
            $.Micro.Bind(find("a[pagetag='last']"), "click",
            function() {
                Fun_search(areaObj.find(".Psize").val(), TotalPage, PageSizeList)
            });
            $.Micro.Bind(areaObj.find(".Psize"), "change",
            function() {
                var _PageSize = areaObj.find(".Psize").val();
                Fun_search(_PageSize, toPage(totalPage(TotalRecord, _PageSize)), PageSizeList)
            });
            $.Micro.Bind(areaObj.find(".TotalPageList"), "focus",
            function() {
                document.onkeydown = function(e) {
                    var ev = document.all ? window.event: e;
                    if (ev.keyCode == 13) {
                        var _PageSize = areaObj.find(".Psize").val();
                        Fun_search(_PageSize, toPage(totalPage(TotalRecord, _PageSize)), PageSizeList)
                    }
                }
            })
        }
    }
}
function Micro_ShowOriSVGToScreen(B, A) {
    if ($.Micro.IsEmpty(A)) {
        A = 1
    }
    A = Number(A);
    $.each(B.find("svg:visible"),
    function(D, C) {
        var F = $("#" + $(C).attr("id") + "_oriSVG");
        var E = F.find("svg:first");
        F.addClass("ShowPictToScreen");
        F.css({
            "transform": "scale(" + A + ")"
        });
        $(C).parents("td").mouseover(function() {
            F.show();
            $.Micro.SetObjCenter(F, 1)
        });
        $(C).parents("td").mouseout(function() {
            F.hide()
        })
    })
}
function Print_ProductSvg_ShowOrHideSvg(D, A, B) {
    if (D) {
        var E = "";
        var C = $("#" + A + "_BODY_TAB").find("tr").length;
        for (i = 1; i < (C - 1); i++) {
            E = E + ",'" + $("#" + A + "_BODY_TAB").find("tr").eq(i).find("td").eq(B + 1).html() + "'"
        }
        if (E.length > 0) {
            E = E.substr(1)
        }
        para = {};
        para.action = "getPrSvg";
        para.prIdList = E;
        $.ajax({
            url: "../MicroOpt/WEB_OPT.ashx",
            data: para,
            type: "POST",
            dataType: "text",
            async: true,
            success: function(G) {
                if (G.substr(0, 2) == "ok") {
                    var H = G.substr(3).split("[!]");
                    for (i = 0; i < H.length; i++) {
                        var F = H[i].split("[,]");
                        $("[id='" + A + "_SVG_" + F[0] + "']").each(function(J, I) {
                            $(I).html(F[1])
                        })
                    }
                    $("#printarea svg").each(function(I, J) {
                        J.setAttribute("width", "160px");
                        J.setAttribute("height", "120px")
                    });
                    $("#printarea path").each(function(I, J) {
                        J.setAttribute("stroke-width", "4")
                    });
                    $('[field="PrSVG"]').show();
                    $.each($('[field="changeField"]'),
                    function(I, J) {
                        $(J).attr("colspan", Number($(J).attr("colspan")) + 1)
                    })
                } else {
                    jQuery.messager.alert("提示:", "获取失败!", "error")
                }
            }
        })
    } else {
        $("#printarea svg").each(function(F, G) {
            G.remove()
        });
        $('[field="PrSVG"]').hide();
        $.each($('[field="changeField"]'),
        function(F, G) {
            $(G).attr("colspan", Number($(G).attr("colspan")) - 1)
        })
    }
}
function MicroOrder_CheckAllowAll(A) {
    if (mIsAllowAll == 0) {
        if (!$.Micro.IsEmpty(A)) {
            if (mCurUserId != A) {
                $.messager.alert("提示", "本用户不允许操作其它用户单据！", "error");
                return false
            }
        }
    }
    return true
}
function Micro_IsERP_ENT(A) {
    return (A == "ERP_ENT" ? true: false)
}
function Micro_getGlassThick(B) {
    var C = 0;
    for (var A = 0; A < mPublicGlList.length; A++) {
        if (B == mPublicGlList[A].glass) {
            C = mPublicGlList[A].thick
        }
    }
    return C
};