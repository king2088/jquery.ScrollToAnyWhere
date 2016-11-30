/**
 * Created by king2088 on 2016/11/30.
 */
;(function($,window,document,undefined) {
    "use strict";
    $.fn.ScrollToAnyWhere = function(op, elements, options) {
        //创建Beautifier的实体
        var go = new Go(this, options);
        //console.log(go.onScroll);
        //调用其方法
        return go.goTo(op,elements);
    };

    var Go = function(ele, opt) {

        this.$element = ele;
        this.defaults = {
            'offset':500,
            'offset_opacity':1500,
            'times':700
        };
        this.options = $.extend({}, this.defaults, opt)
    };

    Go.prototype = {
        goTo: function (op, elements) {
            //获得默认参数及传递进来的参数
            var offset = this.options.offset;
            var offset_opacity = this.options.offset_opacity;
            var time = this.options.times;
            //console.log(offset);
            var _this = this.$element;
            //监听滚动条距离顶部的距离，并添加相关class属性来改变元素的样式
            $(window).scroll(function () {
                //alert(this.options);
                ( $(window).scrollTop() > offset ) ? _this.addClass('is-visible') : _this.removeClass('is-visible fade-out');
                if ($(window).scrollTop() > offset_opacity) {
                    _this.addClass('fade-out');
                }
            });
            //当前元素被点击后执行相关方法
            return _this.unbind('click').click(function (event) {
                event.preventDefault();
                //返回顶部，$('.div').GoanyWhere('top');
                if (op == 'top') {
                    $('body,html').animate({
                            scrollTop: 0
                        }, time
                    );
                }
                //到达底部，$('.div').GoanyWhere('down');
                if (op == 'down') {
                    $('body,html').animate({
                            scrollTop: $(document).height()
                        }, time
                    );
                }

                //到达某个class或者id所在位置 $('.div').GoanyWhere('anywhere','.selector');
                if (op == 'anywhere') {
                    $('body,html').animate({
                            scrollTop: $(elements).offset().top
                        }, time
                    );
                }
                //参数错误参数后，控制台及当前元素自动提示错误信息
                if(op =='' && op != 'anywhere' && op != 'top' && op != 'down' && op == null) {
                    console.log('Parameter is error!');
                    _this.append('<span style="color: red;font-size: 12px">ScrollToAnyWhere Parameter is error!</span>').unbind('click');
                }
                //alert(op);
            });

            return this;
        }
    };
})(jQuery,window,document);