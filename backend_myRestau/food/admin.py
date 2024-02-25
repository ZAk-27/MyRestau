from django.contrib import admin
from .models import food, Order, OrderItem
# Register your models here.


class foodAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'date_created']
    search_fields = ['name', 'category']
    list_filter = ['category', 'date_created']
    list_editable = ['price']
    list_per_page = 10
    ordering = ['date_created']
    date_hierarchy = 'date_created'


class orderAdmin(admin.ModelAdmin):
    list_display = ['customer_name', 'email', 'status', 'created_at']
    search_fields = ['customer_name', 'email']
    list_filter = ['status', 'created_at']
    list_per_page = 10
    ordering = ['created_at']
    date_hierarchy = 'created_at'


class orderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'food', 'quantity', 'subtotal']
    search_fields = ['order', 'food']
    list_filter = ['order', 'food']
    list_per_page = 10
    ordering = ['order']


admin.site.register(food, foodAdmin)
admin.site.register(Order, orderAdmin)
admin.site.register(OrderItem, orderItemAdmin)
