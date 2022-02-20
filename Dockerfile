FROM node:16.14.0@sha256:fd86131ddf8e0faa8ba7a3e49b6bf571745946e663e4065f3bff0a07204c1dde

EXPOSE 4200

WORKDIR /code

ENV PATH /code/node_modules/.bin:$PATH

COPY package.json /code/package.json
RUN npm install -g npm@latest && npm install && npm install -g @angular/cli
COPY . /code

CMD ["/code/docker-entrypoint.sh", "-n"]