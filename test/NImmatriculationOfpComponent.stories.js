/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import NImmatriculationOfp from "./NImmatriculationOfpComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("NImmatriculationOfp", module)
  .add("default", () => <NImmatriculationOfp {...myProps} {...actions} />)
  .add("pinned", () => (
    <NImmatriculationOfp {...myProps} pinned={true} {...actions} />
  ))
  .add("archived", () => (
    <NImmatriculationOfp {...myProps} archived={true} {...actions} />
  ));
