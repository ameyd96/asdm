FROM httpd
COPY ./dist/app2/ /usr/local/apache2/htdocs

EXPOSE 80

CMD apachectl -D FORGROUND