import { IColorSkin } from "../../variablesAvatar/VariableAvatar";

// Mesomorph Ectomorph
export const getHybridMEcSkin = (
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-105.877 .045)">
    <g
      id="arms"
      fillRule="nonzero"
      transform="matrix(.86065 0 0 1 25.026 .582)"
    >
      <g id="arm-left">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          d="M214.969 114.213l4.565-4.565c3.4-3.11 8.07-2.969 9.749.295l5.58 10.851a14.02 14.02 0 011.326 3.992l1.09 6.183c.578 3.278.551 6.777-.081 10.345l-1.138 6.425c-.166.936-.25 1.865-.25 2.775v2.21c0 1.06-.268 2.17-.78 3.23-.691 1.429-.883 2.926-.852 4.347.116 5.457-2.898 10.806-6.071 12.12l-.056.023c-3.588 1.486-7.401-2.277-8.517-8.404l-1.935-5.88-3.437-12.305c-.931-3.331-1.19-6.965-.765-10.723l.604-5.33.532-5.346c.118-1.179-.163-2.265-.797-3.083-1.464-1.892-.929-4.998 1.233-7.16z"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          d="M227.659 138.035l.067.003c4.278.19 7.825 5.194 7.921 11.178l.725 44.928c.096 5.983-3.294 10.68-7.572 10.49l-.067-.003c-4.278-.19-7.824-5.194-7.921-11.177l-.724-44.928c-.097-5.984 3.293-10.68 7.571-10.491z"
        ></path>
        <g id="hand-left" fill={colorsSkin.light}>
          <path d="M225.166 185.911l2.814.203c5.393.39 9.844 6.342 9.941 13.294l.086 6.176c.097 6.952-4.197 12.271-9.59 11.881l-2.814-.204c-5.393-.39-9.843-6.342-9.94-13.294l-.087-6.175c-.097-6.952 4.197-12.271 9.59-11.881z"></path>
          <path
            id="color"
            d="M223.326 203.261c1.368-4.265 5.838-6.117 9.985-4.137 4.147 1.981 6.4 7.044 5.032 11.31l-3.736 11.649c-1.367 4.265-5.838 6.117-9.984 4.136-4.147-1.981-6.4-7.044-5.032-11.309l3.735-11.649z"
          ></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          d="M214.51 200.326c-.032-3.072 1.817-5.429 4.129-5.266 2.312.163 4.212 2.786 4.243 5.858l.085 8.39c.031 3.072-1.817 5.43-4.129 5.266-2.312-.163-4.212-2.786-4.243-5.858l-.085-8.39z"
        ></path>
      </g>
      <g id="arm-right">
        <path
          id="bicep-right"
          fill={colorsSkin.light}
          d="M134.71 114.213l-4.565-4.565c-3.4-3.11-8.071-2.969-9.749.295l-5.58 10.851a14.052 14.052 0 00-1.327 3.992l-1.09 6.183c-.578 3.278-.55 6.777.082 10.345l1.138 6.425c.166.936.249 1.865.249 2.775v2.21c0 1.06.268 2.17.781 3.23.69 1.429.882 2.926.852 4.347-.116 5.457 2.898 10.806 6.07 12.12l.056.023c3.588 1.486 7.402-2.277 8.518-8.404l1.934-5.88 3.438-12.305c.93-3.331 1.189-6.965.764-10.723l-.603-5.33-.532-5.346c-.118-1.179.163-2.265.796-3.083 1.464-1.892.929-4.998-1.232-7.16z"
        ></path>
        <path
          id="forearm-right"
          fill={colorsSkin.light}
          d="M122.016 138.035l-.067.003c-4.278.19-7.824 5.194-7.921 11.178l-.724 44.928c-.097 5.983 3.293 10.68 7.572 10.49l.066-.003c4.279-.19 7.825-5.194 7.922-11.177l.724-44.928c.097-5.984-3.293-10.68-7.572-10.491z"
        ></path>
        <g id="hand-right" fill={colorsSkin.light}>
          <path
            id="color3"
            d="M124.51 185.911l-2.814.203c-5.393.39-9.844 6.342-9.941 13.294l-.086 6.176c-.097 6.952 4.196 12.271 9.589 11.881l2.814-.204c3.418-.247 6.458-2.728 8.25-6.282 1.036-2.054 1.655-4.466 1.691-7.012l.086-6.175c.097-6.952-4.196-12.271-9.589-11.881z"
          ></path>
          <path
            id="color31"
            d="M126.349 203.261c-1.367-4.265-5.838-6.117-9.984-4.137-4.147 1.981-6.4 7.044-5.032 11.31l3.735 11.649c1.368 4.265 5.838 6.117 9.985 4.136 4.147-1.981 6.4-7.044 5.032-11.309l-3.736-11.649z"
          ></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          d="M135.166 200.326c.031-3.072-1.817-5.429-4.129-5.266-2.312.163-4.212 2.786-4.243 5.858l-.085 8.39c-.032 3.072 1.817 5.43 4.129 5.266 2.312-.163 4.212-2.786 4.243-5.858l.085-8.39z"
        ></path>
      </g>
    </g>
    <g
      id="legs"
      fillRule="nonzero"
      transform="matrix(.86065 0 0 1 25.026 .582)"
    >
      <g id="leg-right">
        <path
          id="tibia-right"
          fill={colorsSkin.light}
          d="M161.971 246.652h-2.196a9.472 9.472 0 00-9.472 9.472l-.001 24.595.001 17.613-1.894 18.05c0 3.945 3.869 7.142 8.642 7.142h2.016c4.773 0 8.642-3.197 8.642-7.142v-26.356c0-1.835.449-3.642 1.305-5.266a11.268 11.268 0 001.306-5.266v-3.465c0-2.031-.253-4.054-.75-6.023a24.576 24.576 0 01-.749-6.024v-10.48a6.851 6.851 0 00-6.85-6.85z"
        ></path>
        <path
          id="thigh-right"
          fill={colorsSkin.light}
          d="M160.127 175.223H147.22c-.633 0-1.146.513-1.146 1.146l-4.145 38.669v13.496c0 1.713.139 3.424.419 5.114l.934 5.673a27.913 27.913 0 003.214 9.145l2.707 4.814a6.835 6.835 0 01.877 3.35 6.831 6.831 0 006.831 6.83h4.298a7.315 7.315 0 007.314-7.314c0-.864.152-1.721.451-2.532l.976-2.642c.418-1.134.747-2.3.983-3.485l1.474-7.407 1.424-9.482c.231-1.546.348-3.105.348-4.668v-36.654c0-7.762-6.291-14.053-14.052-14.053z"
        ></path>
        <g id="foot-right" fill={colorsSkin.light}>
          <path
            id="color32"
            d="M161.873 308.505h-8.116c-4.68 0-8.473 3.384-8.473 7.558 0 4.174 3.793 7.557 8.473 7.557h8.116c4.679 0 8.473-3.383 8.473-7.557s-3.794-7.558-8.473-7.558z"
          ></path>
          <path
            id="color33"
            d="M167.54 315.333h-19.45c-1.549 0-2.806 1.121-2.806 2.503v3.274c0 1.382 1.257 2.502 2.806 2.502h19.45c1.55 0 2.806-1.12 2.806-2.502v-3.274c0-1.382-1.256-2.503-2.806-2.503z"
          ></path>
        </g>
      </g>
      <g id="leg-left">
        <path
          id="tibia-left"
          fill={colorsSkin.light}
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-.45-3.499-1.306-5.042a10.403 10.403 0 01-1.305-5.041v-3.779c0-2.023.246-4.038.732-6.002l.018-.071a25.57 25.57 0 00.749-6.147v-10.717a6.984 6.984 0 016.98-6.98z"
        ></path>
        <path
          id="thigh-left"
          fill={colorsSkin.light}
          d="M191.234 175.194h7.531a4.55 4.55 0 014.502 3.902l4.788 33.311c.212 1.481.319 2.976.319 4.472v11.072c0 1.729-.143 3.456-.426 5.162l-.926 5.564a27.538 27.538 0 01-3.213 9.063l-2.706 4.764a6.755 6.755 0 00-.881 3.336 6.755 6.755 0 01-6.755 6.755h-4.452a7.235 7.235 0 01-7.235-7.235c0-.862-.154-1.718-.455-2.525l-.972-2.611a22.64 22.64 0 01-.983-3.452l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
        ></path>
        <g id="foot-left" fill={colorsSkin.light}>
          <path
            id="color34"
            d="M188.995 308.505h8.115c4.68 0 8.474 3.373 8.474 7.532s-3.794 7.531-8.474 7.531h-8.115c-4.679 0-8.474-3.372-8.474-7.531s3.795-7.532 8.474-7.532z"
          ></path>
          <path
            id="color35"
            d="M183.327 311.254h19.451c1.549 0 2.806 1.618 2.806 3.616v4.729c0 1.997-1.257 3.616-2.806 3.616h-19.451c-1.549 0-2.806-1.619-2.806-3.616v-4.729c0-1.998 1.257-3.616 2.806-3.616z"
          ></path>
        </g>
      </g>
    </g>
    <g id="torso">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M206.362 138.849c0-19.513-15.69-27.041-31.609-27.041-15.92 0-30.453 7.528-30.453 27.041l1.628 33.818c0 19.514 12.905 35.333 28.825 35.333 15.919 0 28.825-11.375 28.825-30.888l2.784-38.263z"
        transform="matrix(.86065 0 0 1 25.026 .582)"
      ></path>
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M214.151 94.883h-79.544c-8.61 0-15.591 6.98-15.591 15.591 0 8.61 6.981 15.59 15.591 15.59h79.544c8.61 0 15.59-6.98 15.59-15.59 0-8.611-6.98-15.591-15.59-15.591z"
        transform="matrix(.86065 0 0 1 25.026 .582)"
      ></path>
      <path
        id="deltoids"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M216.797 118.579c0-18.088-18.911-32.751-42.237-32.751-23.328 0-42.238 14.663-42.238 32.751 0 18.087 18.91 32.75 42.238 32.75 8.693 0 16.773-2.037 23.49-5.528 11.305-5.877 18.747-15.876 18.747-27.222z"
        transform="matrix(.86065 0 0 1 25.026 .582)"
      ></path>
      <path
        id="abs-back"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M176.982 139.667h-4.666c-11.126 0-20.146 8.164-20.146 18.235 0 0 .162 11.954.232 11.933l22.929 10.316c-.071-.059 22.568-10.166 22.277-10.316-.241-.124.009.038 0 0l-.481-11.933c0-10.071-9.019-18.235-20.145-18.235z"
        transform="matrix(.86065 0 0 1 25.026 3.582)"
      ></path>
      <path
        id="torso-shadow"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M196.395 94.883h-43.672c-11.267 0-20.401 8.039-20.401 17.957v10.822c0 9.916 9.134 17.956 20.401 17.956h43.672c11.268 0 20.402-8.04 20.402-17.956V112.84c0-9.918-9.134-17.957-20.402-17.957z"
        transform="matrix(.86065 0 0 1 25.026 .582)"
      ></path>
      <path
        id="torso1"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M200.206 94.883h-51.293c-9.163 0-16.591 7.47-16.591 16.687v10.057c0 9.216 7.428 16.688 16.591 16.688h51.293c9.163 0 16.591-7.472 16.591-16.688V111.57c0-9.217-7.428-16.687-16.591-16.687z"
        transform="matrix(.86065 0 0 1 25.026 .582)"
      ></path>
      <g
        id="nipples"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        transform="matrix(.86065 0 0 1 25.026 .582)"
      >
        <path
          id="nipples1"
          d="M178.089 131.458c0-1.138-1.592-2.06-3.558-2.06-1.964 0-3.557.922-3.557 2.06v3.995c0 1.137 1.593 2.06 3.557 2.06 1.966 0 3.558-.923 3.558-2.06v-3.995z"
        ></path>
        <path
          id="color36"
          d="M151.932 133.158h-3.021c-1.204 0-2.181.882-2.181 1.97 0 1.086.977 1.968 2.181 1.968h3.021c1.204 0 2.18-.882 2.18-1.968 0-1.088-.976-1.97-2.18-1.97z"
        ></path>
        <path
          id="color37"
          d="M201.112 133.158h-3.02c-1.205 0-2.181.882-2.181 1.97 0 1.086.976 1.968 2.181 1.968h3.02c1.205 0 2.181-.882 2.181-1.968 0-1.088-.976-1.97-2.181-1.97z"
        ></path>
      </g>
      <g transform="matrix(.86065 0 0 1 25.026 2.582)">
        <g id="abs">
          <g id="abs-tablet" fill={colorsSkin.strong} fillRule="nonzero">
            <path d="M169.662 145.801h-5.35c-2.552 0-4.62 1.803-4.62 4.028 0 2.224 2.068 4.027 4.62 4.027h5.35c2.552 0 4.62-1.803 4.62-4.027 0-2.225-2.068-4.028-4.62-4.028zM169.662 155.377h-5.35c-2.552 0-4.62 1.804-4.62 4.027 0 2.225 2.068 4.029 4.62 4.029h5.35c2.552 0 4.62-1.804 4.62-4.029 0-2.223-2.068-4.027-4.62-4.027zM169.662 164.78h-5.35c-2.552 0-4.62 1.803-4.62 4.027 0 2.225 2.068 4.028 4.62 4.028h5.35c2.552 0 4.62-1.803 4.62-4.028 0-2.224-2.068-4.027-4.62-4.027zM186.094 145.801h-5.35c-2.552 0-4.62 1.803-4.62 4.027 0 2.225 2.068 4.028 4.62 4.028h5.35a5.18 5.18 0 001.801-.318c1.656-.612 2.818-2.042 2.818-3.71 0-2.224-2.068-4.027-4.619-4.027zM186.094 155.377h-5.35c-2.552 0-4.62 1.804-4.62 4.027 0 2.225 2.068 4.029 4.62 4.029h5.35c2.551 0 4.619-1.804 4.619-4.029 0-2.223-2.068-4.027-4.619-4.027zM186.094 164.779h-5.35c-2.552 0-4.62 1.803-4.62 4.028 0 2.224 2.068 4.027 4.62 4.027h5.35c2.551 0 4.619-1.803 4.619-4.027 0-2.225-2.068-4.028-4.619-4.028z"></path>
          </g>
        </g>
      </g>
    </g>
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M150.351 177.277c-1.518 0-2.983.244-4.37.69 1.623 17.749 13.856 31.459 28.805 31.459 15.145 0 27.5-14.066 28.864-32.149h-53.299z"
        transform="matrix(.86065 0 0 1 25.158 .582)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M203.332 179.475l-28.248 3.309v46.917h35.057c.268-14.102-4.272-33.823-6.809-50.226zM145.814 179.476l28.865 3.308v46.917h-34.085c-.267-14.102 2.683-33.822 5.22-50.225z"
        transform="matrix(.86065 0 0 1 25.158 .582)"
      ></path>
    </g>
  </g>
);

