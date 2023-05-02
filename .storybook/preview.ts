import { addDecorator, addParameters } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
// import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import '../src/scss/obelisco.scss';
import './preview.scss';

addDecorator(withHTML);
// .storybook/preview.js

const headers = [
  'Comenzar|Inicio',
  'Componentes|Accesos',
  'Componentes|Alerta',
  'Componentes|Alerta/Listas',
  'Componentes|Audio',
  'Componentes|Barra de progreso',
  'Componentes|Botones/Estados',
  'Componentes|Botones',
  'Componentes|Colapsable',
  'Componentes|Desplegables',
  'Componentes|Enlace',
  'Componentes|Enlace/Lista',
  'Componentes|Etiqueta',
  'Componentes|Galería',
  'Componentes|Galería/Grillas',
  'Componentes|Mensajes de estado',
  'Componentes|Migas de pan',
  'Componentes|Modal',
  'Componentes|Navegación y pestañas/Navegación horizontal',
  'Componentes|Navegación y pestañas/Navegación vertical',
  'Componentes|Navegación y pestañas/Pestañas simple',
  'Componentes|Navegación y pestañas/Pestañas con contenedor',
  'Componentes|Opciones',
  'Componentes|Paginado/Numerado',
  'Componentes|Paginado',
  'Componentes|Panel',
  'Componentes|Panel/Panel horizontal/Con imagen',
  'Componentes|Panel/Panel horizontal/Con video',
  'Componentes|Panel/Panel vertical/Con imagen',
  'Componentes|Panel/Panel vertical/Con video',
  'Componentes|Pasos de un formulario',
  'Componentes|Spinner',
  'Componentes|Tarjetas/Tipos',
  'Componentes|Tarjetas/Lista ancho completo',
  'Componentes|Tarjetas/Lista ancho por tarjeta',
  'Componentes|Tooltip',
  'Estilos|Grilla',
  'Estilos|Tipografía',
  'Formulario|Archivo',
  'Formulario|Buscador',
  'Formulario|Checkbox',
  'Formulario|Con fondo',
  'Formulario|Lista de selección',
  'Formulario|Radio',
  'Formulario|Texto',
  'Formulario|Validación',
  'Plantillas|Plantilla',
  'Organismos|Botones',
  'Organismos|Accesos',
  'Organismos|Footer (pie de página)',
  'Organismos|Header (encabezado)/Con buscador',
  'Organismos|Header (encabezado)/Sin buscador',
  'Organismos|Header (encabezado)/Mobile',
  'Organismos|Tablas',
  'Organismos|Tablas/Con acciones',
  'Versión|Releases'
];

addParameters({
  options: {
    storySort: (a: Array<any>, b: Array<any>) => {
      const aHeader = a[1].kind;
      const bHeader = b[1].kind;

      if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex((h) => h === aHeader);
        const bHeaderIndex = headers.findIndex((h) => h === bHeader);
        if (a[0] === 'componentes-botones--button-types') return aHeaderIndex - bHeaderIndex - 1;
        return aHeaderIndex - bHeaderIndex;
      }

      return 0;
    },
    showPanel: true
  }
});

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
