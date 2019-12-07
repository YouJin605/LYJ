from django.shortcuts import render,get_object_or_404,get_list_or_404
from rest_framework import generics
from .models import Post,Good,MainpageImage,LookbookImage,Contact
from .serializers import PostSerializer,GoodSerializer,forMainpageSerializer,MainImageSerializer,LookbookImageSerializer,ContactSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse(0)
    
class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ListContact(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class DetailContact(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

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

class ListLookbookImage(generics.ListCreateAPIView):
    queryset = LookbookImage.objects.filter(isMain=True)
    serializer_class = LookbookImageSerializer

# def DetailLookbookImage(request,pk):
#     LookbookImage.get(modelNumber=pk)


class DetailLookbookImage(generics.ListAPIView):
#    queryset = get_list_or_404(LookbookImage, pk=modelNumber)
    serializer_class = LookbookImageSerializer
    #lookup_field= 'modelNumber'
    #queryset = LookbookImage.objects.filter()
    def get_queryset(self):
        #number=self.request.query_params.get('number',None)
        queryset = LookbookImage.objects.all()
        #print("number:",number)
        #if number is not None:
        queryset = queryset.filter(modelNumber=self.kwargs['pk'])
        return queryset

# class PurchaseList(generics.ListAPIView):
#     serializer_class = PurchaseSerializer

#     def get_queryset(self):
#         """
#         This view should return a list of all the purchases for
#         the user as determined by the username portion of the URL.
#         """
#         username = self.kwargs['username']
#         return Purchase.objects.filter(purchaser__username=username)
