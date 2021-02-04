window.onload = function () {
    var spritespinObj = $("#mySpriteSpin").spritespin({
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
            console.log('onComplete');
            $(data.target).append('<div class="tooltip-wrapper"></div>');
            loadTooltips();
            checkTooltipVisibility(data);
        },

        onDraw: function (e, data) {
            //когда прошли вычисления для измения кадра и кадр сейчас будет отрисован
            //console.log('onDraw');
        },

        onFrame: function (e, data) {
            //когда поступил запрос на изменение текущего кадра
            //console.log('текущий кадр',data.frame);
            checkTooltipVisibility(data);           
        },

        onFrameChanged: function (e, data) {
            //когда текущий кадр уже изменился
            //console.log('onFrameChanged');
        },

    }).data("spritespin");

    function loadTooltips() {
        if(!tooltipConfig) {console.log('данные для тултипов не найдены');return;};    
    
        let wrapper = document.querySelector('.tooltip-wrapper');
        tooltipConfig.forEach(item => {
            wrapper.insertAdjacentHTML('beforeend',`
                <div class="custom-tooltip" 
                data-frameRangeStartNumber="${item.frameRangeStartNumber}" 
                data-frameRangeEndNumber="${item.frameRangeEndNumber}"
                style="top:${item.tooltipCoordX}%;left:${item.tooltipCoordY}%;" 
                hidden>${item.text}</div>`)
        });
    }

    function checkTooltipVisibility(data) {
        //функция вызывается после каждого кадра
        //data - объект предоставляемый spritespin с информацией о текущем состоянии
        $(".tooltip-wrapper > div").each(function(i,elem) {
            let currentFrame = data.frame;
            let starFrame = elem.dataset.framerangestartnumber;
            let endFrame = elem.dataset.framerangeendnumber; 
            if (currentFrame >= starFrame && currentFrame <= endFrame) {
                elem.hidden = false
            } else {
                elem.hidden = true
            }
        });
    }

    
}



