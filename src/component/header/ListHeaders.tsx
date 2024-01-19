import {Typography} from "@mui/material";
import React from "react";
import {SourceName, Sources} from "../../config/sources";

export const introductionHeader = (
    <Typography variant='h3' paddingBottom='20px'>Multiagentensysteme in der Logistik</Typography>
);

export const generalStepsHeader = (
    <Typography variant='h4'
                paddingBottom='20px'>{`Allgemeines Vorgehen (${Sources.get(SourceName.JUNG)?.title})`}</Typography>
);

export const baseSetupHeader = (
    <Typography variant='h4' paddingBottom='20px'>Ausgangsszenario</Typography>
);

export const ekQuestionHeader = (
    <Typography variant='h4'
                paddingBottom='20px'>{`Kernfragen zur Realisierung (${Sources.get(SourceName.EKR)?.title})`}</Typography>
);

export const basicCategoryHeader = (
    <Typography variant='h4'
                paddingBottom='20px'>{`Automated vs. Autonomous (${Sources.get(SourceName.AGN_AGV)?.title})`}</Typography>
);

export const agvTypeHeader = (
    <Typography variant='h4' paddingBottom='20px'>{`AGV Typen (${Sources.get(SourceName.AGN_AGV)?.title})`}</Typography>
);

export const navigationSystemsHeader = (
    <Typography variant='h4'
                paddingBottom='20px'>{`Navigationssysteme (${Sources.get(SourceName.AGN_NAV)?.title})`}</Typography>
);

export const agvSelectHeader = (
    <Typography variant='h4' paddingBottom='20px'>Auswahl des AGV</Typography>
);

export const introductionControllingHeader = (
    <Typography variant='h4' paddingBottom='20px'>Controlling</Typography>
);

export const simulationHeader = (
    <Typography variant='h4' paddingBottom='20px'>Simulation</Typography>
);

export const sourcesHeader = (
    <Typography variant='h4' paddingBottom='20px'>Quellen</Typography>
);