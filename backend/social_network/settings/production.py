from .base import *

DEBUG = False

# following two constants are used by Djoser to send email
DOMAIN = config('IP')
SITE_NAME = config('SITE_NAME')

ALLOWED_HOSTS += [config('DOMAIN_NAME'), config('IP')]

# SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

SENDGRID_API_KEY = config('SENDGRID_API_KEY')
EMAIL_HOST = config('EMAIL_HOST')
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = SENDGRID_API_KEY
EMAIL_PORT = config('EMAIL_PORT', cast=int)
EMAIL_USE_TLS = config('EMAIL_USE_TLS', cast=bool)
