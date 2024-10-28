 
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ucwords, capitalize } from '~/_app/helpers/text';

interface TranslatorParams {
  $t: any;
  key: string;
  data: any;
}

export const trUc = ({ $t, key, data = {} }: TranslatorParams) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? $t(`${item}`, data) : ` ${$t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText
      ? `${ucwords(text)} ${data?.extraText}`
      : ucwords(text);
  } catch (err) {
    return err?.toString();
  }
};

export const trUp = ({ $t, key, data = {} }: TranslatorParams) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? $t(`${item}`, data) : ` ${$t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText ? `${text.toUpperCase()} ${data?.extraText}` : text.toUpperCase();
  } catch (err) {
    return err?.toString();
  }
};

export const trLw = ({ $t, key, data = {} }: TranslatorParams) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
      text += index === 0 ? $t(`${item}`, data) : ` ${$t(`${item}`, data)}`;
      return null;
    });
    return data?.extraText ? `${text.toLowerCase()} ${data?.extraText}` : text.toLowerCase();
  } catch (err) {
    return err?.toString();
  }
};

export const trFirst = ({ $t, key, data = {} }: TranslatorParams) => {
  try {
    const keySplit = key.split(",");
    let text = "";
    keySplit.map((item: any, index: number) => {
        text += index === 0 ? $t(`${item}`, data) : ` ${$t(`${item}`, data)}`;
        return null;
    });
    return data?.extraText ? `${capitalize(text)} ${data?.extraText}` : capitalize(text);
  } catch (err) {
    return err?.toString();
  }
};
