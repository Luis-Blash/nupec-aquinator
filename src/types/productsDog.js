const namesProductsDogs = {
  NUPEC_RAZAS_MINI_CACHORRO: "NUPEC_RAZAS_MINI_CACHORRO",
  NUPEC_RAZAS_MINI_ADULTO: "NUPEC_RAZAS_MINI_ADULTO",
  NUPEC_CACHORRO: "NUPEC_CACHORRO",
  NUPEC_RAZAS_PEQUENAS_CACHORRO: "NUPEC_RAZAS_PEQUENAS_CACHORRO",
  NUPEC_RAZAS_PEQUENAS_ADULTO: "NUPEC_RAZAS_PEQUENAS_ADULTO",
  NUPEC_ADULTO: "NUPEC_ADULTO",
  NUPEC_SENIOR: "NUPEC_SENIOR",
  NUPEC_SENIOR_RAZAS_PEQUENAS: "NUPEC_SENIOR_RAZAS_PEQUENAS",
  NUPEC_1ST_CARE_CACHORRO: "NUPEC_1ST_CARE_CACHORRO",
  NUPEC_1ST_CARE: "NUPEC_1ST_CARE",
  NUPEC_High_Performance: "NUPEC_High_Performance",
  NUPEC_Weight_Control: "NUPEC_Weight_Control",
  NUPEC_Weight_Control_RAZAS_PEQUENAS: "NUPEC_Weight_Control_RAZAS_PEQUENAS",
  NUPEC_SENSITIVE: "NUPEC_SENSITIVE",
  NUPEC_SENSITIVE_RAZAS_PEQUENAS: "NUPEC_SENSITIVE_RAZAS_PEQUENAS",
  NUPEC_DIGESTIVE_HEALTH: "NUPEC_DIGESTIVE_HEALTH",
  NUPEC_URINARY_MANAGEMENT: "NUPEC_URINARY_MANAGEMENT",
  NUPEC_RENAL_CARE: "NUPEC_RENAL_CARE",
  NUPEC_RELAX_PRIZE: "NUPEC_RELAX_PRIZE",
  NUPEC_TRAINING_PRIZE: "NUPEC_TRAINING_PRIZE",
  NUPEC_DENTAL_PRIZE: "NUPEC_DENTAL_PRIZE",
  NUPEC_SMART_PRIZE: "NUPEC_SMART_PRIZE",
  NUPEC_JOIN_PRIZE: "NUPEC_JOIN_PRIZE",
  NUPEC_DIGESTIVE_PRIZE: "NUPEC_DIGESTIVE_PRIZE",
};

const typeModal = {
  costal: 0,
  prize: 1,
  cans: 2,
};

const base = {
  id: "NUPEC",
  title: "NUPEC",
  subtitle: "",
  imgCostal: "",
  points: [],
  model: {
    type: typeModal.costal,
    obj: "",
    map: "",
  },
};

