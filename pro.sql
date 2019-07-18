SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;

-- 创建用户信息表
 CREATE TABLE xm_user(
 	uid INT PRIMARY KEY AUTO_INCREMENT,
 	uname VARCHAR(50),
 	upwd VARCHAR(50),
 	email VARCHAR(50),
 	phone VARCHAR(50),
 	gender INT /*1-->男 0-->女*/
 );

INSERT INTO xm_user VALUES
(NULL,'chenchen','123456','382150799@qq.com','15228542941',1),
(NULL,'dangdang','456789','382150@qq.com','17664056304',0),
(NULL,'feifei','123456789','123456@qq.com','13456734523',1);


-- 创建首页3楼商品表
CREATE TABLE index_1f_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(240),
	detail VARCHAR(120),
	price DECIMAL(9,2),
	href VARCHAR(120),
	pic VARCHAR(120)
);

INSERT INTO index_1f_product VALUES
(NULL, '水密码补水滋养护肤11件套装（洁面泡泡+洗面奶+爽肤水+乳液+面霜+面膜）保湿化妆品套装', '[王凯同款熬夜安瓶上新]渗透肌肤底层,锁水滋养,全效护肤,满199减100,点击惊喜','299','javascript:;','../image/beautiful1.jpg'),
(NULL, '欧莱雅小美盒 美妆护肤品彩妆套装 靓妆女王盒 科颜氏面膜、YSL反转香水+粉底液、植村秀蜜粉', '【7月4日-7月6日品牌秒杀，爆款大放价】1：7月5日全场额外加赠兰蔻小黑眼膜，限量100件','399','javascript:;','../image/beautiful2.jpg'),
(NULL, '自然堂（CHANDO）水润套装官方旗舰正品密集补水保湿修护水油平衡化妆品护肤品 四件套洗面奶+柔肤水+乳液+保湿霜', '618直降送券促销中官方直供正品带防伪', '199.00','javascript:;','../image/beautiful3.jpg'),
(NULL, '欧莱雅女士清润葡萄籽套装水乳化妆品套装护肤品套装女礼盒春夏精华洁面乳爽肤水乳液补水日霜保湿深层清洁 礼盒4件套A：洁面乳+乳液+膜力水+膜力霜', '膜力霜和复颜日霜随机发放，效果一样哦，请放心，正品保障','249','javascript:;','../image/beautiful4.png'),
(NULL, 'Whoo后套装套盒 补水保湿祛痘印提拉紧致修护 情人节送女友礼盒 拱辰享水妍6件套盒(补水保湿)', '关注店铺，领优惠券下单更优惠哦！！！','599','javascript:;','../image/beautiful5.jpg'),
(NULL, '韩国进口 后(Whoo) 拱辰享气韵生水乳2件套礼盒套装 310ml/盒 保湿滋养 调节水油平衡', '#补水保湿，特惠礼盒#7月4日-7月10日领券下单更优惠，买1送6，到手价只需179元，店铺部分商品2件8折3件7折','899','javascript:;','../image/beautiful6.jpg');


-- 首页猜你喜欢商品表
CREATE TABLE index_like_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(240),
	detail VARCHAR(120),
	price DECIMAL(9,2),
	href VARCHAR(120),
	pic VARCHAR(120)
);

