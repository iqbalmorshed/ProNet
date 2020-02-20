from django.urls import include, path

urlpatterns = [
    path('posts/', include('posts.urls')),
    path('comments/', include('comments.urls')),
    path('users/', include('users.urls')),
    path('profiles/', include('profiles.urls')),
    path('post-stats/', include('post_stats.urls')),
    path('summary-stats/', include('summary_stats.urls')),
    path('connections/', include('connections.urls')),


    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('accounts/', include('allauth.urls')),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

]
