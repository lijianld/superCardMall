from django.http import JsonResponse,HttpResponse
from .models import CardUser,ProductInfo,UserOrder,Order_product
from .serializers import CardUserSerializers,BannerInfoSerializers,\
    ProductInfoSerializers,UserOrderSerializers,Order_productSerializers,ProductDetailsSerializers,UserOrderListSerializers
from random import randint
import json
import django.utils.timezone as timezone

# Create your views here.
# 查
# models.UserInfo.objects.all()
# models.UserInfo.objects.all().values('user')    #只取user列
# models.UserInfo.objects.all().values_list('id','user')    #取出id和user列，并生成一个列表
# models.UserInfo.objects.get(id=1)
# models.UserInfo.objects.get(user='yangmv')

# 增
# models.UserInfo.objects.create(user='yangmv',pwd='123456')
# 或者
# obj = models.UserInfo(user='yangmv',pwd='123456')
# obj.save()
# 或者
# dic = {'user':'yangmv','pwd':'123456'}
# models.UserInfo.objects.create(**dic)

# 删
# models.UserInfo.objects.filter(user='yangmv').delete()

# 改
# models.UserInfo.objects.filter(user='yangmv').update(pwd='520')
# 或者
# obj = models.UserInfo.objects.get(user='yangmv')
# obj.pwd = '520'
# obj.save()

#添加用户数据
def register(request):

    # post = request.POST
    post = json.loads(request.body.decode('utf-8'))

    uname = post.get('username')
    mixinId = post.get('xinid')
    headUrl = post.get('headUrl')
    userPhone = post.get('phone')

    created_at = post.get('created_at')
    identity_number = post.get('identity_number')
    session_id = post.get('session_id')
    code_id = post.get('code_id')
    code_url = post.get('code_url')

    # sgin =post.get('sgin')
    # and sgin and random

    if not (mixinId):
        return JsonResponse({'codeStr':'fails'})
#  sigin验证接口请求是否正确

    user = CardUser.objects.filter(xinid=mixinId)
        # CardUser.objects.get(xinid=mixinId)
    if (user):
        user=CardUser.objects.get(xinid=mixinId)
        user.username = uname
        # user.xinid = mixinId
        user.headObj = headUrl
        user.phonenum = userPhone

        user.created_at = created_at
        user.identity_number = identity_number
        user.session_id = session_id
        user.code_id = code_id
        user.code_url = code_url

        user.save()
        return JsonResponse({'codeStr':'success change'})

    user = CardUser()
    user.username = uname
    user.xinid=mixinId
    user.headObj=headUrl
    user.phonenum= userPhone

    user.created_at = created_at
    user.identity_number = identity_number
    user.session_id = session_id
    user.code_id = code_id
    user.code_url = code_url

    user.save()
    return JsonResponse({'codeStr':'success'})


# 获取首页产品列表
def getProductList(request):
    # func = request.GET.get("callbacks")  # 获取请求的callbacks参数
    # JsonResponse["Access-Control-Allow-Origin"]="*"
    list = ProductInfo.objects.all()
    serializer = ProductInfoSerializers(list,many=True)
    content = {'resCode':200,
               'resMsg':"success",
               'resData':serializer.data
               }

    return JsonResponse(content)
    # return HttpResponse("('%s')"%(func,content)) #传json对象



# 获取产品详情
def getProductDetails(request):

    # post = request.POST
    post = json.loads(request.body.decode('utf-8'))

    productId = post.get('productId')

    if not(productId):
        return JsonResponse({'resCode':200,
               'resMsg':"productId is null",
               'resData':[]
               })

    productInfo = ProductInfo.objects.filter(productid=productId)
    serializer = ProductDetailsSerializers(productInfo, many=True)

    content = {'resCode': 200,
                   'resMsg': "success",
                   'resData': serializer.data
                   }

    return JsonResponse(content)



 #    carduser = models.ForeignKey(CardUser,related_name='orders',on_delete=models.CASCADE)
 #    createtime = models.DateTimeField(auto_now_add=True)
 #    orderid = models.CharField(r'订单ID',max_length=200,default='no_orderid')
 #    phone = models.CharField(r'订单手机号',max_length=15)
 #    address = models.CharField(r'收货地址',max_length=512)
 #    total = models.IntegerField(default=0)
 #    orderType = models.CharField(r'订单状态',max_length=100)
 #    paymentaccount = models.CharField(r'支付账户',max_length=200,default='no_paymentaccount')
 #    transactionid =  models.CharField(r'转账id',max_length=512,default='no_transactionid')

