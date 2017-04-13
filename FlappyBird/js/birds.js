// ��װ С����� Bird
// ��Ϊ������Ϸ��ȫ�ֶ����� Fly �������ԣ�ֻ��Ҫ��
// Flyȫ�ֶ��󣬴������
// Ϊ�˱�֤ȫ�ֻ�����ֻ��һ��ȫ�ֶ������ԣ����ǽ� Fly ���뵽ɳ����
(function( Fly ) {
    'use strict';

// ���캯��
    var Bird = function( option ) {
        // ����������
        this.ctx = option.ctx;
        // С��ͼƬ
        this.img = option.img;
        // ͼƬ�Ŀ��
        this.imgW = this.img.width / 3;
        // ͼƬ�ĸ߶�
        this.imgH = this.img.height;

        // ��¼��ǰ���Ƶ�֡��
        this.frameIndex = 0;
        // ˲ʱ�ٶ�
        this.speed = 0;
        // С��ֱ����ĳ�ʼλ��
        this.y = 100;
        // ��ǰ�Ƕ�
        this.curAngle = 0;

        this.x = 100;
        // ���ٶ�
        this.a = 0.0005;
        // �����ת�Ƕ�
        this.maxAngle = 45;
        // �ﵽ���Ƕ�ʱ���ٶ�
        this.maxSpeed = 0.5;
    };

// ԭ�Ͷ���
    Bird.prototype = {
        constructor: Bird,

        // ��Ⱦ����λ�õķ���
        render: function( delta ) {
            var ctx = this.ctx;

            // ����Ĭ��״̬
            ctx.save();

            ctx.translate(this.x, this.y);

            // ���㵱ǰ�ٶȶ�Ӧ����ת�Ƕ�
            // ��Ϊ speed �������������򣩵ģ����ԣ�curAngle �ͻ��з���
            this.curAngle = this.speed / this.maxSpeed * this.maxAngle;
            if( this.curAngle > 45 ) {
                this.curAngle = 45;
            } else if( this.curAngle < -45 ) {
                this.curAngle = -45;
            }

            // ���ݼ���ĽǶ��� ��ת
            ctx.rotate( Fly.toRadian(this.curAngle) );

            ctx.drawImage(this.img, this.imgW * this.frameIndex++, 0, this.imgW, this.imgH, -1/2*this.imgW, -1/2*this.imgH, this.imgW, this.imgH);

            // ������һ֡С��Ĵ�ֱλ��
            // delta ��ʾʱ�䣨��֡��ʱ������
            this.speed = this.speed + this.a * delta;
            // console.log( speed )
            this.y =this.y + (this.speed * delta + 1/2 * this.a * Math.pow(delta, 2));
            this.frameIndex %= 3;

            // �ָ������Ĭ��״̬
            ctx.restore();
        },

        // С��ı��ٶȵķ���
        changeSpeed: function( speed ) {
            this.speed = speed;
        }
    };

// �� Bird ���캯������¶��ȫ�ֶ���Fly
    Fly.Bird = Bird;

})( Fly );