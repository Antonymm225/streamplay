import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Politica de Privacidad | STREAMPLAY",
  description:
    "Politica de privacidad de Streamplay Peru para el tratamiento de datos personales y comerciales.",
};

const sections = [
  {
    title: "1. Datos que recopilamos",
    paragraphs: [
      "STREAMPLAY puede recopilar datos personales cuando una persona realiza un pedido, solicita informacion, completa formularios o se comunica con el negocio por cualquier canal habilitado.",
      "Entre los datos que pueden solicitarse estan nombre, telefono, correo electronico, direccion de entrega, datos de facturacion, referencias para la entrega y cualquier informacion adicional necesaria para atender el pedido.",
    ],
  },
  {
    title: "2. Finalidad del tratamiento",
    paragraphs: [
      "Los datos se utilizan para procesar pedidos, coordinar entregas, emitir comprobantes, responder consultas, mejorar la atencion comercial y mantener medidas basicas de seguridad y control interno.",
      "Tambien pueden utilizarse para confirmar pagos, validar pedidos, atender incidencias y remitir comunicaciones relacionadas con el servicio solicitado por el cliente.",
    ],
  },
  {
    title: "3. Conservacion y proteccion",
    paragraphs: [
      "STREAMPLAY adopta medidas razonables para proteger la informacion personal frente a accesos no autorizados, uso indebido, perdida o alteracion, dentro de las capacidades tecnicas y operativas del negocio.",
      "La informacion se conserva por el tiempo necesario para cumplir finalidades comerciales, contables, tributarias, de soporte y cualquier otra obligacion legal aplicable.",
    ],
  },
  {
    title: "4. Comparticion de datos",
    paragraphs: [
      "Los datos solo podran compartirse con proveedores o terceros estrictamente necesarios para la operacion del servicio, por ejemplo pasarelas de pago, operadores logistico-comerciales o herramientas de mensajeria y soporte.",
      "STREAMPLAY no comercializa datos personales y limita el acceso a la informacion a quienes la necesiten para cumplir funciones vinculadas al pedido o a obligaciones legales.",
    ],
  },
  {
    title: "5. Derechos del usuario",
    paragraphs: [
      "La persona titular de los datos puede solicitar actualizacion, rectificacion o supresion de su informacion, asi como consultar el alcance del tratamiento realizado por STREAMPLAY.",
      "Para cualquier solicitud vinculada con privacidad o datos personales, el usuario puede escribir a hola@streamplay.flor o comunicarse al +51961845278.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Documento legal"
      title="Politica de Privacidad"
      intro="Esta politica describe como Streamplay Peru recopila, usa, protege y conserva la informacion personal compartida por clientes, visitantes o personas que interactuan con el negocio."
      sections={sections}
    />
  );
}
