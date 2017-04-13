// Fly 是整个游戏的全局对象，保证全局环境中值有一个全局对象！
// 所有，其他的内容都是通过 Fly 对象获取到的！
(function( window ) {
// 开启严格模式
    'use strict';

// 声明全局对象
    var FlyObj = {};

// FlyObj 中用来存放所有的工具函数（utils）

// 给全局对象添加 laodImages 方法
    FlyObj.loadImages = function( imgSrc, callback ) {
        var count = 0,
            imgsLen = imgSrc.length,
            imgList = {};

        imgSrc.forEach(function(val, index) {
            var img = new Image();
            img.src = 'images/' + val + '.png';
            imgList[ val ] = img;

            img.onload = function() {
                count++;

                if( count >= imgsLen ) {
                    callback( imgList );
                }
            };
        });
    };

// 将角度转化为弧度
    FlyObj.toRadian = function( angle ) {
        return angle / 180 * Math.PI;
    };

//动态创建canvas
    FlyObj.createCv = function (id) {
        //动态创建canvas标签
        var cv = document.createElement('canvas');
        cv.width = 800;
        cv.height = 600;

        //将canvas标签追加到页面中(指定id元素中)
        var container = document.getElementById(id);
        container.appendChild(cv);

        return cv.getContext('2d');
    }

//工厂函数
    FlyObj.factory = function (type, option) {
        switch (type){
            case 'Game':
                return new Fly.Game(option);
            case 'Bird':
                return new Fly.Bird(option);
            case 'Sky':
                return new Fly.Sky(option);
            case 'Land':
                return new Fly.Land(option);
            case 'Pipe':
                return new Fly.Pipe(option);
        }
    };


// 将全局对象暴露到全局环境中
    window.Fly = FlyObj;

})( window );