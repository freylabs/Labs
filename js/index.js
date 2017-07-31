 $(document).on('scroll', function() {
   if ($(document).scrollTop() > 600) {
     $('.mark').addClass('stuck');
   }
   else {
     $('.mark').removeClass('stuck');
   }
 });