// Endomorph Ectomorph
export const getHybridEnEcSkin = (
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-105.789 -1.029)">
    <g id="arms">
      <g id="arm-left" transform="matrix(.78241 0 0 1 36.705 -3.418)">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M218.65 125.151c.118-1.179 8.954-18.472 10.633-15.208l3.014 5.032c.629 1.223 3.641 8.384 3.892 9.811l.185 6.144a29.395 29.395 0 010 10.292l-.314 6.517c-.166.936-.25 1.865-.25 2.775v2.21c0 1.06-.071 11.81-.029 11.745 0 0-14.493.094-14.655-.174l-1.04-19.084c-.931-3.331-1.786-18.831-1.786-18.831l.35-1.229z"
          transform="translate(-2.982 -.667)"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M227.659 138.035l.067.003c4.278.19 7.825 5.194 7.921 11.178l.725 44.928c.096 5.983-3.294 10.68-7.572 10.49l-.067-.003c-4.278-.19-7.824-5.194-7.921-11.177l-.724-44.928c-.097-5.984 3.293-10.68 7.571-10.491z"
          transform="translate(-2.982 -.667)"
        ></path>
        <g id="hand-left" transform="translate(-1.704 -.667)">
          <path
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M225.638 185.911l2.264.203c4.338.39 7.918 6.342 7.996 13.294l.069 6.176c.078 6.952-3.376 12.271-7.714 11.881l-2.263-.204c-4.244-.381-7.761-6.084-7.986-12.839a17.171 17.171 0 01-.01-.455l-.07-6.175c-.078-6.952 3.376-12.271 7.714-11.881z"
          ></path>
          <path
            id="color"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M224.158 203.261c1.1-4.265 4.696-6.117 8.032-4.137 3.336 1.981 5.148 7.044 4.048 11.31l-3.006 11.649c-1.099 4.265-4.696 6.117-8.031 4.136-3.336-1.981-5.148-7.044-4.048-11.309l3.005-11.649z"
          ></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M217.066 200.326c-.026-3.072 1.462-5.429 3.322-5.266 1.859.163 3.388 2.786 3.413 5.858l.068 8.39c.025 3.072-1.462 5.43-3.321 5.266-1.86-.163-3.388-2.786-3.413-5.858l-.069-8.39z"
          transform="translate(-1.704 -.667)"
        ></path>
      </g>
      <g id="arm-right" transform="matrix(-.78241 0 0 1 312.961 -3.813)">
        <path
          id="bicep-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M217.644 123.155c.118-1.179 12.592-12.265 14.271-9.001l2.948 6.64a14.02 14.02 0 011.326 3.992l.185 6.144a29.395 29.395 0 010 10.292l-.314 6.517c-.166.936-.25 1.865-.25 2.775v2.21c0 1.06-.071 11.81-.029 11.745 0 0-14.493.094-14.655-.174l-1.04-19.084c-.931-3.331-2.463-18.436-2.463-18.436l.021-3.62z"
          transform="translate(-4.687 -.667)"
        ></path>
        <path
          id="forearm-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M227.659 138.035l.067.003c4.278.19 7.825 5.194 7.921 11.178l.725 44.928c.096 5.983-3.294 10.68-7.572 10.49l-.067-.003c-4.278-.19-7.824-5.194-7.921-11.177l-.724-44.928c-.097-5.984 3.293-10.68 7.571-10.491z"
          transform="translate(-4.687 -.667)"
        ></path>
        <g id="hand-right">
          <path
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M226.465 185.911l2.264.203c4.338.39 7.918 6.342 7.996 13.294l.07 6.176c.078 6.952-3.376 12.271-7.715 11.881l-2.263-.204c-4.338-.39-7.918-6.342-7.996-13.294l-.07-6.175c-.078-6.952 3.376-12.271 7.714-11.881z"
            transform="translate(-3.409 -.667)"
          ></path>
          <path
            id="color1"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M224.985 203.261c1.1-4.265 4.696-6.117 8.032-4.137 3.336 1.981 5.148 7.044 4.048 11.31l-3.005 11.649c-1.1 4.265-4.697 6.117-8.032 4.136-3.336-1.981-5.148-7.044-4.047-11.309l3.004-11.649z"
            transform="translate(-4.687 -.667)"
          ></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M217.893 200.326c-.025-3.072 1.462-5.429 3.322-5.266 1.86.163 3.388 2.786 3.413 5.858l.068 8.39c.025 3.072-1.461 5.43-3.321 5.266-1.86-.163-3.388-2.786-3.413-5.858l-.069-8.39z"
          transform="translate(-4.687 -.667)"
        ></path>
      </g>
    </g>
    <g id="legs">
      <g id="leg-right" transform="matrix(.78241 0 0 1 37.705 .582)">
        <path
          id="tibia-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M167.979 258.608s-18.388.222-18.545.239l-.334 21.456.001 17.613-.692 18.466c0 3.945 3.869 7.142 8.642 7.142h2.016c4.773 0 8.642-3.197 8.642-7.142l.412-26.772c0-1.835-.142-28.971-.142-31.002z"
          transform="translate(.852 -.667)"
        ></path>
        <path
          id="thigh-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M175.646 197.75c-.186-.214 29.072-.506 29.112-.222 0 0 1.981 15.215.825 31.23-1.098 15.218-5.328 31.278-5.572 31.284-3.046.073-12.537-.055-18.337.038-.032.001-1.724-6.561-3.472-14.952-2.535-12.17-2.662-15.038-2.617-16.37.467-13.905-.013-31.115.061-31.008z"
          transform="matrix(-1 0 0 1 350.484 -.943)"
        ></path>
        <g id="foot-right" transform="translate(.852 -.667)">
          <path
            id="color3"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M161.873 308.505h-8.116c-4.68 0-8.473 3.384-8.473 7.558 0 4.174 3.793 7.557 8.473 7.557h8.116c4.679 0 8.473-3.383 8.473-7.557s-3.794-7.558-8.473-7.558z"
          ></path>
          <path
            id="color31"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M167.54 315.333h-19.45c-1.549 0-2.806 1.121-2.806 2.503v3.274c0 1.382 1.257 2.502 2.806 2.502h19.45c1.55 0 2.806-1.12 2.806-2.502v-3.274c0-1.382-1.256-2.503-2.806-2.503z"
          ></path>
        </g>
      </g>
      <g id="leg-left" transform="matrix(-.78241 0 0 1 314.533 .582)">
        <path
          id="tibia-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M167.979 258.608s-18.388.222-18.545.239l-.334 21.456.001 17.613-.692 18.466c0 3.945 3.869 7.142 8.642 7.142h2.016c4.773 0 8.642-3.197 8.642-7.142l.412-26.772c0-1.835-.142-28.971-.142-31.002z"
          transform="translate(.852 -.667)"
        ></path>
        <path
          id="thigh-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M175.646 197.75c-.276-.045 29.072-.506 29.112-.222 0 0 1.539 15.402.424 30.915-1.132 15.739-4.919 31.593-5.171 31.599-3.046.073-12.528.026-18.346-.006-.002 0-1.277-7.399-2.558-15.101-1.174-7.068-2.353-14.392-2.556-16.492-1.488-15.42-.905-30.693-.905-30.693z"
          transform="matrix(-1 0 0 1 350.484 -.943)"
        ></path>
        <g id="foot-left" transform="translate(.852 -.667)">
          <path
            id="color32"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M161.873 308.505h-8.116c-4.68 0-8.473 3.384-8.473 7.558 0 4.174 3.793 7.557 8.473 7.557h8.116c4.679 0 8.473-3.383 8.473-7.557s-3.794-7.558-8.473-7.558z"
          ></path>
          <path
            id="color33"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M167.54 315.333h-19.45c-1.549 0-2.806 1.121-2.806 2.503v3.274c0 1.382 1.257 2.502 2.806 2.502h19.45c1.55 0 2.806-1.12 2.806-2.502v-3.274c0-1.382-1.256-2.503-2.806-2.503z"
          ></path>
        </g>
      </g>
    </g>
    <g id="torso">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M206.362 138.849c0-19.513-15.69-27.041-31.609-27.041-15.92 0-30.453 7.528-30.453 27.041l-8.159 44.302c0 19.514 22.692 24.849 38.612 24.849 15.919 0 40.206-5.336 40.206-24.849l-8.597-44.302z"
        transform="matrix(.78241 0 0 1 38.372 -.084)"
      ></path>
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M214.151 94.883h-79.544c-8.61 0-15.591 6.98-15.591 15.591 0 8.61 6.981 9.686 15.591 9.686l79.544.991c8.61 0 15.59-2.067 15.59-10.677 0-8.611-6.98-15.591-15.59-15.591z"
        transform="matrix(.78241 0 0 1 39.372 -.084)"
      ></path>
      <g transform="matrix(.78241 0 0 1 39.372 2.916)">
        <path
          id="abs-back"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M176.982 139.667h-4.666c-11.126 0-23.907 7.166-23.907 17.237 0 0-3.345 22.593-3.275 22.572l30.197.675c-.071-.059 31.899-.593 31.608-.743-.241-.124-4.213-22.504-4.213-22.504 0-10.071-14.618-17.237-25.744-17.237z"
        ></path>
      </g>
      <path
        id="torso-shadow"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M196.395 94.883h-43.672c-11.267 0-20.401 8.039-20.401 17.957v10.822c0 9.916 9.134 14.367 20.401 14.367h43.672c2.421 0 4.743-.205 6.898-.626 7.873-1.539 13.504-5.956 13.504-13.741V112.84c0-9.918-9.134-17.957-20.402-17.957z"
        transform="matrix(.71233 0 0 1 51.605 -.084)"
      ></path>
      <path
        id="torso1"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M200.206 94.883h-51.293c-9.163 0-16.591 7.47-16.591 16.687v10.057c0 9.216 7.428 13.5 16.591 13.5h51.293c9.163 0 16.591-4.284 16.591-13.5V111.57c0-9.217-7.428-16.687-16.591-16.687z"
        transform="matrix(.71233 0 0 1 51.605 -.084)"
      ></path>
      <g
        id="nipples"
        transform="matrix(.78241 0 0 1 38.705 .582) translate(.852 -.667)"
      >
        <path
          id="nipples1"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M178.089 127.458c0-1.138-1.592-2.06-3.558-2.06-1.964 0-3.557.922-3.557 2.06v3.995c0 1.137 1.593 2.06 3.557 2.06 1.966 0 3.558-.923 3.558-2.06v-3.995z"
        ></path>
        <path
          id="color34"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M151.932 129.158h-3.021c-1.204 0-2.181.882-2.181 1.97 0 1.086.977 1.968 2.181 1.968h3.021c1.204 0 2.18-.882 2.18-1.968 0-1.088-.976-1.97-2.18-1.97z"
        ></path>
        <path
          id="color35"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M201.112 129.158h-3.02c-1.205 0-2.181.882-2.181 1.97 0 1.086.976 1.968 2.181 1.968h3.02c1.205 0 2.181-.882 2.181-1.968 0-1.088-.976-1.97-2.181-1.97z"
        ></path>
      </g>
    </g>
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M216.802 177.041s-25.604.169-41.718.113c-16.215-.056-43.568-.224-44.263 0 1.623 17.749 29.016 32.272 43.965 32.272 15.145 0 40.652-14.302 42.016-32.385z"
        transform="matrix(.695 0 0 1 126.127 7.498) translate(-102.599 -7.583)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M216.802 177.154l-41.718 5.63 1.46 46.917h35.972c.268-14.102 9.265-46.597 4.286-52.547zM130.821 177.041l43.858 5.743v46.917h-38.06c-.267-14.102-10.626-36.738-5.798-52.66z"
        transform="matrix(.695 0 0 1 126.127 7.498) translate(-102.599 -7.583)"
      ></path>
    </g>
  </g>
);

