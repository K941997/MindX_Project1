
//!HEADER:

    var header_bottom = document.querySelector('.header_bottom');
    var origOffsetY = header_bottom.offsetTop;
    
    function onScroll(e){
        window.scrollY >= origOffsetY ? header_bottom.classList.add('sticky') : header_bottom.classList.remove('sticky');
    }

    document.addEventListener('scroll', onScroll);






//!MAIN:
    var slideIndex = 1;
    showSlides(slideIndex);

    //Nút Next/Previous:    
    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    //Image Control:
    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("main_slide");
        var dots = document.getElementsByClassName("main_dot");
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1){
            slideIndex = slides.length;
        }
        for ( i = 0 ; i < slides.length; i++){
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex-1].style.display = "block";
       
        dots[slideIndex-1].className += "active";

        //Slide Auto Animation:
        var myIndex = 0;
        carousel();
        function carousel() {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > slides.length) {myIndex = 1}    
                slides[myIndex-1].style.display = "block";  
                setTimeout(carousel, 6000);
        }   
      
    }


   





//!CHATBOX:
     /*Hàm Mở Form*/
    function moForm() {
        document.getElementById("myForm").style.display = "block";
    }

    /*Hàm Đóng Form*/
    function dongForm() {
        document.getElementById("myForm").style.display = "none";
    }

    var pageWrap = function() {
        $('#formPageWrap').submit(function(event) {
            var $input = $(event.target).find('#inputPageWrap');
            var message = $input.val();

            if (message != "") {
                var html = $('<li>').text(message);
                html.appendTo('#message');
                $input.val("");
                $('#message')[0].scrollIntoView(false);
            }
            return false;
        });

    var currentdate = new Date(); 
        var datetime =
            currentdate.getDate() + "/"
                +(currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        $('.time').html(datetime);
    }

    $(document).ready(pageWrap);










