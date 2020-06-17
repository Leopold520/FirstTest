(function($) {
    $.Micro = {
        getQueryStr: function(paraName, turl) {
            var that = this;
            if (that.IsEmpty(turl)) {
                turl = location.href
            }
            var reg = new RegExp("(^|\\?|&)" + paraName + "=([^&]*)(\\s|&|$)", "i");
            if (reg.test(turl)) {
                return decodeURI(RegExp.$2.replace(/\+/g, " "))
            }
            return ""
        },
        consoleLog: function(str, tag) {
            var that = this;
            var consoleObjID = "Micro_Console";
            var consoleObj;
            if ($("#" + consoleObjID).length == 0) {
                consoleObj = $("<div></div>");
                consoleObj.appendTo("body");
                with(consoleObj) {
                    attr("id", consoleObjID);
                    css({
                        "background-color": "#FFF",
                        "font-size": "12px",
                        "color": "#000",
                        "padding": "3px",
                        "border": "1px solid #F00",
                        "position": "absolute",
                        "z-index": "99999",
                        "left": "0px",
                        "top": "0px",
                        "width": "90%",
                        "height": "30px",
                        "overflow": "auto"
                    })
                }
            } else {
                consoleObj = $("#" + consoleObjID)
            }
            if (tag == "" || !tag) {
                tag = "all"
            }
            if (tag == "curr") {
                consoleObj.html("")
            }
            var _html = consoleObj.html();
            if (_html != "") {
                _html += "<br>"
            }
            _html += str;
            consoleObj.append(_html)
        },
        Left: function(mainStr, lngLen) {
            var str = String(mainStr);
            if (lngLen > 0) {
                str = str.substring(0, lngLen)
            }
            return str
        },
        Right: function(mainStr, lngLen) {
            var str = String(mainStr);
            if (lngLen > 0) {
                if (str.length - lngLen >= 0 && str.length >= 0 && str.length - lngLen <= str.length) {
                    str = str.substring(str.length - lngLen, str.length)
                }
            }
            return str
        },
        Mid: function(mainStr, starnum, endnum) {
            var str = String(mainStr);
            if (str.length >= 0) {
                str = str.substr(starnum, endnum)
            }
            return str
        },
        isInArray: function(str, arr, caseTag, isReturn) {
            if (!$.isArray(arr)) {
                return false
            }
            var that = this;
            var _str = str;
            var arrStr;
            if (that.IsEmpty(isReturn)) {
                isReturn = 0
            }
            for (var i = 0; i < arr.length; i++) {
                arrStr = arr[i];
                if (caseTag == 0) {
                    _str = _str.toLowerCase();
                    arrStr = arrStr.toLowerCase()
                }
                if (_str == arrStr) {
                    if (isReturn == 0) {
                        return true
                    } else {
                        return i
                    }
                }
            }
            if (isReturn == 0) {
                return false
            } else {
                return - 1
            }
        },
        MergeArr: function(arr) {
            var that = this;
            var newArr = [];
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                newArr = newArr.concat(arr[i])
            }
            for (var i = 0; i < newArr.length; i++) {
                switch (that.getType(newArr[i])) {
                case "isObj":
                    result.push($.extend(true, {},
                    newArr[i]));
                    break;
                case "isArr":
                    result.push($.extend(true, [], newArr[i]));
                    break;
                default:
                    result.push(newArr[i])
                }
            }
            newArr = [];
            return result
        },
        IsEmpty: function(str) {
            var _retult = false;
            var _str = $.trim(str);
            if ((_str == "" && _str.length == 0) || _str == undefined || _str == null) {
                _retult = true
            }
            return _retult
        },
        removeArrValue: function(arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == val) {
                    arr.splice(i, 1);
                    break
                }
            }
        },
        ConvToNum: function(str) {
            var that = this;
            var val = $.trim(str);
            if ((val != "") && isNaN(val)) {
                while (isNaN(that.Left(val, 1)) && (that.Left(val, 1) != "-")) {
                    val = that.Mid(val, 1, val.length)
                }
                if (isNaN(val)) {
                    val = !isNaN(parseFloat(val)) ? parseFloat(val) : 0
                }
            }
            if (String(val) == "") {
                val = 0
            }
            return parseFloat(val)
        },
        MRound: function(x, num) {
            var result;
            if (!isNaN(x)) {
                result = Number(num) >= 0 ? (parseFloat((Math.round(x * Math.pow(10, num)) / Math.pow(10, num)).toFixed(num))) : x
            } else {
                result = x
            }
            return result
        },
        Mradian: function(angel, tag) {
            var that = this;
            if (that.IsEmpty(tag)) {
                tag = "j2h"
            }
            var result;
            if (tag == "j2h") {
                result = !isNaN(angel) ? (Number(angel) / 360 * 2 * Math.PI) : 0
            } else {
                result = !isNaN(angel) ? (Number(angel) * 360 / (2 * Math.PI)) : 0
            }
            return result
        },
        Oper_Add: function(arr, decimal) {
            var that = this;
            var result = 0;
            var val;
            if ($.isArray(arr)) {
                for (var i = 0; i < arr.length; i++) {
                    val = arr[i];
                    val = that.ConvToNum(val);
                    result += parseFloat(val)
                }
            } else {
                result = arr
            }
            if (!isNaN(decimal)) {
                result = that.MRound(result, decimal)
            }
            return result
        },
        Oper_Sub: function(arr1, arr2, decimal) {
            var that = this;
            var result = 0;
            if ($.isArray(arr1) && $.isArray(arr2)) {
                result += that.Oper_Add(arr1);
                result = result - that.Oper_Add(arr2)
            } else {
                result = null
            }
            if (!isNaN(decimal)) {
                result = that.MRound(result, decimal)
            }
            return result
        },
        Oper_Mul: function(arr, decimal) {
            var that = this;
            var result = 1;
            var val;
            if ($.isArray(arr)) {
                for (var i = 0; i < arr.length; i++) {
                    val = arr[i];
                    val = that.ConvToNum(val);
                    result *= parseFloat(val)
                }
            } else {
                result = arr
            }
            if (!isNaN(decimal)) {
                result = that.MRound(result, decimal)
            }
            return result
        },
        Oper_Div: function(arr1, arr2, decimal) {
            var that = this;
            var result, result2;
            if ($.isArray(arr1) && $.isArray(arr2)) {
                result = that.Oper_Mul(arr1);
                result2 = that.Oper_Mul(arr2);
                if (result2 == 0) {
                    result = null
                } else {
                    result = result / result2
                }
            } else {
                result = null
            }
            if (!isNaN(decimal)) {
                result = that.MRound(result, decimal)
            }
            return result
        },
        isHidden: function(tobj) {
            var that = this;
            var _result = false;
            if (tobj.length == 0) {
                _result = true
            } else {
                if (that.isInArray(tobj.css("display"), ["none", "hidden"])) {
                    _result = true
                }
            }
            return _result
        },
        Attr: function(tobj, attrName, attrVal, cssTag) {
            var that = this;
            if (!cssTag || cssTag == "") {
                cssTag = 0
            }
            tobj.attr(attrName, attrVal);
            if (cssTag == 0) {
                that.RemoveStyle(tobj, attrName)
            }
        },
        RemoveStyle: function(tobj, style) {
            if (tobj.attr("style") && (style != "")) {
                var styles = tobj.attr("style").split(";");
                var Nstyles = [];
                for (var i = 0; i < styles.length; i++) {
                    var _item = styles[i].split(":");
                    if (_item.length > 1) {
                        if ($.trim(_item[0]) != $.trim(style)) {
                            Nstyles.push([$.trim(_item[0]), ":", $.trim(_item[1])].join(""))
                        }
                    }
                }
                tobj.removeAttr("style");
                if (Nstyles.length > 0) {
                    tobj.attr("style", Nstyles.join(";"))
                }
                Nstyles.splice(0, Nstyles.length)
            }
        },
        SetID: function(area, tag, joinTag) {
            var that = this;
            if (that.IsEmpty(joinTag) && joinTag != "") {
                joinTag = "_"
            }
            function idName(tag) {
                var time = (new Date()).valueOf();
                var rand = Math.floor(10000 + Math.random() * (90000));
                var _id = [tag, time, rand].join(joinTag);
                return _id
            }
            var id = idName(tag);
            while (area.find("#" + id).length > 0) {
                id = idName(tag)
            }
            return id
        },
        Bind: function(TObj, _event, fn, Rebind) {
            var that = this;
            var broInfor = that.getBrowser_OS();
            var mtype = broInfor.mtype;
            $.each(TObj,
            function(_index) {
                var tobj = $(this);
                if (! (tobj && tobj.length) || that.IsEmpty(_event)) {
                    return true
                }
                if (that.IsEmpty(Rebind)) {
                    Rebind = 0
                }
                var objEvt = $._data(tobj[0], "events");
                var mobiletouchEvent = "";
                if (mtype != "PC") {
                    if (_event == "click") {
                        _event = "touchstart";
                        mobiletouchEvent = "event.preventDefault();"
                    }
                }
                var isExist = objEvt && objEvt[_event];
                if (that.IsEmpty(isExist) || (Rebind == 1)) {
                    eval("tobj[0].on" + _event + " = fn");
                    eval(mobiletouchEvent)
                }
            })
        },
        RefreshEasyUITab: function(outerTab, targetTab, turl) {
            var that = this;
            if (outerTab.length == 0) {
                return true
            }
            if (that.IsEmpty(targetTab)) {
                targetTab = outerTab.tabs("getSelected")
            }
            var url = $(targetTab.panel("options")).attr("href");
            if (!that.IsEmpty(turl)) {
                url = turl
            }
            outerTab.tabs("update", {
                tab: targetTab,
                options: {
                    href: url
                }
            });
            targetTab.panel("refresh")
        },
        HTMLToExcel: function(Tobjs, name, fileName) {
            var that = this;
            if (Tobjs.lengtgh == 0) {
                return true
            }
            var uri = "data:application/vnd.ms-excel;base64,";
            var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
            var base64 = function(s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            };
            var format = function(s, c) {
                return s.replace(/{(\w+)}/g,
                function(m, p) {
                    return c[p]
                })
            };
            var tableHTML = "";
            if (that.IsEmpty(fileName)) {
                fileName = "ToExcel"
            }
            $.each(Tobjs,
            function() {
                var tobj = $(this);
                var _tobj = tobj.clone().insertAfter(tobj);
                _tobj.hide();
                tableHTML += _tobj.html();
                _tobj.remove()
            });
            var ctx = {
                worksheet: name || "Worksheet",
                table: tableHTML
            };
            var Alink = $("<a></a>").appendTo("body")[0];
            $(Alink).hide();
            with(Alink) {
                href = (uri + base64(format(template, ctx)));
                download = fileName;
                click()
            }
            $(Alink).remove()
        },
        CanvasRender: function(tArea, svgHTML, Cwidth, Cheight) {
            var c = document.createElement("canvas");
            svgHTML = $.trim(svgHTML);
            c.width = Cwidth || 500;
            c.height = Cheight || 500;
            tArea.html("");
            tArea.get(0).appendChild(c);
            canvg(c, svgHTML, {
                log: true,
                renderCallback: function(dom) {}
            });
            tArea.html("<img src=" + c.toDataURL("image/png") + " />");
            return c
        },
        SaveCanvas: function(pCanvas, fileType) {
            var bRes = false;
            if (fileType == "PNG") {
                bRes = Canvas2Image.saveAsPNG(pCanvas)
            }
            if (fileType == "BMP") {
                bRes = Canvas2Image.saveAsBMP(pCanvas)
            }
            if (fileType == "JPEG") {
                bRes = Canvas2Image.saveAsJPEG(pCanvas)
            }
        },
        colorVal: function(_str) {
            var that = this;
            var colorHexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            var hex = function() {
                var that = _str;
                if (/^(rgb|RGB)/.test(that)) {
                    var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
                    var strHex = "#";
                    for (var i = 0; i < aColor.length; i++) {
                        var hex = Number(aColor[i]).toString(16);
                        if (hex === "0") {
                            hex += hex
                        }
                        strHex += hex
                    }
                    if (strHex.length !== 7) {
                        strHex = that
                    }
                    return strHex
                } else {
                    if (colorHexReg.test(that)) {
                        var aNum = that.replace(/#/, "").split("");
                        if (aNum.length === 6) {
                            return that
                        } else {
                            if (aNum.length === 3) {
                                var numHex = "#";
                                for (var i = 0; i < aNum.length; i += 1) {
                                    numHex += (aNum[i] + aNum[i])
                                }
                                return numHex
                            }
                        }
                    } else {
                        return that
                    }
                }
            };
            var rgb = function() {
                var sColor = _str.toLowerCase();
                if (sColor && colorHexReg.test(sColor)) {
                    if (sColor.length === 4) {
                        var sColorNew = "#";
                        for (var i = 1; i < 4; i += 1) {
                            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
                        }
                        sColor = sColorNew
                    }
                    var sColorChange = [];
                    for (var i = 1; i < 7; i += 2) {
                        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)))
                    }
                    return "RGB(" + sColorChange.join(",") + ")"
                } else {
                    return sColor
                }
            };
            return {
                hex: hex(),
                rgb: rgb()
            }
        },
        MergeTD: function(ttable, keepTD) {
            if (ttable && ttable.length > 0) {
                if ($.Micro.IsEmpty(keepTD)) {
                    keepTD = 0
                }
                var runTime = 1;
                var rowmergeTag = "rowmerge";
                var colmergeTag = "colmerge";
                with(ttable) {
                    var rowmerge;
                    while (find("td[" + rowmergeTag + "]").length > 0 && runTime < 200) {
                        var ttd = find("td[" + rowmergeTag + "]:first");
                        var ttr = ttd.parents("tr");
                        var ttrindex = ttr.index();
                        var ttdindex = ttd.index();
                        rowmerge = ttd.attr(rowmergeTag);
                        var mergeNum = 1;
                        for (var i = ttrindex + 1; i < find("tr").length; i++) {
                            var _item = find("tr").eq(i).find("td").eq(ttdindex);
                            if (_item.attr(rowmergeTag) == rowmerge) {
                                mergeNum++;
                                _item.attr("del", 1).removeAttr(rowmergeTag).hide()
                            } else {
                                break
                            }
                        }
                        ttd.removeAttr(rowmergeTag);
                        if (mergeNum > 0) {
                            ttd.attr("rowspan", mergeNum)
                        }
                        runTime++
                    }
                    if (keepTD == 0) {
                        find("td[del=1]").remove()
                    }
                }
            }
        },
        IntToZeroStr: function(num, len) {
            if (isNaN(num)) {
                return num
            }
            if (num.length > len) {
                return num
            }
            var _num = String(num);
            for (var i = 0; i < len - _num.length; i++) {
                _num = [0, _num].join("")
            }
            return _num
        },
        CheckDateTime: function(str) {
            var result = false;
            if ($.Micro.IsEmpty(str)) {
                return false
            }
            var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r != null) {
                var d = new Date(r[1], r[3] - 1, r[4]);
                result = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4])
            }
            if (!result) {
                var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
                var r = str.match(reg);
                if (r == null) {
                    return false
                }
                var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
                result = (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7])
            }
            return result
        },
        MergeObjs: function(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (typeof(arr[i]) == "object") {
                    $.each(arr[i],
                    function() {
                        newArr.push($(this))
                    })
                }
            }
            return newArr
        },
        getBrowser_OS: function() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var sPlatForm = navigator.platform;
            var appVersion = navigator.appVersion;
            var sMimeTypes = navigator.mimeTypes;
            var cpuClass = sUserAgent.indexOf("win64") > -1 || sUserAgent.indexOf("wow64") > -1 ? "x64": "x32";
            var _mime = function(option, value) {
                for (var mt in sMimeTypes) {
                    if (sMimeTypes[mt][option] == value) {
                        return true
                    }
                }
                return false
            };
            var mtype, broType, sysType;
            var mwidth, mheight;
            if (sUserAgent.match(/ipad/i) == "ipad") {
                mtype = "ipad"
            } else {
                if (sUserAgent.match(/iphone os/i) == "iphone os") {
                    mtype = "iphone os"
                } else {
                    if (sUserAgent.match(/midp/i) == "midp") {
                        mtype = "midp"
                    } else {
                        if (sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4") {
                            mtype = "rv:1.2.3.4"
                        } else {
                            if (sUserAgent.match(/ucweb/i) == "ucweb") {
                                mtype = "ucweb"
                            } else {
                                if (sUserAgent.match(/ucbrowser/i) == "ucbrowser") {
                                    mtype = "ucbrowser"
                                } else {
                                    if (sUserAgent.match(/android/i) == "android") {
                                        mtype = "android"
                                    } else {
                                        if (sUserAgent.match(/windows ce/i) == "windows ce") {
                                            mtype = "windows ce"
                                        } else {
                                            if (sUserAgent.match(/windows mobile/i) == "windows mobile") {
                                                mtype = "windows mobile"
                                            } else {
                                                mtype = "PC"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var isOpera = sUserAgent.indexOf("Opera".toLowerCase()) > -1;
            var isIE = sUserAgent.indexOf("compatible".toLowerCase()) > -1 && sUserAgent.indexOf("MSIE".toLowerCase()) > -1 && !isOpera;
            var isEdge = sUserAgent.indexOf("Windows NT 6.1; Trident/7.0;".toLowerCase()) > -1 && !isIE;
            var isFF = sUserAgent.indexOf("Firefox".toLowerCase()) > -1;
            var isSafari = sUserAgent.indexOf("Safari".toLowerCase()) > -1 && sUserAgent.indexOf("Chrome".toLowerCase()) == -1 && sUserAgent.indexOf("CriOS".toLowerCase()) == -1;
            var isChrome = (sUserAgent.indexOf("Chrome".toLowerCase()) > -1 || sUserAgent.indexOf("CriOS".toLowerCase()) > -1) && sUserAgent.indexOf("Safari".toLowerCase()) > -1;
            if (isOpera) {
                broType = "Opera"
            } else {
                if (isIE) {
                    broType = "IE"
                } else {
                    if (isEdge) {
                        broType = "Edge"
                    } else {
                        if (isFF) {
                            broType = "FF"
                        } else {
                            if (isSafari) {
                                broType = "Safari"
                            } else {
                                if (isChrome) {
                                    if (sUserAgent.indexOf("lbbrowser") > -1) {
                                        broType = "Liebao"
                                    } else {
                                        if (sUserAgent.indexOf("qqbrowser") > -1) {
                                            broType = "QQBro"
                                        } else {
                                            if (sUserAgent.indexOf("metasr") > -1) {
                                                broType = "Sogou"
                                            } else {
                                                if (sUserAgent.indexOf("bidubrowser") > -1) {
                                                    broType = "Baidu"
                                                } else {
                                                    if (sUserAgent.indexOf("360se") > -1 || _mime("type", "application/vnd.chromium.remoting-viewer")) {
                                                        broType = "360"
                                                    } else {
                                                        broType = "Chrome"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    broType = "Other"
                                }
                            }
                        }
                    }
                }
            }
            var Versions = function() {
                var u = sUserAgent;
                return {
                    trident: u.indexOf("Trident".toLowerCase()) > -1,
                    presto: u.indexOf("Presto".toLowerCase()) > -1,
                    webKit: u.indexOf("AppleWebKit".toLowerCase()) > -1,
                    gecko: u.indexOf("Gecko".toLowerCase()) > -1 && u.indexOf("KHTML".toLowerCase()) == -1,
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/i),
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
                    android: u.indexOf("Android".toLowerCase()) > -1 || u.indexOf("Adr.toLowerCase()") > -1,
                    iPhone: u.indexOf("iPhone.toLowerCase()") > -1,
                    iPad: u.indexOf("iPad.toLowerCase()") > -1,
                    webApp: u.indexOf("Safari".toLowerCase()) == -1,
                    weixin: u.indexOf("MicroMessenger".toLowerCase()) > -1,
                    qq: u.match(/\sQQ/i) == " qq"
                }
            };
            if ((sPlatForm == "Win32") || (sPlatForm == "Windows")) {
                if (sUserAgent.indexOf("Windows NT 5.0".toLowerCase()) > -1 || sUserAgent.indexOf("Windows 2000".toLowerCase()) > -1) {
                    sysType = "Win2000"
                } else {
                    if (sUserAgent.indexOf("Windows NT 5.1".toLowerCase()) > -1 || sUserAgent.indexOf("Windows XP".toLowerCase()) > -1) {
                        sysType = "WinXP"
                    } else {
                        if (sUserAgent.indexOf("Windows NT 5.2".toLowerCase()) > -1 || sUserAgent.indexOf("Windows 2003".toLowerCase()) > -1) {
                            sysType = "Win2003"
                        } else {
                            if (sUserAgent.indexOf("Windows NT 6.0".toLowerCase()) > -1 || sUserAgent.indexOf("Windows Vista".toLowerCase()) > -1) {
                                sysType = "WinVista"
                            } else {
                                if (sUserAgent.indexOf("Windows NT 6.1".toLowerCase()) > -1 || sUserAgent.indexOf("Windows 7".toLowerCase()) > -1) {
                                    sysType = "Win7"
                                } else {
                                    if (sUserAgent.indexOf("Windows NT 6.2".toLowerCase()) > -1 || sUserAgent.indexOf("Windows NT 6.3".toLowerCase()) > -1 || sUserAgent.indexOf("Windows 8") > -1) {
                                        sysType = "Win8"
                                    } else {
                                        if (sUserAgent.indexOf("Windows NT 10.0".toLowerCase()) > -1 || sUserAgent.indexOf("Windows 10".toLowerCase()) > -1) {
                                            sysType = "Win10"
                                        } else {
                                            sysType = "otherWin"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if ((sPlatForm == "Mac68K") || (sPlatForm == "MacPPC") || (sPlatForm == "Macintosh") || (sPlatForm == "MacIntel") || (sPlatForm == "iPad")) {
                    sysType = "Mac"
                } else {
                    if (sPlatForm == "X11") {
                        sysType = "Unix"
                    } else {
                        if (String(sPlatForm).indexOf("Linux") > -1) {
                            sysType = "Linux"
                        } else {
                            sysType = "other"
                        }
                    }
                }
            }
            mwidth = window.screen.width;
            mheight = window.screen.height;
            return {
                mtype: mtype,
                broType: broType,
                sysType: sysType,
                Versions: Versions(),
                cpuClass: cpuClass,
                mwidth: mwidth,
                mheight: mheight
            }
        },
        smalltoBIG: function(num) {
            var fraction = ["角", "分"];
            var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
            var unit = [["元", "万", "亿"], ["", "拾", "佰", "仟"]];
            var head = num < 0 ? "欠": "";
            num = Math.abs(num);
            var s = "";
            for (var i = 0; i < fraction.length; i++) {
                s += (digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "")
            }
            s = s || "整";
            num = Math.floor(num);
            for (var i = 0; i < unit[0].length && num > 0; i++) {
                var p = "";
                for (var j = 0; j < unit[1].length && num > 0; j++) {
                    p = digit[num % 10] + unit[1][j] + p;
                    num = Math.floor(num / 10)
                }
                s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s
            }
            return head + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整")
        },
        getType: function(o) {
            try {
                var gettype = Object.prototype.toString;
                switch (gettype.call(o)) {
                case "[object String]":
                    return "isStr";
                case "[object Number]":
                    return "isNum";
                case "[object Boolean]":
                    return "isBool";
                case "[object Object]":
                    return "isObj";
                case "[object Array]":
                    return "isArr";
                case "[object Null]":
                    return "isNULL";
                case "[[object Undefined]]":
                    return "isUndef";
                case "[[object Function]]":
                    return "isFun";
                case "[object Document]":
                case "[object HTMLDocument]":
                    return "isDoc";
                default:
                    return "Unknown"
                }
            } catch(e) {
                return "Unknown"
            }
        },
        fullScreen: function() {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen()
            } else {
                if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen()
                } else {
                    if (docElm.webkitRequestFullScreen) {
                        docElm.webkitRequestFullScreen()
                    } else {
                        if (elem.msRequestFullscreen) {
                            elem.msRequestFullscreen()
                        } else {
                            $.messager.alert("该浏览器不支持全屏功能")
                        }
                    }
                }
            }
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else {
                        if (document.msExitFullscreen) {
                            document.msExitFullscreen()
                        }
                    }
                }
            }
        },
        CurrTime: function(randLen) {
            var lessTenNum = function(num) {
                var _num = Number(num);
                _num = _num < 10 ? [0, _num].join("") : _num;
                return _num
            };
            var currTime = new Date();
            var year = currTime.getFullYear();
            var month = lessTenNum(currTime.getMonth() + 1);
            var date = lessTenNum(currTime.getDate());
            var hour = lessTenNum(currTime.getHours());
            var minu = lessTenNum(currTime.getMinutes());
            var seco = lessTenNum(currTime.getSeconds());
            var misec = lessTenNum(currTime.getMilliseconds());
            var timeStr = [year, month, date, hour, minu, seco, misec].join("");
            if (!isNaN(randLen)) {
                var Rand = Math.random() * 10;
                if (Rand == 0) {
                    Rand = 1
                } else {
                    if (Rand == 10) {
                        Rand = 9
                    }
                }
                var num = (Math.floor(Rand * Math.pow(10, (randLen - 1)))).toString();
                var currLen = num.length;
                for (var i = 0; i < randLen - currLen; i++) {
                    num = num + "0".toString()
                }
                timeStr = timeStr + num
            }
            return timeStr
        },
        STA_CurrTime: function(tag) {
            var lessTenNum = function(num) {
                var _num = Number(num);
                _num = _num < 10 ? [0, _num].join("") : _num;
                return _num
            };
            var currTime = new Date();
            var year = currTime.getFullYear();
            var month = lessTenNum(currTime.getMonth() + 1);
            var date = lessTenNum(currTime.getDate());
            var hour = lessTenNum(currTime.getHours());
            var minu = lessTenNum(currTime.getMinutes());
            var seco = lessTenNum(currTime.getSeconds());
            var misec = lessTenNum(currTime.getMilliseconds());
            var timeStr = [year, month, date].join("-");
            if (tag == "long") {
                timeStr += " " + [hour, minu, seco].join(":")
            }
            return timeStr
        },
        getRootPath: function() {
            var curWwwPath = window.document.location.href;
            var paths = curWwwPath.split("/");
            paths.pop();
            var currRoot = paths.join("/") + "/";
            var pathName = window.document.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            var hostPath = curWwwPath.substring(0, pos);
            var proName = pathName.substring(0, pathName.substr(1).indexOf("/") + 1);
            return {
                currPath: curWwwPath,
                pathName: pathName,
                currRoot: currRoot,
                hostPath: hostPath,
                proName: proName
            }
        },
        IsNaN: function(value) {
            return typeof value === "number" && isNaN(value)
        },
        getScript: function(url, async, success) {
            var that = this;
            async = async || false;
            $.ajax({
                url: url,
                async: async,
                type: "GET",
                success: success,
                dataType: "script"
            })
        },
        setCookie: function(c_name, value, expiretime) {
            var getsec = function(str) {
                var str1 = str.substring(1, str.length) * 1;
                var str2 = str.substring(0, 1);
                if (str2 == "s") {
                    return str1 * 1000
                } else {
                    if (str2 == "h") {
                        return str1 * 60 * 60 * 1000
                    } else {
                        if (str2 == "d") {
                            return str1 * 24 * 60 * 60 * 1000
                        }
                    }
                }
            };
            var strsec = getsec(expiretime);
            var exp = new Date();
            exp.setTime(exp.getTime() + strsec * 1);
            document.cookie = c_name + "=" + escape(value) + ";expires=" + exp.toGMTString()
        },
        getCookie: function(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length
                    }
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        },
        delCookie: function(c_name) {
            var that = this;
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = that.getCookie(c_name);
            if (cval != null) {
                document.cookie = c_name + "=" + cval + ";expires=" + exp.toGMTString()
            }
        },
        sortByArr: function(arr, sort) {
            var that = this;
            if (sort == undefined) {
                sort = 1
            } else {
                sort = (sort == "asc") ? 1 : -1
            }
            return function(a, b) {
                for (var i = 0; i < arr.length; i++) {
                    var attr = arr[i].key;
                    var attrType = arr[i].keyType;
                    if (a[attr] != b[attr]) {
                        if (attrType == "Number") {
                            if (Number(a[attr]) > Number(b[attr])) {
                                return sort * 1
                            } else {
                                return sort * -1
                            }
                        } else {
                            if (a[attr] > b[attr]) {
                                return sort * 1
                            } else {
                                return sort * -1
                            }
                        }
                    }
                }
            }
        },
        SetObjCenter: function(Tobj, tag) {
            switch (tag) {
            case 1:
                with(Tobj) {
                    css("position", "absolute");
                    css("left", "50%");
                    css("top", "50%");
                    css("margin-top", (0 - parseInt(height())) / 2 + "px");
                    css("margin-left", (0 - parseInt(width())) / 2 + "px")
                }
                break;
            case 2:
                with(Tobj) {
                    css("position", "absolute");
                    css("left", ($(window).width() - width()) / 2 + "px");
                    css("top", ($(window).height() - height()) / 2 + $(document).scrollTop() + "px")
                }
                break
            }
        },
        textToSound: function(str, tool) {
            var that = this;
            if (that.IsEmpty(str)) {
                return
            }
            tool = tool || "google";
            try {
                switch (tool) {
                case "google":
                    var u = new SpeechSynthesisUtterance();
                    u.text = str;
                    u.lang = "zh";
                    u.rate = "1.2";
                    speechSynthesis.speak(u);
                    break;
                case "baidu":
                    var zhText = str;
                    zhText = encodeURI(zhText);
                    if ($("#baiduSound").length > 0) {
                        $("#baiduSound").remove()
                    }
                    var audio = '<audio id=\'baiduSound\' autoplay="autoplay"><source src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=4&text=' + zhText + '" type="audio/mpeg"><embed height="0" width="0" src="http://tts.baidu.com/text2audio?text=' + zhText + '"></audio>';
                    $("body").append(audio)
                }
            } catch(e) {}
        }
    }
})(jQuery); (function(H, E, K) {
    var I = H([]),
    A = H.resize = H.extend(H.resize, {}),
    F,
    D = "setTimeout",
    C = "resize",
    L = C + "-special-event",
    G = "delay",
    J = "throttleWindow";
    A[G] = 250;
    A[J] = true;
    H.event.special[C] = {
        setup: function() {
            if (!A[J] && this[D]) {
                return false
            }
            var M = H(this);
            I = I.add(M);
            H.data(this, L, {
                w: M.width(),
                h: M.height()
            });
            if (I.length === 1) {
                B()
            }
        },
        teardown: function() {
            if (!A[J] && this[D]) {
                return false
            }
            var M = H(this);
            I = I.not(M);
            M.removeData(L);
            if (!I.length) {
                clearTimeout(F)
            }
        },
        add: function(N) {
            if (!A[J] && this[D]) {
                return false
            }
            var M;
            function O(Q, R, S) {
                var T = H(this),
                P = H.data(this, L);
                P.w = R !== K ? R: T.width();
                P.h = S !== K ? S: T.height();
                M.apply(this, arguments)
            }
            if (H.isFunction(N)) {
                M = N;
                return O
            } else {
                M = N.handler;
                N.handler = O
            }
        }
    };
    function B() {
        F = E[D](function() {
            I.each(function() {
                var M = H(this),
                P = M.width(),
                O = M.height(),
                N = H.data(this, L);
                if (P !== N.w || O !== N.h) {
                    M.trigger(C, [N.w = P, N.h = O])
                }
            });
            B()
        },
        A[G])
    }
})(jQuery, this);