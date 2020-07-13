(function($) {
  $(document).ready(function() {
    
    // Build the structure outside of the DOM
    var $layerWrap = $('<div/>').attr('id', 'layers'),
        layers = 5,
        $layer,
        stars,
        $star;
    
    while (layers) {
      $layer = $('<div/>').addClass('layer layer-'+ layers);
      stars = 45;
      
      // Stick a bunch of svg stars on each layer
      while (stars) {
        $star = $('<span/>').addClass('star');
        //TODO : would it be more efficient to xlink it?
        $star.html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M1.4834,1.7813c-.1812,0-.4927-.2789-.7295-.5992C.478.81.2847.3564.439.2422.5962.126.9712.4458,1.2461.8179s.4692.8257.3149.94h0A.1256.1256,0,0,1,1.4834,1.7813ZM.5171.2686A.0793.0793,0,0,0,.4688.2822C.3716.3545.481.73.7939,1.1528s.6377.6368.7374.565h0C1.6284,1.645,1.519,1.27,1.2061.8472.9331.479.65.2686.5171.2686Z" transform="translate(-0.0576 -0.1996)"/><path d="M.5435,1.8008A.1255.1255,0,0,1,.4707,1.78h0C.3975,1.7305.3892,1.605.4468,1.4175a2.3428,2.3428,0,0,1,.3-.59A1.4909,1.4909,0,0,1,1.4194.2031a.1433.1433,0,0,1,.11.0171c.0732.0493.0815.1748.0239.3623a2.3428,2.3428,0,0,1-.3.59,1.4909,1.4909,0,0,1-.6728.6245A.2082.2082,0,0,1,.5435,1.8008ZM1.4565.249a.1348.1348,0,0,0-.0273.003A1.4776,1.4776,0,0,0,.7876.856a2.2886,2.2886,0,0,0-.293.5766c-.0483.1568-.0468.2715.0044.3062h0a.0961.0961,0,0,0,.0718.0092,1.4776,1.4776,0,0,0,.6416-.604,2.2886,2.2886,0,0,0,.293-.5766C1.5537.4106,1.5522.2959,1.501.2612A.08.08,0,0,0,1.4565.249Z" transform="translate(-0.0576 -0.1996)"/><path d="M1,1.3066C.5366,1.3066.0576,1.1919.0576,1S.5366.6934,1,.6934,1.9424.8081,1.9424,1,1.4634,1.3066,1,1.3066ZM1,.7432C.4741.7432.1074.8784.1074,1s.3667.2568.8926.2568S1.8926,1.1216,1.8926,1,1.5259.7432,1,.7432Z" transform="translate(-0.0576 -0.1996)"/></g><g id="Layer_3" data-name="Layer 3"><circle cx="0.9424" cy="0.8004" r="0.192"/><path d="M1,1.2168A.2168.2168,0,1,1,1.2168,1,.217.217,0,0,1,1,1.2168ZM1,.833A.167.167,0,1,0,1.167,1,.1676.1676,0,0,0,1,.833Z" transform="translate(-0.0576 -0.1996)"/></svg>');
        
        // Randomise the position, size, and opacity (colour defined in CSS)
        $star.css({
          left: randomInt(1, 100) +'%',
          top: randomInt(1, 100) +'%',
          transform: 'scale('+ randomNum(0, 15) +')',
          opacity: randomNum(0.6, 1)
        });
        
        $layer.append($star);
        stars--;
      }
      $layerWrap.prepend($layer);
      layers--;
    }
    
    $('body').append($layerWrap);
  });
  
  
  
  /**
   * Returns random integer
   */
  function randomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
  }
  
  
  
  /**
   * Returns random number
   */
  function randomNum(min, max) {
    return Math.max((Math.random() * max), min).toFixed(1);
  }
  
})(jQuery);