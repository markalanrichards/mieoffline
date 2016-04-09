# FROM alpine:latest
FROM mhart/alpine-node:latest
MAINTAINER James McAllister <james@mcallister.xyz>

RUN apk --update --no-progress add unrar bash git
RUN npm config set bin-links false

WORKDIR /app

EXPOSE 3000

CMD ["node", "./start.js"]

#RUN npm run james
# docker run -it -p 3000:3000 -v //c/Users/James/files/docker/mie/mieoffline/:/app alpine-node bash
