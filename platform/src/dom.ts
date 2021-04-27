export function getOption<T>(el:HTMLElement):T|object{
    let code = el.getAttribute("option");
    if(code){
        return parserObj(code)
    }
    return {};
}

export function parserObj<T>(code:string):T{
    return eval("("+code+")");
}

function getDefaultControllerName(){
    return window.location.pathname.replace(/.html$/,".js")
}
export function getControllerName(el:HTMLElement):string|null{
    var controller = el.getAttribute("controller");
    if(controller===""){
        // 有 controller 属性，但未配置值或值===""，则返回 html 文件名
        return "./"+window.location.pathname.split("/").slice(-1)[0].split(".").slice(0,-1)[0]+".js"
    }
    else if(controller){
        return controller
    }else{
        return null;
    }
}