from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'register.do', views.register),
    url(r'getProductList.do',views.getProductList),
    url(r'getProductDetails.do',views.getProductDetails),
    url(r'createOrder.do',views.createOrder),
    url(r'updataOrder.do', views.updataOrder),
    url(r'getUserOrderList.do', views.getUserOrderList),

# 0000001
]