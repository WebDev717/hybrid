define([
    'BaseView',
    'text!PagePath/img/tpl.layout.html',
    'text!StylePath/common.css'
], function (AbstractView,
             layoutHtml,
             commonStyle) {

    return _.inherit(AbstractView, {
        propertys: function ($super) {

            $super();
            var scope = this;

            this.template = layoutHtml;
            this.commonstyle = commonStyle;

            this.events = {
                'click .js-btn01': function () {

//图片预览
_.requestHybrid({
    tagname: 'gallery',
    param: {
        index: 1,                  // 当前图片的位置（从0开始）
        imgs: ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3989549683,2209638352&fm=21&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=442231815,540611561&fm=21&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2761864997,1285877088&fm=21&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=187384747,1056525225&fm=23&gp=0.jpg']   // 图片地址数组
    }
});

                },
                'click .js-btn01': function () {

//图片上传
_.requestHybrid({
    tagname: 'uploadImage',
    param: {
        //业务参数
        //文件所属分类,包括（transform(出转诊),casem(病例), question(问题), post(帖子), help(求助), secret(深夜病房), logo, avatar(头像)，chat(聊天), idCard(身份证), profile(用户信息),panel, spread, media,live)
        bucket: 'transform',
        //1代表文件传入公共盘，所有人可以访问。0代表私人盘，需要授权访问
        isPublic: 1,
        //水印文字 ,如果没传参数则没有水印
        waterText: '水印文字',

        //以下是基本参数
        //1-9张限制
        count: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    },
    callback: function(data) {
        var urls = data.urls;
        var img;
        for(var url in urls) {
            img = $('<img src="' + url + '" >');
            scope.$('.js-wrap').append(img);
        }
    }
});

                }

            };

        },

        initHeader: function () {
            var opts = {
                view: this,
                title: '图片 Demo',
                back: function () {
                    this.back();
                }
            };
            this.header.set(opts);
        },

        initElement: function () {

        },

        addEvent: function ($super) {
            $super();

            this.on('onShow', function () {


            });
        }

    });

});
