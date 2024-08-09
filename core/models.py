from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django.contrib.auth.models import AbstractUser, User


class BaseModel(models.Model):
    create_at = models.DateTimeField(auto_now=True)
    last_update = models.DateTimeField(auto_now_add=True)
    delete_date = models.DateTimeField(null=True, blank=True)
    is_deleted = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_spacial = models.BooleanField(default=False)

    class Meta:
        abstract = True


class GenericBaseModel(BaseModel):
    images = GenericRelation('file.Image', related_query_name="parent_object_no")
    files = GenericRelation('file.File', related_query_name="parent_object_no")

    class Meta:
        abstract = True


class Image(BaseModel):
    path = models.ImageField(upload_to='media/image', null=True, blank=True)


class UserProfile(GenericBaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)