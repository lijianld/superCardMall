from django.contrib import admin
from .models import CardUser,UserOrder,Order_product,BannerInfo,ProductInfo
# Register your models here.
admin.site.site_header = 'supperCardMall管理'
admin.site.site_title = 'supperCardMall'

admin.site.register(Order_product)
admin.site.register(BannerInfo)


class UserInfoAdmin(admin.ModelAdmin):
    list_display = ('username','xinid','headObj','phonenum')

class ProductInfoAdmin(admin.ModelAdmin):
    list_display = ('productname', 'productcategories','currentpeice', 'productid','price')

class UserOrderAdmin(admin.ModelAdmin):
    list_display = ('createtime', 'phone', 'orderType', 'transtime')

admin.site.register(UserOrder,UserOrderAdmin)
admin.site.register(ProductInfo,ProductInfoAdmin)
admin.site.register(CardUser,UserInfoAdmin)