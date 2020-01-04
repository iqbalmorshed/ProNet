from rest_framework.permissions import BasePermission


class IsAuthor(BasePermission):

    message = "you must be the author of this object"

    def has_object_permission(self, request, view, obj):
        return obj.author==request.user