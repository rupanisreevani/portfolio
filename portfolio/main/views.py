from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Contact

@csrf_exempt
def contact_api(request):
    if request.method == "POST":
        data = json.loads(request.body)
        Contact.objects.create(
            name=data.get("name"),
            email=data.get("email"),
            message=data.get("message")
        )
        return JsonResponse({"status": "success"})

    return JsonResponse({"error": "Invalid request"}, status=400)
