import colorModule from './color.module.scss';

type COLOR_SCHEME =
  | 'primary'
  | 'secondary'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'gray'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

type COLOR_MAP = {
  LIGHT: {
    [key: string]: any;
  };
  DARK: {
    [key: string]: any;
  };
  SOLID: {
    WHITE: string;
    BLACK: string;
  };
};

const COLOR: COLOR_MAP = {
  LIGHT: {
    PRIMARY: {
      '000': colorModule.light_primary000,
      '100': colorModule.light_primary100,
      '200': colorModule.light_primary200,
      '300': colorModule.light_primary300,
      '400': colorModule.light_primary400,
      '500': colorModule.light_primary500,
      '600': colorModule.light_primary600,
      '700': colorModule.light_primary700,
    },
    SECONDARY: {
      '000': colorModule.light_secondary000,
      '100': colorModule.light_secondary100,
      '200': colorModule.light_secondary200,
      '300': colorModule.light_secondary300,
      '400': colorModule.light_secondary400,
      '500': colorModule.light_secondary500,
      '600': colorModule.light_secondary600,
      '700': colorModule.light_secondary700,
    },
    RED: {
      '000': colorModule.light_red000,
      '100': colorModule.light_red100,
      '200': colorModule.light_red200,
      '300': colorModule.light_red300,
      '400': colorModule.light_red400,
      '500': colorModule.light_red500,
      '600': colorModule.light_red600,
      '700': colorModule.light_red700,
    },
    GREEN: {
      '000': colorModule.light_green000,
      '100': colorModule.light_green100,
      '200': colorModule.light_green200,
      '300': colorModule.light_green300,
      '400': colorModule.light_green400,
      '500': colorModule.light_green500,
      '600': colorModule.light_green600,
      '700': colorModule.light_green700,
    },
    BLUE: {
      '000': colorModule.light_blue000,
      '100': colorModule.light_blue100,
      '200': colorModule.light_blue200,
      '300': colorModule.light_blue300,
      '400': colorModule.light_blue400,
      '500': colorModule.light_blue500,
      '600': colorModule.light_blue600,
      '700': colorModule.light_blue700,
    },
    PURPLE: {
      '000': colorModule.light_purple000,
      '100': colorModule.light_purple100,
      '200': colorModule.light_purple200,
      '300': colorModule.light_purple300,
      '400': colorModule.light_purple400,
      '500': colorModule.light_purple500,
      '600': colorModule.light_purple600,
      '700': colorModule.light_purple700,
    },
    GRAY: {
      '000': colorModule.light_gray000,
      '100': colorModule.light_gray100,
      '200': colorModule.light_gray200,
      '300': colorModule.light_gray300,
      '400': colorModule.light_gray400,
      '500': colorModule.light_gray500,
      '600': colorModule.light_gray600,
      '700': colorModule.light_gray700,
    },
    SUCCESS: colorModule.light_success,
    INFO: colorModule.light_info,
    WARNING: colorModule.light_warning,
    DANGER: colorModule.light_danger,
    BACKGROUND: colorModule.light_background,
    SHADOW: colorModule.light_shadow,
    TEXT: colorModule.light_text,
  },
  DARK: {
    PRIMARY: {
      '000': colorModule.dark_primary000,
      '100': colorModule.dark_primary100,
      '200': colorModule.dark_primary200,
      '300': colorModule.dark_primary300,
      '400': colorModule.dark_primary400,
      '500': colorModule.dark_primary500,
      '600': colorModule.dark_primary600,
      '700': colorModule.dark_primary700,
    },
    SECONDARY: {
      '000': colorModule.dark_secondary000,
      '100': colorModule.dark_secondary100,
      '200': colorModule.dark_secondary200,
      '300': colorModule.dark_secondary300,
      '400': colorModule.dark_secondary400,
      '500': colorModule.dark_secondary500,
      '600': colorModule.dark_secondary600,
      '700': colorModule.dark_secondary700,
    },
    RED: {
      '000': colorModule.dark_red000,
      '100': colorModule.dark_red100,
      '200': colorModule.dark_red200,
      '300': colorModule.dark_red300,
      '400': colorModule.dark_red400,
      '500': colorModule.dark_red500,
      '600': colorModule.dark_red600,
      '700': colorModule.dark_red700,
    },
    GREEN: {
      '000': colorModule.dark_green000,
      '100': colorModule.dark_green100,
      '200': colorModule.dark_green200,
      '300': colorModule.dark_green300,
      '400': colorModule.dark_green400,
      '500': colorModule.dark_green500,
      '600': colorModule.dark_green600,
      '700': colorModule.dark_green700,
    },
    BLUE: {
      '000': colorModule.dark_blue000,
      '100': colorModule.dark_blue100,
      '200': colorModule.dark_blue200,
      '300': colorModule.dark_blue300,
      '400': colorModule.dark_blue400,
      '500': colorModule.dark_blue500,
      '600': colorModule.dark_blue600,
      '700': colorModule.dark_blue700,
    },
    purple: {
      '000': colorModule.dark_purple000,
      '100': colorModule.dark_purple100,
      '200': colorModule.dark_purple200,
      '300': colorModule.dark_purple300,
      '400': colorModule.dark_purple400,
      '500': colorModule.dark_purple500,
      '600': colorModule.dark_purple600,
      '700': colorModule.dark_purple700,
    },
    GRAY: {
      '000': colorModule.dark_gray000,
      '100': colorModule.dark_gray100,
      '200': colorModule.dark_gray200,
      '300': colorModule.dark_gray300,
      '400': colorModule.dark_gray400,
      '500': colorModule.dark_gray500,
      '600': colorModule.dark_gray600,
      '700': colorModule.dark_gray700,
    },
    SUCCESS: colorModule.dark_success,
    INFO: colorModule.dark_info,
    WARNING: colorModule.dark_warning,
    DANGER: colorModule.dark_danger,
    BACKGROUND: colorModule.dark_background,
    SHADOW: colorModule.dark_shadow,
    TEXT: colorModule.dark_text,
  },
  SOLID: {
    WHITE: colorModule.white,
    BLACK: colorModule.black,
  },
};

export type { COLOR_MAP, COLOR_SCHEME };
export default COLOR;
