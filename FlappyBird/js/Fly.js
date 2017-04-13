// Fly ��������Ϸ��ȫ�ֶ��󣬱�֤ȫ�ֻ�����ֵ��һ��ȫ�ֶ���
// ���У����������ݶ���ͨ�� Fly �����ȡ���ģ�
(function( window ) {
// �����ϸ�ģʽ
    'use strict';

// ����ȫ�ֶ���
    var FlyObj = {};

// FlyObj ������������еĹ��ߺ�����utils��

// ��ȫ�ֶ������ laodImages ����
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

// ���Ƕ�ת��Ϊ����
    FlyObj.toRadian = function( angle ) {
        return angle / 180 * Math.PI;
    };

//��̬����canvas
    FlyObj.createCv = function (id) {
        //��̬����canvas��ǩ
        var cv = document.createElement('canvas');
        cv.width = 800;
        cv.height = 600;

        //��canvas��ǩ׷�ӵ�ҳ����(ָ��idԪ����)
        var container = document.getElementById(id);
        container.appendChild(cv);

        return cv.getContext('2d');
    }

//��������
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


// ��ȫ�ֶ���¶��ȫ�ֻ�����
    window.Fly = FlyObj;

})( window );