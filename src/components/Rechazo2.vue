

<template>


    <h1 class="titulo">Quieres ser mi san valentin?</h1>
    
    <h4>Te re confundiste ahora</h4>
    <img src="/src/assets/heart-png.webp" alt="Foto" class="imagen scale-up-center">
    <img src="/src/assets/heart-png.webp" alt="Foto" class="imagen2">

    <br>
    
    
    
    <button class="botones" @click="irAceptado">Sí</button>
    <button class="botones" @click="irRechazado">No</button>
    <router-view></router-view>
    </template>
    
    
    
    <script setup>
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    
    const irAceptado = () => {
      router.push('/aceptado');
    };
    
    const irRechazado = () => {
      router.push('/rechazado3');
    };
    </script>
    
    
    
    
    
    
    <style>
    
    body {
      background-image: url('/src/assets/250747.webp'); /* Ruta de la imagen */
      background-size: cover; /* Ajusta la imagen para cubrir toda la pantalla */
      background-position: center; /* Centra la imagen */
      background-repeat: no-repeat; /* Evita que la imagen se repita */
    }
    
    
    .scale-up-center{animation:scale-up-center 2.4s infinite alternate; } @keyframes scale-up-center{ 0%{transform:scale(.9)} 100%{transform:scale(1)} }
    
    
    .titulo {
      text-align: center; /* Centra el texto horizontalmente */
      display: flex;
      justify-content: center; /* Centra horizontalmente */
      /*align-items: center;  Centra verticalmente */
    font-family:cursive;
    }
    
    /* Ajustar tamaño de la imagen */
    .imagen {
      width: 300px; /* Cambia el ancho */
      height: auto; /* Mantiene la proporción */
    }
    
    
    .imagen2 {
      float: right;
      width:  25px; /* Cambia el ancho */
      height: auto; /* Mantiene la proporción */
    }
    
    .imagen3 {
      float: left;
      width:  25px; /* Cambia el ancho */
      height: auto; /* Mantiene la proporción */
    }
    
    /* Ajustar tamaño del GIF */
    .gif {
      width: 200px; /* Cambia el ancho */
      height: auto; /* Mantiene la proporción */
    }
    
    
    button { 
      width:auto; 
      min-width: 304px;
      height: 45px;
      padding: 8px;
      border-radius: 5px;
      border: 2.5px solid #cc4e52;
      box-shadow: 0px 0px 20px -20px;
      cursor: pointer;
      background-color: rgb(196, 131, 131);
      transition: all 0.2s ease-in-out 0ms;
      user-select: none;
      font-family: 'Poppins', sans-serif;
    }
    
    button:hover {
      background-color: #cf3232;
      box-shadow: 0px 0px 20px -18px;
    }
    
    button:active {
      transform: scale(0.95);
    }
    </style>