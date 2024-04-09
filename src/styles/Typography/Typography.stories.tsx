// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Blockquote, UnorderedList, ListItem, OrderedList } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía',
  decorators: [withA11y]
};

// export const Headings = (): JSX.Element => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth < 592);
//     }
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <h1>H1 - Nunito Bold 37px</h1>
//       <h2>H2 - Nunito Semibold 28px</h2>
//       <h3>H3 - Nunito Semibold 21px</h3>
//       <h4>H4 - Nunito {isMobile ? 'Semibold' : 'Bold'} 19px</h4>
//       <h5>H5 - Nunito Semibold 17px</h5>
//       <h6>H6 - Open Sans Bold 16px</h6>

//       <hr />

//       <Typography as="h1" weight="font-weight-bold">
//         H1 - Nunito Bold 40px
//       </Typography>
//       <Typography as="h2">H2 - Nunito Semibold 36px</Typography>
//       <Typography as="h3">H3 - Nunito Semibold 32px</Typography>
//       <Typography as="h4">H4 - Nunito 28px</Typography>
//       <Typography as="h5">H5 - Nunito Semibold 24px</Typography>
//       <Typography as="h6">H6 - Open Sans Bold ?</Typography>
//     </>
//   );
// };

// Headings.story = { name: 'Títulos' };

export const HeadingsW = (): JSX.Element => {
  return (
    <>
      <Typography as="h1">Este es un texto de encabezado</Typography>
      <Typography as="h1" weight="font-weight-semibold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h1" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h2" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h2">Este es un texto de encabezado</Typography>
      <Typography as="h2" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h3" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h3">Este es un texto de encabezado</Typography>
      <Typography as="h3" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h4" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h4">Este es un texto de encabezado</Typography>
      <Typography as="h4" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h5">Este es un texto de encabezado</Typography>
      <Typography as="h5" weight="font-weight-semibold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h5" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h6" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h6">Este es un texto de encabezado</Typography>
      <Typography as="h6" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>
    </>
  );
};

HeadingsW.story = { name: 'Títulos' };

// export const SubTitle = (): JSX.Element => {
//   return (
//     <>
//       <p className="lead">Open Sans Regular 19px</p>

//       <hr />

//       <Typography as="p" className="lead" weight="font-weight-bold">
//         Open Sans Regular 19px
//       </Typography>
//       <Typography as="p" className="lead" weight="font-weight-semibold">
//         Open Sans Regular 19px
//       </Typography>
//       <Typography as="p" className="lead" weight="font-weight-normal">
//         Open Sans Regular 19px
//       </Typography>
//     </>
//   );
// };

// SubTitle.story = { name: 'Subtítulo' };

// export const Texts = (): JSX.Element => {
//   return (
//     <>
//       <p>Open Sans Regular 16px</p>
//       <small>Open Sans Regular 13px</small>

//       <hr></hr>

//       <Typography as="p" weight="font-weight-bold">
//         Open Sans Regular 16px
//       </Typography>
//       <Typography as="p" weight="font-weight-semibold">
//         Open Sans Regular 16px
//       </Typography>
//       <Typography as="p" weight="font-weight-normal">
//         Open Sans Regular 16px
//       </Typography>

//       <hr></hr>

//       <Typography as="small" weight="font-weight-bold">
//         Open Sans Regular 13px
//       </Typography>

//       <br />

//       <Typography as="small" weight="font-weight-semibold">
//         Open Sans Regular 13px
//       </Typography>

//       <br />

//       <Typography as="small" weight="font-weight-normal">
//         Open Sans Regular 13px
//       </Typography>
//     </>
//   );
// };

// Texts.story = { name: 'Párrafo' };

// export const Epigraphs = (): JSX.Element => {
//   return (
//     <>
//       <p className="text-xs">Open Sans Regular 11.7px</p>

//       <hr />

//       <Typography as="p" className="text-xs" weight="font-weight-bold">
//         Open Sans Regular 11.7px
//       </Typography>

//       <Typography as="p" className="text-xs" weight="font-weight-semibold">
//         Open Sans Regular 11.7px
//       </Typography>

//       <Typography as="p" className="text-xs" weight="font-weight-normal">
//         Open Sans Regular 11.7px
//       </Typography>
//     </>
//   );
// };

// Epigraphs.story = {
//   name: 'Epígrafe'
// };

export const Transformations = (): JSX.Element => {
  return (
    <>
      <Typography as="p">
        Nuestro sistema de <Typography as="strong">estándares</Typography> brinda un{' '}
        <Typography as="em">conjunto de herramientas</Typography> y componentes colaborativos
        <br />y <Typography as="small">accesibles</Typography> que define procesos para que los equipos internos y
        externos puedan trabajar
        <br />
        alineadamente. De esta forma, ayudamos a crear <Typography as="mark">servicios</Typography> consistent
        <Typography as="sup">es</Typography> para mejorar
        <br /> la experiencia digit<Typography as="sub">al</Typography> de vecinos y vecina
        <Typography as="kbd">s</Typography>.
      </Typography>
    </>
  );
};
Transformations.story = {
  name: 'Transformaciones'
};

export const Quote = (): JSX.Element => {
  return (
    <div className="storybook__container-bloquote">
      <Blockquote>
        <Typography as="p">
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </Typography>
      </Blockquote>
      <br />
      <Blockquote>
        <Typography as="p">
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </Typography>
        <Typography as="small">Nombre del autor de la cita</Typography>
      </Blockquote>
    </div>
  );
};
Quote.story = {
  name: 'Citas'
};

export const List = (): JSX.Element => {
  return (
    <>
      <UnorderedList>
        <ListItem>Esto es el texto de una lista</ListItem>
        <ListItem>Esto es el texto de una lista</ListItem>
        <ListItem>Esto es el texto de una lista</ListItem>
      </UnorderedList>
    </>
  );
};
List.story = {
  name: 'Listas'
};

export const OrderList = (): JSX.Element => {
  return (
    <>
      <OrderedList>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
      </OrderedList>
    </>
  );
};

OrderList.story = {
  name: 'Lista ordenada'
};
