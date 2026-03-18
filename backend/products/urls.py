
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CategoryViewSet, ProductViewSet, 
    CategoryProductsView, FeaturedProductsView, NewProductsView
)

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('categories/<slug:category_slug>/products/', CategoryProductsView.as_view(), name='category-products'),
    path('featured-products/', FeaturedProductsView.as_view(), name='featured-products'),
    path('new-products/', NewProductsView.as_view(), name='new-products'),
]
