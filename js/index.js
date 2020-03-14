$(function () {

    layui.use(['element', 'layer']);

    $(".layui-btn").click(function () {
        location.href = $(this).next().text();
    });

    $(".url").dblclick(function () {
        let url = $(this).text();
        if (copyText(url)) {
            toast(url+"\n已复制到剪切板", 1000)
        }
    });


    // ----------------------------------

    function toast(msg, time=2000, parse=false) {
        if (!parse) {
            msg = msg.replaceAll("&", "&amp;");
            msg = msg.replaceAll(">", "&gt;");
            msg = msg.replaceAll("<", "&lt;")
        }
        msg = msg.replaceAll("\n", "<br>");
        layer.msg(msg, {
            time: time
        });

    }

    function copyText(text) {
        let flag = false;
        let textarea = document.createElement("input");
        textarea.style.position = 'fixed';
        textarea.style.top = (document.documentElement.clientWidth / 2) + "px";
        textarea.style.left = (document.documentElement.clientHeight / 2) + "px";
        let currentFocus = document.activeElement;
        document.body.appendChild(textarea);
        textarea.value = text;
        textarea.focus();
        if (textarea.setSelectionRange)
            textarea.setSelectionRange(0, textarea.value.length);
        else
            textarea.select();
        try {
            flag = document.execCommand("copy");
        } catch (eo) {}
        document.body.removeChild(textarea);
        currentFocus.focus();
        return flag;
    }

    String.prototype.replaceAll = function(s1,s2){
        return this.replace(new RegExp(s1,"gm"),s2);
    };

});



