from django.contrib import admin
from .models import food
# Register your models here.
class foodAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'date_created']
    search_fields = ['name', 'category']
    list_filter = ['category', 'date_created']
    list_editable = ['price']
    list_per_page = 10
    ordering = ['date_created']
    date_hierarchy = 'date_created'

admin.site.register(food, foodAdmin)
