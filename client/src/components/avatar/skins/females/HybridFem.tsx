import { IColorSkin } from "../../variablesAvatar/VariableAvatar";

// Mesomorph Ectomorph
export const getHybridMEcSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.446 -9.554)">
    <g
      id="legs"
      fill={colorsSkin.light}
      fillRule="nonzero"
      transform="matrix(.8863 0 0 1 7.742 0) matrix(.9343 0 0 1 4.474 0)"
    >
      <g id="leg-left">
        <path
          id="tibia-left"
          d="M84.281 261.753h2.186a9.683 9.683 0 019.683 9.683l.001 25.561-.001 18.221 1.938 18.675c0 4.081-3.959 7.389-8.844 7.389h-2.061c-4.885 0-8.844-3.308-8.844-7.389v-27.775c0-1.791-.46-3.552-1.335-5.114a10.462 10.462 0 01-1.336-5.115v-3.82c0-2.051.252-4.094.749-6.084l.018-.072c.509-2.037.767-4.129.767-6.23v-10.851a7.079 7.079 0 017.079-7.079z"
        ></path>
        <path
          id="thigh-left"
          d="M87.205 193.658h5.579a7.609 7.609 0 017.541 6.608l4.122 31.101v13.497c0 1.751-.146 3.5-.436 5.227l-.947 5.632a27.685 27.685 0 01-3.287 9.189l-2.766 4.823a6.835 6.835 0 00-.905 3.399 6.832 6.832 0 01-6.832 6.832h-4.719a7.321 7.321 0 01-7.32-7.321c0-.88-.159-1.753-.469-2.577l-.992-2.638a22.857 22.857 0 01-1.006-3.497L73.26 256.5l-1.45-9.474a31.623 31.623 0 01-.363-4.771v-32.839c0-8.703 7.055-15.758 15.758-15.758z"
        ></path>
        <g id="foot-left">
          <path d="M84.906 326.02h8.305c4.788 0 8.67 3.416 8.67 7.63 0 4.215-3.882 7.631-8.67 7.631h-8.305c-4.788 0-8.67-3.416-8.67-7.631 0-4.214 3.882-7.63 8.67-7.63z"></path>
          <path d="M79.107 329.161H99.01c1.585 0 2.871 1.641 2.871 3.664v4.792c0 2.024-1.286 3.664-2.871 3.664H79.107c-1.585 0-2.871-1.64-2.871-3.664v-4.792c0-2.023 1.286-3.664 2.871-3.664z"></path>
        </g>
      </g>
      <g id="leg-right">
        <path
          id="tibia-right"
          d="M53.19 261.752h-2.186c-5.348 0-9.684 4.335-9.684 9.683v43.782l-1.937 18.675c0 4.081 3.959 7.389 8.843 7.389h2.062c4.884 0 8.844-3.308 8.844-7.389v-27.775c0-1.791.459-3.552 1.335-5.114a10.46 10.46 0 001.335-5.115v-3.82c0-2.051-.251-4.094-.748-6.084l-.018-.072a25.648 25.648 0 01-.767-6.23v-10.851a7.08 7.08 0 00-7.079-7.079z"
        ></path>
        <path
          id="thigh-right"
          d="M51.643 193.657h-8.675a5.705 5.705 0 00-5.704 5.705l-4.242 32.004v13.497c0 1.751.145 3.5.436 5.227l.946 5.632a27.709 27.709 0 003.288 9.189l2.766 4.823a6.838 6.838 0 01.905 3.399 6.832 6.832 0 006.832 6.832h4.719a7.32 7.32 0 007.32-7.32c0-.881.158-1.754.468-2.578l.993-2.638a22.857 22.857 0 001.006-3.497l1.507-7.433 1.451-9.474c.241-1.579.363-3.174.363-4.771v-34.218c0-7.941-6.438-14.379-14.379-14.379z"
        ></path>
        <g id="foot-right">
          <path d="M52.564 326.019H44.26c-4.788 0-8.67 3.416-8.67 7.63 0 4.215 3.882 7.631 8.67 7.631h8.304c4.789 0 8.67-3.416 8.67-7.631 0-4.214-3.881-7.63-8.67-7.63z"></path>
          <path d="M58.363 329.16H38.461c-1.586 0-2.871 1.641-2.871 3.664v4.792c0 2.024 1.285 3.664 2.871 3.664h19.902c1.586 0 2.871-1.64 2.871-3.664v-4.792c0-2.023-1.285-3.664-2.871-3.664z"></path>
        </g>
      </g>
    </g>
    <path
      id="deltoids"
      fill={colorsSkin.light}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 24.83 14.676 24.83 29.183l3.095 14.488-6.187 26.656c0 15.71-8.114 18.111-25.772 18.111-17.658 0-23.597-2.62-23.597-18.33l-8.277-26.437 3.972-15.456c0-15.71 10.244-28.433 27.902-28.433z"
      transform="matrix(.8863 0 0 1 7.742 0)"
    ></path>
    <g transform="matrix(.82807 0 0 1 11.708 0)">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l5.36 23.836c2.778 11.868-13.64 21.717-30.583 21.717h-1.023c-16.943 0-33.361-9.849-30.583-21.717l5.924-23.836c2.781-11.878 7.716-3.114 24.659-3.114z"
      ></path>
    </g>
    <g
      id="arms"
      fillRule="nonzero"
      transform="matrix(.8863 0 0 1 7.742 0) matrix(.9343 0 0 1 4.474 0)"
    >
      <g id="arm-right">
        <path
          id="bicep-right"
          fill={colorsSkin.light}
          d="M29.735 123.095c-5.175-1.001-11.405 1.097-12.545 6.992l-3.54 10.645a25 25 0 00-1.17 10.188l.954 10.32c.217 2.354-.047 4.727-.015 7.091.057 4.141 1.945 7.178 6.027 7.967 4.458.863 7.419-1.357 8.882-5.756.497-1.493.885-3.026 1.468-4.488l2.648-6.636a25.003 25.003 0 001.68-11.508l-.547-6.07c-.142-1.58-.125-3.167-.054-4.751.195-4.355.106-13.241-3.788-13.994z"
        ></path>
        <path
          id="forearm-right"
          fill={colorsSkin.light}
          d="M21.633 156.787l-.066-.002c-4.242-.131-7.92 4.578-8.216 10.517l-2.222 44.6c-.296 5.94 2.902 10.861 7.144 10.992l.066.002c4.242.131 7.92-4.578 8.216-10.518l2.222-44.6c.296-5.94-2.902-10.861-7.144-10.991z"
        ></path>
        <g id="hand-right" fill={colorsSkin.light}>
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g id="arm-left">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.406 1.097 12.546 6.992l3.539 10.645a25 25 0 011.171 10.188l-.954 10.32c-.218 2.354.046 4.727.014 7.091-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-.884-3.026-1.467-4.488l-2.649-6.636a25.003 25.003 0 01-1.68-11.508l.547-6.07c.142-1.58.126-3.167.055-4.751-.195-4.355-.107-13.241 3.787-13.994z"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
        ></path>
        <g id="hand-left" fill={colorsSkin.light}>
          <path d="M114.657 202.739l2.665-.015c5.109-.027 9.492 5.517 9.789 12.383l.265 6.1c.297 6.866-3.603 12.454-8.711 12.481l-2.666.015c-5.109.027-9.491-5.517-9.789-12.383l-.264-6.1c-.298-6.866 3.602-12.454 8.711-12.481z"></path>
          <path d="M113.998 220.089c1.111-4.367 5.03-6.578 8.752-4.939 3.723 1.639 5.839 6.508 4.728 10.874l-3.036 11.926c-1.111 4.366-5.03 6.577-8.752 4.938-3.722-1.639-5.839-6.507-4.728-10.874l3.036-11.925z"></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          d="M105.284 217.757c-.125-3.044 1.581-5.522 3.812-5.536 2.231-.014 4.141 2.443 4.266 5.487l.343 8.313c.126 3.044-1.581 5.523-3.811 5.537-2.231.013-4.141-2.443-4.267-5.487l-.343-8.314z"
        ></path>
      </g>
    </g>
    <g transform="matrix(.82807 0 0 1 11.708 0)">
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      ></path>
    </g>
    <g transform="matrix(.82807 0 0 1 11.708 0)">
      <path
        id="bust"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    <g transform="matrix(.82807 0 0 1 11.708 0)">
      <path
        id="breasts-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      ></path>
    </g>
    <g transform="matrix(.82807 0 0 1 11.708 0)">
      <path
        id="breasts"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      ></path>
    </g>
    <g id="abs">
      <path
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M63.269 164.597H59.5c-1.722 0-3.117 1.027-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h3.769c1.721 0 3.117-1.027 3.117-2.294v-2.656c0-1.266-1.396-2.293-3.117-2.293zM63.27 172.62h-5.741c-1.722 0-3.117 1.027-3.117 2.294v2.655c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.655c0-1.267-1.395-2.294-3.117-2.294zM63.27 180.475h-5.741c-1.722 0-3.117 1.026-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.656c0-1.267-1.395-2.293-3.117-2.293zM72.495 164.597h3.769c1.721 0 3.117 1.027 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-3.769c-1.722 0-3.117-1.027-3.117-2.294v-2.656c0-1.266 1.395-2.293 3.117-2.293zM72.493 172.62h5.742c1.721 0 3.117 1.027 3.117 2.294v2.655c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.655c0-1.267 1.396-2.294 3.117-2.294zM72.493 180.475h5.742c1.721 0 3.117 1.026 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.656c0-1.267 1.396-2.293 3.117-2.293z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.9343 0 0 1 4.474 0)"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear" fill="#4B4B4B" fillRule="nonzero">
        <path
          d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-.426 29.127-21.59 26.123h-22.307c-21.87 2.768-22.043-13.548-22.043-26.123 0-12.575 9.831-22.699 22.043-22.699z"
          transform="matrix(.97017 0 0 .98659 -98.43 -1.454)"
        ></path>
        <path
          fillOpacity="0.99"
          d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.622 13.951 27.622 28.797l-2.293 15.895h-57.899v-15.895c0-16.077 12.895-29.02 28.911-29.02z"
          transform="matrix(.97017 0 0 .98659 -98.43 -1.454)"
        ></path>
      </g>
    )}
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M39.176 189.945c1.616 22.732 14.029 40.327 28.92 40.327 15.086 0 28.383-17.167 29.742-40.327H39.176z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.9343 0 0 1 4.474 0)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M97.865 189.941L69.117 194.4l-.242 35.777 2.698 15.679h32.945c.202-29.005-.135-38.803-6.653-55.915zM39.192 189.909l29.429 4.475v35.79l-2.745 15.679H33.007c-.209-29.102-.523-38.776 6.185-55.944z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.9343 0 0 1 4.474 0)"
      ></path>
    </g>
  </g>
);

