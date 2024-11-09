import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'first_project.settings')

import django
django.setup()

# Fake Pop Script
import random
from first_app.models import Topic, Webpage, AccessRecord
from faker import Faker

fakegen = Faker()
topics = ["Social", "Search", "Marketplace", "News", "Games"]

def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]  # Perbaiki 'choise' menjadi 'choice'
    t.save()  # Pastikan topic disimpan
    return t

def populate(N=5):
    for entry in range(N):
        # Mendapatkan topic untuk setiap entri
        top = add_topic()

        # Membuat data palsu untuk entri
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company()

        # Membuat entri webpage baru
        webpg = Webpage.objects.get_or_create(topic=top, url=fake_url, name=fake_name)[0]

        # Membuat access record
        acc_rec = AccessRecord.objects.get_or_create(webpage=webpg, date=fake_date)[0]  # Pastikan menggunakan relasi yang benar


if __name__ == '__main__':
    print("Populating script...")
    populate(20)
    print("Populating complete!")
