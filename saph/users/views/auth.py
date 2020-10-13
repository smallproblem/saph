from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm
from django.views.generic import CreateView
from django.shortcuts import reverse, redirect

from users.forms import JoinusForm


class LoginView(LoginView):
    template_name = 'users/login.html'
    authentication_form = AuthenticationForm


class SignupView(CreateView):
    form_class = JoinusForm
    template_name = 'users/joinus.html'

    def form_valid(self, form):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']
        User.objects.create_user(
            username=username,
            password=password
        ).save()
        return redirect('login')