// Mesomorph Endomorph
export const getHybridMEnSkin = (
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-105.792 .806)">
    <g id="arms" transform="matrix(1.35324 0 0 1 -63.083 0)">
      <g id="arm-left" transform="matrix(.82075 0 0 1 28.45 -3.418)">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M218.65 125.151c.118-1.179 8.954-18.472 10.633-15.208l3.014 5.032c.629 1.223 3.641 8.384 3.892 9.811l.185 6.144a29.395 29.395 0 010 10.292l-.314 6.517c-.166.936-.25 1.865-.25 2.775v2.21c0 1.06-.071 11.81-.029 11.745 0 0-14.493.094-14.655-.174l-1.04-19.084c-.931-3.331-1.786-18.831-1.786-18.831l.35-1.229z"
          transform="translate(-2.982 -.667)"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M227.659 138.035l.067.003c4.278.19 7.825 5.194 7.921 11.178l.725 44.928c.096 5.983-3.294 10.68-7.572 10.49l-.067-.003c-4.278-.19-7.824-5.194-7.921-11.177l-.724-44.928c-.097-5.984 3.293-10.68 7.571-10.491z"
          transform="translate(-2.982 -.667)"
        ></path>
        <g id="hand-left" transform="translate(-1.704 -.667)">
          <path
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M225.638 185.911l2.264.203c4.338.39 7.918 6.342 7.996 13.294l.069 6.176c.078 6.952-3.376 12.271-7.714 11.881l-2.263-.204c-4.244-.381-7.761-6.084-7.986-12.839a17.171 17.171 0 01-.01-.455l-.07-6.175c-.078-6.952 3.376-12.271 7.714-11.881z"
          ></path>
          <path
            id="color"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M224.158 203.261c1.1-4.265 4.696-6.117 8.032-4.137 3.336 1.981 5.148 7.044 4.048 11.31l-3.006 11.649c-1.099 4.265-4.696 6.117-8.031 4.136-3.336-1.981-5.148-7.044-4.048-11.309l3.005-11.649z"
          ></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M217.066 200.326c-.026-3.072 1.462-5.429 3.322-5.266 1.859.163 3.388 2.786 3.413 5.858l.068 8.39c.025 3.072-1.462 5.43-3.321 5.266-1.86-.163-3.388-2.786-3.413-5.858l-.069-8.39z"
          transform="translate(-1.704 -.667)"
        ></path>
      </g>
      <g id="arm-right" transform="matrix(-.78241 0 0 1 314.439 -3.813)">
        <path
          id="bicep-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M217.644 123.155c.118-1.179 12.592-12.265 14.271-9.001l2.948 6.64a14.02 14.02 0 011.326 3.992l.185 6.144a29.395 29.395 0 010 10.292l-.314 6.517c-.166.936-.25 1.865-.25 2.775v2.21c0 1.06-.071 11.81-.029 11.745 0 0-14.493.094-14.655-.174l-1.04-19.084c-.931-3.331-2.463-18.436-2.463-18.436l.021-3.62z"
          transform="translate(-4.687 -.667)"
        ></path>
        <path
          id="forearm-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M227.659 138.035l.067.003c4.278.19 7.825 5.194 7.921 11.178l.725 44.928c.096 5.983-3.294 10.68-7.572 10.49l-.067-.003c-4.278-.19-7.824-5.194-7.921-11.177l-.724-44.928c-.097-5.984 3.293-10.68 7.571-10.491z"
          transform="translate(-4.687 -.667)"
        ></path>
        <g id="hand-right">
          <path
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M226.465 185.911l2.264.203c4.338.39 7.918 6.342 7.996 13.294l.07 6.176c.078 6.952-3.376 12.271-7.715 11.881l-2.263-.204c-4.338-.39-7.918-6.342-7.996-13.294l-.07-6.175c-.078-6.952 3.376-12.271 7.714-11.881z"
            transform="translate(-3.409 -.667)"
          ></path>
          <path
            id="color1"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M224.985 203.261c1.1-4.265 4.696-6.117 8.032-4.137 3.336 1.981 5.148 7.044 4.048 11.31l-3.005 11.649c-1.1 4.265-4.697 6.117-8.032 4.136-3.336-1.981-5.148-7.044-4.047-11.309l3.004-11.649z"
            transform="translate(-4.687 -.667)"
          ></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M217.893 200.326c-.025-3.072 1.462-5.429 3.322-5.266 1.86.163 3.388 2.786 3.413 5.858l.068 8.39c.025 3.072-1.461 5.43-3.321 5.266-1.86-.163-3.388-2.786-3.413-5.858l-.069-8.39z"
          transform="translate(-4.687 -.667)"
        ></path>
      </g>
    </g>
    <g id="legs" fillRule="nonzero" transform="matrix(1.0395 0 0 1 -6.24 0)">
      <g id="leg-right">
        <path
          id="tibia-right"
          fill={colorsSkin.light}
          d="M161.971 246.652h-2.196a9.472 9.472 0 00-9.472 9.472l-.001 24.595.001 17.613-1.894 18.05c0 3.945 3.869 7.142 8.642 7.142h2.016c4.773 0 8.642-3.197 8.642-7.142v-26.356c0-1.835.449-3.642 1.305-5.266a11.268 11.268 0 001.306-5.266v-3.465c0-2.031-.253-4.054-.75-6.023a24.576 24.576 0 01-.749-6.024v-10.48a6.851 6.851 0 00-6.85-6.85z"
        ></path>
        <path
          id="thigh-right"
          fill={colorsSkin.light}
          d="M160.127 175.223H147.22c-.633 0-1.146.513-1.146 1.146l-4.145 38.669v13.496c0 1.713.139 3.424.419 5.114l.934 5.673a27.913 27.913 0 003.214 9.145l2.707 4.814a6.835 6.835 0 01.877 3.35 6.831 6.831 0 006.831 6.83h4.298a7.315 7.315 0 007.314-7.314c0-.864.152-1.721.451-2.532l.976-2.642c.418-1.134.747-2.3.983-3.485l1.474-7.407 1.424-9.482c.231-1.546.348-3.105.348-4.668v-36.654c0-7.762-6.291-14.053-14.052-14.053z"
        ></path>
        <g id="foot-right" fill={colorsSkin.light}>
          <path
            id="color3"
            d="M161.873 308.505h-8.116c-4.68 0-8.473 3.384-8.473 7.558 0 4.174 3.793 7.557 8.473 7.557h8.116c4.679 0 8.473-3.383 8.473-7.557s-3.794-7.558-8.473-7.558z"
          ></path>
          <path
            id="color31"
            d="M167.54 315.333h-19.45c-1.549 0-2.806 1.121-2.806 2.503v3.274c0 1.382 1.257 2.502 2.806 2.502h19.45c1.55 0 2.806-1.12 2.806-2.502v-3.274c0-1.382-1.256-2.503-2.806-2.503z"
          ></path>
        </g>
      </g>
      <g id="leg-left">
        <path
          id="tibia-left"
          fill={colorsSkin.light}
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-.45-3.499-1.306-5.042a10.403 10.403 0 01-1.305-5.041v-3.779c0-2.023.246-4.038.732-6.002l.018-.071a25.57 25.57 0 00.749-6.147v-10.717a6.984 6.984 0 016.98-6.98z"
        ></path>
        <path
          id="thigh-left"
          fill={colorsSkin.light}
          d="M191.234 175.194h7.531a4.55 4.55 0 014.502 3.902l4.788 33.311c.212 1.481.319 2.976.319 4.472v11.072c0 1.729-.143 3.456-.426 5.162l-.926 5.564a27.538 27.538 0 01-3.213 9.063l-2.706 4.764a6.755 6.755 0 00-.881 3.336 6.755 6.755 0 01-6.755 6.755h-4.452a7.235 7.235 0 01-7.235-7.235c0-.862-.154-1.718-.455-2.525l-.972-2.611a22.64 22.64 0 01-.983-3.452l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
        ></path>
        <g id="foot-left" fill={colorsSkin.light}>
          <path
            id="color32"
            d="M188.995 308.505h8.115c4.68 0 8.474 3.373 8.474 7.532s-3.794 7.531-8.474 7.531h-8.115c-4.679 0-8.474-3.372-8.474-7.531s3.795-7.532 8.474-7.532z"
          ></path>
          <path
            id="color33"
            d="M183.327 311.254h19.451c1.549 0 2.806 1.618 2.806 3.616v4.729c0 1.997-1.257 3.616-2.806 3.616h-19.451c-1.549 0-2.806-1.619-2.806-3.616v-4.729c0-1.998 1.257-3.616 2.806-3.616z"
          ></path>
        </g>
      </g>
    </g>
    <g id="torso">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M206.362 138.849c0-19.513-15.69-27.041-31.609-27.041-15.92 0-30.453 7.528-30.453 27.041l-3.521 38.108c0 19.514 18.054 31.043 33.974 31.043 15.919 0 34.341-11.531 34.341-31.044l-2.732-38.107z"
        transform="matrix(1.01768 0 0 1 -2.426 0)"
      ></path>
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M214.151 94.883h-79.544c-8.61 0-15.591 6.98-15.591 15.591 0 8.61 6.981 15.59 15.591 15.59h79.544c8.61 0 15.59-6.98 15.59-15.59 0-8.611-6.98-15.591-15.59-15.591z"
        transform="matrix(1.05625 0 0 1 -9.173 0)"
      ></path>
      <path
        id="deltoids"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M216.797 118.579c0-18.088-18.911-32.751-42.237-32.751-23.328 0-42.238 14.663-42.238 32.751 0 18.087 18.91 32.75 42.238 32.75 8.693 0 16.773-2.037 23.49-5.528 11.305-5.877 18.747-15.876 18.747-27.222z"
        transform="matrix(1.05625 0 0 1 -9.173 0)"
      ></path>
      <g transform="matrix(.67895 0 0 1 57.506 2.916)">
        <path
          id="abs-back"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M176.982 139.667h-4.666c-11.126 0-29.901 7.25-29.901 17.321 0 0-6.76 22.745-6.69 22.724l39.606.439c-.071-.059 39.769-.596 39.478-.746-.241-.124-5.486-22.417-5.486-22.417 0-10.071-21.215-17.321-32.341-17.321z"
        ></path>
      </g>
      <path
        id="torso-shadow"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M196.395 94.883h-43.672c-11.267 0-20.401 8.039-20.401 17.957v10.822c0 9.916 9.134 17.956 20.401 17.956h43.672c11.268 0 20.402-8.04 20.402-17.956V112.84c0-9.918-9.134-17.957-20.402-17.957z"
        transform="matrix(1.05625 0 0 1 -9.173 0)"
      ></path>
      <path
        id="torso1"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M200.206 94.883h-51.293c-9.163 0-16.591 7.47-16.591 16.687v10.057c0 9.216 7.428 16.688 16.591 16.688h51.293c9.163 0 16.591-7.472 16.591-16.688V111.57c0-9.217-7.428-16.687-16.591-16.687z"
        transform="matrix(1.05625 0 0 1 -9.173 0)"
      ></path>
      <g
        id="nipples"
        fill={colorsSkin.strong}
        fillRule="nonzero"
        transform="matrix(1.05625 0 0 1 -9.173 0)"
      >
        <path
          id="nipples1"
          d="M178.089 131.458c0-1.138-1.592-2.06-3.558-2.06-1.964 0-3.557.922-3.557 2.06v3.995c0 1.137 1.593 2.06 3.557 2.06 1.966 0 3.558-.923 3.558-2.06v-3.995z"
        ></path>
        <path
          id="color34"
          d="M151.932 133.158h-3.021c-1.204 0-2.181.882-2.181 1.97 0 1.086.977 1.968 2.181 1.968h3.021c1.204 0 2.18-.882 2.18-1.968 0-1.088-.976-1.97-2.18-1.97z"
        ></path>
        <path
          id="color35"
          d="M201.112 133.158h-3.02c-1.205 0-2.181.882-2.181 1.97 0 1.086.976 1.968 2.181 1.968h3.02c1.205 0 2.181-.882 2.181-1.968 0-1.088-.976-1.97-2.181-1.97z"
        ></path>
      </g>
    </g>
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M217.465 177.041s-26.267.169-42.381.113c-16.215-.056-44.241-.311-44.936-.087 1.623 17.749 29.689 32.359 44.638 32.359 15.145 0 41.315-14.302 42.679-32.385z"
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.14563 0 0 1 -127.928 -7.583)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M217.461 177.041l-42.377 5.743.193 46.917h43.602c.268-14.102 3.561-46.71-1.418-52.66zM130.148 177.067l44.531 5.717v46.917h-45.41c-.267-14.102-3.949-36.712.879-52.634z"
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.14563 0 0 1 -127.928 -7.583)"
      ></path>
    </g>
  </g>
);