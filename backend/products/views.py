
from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer, ProductListSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        return ProductSerializer


class CategoryProductsView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    
    def get_queryset(self):
        category_slug = self.kwargs.get('category_slug')
        return Product.objects.filter(category__slug=category_slug)


class FeaturedProductsView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    queryset = Product.objects.filter(is_featured=True)


class NewProductsView(generics.ListAPIView):
    serializer_class = ProductListSerializer
    queryset = Product.objects.filter(is_new=True)
