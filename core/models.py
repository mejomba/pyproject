from django.db import models
from django.contrib.auth.models import AbstractUser, User


class Image(models.Model):
    path = models.ImageField(upload_to='media')


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)