function redirect1(){$(".form_3_input1").addClass("show").removeClass("hide"),$(".form_3_input2").addClass("hide").removeClass("show"),$(".form_3_input3").addClass("hide").removeClass("show"),$(".form_3_input4").addClass("hide").removeClass("show")}function redirect2(){$(".form_3_input1").addClass("hide").removeClass("show"),$(".form_3_input2").addClass("show").removeClass("hide"),$(".form_3_input3").addClass("hide").removeClass("show"),$(".form_3_input4").addClass("hide").removeClass("show")}function redirect3(){$(".form_3_input1").addClass("hide").removeClass("show"),$(".form_3_input2").addClass("hide").removeClass("show"),$(".form_3_input3").addClass("show").removeClass("hide"),$(".form_3_input4").addClass("hide").removeClass("show")}$(document).keypress(function(e){if($("#name").on("keydown",function(e){13==e.keyCode&&$("#nameNext").click()}),$("#email").on("keydown",function(e){13==e.keyCode&&$("#EmailNext").click()}),$("#phone").on("keydown",function(e){13==e.keyCode&&$("#PhoneNext").click()}),$("#drop_val").on("keydown",function(e){event.stopPropagation()}),$("#dropState").on("keydown",function(e){event.stopPropagation()}),$(".form_3_input4").hasClass("show")){if("0"==$("#drop_val").val())return void mdtoast("Please select an option",{type:"info"});$(".form_3_input4").removeClass("show"),$(".form_3_input1").removeClass("hide"),$("#inputNext").addClass("show"),$("#name").click(),$("#progressBar1").animate({width:"75%"},300)}}),$("[data-pin]").pin({allowSequential:!0,allowRepeat:!0,count:4}),$(document).ready(function(){$("select").on("change",function(){"0"!=this.value&&($("#progress8").removeAttr("hidden"),$("#progress4").hide(),$("#inputNext4").css("background","#FF9C40"),$("#progressBar8").animate({width:"75%"},300))}),$("#phone").focus(),$("#name").focus(),$("form input:radio").change(function(){"Others"==$(this).val()&&$("#SubmitButton").attr("class","showSubmit")})}),$("#name").focus(),jQuery(document).bind("pageshow",function(){jQuery($("#name")).focus()}),$("input").on("keyup",function(){$(this).scrollTop(0)});var errorMap=["Invalid number","Invalid country code","Too short","Too long","Invalid number"],errorMsg=document.querySelector("#phoneError"),input=document.querySelector("#phone"),iti=window.intlTelInput(input,{initialCountry:"auto",geoIpLookup:function(e){e("IN")},utilsScript:"https://di2c09dj6ldav.cloudfront.net/upsc/no1coaching/asset/js/utils.js?1585994360633"});$("#phone").on("input",function(e){if(input.value.trim())if(iti.isValidNumber()){var o="+"+iti.getSelectedCountryData().dialCode;console.log(o),$("#phoneCode").text(o),$("#inputNext2").css("background","#FF9C40"),phoneCheck()}else if("965"==iti.getSelectedCountryData().dialCode){o="+"+iti.getSelectedCountryData().dialCode;console.log(o),$("#phoneCode").text(o),phoneCheck()}else{input.classList.add("error");iti.getValidationError();errorMsg.innerHTML="Error. Enter valid number.",errorMsg.classList.remove("hide"),$("#inputNext2").css("background","#C4C4C4"),phoneError.innerHTML="Error. Enter valid number.",PhoneNext.classList.add("dissable")}});var phoneError=document.getElementById("phoneError"),PhoneNext=document.getElementById("inputNext2"),phone=document.getElementById("phone");function phoneCheck(){phone.value.length<6?(PhoneNext.classList.remove("show"),phoneError.innerHTML="Error. Please enter 10 digit mobile no.",PhoneNext.classList.add("dissable")):(phoneError.innerHTML="",PhoneNext.classList.remove("dissable"),PhoneNext.classList.add("show"))}input.addEventListener("change",reset),input.addEventListener("keyup",reset);input=document.querySelector("#phoneEdit");window.intlTelInput(input,{placeholderNumberType:"MOBILE",formatOnDisplay:!0,autoHideDialCode:!0,autoPlaceholder:"polite",separateDialCode:!0,utilsScript:"https://di2c09dj6ldav.cloudfront.net/upsc/no1coaching/asset/js/utils.js"}),$("#name").on("focus",function(){document.body.scrollTop=$(this).offset().top}),$("#email").on("focus",function(){document.body.scrollTop=$(this).offset().top}),$("#email").on("click",function(){document.body.scrollTop=$(this).offset().top}),$(window).on("load",function(){var e=window.location.href,o=new URL(e);console.log(o);var t=o.searchParams.get("source");$("#source").val(t.replace("%20"," ")),console.log("source_name"+$("#source").val())}),function(e,o,t,n,s){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=o.getElementsByTagName(t)[0],r=o.createElement(t);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-P8V7M4P",i.parentNode.insertBefore(r,i)}(window,document,"script","dataLayer");