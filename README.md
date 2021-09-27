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
Dentro del proyecto encontrará un archivo Dockerfile, que contiene variables de entorno y con las credenciales dadas luego de crear su cuenta, rellenar las variabes de entorno como se muestra a continuación:

```shell
HOST_NAME=
PORT=
USER_EMAIL=
PASS=
```
### Creando imagen
Creamos una imagen, donde dice 'nameImage' pornga el nombre que le quiera dar a la misma
```shell
sudo docker build -t nameImage:1.0 .
```

### Ejecutando imagen
Luego de haber seguido los pasos anteriores, podemos ejecutar la imagen:
```shell
sudo docker run nameImage:1.0 
```

en consola se mostrará que el envío del email fue realizado con exito. Para confirmarlo ingrese a su bandeja de entrada suministrada por la misma página y podrá ver el correo con los datos procesados.
Si quiere modificar los datos del archivo data.csv tendra que crear una nueva imagen.