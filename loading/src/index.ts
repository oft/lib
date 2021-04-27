function createSVG(){
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute("style","margin:auto;background:#fff;display:block;");
    svg.setAttribute("viewBox","0 0 100 100");
    svg.setAttribute("width","58px");
    svg.setAttribute("height","58px");
    svg.setAttribute("preserveAspectRatio","xMidYMid");
    svg.innerHTML = `
    <g transform="translate(50 50)">  <g transform="translate(-19 -19) scale(0.6)"> <g>
    <animateTransform attributeName="transform" type="rotate" values="0;36" keyTimes="0;1" dur="0.25510204081632654s" begin="0s" repeatCount="indefinite"></animateTransform><path d="M30.775639009962486 22.290357635723915 L41.382240727760696 32.89695935352213 L32.89695935352213 41.382240727760696 L22.290357635723915 30.775639009962482 A38 38 0 0 1 11.796071485204802 36.122744877928895 L11.796071485204802 36.122744877928895 L14.142588460808266 50.93806998685596 L2.2903283736666054 52.81528356733873 L-0.05618860193685889 37.99995845841167 A38 38 0 0 1 -11.689194413177665 36.15747134370621 L-11.689194413177665 36.15747134370621 L-18.499051909270865 49.52256920653173 L-29.19113019953129 44.07468320965717 L-22.38127270343809 30.709585346831652 A38 38 0 0 1 -30.709585346831645 22.381272703438093 L-30.709585346831645 22.381272703438093 L-44.07468320965716 29.191130199531298 L-49.52256920653173 18.499051909270875 L-36.15747134370621 11.689194413177672 A38 38 0 0 1 -37.99995845841167 0.05618860193686587 L-37.99995845841167 0.05618860193686587 L-52.81528356733873 -2.290328373666595 L-50.93806998685596 -14.142588460808255 L-36.122744877928895 -11.796071485204795 A38 38 0 0 1 -30.77563900996249 -22.290357635723904 L-30.77563900996249 -22.290357635723904 L-41.3822407277607 -32.896959353522114 L-32.89695935352213 -41.38224072776069 L-22.290357635723915 -30.775639009962482 A38 38 0 0 1 -11.796071485204807 -36.122744877928895 L-11.796071485204807 -36.122744877928895 L-14.142588460808273 -50.93806998685596 L-2.290328373666611 -52.81528356733873 L0.05618860193685424 -37.99995845841167 A38 38 0 0 1 11.689194413177662 -36.15747134370621 L11.689194413177662 -36.15747134370621 L18.49905190927086 -49.52256920653173 L29.19113019953128 -44.074683209657174 L22.381272703438082 -30.709585346831656 A38 38 0 0 1 30.70958534683164 -22.381272703438096 L30.70958534683164 -22.381272703438096 L44.07468320965715 -29.1911301995313 L49.52256920653173 -18.499051909270882 L36.15747134370621 -11.689194413177676 A38 38 0 0 1 37.99995845841167 -0.056188601936870516 L37.99995845841167 -0.056188601936870516 L52.81528356733873 2.290328373666588 L50.93806998685596 14.142588460808248 L36.122744877928895 11.79607148520479 A38 38 0 0 1 30.77563900996249 22.2903576357239 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#6093f4"></path></g></g> <g transform="translate(19 19) scale(0.6)"> <g>
    <animateTransform attributeName="transform" type="rotate" values="36;0" keyTimes="0;1" dur="0.25510204081632654s" begin="-0.12755102040816327s" repeatCount="indefinite"></animateTransform><path d="M-30.77563900996249 -22.290357635723904 L-41.3822407277607 -32.896959353522114 L-32.89695935352213 -41.38224072776069 L-22.290357635723915 -30.775639009962482 A38 38 0 0 1 -11.796071485204807 -36.122744877928895 L-11.796071485204807 -36.122744877928895 L-14.142588460808273 -50.93806998685596 L-2.290328373666611 -52.81528356733873 L0.05618860193685424 -37.99995845841167 A38 38 0 0 1 11.689194413177662 -36.15747134370621 L11.689194413177662 -36.15747134370621 L18.49905190927086 -49.52256920653173 L29.19113019953128 -44.074683209657174 L22.381272703438082 -30.709585346831656 A38 38 0 0 1 30.70958534683164 -22.381272703438096 L30.70958534683164 -22.381272703438096 L44.07468320965715 -29.1911301995313 L49.52256920653173 -18.499051909270882 L36.15747134370621 -11.689194413177676 A38 38 0 0 1 37.99995845841167 -0.056188601936870516 L37.99995845841167 -0.056188601936870516 L52.81528356733873 2.290328373666588 L50.93806998685596 14.142588460808248 L36.122744877928895 11.79607148520479 A38 38 0 0 1 30.77563900996249 22.2903576357239 L30.77563900996249 22.2903576357239 L41.3822407277607 32.89695935352211 L32.896959353522135 41.38224072776069 L22.290357635723918 30.775639009962482 A38 38 0 0 1 11.796071485204811 36.12274487792889 L11.796071485204811 36.12274487792889 L14.142588460808279 50.93806998685595 L2.2903283736666187 52.81528356733873 L-0.05618860193684958 37.99995845841167 A38 38 0 0 1 -11.68919441317772 36.15747134370619 L-11.68919441317772 36.15747134370619 L-18.49905190927093 49.5225692065317 L-29.191130199531287 44.07468320965717 L-22.38127270343808 30.709585346831656 A38 38 0 0 1 -30.70958534683168 22.381272703438047 L-30.70958534683168 22.381272703438047 L-44.0746832096572 29.19113019953124 L-49.522569206531735 18.499051909270875 L-36.15747134370621 11.68919441317768 A38 38 0 0 1 -37.99995845841167 0.05618860193680767 L-37.99995845841167 0.05618860193680767 L-52.81528356733873 -2.290328373666663 L-50.93806998685596 -14.142588460808257 L-36.122744877928895 -11.796071485204786 A38 38 0 0 1 -30.775639009962457 -22.29035763572395 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#61713c"></path></g></g></g>
    </svg>
    `
    return svg;
}

