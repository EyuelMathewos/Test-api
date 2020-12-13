# FROM node:10 AS ui-build
# WORKDIR /usr/src/app
# COPY my-app/ ./my-app/
# RUN cd my-app && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /usr/src/app
COPY ./ ./api/
RUN cd api && npm install && npm run build

FROM node:10
WORKDIR /usr/src/app/
# COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
COPY --from=server-build /usr/src/app/api/build ./
RUN ls

EXPOSE 4000

CMD ["node", "./bundle.js"]
