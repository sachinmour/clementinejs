'use strict';

$(function () {
    var addButton = $('.btn-add');
    var deleteButton = $('.btn-delete');
    var clickNbr = $('#click-nbr');
    
    var apiUrl = 'http://localhost:3000/api/clicks';
    
    function updateClickCount () {
      $.ajax({
          url: apiUrl,
          type: 'GET',
          success: function(data) {
            clickNbr.text(data.clicks);
          }
      });
   }
   
   updateClickCount();
   
   addButton.on('click', function() {
       $.ajax({
            url: apiUrl,
            type: 'POST',
            success: updateClickCount
        });
   });
   
   deleteButton.on('click', function() {
       $.ajax({
            url: apiUrl,
            type: 'DELETE',
            success: updateClickCount
        });
   });
    
});