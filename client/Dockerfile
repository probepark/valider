FROM node:0.12.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install grunt-cli -g
RUN npm install bower -g

# Install Ruby.
RUN \
  apt-get update && \
  apt-get install -y ruby ruby-dev 

# install compass
RUN gem install --no-rdoc --no-ri compass

COPY package.json /usr/src/app/
COPY bower.json /usr/src/app/
RUN npm install
RUN bower install --allow-root
COPY . /usr/src/app

EXPOSE 9000

CMD ["grunt", "serve"]