INSERT INTO index_like_product VALUES
(NULL, '骆驼(CAMEL) 健身套装吸湿排汗男士两件套速干衣跑步训练服紧身衣 C8S2R9685 黑色两件套 XL', null, '198', 'javascript:;', '../image/like1.jpg'),
(NULL, '小米 Redmi K20Pro 4800万超广角三摄 8GB+256GB 碳纤黑 骁龙855 全网通4G 双卡双待 全面屏拍照游戏智能手机', null, '3299', 'javascript:;', '../image/phone_mi1.jpg'),
(NULL, '联想(Lenovo)天逸510S英特尔酷睿i3 个人商务台式机电脑整机(i3-9100 8G 512G SSD WiFi 蓝牙 Win10)21.5英寸', null, '2298', 'javascript:;', '../image/pro_computer2.jpg'),
(NULL, '侑家良品 浴室置物架 床头收纳挂篮 厨房卫生间收纳筐吊篮 小号 赠2挂钩', null, '98', 'javascript:;', '../image/live1.jpg'),
(NULL, '新西兰进口牛奶 纽仕兰 3.5g蛋白质全脂纯牛奶 250ml*24盒整箱家庭装', null, '198', 'javascript:;', '../image/milk.jpg'),
(NULL, '三星（SAMSUNG）Q900 75英寸QLED量子点 8K超高清 HDR 物联 人工智能网络液晶电视 QA75Q900RBJXXZ', null, '5598', 'javascript:;', '../image/samsung1.jpg'),
(NULL, '创维（SKYWORTH）65W80 65英寸超薄护眼OLED 4K超高清HDR全面屏 人工智能语音 蓝牙网络护眼电视机 家电', null, '2998', 'javascript:;', '../image/Skyworth.jpg'),
(NULL, '凰都夫人品牌中国风复古连衣裙女2019春夏新款宽松显瘦禅茶服无袖背心外披两件套装 杏色套装 M', null, '2398', 'javascript:;', '../image/huangdu.jpg'),
(NULL, '荣耀MagicBook 2019 14英寸轻薄窄边框笔记本电脑（AMD锐龙5 3500U 8G 512G FHD IPS 指纹解锁）冰河银 【618年中盛典】', null, '4298', 'javascript:;', '../image/pro_1.jpg');


-- 首页更多商品表
CREATE TABLE index_more_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(300),
	detail VARCHAR(120),
	price DECIMAL(9,2),
	href VARCHAR(120),
	pic VARCHAR(120)
);

INSERT INTO index_more_product VALUES
(NULL, '华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹',null, '5488', 'javascript:;', '../image/car_recom1.jpg'),
(NULL, '华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机', null, '4288', 'javascript:;', '../image/car_recom2.jpg'),
(NULL, '华为 HUAWEI Mate 20 Pro (UD)屏内指纹版麒麟980芯片全面屏超大广角徕卡', null, '5099', 'javascript:;', '../image/car_recom3.jpg'),
(NULL, '华为 HUAWEI Mate 20 RS 保时捷设计 麒麟980芯片全面屏超大广角徕卡三摄', null, '12999', 'javascript:;', '../image/car_recom4.jpg'),
(NULL, '宏碁（Acer）商祺SQX4270 140N 商用办公台式电脑整机（八代G4900 4G 1T ', null, '2099', 'javascript:;', '../image/car_recom5.jpg'),
(NULL, '惠普（HP）小欧290 商务办公台式电脑整机（i3-8100 8G 1TB WiFi串口 Win10 ', null, '2899', 'javascript:;', '../image/car_recom6.jpg'),
(NULL, '戴尔(DELL)成就3470 英特尔酷睿i3 高性能 商用办公 台式电脑整机(i3-8100 8G 1T 键鼠 WIFI 蓝牙)21.5英寸', null, '2899', 'javascript:;', '../image/car_recom8.jpg'),
(NULL, '联想（Lenovo）天逸510S 第八代英特尔酷睿i3 个人商务台式电脑整机 （i3-8100 8G 1T win10）19.5英寸', null, '2999', 'javascript:;', '../image/car_recom7.jpg'),
(NULL, '水密码补水护肤品礼盒 补水锁水保湿滋润 洗面奶水乳护肤品套装 冰川矿泉 ', null, '159', 'javascript:;', '../image/car_recom9.jpg'),
(NULL, '24k黄金精华护肤品礼盒套装美肤嫩白控油祛痘黑头洗面奶补水保湿乳润肤霜', null, '249', 'javascript:;', '../image/car_recom10.jpg'),
(NULL, '珀莱雅弹润芯肌护肤品套装女提拉紧致补水保湿化妆品淡化细纹 水乳+精华', null, '199', 'javascript:;', '../image/car_recom11.jpg'),
(NULL, 'HFP护肤品套装美肤白皙补水保湿控油烟酰胺原液精华夏季水乳高效提亮肤色', null, '299', 'javascript:;', '../image/car_recom12.jpg');