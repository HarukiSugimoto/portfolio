FROM nginx:1.22-alpine
ENV TZ=UTC

# Nginxの設定ファイルコピー
COPY ./*.conf /etc/nginx/conf.d/

EXPOSE 80

# Nginxをフォアグラウンドで実行
CMD ["nginx", "-g", "daemon off;"]