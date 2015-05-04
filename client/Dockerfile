FROM node:onbuild

RUN npm install grunt-cli -g
RUN npm install bower -g

RUN bower install --allow-root

# Install Ruby.
RUN \
  apt-get update && \
  apt-get install -y ruby ruby-dev 

# install compass
RUN gem install --no-rdoc --no-ri compass

EXPOSE 9000

CMD ["grunt", "serve"]
