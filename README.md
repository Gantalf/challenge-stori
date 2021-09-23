## Objetivos del Challenge

Para este desafío, debe crear un sistema que procese un archivo desde un directorio montado. El archivo
contendrá una lista de transacciones de débito y crédito en una cuenta. Tu función debería procesar el archivo
y enviar información resumida a un usuario en forma de correo electrónico.

---

### Empezando

#### Instalación

Parado en la raíz del proyecto ejecutar

```shell
npm install
```

Luego, crearse una cuenta en mailtrap.io, donde creará un email falso para la prueba.
Dentro de /src debe crear un archivo .env, y con las credenciales dadas luego de crear su cuenta, rellenar las variabes de entorno como se muestra en el archivo de ejemplo 'example.env':

```shell
HOST_NAME=
PORT=
USER_EMAIL=
PASS=
```

Luego, ejecute 
```shell
npm run start
```

en consola se mostrará que el envío del email fue realizado con exito. Para confirmarlo ingrese a su bandeja de entrada suministrada por la misma página y podrá ver el correo, con los datos procesados.