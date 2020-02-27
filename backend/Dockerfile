FROM python:3.7-alpine3.11 as dev
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt /backend/requirements.txt
RUN cd /backend
RUN pip install -r requirements.txt
EXPOSE 8000
#CMD [ "python", "./todo/manage.py", "runserver", "0.0.0.0:8000" ]

FROM dev as prod
CMD [ "python3", "./manage.py", "collectstatic" ]
COPY . /backend
#CMD [ "ls" ]
#CMD [ "python", "./todo/manage.py", "runserver", "0.0.0.0:8000" ]