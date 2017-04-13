/**
 * Created by Administrator on 2017/4/12/0012.
 */
(function (Fly){
    'use strict';
    var Land = function (option) {
        this.ctx = option.ctx;
        this.img = option.img;

        this.imgW = this.img.width;
        this.imgH = this.img.height;

        this.x = option.x || 0;

        this.y = this.ctx.canvas.height - this.imgH;
        this.speed = -0.15;
    }

    Land.prototype.render = function (delta) {
        var ctx = this.ctx;
        ctx.drawImage(this.img, this.x, this.y);

        this.x += this.speed * delta;
        if(this.x <= -this.imgW){
            this.x += this.imgW * 4;
        }

    };

    Fly.Land = Land;
})(Fly);