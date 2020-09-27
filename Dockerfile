FROM python:3.8-alpine

ENV LANG ko_KR.UTF-8
RUN set -ex \
    && ln -s -f /usr/share/zoneinfo/Asia/Seoul /etc/localtime

COPY . /saph/
WORKDIR /saph

RUN set -ex \
    && pip install -e .

CMD ["python", "saph/manage.py", "runserver", "0.0.0.0:8000"]