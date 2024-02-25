
from rest_framework import serializers
from .models import food, Order, OrderItem


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = food
        fields = "__all__"


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
        read_only_fields = ('subtotal',)


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
