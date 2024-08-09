from django.db import models
from core.models import BaseModel
from core.models import User
from ckeditor_uploader.fields import RichTextUploadingField


class Post(BaseModel):
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='نویسنده')
    abstract = models.CharField(max_length=255, verbose_name='چکیده')
    content = RichTextUploadingField(verbose_name='محتوا')
    # thumbnail =  generic image
    title = models.CharField(max_length=255, verbose_name='عنوان')
