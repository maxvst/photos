# Photos

## Зачем это нужно?
Web приложение создано с целью посмотреть, как работает React/Redux,
и составить собственное впечатление о связке этих библиотеках.
Чтобы сосредоточиться на изучаемых технологиях, в проекте используется минимальное количество
дополнительных библиотек.

## Что делает?
Приложение предоставляет пользователю возможность поиска и просмотра фотографий, 
расположенных в разных альбомах.
На бекенде, реализованном с помощью Python/Django, альбомы представляют собой директории, 
расположенные на одном уровне вложенности.

## Как установить и запустить?

Для установки и запуска бекенда необходимо набрать следующие команды:

```sh
cd back
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py runserver
```

Для усатановки и запуска фронтенда необходимо набрать:

```sh
cd front
npm install
npm start
```

Перейти в любимом браузере по адресу 
`http://localhost:3000/`