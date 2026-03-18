
from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'price', 'category', 'is_featured', 'is_new', 'created_at')
    list_filter = ('category', 'is_featured', 'is_new', 'created_at')
    prepopulated_fields = {'slug': ('name',)}
