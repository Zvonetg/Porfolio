window.addEventListener("scroll",function(){
    this.document.getElementById("logo").style.height="3em";
    this.document.getElementById("logo").style.width="3em";
    if((document.documentElement.clientWidth)<600){       
        this.document.getElementById("logo").style.marginLeft="40%";    
    }
    else{
        this.document.getElementById("logo").style.margin="auto 0%";
    }
    this.document.getElementById("header").style.height="10vh";
    if((document.documentElement.clientWidth)>600 && (document.documentElement.clientWidth)<1000){       
    this.document.getElementById("header").style.height="15vh"; }   
    this.document.getElementById("header").style.alignItems="flex-start";
    this.document.getElementById("header").style.backgroundColor="rgba(0,0,0,0.3)";
    this.document.getElementById("menu").style.marginTop="2%";
});

// document.getElementById("logo").innerHTML
document.getElementById("logo").addEventListener("click", function(){
    if((document.documentElement.clientWidth)<600){   
        document.getElementById("logo").style.display="none";   
        document.getElementById("menu").style.width="fit-content";       
        document.getElementById("menu").style.margin="auto";           
        document.getElementById("click1").style.backgroundColor="black";
        document.getElementById("click1").style.display="flex";
        document.getElementById("click1").style.width="fit-content";
        document.getElementById("click1").style.fontSize="88%";        
        document.getElementById("click1").style.backgroundColor="transparent";
        document.getElementById("click1").style.margin="auto"; 
        
        document.getElementById("menu").addEventListener("click", function(){
            document.getElementById("logo").style.display="flex";            
            document.getElementById("click1").style.display="none";
            
    });        
    }
    });
// document.getElementsByClassName("m").addEventListener("click", function(){
//     document.getElementById("logo").style.display="flex";            
//     document.getElementById("menu1").style.display="none";
// });

document.getElementById("mail").onblur=validateMail;
function validateMail(e){
    var mail=document.getElementById("mail").value;
    if(/@/.test(RegExp(mail))&& mail.length>10)
    {
     document.getElementById("mail").style.border='1px solid transparent';        
     return true;
    }
    else
    document.getElementById("mail").style.border='1px solid red';
}
document.getElementById("predmet").onblur=validatePredmet;
function validatePredmet(e){
    var predmet=document.getElementById("predmet").value;
    if(predmet.length<5 && !/[a-zA-Z]/.test(RegExp(predmet))){
     document.getElementById("predmet").style.border='1px solid red';
     return false;
    }
    else{
    document.getElementById("predmet").style.border='1px solid transparent';            
    return true;
}
}
document.getElementById("sadrzaj").onblur=validateSadrzaj;
function validateSadrzaj(e){
    var sadrzaj=document.getElementById("sadrzaj").value;
    if(sadrzaj.length<5 && !/ /.test(RegExp(sadrzaj))){
     document.getElementById("sadrzaj").style.border='1px solid red';
     return false;
    }
    else{
    document.getElementById("sadrzaj").style.border='1px solid transparent';            
    return true;
}}

