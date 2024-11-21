from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("This is Home Page")

def help(request):
    return render(request, "AppTwo/help.html")
