#usar una imagen base
#copiar el contenido
#ejecutar comando

FROM node:10

COPY / .

ENV HOST_NAME=
ENV PORT=
ENV USER_EMAIL=
ENV PASS=


ENTRYPOINT ["node", "src/process.js"]
