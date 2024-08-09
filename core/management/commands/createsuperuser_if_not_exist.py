from django.core.management.base import BaseCommand
from core.models import User
from utils import bcolors


class Command(BaseCommand):

    def handle(self, *args, **options):
        if User.objects.count() == 0:
            User.objects.admin = User.objects.create_superuser(email='main@mail.com', username='admin', password='admin@123')
            print(f'{bcolors.GREEN}super user create success: username: admin, password: admin@123{bcolors.END}')
        else:
            print(f'{bcolors.RED}Admin accounts can only be initialized if no Accounts exist{bcolors.END}')