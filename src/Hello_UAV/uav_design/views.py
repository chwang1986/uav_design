from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return HttpResponse("Hello UAV!")
	
def simulator(request):
	return render(request,'simulator.html')
	
