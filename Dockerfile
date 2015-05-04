FROM rails:onbuild

# Add default foreman config
ADD Procfile /app/Procfile

ENV RAILS_ENV production

CMD bundle exec rake assets:precompile && foreman start -f Procfile

EXPOSE 3000
