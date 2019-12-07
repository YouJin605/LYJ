from rest_framework import serializers
from .models import Post, Good, MainpageImage, LookbookImage, Contact

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user',
            'usertitle',
            'usercontent',
        )
        model = Contact

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
    


class LookbookImageSerializer(serializers.ModelSerializer):
    photo1=serializers.ImageField(use_url=True)
    class Meta:
        fields = (
            'id',
            'photo1',
            'modelNumber',
            'isMain',
        )
        model = LookbookImage
        #lookup_field='modelNumber'
