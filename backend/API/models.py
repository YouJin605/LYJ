from django.db import models
from django.conf import settings
from django.utils import timezone
import os
from uuid import uuid4

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title


class Good(models.Model):
    def date_upload_to(self, filename):
        # upload_to="%Y/%m/%d" 처럼 날짜로 세분화
        ymd_path = timezone.now().strftime('%Y/%m/%d') 
        # 길이 32 인 uuid 값
        uuid_name = uuid4().hex
        # 확장자 추출
        extension = os.path.splitext(filename)[-1].lower()
        # 결합 후 return
        return '/'.join([
            ymd_path,
            uuid_name + extension,
        ])
    name = models.CharField(
        max_length=128,
        verbose_name="상품명")
    photoUrl = date_upload_to
    photo1 = models.ImageField(upload_to=photoUrl)
    photo2 = models.ImageField(upload_to=photoUrl)
    price = models.IntegerField()
    quantity = models.IntegerField()
    code = models.CharField(
        max_length=1288,
        verbose_name="상품코드")
    forMainpage = models.BooleanField(
        default=False
    )
    
    def __str__(self):
        return self.name

    class Meta:
         db_table = 'API_good'
         verbose_name = '상품'
         verbose_name_plural = '상품들'


class MainpageImage(models.Model):
    def date_upload_to(self, filename):
            # upload_to="%Y/%m/%d" 처럼 날짜로 세분화
        ymd_path = timezone.now().strftime('%Y/%m/%d') 
        # 길이 32 인 uuid 값
        uuid_name = uuid4().hex
        # 확장자 추출
        extension = os.path.splitext(filename)[-1].lower()
        # 결합 후 return
        return '/'.join([
            ymd_path,
            uuid_name + extension,
        ])
    photoUrl = date_upload_to
    photo1 = models.ImageField(upload_to=photoUrl)

    class Meta:
         db_table = 'API_mainImage'
         verbose_name = 'MainImage'
         verbose_name_plural = 'MainImages'

class Lookbook(models.Model):
    def data_upload_to(self, filename):
        ymd_path = timezone.now().strftime('%Y/%m/%d')
        uuid_name = uuid4().hex
        extension = os.path.splitext(filename)[-1].lower()
        return '/'.join([
            ymd_path,
            uuid_name + extension,
        ])
    person = models.CharField(max_length=20 ,verbose_name="모델명")
    photoUrl = data_upload_to
    photo_00 = models.ImageField(upload_to=photoUrl)
    photo_01 = models.ImageField(upload_to=photoUrl)
    photo_02 = models.ImageField(upload_to=photoUrl)
    photo_03 = models.ImageField(upload_to=photoUrl)
    photo_04 = models.ImageField(upload_to=photoUrl)
    photo_05 = models.ImageField(upload_to=photoUrl)
    photo_06 = models.ImageField(upload_to=photoUrl)
    photo_07 = models.ImageField(upload_to=photoUrl)
    photo_08 = models.ImageField(upload_to=photoUrl)

    class Meta:
         db_table = 'API_lookbook'
         verbose_name = '모델명'
         verbose_name_plural = '사진들'