# Generated by Django 2.1.7 on 2019-02-13 19:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='base',
            old_name='title',
            new_name='location',
        ),
        migrations.RenameField(
            model_name='image',
            old_name='name',
            new_name='location',
        ),
        migrations.RemoveField(
            model_name='image',
            name='source',
        ),
    ]
