import os
from datetime import datetime

from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from core.models import BaseModel


def uploaded_image_path(instance, filename: str):
    """generate file path for image"""
    content_type = ContentType.objects.filter(id=instance.content_type_id).first()
    now = datetime.now()
    name = '_'.join(filename.split(' '))
    name = f"{content_type.app_label}_{content_type.model}_{now.date()}_{now.hour}_{now.minute}_{now.microsecond}_{name}"

    return os.path.join('media/image/', name)


def uploaded_file_path(instance, filename: str):
    """generate file path for file"""
    content_type = ContentType.objects.filter(id=instance.content_type_id).first()
    now = datetime.now()
    name = '_'.join(filename.split(' '))
    name = f"{content_type.app_label}_{content_type.model}_{now.date()}_{now.hour}_{now.minute}_{now.microsecond}_{name}"

    return os.path.join('media/file/', name)


class Image(BaseModel):
    path = models.ImageField(upload_to=uploaded_image_path, null=True, blank=True)
    alt = models.CharField(max_length=100, null=True, blank=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.DO_NOTHING)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        indexes = [
            models.Index(fields=["content_type", "object_id"]),
        ]


class File(BaseModel):
    path = models.FileField(upload_to=uploaded_file_path, null=True, blank=True)
    alt = models.CharField(max_length=100, null=True, blank=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.DO_NOTHING)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    class Meta:
        indexes = [
            models.Index(fields=["content_type", "object_id"]),
        ]