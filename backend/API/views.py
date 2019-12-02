from django.shortcuts import render
from rest_framework import generics

from .models import Post,Good,MainpageImage,Lookbook
from .serializers import PostSerializer,GoodSerializer,forMainpageSerializer,MainImageSerializer,LookbookSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ListGood(generics.ListCreateAPIView):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer

class DetailGood(generics.RetrieveUpdateDestroyAPIView):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer

class ListforMainpage(generics.ListCreateAPIView):
    queryset = Good.objects.filter(forMainpage=True)
    serializer_class = forMainpageSerializer

class DetailforMainpage(generics.RetrieveUpdateDestroyAPIView):
    queryset = Good.objects.filter(forMainpage=True)
    serializer_class = forMainpageSerializer

class ListMainpageImage(generics.ListCreateAPIView):
    queryset = MainpageImage.objects.all()
    serializer_class = MainImageSerializer

class ListLookbook(generics.ListCreateAPIView):
    queryset = Lookbook.objects.all()
    serializer_class = LookbookSerializer