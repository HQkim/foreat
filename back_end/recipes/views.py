from contextlib import nullcontext
from django.http import Http404
from django.shortcuts import render
from django.db.models import Q
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from recipes.serializers import RecipeSerializer, RecipeListSerializer, ReviewSerializer
from recipes.storages import FileUpload, s3_client

from members.token import decode_token
from recipes.models import Recipe, Ingredient, Category
from members.models import Member
import json
import re

# Create your views here.

class RecipeList(ListAPIView, LimitOffsetPagination):
    def get_queryset(self):
        word = self.request.GET['category']
        if word in ['Europe', 'Asia', 'America', 'Africa', 'Oceania', 'Beef', 'Pork', 'Lamb', 'Poultry', 'Chicken', 'Seafood', 'Vegetable',
        'Bread', 'Rice', 'Pasta', 'Dessert',]:
            category = Category.objects.filter(category_name=word)
            object_list = Recipe.objects.filter(categories__in=category)
            return object_list
        elif word in ['One', 'Two', 'Four', 'Party']:
            if word == 'One':
                object_list = Recipe.objects.filter(servings=1)
            elif word == 'Two':
                object_list =Recipe.objects.filter(servings=2)
            elif word == 'Four':
                object_list =Recipe.objects.filter(servings=4)
            else:
                object_list =Recipe.objects.filter(servings__gt=4)
            return object_list
        elif word in ['30min', '60min', '120min', '180min', '24hours']:
            time = int(re.sub(r'[^0-9]', '', word))
            if time == 30:
                object_list = Recipe.objects.filter(total_time__lte=time)
            elif time == 60:
                object_list = Recipe.objects.filter(total_time__gt=30, total_time__lte=time)
            elif time == 120:
                object_list = Recipe.objects.filter(total_time__gt=60, total_time__lte=time)
            elif time == 180:
                object_list = Recipe.objects.filter(total_time__gt=120, total_time__lte=time)
            elif time == 24:
                time *= 60
                object_list = Recipe.objects.filter(total_time__gt=180, total_time__lte=time)
            return object_list

    def get(self, request, format=None):
        
        recipes = self.get_queryset()
        results = self.paginate_queryset(recipes)
        serializer = RecipeListSerializer(results, many = True)
        for i in serializer.data:
            i['images'] = json.loads(i['images'])[0]
        return Response(serializer.data)


class RecipeDetail(APIView):

    def get_object(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        recipe = self.get_object(pk)
        serializer = RecipeSerializer(recipe)
        response_data = serializer.data
        response_data['ingredient_raw'] = json.loads(serializer.data['ingredient_raw'])
        response_data['instructions'] = json.loads(serializer.data['instructions'])
        response_data['images'] = json.loads(response_data['images'])[0]
        # 추천 리스트 추가
        return Response(response_data)


class Review(APIView):

    def post(self, request, pk, format=None):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # member_seq = decode_token(token)
        member_seq = 1
        file = request.FILES['image_url']
        image_url = FileUpload(s3_client).upload(file)
        request.data['image_url']=image_url

        serializer = ReviewSerializer(data=request.data)

        if serializer.is_valid():
            # member추가
            serializer.save(member_seq=Member.objects.get(member_seq=member_seq), recipe_seq=Recipe.objects.get(recipe_seq=pk))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
