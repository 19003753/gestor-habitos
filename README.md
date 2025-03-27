# 📌 Gestor de Hábitos

## 📌 Descripción

**Gestor de Hábitos** es una aplicación web desarrollada en **Next.js**, **Express.js** y **MongoDB**, que permite a los usuarios crear, visualizar, marcar y eliminar hábitos. Está basada en el concepto de racha diaria, apoyándose en la teoría de los 66 días para formar hábitos según el libro *Hábitos Atómicos* de James Clear.

---

## ✅ Funcionalidades principales

- Registro y login de usuarios con contraseñas encriptadas (bcrypt + JWT).
- Visualización de hábitos personales por usuario autenticado.
- Marcar hábito como completado (con botón `Hecho`) y actualización automática de la racha.
- Reinicio automático de racha si el usuario no marca el hábito por un día.
- Barra de progreso visual según los días de racha (máximo 66).
- Mensajes visuales de confirmación o advertencia según si el hábito fue marcado ese día.
- Creación de nuevos hábitos desde el frontend.
- Eliminación de hábitos con confirmación personalizada.
- Redirección automática al login si no hay sesión activa.
- Vista limpia y responsiva con TailwindCSS.
- Manejo global del estado del usuario y hábitos con Redux Toolkit.

---

## 🧪 Tecnologías utilizadas

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Express.js, Node.js, MongoDB (Mongoose)
- **Estado global**: Redux Toolkit (`createSlice`, `createAsyncThunk`)
- **Autenticación**: JWT (Token), bcrypt

---

## 📦 Instalación y ejecución

### Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/gestor-habitos.git
cd gestor-habitos
```

### Backend:

```bash
cd backend
npm install
```

🔐 Crea un archivo `.env` y agrega:

```env
MONGO_URI=mongodb://localhost:27017/gestor-habitos
JWT_SECRET=tu_clave_secreta
```

```bash
npm run dev
```

### Frontend:

```bash
cd ../frontend
npm install
npm run dev
```

Abre en el navegador: [http://localhost:3000](http://localhost:3000)

---

## 📌 Flujo general de uso

1. El usuario se registra o inicia sesión.
2. Una vez autenticado, puede crear hábitos con nombre y descripción.
3. Cada hábito tiene:
   - Una barra de progreso.
   - Botón `Hecho` (sólo se puede usar una vez al día).
   - Botón `Eliminar` con confirmación.
4. Si se omite un día, la racha se reinicia a 0 automáticamente.
5. Todo se mantiene por usuario gracias al uso de `userId` y JWT.

---

## 📌 Captura de pantalla

![Interfaz principal](./public/screenshot.png)

---

## 🔐 API Endpoints

### 📍 Usuarios

| Método | Ruta         | Descripción                     |
|--------|--------------|----------------------------------|
| POST   | /register    | Registro de usuario              |
| POST   | /login       | Login de usuario + JWT           |
| GET    | /users       | Obtener todos los usuarios       |

### 📍 Hábitos

| Método | Ruta                            | Descripción                                   |
|--------|----------------------------------|-----------------------------------------------|
| GET    | /habitos/:userId                | Obtener hábitos por usuario                   |
| POST   | /habitos/                       | Crear nuevo hábito                            |
| PUT    | /habitos/marcar/:id             | Marcar hábito como completado                 |
| DELETE | /habitos/eliminar/:id           | Eliminar hábito                               |
| DELETE | /habitos/eliminar-todos         | Eliminar todos los hábitos                    |

---

## 🧠 Actividades por semana

### 📌 Semana 1:
- Estructura inicial del proyecto backend y frontend.
- Conexión a MongoDB.
- Primeros endpoints con Express.

### 📌 Semana 2:
- Modelo de hábitos.
- CRUD básico de hábitos desde Postman.

### 📌 Semana 3:
- Barra de progreso.
- Botón `Done`.
- Reinicio de racha desde backend.
- Manejo visual con mensajes condicionales.

### 📌 Semana 4:
- Integración con frontend.
- Redux Toolkit para gestión de hábitos.
- Botón dinámico (habilitado/deshabilitado).
- Validaciones y feedback visual.

### 📌 Semana 5:
- Registro y login desde frontend.
- Middleware de autenticación con JWT.
- Relación de hábitos por usuario.
- Protección de rutas si el token no existe.
- Estado global del usuario con Redux.

---

## 🙋‍♂️ Autor

Desarrollado por **Juan Vargas - 19003753**

---

## 🎯 ¡Gracias por probar el Gestor de Hábitos!