/**
 * Created by Administrator on 2017/4/12/0012.
 */
(function (Fly) {
    'use strict';

    var Sky = function (option) {

        this.ctx = option.ctx;
        this.img = option.img;
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.imgW = this.img.width;
        this.speed = -0.15;
    };

    Sky.prototype.render = function ( delta ){
        var ctx = this.ctx;

        //������ձ���
        ctx.drawImage(this.img, this.x, this.y);

        this.x += this.speed * delta;

        //�ж���ձ���λ��
        if(this.x <= -this.imgW){
            this.x += this.imgW * 2;
        }
    };

    Fly.Sky = Sky;
})(Fly);