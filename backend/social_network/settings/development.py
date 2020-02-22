from .base import *

DEBUG = True

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DOMAIN = 'localhost'
SITE_NAME = config('SITE_NAME')










#Settings for Rest-Auth which is no longer used.

# SITE_ID = 1
# # Add the 'allauth' backend to AUTHENTICATION_BACKEND and keep default ModelBackend
# AUTHENTICATION_BACKENDS = ['django.contrib.auth.backends.ModelBackend',
#                            'allauth.account.auth_backends.AuthenticationBackend']
# # EMAIL_BACKEND so allauth can proceed to send confirmation emails
# # ONLY for development/testing use console

# # Custom allauth settings
# # Use email as the primary identifier
# ACCOUNT_AUTHENTICATION_METHOD = 'email'
# ACCOUNT_EMAIL_REQUIRED = True

# # Make email verification mandatory to avoid junk email accounts
# ACCOUNT_EMAIL_VERIFICATION = 'mandatory'

# # Eliminate need to provide username, as it's a very old practice
# ACCOUNT_USERNAME_REQUIRED = False
