var remember = false; //Remember menu states, and restore them on next visit.
var contractall_default= true; //Should all submenus be contracted by default? (true or false)


function SDMenu(id) {
	if (!document.getElementById || !document.getElementsByTagName)
		return false;
	this.menu = document.getElementById(id);
	this.submenus = this.menu.getElementsByTagName("div");
	this.remember = true;
	this.speed = 5;
	this.markCurrent = true;
	this.oneSmOnly = false;
}


var menu, titles, submenus, arrows, bypixels;
var heights = new Array();

var n = navigator.userAgent;
if(/Opera/.test(n)) bypixels = 2;
else if(/Firefox/.test(n)) bypixels = 3;
else if(/MSIE/.test(n)) bypixels = 2;

/////DD added expandall() and contractall() functions/////

function slash_expandall(){
if (typeof menu!="undefined"){
	for(i=0; i<Math.max(titles.length, submenus.length); i++){
		titles[i].className="title";
		arrows[i].src = "images/expanded.gif";
		submenus[i].style.display="";
		submenus[i].style.height = heights[i]+"px";
	}
}
}

function slash_contractall(){
if (typeof menu!="undefined"){
	for(i=0; i<Math.max(titles.length, submenus.length); i++){
		titles[i].className="titlehidden";
		arrows[i].src = "images/collapsed.gif";
		submenus[i].style.display="none";
		submenus[i].style.height = 0;
	}
}
}


/////End DD added functions///////////////////////////////


function init(){
    menu = getElementsByClassName("sdmenu", "div", document)[0];
    titles = getElementsByClassName("title", "span", menu);
    submenus = getElementsByClassName("submenu", "div", menu);
    arrows = getElementsByClassName("arrow", "img", menu);
    for(i=0; i<Math.max(titles.length, submenus.length); i++) {
        titles[i].onclick = gomenu;
        arrows[i].onclick = gomenu;
        heights[i] = submenus[i].offsetHeight;
        submenus[i].style.height = submenus[i].offsetHeight+"px";
    }
    if(remember)
				restore()
		else if (contractall_default) //DD added code
				slash_contractall() //DD added code
}

function restore() {
    if(getcookie("menu") != null) {
        var hidden = getcookie("menu").split(",");
        for(var i in hidden) {
            titles[hidden[i]].className = "titlehidden";
            submenus[hidden[i]].style.height = "0px";
            submenus[hidden[i]].style.display = "none";
            arrows[hidden[i]].src = "images/collapsed.gif";
        }
    }
}

function gomenu(e) {
    if (!e)
        var e = window.event;
    var ce = (e.target) ? e.target : e.srcElement;
    var sm;
    for(var i in titles) {
        if(titles[i] == ce || arrows[i] == ce)
            sm = i;
    }
    if(parseInt(submenus[sm].style.height) > parseInt(heights[sm])-2) {
        hidemenu(sm);
    } else if(parseInt(submenus[sm].style.height) < 2) {
        titles[sm].className = "title";
        showmenu(sm);
    }
}

function hidemenu(sm) {
    var nr = submenus[sm].getElementsByTagName("a").length*bypixels;
    submenus[sm].style.height = (parseInt(submenus[sm].style.height)-nr)+"px";
    var to = setTimeout("hidemenu("+sm+")", 30);
    if(parseInt(submenus[sm].style.height) <= nr) {
        clearTimeout(to);
        submenus[sm].style.display = "none";
        submenus[sm].style.height = "0px";
        arrows[sm].src = "images/collapsed.gif";
        titles[sm].className = "titlehidden";
    }
}

function showmenu(sm) {
    var nr = submenus[sm].getElementsByTagName("a").length*bypixels;
    submenus[sm].style.display = "";
    submenus[sm].style.height = (parseInt(submenus[sm].style.height)+nr)+"px";
    var to = setTimeout("showmenu("+sm+")", 30);
    if(parseInt(submenus[sm].style.height) > (parseInt(heights[sm])-nr)) {
        clearTimeout(to);
        submenus[sm].style.height = heights[sm]+"px";
        arrows[sm].src = "images/expanded.gif";
    }
        
        
}

function store() {
    var hidden = new Array();
    for(var i in titles) {
        if(titles[i].className == "titlehidden")
            hidden.push(i);
    }
    putcookie("menu", hidden.join(","), 30);
}

function getElementsByClassName(strClassName, strTagName, oElm){
    var arrElements = (strTagName == "*" && document.all)? document.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];      
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }   
    }
    return (arrReturnElements)
}

function putcookie(c_name,value,expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate);
}

function getcookie(c_name) {
    if(document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if(c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";",c_start);
            if(c_end == -1)
                c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
}

window.onload = init;
if(remember) window.onunload = store;
