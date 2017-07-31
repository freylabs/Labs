 $(document).on('scroll', function() {
   if ($(document).scrollTop() > 550) {
     $('.mark').addClass('stuck');
   }
   else {
     $('.mark').removeClass('stuck');
   }
 });