# 创建订单
def createOrder(request):

    # post = request.POST
    post = json.loads(request.body.decode('utf-8'))
    userid = post.get('userid')
    phone = post.get('phone')
    total =float(post.get('total'))
    products = post.get('products')

    if not(userid and phone and total and products):
        return JsonResponse({'resCode': 200,
                             'resMsg': "parameter error",
                             'resData': []
                             })
    order = UserOrder()
    order_sn = createRandomString(30)
    order.orderid = order_sn
    order.carduser = CardUser.objects.get(xinid=userid)
    order.phone = phone;
    order.total = total;
    order.address = 'testaddress'
    order.orderType= '1'
    order.save()

     #[{"product_id":"00000001","image":"../../static/home/jingdong.png","title":"京东购物E卡","price":"100.00","quantity":1}]
    print(products[0])
    productsJson = products # json.loads(products)

    for productItem in productsJson:
        good = Order_product()
        good.order = order  # UserOrder.objects.get()
        good.product_id = productItem['product_id']
        good.title =  productItem['title']
        good.image = productItem['image']
        # price = productItem['price']
        # print(price)
        good.price =  productItem['price']  #int(productItem['price'])
        good.quantity =productItem['quantity'] # int(productItem['quantity'])
        good.save()

    goods = Order_product.objects.filter(order=order)
    goodsSerializers= Order_productSerializers(goods,many=True)
    orderDetail = UserOrderSerializers(order)

    resDdict = orderDetail.data

    resDdict['products'] = goodsSerializers.data

    rescontent = {

        'resCode': 200,
        'resMsg': "success",
        'resData':resDdict
    }
    return JsonResponse(rescontent)




# 更新订单
def updataOrder(request):

    post = json.loads(request.body.decode('utf-8'))
    orderType = post.get('orderType')
    paymentaccount = post.get('paymentaccount')
    transactionid = post.get('transactionid')
    orderId = post.get('orderId')

    if (orderId):
        order = UserOrder.objects.get(orderid=orderId)
        if not (order):
            return JsonResponse({'resCode': 200,
                                 'resMsg': "order not found",
                                 'resData': []
                                 })
        if (transactionid and paymentaccount):
            order.transactionid = transactionid
            order.paymentaccount = paymentaccount
            order.transtime = timezone.now()
            order.orderType = orderType

        order.save()

        goods = Order_product.objects.filter(order=order)
        goodsSerializers = Order_productSerializers(goods, many=True)
        orderDetail = UserOrderSerializers(order)

        resDdict = orderDetail.data

        resDdict['products'] = goodsSerializers.data

        rescontent = {

            'resCode': 200,
            'resMsg': "updata success",
            'resData': resDdict
        }
        return JsonResponse(rescontent)

    return JsonResponse({'resCode': 200,
                                 'resMsg': "orderid not found",
                                 'resData': []
                                 })


# 创建随机数
def createRandomString(len):
    # print ('wet'.center(10,'*'))
    raw = ""
    range1 = range(58, 65) # between 0~9 and A~Z
    range2 = range(91, 97) # between A~Z and a~z

    i = 0
    while i < len:
        seed = randint(48,122)
        if ((seed in range1) or (seed in range2)):
            continue;
        raw += chr(seed);
        i += 1
    # print(raw)
    return raw

    # print createRandomString(20)


def getUserOrderList(request):
    # post = request.POST
    post = json.loads(request.body.decode('utf-8'))
    userid = post.get('userid')

    if not(userid):
        return JsonResponse({'resCode': 200,
                             'resMsg': "userid parameter error",
                             'resData': []
                             })

    userInfo = CardUser.objects.get(xinid=userid)

    orderList = UserOrder.objects.filter(carduser=userInfo).order_by('-createtime')

    newresData= []
    for orderItem in orderList:
        orderDetail= UserOrderListSerializers(orderItem).data
        goods = Order_product.objects.filter(order=orderItem)
        goodsSerializers = Order_productSerializers(goods, many=True)
        orderDetail['goods'] = goodsSerializers.data
        newresData.append(orderDetail)

    rescontent = {

        'resCode': 200,
        'resMsg': "success",
        'resData':newresData
    }
    return JsonResponse(rescontent)