const productsDog = [
  {
    ...base,
    id: namesProductsDogs.NUPEC_RAZAS_MINI_CACHORRO,
    title: "NUPEC cachorro",
    subtitle: "Raza mini",
    imgCostal: require("../../assets/productos/Nupeccachorrorazamini.png"),
    points: [
      "Formulado con Fitobióticos (potentes antioxidantes naturales).",
      "Croqueta mini del tamaño ideal diseñada para una prehensión y masticación adecuada.",
      "Passiflora incarnata para manejo del estrés y ansiedad.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_CACHORRO_RM.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_RAZAS_MINI_ADULTO,
    title: "NUPEC ADULTO",
    subtitle: "Raza mini",
    imgCostal: require("../../assets/productos/razaminiadulto.png"),
    points: [
      "Croqueta mini del tamaño ideal diseñada para una prehensión y masticación adecuada.",
      "Passiflora incarnata para manejo del estrés y ansiedad.",
      "Formulado con Fitobióticos (potentes antioxidantes naturales).",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_ADULTO_RM.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_CACHORRO,
    title: "NUPEC cachorro",
    subtitle: "",
    imgCostal: require("../../assets/productos/npc-empaque-cachorro.png"),
    points: [
      "Croqueta del tamaño adecuado para el cachorro canino de talla mediana, grande o gigante",
      "Yucca shidigera para heces menos olorosas.",
      "Romero y tocoferoles como antioxidantes y conservadores naturales",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_CACHORRO.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_RAZAS_PEQUENAS_CACHORRO,
    title: "NUPEC cachorro",
    subtitle: "Raza pequeña",
    imgCostal: require("../../assets/productos/npc-empaque-cachorro-raza-pequena.png"),
    points: [
      "Vitamina E y Selenio para un sistema inmune fuerte.",
      "Croqueta pequeña del tamaño ideal para una prehensión y masticación adecuada",
      "Omega 3 y 6, para un pelo y pelaje saludable.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_CHACHORRO_RP.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_RAZAS_PEQUENAS_ADULTO,
    title: "NUPEC adulto",
    subtitle: "Raza pequeña",
    imgCostal: require("../../assets/productos/npc-empaque-adulto-raza-pequena.png"),
    points: [
      "Omega 3 y 6 para un pelo y pelaje radiante y saludable.",
      "Croqueta pequeña del tamaño adecuado para una prehensión y masticación adecuada.",
      "Romero y tocoferoles como conservadores naturales.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_ADULTO_RM.jpg"), //! sin textura
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_ADULTO,
    title: "NUPEC adulto",
    subtitle: "",
    imgCostal: require("../../assets/productos/npc-empaque-adulto.png"),
    points: [
      "Omega 3 y 6 para un pelo y pelaje radiante y saludable.",
      "Extracto de achicoria como prebiótico para una excelente digestión.",
      "Proteína de alta calidad, con digestibilidad de más del 90%.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_ADULTO.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_SENIOR,
    title: "NUPEC senior",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Senior-1.png"),
    points: [
      "Croqueta de tamaño ideal para una prehensión y masticación adecuada en mascotas matores a 7 años geriatras de talla mediana, grande o gigante",
      "Glucosamina y sulfato de condroitina como promotores de la salud articular.",
      "Formulado para favorecer la respuesta del sistema inmune en mascotas mayores a 7 años.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_SENIOR.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_SENIOR_RAZAS_PEQUENAS,
    title: "NUPEC senior",
    subtitle: "Raza pequeña",
    imgCostal: require("../../assets/productos/npc-empaque-senior-raza-pequena.png"),
    points: [
      "Croqueta de tamaño pequeño, para una prehensión y masticación adecuada.",
      "Glucosamina y sulfato de condroitina como promotores de la salud articular.",
      "Formulado para favorecer la respuesta del sistema inmune en mascotas mayores a 9 años.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_MANTENIMIENTO_CANINO_SENIOR_RP.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_1ST_CARE_CACHORRO,
    title: "NUPEC Firs Care", //!imagen
    subtitle: "Raza pequeña",
    imgCostal: require("../../assets/productos/Nupec-Senior-1.png"),
    points: [
      "Alimento para hembras gestantes, lactantes y cachorros.",
      "Con inmunoglobulinas naturales para favorecer la respuesta inmune del cachorro y mejorar la calidad del calostro en las hembras lactantes.",
      "Croqueta de doble textura crujiente afuera y suave por dentro para fácil ingestión.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_FIRST CARE.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_1ST_CARE,
    title: "NUPEC Firs Care", //!imagen
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Senior-1.png"),
    points: [
      "Alimento para hembras gestantes, lactantes y cachorros.",
      "Con inmunoglobulinas naturales para favorecer la respuesta inmune del cachorro y mejorar la calidad del calostro en las hembras lactantes.",
      "Croqueta de doble textura crujiente afuera y suave por dentro para fácil ingestión.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_FIRST CARE.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_High_Performance,
    title: "NUPEC High Performance",
    subtitle: "",
    imgCostal: require("../../assets/productos/HIGHPERF_4_03.png"),
    points: [
      "Formulado para mejorar el rendimiento físico en perros con una alta demanda energética.",
      "Glucosamina y sulfato de condroitina para proteger la integridad articular.",
      "L-carnitina, l-taurina y ácidos grasos Omegas 3 y 6 para promover la salud cardiovascular.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_HIGHPERFORMANCE.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_Weight_Control,
    title: "NUPEC Weight Control",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Weight-Control-1.png"),
    points: [
      "Alimento con croqueta de tamaño adecuado para perros de talla mediana, grande o gigante diseñado para favorecer la reducción de peso, manteniendo la masa muscular.",
      "Favorece la sensación de saciedad por su contenido en fibra.",
      "Incluye L-carnitina que favorece la movilización de grasa de forma saludable.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_WEIGHTCONTROL.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_Weight_Control_RAZAS_PEQUENAS,
    title: "NUPEC Weight Control",
    subtitle: "Raza pequeña",
    imgCostal: require("../../assets/productos/npc-empaque-weight-control-rp.png"),
    points: [
      "Alimento con croqueta pequeña, diseñado para favorecer la reducción de peso, manteniendo la masa muscular.",
      "Favorece la sensación de saciedad por su contenido en fibra.",
      "Incluye L-carnitina que favorece la movilización de grasa de forma saludable.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_WEIGHTCONTROL_RP.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_SENSITIVE,
    title: "NUPEC sensitive",
    subtitle: "",
    imgCostal: require("../../assets/productos/Sensitive.png"),
    points: [
      "Alimento con ingredientes hipoalergénicos, auxiliar en el tratamiento de alergias alimentarias.",
      "Adicionado con ácidos grasos omegas 3 y 6 para restaurar la barrera cutánea y mejorar la condición física de pelaje y piel.",
      "Croqueta de tamaño adecuado para la correcta prehensión y masticación en perros de talla mediana, grande y gigante.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_SENSITIVE.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_SENSITIVE_RAZAS_PEQUENAS,
    title: "NUPEC sensitive",
    subtitle: "Raza pequeñas",
    imgCostal: require("../../assets/productos/npc-empaque-sensitive-rp.png"),
    points: [
      "Alimento con ingredientes hipoalergénicos, auxiliar en el tratamiento de alergias alimentarias en perros de raza pequeña.",
      "Favorece la sensación de saciedad por su contenido en fibraAdicionado con ácidos grasos Omegas 3 y 6 para restaurar la barrera cutánea y mejorar la condición física de pelaje y piel.",
      "Croqueta de tamaño adecuado para la correcta prehensión y masticación en perros de raza pequeña.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_SENSITIVE_RP.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_DIGESTIVE_HEALTH,
    title: "NUPEC Digestive",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Treats-Digestive-Care-1.png"),
    points: [
      "Nutrición especializada, altamente palatable, con prebióticos y probióticos para mantener la microbiota intestinal saludable.",
      "Glutamina para proveer energía a las células y recuperar la integridad del tracto gastrointestinal.",
      "Con Yucca shidigera, que ayuda a reducir el aroma de las heces y a mejorar la digestión.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_DIGESTIVEHEALTH.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_URINARY_MANAGEMENT,
    title: "NUPEC Urinary Management",
    subtitle: "",
    imgCostal: require("../../assets/productos/CAN_urinary_rndr.png"),
    points: [
      "Altamente palatable con un alto contenido calórico para compensar la disminución del apetito.",
      "Concentrado de arándano y metionina para acidificar la orina.",
      "Niveles de minerales controlados para prevenir y evitar la formación de cristales en la orina.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_URINARYMANAGMENT.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_RENAL_CARE,
    title: "NUPEC Renal Care",
    subtitle: "",
    imgCostal: require("../../assets/productos/CAN_renal_rndr_1200x1200.png"),
    points: [
      "Altamente palatable con un alto contenido calórico para compensar la disminución del apetito.",
      "Baja inclusión de fósforo y minerales para aminorar la progresión de la enfermedad renal.",
      "Restricción proteica para disminuir el trabajo renal.",
    ],
    model: {
      type: typeModal.costal,
      obj: "",
      map: require("../../assets/costal/textures/TXT_ESPECIALIDAD_CANINO_RENALCARE.jpg"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_RELAX_PRIZE,
    title: "NUPEC Treats Relax",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Treats-Relax-1.png"),
    points: [
      "Auxiliar en el manejo de la ansiedad y estrés.",
      "Con passiflora incarnata, que genera un efecto relajante.",
    ],
    model: {
      type: typeModal.prize,
      obj: "",
      map: require("../../assets/premios/textures/TREATS_RELAX_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_TRAINING_PRIZE,
    title: "NUPEC Treats Training",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Treats-Training-1.png"),
    points: [
      "Auxiliar en el adiestramiento canino.",
      "Con passiflora incarnata, que genera un efecto relajanteFormulado con bajas calorías, para recompensar a tu mascota las veces que sean necesarias durante su entrenamiento.",
    ],
    model: {
      type: typeModal.prize,
      obj: "",
      map: require("../../assets/premios/textures/TREATS_TRAINING_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_DENTAL_PRIZE,
    title: "NUPEC Treats Dental care",
    subtitle: "",
    imgCostal: require("../../assets/productos/npc-empaque-treats-dental.png"),
    points: [
      "Auxiliar en el control de placa y sarro dental.",
      "Con clorofila, que ayuda a combatir el mal aliento inhibiendo el crecimiento bacteriano.",
    ],
    model: {
      type: typeModal.prize,
      obj: "",
      map: require("../../assets/premios/textures/TREATS_DENTALCARE_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_SMART_PRIZE,
    title: "NUPEC Treats Smart",
    subtitle: "",
    imgCostal: require("../../assets/productos/npc-empaque-treats-smart.png"),
    points: [
      "Auxiliar en la estimulación de la función cognitiva.",
      "Con DHA Y EPA, para combatir el envejecimiento, manteniendo una correcta comunicación inter-neuronal.",
    ],
    model: {
      type: typeModal.prize,
      obj: "",
      map: require("../../assets/premios/textures/TREATS_SMART_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_JOIN_PRIZE,
    title: "NUPEC Treats Joint care",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Treats-Joint-Care-1.png"),
    points: [
      "Auxiliar en el mantenimiento de las articulaciones.",
      "Con glucosamina y condroitina que favorecen la regeneración de cartílago y sus componentes.",
    ],
    model: {
      type: typeModal.prize,
      obj: "",
      map: require("../../assets/premios/textures/TREATS_JOINTCARE_AL.png"),
    },
  },
  {
    ...base,
    id: namesProductsDogs.NUPEC_DIGESTIVE_PRIZE,
    title: "NUPEC Treats Digestive care",
    subtitle: "",
    imgCostal: require("../../assets/productos/Nupec-Treats-Digestive-Care-1.png"),
    points: [
      "Auxiliar en el mantenimiento de la salud digestiva.",
      "Combinación de prebióticos que promueven el crecimento de bacterias benéficas en el intestino.",
    ],
    model: {
      type: typeModal.prize,
      obj: "",
      map: require("../../assets/premios/textures/TREATS_DIGESTIVE_AL.png"),
    },
  },
];

export { namesProductsDogs, typeModal, productsDog };
