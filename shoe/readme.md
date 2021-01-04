1 #电商是2021永恒的主题


1.得物app   目的
新的细分领域的电商在上市过程中,
-得到  知识电商 
-得物 潮牌电商
 群体 25岁以下的 潮牌群体 talk
 阿里电商/腾讯电商 互联网电商关系链
 拼多多  / 京东


 2.功能细分  商品卡片的设计
 border-radius
 - 难点是半原->更大半径的圆  圆的中心会改变
 -鞋
 两个运动 向上 ,转角 animation

 -文字部分
 opactio 0变1
container

-良好的结构
不要想样式, 要毛坯
.dw 项目代号 是项目 不是简单的页面
.container ? 5种方法
容器宽度+magin auto?
定位?
弹性布局 水平居中

-stylus 用法
前端都有这么多命令行
stylus -w *.stylus -o *.css
-w watch 监听 随styl改变css
output 向外输出
1.用tab缩进
2.嵌套的css
.dw_card
    &:hover
    &after
    .dw_card__imgBx

.dw_card .dw_card__imgBx{

}

&不是下级 是引用上级
