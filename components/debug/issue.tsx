import { FC } from 'react';
import {
  getNameFromRecommendation,
  getNameFromSeverity,
  Issue as IssueInfo,
  IssueFix,
  IssueSeverity
} from 'libs/shared/debugging';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  withStyles
} from '@material-ui/core';
import { ChevronDownIcon } from '@heroicons/react/outline';
import useI18n from 'libs/web/hooks/use-i18n';
import { errorToString, isProbablyError } from 'libs/shared/util';

// ✅ Tambahkan typing agar JSX mengenali komponen dengan benar
const Accordion: React.ComponentType<any> = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto 0',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary: React.ComponentType<any> = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottomRightRadius: '0'
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    }
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails: React.ComponentType<any> = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
