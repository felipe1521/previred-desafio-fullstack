Instrucciones para levantar el proyecto localmente

📌 Prerrequisitos
Antes de iniciar, asegúrate de tener instalado en tu sistema:

Java 17+ (Descargar)
Maven 3+ (Descargar)
Node.js 18+ (Descargar)
Git (Descargar)

🚀 1. Clonar el repositorio

git clone https://github.com/felipe1521/previred-desafio-fullstack.git
cd previred-desafio-fullstack

2. Levantar el backend (Spring Boot)
📂 Ubicarse en el directorio del backend:

cd back-end

▶️ Ejecutar el backend:

mvn spring-boot:run

El backend debería estar disponible en:

http://localhost:8080

🎨 3. Levantar el frontend (Next.js)
📂 Ubicarse en el directorio del frontend:

cd ../front-end

📦 Instalar dependencias:

npm install

▶️ Ejecutar el frontend:

npm run dev

El frontend estará disponible en:

http://localhost:3000

🔗 4. Probar la conexión entre frontend y backend
El frontend se comunica con el backend en http://localhost:8080.

✅ 5. ¡Listo!
Ahora puedes acceder a la aplicación en http://localhost:3000 y probar su funcionalidad.

Si tienes problemas, revisa los logs en consola o verifica que los puertos no estén en uso.