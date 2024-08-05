#!/bin/sh

cd /var/www/html/backend

# .envが存在しなければ、.env.localからコピー
if [ ! -e ".env" ]; then
  cp .env.example .env
fi

# PHP-FPM 起動
exec php-fpm