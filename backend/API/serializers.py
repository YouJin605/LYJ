from rest_framework import serializers
from .models import Post, Good, MainpageImage, Lookbook

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post

class LookbookSerializer(serializers.ModelSerializer):
    photo_00 = serializers.ImageField(use_url=True)
    photo_01 = serializers.ImageField(use_url=True)
    photo_02 = serializers.ImageField(use_url=True)
    photo_03 = serializers.ImageField(use_url=True)
    photo_04 = serializers.ImageField(use_url=True)
    photo_05 = serializers.ImageField(use_url=True)
    photo_06 = serializers.ImageField(use_url=True)
    photo_07 = serializers.ImageField(use_url=True)
    photo_08 = serializers.ImageField(use_url=True)
    class Meta:
        fields = (
            'person',
            'photo_00',
            'photo_01',
            'photo_02',
            'photo_03',
            'photo_04',
            'photo_05',
            'photo_06',
            'photo_07',
            'photo_08'
        )
        model = Lookbook

class GoodSerializer(serializers.ModelSerializer):
    photo1=serializers.ImageField(use_url=True)
    photo2=serializers.ImageField(use_url=True)
    class Meta:
        fields = (
            'id',
            'name',
            'photo1',
            'photo2',
            'price',
            'code',
            'quantity',
            'forMainpage',
        )
        model = Good


class forMainpageSerializer(serializers.ModelSerializer):
    photo1=serializers.ImageField(use_url=True)
    photo2=serializers.ImageField(use_url=True)
    class Meta:
        fields = (
            'id',
            'name',
            'photo1',
            'photo2',
            'price',
            'code',
            'quantity',
            'forMainpage',
        )
        model = Good


class MainImageSerializer(serializers.ModelSerializer):
    photo1=serializers.ImageField(use_url=True)
    class Meta:
        fields = (
            'id',
            'photo1',
        )
        model = MainpageImage
    