---
title: "pnpm: Cómo aumentar tu productividad"
date: 06-07-2023
imgURL: /noob-blog/images/pnpm-image.png

tags:
    - productividad
    - tips

---

Hoy les traigo una herramienta que ojalá haya conocido antes. Hablo de **pnpm** un administrador de paquetes de Node.js alternativo al tradicional **npm** y **yarn**. Pero... ¿qué tiene de nuevo y qué ventajas trae? se preguntaran. Pues es una solución excelente para ahorrar espacio en disco y evitar la descarga de dependencias innecesarias.

## ¿Cómo funciona?

PNPM utiliza un almacenamiento compartido de paquetes, en vez de guardar el paquete en el proyecto solo guarda un enlace, lo que significa que los paquetes se instalan una sola vez y se comparten entre todos los proyectos que los requieren. Esto ahorra espacio en disco, ya que los paquetes que se comparten no necesitan ser duplicados en cada proyecto. Cada vez que comienzas un nuevo proyecto es posible que puedas reutilizar los paquetes que instalas y ahorres conexion. De otra manera, si ya instalaste react por ejemplo, pues instalarlo de nuevo es pan comido!

![NPM vs PNPM Image](/noob-blog/images/npm-vs-pnpm.png)

Ademas les viene bien en momentos de poca estabilidad de internet y mala conexion. A continuacion te dejo unos tips para que le puedas sacar el maximo provecho a este package manager.

## TIPS

**1 - Instalación de paquetes offline:** Si ya tienes instalado un paquete con la flag `--prefer-offline` se puede instalar de forma instantanea y sin conexion. Si por el camino se pierde algun paquete y no lo encuentra descarga solo aquellas partes que faltaron aumentando la velocidad de instalacion, tambien esta el flag `--offline` que instala el paquete offline estructo, es decir, si hace falta descargar algo no lo va a hacer y dara error:

Ejemplo: `pnpm add dayjs --prefer-offline // instala un paquete offline`

**2 - Configuración de reintentos:** De manera predeterminada **pnpm** hace 3 intentos a la hora de descargar un paquete y el tiempo que se demora de un reintento a otro se demora cada vez mas, esto no es favorable para redes lentas y se puede modificar en la configuracion. Para esto vamos a escribir 3 comandos:

``` bash
# Establece la cantidad de reintentos que hace si falla al descargar
pnpm config set fetch-retries=100

# Establece el tiempo de espera mínimo en 1s
pnpm config set fetch-retry-mintimeout=1000

# Establece el tiempo de espera maximo en 2s
pnpm config set fetch-retry-maxtimeout=2000
```

Esta configuracion potenciará por 100 tu productividad a la hora de instalar paquetes en tus proyectos.

👍 Espero que te haya ayudado este post!
