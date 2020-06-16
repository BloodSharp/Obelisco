// Base
import React from "react";
import "../../scss/obelisco.scss";
import "./Button.stories.scss";

// Addons
import { withA11y } from "@storybook/addon-a11y";
import { withXD } from "storybook-addon-xd-designs";

// Components
import { types, sizes } from "../utils";
import { Button } from "./Button";
import * as notes from "./Button.md";

// Config
export default {
  title: "Componentes/Botón",
  component: Button,
  decorators: [withA11y, withXD],
  parameters: {
    notes,
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES"
    }
  }
};

export const Colores = (): JSX.Element[] => {
  return types.map(type => (
    <Button key={type} type={type}>
      {type}
    </Button>
  ));
};

export const Tamanos = (): JSX.Element[] => {
  return sizes.map(size => (
    <Button key={size} type="secondary" size={size}>
      {size}
    </Button>
  ));
};
Tamanos.story = {
  name: "Tamaños"
};

export const Deshabilitado = (): JSX.Element => {
  return (
    <Button type="secondary" disabled={true}>
      Deshabilitado
    </Button>
  );
};

export const Expandible = (): JSX.Element => {
  return (
    <div className="btn-block-wrapper">
      <Button type="secondary" block={true}>
        Expandible
      </Button>
    </div>
  );
};
