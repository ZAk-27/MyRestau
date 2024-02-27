from django.db import models
from account.models import UserData

# Create your models here.


class food(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    description = models.TextField()
    image = models.URLField()
    category = models.CharField(max_length=100)
    date_created = models.DateTimeField(auto_now_add=True)


class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
    ]

    customer_name = models.CharField(max_length=255)
    email = models.EmailField()
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, related_name='items', on_delete=models.CASCADE, null=True)
    food = models.ForeignKey(food, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        # Calculate subtotal before saving
        self.subtotal = self.food.price * self.quantity

        super().save(*args, **kwargs)


class Review(models.Model):
    food = models.ForeignKey(food, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(UserData, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
