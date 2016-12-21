# jquery.ScrollToAnyWhere
jquery.ScrollToAnyWhere.js是一个jQuery滚动插件，基本上，只要给出元素id或class，即可实现滚动。其中包含了，滚动到顶部(Scroll to Top)、滚动到底部(Scroll to Bottom)、滚动到任意位置(Scroll to AnyWhere)，这三个功能！Jquery.ScrollToAnyWhere.js is a jQuery scroll plug-in, basically, as long as the elements are given ID or class, you can achieve the rolling. Which contains, scroll to the top (to Top Scroll), scroll to the end (to Bottom Scroll), scroll to any location (to AnyWhere Scroll)
一、兼容性 Browser Compatibility
========================
什么，你还在用IE6？一个插件，大家都很在乎兼容性，本人鄙视IE，因此仅支持jQuery 2.0版本以上的jQuery版本，2.0版本以下未进行过测试，IE10以下浏览器未进行测试。不支持IE9及以下版本浏览器。
<br />IE9- NO WAY.<br />
jquery library 2.0+

二、使用方法 How to use jquery.ScrollToAnyWhere.js?
=======================================
1、导入jQuery文件 Import jQuery library
-----------------------------
在html代码head或者body标签中引入jQuery库和jquery.ScrollToAnyWhere.js<br />
Include jquery library and jquery.ScrollToAnyWhere.js in html tag for head or body

    <head>
    <meta charset="UTF-8">
    <title>jquery.ScrollToAnyWhere.js demo</title>
    <link rel="stylesheet" href="../css/ScrollToAnyWhere.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.ScrollToAnyWhere.js"></script>
    </head>
or

    <body>
    //html代码内容......
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.ScrollToAnyWhere.js"></script>
    </body>
2、使用方法
-------------------------
$('selector').ScrollToAnyWhere(op,elements,options);<br />
op有3个值，分别是‘top’，‘down’，‘anywhere’，分别代表‘上’，‘下’，‘任意位置’<br />
elements为需要滚动到的位置元素id或class名称，必须带有‘.’与‘#’<br />
options有3个固定名称，值可以任意改变。分别是'offset'，'offset_opacity'，'times'，分别代表‘距离顶部距离（当距离顶部为多少时，淡出相应的图标、文字）’，‘滚动条滚动到的位置（到达此位置时，图标或文字自动透明）’，‘滚动速度’
<br />
3、滚动到顶部(Scroll to Top)
------------------------------
    <body>
    //html代码内容......
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.ScrollToAnyWhere.js"></script>
    <script>
    $(function () {
    $('.goTop').ScrollToAnyWhere('top');
    })
    </script>
    </body>
4、滚动到底部(Scroll to Bottom)
---------------------------------
    <body>
    //html代码内容......
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.ScrollToAnyWhere.js"></script>
    <script>
    $(function () {
    $('.goDown').ScrollToAnyWhere('down');
    })
    </script>
    </body>
5、滚动到任意位置(Scroll to AnyWhere)
-------------------------
使用方法为$(selector).ScrollToAnyWhere('anywhere',selector),第一个selector为当前产生事件的元素，第二个selector则为将要滚动到的元素。两个selector都需要填写正确的class与id名称，如$('#div').ScrollToAnyWhere('anywhere','.class')或$('#div').ScrollToAnyWhere('anywhere','#class')

    <body>
    //html代码内容......
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.ScrollToAnyWhere.js"></script>
    <script> $(function () { $('.goComments').ScrollToAnyWhere('anywhere','.comments'); }) </script> </body>
6、自定义可选参数(options)
----------------------
    <body>
    //html代码内容......
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.ScrollToAnyWhere.js"></script>
    <script>
    $(function () {
    $('.custom').ScrollToAnyWhere('anywhere','.test',{
    'offset':500,
    'offset_opacity':1500,
    'times':50
    });
    })
    </script>
    </body>
三、演示 demo
============================
演示地址：https://king2088.github.io/jquery.ScrollToAnyWhere/demo/index.html<br />
请查看本页右下角的粉红色图标，点击即可体验ScrollToAnyWhere的滚动效果了。<br />
本页面右下角的演示源码如下：

    <script>
    $(function () {
    $('.goTop').ScrollToAnyWhere('top');
    $('.goDown').ScrollToAnyWhere('down');
    $('.goComments').ScrollToAnyWhere('anywhere','#demo');
    $('.custom').ScrollToAnyWhere('anywhere','.logo',{
    'offset':100,
    'offset_opacity': $(document).height() - 300,
    'times':8000
    });
    })
    </script>
