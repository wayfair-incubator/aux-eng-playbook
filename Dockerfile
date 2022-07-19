FROM node:14
WORKDIR /app
COPY ./ /app/
RUN yarn
VOLUME "/src" /app/src
WORKDIR "/app"
EXPOSE 8000
CMD ["yarn", "start"]
