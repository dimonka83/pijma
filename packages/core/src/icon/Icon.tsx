import React, { FC } from 'react'

import { Path, Svg, Value } from '../primitive'

export interface IconProps {
  name:
    | 'angle-right'
    | 'angle-left'
    | 'angle-up'
    | 'angle-down'
    | 'angle-double-right-small'
    | 'angle-double-left-small'
    | 'angle-double-right'
    | 'angle-double-left'
    | 'angle-small-right'
    | 'angle-small-left'
    | 'angle-small-up'
    | 'angle-small-down'
    | 'arrow-right'
    | 'arrow-left'
    | 'arrow-up'
    | 'arrow-down'
    | 'arrow-small-right'
    | 'arrow-small-left'
    | 'arrow-small-up'
    | 'arrow-small-down'
    | 'attention'
    | 'backward'
    | 'bank'
    | 'bell'
    | 'calendar'
    | 'card'
    | 'camera'
    | 'case'
    | 'check'
    | 'clock'
    | 'clock-solid'
    | 'cross'
    | 'cross-small'
    | 'crown'
    | 'delete'
    | 'dots-h'
    | 'dots-v'
    | 'download'
    | 'edit'
    | 'email'
    | 'envelope'
    | 'exchange'
    | 'eye-closed'
    | 'eye-opened'
    | 'facebook'
    | 'file'
    | 'filter'
    | 'forward'
    | 'google'
    | 'hamburger'
    | 'help'
    | 'info'
    | 'instagram'
    | 'key'
    | 'location'
    | 'login'
    | 'logout'
    | 'message'
    | 'mobile'
    | 'ok'
    | 'passport'
    | 'percent'
    | 'phone'
    | 'play'
    | 'plus'
    | 'plus-circle'
    | 'power'
    | 'print'
    | 'qiwi'
    | 'receipt'
    | 'refund'
    | 'reject'
    | 'reload'
    | 'repeat'
    | 'sbp'
    | 'search'
    | 'security'
    | 'send'
    | 'settings'
    | 'share'
    | 'sim'
    | 'sort-asc'
    | 'sort-desc'
    | 'star'
    | 'star-solid'
    | 'success'
    | 'terminal'
    | 'terminal-client'
    | 'transfer'
    | 'twitter'
    | 'user'
    | 'vk'
    | 'waiting'
    | 'wallet'
    | 'warning'
    | 'wave'
    | 'withdraw'
    | 'youtube'
  size?: Value
  color?: string
}

