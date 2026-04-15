import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Terminos y Condiciones | STREAMPLAY",
  description:
    "Terminos y condiciones generales de uso, compra y navegacion de Streamplay Peru.",
};

const sections = [
  {
    title: "1. Aceptacion",
    paragraphs: [
      "El acceso al sitio web y el uso de los servicios ofrecidos por STREAMPLAY implica la aceptacion de estos terminos y condiciones por parte de cada usuario o cliente.",
      "Si una persona no esta de acuerdo con estas disposiciones, debera abstenerse de utilizar el sitio, realizar pedidos o contratar servicios por este canal.",
    ],
  },
  {
    title: "2. Uso del sitio",
    paragraphs: [
      "El sitio debe utilizarse de forma licita, responsable y conforme a su finalidad comercial. No esta permitido emplearlo para actividades fraudulentas, interferencias tecnicas o suplantaciones de identidad.",
      "STREAMPLAY puede actualizar contenidos, precios, disponibilidad, imagenes referenciales y textos comerciales sin necesidad de aviso previo cuando resulte necesario para la operacion del negocio.",
    ],
  },
  {
    title: "3. Pedidos y pagos",
    paragraphs: [
      "Todo pedido esta sujeto a confirmacion de disponibilidad, validacion del pago y datos de entrega suficientemente claros. STREAMPLAY podra contactar al cliente para verificar informacion antes de cerrar la orden.",
      "Los precios publicados o comunicados pueden variar segun producto, fecha, cobertura, horario, empaque o requerimientos especiales. El pedido se considera aceptado una vez confirmado por el negocio.",
    ],
  },
  {
    title: "4. Propiedad intelectual",
    paragraphs: [
      "El contenido del sitio, incluyendo textos, disenos, logotipos, composiciones visuales, ilustraciones y elementos distintivos, pertenece a STREAMPLAY o se utiliza con autorizacion correspondiente.",
      "No se permite copiar, reproducir, adaptar o explotar dichos contenidos con fines comerciales sin autorizacion previa y expresa del titular.",
    ],
  },
  {
    title: "5. Limitacion de responsabilidad",
    paragraphs: [
      "STREAMPLAY realiza esfuerzos razonables para mantener informacion correcta y servicios operativos, pero no garantiza ausencia absoluta de errores tipograficos, interrupciones, demoras o limitaciones tecnicas.",
      "La responsabilidad del negocio se limitara a lo permitido por la normativa aplicable y al alcance concreto del producto o servicio efectivamente contratado por el cliente.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Documento legal"
      title="Terminos y Condiciones"
      intro="Estos terminos regulan el acceso, navegacion y contratacion de productos o servicios ofrecidos por Streamplay Peru a traves de su pagina web y canales asociados."
      sections={sections}
    />
  );
}
