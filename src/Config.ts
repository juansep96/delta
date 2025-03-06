import { BookOpen, Users, Shield } from 'lucide-react';

export const icons = {
  AcademicUpdate: BookOpen, // Representa actualización académica
  Diploma: Users, // Representa diplomaturas
  PostTitle: Shield, // Representa postítulos
};

const provinces = [
  'Buenos Aires', 'CABA', 'La Pampa', 'Río Negro', 'Santa Fe',
  'Chaco', 'Mendoza', 'Santa Cruz', 'Neuquén', 'Entre Ríos'
];

export const courses = [
  // ACTUALIZACIÓN ACADÉMICA
  {
    id: 'a1b2c3',
    title: 'Actualización Académica en Educación y Nuevas Tecnologías',
    code: '00.6201',
    duration: '220 hs reloj',
    icon: 'AcademicUpdate',
    category: 'Actualización Académica',
    description: 'La ley de Educación Nacional plantea el concepto de igualdad en términos de “equidad” e “igualdad de oportunidades educativas”. Esto quiere decir específicamente que la ley prescribe como obligación del Estado Nacional garantizar una justa distribución de los recursos educativos y el desarrollo de la calidad educativa en todos los grupos socio-económicos, teniendo mayor consideración con los sectores más desfavorecidos generando una política de “inclusión educativa”. En la Ley 26.206 se determina de manera general la relación entre la educación y las nuevas tecnologías y medios de comunicación: desde la educación se deben “Generar las condiciones pedagógicas para el manejo de las nuevas tecnologías de la información y la comunicación, así como para la producción y recepción crítica de los discursos mediáticos; desarrollar las capacidades necesarias para la comprensión y utilización inteligente y crítica de los nuevos lenguajes producidos en el campo de las tecnologías de la información y la comunicación” (artículo 21). En el apartado sobre “educación, nuevas tecnologías y medios de comunicación” se establece la obligación del Poder Ejecutivo Nacional de desarrollar opciones educativas que se basen en el uso de las tecnologías de la información y de la comunicación y de los medios masivos de comunicación social, a través del Ministerio de Educación, Ciencia y Tecnología. El artículo 100 aclara que esta disposición debe colaborar con el cumplimiento de los fines y objetivos de la ley de Educación Nacional, anteriormente mencionados (artículo 100). Siguiendo estos lineamientos, este proyecto propone orientar a los docentes en el uso de las TIC brindándole herramientas y recursos digitales para su implementación áulica identificando las competencias docentes necesarias para poner en práctica los conceptos básicos sobre la educación tecnológica estableciendo las pautas didácticas para llevar adelante proyectos tecnológicos.',
    provinces,
  },
  {
    id: 'd4e5f6',
    title: 'Actualización Académica en la Sexualidad y las Etapas de la Vida',
    code: '00.6202',
    duration: '220 hs reloj',
    icon: 'AcademicUpdate',
    category: 'Actualización Académica',
    description: '“No es posible, entonces, hablar de la infancia, la adolescencia y la juventud como conceptos capaces de abarcar todas las manifestaciones y procesos involucrados en lo infantil y lo juvenil. Más bien deberíamos hablar de la existencia de múltiples infancias, adolescencias y juventudes, en virtud de la diversidad que caracteriza a los sujetos sociales.” El desarrollo humano estudia los cambios y la estabilidad en todos los ámbitos del desarrollo y en todas las etapas de la existencia. Estudian cuatro ámbitos principales el físico, el cognoscitivo, el psicosocial y la sexualidad. El concepto de sexualidad que se define en los lineamientos curriculares supera la noción corriente que la asimila a la genitalidad o a las relaciones sexuales. Entender que la sexualidad abarca aspectos biológicos, psicológicos, sociales, afectivos y éticos implica considerarla como una de las dimensiones constitutivas de la persona que, presente de diferentes maneras, es relevante para su despliegue y bienestar durante toda la vida. La inclusión de la Educación Sexual Integral (ESI) como un aprendizaje incorporado a lo largo de toda la escolaridad obligatoria y en cada una de las instituciones educativas, constituye un desafío frente al cual la construcción de consensos se torna fundamental y estratégica. Se promueve “dentro de las propuestas educativas orientadas a la formación armónica, equilibrada y permanente de las personas; asegurar la transmisión de conocimientos pertinentes, precisos, confiables y actualizados sobre los distintos aspectos involucrados en la Educación Sexual; promover actitudes responsables ante la sexualidad; prevenir los problemas relacionados con la salud en general y la salud sexual y reproductiva en particular, procurar igualdad de trato y oportunidades para varones y mujeres”. Al igual que el género, la sexualidad no es algo naturalmente dado. No es sinónimo de genitalidad ni se reduce a las relaciones sexuales; sino que involucra prácticas, pensamientos, valores, sentimientos, actitudes, creencias, placeres y deseos de las personas a nivel sexual, así como también las características biológicas y las sensaciones que se manifiestan en el cuerpo. La forma de vivir la sexualidad es una experiencia que varía de persona en persona y que también se vincula con las expectativas sociales acerca de cómo deberían actuar varones y mujeres, es decir, con el género.',
    provinces,
  },
  {
    id: 'g7h8i9',
    title: 'Actualización Académica en Educación Sexual Integral',
    code: '00.6203',
    duration: '220 hs reloj',
    icon: 'AcademicUpdate',
    category: 'Actualización Académica',
    description: 'La política nacional de ESI estableció los pilares centrales de la Educación Sexual Integral que se brinda en esta capacitación. Se trata de cinco dimensiones que instalan una perspectiva respetuosa de los derechos y de la igualdad de género, que reconocen la diversidad de formas de vivir la sexualidad y la importancia de la afectividad como parte constitutiva de la subjetividad, y que, al mismo tiempo y a partir de todos estos pilares, procuran brindar herramientas para el cuidado del cuerpo y de la salud.  El marco que legisla la enseñanza de la educación sexual integral está sustentado en la ley 26150, incorporándola a todos los niveles educativos. La provincia de Buenos Aires promulga la ley 13066  y a nivel Nacional promoviendo los derechos, la salud y la prevención se enmarca en los Programa de Salud Sexual y Procreación Responsable y en un conjunto de leyes como  Ley Nacional de Sida, contra la violencia de género, de Educación  Derechos del niño, niña y adolescentes Se trata de fortalecer la transversalidad de la ESI en los distintos niveles educativos y disciplinas académicas. Esta capacitación está pensada para que cada docente pueda encontrar información y recursos para abordar esta problemática, pero también para abrir un espacio de reflexión y debate al interior de cada institución sobre la convivencia escolar.',
    provinces,
  },
  {
    id: 'j1k2l3',
    title: 'Actualización Académica en Inserción de la Educación Sexual Integral en las Prácticas Educativas',
    code: '00.6204',
    duration: '220 hs reloj',
    icon: 'AcademicUpdate',
    category: 'Actualización Académica',
    description: 'El  marco  que  legisla  la  enseñanza  de  la  educación  sexual  integral  está sustentado  en  la  ley  26150,  incorporándola  a  todos  los  niveles  educativos.  La provincia  de  Buenos  Aires  promulga  la  ley  130661    y  la  ley  14744,  y  a  nivel Nacional  promoviendo  los  derechos,  la  salud  y  la  prevención  se  enmarca  en  las leyes 25673,  23798, 26485 y 260612 La  escuela  es  un  espacio  donde  se  transmiten  valores,  conocimientos  e información  con  mayor  sistematicidad  durante  la  infancia,  por  ello  se  requiere impulsar  una  educación  en  sexualidad  que  pueda  ser  abierta,  respetuosa  de las  ideas  y  opciones  de  los  alumnos  y  que  promueva  tanto  el  conocimiento intelectual,  y  la  transmisión  de  información  útil  acerca  su  propio  cuerpo,  sus placeres  y  deseos,  sentimientos,  actitudes  y  habilidades  para  el  ejercicio  de una sexualidad sana, responsable y sin riesgos. El  cumplimiento  de  los  propósitos  de  la  Ley  N°  26.150  implica  para  el  sistema educativo  el  abordaje  de  la  educación  de  la  sexualidad  de  una  manera  formal, explícita  e  integral.  Ello  requerirá  la  implementación  de  estrategias  superadoras que,  incluyendo  experiencias  y  proyectos  educativos  preexistentes,  permitan integrar  la  sexualidad  en  la  formación  armónica,  equilibrada,  integral  y permanente  de  las  personas,  tal  como  lo  establece  el  artículo  3°  inciso  a)  de  la citada  ley.  La  inclusión  de  la  educación  sexual  dentro  de  la  formación sistemática  reafirma  la  responsabilidad  del  Estado  en  lo  que  hace  a  la protección de los derechos de los  niños, niñas y adolescentes.3 Las  iniciativas  de  desarrollo  curricular  deberán  necesariamente  enmarcarse  en los  proyectos  educativos  institucionales  y  encarnar  en  proyectos  de  aula, favoreciendo  de  esta  manera  la  continuidad  y  sistematización  a  las  acciones,  la interdisciplinariedad,  la  intersectorialidad  y  la  participación  de  toda  la comunidad educativa.4 El  objetivo  de  la  ESI  es  promover  una  educación  para  una  sexualidad responsable  desde  una  perspectiva  de  género,  donde  se  incluyan  aspectos  de la diversidad  sexual.  La  propuesta  plantea  la  integración  de  aspectos biológicos,  psicológicos, sociales, afectivos y  éticos',
    provinces,
  },
  {
    id: 'm4n5o6',
    title: 'Actualización Académica en Evaluación y Enseñanza en la Escuela Inclusiva',
    code: '00.6205',
    duration: '220 hs reloj',
    icon: 'AcademicUpdate',
    category: 'Actualización Académica',
    description: 'l Marco General de Política Curricular señala que los niveles educativos prescriben diseños curriculares comunes que garantizan el derecho universal a la educación reconociendo y valorando, desde una perspectiva intercultural, la diversidad que caracteriza a los sujetos y a los grupos sociales. La diversidad se expresa en los saberes de los alumnos/as, en sus condiciones de vida, en la conformación de la matrícula de cada año, en las diferencias culturales de los maestros/as y los alumnos/as, en la sobreedad de unos/as con respecto a otros del mismo año, en las representaciones acerca de la vida institucional en una escuela: los roles, las normas de convivencia, las obligaciones tácitas o explícitas. Es indispensable, entonces, hacerse cargo de la diversidad reconocida y transformarla en una ventaja pedagógica.Cabe señalar que el reconocimiento de la diversidad de los sujetos y la necesidad de establecer una propuesta educativa que apuesta a la igualdad sitúa al diseño curricular en una tensión: “tensión entre la obligación, como generación adulta, de elegir la herencia cultural que será obligatoria a través de la escuela, y el reconocimiento de la diversidad de grupos culturales a los cuales realiza el legado. Esta tensión puede expresarse como una tensión entre la igualdad de acceso al patrimonio cultural de la humanidad y el respeto a la heterogeneidad de sujetos y grupos sociales y culturales...”. La organización de la tarea didáctica debe consolidar en la acción cotidiana la formación de los niños/as y adolescentes en el respeto por las diferencias y, lo que es más, en el reconocimiento de que el aporte de todos produce progresos en los aprendizajes escolares y en la calidad de vida de los ciudadanos/as. Partiendo de estos conceptos, para actualizar y mejorar la práctica docente este Actualización Académica propone identificar barreras para el aprendizaje y la participación, diagramar estrategias, utilizar recursos, distribuir los espacios, los tiempos y las ayudas para aprender, son algunas de las actividades que le espera a la escuela, al momento de la INCLUSIÓN.',
    provinces,
  },
  {
    id: 'p7q8r9',
    title: 'Actualización Académica en Comunicación con Perspectiva de Género',
    code: '00.6207',
    duration: '220 hs reloj',
    icon: 'AcademicUpdate',
    category: 'Actualización Académica',
    description: 'Esta propuesta de actualización nace de la necesidad de identificar y fortalecer los procesos comunicacionales, dentro del contexto escolar, desde una perspectiva de género. Se propone a partir de un módulo diagnóstico (0) y durante cuatro módulos, brindar los marcos teóricos y conceptuales, proveer de herramientas y recursos para la transformación de las formas en qué se comunica, a fin de garantizar una educación pensada desde una perspectiva de género bajo un enfoque integral, desnaturalizando prácticas sociales, fomentando la igualdad en el trato y oportunidades y promoviendo espacios de expresión de las emociones y sentimientos. Esta propuesta de capacitación se fundamenta en la necesidad de promover en los cursantes no solo el análisis y la reflexión sino acciones de intervención sobre prácticas y discursos, que en el cotidiano del espacio escolar se han naturalizado, y son consecuencia de las desigualdades sociales y producto de la diversidad de los grupos.',
    provinces,
  },

  // DIPLOMATURAS
  {
    id: 's1t2u3',
    title: 'Diplomatura en Infancia y Adolescencia desde una Perspectiva de Género',
    code: '00.6206',
    duration: '630 hs reloj',
    icon: 'Diploma',
    category: 'Diplomatura',
    description: 'Esta diplomatura propone dar a conocer la importancia de incorporar la ESI a las prácticas educativas lo que exige redefinir los roles en los distintos ámbitos y niveles institucionales, creando nuevas herramientas conforme los niños, niñas y adolescentes (NNA) de hoy, atravesados por distintas realidades y tensiones sociales.',
    provinces,
  },
  {
    id: 'v4w5x6',
    title: 'Diplomatura en Prevención de Violencia en el Marco de la Ley Micaela',
    code: '00.6208',
    duration: '630 hs reloj',
    icon: 'Diploma',
    category: 'Diplomatura',
    description: 'Esta diplomatura propone a partir de un módulo diagnóstico (0) y durante seis módulos de contenido, brindar los contenidos que permitan generar conciencia sobre la violencia contra las mujeres como manifestación de la discriminación que las afecta, su magnitud, sus consecuencias negativas para las sociedades en su conjunto, y también brindar herramientas para la prevención. Del módulo 1 al 2 se enseñan los conceptos básicos de la Ley Micaela, lineamientos y contenidos de los diseños curriculares, poniendo énfasis en la Ley 27499 y todo el marco legal que la ampara. El módulo 3 toma la dimensión biológica y psicosocial para aprender los conceptos de la diversidad sexual desde un enfoque de derechos y perspectiva de género. El módulo 4 aborda el concepto de violencia en todas sus dimensiones. Los módulos 5 y 6 evidencian situaciones conflictivas diarias relacionadas con la violencia de género, así como también las intervenciones, la transversalidad y las herramientas de acción del Estado para que se cumpla la Ley Micaela.',
    provinces,
  },

  // POSTÍTULOS
  {
    id: 'y7z8a9',
    title: 'Tramo Pedagógico para Nivel Medio y Superior',
    code: 'Postitulo-001',
    duration: 'Variable',
    icon: 'PostTitle',
    category: 'Postítulo',
    description: 'Habilitación pedagógica para la enseñanza en nivel medio y superior.',
    provinces,
  },
  {
    id: 'b1c2d3',
    title: 'Curso Laboral en Lenguaje de Señas',
    code: 'Postitulo-002',
    duration: 'Variable',
    icon: 'PostTitle',
    category: 'Postítulo',
    description: 'Destinado a aquellas personas que tengan interes en estudios del lenguaje en general. La lengua de señas es un sistema lingüístico que tiene características propias y autonomía en relación a cualquier lengua usada por las personas oyentes. Orientado a conocer las características de las personas sordas, su entorno y sus limitaciones para conocer el mundo. Les permitirán a los estudiantes involucrarse en el proceso de enseñanza-aprendizaje adquiriendo saberes nuevos y construyendo su propio conocimiento.',
    provinces,
  },
];
