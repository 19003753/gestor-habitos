# 📌 Gestor de Hábitos

## 📌 Descripción
**Gestor de Hábitos** es una aplicación web que permite a los usuarios registrar y hacer seguimiento de sus hábitos diarios. Los usuarios pueden **marcar hábitos como completados**, visualizar su progreso mediante **barras de progreso**, y gestionar sus rachas de cumplimiento.

## 📌 Características principales
✅ **Añadir hábitos** con nombre y descripción.  
✅ **Marcar hábitos como completados** con un botón `Hecho`.  
✅ **Registro de rachas** que se actualiza diariamente.  
✅ **Reinicio automático de rachas** si se omite un día sin actualizar.  
✅ **Mensajes dinámicos de estado** que indican si el hábito fue actualizado o ya se marcó ese día.  
✅ **Barras de progreso dinámicas** que reflejan el porcentaje de avance hacia la meta de 66 días.  
✅ **API con MongoDB** para almacenar la información de los hábitos.  

## 📌 Captura de pantalla
A continuación, se muestra una vista previa del frontend:

<img width="496" alt="Screenshot 2025-03-19 at 3 32 52 PM" src="https://github.com/user-attachments/assets/33b4de9f-af7c-4120-b6bb-524c5008c778" />


## 📌 Tecnologías utilizadas
- **Frontend:** React (Next.js), Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Estado global:** Redux Toolkit con `createSlice` y `createAsyncThunk`
- **Cliente API:** Fetch API para comunicarse con el backend

## 📌 Instalación y ejecución
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/gestor-habitos.git
   cd gestor-habitos
   ```

2. **Instala las dependencias del backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Instala las dependencias del frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configura las variables de entorno:**
   - En el backend, crea un archivo `.env` y define `MONGO_URI` con la conexión a MongoDB.

5. **Ejecuta el backend:**
   ```bash
   cd backend
   npm run dev
   ```

6. **Ejecuta el frontend:**
   ```bash
   cd ../frontend
   npm run dev
   ```

7. **Accede a la aplicación en tu navegador:**
   ```
   http://localhost:3000
   ```

## 📌 API Endpoints
### 📌 **Backend (Express.js)**
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| `POST` | `/habitos` | Crea un nuevo hábito |
| `GET`  | `/habitos` | Obtiene la lista de hábitos |
| `PUT`  | `/habitos/marcar/:id` | Marca un hábito como completado (actualiza la racha) |
| `DELETE` | `/habitos/eliminar/:id` | Elimina un hábito |

## 📌 Cómo actualizar un hábito en Postman
1. Abre **Postman** y selecciona el método `PUT`.
2. Introduce la URL:
   ```
   http://localhost:5002/habitos/marcar/ID_DEL_HABITO
   ```
3. Reemplaza `ID_DEL_HABITO` con el `_id` real del hábito.
4. Haz clic en **Send**.

## 📌 Estado de racha
- Si el usuario **marca el hábito en el mismo día**, verá un mensaje **amarillo** (`⚠️ No se puede actualizar el hábito el mismo día.`).
- Si el hábito **se marca correctamente**, se muestra un mensaje **verde** (`✅ Hábito actualizado. Nos vemos mañana!`).
- Si el usuario **olvida actualizar por más de un día**, la racha se **reinicia automáticamente a 0**.

## 📌 Contribuciones
Si quieres contribuir a este proyecto, por favor **haz un fork y abre un pull request** con tus mejoras. 🚀🔥

## 📌 Autor
Desarrollado por **Juan Vargas 19003753**.

---
¡Gracias por usar *Gestor de Hábitos*! 🎯🔥