// Endomorph Ectomorph
export const getHybridEnEcSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.401 -6.847)">
    <g id="legs" transform="matrix(.8863 0 0 1 7.742 0)">
      <g id="leg-left" transform="matrix(.97526 0 0 1 -103.841 15.658)">
        <path
          id="tibia-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-1.112-24.01-1.112-26.082v-10.717a6.984 6.984 0 016.98-6.98z"
          transform="translate(-.426 -.667)"
        ></path>
        <path
          id="thigh-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M191.234 175.194h7.531c1.941 0 7.246 3.553 7.286 3.837l-.72 48.92c0 1.729-.143 3.456-.426 5.162l-.926 5.564a27.538 27.538 0 01-3.213 9.063s-2.293 4.918-2.293 6.087c0 3.73.495 8.854-5.006 8.768h-4.452c-3.995 0-9.246.016-9.246-3.98 0-.862-.163-10.669-.399-11.843l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
          transform="translate(.852 -.667)"
        ></path>
        <g id="foot-left" transform="translate(-2.556) translate(.852 -.667)">
          <path
            id="color3"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M188.995 308.505h8.115c4.68 0 8.474 3.373 8.474 7.532s-3.794 7.531-8.474 7.531h-8.115c-4.679 0-8.474-3.372-8.474-7.531s3.795-7.532 8.474-7.532z"
          ></path>
          <path
            id="color31"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M183.327 311.254h19.451c1.549 0 2.806 1.618 2.806 3.616v4.729c0 1.997-1.257 3.616-2.806 3.616h-19.451c-1.549 0-2.806-1.619-2.806-3.616v-4.729c0-1.998 1.257-3.616 2.806-3.616z"
          ></path>
        </g>
      </g>
      <g id="leg-right" transform="matrix(.97526 0 0 1 -103.01 14.991)">
        <g
          id="foot-right"
          transform="translate(-33.012 .667) translate(.852 -.667)"
        >
          <path
            id="color32"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M188.995 308.505h8.115c4.68 0 8.474 3.373 8.474 7.532s-3.794 7.531-8.474 7.531h-8.115c-4.679 0-8.474-3.372-8.474-7.531s3.795-7.532 8.474-7.532z"
          ></path>
          <path
            id="color33"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M183.327 311.254h19.451c1.549 0 2.806 1.618 2.806 3.616v4.729c0 1.997-1.257 3.616-2.806 3.616h-19.451c-1.549 0-2.806-1.619-2.806-3.616v-4.729c0-1.998 1.257-3.616 2.806-3.616z"
          ></path>
        </g>
        <path
          id="tibia-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-1.112-24.01-1.112-26.082v-10.717a6.984 6.984 0 016.98-6.98z"
          transform="matrix(-1 0 0 1 352.135 0)"
        ></path>
        <path
          id="thigh-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M191.234 175.194h7.531c1.941 0 7.223 3.592 7.263 3.876l-1.016 33.337c.212 1.481.176 19-.107 20.706l-.926 5.564a27.538 27.538 0 01-3.213 9.063s-2.293 4.918-2.293 6.087c0 3.73.495 8.854-5.006 8.768h-4.452c-3.995 0-9.246.016-9.246-3.98 0-.862-.163-10.669-.399-11.843l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
          transform="matrix(-1 0 0 1 350.857 0)"
        ></path>
      </g>
    </g>
    <g transform="matrix(.76586 0 0 1 16.086 0)">
      <path
        id="deltoids"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M36.092 135.201c0-15.71 66.361-14.507 66.361 0l-2.528 15.532 2.528 39.455c0 15.71-16.829 5.312-34.487 5.312s-34.49 10.398-34.49-5.312l2.616-39.455v-15.532z"
      ></path>
      <g transform="matrix(.94371 0 0 1 3.826 0)">
        <path
          id="deltoids1"
          fill={colorsSkin.light}
          fillOpacity="0.99"
          fillRule="nonzero"
          d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532 2.528 39.455c0 15.71-16.829 5.312-34.487 5.312s-34.49 10.398-34.49-5.312l2.616-39.455v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
        ></path>
      </g>
    </g>
    <g transform="matrix(.88235 0 0 1 8.008 0)">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M67.925 170.441h1.023c16.943 0 21.489-8.861 24.27 3.017l.447 16.483c.572 2.443-11.261 29.167-24.717 29.167h-1.023c-8.563 0-25.529-25.77-24.734-29.167l.075-16.386c2.781-11.878 7.716-3.114 24.659-3.114z"
      ></path>
    </g>
    <g id="arms" transform="matrix(.8863 0 0 1 7.742 0)">
      <g id="arm-right" transform="matrix(.82307 0 0 1 13.177 0)">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M106.462 123.095c5.175-1.001 11.84 6.466 12.98 12.361 0 0 3.368 30.511 3.336 32.875-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-3.462-27.641-3.533-29.225-.195-4.355-1.768-17.469 2.126-18.222z"
          transform="matrix(-1 0 0 1 135.265 -1)"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
          transform="matrix(-1 0 0 1 135.265 -1)"
        ></path>
        <g id="hand-right" fill={colorsSkin.light} fillRule="nonzero">
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g
        id="arm-left"
        fillRule="nonzero"
        transform="matrix(.82307 0 0 1 12.049 0)"
      >
        <path
          id="bicep-left1"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.84 6.466 12.98 12.361 0 0 3.368 30.511 3.336 32.875-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-3.462-27.641-3.533-29.225-.195-4.355-1.768-17.469 2.126-18.222z"
        ></path>
        <path
          id="forearm-left1"
          fill={colorsSkin.light}
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
        ></path>
        <g id="hand-left" fill={colorsSkin.light}>
          <path d="M114.657 202.739l2.665-.015c5.109-.027 9.492 5.517 9.789 12.383l.265 6.1c.297 6.866-3.603 12.454-8.711 12.481l-2.666.015c-5.109.027-9.491-5.517-9.789-12.383l-.264-6.1c-.298-6.866 3.602-12.454 8.711-12.481z"></path>
          <path d="M113.998 220.089c1.111-4.367 5.03-6.578 8.752-4.939 3.723 1.639 5.839 6.508 4.728 10.874l-3.036 11.926c-1.111 4.366-5.03 6.577-8.752 4.938-3.722-1.639-5.839-6.507-4.728-10.874l3.036-11.925z"></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          d="M105.284 217.757c-.125-3.044 1.581-5.522 3.812-5.536 2.231-.014 4.141 2.443 4.266 5.487l.343 8.313c.126 3.044-1.581 5.523-3.811 5.537-2.231.013-4.141-2.443-4.267-5.487l-.343-8.314z"
        ></path>
      </g>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 .95926 18.421 4.647)">
      <path
        id="bust"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 .921 18.421 11.168)">
      <path
        id="breasts-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 .79053 18.421 28.365)">
      <path
        id="breasts"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      ></path>
    </g>
    <g transform="translate(65.978 182.619)">
      <path
        id="navel"
        fill={colorsSkin.strong}
        d="M3.426 1.376a1.262 1.262 0 00-2.522 0v2.347a1.261 1.261 0 002.522 0V1.376z"
      ></path>
    </g>
    <g transform="matrix(.72176 0 0 1 51.172 172.654)">
      <path
        id="belly"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M46.87 5.592C24.159.713.82 5.592.82 5.592.82 4.488 11.735.713 24.159.713S46.87 4.488 46.87 5.592z"
      ></path>
    </g>
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M39.689 189.941c-2.327 22.986 13.516 40.331 28.407 40.331 15.086 0 34.141-17.298 31.085-40.331H39.689z"
        transform="matrix(.7944 0 0 1 12.979 0) matrix(1.11777 0 0 1 -8.18 0)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M102.683 189.941L69.117 194.4l1.129 36.1c-.562 5.119-.507 10.387.391 15.505l31.128-.149c1.62-29.005 2.368-37.292.918-55.915zM36.184 189.941l32.437 4.443v35.79a105.94 105.94 0 01-.532 15.831l-30.947-.309c-1.402-29.085-2.22-38.436-.958-55.755z"
        transform="matrix(.7944 0 0 1 12.979 0)"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear">
        <path
          fill="#4B4B4B"
          fillRule="nonzero"
          d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-.426 29.127-21.59 26.123h-22.307c-21.87 2.768-22.043-13.548-22.043-26.123 0-12.575 9.831-22.699 22.043-22.699z"
          transform="translate(-69.456 17.547) scale(.80428) matrix(1 0 0 1.16222 0 -18.936)"
        ></path>
        <path
          fill="#4B4B4B"
          fillOpacity="0.99"
          fillRule="nonzero"
          d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.354 11.235 27.622 28.797l-.523 16.142-59.669-.247v-15.895c-.26-18.102 12.895-29.02 28.911-29.02z"
          transform="translate(-69.456 17.547) scale(.80428)"
        ></path>
      </g>
    )}
  </g>
);

