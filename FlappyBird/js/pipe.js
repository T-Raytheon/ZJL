/**
 * Created by Administrator on 2017/4/12/0012.
 */
(function (Fly) {
    'use strict';

    var Pipe = function (option) {
        this.ctx = option.ctx;
        //上面管道图片
        this.imgPipeTop = option.imgPipeTop;
        //下面管道图片
        this.imgPipeBottom = option.imgPipeBottom;

        this.imgW = this.imgPipeTop.width;
        this.imgH = this.imgPipeTop.height;

        this.x = option.x || 0;
        this.topY = option.topY || 0;
        this.bottomY = option.bottomY || 0;

        this.speed = -0.15;
        this.pipeSpace = 150;

        //创建对象的时候，随机生成管道高度
        this.initPipeHeight();

    };

    Pipe.prototype.initPipeHeight = function () {
        var pipeHeight = Math.random() * 200 + 50;

        this.topY = pipeHeight - this.imgH;
        this.bottomY = pipeHeight + this.pipeSpace;
    };

    Pipe.prototype.render = function (delay) {
        var ctx = this.ctx;
        ctx.drawImage(this.imgPipeTop, this.x,this.topY);
        ctx.drawImage(this.imgPipeBottom, this.x,this.bottomY);

        //绘制管道所在的路径
        ctx.rect(this.x, this.topY, this.imgW, this.imgH);
        ctx.rect(this.x, this.bottomY, this.imgW, this.imgH);

        this.x += this.speed * delay;
        if(this.x <= -this.imgW){
            this.x += this.imgW * 3 * 6;

            this.initPipeHeight();
        }
    };

    Fly.Pipe = Pipe;

})(Fly);