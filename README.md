
# welcome to superCardMall #

**superCardMall** 主要是一个礼品卡交易平台，以令牌作为主要支付手段来进行礼品卡的售卖与收购（前期主要是售卖包括京东购物卡，苏宁购物卡，爱奇艺会员卡等卡片商品），为广大虚拟爱好者提供一个支付体验的礼品交易平台.

## 关于superCardMall：

superCardMall分为两部分 前后端分离（由于开发时使用其他代码管理器就直接在git上传的zip包）。

-h5.zip 为前端代码压缩包，下载之后解压直接放入服务器根目录下就可以使用（不要放错地方放入其他目录下展示打不开，如有需要可以联系微信： **xiaozhi_00100**）
-cardmallserver.zip  为服务端代码，解压打开即可


## 代码使用
- 前端代码比较简单直接解压放入根目录即可（如果要放入其他目录 请联系作者 微信：**xiaozhi_00100**）
— 服务端代码cardmallserver.zip使用python3.7 Django2.1.2开发，确保python开发环境安装，如没有安装请自行百度，解压打开运行如下
	1. pip install -r requirements.txt # 从requirements.txt安装依赖
	2. python manage.py makemigrations #迁移数据库
	3. python manage.py migrate #迁移数据库
	4. python manage.py runserver #运行项目即可
	5. python manage.py createsuperuser #创建管理员 根据提示一步步创建就可以了



以上就是全部使用过程 运行ok的话 就可以进入 域名/admin 进入后太管理页面了