// Mesomorph Endomorph
export const getHybridMEnSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.447 -9.517)">
    <g
      id="legs"
      fill={colorsSkin.light}
      fillRule="nonzero"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    >
      <g id="leg-left">
        <path
          id="tibia-left"
          d="M84.281 261.753h2.186a9.683 9.683 0 019.683 9.683l.001 25.561-.001 18.221 1.938 18.675c0 4.081-3.959 7.389-8.844 7.389h-2.061c-4.885 0-8.844-3.308-8.844-7.389v-27.775c0-1.791-.46-3.552-1.335-5.114a10.462 10.462 0 01-1.336-5.115v-3.82c0-2.051.252-4.094.749-6.084l.018-.072c.509-2.037.767-4.129.767-6.23v-10.851a7.079 7.079 0 017.079-7.079z"
        ></path>
        <path
          id="thigh-left"
          d="M87.205 193.658h5.579c3.139 0 5.061-5.636 6.197-2.71.22.564 1.264 8.718 1.344 9.318l3.103 25.285 1.019 19.313c0 1.751-.146 3.5-.436 5.227l-.947 5.632a27.685 27.685 0 01-3.287 9.189l-2.766 4.823a6.835 6.835 0 00-.905 3.399 6.832 6.832 0 01-6.832 6.832h-4.719a7.321 7.321 0 01-7.32-7.321c0-.88-.159-1.753-.469-2.577l-.992-2.638a22.857 22.857 0 01-1.006-3.497L73.26 256.5l-1.45-9.474a31.623 31.623 0 01-.363-4.771v-32.839c0-8.703 7.055-15.758 15.758-15.758z"
        ></path>
        <g id="foot-left">
          <path d="M84.906 326.02h8.305c4.788 0 8.67 3.416 8.67 7.63 0 4.215-3.882 7.631-8.67 7.631h-8.305c-4.788 0-8.67-3.416-8.67-7.631 0-4.214 3.882-7.63 8.67-7.63z"></path>
          <path d="M79.107 329.161H99.01c1.585 0 2.871 1.641 2.871 3.664v4.792c0 2.024-1.286 3.664-2.871 3.664H79.107c-1.585 0-2.871-1.64-2.871-3.664v-4.792c0-2.023 1.286-3.664 2.871-3.664z"></path>
        </g>
      </g>
      <g id="leg-right">
        <path
          id="tibia-right"
          d="M53.19 261.752h-2.186c-5.348 0-9.684 4.335-9.684 9.683v43.782l-1.937 18.675c0 4.081 3.959 7.389 8.843 7.389h2.062c4.884 0 8.844-3.308 8.844-7.389v-27.775c0-1.791.459-3.552 1.335-5.114a10.46 10.46 0 001.335-5.115v-3.82c0-2.051-.251-4.094-.748-6.084l-.018-.072a25.648 25.648 0 01-.767-6.23v-10.851a7.08 7.08 0 00-7.079-7.079z"
        ></path>
        <path
          id="thigh-right"
          d="M51.643 193.657s-14.498-4.786-14.498-1.635l-3.088 30.063-1.035 22.778c0 1.751.145 3.5.436 5.227l.946 5.632a27.709 27.709 0 003.288 9.189l2.766 4.823a6.838 6.838 0 01.905 3.399 6.832 6.832 0 006.832 6.832h4.719a7.32 7.32 0 007.32-7.32c0-.881.158-1.754.468-2.578l.993-2.638a22.857 22.857 0 001.006-3.497l1.507-7.433 1.451-9.474c.241-1.579.363-3.174.363-4.771v-34.218c0-7.941-6.438-14.379-14.379-14.379z"
        ></path>
        <g id="foot-right">
          <path d="M52.564 326.019H44.26c-4.788 0-8.67 3.416-8.67 7.63 0 4.215 3.882 7.631 8.67 7.631h8.304c4.789 0 8.67-3.416 8.67-7.631 0-4.214-3.881-7.63-8.67-7.63z"></path>
          <path d="M58.363 329.16H38.461c-1.586 0-2.871 1.641-2.871 3.664v4.792c0 2.024 1.285 3.664 2.871 3.664h19.902c1.586 0 2.871-1.64 2.871-3.664v-4.792c0-2.023-1.285-3.664-2.871-3.664z"></path>
        </g>
      </g>
    </g>
    <g transform="matrix(.85232 0 0 1 10.186 0)">
      <path
        id="deltoids-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M36.092 135.201c0-15.71 66.361-14.507 66.361 0l-2.528 15.532 5.425 39.452c0 15.71-19.726 5.315-37.384 5.315s-37.508 10.395-37.508-5.315l5.634-39.452v-15.532z"
      ></path>
      <g transform="matrix(.9408 0 0 1 4.02 0)">
        <path
          id="deltoids"
          fill={colorsSkin.light}
          fillOpacity="0.99"
          fillRule="nonzero"
          d="M67.966 106.844c1.352 0 2.699.074 4.034.218 6.331.683 12.392 2.936 17.415 6.301 7.754 5.194 13.038 13.035 13.038 21.838l-2.528 15.532 5.425 39.452c0 15.71-19.726 5.315-37.384 5.315s-37.508 10.395-37.508-5.315l5.634-39.452v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
        ></path>
      </g>
    </g>
    <g transform="matrix(.95634 0 0 1 2.97 0)">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l3.57 16.63c.572 2.443.406 5.104-.365 7.792-.752 2.622-2.08 5.268-3.863 7.759-5.27 7.365-14.51 13.372-24.565 13.372h-1.023c-8.563 0-16.712-4.418-22.32-10.321-2.314-2.434-4.194-5.121-5.494-7.854-1.784-3.754-2.472-7.595-1.677-10.992l4.832-16.386c2.781-11.878 7.716-3.114 24.659-3.114z"
      ></path>
    </g>
    <g transform="matrix(.78403 0 0 1 15.475 0)">
      <path
        id="bust"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="breasts-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      ></path>
    </g>
    <g transform="matrix(.8439 0 0 1 10.754 0)">
      <path
        id="breasts"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      ></path>
    </g>
    <g id="arms" transform="matrix(1.03227 0 0 1 -2.198 0)">
      <g id="arm-right" transform="translate(.88)">
        <path
          id="bicep-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M106.462 123.095c5.175-1.001 11.406 1.097 12.546 6.992 0 0 3.802 35.88 3.77 38.244-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-5.499-28.339-5.499-28.339.142-1.58.376-3.53.305-5.114-.195-4.355-.107-13.241 3.787-13.994z"
          transform="matrix(-1 0 0 1 135.389 0)"
        ></path>
        <path
          id="forearm-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
          transform="matrix(-1 0 0 1 135.389 0)"
        ></path>
        <g id="hand-right" fill={colorsSkin.light} fillRule="nonzero">
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g id="arm-left" fillRule="nonzero">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.406 1.097 12.546 6.992 0 0 3.802 35.88 3.77 38.244-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-5.499-28.339-5.499-28.339.142-1.58.376-3.53.305-5.114-.195-4.355-.107-13.241 3.787-13.994z"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
        ></path>
        <g id="hand-left" fill={colorsSkin.light}>
          <path d="M114.657 202.739l2.665-.015c5.109-.027 9.492 5.517 9.789 12.383l.265 6.1c.297 6.866-3.603 12.454-8.711 12.481l-2.666.015c-5.109.027-9.491-5.517-9.789-12.383l-.264-6.1c-.298-6.866 3.602-12.454 8.711-12.481z"></path>
          <path d="M113.998 220.089c1.111-4.367 5.03-6.578 8.752-4.939.675.297 1.297.7 1.856 1.187 2.528 2.201 3.782 6.112 2.872 9.687l-3.036 11.926c-1.111 4.366-5.03 6.577-8.752 4.938-3.722-1.639-5.839-6.507-4.728-10.874l3.036-11.925z"></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          d="M105.284 217.757c-.125-3.044 1.581-5.522 3.812-5.536 2.231-.014 4.141 2.443 4.266 5.487l.343 8.313c.126 3.044-1.581 5.523-3.811 5.537-2.231.013-4.141-2.443-4.267-5.487l-.343-8.314z"
        ></path>
      </g>
    </g>
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M39.176 189.945c1.616 22.732 14.029 40.327 28.92 40.327 15.086 0 28.383-17.167 29.742-40.327H39.176z"
        transform="matrix(1.03227 0 0 1 -2.198 0) matrix(1.05411 0 0 1.0001 -4.15 -.023)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M98.981 190.106L69.117 194.4l-.242 35.777 2.698 15.679h32.945c-.403-29.615-2.67-37.404-5.537-55.75zM37.145 189.941l31.476 4.443v35.79l-2.745 15.679H33.007c-.209-29.102 3.062-36.993 4.138-55.912z"
        transform="matrix(1.03227 0 0 1 -2.198 0)"
      ></path>
    </g>
    <g transform="matrix(1.0192 0 0 1.19104 -1.305 -23.535)">
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      ></path>
    </g>
    <g transform="matrix(.99762 0 0 1 .39 3.47)">
      <path
        id="bust1"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear">
        <path
          fill="#4F4F4F"
          fillOpacity="0.99"
          fillRule="nonzero"
          d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-10.108 15.532H45.384l-9.292-15.532c0-15.71 14.216-28.357 31.874-28.357z"
          transform="matrix(1.52218 0 0 1.09309 -34.703 -9.562) matrix(.70584 0 0 1 19.192 0)"
        ></path>
        <path
          fill="#4F4F4F"
          fillRule="nonzero"
          d="M56.05 114.065h24.095c13.464 0 24.52 9.799 24.305 22.085-.271 15.513-16.544 22.274-24.305 22.274H56.05c-7.384 0-24.565-7.185-24.302-22.179.216-12.286 10.839-22.18 24.302-22.18z"
          transform="matrix(1.52218 0 0 1.09309 -34.703 -9.562) matrix(.65715 0 0 1 22.866 0)"
        ></path>
      </g>
    )}
    <g transform="translate(65.478 183.954)">
      <path
        id="navel"
        fill={colorsSkin.strong}
        d="M3.426 1.376a1.262 1.262 0 00-2.522 0v2.347a1.261 1.261 0 002.522 0V1.376z"
      ></path>
    </g>
    <g transform="matrix(1.00002 0 0 1 44.037 171.989)">
      <path
        id="belly"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M46.87 5.592C24.159.713.82 5.592.82 5.592.82 4.488 11.735.713 24.159.713S46.87 4.488 46.87 5.592z"
      ></path>
    </g>
  </g>
);