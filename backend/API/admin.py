from django.contrib import admin

from .models import Post,Good,MainpageImage,LookbookImage

admin.site.register(Post)
admin.site.register(Good)
admin.site.register(MainpageImage)
admin.site.register(LookbookImage)
