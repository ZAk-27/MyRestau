from django.http import JsonResponse
from .models import food
from .serializers import FoodSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFood(request):
    allFood = food.objects.values(
        'id', 'name', 'price', 'description', 'image', 'category')
    serializedFood = FoodSerializer(allFood, many=True)
    return Response(serializedFood.data)


@api_view(['GET'])
def getFoodByID(request, id):
    try:
        particularFood = food.objects.get(id=id)
        food_data = {
            "id": particularFood.id,
            'name': particularFood.name,
            'price': str(particularFood.price),
            'description': particularFood.description,
            'image': particularFood.image,
            'category': particularFood.category,
            'date_created': particularFood.date_created.isoformat(),
            "success": True
        }
        return Response(food_data, status=200)
    except ObjectDoesNotExist:
        return Response({
            "error": "Food does not exist",
            "success": False
        }, status=404)


@api_view(['POST'])
def createFood(request):
    food_data = request.data
    isFoodExist = food.objects.filter(name=food_data['name']).exists()
    if (isFoodExist):
        return Response({
            "error": "Food is already exist",
            "success": False
        }, status=400)
    else:
        serializedFood = FoodSerializer(data=food_data)
        if serializedFood.is_valid():
            serializedFood.save()
            food_data = {
                "id": serializedFood.data['id'],
                'name': serializedFood.data['name'],
                'price': str(serializedFood.data['price']),
                'description': serializedFood.data['description'],
                'image': serializedFood.data['image'],
                'category': serializedFood.data['category'],
                'date_created': serializedFood.data['date_created'],
                "success": True
            }
            return Response(food_data, status=201)
        return Response(serializedFood.errors, status=400)


@api_view(['PUT'])
def updateFood(request, id):
    try:
        foodToUpdate = food.objects.get(id=id)
        food_data = request.data
        serializedFood = FoodSerializer(foodToUpdate, data=food_data)
        if serializedFood.is_valid():
            isFoodExist = food.objects.filter(name=food_data['name']).exists()
            if (isFoodExist):
                return Response({
                    "error": "Food is already exist",
                    "success": False
                }, status=400)
            else:
                serializedFood.save()
                return Response(serializedFood.data, status=200)
        return Response(serializedFood.errors, status=400)
    except ObjectDoesNotExist:
        return Response({
            "error": "Food does not exist",
            "success": False
        }, status=404)


@api_view(['DELETE'])
def deleteFood(request, id):
    try:
        foodToDelete = food.objects.get(id=id)
        foodToDelete.delete()
        return Response({
            "message": "Food deleted successfully",
            "success": True
        }, status=200)
    except ObjectDoesNotExist:
        return Response({
            "error": "Food does not currently exist in the database",
            "success": False
        }, status=404)
