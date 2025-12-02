import { DataMap } from './types';

export const DATA: DataMap = {
  saludos: {
      title: "Saludos y Básicos",
      desc: "Los saludos fundamentales para empezar cualquier conversación en inglés.",
      items: [
          { en: "Hello", pron: "je-lóu", es: "Hola", context: "Universal", fraseEn: "Hello, how are you?", fraseEs: "Hola, ¿cómo estás?", frasePron: "je-lóu, jáu ár iú?" },
          { en: "Good morning", pron: "gud mór-ning", es: "Buenos días", context: "Mañana", fraseEn: "Good morning, coffee please.", fraseEs: "Buenos días, café por favor.", frasePron: "gud mór-ning, có-fi plíis" },
          { en: "Good afternoon", pron: "gud af-ter-nún", es: "Buenas tardes", context: "Tarde", fraseEn: "Good afternoon, sir.", fraseEs: "Buenas tardes, señor.", frasePron: "gud af-ter-nún, sér" },
          { en: "Good night", pron: "gud náit", es: "Buenas noches", context: "Despedida/Dormir", fraseEn: "Good night, sleep well.", fraseEs: "Buenas noches, duerme bien.", frasePron: "gud náit, slíip uél" },
          { en: "Thank you", pron: "zánk iú", es: "Gracias", context: "Agradecimiento", fraseEn: "Thank you very much.", fraseEs: "Muchas gracias.", frasePron: "zánk iú vé-ri mách" },
          { en: "Please", pron: "plíis", es: "Por favor", context: "Pedir algo", fraseEn: "Help me, please.", fraseEs: "Ayúdame, por favor.", frasePron: "jélp mí, plíis" },
          { en: "Sorry", pron: "só-ri", es: "Lo siento / Perdón", context: "Disculpa", fraseEn: "I am sorry for being late.", fraseEs: "Siento llegar tarde.", frasePron: "ái am só-ri for bí-ing léit" },
          { en: "Excuse me", pron: "eks-kiús mí", es: "Disculpe / Permiso", context: "Interrumpir/Pasar", fraseEn: "Excuse me, where is the bathroom?", fraseEs: "Disculpe, ¿dónde está el baño?", frasePron: "eks-kiús mí, uér is da báz-rum?" },
          { en: "How are you?", pron: "jáu ár iú?", es: "¿Cómo estás?", context: "Pregunta común", fraseEn: "I'm fine, how are you?", fraseEs: "Estoy bien, ¿y tú?", frasePron: "áim fáin, jáu ár iú?" }
      ]
  },
  presentacion: {
      title: "Presentaciones Personales",
      desc: "Frases clave para presentarte y conocer gente nueva.",
      items: [
          { en: "My name is...", pron: "mái néim is...", es: "Mi nombre es...", context: "Nombre", fraseEn: "My name is John.", fraseEs: "Mi nombre es John.", frasePron: "mái néim is jón" },
          { en: "I am from...", pron: "ái am from...", es: "Soy de...", context: "Origen", fraseEn: "I am from Spain.", fraseEs: "Soy de España.", frasePron: "ái am from spéin" },
          { en: "I live in...", pron: "ái liv in...", es: "Vivo en...", context: "Residencia", fraseEn: "I live in London.", fraseEs: "Vivo en Londres.", frasePron: "ái liv in lón-don" },
          { en: "I am ... years old", pron: "ái am ... yíers óld", es: "Tengo ... años", context: "Edad (Se usa 'to be')", fraseEn: "I am twenty years old.", fraseEs: "Tengo veinte años.", frasePron: "ái am tuén-ti yíers óld" },
          { en: "Nice to meet you", pron: "náis tu míit iú", es: "Mucho gusto", context: "Saludo inicial", fraseEn: "Nice to meet you too.", fraseEs: "Mucho gusto también.", frasePron: "náis tu míit iú tú" },
          { en: "Where are you from?", pron: "uér ár iú from?", es: "¿De dónde eres?", context: "Pregunta", fraseEn: "Where are you from originally?", fraseEs: "¿De dónde eres originalmente?", frasePron: "uér ár iú from o-rí-yi-na-li?" }
      ]
  },
  numeros: {
      title: "Números (1-10)",
      desc: "La base para precios, cantidades y horas.",
      items: [
          { en: "One", pron: "uán", es: "Uno", context: "Contar", fraseEn: "One ticket, please.", fraseEs: "Un boleto, por favor.", frasePron: "uán tí-ket, plíis" },
          { en: "Two", pron: "tú", es: "Dos", context: "Contar", fraseEn: "Table for two.", fraseEs: "Mesa para dos.", frasePron: "téi-bol for tú" },
          { en: "Three", pron: "zrí", es: "Tres", context: "Contar", fraseEn: "Three miles away.", fraseEs: "A tres millas.", frasePron: "zrí máils a-uéi" },
          { en: "Four", pron: "fór", es: "Cuatro", context: "Contar", fraseEn: "It is four o'clock.", fraseEs: "Son las cuatro.", frasePron: "it is fór o-clók" },
          { en: "Five", pron: "fáiv", es: "Cinco", context: "Contar", fraseEn: "High five!", fraseEs: "¡Choca esos cinco!", frasePron: "jái fáiv" },
          { en: "Six", pron: "síks", es: "Seis", context: "Contar", fraseEn: "Six pack of water.", fraseEs: "Paquete de seis aguas.", frasePron: "síks pák ov uó-ter" },
          { en: "Seven", pron: "sé-ven", es: "Siete", context: "Contar", fraseEn: "Seven days a week.", fraseEs: "Siete días a la semana.", frasePron: "sé-ven déis a uíik" },
          { en: "Eight", pron: "éit", es: "Ocho", context: "Contar", fraseEn: "See you at eight.", fraseEs: "Nos vemos a las ocho.", frasePron: "sí iú at éit" },
          { en: "Nine", pron: "náin", es: "Nueve", context: "Contar", fraseEn: "Nine dollars.", fraseEs: "Nueve dólares.", frasePron: "náin dó-lars" },
          { en: "Ten", pron: "ten", es: "Diez", context: "Contar", fraseEn: "Top ten list.", fraseEs: "Lista de los diez mejores.", frasePron: "tóp ten líst" }
      ]
  },
  colores: {
      title: "Colores Esenciales",
      desc: "Descripción básica de objetos y lugares.",
      items: [
          { en: "Red", pron: "red", es: "Rojo", context: "Color", color: "#EF4444", text: "white", fraseEn: "The apple is red.", fraseEs: "La manzana es roja.", frasePron: "da á-pol is red" },
          { en: "Blue", pron: "blú", es: "Azul", context: "Color", color: "#3B82F6", text: "white", fraseEn: "The sky is blue.", fraseEs: "El cielo es azul.", frasePron: "da skái is blú" },
          { en: "Green", pron: "gríin", es: "Verde", context: "Color", color: "#22C55E", text: "white", fraseEn: "Green grass.", fraseEs: "Pasto verde.", frasePron: "gríin grás" },
          { en: "Yellow", pron: "yé-lóu", es: "Amarillo", context: "Color", color: "#FACC15", text: "black", fraseEn: "Yellow taxi.", fraseEs: "Taxi amarillo.", frasePron: "yé-lóu ták-si" },
          { en: "Black", pron: "blák", es: "Negro", context: "Color", color: "#000000", text: "white", fraseEn: "Black coffee.", fraseEs: "Café negro.", frasePron: "blák có-fi" },
          { en: "White", pron: "uáit", es: "Blanco", context: "Color", color: "#FFFFFF", text: "black", border: true, fraseEn: "White House.", fraseEs: "Casa Blanca.", frasePron: "uáit jáus" }
      ]
  },
  animales: {
      title: "Animales y Casa",
      desc: "Vocabulario doméstico común.",
      items: [
          { en: "Dog", pron: "dóg", es: "Perro", context: "Mascota", icon: "🐕", fraseEn: "Good dog!", fraseEs: "¡Buen perro!", frasePron: "gud dóg" },
          { en: "Cat", pron: "cát", es: "Gato", context: "Mascota", icon: "🐈", fraseEn: "The cat is sleeping.", fraseEs: "El gato está durmiendo.", frasePron: "da cát is slíi-ping" },
          { en: "Bird", pron: "bérd", es: "Pájaro", context: "Animal", icon: "🐦", fraseEn: "Look at that bird.", fraseEs: "Mira ese pájaro.", frasePron: "luk at dát bérd" },
          { en: "Fish", pron: "fish", es: "Pez / Pescado", context: "Animal/Comida", icon: "🐟", fraseEn: "Fish and chips.", fraseEs: "Pescado con papas.", frasePron: "fish and chíps" },
          { en: "Table", pron: "téi-bol", es: "Mesa", context: "Casa", icon: "🪑", fraseEn: "Put it on the table.", fraseEs: "Ponlo en la mesa.", frasePron: "put it on da téi-bol" },
          { en: "Bed", pron: "bed", es: "Cama", context: "Casa", icon: "🛏️", fraseEn: "Time for bed.", fraseEs: "Hora de ir a la cama.", frasePron: "táim for bed" },
          { en: "Window", pron: "uín-dóu", es: "Ventana", context: "Casa", icon: "🪟", fraseEn: "Open the window.", fraseEs: "Abre la ventana.", frasePron: "ó-pen da uín-dóu" },
          { en: "Door", pron: "dór", es: "Puerta", context: "Casa", icon: "🚪", fraseEn: "Close the door.", fraseEs: "Cierra la puerta.", frasePron: "clóus da dór" }
      ]
  },
  viajes: {
      title: "Viajes y Salud",
      desc: "Palabras vitales para viajar seguro.",
      items: [
          { en: "Passport", pron: "pás-port", es: "Pasaporte", context: "Documento", fraseEn: "Show your passport.", fraseEs: "Muestre su pasaporte.", frasePron: "shóu yór pás-port" },
          { en: "Exit", pron: "ék-sit", es: "Salida", context: "Señalización", fraseEn: "Where is the exit?", fraseEs: "¿Dónde está la salida?", frasePron: "uér is di ék-sit?" },
          { en: "Luggage", pron: "lá-guich", es: "Equipaje", context: "Aeropuerto", fraseEn: "My luggage is lost.", fraseEs: "Mi equipaje está perdido.", frasePron: "mái lá-guich is lost" },
          { en: "Help", pron: "jélp", es: "Ayuda", context: "Emergencia", fraseEn: "I need help!", fraseEs: "¡Necesito ayuda!", frasePron: "ái níid jélp" },
          { en: "Doctor", pron: "dóc-tor", es: "Médico", context: "Salud", fraseEn: "Call a doctor.", fraseEs: "Llame a un doctor.", frasePron: "cól a dóc-tor" },
          { en: "Police", pron: "po-lís", es: "Policía", context: "Seguridad", fraseEn: "Call the police!", fraseEs: "¡Llame a la policía!", frasePron: "cól da po-lís" }
      ]
  },
  clima: {
      title: "Clima y el Tiempo",
      desc: "Hablar del clima y momentos del día.",
      items: [
          { en: "Cold", pron: "cóld", es: "Frío", context: "Clima", icon: "❄️", fraseEn: "It is very cold.", fraseEs: "Hace mucho frío.", frasePron: "it is vé-ri cóld" },
          { en: "Hot", pron: "ját", es: "Calor", context: "Clima", icon: "☀️", fraseEn: "Hot coffee.", fraseEs: "Café caliente / Hace calor.", frasePron: "ját có-fi" },
          { en: "Rain", pron: "réin", es: "Lluvia", context: "Clima", icon: "🌧️", fraseEn: "Singing in the rain.", fraseEs: "Cantando bajo la lluvia.", frasePron: "sín-guing in da réin" },
          { en: "Morning", pron: "mór-ning", es: "Mañana", context: "Tiempo", fraseEn: "See you in the morning.", fraseEs: "Nos vemos por la mañana.", frasePron: "sí iú in da mór-ning" },
          { en: "Night", pron: "náit", es: "Noche", context: "Tiempo", fraseEn: "Late at night.", fraseEs: "Tarde en la noche.", frasePron: "léit at náit" }
      ]
  }
};