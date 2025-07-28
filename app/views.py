from django.shortcuts import render, redirect
from django.template import loader
from django.contrib import messages
from django.http import HttpResponse
from rest_framework import response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login,user_logged_in,user_logged_out,user_login_failed,get_user,get_user_model,base_user,update_session_auth_hash,urls

# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request = request))