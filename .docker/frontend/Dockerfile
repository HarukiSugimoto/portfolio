FROM node

RUN apt update

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH
CMD ["sh", "-c", "npm install && npm run dev"]
WORKDIR /src