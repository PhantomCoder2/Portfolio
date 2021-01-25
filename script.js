var typed=new Typed(".typing",{
    strings:["Self Learner.","Developer.","Designer."],
    smartBackspace:true,
    loop:true,
    typeSpeed:100,
    backSpeed:60,
    cursorChar:'_'
});
var typed=new Typed(".typing2",{
    strings:["Self Learner.","Developer.","Designer."],
    smartBackspace:true,
    loop:true,
    typeSpeed:100,
    backSpeed:60,
    cursorChar:'|'
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    })
});