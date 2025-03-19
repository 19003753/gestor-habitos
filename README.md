# 📌 Gestor de Hábitos

**Gestor de Hábitos** es una aplicación web diseñada para ayudar a los usuarios a gestionar y seguir sus hábitos diarios. El proyecto utiliza **Next.js (React) con TypeScript** en el frontend y **Node.js con Express y MongoDB** en el backend.

---

## 🚀 **Tecnologías utilizadas**

### **Frontend:**
- 🖥 **Next.js** (App Router)
- 🎨 **Tailwind CSS**
- 🌐 **Redux Toolkit** (para gestión de estado)
- ⚡ **TypeScript**

### **Backend:**
- 🌍 **Node.js + Express.js**
- 🗄 **MongoDB con Mongoose**
- 🔐 **CORS & dotenv** (manejo de variables de entorno)

---

## 📂 **Estructura del Proyecto**
```
gestor-habitos/
│── backend/        # Servidor con Express y MongoDB
│── frontend/       # Cliente con Next.js y Redux
│── README.md       # Documentación del proyecto
```

---

# ⚙️ **Configuración e Instalación**

## ✅ **1️⃣ Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd gestor-habitos
```

---

## ✅ **2️⃣ Configurar el Backend**

```bash
cd backend
npm install  # Instalar dependencias
```

📌 **Crear un archivo `.env` en `backend/` con:**
```env
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/gestor-habitos
PORT=5002
```

🔹 **Ejecutar el servidor:**
```bash
npm start  # o usar nodemon con npm run dev
```

🔹 **Probar la API en Postman:**
- Obtener hábitos: `GET http://localhost:5002/habitos`
- Crear hábito: `POST http://localhost:5002/habitos`
```json
{
  "nombre": "Leer",
  "descripcion": "Leer 30 minutos al día",
  "progreso": 0
}
```

---

## ✅ **3️⃣ Configurar el Frontend**

```bash
cd ../frontend
npm install  # Instalar dependencias
```

🔹 **Ejecutar Next.js en modo desarrollo:**
```bash
npm run dev
```

🔹 **Abrir en el navegador:**
```
http://localhost:3000
```

---

## ✅ **4️⃣ Configurar Redux en el Frontend**

📌 **Redux está configurado en `frontend/store/`**
- `store.ts`: Configuración del `store`.
- `habitsSlice.ts`: Lógica de Redux para manejar hábitos.

🔹 **Cargar los hábitos desde el backend:**
```tsx
useEffect(() => {
  dispatch(fetchHabitsThunk());
}, [dispatch]);
```

---

## ✅ **5️⃣ Estilizar con Tailwind CSS**

📌 **Tailwind CSS ya está instalado y configurado en `frontend/`**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
🔹 **Estilos importados en `globals.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

🔹 **Ejemplo de uso de Tailwind en `page.tsx`:**
```tsx
<div className="p-4 bg-gray-100 rounded-lg shadow-md">Texto con Tailwind</div>
```

---

# 🎯 **Funciones Actuales**
✅ Backend con Express y MongoDB conectado a MongoDB Atlas.  
✅ API REST para CRUD de hábitos (`GET`, `POST`, `DELETE`).  
✅ Frontend con Next.js y Redux para gestionar los hábitos.  
✅ Estilización moderna con Tailwind CSS.  
✅ Integración con Redux DevTools en Chrome.  

---

# 📌 **Pendientes / Mejoras Futuras**
🔲 Agregar autenticación de usuarios.  
🔲 Agregar funcionalidad para editar hábitos.  
🔲 Mejorar diseño con animaciones y transiciones.  
🔲 Agregar gráficos de progreso.  

---

## 🔥 **¡Gracias por usar Gestor de Hábitos!**
Si tienes alguna sugerencia o encuentras un error, ¡haz un issue o una pull request! 🚀
