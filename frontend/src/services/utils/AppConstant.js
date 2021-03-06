export default {
  ELEMENT_MAX_PIXELS: 1533917,
  KEY_CODE: {
    COMMA: 188,
    SEMICOLON: 186,
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    TAB: 9,
    BACKSPACE: 8,
    DELETE: 46
  },
  MEDIA: {
    'xs': '(max-width: 599px)',
    'gt-xs': '(min-width: 600px)',
    'sm': '(min-width: 600px) and (max-width: 959px)',
    'gt-sm': '(min-width: 960px)',
    'md': '(min-width: 960px) and (max-width: 1279px)',
    'gt-md': '(min-width: 1280px)',
    'lg': '(min-width: 1280px) and (max-width: 1919px)',
    'gt-lg': '(min-width: 1920px)',
    'xl': '(min-width: 1920px)',
    'landscape': '(orientation: landscape)',
    'portrait': '(orientation: portrait)',
    'print': 'print'
  },
  MEDIA_PRIORITY: [
    'xl',
    'gt-lg',
    'lg',
    'gt-md',
    'md',
    'gt-sm',
    'sm',
    'gt-xs',
    'xs',
    'landscape',
    'portrait',
    'print'
  ],
  API: {
    BASE_URL: 'http://localhost:3000/',
    BASE_HEADERS: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    JSON_HEADERS: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json'
    }
  }
}
