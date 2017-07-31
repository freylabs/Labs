 $(document).on('scroll', function() {
   if ($(document).scrollTop() > 700) {
     $('.mark').addClass('stuck');
   }
   else {
     $('.mark').removeClass('stuck');
   }
 });
