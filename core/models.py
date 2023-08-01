from django.db import models


class Image(models.Model):
    path = models.ImageField(upload_to='media')
