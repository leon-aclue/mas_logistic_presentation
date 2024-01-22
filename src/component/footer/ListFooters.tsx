import {Typography} from "@mui/material";
import React from "react";
import {SourceName, Sources} from "../../config/sources";

export const generalStepsFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.JUNG)?.text}</Typography>
);

export const ekQuestionFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.EKR)?.text}</Typography>
);

export const basicCategoryFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.AGN_AGV)?.text}</Typography>
);

export const agvTypeFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.AGN_AGV)?.text}</Typography>
);

export const navigationSystemsFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.AGN_NAV)?.text}</Typography>
);

export const controllingFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.CONTR)?.text}</Typography>
);

export const rosControllingFooter = (
    <Typography variant='subtitle2' paddingTop='20px'>{Sources.get(SourceName.AGV_R)?.text}</Typography>
);