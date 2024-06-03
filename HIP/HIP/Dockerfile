FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]


# docker pull node:alpine
# docker build -t hip -f Dockerfile .
# docker run -it --network olivia-net -p 4200:4200 hip

# I can also run hip with the bridge network, just not the 'host' network
