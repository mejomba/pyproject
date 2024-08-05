FROM python:3.9.2-slim-buster
LABEL maintainer="mojtaba aminzadeh"

ENV PYTHONUNBUFFERED=1
COPY requirements.txt /requirements.txt
COPY . /app
WORKDIR /app

EXPOSE 8000

RUN python -m venv /venv && \
    /venv/bin/pip install --upgrade pip && \
#    apk add --update --no-cache postgresql-client && \
    apt-get install --yes --quiet postgresql-client && \
#    apk add --update --no-cache --virtual .tmp-deps \
    apt-get install --yes --quiet \
        build-base postgresql-dev musl-dev linux-headers

RUN apt-get update --yes --quiet

# Installs the dependencies used by Chrome and Selenium
RUN apt-get install --yes --quiet --no-install-recommends \
    gettext \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libatspi2.0-0 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libx11-6 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    libxshmfence1 \
    wget \
    xdg-utils \
    netcat \
    xvfb \
 && rm -rf /var/lib/apt/lists/*

# Install Chrome
RUN dpkg -i ./bin/google-chrome.deb

RUN /venv/bin/pip install -r /requirements.txt && \
#     apk del .tmp-deps && \
    /venv/bin/python manage.py collectstatic --noinput && \
    adduser --disabled-password --no-create-home app && \
    chown -R app:app /venv && \
    mkdir -p /vol/web/static && \
    mkdir -p /vol/web/media && \
    chown -R app:app /vol && \
    mkdir /home/app && \
    chown -R app:app /home/app && \
    chmod -R 755 /vol && \

ENV PATH="/venv/bin:$PATH"
USER root