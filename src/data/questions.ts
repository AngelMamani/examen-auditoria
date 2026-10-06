import type { Question } from '../types'

export const questions: Question[] = [
  {
    "id": 1,
    "tema": "Datos personales",
    "prompt": "El PDF «Ley de protección de datos personales» de la carpeta es:",
    "options": [
      {
        "letter": "A",
        "text": "La Ley N.º 29733, sin reglamento."
      },
      {
        "letter": "B",
        "text": "El Decreto Supremo N.º 016-2024-JUS, que aprueba el nuevo Reglamento de la Ley N.º 29733 y deroga el Decreto Supremo N.º 003-2013-JUS."
      },
      {
        "letter": "C",
        "text": "El Decreto Legislativo N.º 1412."
      },
      {
        "letter": "D",
        "text": "Una norma técnica del INACAL."
      }
    ],
    "correct": "B",
    "whyCorrect": "El documento es el reglamento publicado el 30 de noviembre de 2024. La ley sigue siendo la N.º 29733. La disposición derogatoria única deja sin efecto el reglamento de 2013.",
    "whyWrong": {
      "A": "El PDF desarrolla la ley. No es el texto de la Ley N.º 29733.",
      "C": "El Decreto Legislativo N.º 1412 es la Ley de Gobierno Digital, de 2018.",
      "D": "La NTP-ISO/IEC 27001 la aprueba el INACAL. Este reglamento lo expide el Poder Ejecutivo."
    }
  },
  {
    "id": 2,
    "tema": "Datos personales",
    "prompt": "En ese reglamento, la palabra «días» y la entrada en vigencia se leen así:",
    "options": [
      {
        "letter": "A",
        "text": "Todos los plazos son calendario, y la norma rigió el mismo día de su publicación."
      },
      {
        "letter": "B",
        "text": "«Días» significa días hábiles. La vigencia general es a los 120 días calendario siguientes a la publicación en *El Peruano*."
      },
      {
        "letter": "C",
        "text": "«Días» significa días hábiles, y también los 120 de la vigencia."
      },
      {
        "letter": "D",
        "text": "No hay vacancia: rige desde el 29 de noviembre de 2024, fecha de la firma."
      }
    ],
    "correct": "B",
    "whyCorrect": "El numeral 8 del artículo III define «días» como hábiles. La primera disposición complementaria final usa otra palabra a propósito: 120 días calendario desde la publicación del 30 de noviembre de 2024.",
    "whyWrong": {
      "A": "Si todos fueran calendario, la definición del artículo III no existiría. Tampoco rige el día de la publicación.",
      "C": "El plazo de vigencia dice «calendario». No se le aplica la definición de hábiles.",
      "D": "El 29 de noviembre es la fecha en que se expidió. La publicación es el 30, y la vigencia es posterior."
    }
  },
  {
    "id": 3,
    "tema": "Datos personales",
    "prompt": "El consentimiento es válido si es:",
    "options": [
      {
        "letter": "A",
        "text": "Tácito, posterior, general y renovado cada año."
      },
      {
        "letter": "B",
        "text": "Libre, previo, expreso e inequívoco, e informado."
      },
      {
        "letter": "C",
        "text": "Solo escrito, en todo tratamiento."
      },
      {
        "letter": "D",
        "text": "Verbal, y por eso ya no hace falta que sea informado."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 2 enumera esas cuatro características. Lo verbal puede ser una forma de consentimiento expreso, pero no dispensa las demás. Lo escrito se exige, además, para datos sensibles.",
    "whyWrong": {
      "A": "El consentimiento tácito y posterior contradice lo expreso, lo inequívoco y lo previo.",
      "C": "El escrito es regla del artículo 8 para datos sensibles, no de todo tratamiento.",
      "D": "El artículo 5 dice que la forma de expresar la voluntad no exime de que sea libre, previo e informado."
    }
  },
  {
    "id": 4,
    "tema": "Datos personales",
    "prompt": "Para tratar datos sensibles, además del consentimiento válido:",
    "options": [
      {
        "letter": "A",
        "text": "Basta un clic, igual que para un dato ordinario."
      },
      {
        "letter": "B",
        "text": "El consentimiento debe otorgarse por escrito, con firma manuscrita, digital, electrónica u otra modalidad que garantice la voluntad."
      },
      {
        "letter": "C",
        "text": "Se presume si el titular no se opone en 48 horas."
      },
      {
        "letter": "D",
        "text": "Lo otorga el Oficial de Datos Personales."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 8 añade esa forma escrita. Datos sensibles son, entre otros, los genéticos o biométricos, los neuronales, la vida afectiva o familiar, la afiliación sindical y la salud.",
    "whyWrong": {
      "A": "El clic puede servir para el consentimiento expreso general. Para el dato sensible el reglamento pide escrito.",
      "C": "No hay consentimiento por silencio.",
      "D": "El Oficial asesora y verifica. Quien consiente es el titular del dato."
    }
  },
  {
    "id": 5,
    "tema": "Datos personales",
    "prompt": "La carga de probar el consentimiento y la revocación se rigen así:",
    "options": [
      {
        "letter": "A",
        "text": "Prueba el titular del dato. La revocación exige justa causa y es retroactiva."
      },
      {
        "letter": "B",
        "text": "Prueba siempre el titular del banco o el responsable. El titular puede revocar en cualquier momento, sin justificación y sin efecto retroactivo. Los tratamientos deben adecuarse en un plazo diligente no mayor de diez días."
      },
      {
        "letter": "C",
        "text": "Prueba la Autoridad, y la revocación solo procede dentro de las 48 horas."
      },
      {
        "letter": "D",
        "text": "La revocación de una finalidad adicional extingue también el tratamiento principal que el titular no revocó."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 9 pone la carga en quien trata. El artículo 10 permite revocar sin justificación ni efecto retroactivo, y fija el máximo de diez días para adecuar los tratamientos. Los mecanismos de revocación deben ser sencillos y gratuitos.",
    "whyWrong": {
      "A": "Invierte la carga y el efecto de la revocación.",
      "C": "Las 48 horas son el plazo para notificar un incidente de seguridad, no para revocar.",
      "D": "Revocar una finalidad adicional no tumba la relación que el titular mantiene. Si la revocación alcanza todo el tratamiento, ahí sí se cancela o suprime."
    }
  },
  {
    "id": 6,
    "tema": "Datos personales",
    "prompt": "En servicios digitales, el tratamiento de datos de niños, niñas y adolescentes es lícito cuando:",
    "options": [
      {
        "letter": "A",
        "text": "Cualquier menor hace clic, sin importar la edad."
      },
      {
        "letter": "B",
        "text": "Si el servicio se dirige a menores de catorce años, consiente quien ejerce la patria potestad o la tutela. De catorce a menos de dieciocho, puede consentir el propio adolescente. Nunca para bienes o servicios restringidos a su edad."
      },
      {
        "letter": "C",
        "text": "Basta el consentimiento del menor de diez años si el servicio es gratuito."
      },
      {
        "letter": "D",
        "text": "El obsequio al menor refuerza la libertad de su consentimiento."
      }
    ],
    "correct": "B",
    "whyCorrect": "Los artículos 22 y 25 usan los catorce años como corte. El párrafo 22.3 prohíbe usar ese consentimiento para actividades restringidas por edad. El párrafo 3.3 dice que, si el consentimiento del menor se admite, no es libre cuando media un obsequio o un beneficio.",
    "whyWrong": {
      "A": "Bajo catorce años el clic del niño no reemplaza a padres o tutores.",
      "C": "La gratuidad no baja el umbral de edad ni presume el consentimiento.",
      "D": "En el adulto el obsequio no quita la libertad. En el menor, sí impide considerar libre ese consentimiento."
    }
  },
  {
    "id": 7,
    "tema": "Datos personales",
    "prompt": "Un incidente de seguridad que afecta datos sensibles o a un gran número de personas se notifica:",
    "options": [
      {
        "letter": "A",
        "text": "A la Autoridad solo si no pudo resolverse internamente, en un plazo de diez días."
      },
      {
        "letter": "B",
        "text": "A la Autoridad Nacional de Protección de Datos Personales como máximo dentro de las 48 horas de conocido, aunque el responsable crea que ya lo subsanó. Si ocurre en el entorno digital, también al Centro Nacional de Seguridad Digital."
      },
      {
        "letter": "C",
        "text": "Solo al titular, y nunca a la Autoridad."
      },
      {
        "letter": "D",
        "text": "A la SUNARP, para anotarlo en la partida de la empresa."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 34 fija las 48 horas y aclara que el deber permanece aunque el incidente se haya resuelto por dentro. En el entorno digital se suma el Centro Nacional de Seguridad Digital, para el Registro Nacional de Incidentes de Seguridad Digital. Si el incidente afecta otros derechos del titular, también se le comunica a él en 48 horas.",
    "whyWrong": {
      "A": "Diez días es el plazo de varios derechos y de la revocación parcial, no el del incidente. La subsanación interna no borra la notificación.",
      "C": "Avisar al titular no reemplaza a la Autoridad. Hay un supuesto en el que, si no hubo afectación de otros derechos y el incidente se superó por completo, no se comunica al titular. Eso no elimina el aviso a la Autoridad cuando el incidente entra en los umbrales del artículo 34.",
      "D": "La SUNARP no es el destinatario de esta notificación."
    }
  },
  {
    "id": 8,
    "tema": "Datos personales",
    "prompt": "Es obligatorio designar Oficial de Datos Personales, y comunicar su contacto a la Autoridad:",
    "options": [
      {
        "letter": "A",
        "text": "En toda agenda doméstica, dentro de las 48 horas."
      },
      {
        "letter": "B",
        "text": "Cuando el tratamiento lo hace una entidad pública en el supuesto que remite el reglamento, cuando hay grandes volúmenes, datos sensibles o perjuicio evidente, o cuando el giro comprende datos sensibles. El contacto se publica y se comunica a la Autoridad dentro de los quince días de la designación o de su actualización."
      },
      {
        "letter": "C",
        "text": "Solo después de una sanción firme."
      },
      {
        "letter": "D",
        "text": "Siempre con dedicación exclusiva y como trabajador de planilla."
      }
    ],
    "correct": "B",
    "whyCorrect": "Esos son los tres supuestos del artículo 37. El plazo de comunicación es de quince días. El Oficial puede tener otras funciones y, en una organización privada, puede ser externo. No designarlo cuando corresponde es infracción leve.",
    "whyWrong": {
      "A": "El tratamiento doméstico está fuera del ámbito del reglamento.",
      "C": "La designación es una obligación de cumplimiento, no una consecuencia que nace solo después de la multa.",
      "D": "El artículo 38 admite que no sea exclusivo y que sea una persona externa en el sector privado."
    }
  },
  {
    "id": 9,
    "tema": "Datos personales",
    "prompt": "Los plazos máximos para responder derechos, contados desde el día siguiente de la solicitud, son:",
    "options": [
      {
        "letter": "A",
        "text": "Información, 20 días; acceso, 8; rectificación, cancelación y oposición, 30."
      },
      {
        "letter": "B",
        "text": "Información, 8 días; acceso, 20; rectificación, cancelación y oposición, 10. El de información no se amplía. Los otros pueden ampliarse una sola vez, por un plazo igual como máximo."
      },
      {
        "letter": "C",
        "text": "Todos, 48 horas."
      },
      {
        "letter": "D",
        "text": "Todos, 30 días calendario, prorrogables sin límite."
      }
    ],
    "correct": "B",
    "whyCorrect": "Así lo fijan los artículos 69 y 71. Esos días son hábiles. El silencio al vencer el plazo permite tener por denegada la solicitud de tutela directa y reclamar ante la Dirección de Protección de Datos Personales.",
    "whyWrong": {
      "A": "Invierte información y acceso, y alarga a treinta días derechos que tienen diez.",
      "C": "Las 48 horas son del incidente de seguridad.",
      "D": "No hay prórroga ilimitada, y el plazo de información no se prorroga."
    }
  },
  {
    "id": 10,
    "tema": "Datos personales",
    "prompt": "El flujo transfronterizo de datos personales:",
    "options": [
      {
        "letter": "A",
        "text": "Puede hacerse a cualquier país si el titular pagó el servicio."
      },
      {
        "letter": "B",
        "text": "Procede si el país de destino tiene un nivel adecuado. Si no lo tiene, el exportador debe dar garantías, salvo las excepciones del artículo 15 de la Ley. En cualquier caso el flujo se comunica para inscribirlo en el Registro Nacional."
      },
      {
        "letter": "C",
        "text": "Queda prohibido entre empresas del mismo grupo, aunque haya encargo contractual."
      },
      {
        "letter": "D",
        "text": "Lo autoriza SUNAT en un plazo de diez días."
      }
    ],
    "correct": "B",
    "whyCorrect": "Los artículos 18 y 21 separan el nivel adecuado, las garantías y la comunicación obligatoria del flujo. El artículo 15 de la Ley no debe confundirse con el artículo 15 del Reglamento, que trata las transferencias dentro del grupo empresarial: esas también piden consentimiento, salvo una excepción legal.",
    "whyWrong": {
      "A": "El pago del servicio no declara adecuado al país de destino.",
      "C": "El grupo no está prohibido. Se pide consentimiento, salvo excepción del artículo 14 de la Ley, en particular un encargo dentro de una relación contractual previa.",
      "D": "SUNAT no autoriza este flujo. Puede aparecer después como fuente para acreditar ingresos al graduar una multa."
    }
  },
  {
    "id": 11,
    "tema": "Datos personales",
    "prompt": "Informar de modo incompleto las condiciones del artículo 18 de la Ley, y no inscribir el banco, se califican así:",
    "options": [
      {
        "letter": "A",
        "text": "Las dos conductas son siempre muy graves."
      },
      {
        "letter": "B",
        "text": "Informar de modo incompleto hasta dos condiciones es leve. No informar, o informar de modo incompleto tres o más condiciones, es grave. No inscribir es leve, y pasa a grave si continúa después de un requerimiento de la Autoridad."
      },
      {
        "letter": "C",
        "text": "No inscribir es muy grave desde el primer día. Informar mal no está sancionado."
      },
      {
        "letter": "D",
        "text": "Ambas son leves aunque el responsable haya sido requerido y aunque omita cinco condiciones."
      }
    ],
    "correct": "B",
    "whyCorrect": "El corte de dos condiciones está en el artículo 132. Desde tres, o si no se informa, el artículo 133 lo sube a grave. La inscripción sigue el mismo salto: leve al inicio y grave después del requerimiento.",
    "whyWrong": {
      "A": "Esas omisiones no están en las cuatro infracciones muy graves. Lo muy grave incluye, por ejemplo, medios fraudulentos, información falsa a la Autoridad y no cumplir una medida del procedimiento de tutela pese al apercibimiento.",
      "C": "La falta de inscripción inicial es leve. Informar mal sí está tipificado.",
      "D": "Cinco condiciones incompletas ya son grave. Después del requerimiento, no inscribir también es grave."
    }
  },
  {
    "id": 12,
    "tema": "Datos personales",
    "prompt": "La portabilidad y el Oficial de Datos Personales no entran en vigor el mismo día que todo el reglamento:",
    "options": [
      {
        "letter": "A",
        "text": "La portabilidad rige el día de la publicación. El Oficial, para toda empresa, a los 120 días calendario."
      },
      {
        "letter": "B",
        "text": "La portabilidad del artículo 76 surte efecto a los seis meses de la entrada en vigencia del reglamento. La designación del Oficial en los supuestos de grandes volúmenes o de giro con datos sensibles es progresiva según las ventas: más de 2300 UIT al año de la publicación; más de 1700 y hasta 2300, a los dos años; más de 150 y hasta 1700, a los tres; hasta 150 UIT, a los cuatro."
      },
      {
        "letter": "C",
        "text": "Una empresa con ventas de exactamente 2300 UIT designa Oficial al año."
      },
      {
        "letter": "D",
        "text": "La portabilidad se aplica también al tratamiento necesario para las competencias de una entidad pública."
      }
    ],
    "correct": "B",
    "whyCorrect": "La primera disposición complementaria final separa esos calendarios. El de la portabilidad se cuenta desde la vigencia, no desde la publicación. El del Oficial, para los numerales 2 y 3 del párrafo 37.1, se cuenta desde la publicación y usa tramos de UIT. Exactamente 2300 UIT no es «superior a 2300»: cae en el tramo de dos años.",
    "whyWrong": {
      "A": "La portabilidad tiene seis meses adicionales después de la vigencia. El Oficial de las empresas privadas de esos supuestos no sigue solo los 120 días.",
      "C": "El año es para ventas superiores a 2300 UIT. El valor exacto 2300 está en el máximo del tramo de dos años.",
      "D": "El párrafo 76.6 excluye la portabilidad del tratamiento necesario para competencias o funciones de las entidades públicas."
    }
  },
  {
    "id": 13,
    "tema": "Datos personales",
    "prompt": "Las conductas infractoras cometidas antes de que este reglamento entre en vigencia, y los procedimientos que en esa fecha ya estaban en trámite:",
    "options": [
      {
        "letter": "A",
        "text": "Se juzgan con el Decreto Supremo N.º 016-2024-JUS, por ser más reciente."
      },
      {
        "letter": "B",
        "text": "Se rigen por el reglamento aprobado mediante Decreto Supremo N.º 003-2013-JUS."
      },
      {
        "letter": "C",
        "text": "Quedan impunes, porque el reglamento de 2013 fue derogado el día de la publicación de 2024."
      },
      {
        "letter": "D",
        "text": "Pasan al Código Penal como delitos informáticos."
      }
    ],
    "correct": "B",
    "whyCorrect": "Las dos disposiciones complementarias transitorias conservan el reglamento de 2013 para el pasado y para los trámites ya iniciados. La derogación no borra esos casos.",
    "whyWrong": {
      "A": "La regla de tránsito es la contraria: lo anterior sigue en la norma anterior.",
      "C": "No hay vacío. Las transitorias dicen qué reglamento se aplica.",
      "D": "Una infracción administrativa de datos personales no se convierte, por esa sola transición, en delito de la Ley N.º 30096."
    }
  },
  {
    "id": 14,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "La NTP-ISO/IEC 27001:2022 es:",
    "options": [
      {
        "letter": "A",
        "text": "Una ley penal de ciberdelincuencia."
      },
      {
        "letter": "B",
        "text": "La norma técnica peruana de requisitos del sistema de gestión de seguridad de la información, equivalente a ISO/IEC 27001:2022, de carácter recomendable. Reemplaza a la NTP-ISO/IEC 27001:2014."
      },
      {
        "letter": "C",
        "text": "El reglamento obligatorio de la Ley de Gobierno Digital."
      },
      {
        "letter": "D",
        "text": "Una guía de 114 controles que sustituye los capítulos 4 a 10."
      }
    ],
    "correct": "B",
    "whyCorrect": "La aprueba el INACAL y la portada la declara recomendable. Es adopción de ISO/IEC 27001:2022 y deja atrás la NTP de 2014, que correspondía a la edición internacional de 2013. El cambio principal es la alineación con la estructura armonizada y con ISO/IEC 27002:2022.",
    "whyWrong": {
      "A": "Las penas están en la Ley N.º 30096 y en el Código Penal. Esta NTP no condena.",
      "C": "El reglamento del Decreto Legislativo N.º 1412 lo aprueba la PCM por decreto supremo. No es esta NTP.",
      "D": "Los capítulos 4 a 10 siguen siendo obligatorios para declarar conformidad. El Anexo A ya no tiene 114 controles."
    }
  },
  {
    "id": 15,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "Quien declara conformidad con esta NTP:",
    "options": [
      {
        "letter": "A",
        "text": "Puede excluir el capítulo 9 si la organización es pequeña."
      },
      {
        "letter": "B",
        "text": "Debe cumplir los capítulos 4 a 10. Esos requisitos no se excluyen. El Anexo A se usa dentro del tratamiento de riesgos, y un control puede no aplicar si la exclusión está justificada."
      },
      {
        "letter": "C",
        "text": "Cumple solo con implementar los 93 controles."
      },
      {
        "letter": "D",
        "text": "Queda certificado por el INACAL al comprar la norma."
      }
    ],
    "correct": "B",
    "whyCorrect": "El capítulo 1 prohíbe excluir requisitos de los capítulos 4 a 10. El Anexo A es normativo, pero entra por el apartado 6.1.3: se comparan los controles necesarios con la tabla y las exclusiones se justifican en la declaración de aplicabilidad. Comprar la norma no certifica.",
    "whyWrong": {
      "A": "El capítulo 9 está dentro del bloque que no se puede excluir. El tamaño no es una dispensa.",
      "C": "Los 93 no son un paquete ciego. Sin sistema de gestión no hay conformidad.",
      "D": "La certificación, si se busca, la da un organismo de certificación. El INACAL oficializa la NTP."
    }
  },
  {
    "id": 16,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "La única referencia normativa del capítulo 2 es:",
    "options": [
      {
        "letter": "A",
        "text": "ISO/IEC 27002:2022, de cumplimiento obligatorio junto con los capítulos 4 a 10."
      },
      {
        "letter": "B",
        "text": "ISO/IEC 27000, visión general y vocabulario. ISO/IEC 27002, 27003, 27004, 27005 e ISO 31000 están en la bibliografía como orientación."
      },
      {
        "letter": "C",
        "text": "ISO/IEC 27001:2013, que sigue vigente como referencia."
      },
      {
        "letter": "D",
        "text": "El Convenio de Budapest."
      }
    ],
    "correct": "B",
    "whyCorrect": "Solo ISO/IEC 27000 es referencia normativa, y de ella salen los términos del capítulo 3. Las otras ayudan, pero no añaden requisitos. El Convenio de Budapest define sistema y dato informático en la Ley N.º 30096, no en esta NTP.",
    "whyWrong": {
      "A": "27002 es la fuente de los controles del Anexo A y figura en la bibliografía. Cumplirla no sustituye cumplir esta NTP.",
      "C": "La edición 2013 fue reemplazada.",
      "D": "Budapest no es la referencia normativa del capítulo 2."
    }
  },
  {
    "id": 17,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "El alcance del sistema de gestión debe:",
    "options": [
      {
        "letter": "A",
        "text": "Cubrir siempre a todo el grupo empresarial mundial."
      },
      {
        "letter": "B",
        "text": "Considerar las cuestiones internas y externas, los requisitos de las partes interesadas que se abordarán, y las interfaces y dependencias con otras organizaciones. Debe estar disponible como información documentada."
      },
      {
        "letter": "C",
        "text": "Limitarse a los servidores en la nube y dejar fuera el papel, aunque el papel esté en el proceso."
      },
      {
        "letter": "D",
        "text": "Definirlo el proveedor, porque el apartado 4.3 se lo encarga."
      }
    ],
    "correct": "B",
    "whyCorrect": "El apartado 4.3 arma el límite con esos tres insumos y exige dejarlo documentado. Un proceso tercerizado del que depende la información no puede esconderse: el apartado 8.1 pide controlar los procesos externalizados.",
    "whyWrong": {
      "A": "El alcance lo determina la organización. No hay un deber de cubrir el mundo entero.",
      "C": "El soporte no decide el alcance. La seguridad de la información no se reduce a la nube.",
      "D": "El alcance lo determina la organización. El proveedor no lo sustituye."
    }
  },
  {
    "id": 18,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "La evaluación de riesgos de seguridad de la información debe lograr que:",
    "options": [
      {
        "letter": "A",
        "text": "Cada evaluación use criterios nuevos, para no repetir hallazgos."
      },
      {
        "letter": "B",
        "text": "Haya criterios de riesgo, incluidos los de aceptación; las evaluaciones repetidas sean consistentes, válidas y comparables; se identifiquen los riesgos de perder confidencialidad, integridad o disponibilidad; haya dueños del riesgo; y los riesgos se prioricen para tratarlos."
      },
      {
        "letter": "C",
        "text": "Se use obligatoriamente una matriz de 5 por 5."
      },
      {
        "letter": "D",
        "text": "Se elimine todo riesgo residual antes de operar."
      }
    ],
    "correct": "B",
    "whyCorrect": "Eso es el apartado 6.1.2. La norma no impone una matriz ni la ISO 31000 como método único. El riesgo residual puede aceptarse: el dueño del riesgo aprueba el plan de tratamiento y acepta ese residual.",
    "whyWrong": {
      "A": "La norma pide resultados comparables cuando la evaluación se repite. Cambiar los criterios cada vez lo impide.",
      "C": "Ningún apartado fija esa matriz.",
      "D": "Riesgo cero no es el requisito. El tratamiento incluye la aceptación del residual."
    }
  },
  {
    "id": 19,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "La declaración de aplicabilidad contiene:",
    "options": [
      {
        "letter": "A",
        "text": "Solo el logo del certificador."
      },
      {
        "letter": "B",
        "text": "Los controles necesarios, por qué se incluyen, si están implementados o no, y la justificación de las exclusiones del Anexo A."
      },
      {
        "letter": "C",
        "text": "Únicamente los controles excluidos."
      },
      {
        "letter": "D",
        "text": "La política de seguridad, que así ya no hace falta como documento distinto."
      }
    ],
    "correct": "B",
    "whyCorrect": "Esos cuatro contenidos salen del apartado 6.1.3. La política es el apartado 5.2 y no se confunde con esta declaración. Pueden añadirse controles que no estén en el Anexo A.",
    "whyWrong": {
      "A": "El logo no es contenido de la declaración.",
      "C": "Sin los incluidos, su justificación y su estado, no se sabe qué es aplicable.",
      "D": "Son información documentada distinta. Una no absorbe a la otra."
    }
  },
  {
    "id": 20,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "El apartado 6.3, nuevo en esta edición, exige que:",
    "options": [
      {
        "letter": "A",
        "text": "Los cambios del sistema de gestión se hagan de manera planificada."
      },
      {
        "letter": "B",
        "text": "Todo cambio de un servidor se apruebe en Ginebra."
      },
      {
        "letter": "C",
        "text": "El sistema no se modifique durante tres años."
      },
      {
        "letter": "D",
        "text": "El apartado 6.3 reemplace al control de gestión de cambios del Anexo A, porque son lo mismo."
      }
    ],
    "correct": "A",
    "whyCorrect": "El apartado 6.3 planifica los cambios del propio sistema de gestión. El control tecnológico de gestión de cambios mira las instalaciones de procesamiento y los sistemas de información. Pueden coincidir en un mismo proyecto, pero no son el mismo requisito.",
    "whyWrong": {
      "B": "ISO no aprueba los cambios de cada organización.",
      "C": "La mejora continua y la revisión por la dirección existen para cambiar el sistema cuando hace falta.",
      "D": "Confundirlos deja sin auditar o el gobierno del sistema o el cambio técnico."
    }
  },
  {
    "id": 21,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "La auditoría interna del apartado 9.2:",
    "options": [
      {
        "letter": "A",
        "text": "La hace quien diseñó el control, porque lo conoce mejor, y sirve para otorgar el certificado."
      },
      {
        "letter": "B",
        "text": "Informa si el sistema cumple los requisitos de la organización y los de esta NTP, y si está implementado y mantenido con eficacia. Quien audita debe ser objetivo e imparcial. Los resultados se informan a la dirección pertinente."
      },
      {
        "letter": "C",
        "text": "Solo revisa los controles que el auditor prefiere, aunque estén excluidos con justificación."
      },
      {
        "letter": "D",
        "text": "Reemplaza la revisión por la dirección."
      }
    ],
    "correct": "B",
    "whyCorrect": "El apartado 9.2 pide ese doble criterio de conformidad y la eficacia, más un programa de auditoría y evidencia de sus resultados. La imparcialidad impide que la persona audite el control que ella misma opera. La auditoría interna no certifica.",
    "whyWrong": {
      "A": "Auditar el propio diseño rompe la objetividad. El certificado no lo emite la auditoría interna.",
      "C": "Un control bien excluido no se audita como si fuera obligatorio. Sí puede cuestionarse si la exclusión está justificada.",
      "D": "La revisión por la dirección es el apartado 9.3 y la hace la alta dirección. Usa los resultados de auditoría como una de sus entradas, pero no es la auditoría."
    }
  },
  {
    "id": 22,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "La revisión por la dirección:",
    "options": [
      {
        "letter": "A",
        "text": "La hace el responsable de seguridad, sin dejar acta, cada vez que hay presupuesto."
      },
      {
        "letter": "B",
        "text": "La hace la alta dirección, a intervalos planificados, para que el sistema siga siendo adecuado, idóneo y eficaz. Mira, entre otras entradas, cambios de contexto, no conformidades, mediciones, auditorías, cumplimiento de objetivos, resultados de riesgos y el estado del plan de tratamiento. Los resultados se documentan."
      },
      {
        "letter": "C",
        "text": "Solo comprueba que el sistema sea más barato que el año anterior."
      },
      {
        "letter": "D",
        "text": "Es opcional si ya hubo auditoría interna."
      }
    ],
    "correct": "B",
    "whyCorrect": "El apartado 9.3 reserva la revisión a la alta dirección y lista esas entradas. Los resultados incluyen decisiones de mejora y de cambios del sistema. Sin acta, no hay la información documentada que el apartado pide.",
    "whyWrong": {
      "A": "El responsable puede informar. Quien revisa es la alta dirección, y el resultado se documenta.",
      "C": "El criterio no es el ahorro. Es adecuación, idoneidad y eficacia.",
      "D": "La auditoría es una entrada de la revisión. No la sustituye."
    }
  },
  {
    "id": 23,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "Ante una no conformidad, la organización:",
    "options": [
      {
        "letter": "A",
        "text": "Corrige el síntoma y archiva el caso si el cliente no se enteró."
      },
      {
        "letter": "B",
        "text": "La controla y corrige, atiende las consecuencias, busca las causas y si puede repetirse en otro lugar, implementa la acción, revisa si funcionó y cambia el sistema si hace falta. Conserva evidencia de la no conformidad, de la acción y de sus resultados."
      },
      {
        "letter": "C",
        "text": "Siempre despide al responsable, porque la norma lo ordena."
      },
      {
        "letter": "D",
        "text": "La cierra excluyendo el control del Anexo A para que el hallazgo desaparezca."
      }
    ],
    "correct": "B",
    "whyCorrect": "El apartado 10.2 separa la corrección inmediata de la acción sobre la causa. La acción debe ser proporcional a los efectos. Excluir el control después del hallazgo, solo para borrarlo, no es una justificación de aplicabilidad.",
    "whyWrong": {
      "A": "La no conformidad existe aunque el cliente no la vea, y corregir el síntoma no evalúa la causa ni la repetición.",
      "C": "La NTP no impone una sanción laboral.",
      "D": "La exclusión se justifica cuando el control no es necesario, no cuando ya falló y conviene ocultarlo."
    }
  },
  {
    "id": 24,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "El Anexo A de esta edición tiene:",
    "options": [
      {
        "letter": "A",
        "text": "14 dominios y 114 controles, como en 2013."
      },
      {
        "letter": "B",
        "text": "93 controles en cuatro familias: 37 organizacionales, 8 de personas, 14 físicos y 34 tecnológicos, alineados con los capítulos 5 a 8 de ISO/IEC 27002:2022."
      },
      {
        "letter": "C",
        "text": "Solo 34 controles tecnológicos."
      },
      {
        "letter": "D",
        "text": "Carácter informativo, de modo que puede ignorarse al declarar conformidad."
      }
    ],
    "correct": "B",
    "whyCorrect": "Esa es la Tabla A.1. El anexo es normativo y se usa con el apartado 6.1.3. Entre los controles nuevos están la inteligencia de amenazas, la seguridad en la nube, la preparación de las TIC para la continuidad, el filtrado web, la codificación segura, el enmascaramiento de datos y la prevención de fuga.",
    "whyWrong": {
      "A": "Esa es la estructura de la edición anterior. Usarla en un examen de la NTP 2022 es un error de transición.",
      "C": "Hay controles organizacionales, de personas y físicos. La seguridad de la información no es solo tecnología.",
      "D": "Al ser normativo, no se ignora. Lo que puede ocurrir es que un control concreto no aplique, con justificación."
    }
  },
  {
    "id": 25,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "Un control del Anexo A que no corresponde al alcance:",
    "options": [
      {
        "letter": "A",
        "text": "Se omite en silencio."
      },
      {
        "letter": "B",
        "text": "Se excluye en la declaración de aplicabilidad, con justificación. La comparación con el anexo sirve para no olvidar un control que sí sea necesario."
      },
      {
        "letter": "C",
        "text": "Impide declarar conformidad, aunque el riesgo no exista."
      },
      {
        "letter": "D",
        "text": "Se implementa igual, para completar los 93."
      }
    ],
    "correct": "B",
    "whyCorrect": "El apartado 6.1.3 no obliga a implementar todo el anexo. Obliga a seleccionar según el riesgo, a contrastar el anexo y a justificar lo que se deja fuera. También permite controles adicionales.",
    "whyWrong": {
      "A": "La omisión silenciosa es lo que la declaración quiere evitar.",
      "C": "La conformidad no exige los 93 controles aplicados.",
      "D": "Implementar un control inútil solo por el número no es el modelo de riesgo de la norma."
    }
  },
  {
    "id": 26,
    "tema": "NTP-ISO/IEC 27001:2022",
    "prompt": "El orden de los capítulos 4 a 10:",
    "options": [
      {
        "letter": "A",
        "text": "Obliga a implementar primero el Anexo A y al final el liderazgo."
      },
      {
        "letter": "B",
        "text": "No indica importancia ni secuencia de implementación. La estructura armonizada permite integrar este sistema con otros, como uno de calidad, sin mezclar sus requisitos."
      },
      {
        "letter": "C",
        "text": "Prohíbe integrar la NTP con la ISO 9001."
      },
      {
        "letter": "D",
        "text": "Exige seguir un ciclo planificar-hacer-verificar-actuar como cláusula numerada."
      }
    ],
    "correct": "B",
    "whyCorrect": "La introducción dice que el orden es solo de referencia. El apartado 0.2 explica la compatibilidad con otras normas de sistemas de gestión. Integrar no dispensa los requisitos de seguridad de la información.",
    "whyWrong": {
      "A": "El Anexo A se usa en el tratamiento de riesgos. No es el primer paso por estar al final del índice.",
      "C": "La integración es una finalidad de la estructura armonizada.",
      "D": "Esta edición no convierte ese ciclo en un requisito numerado."
    }
  },
  {
    "id": 27,
    "tema": "Gobierno digital",
    "prompt": "El Decreto Legislativo N.º 1412:",
    "options": [
      {
        "letter": "A",
        "text": "Aprueba la Ley de Protección de Datos Personales."
      },
      {
        "letter": "B",
        "text": "Aprueba la Ley de Gobierno Digital. Su objeto es el marco de gobernanza de la identidad digital, los servicios digitales, la arquitectura digital, la interoperabilidad, la seguridad digital y los datos, en los tres niveles de gobierno."
      },
      {
        "letter": "C",
        "text": "Fue firmado en 2024 por la presidenta Dina Boluarte."
      },
      {
        "letter": "D",
        "text": "Se aplica solo a los ministerios."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 1 fija ese objeto. Se publicó el 13 de setiembre de 2018 y lo promulgó Martín Vizcarra. Alcanza a la administración pública de los tres niveles y, en lo aplicable, a las empresas del Estado. También alcanza a quien ejerce potestades administrativas por mandato, encargo o contrato.",
    "whyWrong": {
      "A": "La ley de datos personales es la N.º 29733. Este decreto solo remite a ella en el principio de nivel de protección adecuado.",
      "C": "La firma de 2024 corresponde al reglamento de datos personales, no a esta ley.",
      "D": "El artículo 1 incluye los tres niveles, no solo el gobierno nacional."
    }
  },
  {
    "id": 28,
    "tema": "Gobierno digital",
    "prompt": "El ente rector del gobierno digital es:",
    "options": [
      {
        "letter": "A",
        "text": "El RENIEC, para todas las materias."
      },
      {
        "letter": "B",
        "text": "La Presidencia del Consejo de Ministros, a través de la Secretaría de Gobierno Digital. Dicta normas, fija procedimientos y responde por la operación. Puede emitir opinión vinculante sobre las normas de la materia y opinión previa sobre proyectos transversales."
      },
      {
        "letter": "C",
        "text": "El Ministerio de Justicia, porque también ve ciberdelincuencia."
      },
      {
        "letter": "D",
        "text": "Cada gobierno regional, sin rector nacional."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 8 concentra el rectorado en la PCM por medio de la SEGDI. El artículo 9 incluye la opinión vinculante y la opinión previa de proyectos de interoperabilidad, seguridad, identidad, datos, arquitectura o mejora de servicios digitales.",
    "whyWrong": {
      "A": "El RENIEC emite el DNIe y norma la identidad digital nacional. No es el ente rector del artículo 8.",
      "C": "El Ministerio de Justicia participa en el ámbito de ciberdelincuencia del artículo 32, junto con otros órganos. No es el rector del gobierno digital.",
      "D": "Los gobiernos regionales están en el ámbito. No sustituyen al ente rector."
    }
  },
  {
    "id": 29,
    "tema": "Gobierno digital",
    "prompt": "Tres principios del artículo 5 que suelen cruzarse con las otras normas del curso son:",
    "options": [
      {
        "letter": "A",
        "text": "Privacidad desde el diseño, datos abiertos por defecto y nivel de protección adecuado de los datos personales."
      },
      {
        "letter": "B",
        "text": "Gratuidad de las multas, silencio positivo y reserva tributaria."
      },
      {
        "letter": "C",
        "text": "Especialidad, que deroga la Ley del Procedimiento Administrativo General."
      },
      {
        "letter": "D",
        "text": "Proporcionalidad, que elimina la autenticación en todo servicio."
      }
    ],
    "correct": "A",
    "whyCorrect": "Privacidad desde el diseño pide medidas preventivas tecnológicas, organizacionales, humanas y procedimentales. Datos abiertos por defecto abre la información sin comprometer los datos personales; si hay duda, define la Autoridad de Transparencia. El nivel de protección adecuado remite el tratamiento a la Ley de Protección de Datos Personales y su reglamento.",
    "whyWrong": {
      "B": "Esos no son principios del artículo 5.",
      "C": "Especialidad significa que esta ley se aplica a los servicios digitales sin perjuicio de los procedimientos que tienen norma propia. No deroga la Ley N.º 27444.",
      "D": "Proporcionalidad gradúa la seguridad y la autenticación según el riesgo. No las elimina."
    }
  },
  {
    "id": 30,
    "tema": "Gobierno digital",
    "prompt": "«Digital desde el diseño» significa que:",
    "options": [
      {
        "letter": "A",
        "text": "El 14 de setiembre de 2018 quedó prohibido todo trámite presencial."
      },
      {
        "letter": "B",
        "text": "Los servicios, de manera preferente, progresiva y cuando corresponda, se diseñan para ser digitales de principio a fin."
      },
      {
        "letter": "C",
        "text": "Solo se digitaliza el pago."
      },
      {
        "letter": "D",
        "text": "La sede digital de todas las entidades pasó a ser de titularidad de la PCM ese mismo día."
      }
    ],
    "correct": "B",
    "whyCorrect": "El numeral 5.7 usa esos tres moduladores: preferente, progresivo y cuando corresponda. La sede digital es un canal de cada entidad, en los tres niveles, y además ese artículo entra en vigor con el reglamento, no el día siguiente de la publicación.",
    "whyWrong": {
      "A": "La igualdad de responsabilidades compara el canal digital con el presencial. No elimina el presencial.",
      "C": "El pago digital es una consideración del numeral 18.6. El principio mira el servicio de principio a fin.",
      "D": "La titularidad de la sede es de cada entidad. No se concentra en la PCM."
    }
  },
  {
    "id": 31,
    "tema": "Gobierno digital",
    "prompt": "El Documento Nacional de Identidad electrónico:",
    "options": [
      {
        "letter": "A",
        "text": "Lo emite la SEGDI y acredita el cargo del funcionario."
      },
      {
        "letter": "B",
        "text": "Lo emite el RENIEC. Acredita la identidad de la persona de manera presencial y no presencial. No garantiza el cargo, el rol ni las facultades. El funcionario gestiona en su entidad los accesos y roles."
      },
      {
        "letter": "C",
        "text": "Lo emite cada municipalidad para sus vecinos."
      },
      {
        "letter": "D",
        "text": "Reemplaza toda identificación, de modo que las entidades ya no establecen procedimientos."
      }
    ],
    "correct": "B",
    "whyCorrect": "Los artículos 16 y 17 separan la identidad de la persona y las atribuciones del cargo. Las entidades siguen obligadas a identificar a quien accede a sus servicios digitales. La Identidad Digital Nacional, según la disposición complementaria, tiene el mismo valor legal que el DNI.",
    "whyWrong": {
      "A": "El emisor es el RENIEC, y el artículo 17 niega que el DNIe acredite el cargo.",
      "C": "Las municipalidades no emiten el DNIe.",
      "D": "El artículo 13 mantiene el deber de las entidades de establecer procedimientos de identificación."
    }
  },
  {
    "id": 32,
    "tema": "Gobierno digital",
    "prompt": "Identificación digital y autenticación digital se distinguen porque:",
    "options": [
      {
        "letter": "A",
        "text": "Son sinónimos y ambos esperan al reglamento."
      },
      {
        "letter": "B",
        "text": "Identificar es reconocer a la persona como distinta de otras, y ese deber rige desde el día siguiente de la publicación. Autenticar es verificar que es quien dice ser, con niveles de seguridad que el reglamento precisa. Ese artículo de autenticación entra en vigor con el reglamento."
      },
      {
        "letter": "C",
        "text": "La autenticación la hace solo el ciudadano sobre la entidad."
      },
      {
        "letter": "D",
        "text": "Ninguna de las dos se aplica a personas extranjeras."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 13 no está en la lista de artículos diferidos. El artículo 14 sí. Mientras tanto, la primera disposición transitoria permite usar los mecanismos de autenticación ya existentes, en un contexto determinado, según lo que el reglamento precise.",
    "whyWrong": {
      "A": "No son lo mismo, y no comparten la misma fecha de vigencia.",
      "C": "Identifican y autentican el acceso las entidades, no al revés.",
      "D": "La ley habla de personas y de ciudadanos en general. No excluye a las extranjeras."
    }
  },
  {
    "id": 33,
    "tema": "Gobierno digital",
    "prompt": "Los cuatro niveles de interoperabilidad son:",
    "options": [
      {
        "letter": "A",
        "text": "Nacional, regional, local y privado."
      },
      {
        "letter": "B",
        "text": "Organizacional, semántico, técnico y legal. En lo semántico y lo técnico se adoptan los estándares del ente rector. Lo técnico lo ejecutan las oficinas de informática o las que hagan sus veces."
      },
      {
        "letter": "C",
        "text": "Solo el técnico, porque los otros son opcionales."
      },
      {
        "letter": "D",
        "text": "Confidencialidad, integridad, disponibilidad y trazabilidad."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 28 define esos cuatro niveles. El organizacional alinea objetivos y procesos. El semántico cuida el formato y el significado. El técnico cuida interfaces, protocolos y seguridad. El legal cuida que el intercambio respete la legislación, incluido el tratamiento de la información.",
    "whyWrong": {
      "A": "Esos son niveles de gobierno, no los cuatro niveles del marco de interoperabilidad.",
      "C": "Los cuatro están en el artículo. No hay uno solo obligatorio.",
      "D": "Esas son propiedades de la seguridad de la información, no los niveles de interoperabilidad."
    }
  },
  {
    "id": 34,
    "tema": "Gobierno digital",
    "prompt": "El Software Público Peruano desarrollado por la entidad o por un proveedor para sus procesos:",
    "options": [
      {
        "letter": "A",
        "text": "Queda en propiedad del proveedor, y las demás entidades solo pueden ejecutarlo."
      },
      {
        "letter": "B",
        "text": "La entidad debe obtener la titularidad exclusiva de los derechos patrimoniales. Todas las entidades lo comparten bajo licencia libre o abierta que permita usarlo, copiarlo, acceder al código y a la documentación, modificarlo de forma colaborativa y distribuirlo, en beneficio del Estado."
      },
      {
        "letter": "C",
        "text": "Se entrega el código fuente solo si el proveedor quiebra."
      },
      {
        "letter": "D",
        "text": "Está prohibido modificarlo."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 29 cubre el software hecho por terceros contratados o por personal de la entidad, exige la titularidad patrimonial de la entidad y enumera esas cinco facultades. Este artículo no está diferido al reglamento: rige desde el día siguiente de la publicación.",
    "whyWrong": {
      "A": "La regla busca que la titularidad no se quede en el proveedor, y la licencia no se reduce a ejecutar.",
      "C": "El acceso al código fuente es parte de la licencia, no un remedio de quiebra.",
      "D": "La licencia debe permitir modificarlo o transformarlo de forma colaborativa."
    }
  },
  {
    "id": 35,
    "tema": "Gobierno digital",
    "prompt": "Los ámbitos del Marco de Seguridad Digital son:",
    "options": [
      {
        "letter": "A",
        "text": "Un solo ámbito, a cargo de la SEGDI, que también condena la ciberdelincuencia."
      },
      {
        "letter": "B",
        "text": "Defensa, a cargo del Ministerio de Defensa; inteligencia, a cargo de la DINI; justicia, a cargo del Ministerio de Justicia, del Interior, de la Policía Nacional, del Ministerio Público y del Poder Judicial; e institucional, en el que cada entidad establece, mantiene y documenta un sistema de gestión de la seguridad de la información."
      },
      {
        "letter": "C",
        "text": "Solo el institucional, porque los otros son de la Ley N.º 30096."
      },
      {
        "letter": "D",
        "text": "Banca, telecomunicaciones, salud y educación."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 32 reparte así la ciberdefensa, la inteligencia y contrainteligencia, la ciberdelincuencia y el SGSI de cada entidad. La SEGDI es el ente rector del gobierno digital. No absorbe la condena penal ni la ciberdefensa.",
    "whyWrong": {
      "A": "Hay cuatro ámbitos, y la SEGDI no sentencia.",
      "C": "La Ley N.º 30096 tipifica delitos. No reemplaza los cuatro ámbitos de este artículo. El SGSI institucional, además, conversa con la NTP-ISO/IEC 27001, pero esta ley no dice que la NTP sea el único modo de cumplirlo.",
      "D": "Esos sectores no son los cuatro literales del artículo 32."
    }
  },
  {
    "id": 36,
    "tema": "Gobierno digital",
    "prompt": "La vigencia del Decreto Legislativo N.º 1412 es:",
    "options": [
      {
        "letter": "A",
        "text": "El mismo 13 de setiembre de 2018, para todos sus artículos."
      },
      {
        "letter": "B",
        "text": "Desde el día siguiente de la publicación, el 14 de setiembre de 2018, salvo los artículos que la propia ley difiere al reglamento. Entre los diferidos están la autenticación, la sede digital, el domicilio digital, el marco de interoperabilidad y el marco de seguridad digital."
      },
      {
        "letter": "C",
        "text": "A los 180 días, junto con todo el articulado."
      },
      {
        "letter": "D",
        "text": "Cuando cada entidad termine su sede digital."
      }
    ],
    "correct": "B",
    "whyCorrect": "La quinta disposición complementaria final pone la vigencia al día siguiente y lista las excepciones: artículos 11, 12, 14, 15, 19, 20, 21, 22, 25, 27 y 31, y los numerales 18.1, 18.5, 18.6 y 18.8. Los 180 días son el plazo máximo para que la PCM apruebe el reglamento por decreto supremo, contado desde el día siguiente de la publicación.",
    "whyWrong": {
      "A": "No rige el día de la publicación, y no rige completo al día siguiente.",
      "C": "Esperar 180 días para todo el texto contradice la vigencia general del día siguiente.",
      "D": "La sede digital es uno de los artículos diferidos. No es la condición de vigencia del resto."
    }
  },
  {
    "id": 37,
    "tema": "Delitos informáticos",
    "prompt": "El acceso ilícito, en el texto vigente:",
    "options": [
      {
        "letter": "A",
        "text": "Se comete por simple descuido, aunque el sistema no tenga medidas de seguridad, y la pena es de tres a seis años."
      },
      {
        "letter": "B",
        "text": "Exige un acceso deliberado e ilegítimo a todo o parte de un sistema, con vulneración de medidas de seguridad. También se castiga, con la misma pena, exceder lo autorizado. La pena es de uno a cuatro años y de treinta a noventa días-multa."
      },
      {
        "letter": "C",
        "text": "Solo existe si el agente no tenía ningún usuario."
      },
      {
        "letter": "D",
        "text": "Es un delito derogado por la Ley N.º 30171."
      }
    ],
    "correct": "B",
    "whyCorrect": "Así quedó el artículo 2 después de la Ley N.º 30171, publicada el 10 de marzo de 2014. Esa ley cambió «sin autorización» por «deliberada e ilegítimamente». La pena no cambió. El segundo párrafo cubre a quien sí tiene algún permiso y se sale de él.",
    "whyWrong": {
      "A": "El tipo vigente no es culposo, y sin vulnerar medidas de seguridad falta un elemento. De tres a seis años es la pena de los atentados contra datos o sistemas.",
      "C": "Tener usuario no impide el delito si se excede lo autorizado.",
      "D": "El artículo derogado es el 6, no el 2. El 2 fue modificado."
    }
  },
  {
    "id": 38,
    "tema": "Delitos informáticos",
    "prompt": "Dañar o hacer inaccesibles datos, frente a inutilizar el sistema, se distingue así:",
    "options": [
      {
        "letter": "A",
        "text": "Las dos conductas son acceso ilícito y tienen pena de uno a cuatro años."
      },
      {
        "letter": "B",
        "text": "Alterar, borrar, suprimir o hacer inaccesibles datos es el artículo 3. Inutilizar el sistema, impedir el acceso a él o imposibilitar su servicio es el artículo 4. Las dos penas son de tres a seis años y de ochenta a ciento veinte días-multa."
      },
      {
        "letter": "C",
        "text": "El artículo 4 es más leve que el 3."
      },
      {
        "letter": "D",
        "text": "Si el programa fue vendido pero todavía no se usó, ya es artículo 4."
      }
    ],
    "correct": "B",
    "whyCorrect": "El objeto del artículo 3 es el dato. El del artículo 4 es el sistema y sus servicios. La pena coincide, pero el tipo no. Fabricar o vender un programa específicamente diseñado para estos delitos, aunque aún no se haya atacado un sistema, es el artículo 10, con pena de uno a cuatro años y de treinta a noventa días-multa.",
    "whyWrong": {
      "A": "El acceso es el ingreso. La pena de uno a cuatro años no es la de estos atentados.",
      "C": "Las bandas de prisión y de multa son las mismas.",
      "D": "La venta de la herramienta es el artículo 10. La inutilización efectiva es el artículo 4."
    }
  },
  {
    "id": 39,
    "tema": "Delitos informáticos",
    "prompt": "El artículo 5 vigente, sobre proposiciones sexuales por medios tecnológicos:",
    "options": [
      {
        "letter": "A",
        "text": "Castiga cualquier saludo a un adolescente de dieciséis años."
      },
      {
        "letter": "B",
        "text": "Castiga contactar por internet u otro medio análogo a un menor de catorce años para pedir material pornográfico o para realizar actividades sexuales. La pena es de cuatro a ocho años e inhabilitación. Si la víctima tiene de catorce a menos de dieciocho años, hace falta engaño y la pena es de tres a seis años, con la misma inhabilitación."
      },
      {
        "letter": "C",
        "text": "Es el mismo delito que poseer pornografía infantil."
      },
      {
        "letter": "D",
        "text": "Solo tiene pena de multa."
      }
    ],
    "correct": "B",
    "whyCorrect": "El primer párrafo fija el menor de catorce años y la pena de cuatro a ocho años. El segundo exige engaño en el tramo de catorce a menos de dieciocho, con pena menor. La inhabilitación es la de los numerales 1, 2 y 4 del artículo 36 del Código Penal. Poseer o difundir el material es el artículo 183-A del Código Penal, modificado por esta ley, no el artículo 5.",
    "whyWrong": {
      "A": "Sin la finalidad sexual o pornográfica, y sin el engaño que ese tramo de edad exige, el saludo no es el tipo.",
      "C": "El 183-A tiene otra pena base, de seis a diez años, para el uso de personas de catorce a menos de dieciocho.",
      "D": "El artículo 5 no conmina días-multa. La pena es prisión más inhabilitación."
    }
  },
  {
    "id": 40,
    "tema": "Delitos informáticos",
    "prompt": "El tráfico ilegal de datos del artículo 6 y la interceptación del artículo 7 quedaron así:",
    "options": [
      {
        "letter": "A",
        "text": "Los dos siguen vigentes, con la misma pena."
      },
      {
        "letter": "B",
        "text": "El artículo 6 fue derogado por la Ley N.º 30171. La interceptación sigue: pena base de tres a seis años; de cinco a ocho si la información es secreta, reservada o confidencial según la Ley N.º 27806; de ocho a diez si compromete la defensa, la seguridad o la soberanía. Si el agente integra una organización criminal, la pena puede subir hasta un tercio sobre el máximo."
      },
      {
        "letter": "C",
        "text": "La interceptación incluye días-multa de treinta a noventa."
      },
      {
        "letter": "D",
        "text": "Leer una página web abierta al público es interceptación."
      }
    ],
    "correct": "B",
    "whyCorrect": "La nota del PDF deroga el artículo 6. El artículo 7 vigente describe transmisiones no públicas, incluidas las emisiones electromagnéticas que transporten los datos, y trae esos tres tramos más el incremento por organización criminal. No lleva días-multa.",
    "whyWrong": {
      "A": "Aplicar hoy el artículo 6 ignora la derogación.",
      "C": "Esa multa es del acceso y de los dispositivos, no de la interceptación.",
      "D": "El tipo exige transmisiones no públicas. Lo abierto al público no es ese supuesto."
    }
  },
  {
    "id": 41,
    "tema": "Delitos informáticos",
    "prompt": "El fraude informático y la suplantación de identidad se diferencian porque:",
    "options": [
      {
        "letter": "A",
        "text": "Los dos exigen provecho ilícito y los dos llevan días-multa."
      },
      {
        "letter": "B",
        "text": "El fraude procura un provecho ilícito en perjuicio de tercero, con pena de tres a ocho años y de sesenta a ciento veinte días-multa. Si afecta patrimonio del Estado destinado a fines asistenciales o programas de apoyo social, la pena es de cinco a diez años y de ochenta a ciento cuarenta días-multa. La suplantación exige perjuicio material o moral y se pena con tres a cinco años, sin días-multa."
      },
      {
        "letter": "C",
        "text": "La suplantación se consuma al crear un perfil falso, aunque nadie resulte perjudicado."
      },
      {
        "letter": "D",
        "text": "El fraude solo existe si el perjudicado es el Estado."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 8 es patrimonial: provecho, perjuicio y esos medios, incluida la clonación. El artículo 9 ocupa la identidad de una persona natural o jurídica y no se consuma sin perjuicio. Sus penas no coinciden.",
    "whyWrong": {
      "A": "La suplantación no exige el provecho ilícito del fraude ni lleva días-multa.",
      "C": "Sin perjuicio material o moral falta un elemento del artículo 9.",
      "D": "El Estado es el supuesto agravado. El tipo base habla de un tercero."
    }
  },
  {
    "id": 42,
    "tema": "Delitos informáticos",
    "prompt": "El abuso de mecanismos y dispositivos del artículo 10:",
    "options": [
      {
        "letter": "A",
        "text": "Prohíbe cualquier programa de administración de redes."
      },
      {
        "letter": "B",
        "text": "Castiga fabricar, desarrollar, vender, facilitar o obtener, de modo deliberado e ilegítimo, programas, dispositivos, contraseñas o códigos específicamente diseñados para cometer los delitos de esta ley, y también prestar un servicio con ese fin. Pena de uno a cuatro años y de treinta a noventa días-multa."
      },
      {
        "letter": "C",
        "text": "Tiene la misma pena del fraude agravado."
      },
      {
        "letter": "D",
        "text": "Solo castiga la venta, no la fabricación."
      }
    ],
    "correct": "B",
    "whyCorrect": "La pieza decisiva es que la herramienta esté específicamente diseñada para los delitos de esta ley. Un programa lícito de administración no entra por el solo hecho de existir. La pena es la misma banda del acceso ilícito.",
    "whyWrong": {
      "A": "El tipo no prohíbe las herramientas de seguridad ni de administración.",
      "C": "El fraude agravado llega a diez años. Aquí el máximo es cuatro.",
      "D": "El artículo también incluye fabricar, diseñar, desarrollar, distribuir, importar, obtener y prestar el servicio."
    }
  },
  {
    "id": 43,
    "tema": "Delitos informáticos",
    "prompt": "La exención de responsabilidad penal del artículo 12 cubre:",
    "options": [
      {
        "letter": "A",
        "text": "Cualquier delito de la ley, si el agente trabaja en informática."
      },
      {
        "letter": "B",
        "text": "Solo las conductas de los artículos 2, 3, 4 y 10, cuando el propósito es una prueba autorizada u otro procedimiento autorizado para proteger sistemas informáticos."
      },
      {
        "letter": "C",
        "text": "El fraude, si después se devuelve el dinero."
      },
      {
        "letter": "D",
        "text": "El contacto con un menor, si el agente dice que era una prueba de seguridad."
      }
    ],
    "correct": "B",
    "whyCorrect": "El artículo 12 fue incorporado por la Ley N.º 30171 y limita la exención a esos cuatro artículos y a una autorización real de protección. No es un perdón para todo el personal de sistemas.",
    "whyWrong": {
      "A": "Quedarían fuera, entre otros, la interceptación, el fraude, la suplantación y el artículo 5.",
      "C": "Devolver el dinero no está en el artículo 12, y el fraude no está en la lista.",
      "D": "El artículo 5 no está cubierto. Una prueba no autoriza el contacto sexual ni el pedido de material pornográfico."
    }
  },
  {
    "id": 44,
    "tema": "Delitos informáticos",
    "prompt": "El juez puede aumentar la prisión hasta en un tercio por encima del máximo cuando:",
    "options": [
      {
        "letter": "A",
        "text": "El agente confiesa."
      },
      {
        "letter": "B",
        "text": "Actúa en una organización criminal, abusa del acceso o del conocimiento que le da su cargo, busca un beneficio económico salvo que el delito ya prevea esa circunstancia, o el delito compromete fines asistenciales, la defensa, la seguridad y la soberanía nacionales."
      },
      {
        "letter": "C",
        "text": "La víctima es una empresa privada, en todo caso."
      },
      {
        "letter": "D",
        "text": "El hecho ocurre en día hábil."
      }
    ],
    "correct": "B",
    "whyCorrect": "Esos son los cuatro numerales del artículo 11. El numeral 3 evita agravar otra vez el fraude por el mismo provecho ilícito que el tipo ya exige. El aumento es sobre el máximo de la pena de prisión.",
    "whyWrong": {
      "A": "La confesión no es agravante de este artículo.",
      "C": "La calidad privada de la víctima no está en la lista.",
      "D": "El día no modifica la pena."
    }
  },
  {
    "id": 45,
    "tema": "Delitos informáticos",
    "prompt": "Para esta ley, según el Convenio de Budapest:",
    "options": [
      {
        "letter": "A",
        "text": "Sistema informático es solo una computadora conectada a internet, y dato informático es solo el dato personal."
      },
      {
        "letter": "B",
        "text": "Sistema informático incluye un dispositivo aislado o un conjunto de dispositivos cuya función sea el tratamiento automatizado de datos al ejecutar un programa. Dato informático es toda representación apta para ese tratamiento, incluidos los programas."
      },
      {
        "letter": "C",
        "text": "Esas definiciones están en la NTP-ISO/IEC 27001 y no en esta ley."
      },
      {
        "letter": "D",
        "text": "El dato informático excluye los programas."
      }
    ],
    "correct": "B",
    "whyCorrect": "La novena disposición complementaria final adopta el artículo 1 del Convenio sobre la Ciberdelincuencia, Budapest, 23 de noviembre de 2001. Por eso un equipo sin internet puede ser sistema, y un programa puede ser dato informático.",
    "whyWrong": {
      "A": "Ni la conexión a internet ni el carácter personal son elementos de esas definiciones.",
      "C": "La NTP remite el vocabulario a ISO/IEC 27000. Budapest está en esta ley penal.",
      "D": "El literal de datos informáticos incluye los programas diseñados para que el sistema ejecute una función."
    }
  },
  {
    "id": 46,
    "tema": "Delitos informáticos",
    "prompt": "El agente encubierto y la conservación de pornografía infantil por la policía se rigen así:",
    "options": [
      {
        "letter": "A",
        "text": "El agente lo autoriza la policía, solo si hay organización criminal. El material lo guarda cualquier comisaría y puede publicarlo."
      },
      {
        "letter": "B",
        "text": "El agente lo autoriza el fiscal, con prescindencia de que haya organización criminal, también para otros delitos cometidos mediante tecnologías de la información, conforme al artículo 341 del Código Procesal Penal. La policía solo conserva ese material con autorización y supervisión del Ministerio Público, para su función y en una base codificada."
      },
      {
        "letter": "C",
        "text": "Las dos figuras están prohibidas por el artículo 12."
      },
      {
        "letter": "D",
        "text": "El material lo conserva el Pe-CERT y el agente lo autoriza OSIPTEL."
      }
    ],
    "correct": "B",
    "whyCorrect": "Son la primera y la segunda disposiciones complementarias finales. La policía y el Ministerio Público establecen protocolos de esa base en treinta días. El Pe-CERT y OSIPTEL tienen otros roles: coordinación y multas a telecomunicaciones, no estas dos facultades.",
    "whyWrong": {
      "A": "Autoriza el fiscal, y el vínculo con la organización criminal no es requisito. Publicar el material contradice la finalidad exclusiva de la función y el tipo de pornografía infantil.",
      "C": "El artículo 12 exonera pruebas autorizadas de protección de sistemas. No regula estas técnicas.",
      "D": "Ni el Pe-CERT guarda ese material ni OSIPTEL autoriza al agente."
    }
  },
  {
    "id": 47,
    "tema": "Delitos informáticos",
    "prompt": "Si una empresa de telecomunicaciones no cumple la orden judicial de geolocalización o de intervención:",
    "options": [
      {
        "letter": "A",
        "text": "El juez le impone directamente la escala de la SBS."
      },
      {
        "letter": "B",
        "text": "El concesionario debe facilitar la diligencia en un plazo máximo de treinta días hábiles, de manera continua. Si omite el deber del numeral 4 del artículo 230 del Código Procesal Penal, el juez avisa a OSIPTEL en setenta y dos horas para que aplique la multa. Al renovar equipos o software debe mantener la compatibilidad con el sistema de intervención de la Policía Nacional."
      },
      {
        "letter": "C",
        "text": "Puede negar la compatibilidad cuando renueva el software."
      },
      {
        "letter": "D",
        "text": "El plazo de la empresa es de setenta y dos horas y el del juez es de treinta días calendario."
      }
    ],
    "correct": "B",
    "whyCorrect": "El numeral 4 del artículo 230, modificado por esta ley, fija los treinta días hábiles, el servicio continuo y la compatibilidad. La undécima disposición complementaria final, ya modificada en 2014, encarga la multa a OSIPTEL y da al juez setenta y dos horas para comunicarle la omisión. El secreto bancario es otra vía: artículo 235 y multa de la SBS.",
    "whyWrong": {
      "A": "La SBS multa el incumplimiento del levantamiento del secreto bancario, no la geolocalización.",
      "C": "La renovación no libera de la compatibilidad con el sistema de la policía.",
      "D": "Invierte los dos plazos."
    }
  },
  {
    "id": 48,
    "tema": "Delitos informáticos",
    "prompt": "La pornografía infantil del artículo 183-A del Código Penal, modificado por esta ley, tiene estas penas:",
    "options": [
      {
        "letter": "A",
        "text": "De cuatro a ocho años en todos los casos."
      },
      {
        "letter": "B",
        "text": "De seis a diez años y de ciento veinte a trescientos sesenta y cinco días-multa si se utiliza a personas de catorce y menos de dieciocho. De diez a doce años si el menor tiene menos de catorce o el material se difunde por tecnologías de la información. De doce a quince si la víctima está en las condiciones del último párrafo del artículo 173 o el agente integra una organización dedicada a pornografía infantil."
      },
      {
        "letter": "C",
        "text": "Solo prestación de servicios a la comunidad."
      },
      {
        "letter": "D",
        "text": "La misma pena del artículo 5, porque son el mismo delito."
      }
    ],
    "correct": "B",
    "whyCorrect": "Esos son los tres tramos del artículo 183-A. El artículo 5 es el contacto para obtener material o para una actividad sexual. El 183-A es poseer, fabricar, distribuir, publicar o exhibir el material, entre otras conductas, por cualquier medio.",
    "whyWrong": {
      "A": "Cuatro a ocho años es el primer párrafo del artículo 5, no la pena base del 183-A.",
      "C": "La prestación de servicios está en la discriminación del artículo 323, no aquí.",
      "D": "Son tipos distintos, con penas distintas."
    }
  },
  {
    "id": 49,
    "tema": "Delitos informáticos",
    "prompt": "Una prueba de intrusión contratada y autorizada, que vulnera medidas de seguridad para proteger el sistema:",
    "options": [
      {
        "letter": "A",
        "text": "Es siempre acceso ilícito y abuso de dispositivos, sin excepción."
      },
      {
        "letter": "B",
        "text": "Puede quedar cubierta por la exención del artículo 12 si la conducta es de los artículos 2, 3, 4 o 10 y el propósito es esa prueba autorizada."
      },
      {
        "letter": "C",
        "text": "Es fraude informático, porque toda prueba procura un provecho."
      },
      {
        "letter": "D",
        "text": "Es delito del artículo 6."
      }
    ],
    "correct": "B",
    "whyCorrect": "La ley incorporó esa exención precisamente para no criminalizar la defensa autorizada. Sin autorización, el mismo ingreso puede ser acceso ilícito. El fraude exige provecho ilícito en perjuicio de tercero, que una prueba contratada no tiene. El artículo 6 está derogado.",
    "whyWrong": {
      "A": "Ignora el artículo 12.",
      "C": "La prueba autorizada no es el provecho ilícito del artículo 8.",
      "D": "Ese tipo no está vigente, y además no describía una prueba de intrusión."
    }
  },
  {
    "id": 50,
    "tema": "Delitos informáticos",
    "prompt": "Señale la combinación correcta entre las cuatro normas del curso:",
    "options": [
      {
        "letter": "A",
        "text": "La NTP-ISO/IEC 27001 impone penas de prisión; la Ley N.º 30096 certifica el sistema de gestión; el Decreto Legislativo N.º 1412 deroga el reglamento de datos personales."
      },
      {
        "letter": "B",
        "text": "La NTP es recomendable y no excluye los capítulos 4 a 10. El Decreto Legislativo N.º 1412 remite el tratamiento de datos personales a su ley y reglamento. El reglamento de 2024 fija plazos de derechos y de incidentes. La Ley N.º 30096 castiga el acceso ilícito, el fraude y la interceptación, y exonera solo las pruebas autorizadas de los artículos 2, 3, 4 y 10."
      },
      {
        "letter": "C",
        "text": "Las cuatro normas definen «sistema informático» según Budapest y «día» como día hábil."
      },
      {
        "letter": "D",
        "text": "El Oficial de Datos Personales lo crea la Ley N.º 30096, y el DNIe lo emite la SEGDI."
      }
    ],
    "correct": "B",
    "whyCorrect": "Cada norma conserva su plano: la NTP gestiona la seguridad, la Ley de Gobierno Digital organiza el Estado digital y remite la protección de datos a su ley, el reglamento de 2024 detalla consentimiento, derechos, incidentes y sanciones administrativas, y la Ley N.º 30096 es la ley penal. Cruzarlas sin confundir sus efectos es lo que un examen de las cuatro suele pedir.",
    "whyWrong": {
      "A": "Invierte los papeles. La NTP no condena, la ley penal no certifica y el Decreto Legislativo N.º 1412 no deroga el reglamento de 2013. Eso lo hizo el Decreto Supremo N.º 016-2024-JUS.",
      "C": "Budapest está en la Ley N.º 30096. Los días hábiles son la definición del reglamento de datos personales. La NTP y la Ley de Gobierno Digital no usan esa definición para todos sus plazos.",
      "D": "El Oficial está en el reglamento de datos personales. El DNIe lo emite el RENIEC, no la SEGDI."
    }
  }
]
