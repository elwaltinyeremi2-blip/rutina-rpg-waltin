# Rutina RPG en la computadora

Tres formas de tenerla en la PC, de la más fácil a la más "app de verdad".

---

## 1. La más rápida (30 segundos, sin instalar nada)

Abre la app en **Chrome o Edge**:
https://elwaltinyeremi2-blip.github.io/rutina-rpg-waltin/

En la barra de direcciones aparece un icono de **instalar** (una pantalla con una flecha,
o menú `⋮` → *Instalar Rutina RPG*). Le das y queda como una aplicación con su propio
icono en el escritorio y en el menú de inicio, sin barra de navegador.

Es una app real: se abre sola, funciona sin internet y se actualiza sola.
**Para la mayoría de la gente esto es todo lo que necesita.**

---

## 2. El .exe de verdad (si quieres el archivo)

Necesitas [Node.js](https://nodejs.org) instalado. En Windows, abre la carpeta
`escritorio` en la terminal y ejecuta:

```
npm install
npm run exe
```

El archivo aparece en `escritorio/salida/Rutina RPG 1.0.0.exe`.
Es **portable**: lo copias donde quieras y lo abres con doble clic, no hace falta instalarlo.

Para probarlo antes de compilar: `npm start`.

---

## 3. En el iPhone (lo principal)

Safari → abre la app → botón de compartir → **Añadir a pantalla de inicio**.
Queda con su icono, a pantalla completa y funciona sin internet.

---

## ⚠️ Importante: el progreso NO se sincroniza entre dispositivos

Tu nivel, XP, racha y monedas se guardan **en cada dispositivo por separado**.
El progreso del iPhone y el de la PC son dos partidas distintas.

**Recomendación: usa el iPhone como tu dispositivo principal** y la PC solo para mirar.

Si quieres pasar el progreso de un lado a otro:
`⚙️ → Exportar respaldo` en el origen, y `⚙️ → Importar respaldo` en el destino.
Hazlo también de vez en cuando como copia de seguridad — si borras los datos del
navegador, se pierde todo.
