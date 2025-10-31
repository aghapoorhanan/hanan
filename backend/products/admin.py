from django.contrib import admin
from .models import Product, Coupon

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'license_type', 'downloads_allowed')
    prepopulated_fields = { 'slug': ('title',) }

@admin.register(Coupon)
class CouponAdmin(admin.ModelAdmin):
    list_display = ('code', 'discount_percent', 'active')
