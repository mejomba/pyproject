from django.urls import path
from . import views


urlpatterns = [
    path('', views.CodalNewReport.as_view(), name='codal_new_report')
]