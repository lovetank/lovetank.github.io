// //https://sheetsu.com/apis/v1.0/136fd545dc07
//
// (function ($) {
//       $.fn.serializeFormJSON = function () {
//         var o = {};
//         var a = this.serializeArray();
//         $.each(a, function () {
//           if (o[this.name]) {
//             if (!o[this.name].push) { o[this.name] = [o[this.name]]; }
//             o[this.name].push(this.value || '');
//           } else { o[this.name] = this.value || ''; }
//         });
//         return o;
//       };
//     })(jQuery);
//
//     $('#contact-form').submit(function(e) {
//       // prevent default submiting form
//       e.preventDefault();
//
//       // serialize data to JSON
//       var data = $('#contact-form').serializeFormJSON();
//
//       $.ajax({
//         url: 'https://sheetsu.com/apis/v1.0/136fd545dc07',
//         data: data,
//         dataType: 'json',
//         type: 'POST',
//
//         // place for handling successful response
//         // showing (redirecting to) something like /thanks.html
//         // page could be a good idea
//         success: function(data) {
//           // window.location.href = 'thank_you.html';
//           alert('It worked!');
//         },
//
//         // handling error response
//         error: function(data) {
//           console.log(data);
//         }
//       });
//
//       return false;
//     });
