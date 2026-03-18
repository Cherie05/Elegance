
from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'image']


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'description', 'long_description', 
            'price', 'image', 'hover_image', 'additional_images',
            'category', 'category_name', 'is_featured', 'is_new', 
            'in_stock', 'sku', 'features', 'specifications',
            'rating', 'review_count', 'created_at'
        ]


class ProductListSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'price', 'image', 'hover_image',
            'category', 'category_name', 'is_featured', 'is_new'
        ]
