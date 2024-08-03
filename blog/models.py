from django.db import models
from core.models import BaseModel
from core.models import UserProfile
from ckeditor_uploader.fields import RichTextUploadingField


class Post(BaseModel):
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    abstract = models.CharField(max_length=255)
    content = RichTextUploadingField()