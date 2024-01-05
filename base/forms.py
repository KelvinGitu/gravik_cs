from django import forms
from django.core.validators import EmailValidator


class ContactUsForm(forms.Form):
    name = forms.CharField(max_length=20, required=True)
    email = forms.CharField(validators=[EmailValidator()], required=True)
    phone = forms.CharField(max_length=15, required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)