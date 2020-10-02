FROM python:3.8-alpine

ENV LANG ko_KR.UTF-8
RUN set -ex \
    && ln -s -f /usr/share/zoneinfo/Asia/Seoul /etc/localtime \
    && apk add --update npm

COPY . /saph/
WORKDIR /saph

RUN set -ex \
    && pip install -e .

WORKDIR /saph/saph

RUN set -ex \
    && npm init -y \
    && npm install \
    && chmod +x ../run.sh

CMD ["sh", "../run.sh"]