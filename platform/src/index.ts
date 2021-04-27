

import "../../loader/src"

import {Loading} from "../../loading/src"
import {getOption,getControllerName} from "./dom"


type Global = {
    requirejs?:(...args:any[])=>void
    require?:(...args:any[])=>void
}&Window&typeof globalThis

type BodyOption = {
    platform:""
}

// 支持requirejs
(function(){
    const global:Global = window;
    global.requirejs = global.requirejs || function(...args:any[]):void{
        return global.require(...args);
    }
})();

let starterState = false;

export function getRootController(){
    const controllerName = getControllerName(document.body);
    if(controllerName===null){return Promise.resolve(null)}
    return System.import(controllerName)
}

export function stopAutoStater(){
    starterState = true;
}

export function start(option:any){
    if(starterState){return;}
    starterState = true;
    
    // 旧版
    if(!option.version){
        const hidLoading = Loading.create(document.body)
        setTimeout(hidLoading,1000)
    }

    // 新版

}