/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Pokemon } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    pokemon?: Pokemon;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
