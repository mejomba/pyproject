from django.core.management.base import BaseCommand
from core.models import User


class Command(BaseCommand):

    def handle(self, *args, **options):
        if User.objects.count() == 0:
            User.objects.admin = User.objects.create_superuser(email='main@mail.com', username='admin', password='admin@123')
        else:
            print('Admin accounts can only be initialized if no Accounts exist')