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

# build
RUN yarn build
RUN yarn global add serve

# start app
CMD ["serve", "-s", "build",  "-l", "3005"]
