from django.db import models
import django.utils.timezone as timezone
# Create your models here.
class CardUser(models.Model):
    username = models.CharField(r'用户名',max_length=100,default='cardName')
    xinid = models.CharField(r'用户id',max_length=100,default='cardId')
    headObj = models.CharField(r'头像',max_length=1024,default='no_url')
    phonenum = models.CharField(r'手机号',max_length=100,default='no_phone')

    created_at = models.CharField(r'账户创建时间',max_length=150,default='no_createtime')
    identity_number = models.CharField(r'身份证号', max_length=150, default='no_identitynumber')
    session_id = models.CharField(r'session', max_length=150, default='no_sessionid')
    code_id =models.CharField(r'代码标识', max_length=150, default='no_codeid')
    code_url = models.CharField(r'代码地址', max_length=512, default='no_codeurl')
    def __unicode__(self):
        return self.username


class BannerInfo(models.Model):

    title = models.CharField(r'标题',max_length=200,default='no_title')
    imgpath = models.CharField(r'图片链接',max_length=1024,default='no_iamge')
    bannerurl = models.CharField(r'文章链接',max_length=1024,default='no_url')
    index = models.IntegerField(default=0)
    bannerid = models.CharField(r'条幅ID',max_length=100,default= 'no_bannerid')
    type = models.CharField(r'广告状态',max_length=100,default='no_type')

    def __unicode__(self):
        return self.title


class ProductInfo(models.Model):
    productname = models.CharField(r'产品名', max_length=200, default='no_title')
    productimgpath = models.CharField(r'图片链接', max_length=1024, default='no_iamge')
    productid = models.CharField(r'产品ID', max_length=100, default='no_productid')
    currentpeice = models.CharField(r'产品价格', max_length=50, default='100.00')
    price= models.CharField(r'产品价格', max_length=100, default='100.00,200.00,500.00,1000.00')
    inventory = models.IntegerField(default=100)
    productcategories = models.CharField(r'产品类别',max_length=200,default='no_categories')
    productcontent = models.TextField()

    def __unicode__(self):
        return self.productname





class UserOrder(models.Model):
    carduser = models.ForeignKey(CardUser,related_name='orders',on_delete=models.CASCADE)
    createtime = models.DateTimeField(auto_now_add=True)
    updatatime = models.DateTimeField(auto_now=True)
    orderid = models.CharField(r'订单ID',max_length=200,default='no_orderid')
    phone = models.CharField(r'订单手机号',max_length=15)
    address = models.CharField(r'收货地址',max_length=512)
    total = models.IntegerField(default=0)
    orderType = models.CharField(r'订单状态',max_length=100)
    paymentaccount = models.CharField(r'支付账户',max_length=200,default='no_paymentaccount')
    transactionid =  models.CharField(r'转账id',max_length=512,default='no_transactionid')
    transtime = models.DateTimeField(default=timezone.now)
    # products= models.ForeignKey()

    def __unicode__(self):
        return self.orderid

class Order_product(models.Model):
    title = models.CharField(max_length=512)
    image = models.CharField(max_length=512)
    price = models.IntegerField(default=100)
    quantity = models.IntegerField(default=1)
    product_id =  models.CharField(r'产品ID', max_length=100, default='no_productid')
    order = models.ForeignKey(UserOrder,related_name='products',default=None,null=True,blank=True,on_delete=models.CASCADE)

    def __unicode__(self):
        return self.title