function createInner(){
    const inner = document.createElement("div");
    inner.setAttribute("style",`
    transition:opacity 1s;opacity:0;width:58px;height:58px;position:absolute;
    left:50%;top:50%;margin-left:-29px;margin-top:-29px;
    `)
    return inner;
}
function createContainer(){
    let box = document.createElement("div")
    box.className="loadingbox";
    box.setAttribute("style",`transition:opacity 0.5s;background-color:#fff;position:absolute;left:0;top:0;bottom:0;right:0;`)
    return box;
}
function createStyle(){
    const style = document.createElement("style");
    style.innerHTML = `
    .loading{ overflow: hidden; }
    .loading .loadingbox{ opacity:1; }`;
    return style;
}
export class Loading{
    static create(parent:HTMLElement){
        let load = new Loading(parent)
        return ()=>{
            load.hide().then(()=>load.destory())
        }
    }
    static styleIsLoaded = false;
    static style = createStyle();

    container = createContainer()
    inner = createInner()
    svg = createSVG()
    
    parent:HTMLElement|null
    parentOldPostion=""
    
    setParent(parent?:HTMLElement){
        if(parent){
            this.parent = parent;
            this.parentOldPostion = parent.style.position;
        }
    }

    constructor(parent?:HTMLElement){
        this.inner.appendChild(this.svg);
        this.container.appendChild(this.inner);
        this.show(parent);
    }

    show(parent?:HTMLElement){
        parent && this.setParent(parent);
        if(!this.parent){return;}
        if(this.parent.tagName === "BODY"){
            this.container.style.position = "fixed";
            this.inner.style.position = "fixed";
        }
        this.parent.style.position = "relative";
        this.parent.classList.add("loading");
        this.parent.appendChild(this.container);
        return new Promise((resolve,reject)=>
            setTimeout(()=>{
                this.inner.style.opacity = "1";
                resolve(undefined);
            },0)
        )
    }

    hide(){
        if(!this.parent){return;}
        this.container.style.opacity = "0";
        return new Promise((resolve,reject)=>
            setTimeout(()=>{
                this.parent.style.position = this.parentOldPostion;
                this.parent.classList.remove("loading");
                resolve(undefined);
            },500)
        )
    }
    hideAndDestory(){
        this.hide().then(()=>{
            this.destory();
        })
    }
    static destory(){
        this.style.remove();
        this.style = null;
    }
    destory(){
        this.container.remove();
        this.container = null;
        this.parentOldPostion = null;
        this.parent = null;
    }
    loadStyle(){
        if(!Loading.styleIsLoaded){
            document.body.appendChild(Loading.style);
            Loading.styleIsLoaded=true;
        }
    }
}
