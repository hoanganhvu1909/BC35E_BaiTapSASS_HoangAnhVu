



function changeHeader(){
   if(window.scrollY>0 ){
    document.getElementById("header").classList.add("scroll-header");
    document.getElementById("logo").style.visibility="hidden";
   }else{
    document.getElementById("header").classList.remove("scroll-header");
    document.getElementById("logo").style.visibility="visible";
   }
    
}
window.onscroll = changeHeader;
