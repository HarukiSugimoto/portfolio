
FROM php:8.2-fpm

WORKDIR /var/www/html/backend

RUN apt-get update && apt-get install -y \
	libpng-dev \
	libonig-dev \
	libxml2-dev \
	zip \
	unzip \
	git \
	curl

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY ./conf/php.ini /usr/local/etc/php/

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh