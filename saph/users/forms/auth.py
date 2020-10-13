import datetime
from django import forms
from django.contrib.auth.models import User


class JoinusForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('username', 'password')
        widgets = {
            'password': forms.PasswordInput(attrs={'class': 'w100 ty1'}),
        }