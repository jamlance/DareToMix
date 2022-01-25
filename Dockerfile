# pull official base image
FROM node:16.13.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --silent yarn
RUN yarn

# add app
COPY . ./

RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf 

# start app
CMD ["npm", "start"]
