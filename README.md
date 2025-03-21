# ChallengeOne-AmigoSecreto

Este proyecto consiste en realizar un sorteo aleatorio de "Amigo Secreto" entre una lista de amigos ingresada por el usuario. 

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a una lista visible al presionar el botón "Añadir".
![image](https://github.com/user-attachments/assets/81eb43bb-9544-487a-9402-2470ec131e81) - ![image](https://github.com/user-attachments/assets/4a4d6b41-c33b-43de-af5d-81b0915b5907)

- **Validar entrada**: Se verifica que el campo de texto no esté vacío antes de añadir el nombre, mostrando un mensaje si esta vacío.
![image](https://github.com/user-attachments/assets/f3d6ee06-61a0-4af0-87d3-7a53316aa7d0)

- **Visualizar una lista**: Los nombres ingresados se muestran en una lista en la página.
![image](https://github.com/user-attachments/assets/5a08fc13-a8cb-4c5f-bce0-4177b292a6fc)

- **Sorteo aleatorio**: El botón "Sortear Amigo" selecciona aleatoriamente un nombre de la lista y lo muestra en la pantalla.
![image](https://github.com/user-attachments/assets/acf700c2-93a7-4579-be8a-80d53310911a)

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la página.
- **CSS**: Estilo visual de la página web.
- **JavaScript**: Lógica del programa.

## Lógica del Programa

1. **Crear un array para almaccenar nombres**:
    - let amigos = [];
2. **Función para agregar amigos**:
    - Captura el valor del campo texto.
    - Valida que no esté vacío.
    - Agrega el nombre al array amigos.
    - Limpia el campo de entrada.
3. **Función para actualizar la lista de amigos**:
    - Itera sobre el array amigos.
    - Genera elementos <li> para cada nombre ingresado.
    - Actualiza dinámicamente la lista visible en la página.
4. **Función para realizar el sorteo**:
    -Comprueba que el array amigos no esté vacío.
    - Genera un índice aleatorio para seleccionar el nombre.
    - Muestra el nombre sorteado en pantalla.

## Estructura del Código.

- **index.html**
- **style.css**
- **app.js**

## Cómo ejecutar el Proyecto

1. **Clona este repositorio en tu máquina local**.
2. **Abre el archivo index.html en tu navegador**.
3. **Disfruta de la aplicación "Amigo Secreto" y diviértete sorteando**. 
