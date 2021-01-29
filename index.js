window.onload = function () {
    $("#mySpriteSpin").spritespin({
        source: SpriteSpin.sourceArray('img/turn_{frame}.jpg', 
        { 
            frame: [1,200], 
            digits: 3 
        }),
        width: 687,
        height: 515,
        sizeMode: 'fit',
        animate: false,
        responsive: true
      });
}

