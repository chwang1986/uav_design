from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def cTest(request):
	return HttpResponse("Hello Component Test!")

def threejsTest(request):
	return render(request,"threejs.html")
	