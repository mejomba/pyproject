FROM python:3.10-alpine3.18
LABEL maintainer="mojtaba aminzadeh"

ENV PYTHONUNBUFFERED=1
COPY requirements.txt /requirements.txt
COPY . /app
WORKDIR /app

EXPOSE 8000

RUN python -m venv /venv && \
    /venv/bin/pip install --upgrade pip && \
#    apk add --update --no-cache postgresql-client && \
    apk add --update postgresql-client && \
#    apk add --update --no-cache --virtual .tmp-deps \
    apk add --update --virtual .tmp-deps \
        build-base postgresql-dev musl-dev linux-headers

RUN /venv/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    /venv/bin/python manage.py collectstatic --noinput && \
    adduser --disabled-password --no-create-home app && \
    chown -R app:app /venv && \
    mkdir -p /vol/web/static && \
    mkdir -p /vol/web/media && \
    chown -R app:app /vol && \
    mkdir /home/app && \
    chown -R app:app /home/app && \
    chmod -R 755 /vol && \
    pip list

ENV PATH="/venv/bin:$PATH"
USER root