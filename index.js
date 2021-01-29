window.onload = function () {
    $("#mySpriteSpin").spritespin({
        source: SpriteSpin.sourceArray('img/turn_{frame}.jpg',
            {
                frame: [1, 200],
                digits: 3
            }),
        width: 687,
        height: 515,
        sizeMode: 'fit',
        animate: false,
        responsive: true,
        onInit: function (e, data) {
            //прошла инициализация слайдера, картинки еще не загрузились
            //console.log('onInit'); 
        },
        
        onProgress: function (e, data) {
            //произошла загрузка одной из картинок для слайдера
            //console.log('onProgress');
        },

        onLoad: function (e, data) {
            //произошла загрузка всех картинок для слайдера, слайдер готов отрисовывать
            //console.log('onLoad');
        },

        onComplete: function (e, data) {
            //все что нужно загрузилось, и отрисовалась первая картинка
            //console.log('onComplete');
        },

        onDraw: function (e, data) {
            //когда прошли вычисления для измения кадра и кадр сейчас будет отрисован
            //console.log('onDraw');
        },

        onFrame: function (e, data) {
            //когда поступил запрос на изменение текущего кадра
            console.log('текущий кадр',data.frame);
            (data.frame > 100 && data.frame < 150) ? $(".custom-tooltip-1").show() : $(".custom-tooltip-1").hide()
            
        },

        onFrameChanged: function (e, data) {
            //когда текущий кадр уже изменился
            //console.log('onFrameChanged');
        },

    });

}

