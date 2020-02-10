FROM python:3.7-alpine
ENV PYTHONUNBUFFERED 1
COPY . /backend
WORKDIR /backend
RUN cd /backend
#RUN pip install pipenv
#RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8000
#CMD [ "python", "./todo/manage.py", "runserver", "0.0.0.0:8000" ]