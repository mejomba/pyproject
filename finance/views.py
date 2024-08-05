from django.shortcuts import render
from django.views.generic import View

# from .scraper import scrap_codal


# class CodalNewReport(View):
#     template_name = 'finance/index.html'
#
#     def get(self, request, *args, **kwargs):
#         content = scrap_codal('وکغدیر')
#         context = {'links': content}
#         return render(request, self.template_name, context)