export const IconPaths: { [name in IconProps['name']]: string } = {
  'angle-right':
    'M14.586 12l-7.293 7.293a1 1 0 0 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8a1 1 0 0 0-1.414 1.414L14.586 12z',
  'angle-left':
    'M9.414 12l7.293-7.293a1 1 0 1 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414-1.414L9.414 12z',
  'angle-up':
    'M12 9.414l-7.293 7.293a1 1 0 1 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L12 9.414z',
  'angle-down':
    'M11.544 14.585l7.77-7.313a1 1 0 0 1 1.371 1.456l-8.5 8a1 1 0 0 1-1.415-.044l-7.5-8a1 1 0 1 1 1.46-1.368l6.814 7.27z',
  'angle-double-right-small':
    'M11.293 7.707a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L15.586 12l-4.293-4.293zm-6 0a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L9.586 12 5.293 7.707z',
  'angle-double-left-small':
    'M11.707 7.707L7.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414zm6 0L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414z',
  'angle-double-right':
    'M18.586 12l-7.293-7.293a1 1 0 1 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L18.586 12zm-8 0L3.293 4.707a1 1 0 0 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 1 1-1.414-1.414L10.586 12z',
  'angle-double-left':
    'M5.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414L5.414 12zm8 0l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414L13.414 12z',
  'angle-small-right':
    'M9.293 7.707a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 12 9.293 7.707z',
  'angle-small-left':
    'M14.707 7.707a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L10.414 12l4.293-4.293z',
  'angle-small-up':
    'M12 10.414l-4.293 4.293a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 10.414z',
  'angle-small-down':
    'M16.293 9.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L12 13.586l4.293-4.293z',
  'arrow-right':
    'M18.586 11l-5.293-5.293a1 1 0 1 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L18.586 13H3.2c-.663 0-1.2-.448-1.2-1s.537-1 1.2-1h15.386z',
  'arrow-left':
    'M5.414 11H20.8c.663 0 1.2.448 1.2 1s-.537 1-1.2 1H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 1.414L5.414 11z',
  'arrow-up':
    'M11 5.414l-5.293 5.293a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414L13 5.414V21a1 1 0 0 1-2 0V5.414z',
  'arrow-down':
    'M11 18.586V3a1 1 0 0 1 2 0v15.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L11 18.586z',
  'arrow-small-right':
    'M16.586 11l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L16.586 13H5.2c-.663 0-1.2-.448-1.2-1s.537-1 1.2-1h11.386z',
  'arrow-small-left':
    'M7.414 11H18.8c.663 0 1.2.448 1.2 1s-.537 1-1.2 1H7.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L7.414 11z',
  'arrow-small-up':
    'M11 7.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 1 1-1.414 1.414L13 7.414V19a1 1 0 0 1-2 0V7.414z',
  'arrow-small-down':
    'M11 16.586V5a1 1 0 0 1 2 0v11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 16.586z',
  attention:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-13a1.366 1.366 0 0 0-1.36 1.493l.61 6.507h1.5l.61-6.507A1.366 1.366 0 0 0 12 5.5z',
  backward:
    'M12 2C6.417 2 2 6.417 2 12s4.417 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 10.8h-3.9l.9.9c.4.3.4.8 0 1.2-.1.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-2.4-2.4c-.3-.4-.3-.9 0-1.2L10.8 9c.3-.4.8-.4 1.2 0 .4.4.4.9 0 1.2l-.9.9H15c.4 0 .9.4.9.9s-.5.8-.9.8z',
  bank: 'M3 8.044a.969.969 0 0 1 .553-.938l8-4a1 1 0 0 1 .894 0l8 4a.969.969 0 0 1 .553.938V19a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V8.044zM5 9v10h3V9H5zm14 0h-3v10h3V9zm-9 0v10h4V9h-4zM8.236 7h7.528L12 5.118 8.236 7z',
  bell: 'M7.92 2.92A3 3 0 0110 2a3.2 3.2 0 012.88 2.23c.92.34 1.68.92 2.22 1.79.64 1.03.9 2.37.9 3.98 0 .87.16 1.39.35 1.72.18.35.44.6.79.89l.14.11c.31.26.74.6 1.06 1.06.42.57.66 1.28.66 2.22 0 1-.34 1.8-.98 2.33-.62.51-1.37.67-2.02.67h-3a3 3 0 11-6 0H4c-.65 0-1.4-.16-2.02-.67A2.91 2.91 0 011 16c0-.94.24-1.65.66-2.22.32-.46.75-.8 1.06-1.06l.14-.11c.35-.3.6-.54.8-.89.18-.33.34-.85.34-1.72 0-1.61.26-2.95.9-3.98a4.31 4.31 0 012.22-1.8c.15-.5.45-.95.8-1.3zM4 17h12c.35 0 .6-.09.73-.2.11-.1.27-.3.27-.8 0-.56-.13-.85-.28-1.06-.16-.22-.36-.38-.68-.65l-.18-.15c-.4-.33-.9-.77-1.27-1.46-.38-.7-.59-1.55-.59-2.68 0-1.43-.24-2.34-.6-2.93a2.5 2.5 0 00-1.64-1.1A1 1 0 0111 5c0-.17-.1-.43-.33-.67-.24-.23-.5-.33-.67-.33-.17 0-.43.1-.67.33-.23.24-.33.5-.33.67a1 1 0 01-.76.97c-.8.2-1.3.56-1.64 1.1-.36.59-.6 1.5-.6 2.93 0 1.13-.21 1.99-.6 2.68a4.98 4.98 0 01-1.44 1.61c-.32.27-.52.43-.68.65-.15.2-.28.5-.28 1.06 0 .5.16.7.27.8.13.11.38.2.73.2zm5 2a1 1 0 102 0H9z',
  calendar:
    'M17 4h1.006A2.995 2.995 0 0 1 21 7.01v9.98A3.004 3.004 0 0 1 18.006 20H5.994A2.995 2.995 0 0 1 3 16.99V7.01A3.004 3.004 0 0 1 5.994 4H7V3a1 1 0 1 1 2 0v1h6V3a1 1 0 0 1 2 0v1zm0 2v1a1 1 0 0 1-2 0V6H9v1a1 1 0 1 1-2 0V6H5.994C5.45 6 5 6.45 5 7.01v9.98c0 .566.443 1.01.994 1.01h12.012c.545 0 .994-.45.994-1.01V7.01A.995.995 0 0 0 18.006 6H17zm-9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  camera:
    'M5 5h2c.42 0 .849-.28 1.285-.841A3 3 0 0 1 10.653 3h2.68a3 3 0 0 1 2.373 1.165c.43.557.861.835 1.294.835h2a3 3 0 0 1 3 3v9.154c0 1.337-.14 1.822-.4 2.311a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H5.844c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 19.464c-.262-.489-.401-.974-.401-2.31V8a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v9.154c0 .917.043 1.142.164 1.368.075.14.174.239.314.314.226.12.45.164 1.368.164h12.308c.917 0 1.142-.043 1.368-.164a.727.727 0 0 0 .314-.314c.12-.226.164-.45.164-1.368V8a1 1 0 0 0-1-1h-2c-1.155 0-2.104-.612-2.876-1.612A1 1 0 0 0 13.332 5h-2.679a1 1 0 0 0-.79.386C9.087 6.386 8.15 7 7 7H5zm7 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  card: 'M20 8v-.99A.995.995 0 0 0 19.006 6H4.994C4.45 6 4 6.45 4 7.01V8h16zm0 2H4v6.99c0 .566.443 1.01.994 1.01h14.012c.545 0 .994-.45.994-1.01V10zM2 7.01A3.004 3.004 0 0 1 4.994 4h14.012A2.995 2.995 0 0 1 22 7.01v9.98A3.004 3.004 0 0 1 19.006 20H4.994A2.995 2.995 0 0 1 2 16.99V7.01z',
  case: 'M18.878 5C20.634 5 21.902 6.441 22 8v10.077C22 19.636 20.634 21 18.976 21H5.024C3.366 21 2 19.733 2 18.077V8c0-1.559 1.366-3 3.024-3h1.854v-.077C6.878 3.364 8.244 2 9.902 2H14c1.659 0 3.024 1.267 3.024 2.923V5h1.854zm1.17 12.98V16H4v1.98c0 .584.439 1.071 1.024 1.071h13.854c.683 0 1.17-.487 1.17-1.072zM8.733 4.922V5h6.536v-.077c0-.585-.488-1.072-1.17-1.072H9.902c-.682 0-1.17.487-1.17 1.072zM20 14V8c0-.585-.341-1-1.024-1H5.024C4.341 7 4 7.415 4 8v6h16zm-8-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  check:
    'M19.293 6.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L9 16.586 19.293 6.293z',
  clock:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7.99c0-.546.444-.99 1-.99.552 0 1 .444 1 1v4l1.84 1.84a.964.964 0 0 1-.02 1.392l-.09.085a1.046 1.046 0 0 1-1.441-.028l-2.29-2.288V7.99z',
  'clock-solid':
    'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.5145 15.1425L13 12.4338V7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V13C11 13.3513 11.1843 13.6768 11.4855 13.8575L15.4855 16.8575C15.9591 17.1416 16.5733 16.9881 16.8575 16.5145C17.1416 16.0409 16.9881 15.4267 16.5145 15.1425Z',
  cross:
    'M12 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 1 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586z',
  'cross-small':
    'M12 10.586l4.293-4.293a1 1 0 0 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 1.414-1.414L12 10.586z',
  crown:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.484-5.996h6.968a1 1 0 0 0 .976-.783l1.242-5.59a.4.4 0 0 0-.673-.37L14.57 11.72 12.32 8.717a.4.4 0 0 0-.64 0l-2.251 3.002L6.97 9.26a.4.4 0 0 0-.673.37l1.242 5.59a1 1 0 0 0 .976.783z',
  delete:
    'M5 6H4a1 1 0 1 1 0-2h4l.724-1.447A1 1 0 0 1 9.618 2h4.764a1 1 0 0 1 .894.553L16 4h4a1 1 0 0 1 0 2h-1v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6zm2 0v13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6H7zm3 2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z',
  download:
    'M11 11.586V4a1 1 0 0 1 2 0v7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 11.586zM3 16a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2z',
  'dots-h':
    'M5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  'dots-v':
    'M18.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  edit: 'M18.383 3.937l.707.708L7.776 15.958l-1.414-1.414L16.968 3.937a1 1 0 0 1 1.415 0zm1.414 1.415l.707.707a1 1 0 0 1 0 1.414L9.897 18.08l-1.414-1.415L19.797 5.352zm-14.142 9.9l3.535 3.535-4.084 1.167a.5.5 0 0 1-.618-.618l1.167-4.085z',
  email:
    'M17.343 6H5.657l4.783 2.989a2 2 0 0 0 2.12 0L17.343 6zM19 7.314l-6.44 4.024a2 2 0 0 1-2.12 0L5 7.939V16h4a1 1 0 0 1 0 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a1 1 0 0 1-2 0V7.314zM17.586 16l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 18H13a1 1 0 0 1 0-2h4.586z',
  envelope:
    'M5.667 6L12 10.75 18.333 6H5.667zM20 7.25l-8 6-8-6V18h16V7.25zM4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  exchange:
    'M20 14.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L18 14.586V7a1 1 0 0 0-1-1H9a1 1 0 1 1 0-2h8a3 3 0 0 1 3 3v7.586zM4 9.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L6 9.414V17a1 1 0 0 0 1 1h8a1 1 0 0 1 0 2H7a3 3 0 0 1-3-3V9.414z',
  'eye-closed':
    'M17.705 16.291l2.002 2.002a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 1.414-1.414l2.471 2.47A10.03 10.03 0 0 1 12 6c6.412 0 10 6 10 6s-1.492 2.518-4.295 4.291zM9.742 8.328l.965.964a3 3 0 0 1 4.001 4.001l1.543 1.544c.64-.368 1.254-.816 1.84-1.335.54-.477 1.021-.986 1.44-1.498a13.17 13.17 0 0 0-1.45-1.505C16.294 8.923 14.264 8 12 8c-.777 0-1.53.113-2.258.328zm3.661 9.575c-.45.063-.919.097-1.403.097-5.983 0-10-6-10-6s.897-1.458 2.563-2.937L5.98 10.48a13.527 13.527 0 0 0-1.459 1.484c.457.519.972 1.034 1.536 1.517 1.703 1.458 3.533 2.36 5.424 2.5l1.922 1.922z',
  'eye-opened':
    'M22 12s-3.556 6-10 6c-5.983 0-10-6-10-6s3.692-6 10-6c6.412 0 10 6 10 6zm-3.92-1.5C16.295 8.922 14.265 8 12 8c-2.219 0-4.244.924-6.047 2.504-.532.466-1.01.961-1.432 1.46.457.519.972 1.034 1.536 1.517C7.916 15.072 9.925 16 12 16c2.279 0 4.311-.922 6.09-2.498.54-.477 1.022-.986 1.441-1.498a13.17 13.17 0 0 0-1.45-1.505zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  facebook:
    'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12',
  file: 'M12.586 4H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9h-4a2 2 0 0 1-2-2V4h.586zM14 4.414V8h3.586L14 4.414zM7 2h6.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 20 8.828V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z',
  filter:
    'M14 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-1.83-1a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h8.17zM8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-1.83-1a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-8.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h2.17zM15 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm-1.83-1a3.001 3.001 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17z',
  forward:
    'M12 2C6.417 2 2 6.417 2 12s4.417 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.6 10.6L13.2 15c-.1.1-.4.2-.6.2-.2 0-.5-.1-.6-.2-.4-.4-.4-.9 0-1.2l.9-.9H9c-.4 0-.9-.4-.9-.9s.4-.9.9-.9h3.9l-.9-.9c-.4-.3-.4-.8 0-1.2.4-.4.9-.4 1.2 0l2.4 2.4c.3.3.3.8 0 1.2z',
  google:
    'M15.34 8.05A4.71 4.71 0 0012 6.75a5.2 5.2 0 00-4.88 3.6 5.25 5.25 0 000 3.3 5.25 5.25 0 007.84 2.76 4.01 4.01 0 001.74-2.62H12V10.4h8.22c.1.57.16 1.17.16 1.79 0 2.66-.95 4.9-2.6 6.41A8.33 8.33 0 0112 20.73 8.72 8.72 0 014.2 8.08a8.72 8.72 0 0113.64-2.53l-2.5 2.5z',
  hamburger:
    'M1 13a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2H1zm0-6a1 1 0 1 1 0-2h22a1 1 0 0 1 0 2H1zm0 12a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2H1z',
  help: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z',
  info: 'M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,10 C11.4477153,10 11,10.4477153 11,11 L11,11 L11,17 C11,17.5522847 11.4477153,18 12,18 C12.5522847,18 13,17.5522847 13,17 L13,17 L13,11 C13,10.4477153 12.5522847,10 12,10 Z M12,6 C11.4477153,6 11,6.44771525 11,7 C11,7.55228475 11.4477153,8 12,8 C12.5522847,8 13,7.55228475 13,7 C13,6.44771525 12.5522847,6 12,6 Z',
  instagram:
    'M11.997 2.006c2.715 0 3.055.012 4.122.06 1.064.049 1.79.218 2.426.465a4.9 4.9 0 0 1 1.77 1.153 4.9 4.9 0 0 1 1.154 1.77c.247.637.416 1.363.465 2.427.048 1.067.06 1.407.06 4.122s-.012 3.056-.06 4.122c-.049 1.064-.218 1.79-.465 2.426a4.9 4.9 0 0 1-1.153 1.771 4.9 4.9 0 0 1-1.77 1.153c-.637.247-1.363.416-2.427.465-1.067.048-1.407.06-4.122.06s-3.056-.012-4.122-.06c-1.064-.049-1.79-.218-2.426-.465a4.9 4.9 0 0 1-1.771-1.153 4.9 4.9 0 0 1-1.153-1.77c-.247-.636-.416-1.363-.465-2.427-.048-1.066-.06-1.407-.06-4.122s.012-3.055.06-4.122c.049-1.064.218-1.79.465-2.426a4.9 4.9 0 0 1 1.153-1.77 4.9 4.9 0 0 1 1.77-1.154c.636-.247 1.363-.416 2.427-.465 1.066-.048 1.407-.06 4.122-.06zm0 1.802c-2.67 0-2.986.01-4.04.058-.974.044-1.504.207-1.856.344-.467.181-.8.398-1.15.748-.35.35-.566.683-.747 1.15-.137.352-.3.88-.344 1.856-.049 1.054-.059 1.37-.059 4.04 0 2.668.01 2.985.059 4.039.044.974.207 1.504.344 1.856.181.467.398.8.748 1.15.35.35.682.566 1.149.747.352.137.882.3 1.856.344 1.054.049 1.37.059 4.04.059s2.985-.01 4.04-.059c.974-.044 1.503-.207 1.856-.344.466-.181.8-.398 1.15-.748.349-.35.566-.682.747-1.149.137-.352.3-.882.344-1.856.048-1.054.058-1.37.058-4.04s-.01-2.985-.058-4.04c-.044-.974-.207-1.503-.344-1.856a3.097 3.097 0 0 0-.748-1.15 3.097 3.097 0 0 0-1.15-.747c-.352-.137-.88-.3-1.856-.344-1.054-.048-1.37-.058-4.04-.058zm6.536 2.859a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm-6.536.203a5.133 5.133 0 1 1 0 10.267 5.133 5.133 0 0 1 0-10.267zm0 8.465a3.332 3.332 0 1 0 0-6.664 3.332 3.332 0 0 0 0 6.664z',
  key: 'M11 15H9a6 6 0 1 1 6-6c0 .07.003.134.014.27.01.152.015.21.017.3.002.06.002.12 0 .178l.067.076c.229.257.59.632 1.077 1.12.99.99 2.495 2.434 4.51 4.327l.315.296V21h-6v-2h-2v-2h-2v-2zm2.023-5.211a.658.658 0 0 0 .01-.16 4.471 4.471 0 0 0-.014-.21A5.108 5.108 0 0 1 13 9a4 4 0 1 0-4 4h4v2h2v2h2v2h2v-2.567c-5.552-5.218-6.152-5.837-5.977-6.644zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  location:
    'm8.49321739 11.4894593 3.12458481.8927385.8927385 3.1245848 4.0173233-8.03464665zm12.50678261-8.4894593-9 18-2-7-7-2z',
  login:
    'M11.586 11L9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L11.586 13H4a1 1 0 0 1 0-2h7.586zM10 5a1 1 0 1 1 0-2h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-8a1 1 0 0 1 0-2h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-8z',
  logout:
    'M17.586 11l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H10a1 1 0 0 1 0-2h7.586zM15 3a1 1 0 0 1 0 2H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 1 0 2H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8z',
  message:
    'M10.464 16.894l.34.039c.394.044.793.067 1.196.067 4.465 0 8-2.75 8-6s-3.535-6-8-6-8 2.75-8 6c0 1.652.91 3.22 2.52 4.36l.604.429-1.312 3.937 4.652-2.832zm-3.612 4.54a2 2 0 0 1-2.937-2.34l.853-2.56C3.018 15.072 2 13.111 2 11c0-4.481 4.524-8 10-8s10 3.519 10 8-4.524 8-10 8c-.36 0-.719-.015-1.074-.045l-4.074 2.48zM9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  mobile:
    'M5 5.01A3.004 3.004 0 0 1 7.994 2h8.012A2.995 2.995 0 0 1 19 5.01v13.98A3.004 3.004 0 0 1 16.006 22H7.994A2.995 2.995 0 0 1 5 18.99V5.01zm2 0v13.98c0 .566.443 1.01.994 1.01h8.012c.545 0 .994-.45.994-1.01V5.01A.995.995 0 0 0 16.006 4H7.994C7.45 4 7 4.45 7 5.01zm5 13.49a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  ok: 'M13.803 15.545l2.49 2.49a1.304 1.304 0 1 1-1.845 1.846L12 17.434 9.553 19.88a1.305 1.305 0 0 1-1.847-1.845l2.49-2.491a8.357 8.357 0 0 1-2.586-1.072A1.305 1.305 0 0 1 9 12.263a5.656 5.656 0 0 0 6 0 1.305 1.305 0 1 1 1.39 2.21 8.344 8.344 0 0 1-2.587 1.072zM12 11.91a4.46 4.46 0 0 1-4.455-4.454A4.46 4.46 0 0 1 12 3a4.46 4.46 0 0 1 4.455 4.456A4.46 4.46 0 0 1 12 11.91zm0-6.299a1.847 1.847 0 0 0-1.845 1.845c0 1.016.829 1.844 1.845 1.844a1.847 1.847 0 0 0 1.845-1.844A1.847 1.847 0 0 0 12 5.611z',
  passport:
    'M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 3h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm1 3h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z',
  percent:
    'M18.293 4.293a1 1 0 0 1 1.414 1.414l-14 14a1 1 0 1 1-1.414-1.414l14-14zM7 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  phone:
    'M5.307 6.107a2 2 0 0 0-.334 2.385l1.404 2.527a17 17 0 0 0 6.604 6.604l2.527 1.404a2 2 0 0 0 2.385-.334L19.586 17 17.5 14.914l-.543.543a2.768 2.768 0 0 1-3.914 0l-4.5-4.5a2.768 2.768 0 0 1 0-3.914l.543-.543L7 4.414 5.307 6.107zM3.893 4.693L5.586 3a2 2 0 0 1 2.828 0L10.5 5.086a2 2 0 0 1 0 2.828l-.543.543c-.3.3-.3.786 0 1.086l4.5 4.5c.3.3.786.3 1.086 0l.543-.543a2 2 0 0 1 2.828 0L21 15.586a2 2 0 0 1 0 2.828l-1.693 1.693a4 4 0 0 1-4.77.668l-2.527-1.403a19 19 0 0 1-7.382-7.382L3.225 9.464a4 4 0 0 1 .668-4.771z',
  play: 'M8 17.587L17.975 12 8 6.413v11.174zM7.489 3.834l13.02 7.294a1 1 0 0 1 0 1.744L7.49 20.166A1 1 0 0 1 6 19.294V4.706a1 1 0 0 1 1.489-.872z',
  plus: 'M13 11h7a1 1 0 0 1 0 2h-7v7a1 1 0 0 1-2 0v-7H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 2 0v7z',
  'plus-circle':
    'M16.143 11.143a.857.857 0 0 1 0 1.714h-3.286v3.286a.857.857 0 0 1-1.714 0v-3.286H7.857a.857.857 0 0 1 0-1.714h3.286V7.857a.857.857 0 0 1 1.714 0v3.286h3.286zM12 22C6.478 22 2 17.523 2 12 2 6.478 6.478 2 12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  power:
    'M11 2.996c0-.55.444-.996 1-.996.552 0 1 .445 1 .996v9.008c0 .55-.444.996-1 .996-.552 0-1-.445-1-.996V2.996zM4.929 4.929a1 1 0 0 1 1.414 1.414 8 8 0 1 0 11.314 0A1 1 0 0 1 19.07 4.93c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142z',
  print:
    'M7 18H3V9a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v9h-4v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1zm2 0v1h6v-4H9v3zM9 7h6V5H9v2zm-2 9v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h2V9H5v7h2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  qiwi: 'M17.783 20.125c1.525.413 3.176 1.08 5.103 3.506.196.246-.102.496-.324.296-2.217-1.995-4.082-2.56-5.926-2.638-.978-.042-1.952.054-2.968.145a57.195 57.195 0 0 1-.888.075c-.359.039-.722.06-1.09.06a9.701 9.701 0 0 1-4.867-1.285 9.328 9.328 0 0 1-3.543-3.549A9.83 9.83 0 0 1 2 11.82c0-1.763.43-3.425 1.278-4.936A9.446 9.446 0 0 1 6.781 3.3a9.342 9.342 0 0 1 4.78-1.3c1.773 0 3.43.432 4.926 1.284a9.39 9.39 0 0 1 3.554 3.56 9.832 9.832 0 0 1 1.292 4.929 10.314 10.314 0 0 1-.266 2.334 2.88 2.88 0 0 1-.088.312c-.172.558-.492 1.35-1.087 2.364-.064.107-.1.026-.108-.034-.208-1.493-.852-2.627-1.988-3.359l-.056-.035a4.94 4.94 0 0 0-.597-.317 6.056 6.056 0 0 0-.877-.312c-.192-.053-.621-.03-.466-.187.065-.065.994-.08 2.125-.007.02-.227.03-.46.03-.7 0-1.863-.607-3.382-1.856-4.644-1.25-1.262-2.711-1.876-4.468-1.876-1.798 0-3.257.615-4.458 1.88-1.209 1.27-1.795 2.776-1.795 4.604 0 1.824.603 3.324 1.845 4.586 1.242 1.261 2.684 1.875 4.408 1.875.083 0 .165-.003.241-.069-.099-1.286-.12-2.355.14-1.924.092.153.184.297.275.436a9.285 9.285 0 0 0 1.062 1.345c1.226 1.264 2.433 1.575 3.715 1.895l.082.02c.21.053.423.107.637.165zm-1.682-2.517c.099-.123.26-.192.453-.192.235 0 .48.1.692.282.427.367.558.803.331 1.112-.125.168-.33.261-.573.261-.24 0-.485-.09-.654-.24-.39-.345-.503-.905-.25-1.223zm2.183-1.674c.07-.13.211-.171.4-.115.345.164.5.69.534.947.034.25.008.448-.074.543a.166.166 0 0 1-.13.062c-.146 0-.329-.174-.545-.516-.213-.337-.29-.725-.185-.92z',
  receipt:
    'M4 20V2l4 2 4-2 4 2 4-2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM6 5.236V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.236l-2.144 1.072L12 4.404 8.144 6.308 6 5.236zM9 15h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm0-5h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z',
  refund:
    'M12.5 6H7.6l1.2-1.2c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7-.4-.4-1.1-.4-1.5 0l-3 3s-.3.2-.3.7c0 .5.4.8.4.8l2.9 2.9c.4.4 1.1.4 1.5 0 .2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.8L7.6 8.1h4.9c3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4H6c-.6 0-1.1.5-1.1 1.1 0 .6.6 1 1.1 1h6.4c4.1 0 7.5-3.4 7.5-7.5C20 9.3 16.6 6 12.5 6',
  reject:
    'm12 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-11.06-3.72-3.72a.75.75 0 0 0 -1.06 1.06l3.72 3.72-3.72 3.72a.75.75 0 0 0 1.06 1.06l3.72-3.72 3.72 3.72a.75.75 0 0 0 1.06-1.06l-3.72-3.72 3.72-3.72a.75.75 0 0 0 -1.06-1.06z',
  reload:
    'M5.013 11.073l.28-.28a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.302.302a9 9 0 0 1 16.056-5.171 1 1 0 0 1-1.57 1.24 7 7 0 0 0-12.483 3.91zm13.974 1.854l-.28.28a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-.302-.302a9 9 0 0 1-15.98 5.265 1 1 0 0 1 1.552-1.26 7 7 0 0 0 12.424-3.982z',
  repeat:
    'M22.293 10.793l-.337.337C21.513 6.022 17.22 2 12 2 6.486 2 2 6.486 2 12s4.486 10 10 10c2.267 0 4.486-.779 6.25-2.193a1 1 0 0 0-1.252-1.561A7.9 7.9 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c4.078 0 7.447 3.07 7.934 7.02l-.227-.227a.999.999 0 1 0-1.414 1.414l2 2a.999.999 0 0 0 1.414 0l2-2a.999.999 0 1 0-1.414-1.414z',
  sbp: 'M4 6.43L6.39 10.63V13.2L4 17.39L4 6.43Z M13.18 9.10L15.42 7.75L20 7.75L13.18 11.86V9.1Z M13.16 6.40L13.18 11.97L10.78 10.52V2.2L13.16 6.4Z M20 7.75L15.42 7.75L13.16 6.40L10.78 2.2L20 7.75Z M13.18 17.42V14.72L10.78 13.29L10.78 21.63L13.18 17.42Z M15.41 16.08L6.39 10.63L4 6.43L19.99 16.07L15.41 16.08Z M10.78 21.63L13.18 17.42L15.41 16.08L19.99 16.07L10.78 21.63Z M4 17.39L10.8 13.3L8.51 11.92L6.39 13.2L4 17.39Z',
  search:
    'M16.463 15.05l3.901 3.9a1 1 0 1 1-1.414 1.414l-3.9-3.9a7.5 7.5 0 1 1 1.414-1.414zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z',
  security:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4-12V9a4 4 0 1 0-8 0v1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-8a2 2 0 0 1 2 2v.996L10 10V9a2 2 0 0 1 2-2z',
  send: 'M12.211 12.507l1.361-.21a.3.3 0 0 0 0-.594l-1.36-.21-8.864-1.366a1.001 1.001 0 0 1-.848-.991L2.507 4.5A1 1 0 0 1 3.9 3.58L20.9 11.08c.236.102.603.444.6.921-.003.477-.223.759-.6.92l-17 7.499a.999.999 0 0 1-1.393-.92L2.5 14.866c0-.495.36-.917.848-.992l8.863-1.366z',
  settings:
    'M3.5 10.196a1.994 1.994 0 0 1-.733-2.73L3.769 5.73A2.001 2.001 0 0 1 6.5 5l.85.49A7.987 7.987 0 0 1 9 4.583V4c0-1.105.898-2 1.998-2h2.004C14.106 2 15 2.888 15 4v.582a7.987 7.987 0 0 1 1.65.909L17.5 5a2.001 2.001 0 0 1 2.731.73l1.002 1.736c.552.955.23 2.174-.733 2.73l-.63.364a8.04 8.04 0 0 1-.034 3.057L20.5 14a1.994 1.994 0 0 1 .733 2.73l-1.002 1.736a2.001 2.001 0 0 1-2.731.73l-1.003-.58a7.982 7.982 0 0 1-1.497.802V20c0 1.112-.894 2-1.998 2h-2.004C9.898 22 9 21.105 9 20v-.582a7.982 7.982 0 0 1-1.497-.801l-1.003.58a2.001 2.001 0 0 1-2.731-.731L2.767 16.73A1.994 1.994 0 0 1 3.5 14l.664-.383a8.029 8.029 0 0 1-.035-3.057l-.629-.364zm2.001 7.27l2.09-1.21 1.038.708c.352.24.728.44 1.122.6L11 18.07V20h2v-1.93l1.25-.506c.393-.16.769-.36 1.12-.6l1.039-.707 2.09 1.207 1.001-1.732-1.913-1.104.29-1.414a6.029 6.029 0 0 0 .026-2.296l-.252-1.386L19.5 8.464 18.499 6.73l-1.965 1.137-1.048-.75a5.987 5.987 0 0 0-1.237-.681L13 5.93V4h-2.002L11 5.93l-1.25.506a5.987 5.987 0 0 0-1.236.68l-1.048.751L5.5 6.732l-1 1.732 1.85 1.068-.253 1.386a6.04 6.04 0 0 0 .026 2.296l.29 1.414L4.5 15.732l1.001 1.734zM12 8a4.001 4.001 0 0 1 0 8 4.001 4.001 0 0 1 0-8zm0 2a2.001 2.001 0 0 0 0 4 2.001 2.001 0 0 0 0-4z',
  share:
    'M13 5.414V13a1 1 0 0 1-2 0V5.414L9.707 6.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414L13 5.414zM18 10a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h-1z',
  sim: 'M7 2h6.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 20 8.828V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.828a1 1 0 0 0-.293-.707L13.88 4.293A1 1 0 0 0 13.172 4H7zm3 6h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h4v-4h-4z',
  'sort-asc': 'M13 5v2H3V5h10zm4 6v2H3v-2h14zM3 19v-2h18v2H3z',
  'sort-desc': 'M21 5v2H3V5h18zm-4 6v2H3v-2h14zM3 19v-2h10v2H3z',
  star: 'M12 16.265c.176 0 .352.042.513.125l3.27 1.695c.11.056.2.007.232-.017a.21.21 0 0 0 .088-.212l-.624-3.59a1.076 1.076 0 0 1 .316-.96l2.646-2.542a.21.21 0 0 0 .056-.223.213.213 0 0 0-.178-.148l-3.656-.523a1.1 1.1 0 0 1-.83-.594L12.198 6.01A.215.215 0 0 0 12 5.89a.215.215 0 0 0-.198.12l-1.635 3.265a1.1 1.1 0 0 1-.83.595l-3.656.523a.214.214 0 0 0-.178.148.21.21 0 0 0 .056.223l2.646 2.541c.26.25.378.61.317.962l-.625 3.589a.21.21 0 0 0 .088.212.218.218 0 0 0 .232.017l3.27-1.695c.16-.083.337-.125.513-.125m4.734 4.235c-.214 0-.428-.05-.626-.153l-3.983-2.064a.272.272 0 0 0-.25 0l-3.983 2.064a1.35 1.35 0 0 1-1.413-.101 1.306 1.306 0 0 1-.534-1.294l.76-4.37a.262.262 0 0 0-.077-.234l-3.222-3.096a1.301 1.301 0 0 1-.34-1.356 1.328 1.328 0 0 1 1.084-.9l4.453-.637a.268.268 0 0 0 .202-.145l1.992-3.977A1.336 1.336 0 0 1 12 3.5c.515 0 .976.283 1.204.737l1.99 3.977c.04.078.116.132.203.144l4.453.638c.51.073.924.418 1.083.9a1.301 1.301 0 0 1-.34 1.356l-3.221 3.095a.262.262 0 0 0-.078.235l.761 4.37c.087.5-.118.996-.534 1.294a1.35 1.35 0 0 1-.787.254',
  'star-solid':
    'M13.13 3.764l1.586 4.44a1.2 1.2 0 0 0 1.13.796h4.84a1.2 1.2 0 0 1 .768 2.122L17.4 14.5a1.2 1.2 0 0 0-.385 1.251l1.205 4.219a1.2 1.2 0 0 1-1.874 1.29l-3.626-2.72a1.2 1.2 0 0 0-1.44 0l-3.568 2.676a1.2 1.2 0 0 1-1.87-1.304l1.322-4.421a1.2 1.2 0 0 0-.418-1.295l-3.954-3.045A1.2 1.2 0 0 1 3.524 9h4.63a1.2 1.2 0 0 0 1.13-.796l1.586-4.44a1.2 1.2 0 0 1 2.26 0z',
  success:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.293-9.707a1 1 0 1 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l5.5-7.5a1 1 0 1 0-1.414-1.414L10.5 14.086l-1.793-1.793z',
  terminal:
    'M6 10v10h12V10H6zm.366-2h11.268l-1.143-4H7.51L6.366 8zM6 22a2 2 0 0 1-2-2V9.28a2 2 0 0 1 .077-.55l1.509-5.28A2 2 0 0 1 7.509 2h8.982a2 2 0 0 1 1.923 1.45l1.509 5.28a2 2 0 0 1 .077.55V20a2 2 0 0 1-2 2H6z',
  'terminal-client':
    'M4.093 16h14.916l-2.105-8H6.198l-2.105 8zM6.198 6h10.706a2 2 0 0 1 1.934 1.491l2.106 8A2 2 0 0 1 19.009 18H4.093a2 2 0 0 1-1.934-2.509l2.105-8A2 2 0 0 1 6.198 6z',
  transfer:
    'M22 10.8c-.2-.3-.4-.6-.8-.8l-9.6-5.9c-.4-.2-.8-.3-1.2-.3H4c-1.2-.1-2.2.8-2.2 2 0 .4 0 .6.2 1L4.7 12 2 17c-.5 1.1-.1 2.5 1 3 .3.1.6.2.9.2h6.4c.4 0 .8-.1 1.2-.3l9.6-6c1.1-.7 1.5-2 .9-3.1zM6.4 13h4.9c.5 0 1-.4 1-1 0-.5-.4-1-1-1H6.4L3.7 6v-.2s.1-.1.2-.1h6.3c.1 0 .3 0 .4.1l9.5 5.8c.1.1.1.1.2.1.1.1 0 .3-.1.4l-9.5 6c-.1.1-.3.1-.4.1H4h-.1c-.2-.1-.2-.3-.2-.4L6.4 13z',
  twitter:
    'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.354-.012-.53A8.349 8.349 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.645 4.118 4.118 0 0 0 1.804-2.27 8.223 8.223 0 0 1-2.605.997 4.107 4.107 0 0 0-6.993 3.742 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.097 4.097 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.234 8.234 0 0 1 2 18.408a11.617 11.617 0 0 0 6.29 1.84',
  user: 'M4.062 20a8.001 8.001 0 0 1 15.876 0h-2.021a6.002 6.002 0 0 0-11.834 0H4.062zM12 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-6.998 8a1.001 1.001 0 1 1 1.003-1c0 .552-.449 1-1.003 1zm14 0a1.001 1.001 0 1 1 1.003-1c0 .552-.449 1-1.003 1z',
  vk: 'M15.07 2H8.93C3.327 2 2 3.327 2 8.93v6.14C2 20.673 3.327 22 8.93 22h6.14c5.603 0 6.93-1.327 6.93-6.93V8.93C22 3.327 20.66 2 15.07 2zm3.077 14.27h-1.454c-.55 0-.72-.438-1.708-1.44-.86-.833-1.242-.946-1.454-.946-.296 0-.38.085-.38.494v1.313c0 .353-.114.564-1.045.564-1.539 0-3.246-.931-4.446-2.667-1.807-2.54-2.3-4.446-2.3-4.841 0-.212.084-.41.493-.41h1.454c.367 0 .508.17.65.565.72 2.075 1.919 3.895 2.413 3.895.183 0 .268-.084.268-.55v-2.145c-.056-.988-.579-1.073-.579-1.426 0-.17.141-.339.367-.339h2.287c.31 0 .423.17.423.537v2.893c0 .31.141.424.226.424.184 0 .339-.113.678-.452 1.044-1.172 1.792-2.978 1.792-2.978.099-.212.268-.41.635-.41h1.454c.438 0 .536.226.438.537-.184.847-1.962 3.359-1.962 3.359-.156.254-.212.367 0 .65.155.211.663.649 1.002 1.044.62.705 1.1 1.298 1.228 1.708.14.409-.07.62-.48.62z',
  waiting:
    'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-9.566V7a1 1 0 0 0-2 0v6a1 1 0 0 0 .486.857l4 3a1 1 0 0 0 1.028-1.714L13 12.433z',
  wallet:
    'M2 7.01A3.004 3.004 0 0 1 4.994 4h14.012A2.995 2.995 0 0 1 22 7.01v9.98A3.004 3.004 0 0 1 19.006 20H4.994A2.995 2.995 0 0 1 2 16.99V7.01zm2 0v9.98c0 .566.443 1.01.994 1.01h14.012c.545 0 .994-.45.994-1.01V7.01A.995.995 0 0 0 19.006 6H4.994C4.45 6 4 6.45 4 7.01zm12.5 6.49a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
  warning:
    'M3.907 21.137c-1.513 0-2.421-1.68-1.593-2.946l8.092-13.329a1.904 1.904 0 0 1 3.188 0l8.092 13.33c.828 1.266-.08 2.945-1.593 2.945H3.907zM12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-11a1.324 1.324 0 0 0-1.314 1.488L11.25 14h1.5l.564-4.512A1.324 1.324 0 0 0 12 8z',
  wave: 'M6.371 14.677a1 1 0 0 1-1.79-.893A3.979 3.979 0 0 0 5 12c0-.639-.15-1.254-.431-1.81a1 1 0 0 1 1.782-.906C6.776 10.12 7 11.044 7 12c0 .94-.217 1.852-.629 2.677zm3.573 1.8a1 1 0 1 1-1.788-.897A7.962 7.962 0 0 0 9 12c0-1.28-.3-2.514-.868-3.628a1 1 0 0 1 1.782-.908A9.961 9.961 0 0 1 11 12a9.962 9.962 0 0 1-1.056 4.477zm3.55 1.847a1 1 0 0 1-1.784-.904A11.944 11.944 0 0 0 13 12c0-1.889-.436-3.713-1.262-5.364a1 1 0 0 1 1.788-.895A13.945 13.945 0 0 1 15 12c0 2.226-.52 4.38-1.507 6.324zm3.55 1.843a1 1 0 1 1-1.781-.908l.12-.243A15.93 15.93 0 0 0 17 12c0-2.517-.581-4.95-1.682-7.15a1 1 0 1 1 1.788-.895A17.928 17.928 0 0 1 19 12a17.93 17.93 0 0 1-1.956 8.167z',
  withdraw:
    'M13 6.414V14a1 1 0 0 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L13 6.414zM3 16a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2z',
  youtube:
    'M21.582 7.186C22 8.746 22 12 22 12s0 3.254-.418 4.814a2.505 2.505 0 0 1-1.768 1.768C18.254 19 12 19 12 19s-6.254 0-7.814-.418a2.505 2.505 0 0 1-1.768-1.768C2 15.254 2 12 2 12s0-3.254.418-4.814c.23-.86.908-1.538 1.768-1.768C5.746 5 12 5 12 5s6.254 0 7.814.418c.86.23 1.538.908 1.768 1.768zM9.955 14.955L15.182 12 9.955 9.045v5.91z',
}

export const Icon: FC<IconProps> = ({ name, size = 6, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" focusable="false">
    <Path d={IconPaths[name]} fill={color} />
  </Svg>
)

Icon.defaultProps = {
  size: 6,
  color: '#000',
}
