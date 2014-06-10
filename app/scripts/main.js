jQuery(document).ready(function($){
  'use strict';
  $('.initial').on('click', '.button.vote', function(e){
    e.preventDefault();
    var $this = $(this), windowOptions = {}, windowOptionStr = '';
    windowOptions.width = 320;
    windowOptions.height = 568;
    windowOptions.left = Math.round(( $(window).width() - windowOptions.width ) / 2);
    windowOptions.top = Math.round(( $(window).height() - windowOptions.height ) / 2);
    windowOptionStr = getWindowOptionStrFromObj(windowOptions);
    window.open($this.attr('href'), $this.attr('target'), windowOptionStr);
    $this.parents('.initial').first().toggle();
    $('.results').first().toggle();
    $('#cta-title, #respect-your-face').each(function(){
      $(this).toggleClass('hide');
    });
  });

  function getWindowOptionStrFromObj(obj){
    var result = '';
    for (var key in obj){
      if( obj.hasOwnProperty( key ) ) {
        result += key + '=' + obj[key] + ',';
      }
    }
    return result;
  }
});
