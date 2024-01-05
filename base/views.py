from django.shortcuts import render, redirect
from .forms import ContactUsForm
from django.http import HttpResponse
from django.core.mail import EmailMessage



def main(request):
    return render(request, 'main.html')

def about(request):
    return render(request, 'about.html')

# def contact(request): 
#     return render(request, 'contact.html')

def contact(request):
    if request.method == 'POST':
        form = ContactUsForm(request.POST)
        if form.is_valid():
            # Process the form data
            name = form.cleaned_data['name']
            email = form.cleaned_data["email"]
            message = form.cleaned_data['message']
            EmailMessage(
               'Contact Form Submission from {}'.format(name),
               message,
            #    'form-response@example.com', # Send from (your website)
               ['gitukelvin01@gmail.com'], # Send to (your admin email)
            #    [],
               reply_to=[email] # Email from the form to get back to
           ).send()
            return redirect('success')
    else:
        form = ContactUsForm()
    return render(request, 'contact.html', {'form': form})


def success(request):
   return HttpResponse('Success!')
