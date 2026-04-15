import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Condiciones del Servicio | STREAMPLAY",
  description:
    "Condiciones comerciales y operativas del servicio de Streamplay Peru para pedidos, entregas y atencion.",
};

const sections = [
  {
    title: "1. Cobertura y entrega",
    paragraphs: [
      "Las entregas se realizan segun cobertura geografica, disponibilidad horaria y capacidad operativa del negocio o de sus aliados logisticos. Algunas zonas pueden requerir coordinacion previa o cargos adicionales.",
      "El cliente debe proporcionar direccion completa, referencias utiles y telefono de contacto para facilitar la entrega. STREAMPLAY no responde por demoras atribuibles a datos incompletos o incorrectos.",
    ],
  },
  {
    title: "2. Sustituciones y disponibilidad",
    paragraphs: [
      "Las flores y follajes son productos de naturaleza perecible y sujetos a disponibilidad. Si algun insumo no esta disponible, STREAMPLAY podra realizar sustituciones razonables manteniendo estilo, valor y armonia general del arreglo.",
      "Cuando la sustitucion pueda alterar sustancialmente el pedido, el negocio procurara coordinar previamente con el cliente por el canal de contacto disponible.",
    ],
  },
  {
    title: "3. Reprogramaciones y cancelaciones",
    paragraphs: [
      "Las solicitudes de cambio o cancelacion deben realizarse con la mayor anticipacion posible y estan sujetas al estado de preparacion del pedido, compra de insumos, personal asignado y ruta de entrega.",
      "Una vez iniciado el armado floral o salida a reparto, STREAMPLAY podra aplicar restricciones, costos administrativos o imposibilidad de cancelacion, segun corresponda al caso concreto.",
    ],
  },
  {
    title: "4. Producto perecible y atencion posterior",
    paragraphs: [
      "Por la naturaleza de los arreglos florales, el cliente debe revisar el pedido al momento de su recepcion y reportar cualquier incidencia dentro de un plazo razonable. La percepcion natural de color, apertura o textura puede variar segun la flor y la temporada.",
      "STREAMPLAY evaluara cada caso de manera individual y podra ofrecer solucion comercial razonable cuando exista incumplimiento atribuible al negocio.",
    ],
  },
  {
    title: "5. Comunicacion y soporte",
    paragraphs: [
      "Todas las coordinaciones vinculadas con pedidos, entregas, incidencias o soporte pueden realizarse por telefono, correo o el canal de contacto que STREAMPLAY habilite para cada caso.",
      "El cliente se compromete a brindar informacion veraz y actualizada para que el servicio pueda prestarse de forma adecuada y dentro de los tiempos previstos.",
    ],
  },
];

export default function ServiceConditionsPage() {
  return (
    <LegalPage
      eyebrow="Documento legal"
      title="Condiciones del Servicio"
      intro="Estas condiciones describen las reglas comerciales y operativas aplicables a pedidos, preparacion, disponibilidad, entrega, sustituciones y soporte de los servicios brindados por Streamplay Peru."
      sections={sections}
    />
  );
}
