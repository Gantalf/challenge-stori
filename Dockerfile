#usar una imagen base
#copiar el contenido
#ejecutar comando

FROM node:10

COPY / .

ENV HOST_NAME=smtp.mailtrap.io
ENV PORT=2525
ENV USER_EMAIL=c196281cf44c32
ENV PASS=d99a357c5350fd


ENTRYPOINT ["node", "src/process.js"]
