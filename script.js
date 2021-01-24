var typed=new Typed(".typing",{
    strings:["Self Learner.","Developer.","Designer."],
    smartBackspace:true,
    loop:true,
    typeSpeed:100,
    backSpeed:60,
    cursorChar:'_'
});
$(document).ready(function(){
    $(window).scroll(function(){
        $('navbar').toggleClass('sticky', $(this).scrollTop() > 20)
        /*if (this.scrollY>20){
            $(".navbar").css('background','#B22222');
            $(".navbar").css('padding','10px 0px');
        }
        else{
            $('.else').style.removeProperty('background');
        }
    })*/
})