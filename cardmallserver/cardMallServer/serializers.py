from  rest_framework import serializers
from  .models import CardUser,BannerInfo,ProductInfo,UserOrder,Order_product


class CardUserSerializers(serializers.ModelSerializer):
    class Meta:
        model = CardUser
        fields = ('xinid',)
        # fields = ('username','xinid','headObj','phonenum')


class BannerInfoSerializers(serializers.ModelSerializer):
    class Meta:
        model=BannerInfo
        fields = ('id','title')

class ProductInfoSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProductInfo
        # fields = ('__all__')
        # exclude = ('productcontent',)
        fields = ('productname', 'productimgpath', 'productid', 'productcategories')

class ProductDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProductInfo
        fields = ('__all__')
        # fields = ('productname', 'productimgpath', 'productid', 'productcategories','price','inventory','productcontent')


class UserOrderSerializers(serializers.ModelSerializer):
    carduser = CardUserSerializers(many=False)
    class Meta:
        model = UserOrder
        # exclude = ('carduser',)
        fields = ('__all__')
        # fields = ('createtime', 'orderid','carduser','orderType',)



class UserOrderListSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserOrder
        fields = ('createtime', 'orderid','total','orderType')


class Order_productSerializers(serializers.ModelSerializer):
    # order = UserOrderSerializers(many=False)
    class Meta:
        model = Order_product
        # fields = ('__all__')
        fields = ('product_id','title','image','price','quantity',)
        # exclude = ('order',)