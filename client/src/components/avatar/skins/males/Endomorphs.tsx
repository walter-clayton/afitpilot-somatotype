import { IColorSkin } from "../../variablesAvatar/VariableAvatar";

// Ectomorphic Endomorph
export const getEcEnSkin = (
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-104.044 -.646)">
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
      <g id="leg-right" transform="matrix(.8767 0 0 1 21.213 .582)">
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
      <g id="leg-left" transform="matrix(-.9169 0 0 1 338.062 .582)">
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
        transform="matrix(.86074 0 0 1 24.622 -.084)"
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
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.12932 0 0 1 -125.09 -7.583)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M216.802 177.154l-41.718 5.63 1.46 46.917h35.972c.268-14.102 9.265-46.597 4.286-52.547zM130.821 177.041l43.858 5.743v46.917h-38.06c-.267-14.102-10.626-36.738-5.798-52.66z"
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.12932 0 0 1 -125.09 -7.583)"
      ></path>
    </g>
  </g>
);

// Balanced Endomorph
export const getBEnSkin = (
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-105.407 -1.325)">
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
      <g id="leg-right" transform="matrix(.98793 0 0 1 2.173 .582)">
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
      <g id="leg-left" transform="matrix(-.9982 0 0 1 352.287 .582)">
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
        transform="matrix(.94439 0 0 1 9.937 -.084)"
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
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.20751 0 0 1 -138.69 -7.583)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M216.802 177.154l-41.718 5.63 1.46 46.917h35.972c.268-14.102 9.265-46.597 4.286-52.547zM130.821 177.041l43.858 5.743v46.917h-38.06c-.267-14.102-10.626-36.738-5.798-52.66z"
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.20751 0 0 1 -138.69 -7.583)"
      ></path>
    </g>
  </g>
);

// Mesomorphic Endomorph
export const getMEnSkin = (
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-105.981 -1.029)">
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
    <g id="legs">
      <g id="leg-right" transform="matrix(.98793 0 0 1 2.173 .582)">
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
      <g id="leg-left" transform="matrix(-.9982 0 0 1 352.287 .582)">
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
        d="M206.362 138.849c0-19.513-15.69-27.041-31.609-27.041-15.92 0-30.453 7.528-30.453 27.041l-3.521 38.108c0 19.514 18.054 31.043 33.974 31.043 15.919 0 34.341-11.531 34.341-31.044l-2.732-38.107z"
        transform="matrix(1.05625 0 0 1 -9.173 0)"
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
      <path
        id="abs-back"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M176.982 139.667h-4.666c-11.126 0-29.901 7.25-29.901 17.321 0 0-6.76 22.745-6.69 22.724l39.606.439c-.071-.059 39.769-.596 39.478-.746-.241-.124-5.486-22.417-5.486-22.417 0-10.071-21.215-17.321-32.341-17.321z"
        transform="matrix(.78241 0 0 1 39.372 2.916)"
      ></path>
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
        d="M216.802 177.041s-25.604.169-41.718.113c-16.215-.056-43.568-.224-44.263 0 1.623 17.749 29.016 32.272 43.965 32.272 15.145 0 40.652-14.302 42.016-32.385z"
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.20751 0 0 1 -138.69 -7.583)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M216.802 177.154l-41.718 5.63 1.46 46.917h35.972c.268-14.102 9.265-46.597 4.286-52.547zM130.821 177.041l43.858 5.743v46.917h-38.06c-.267-14.102-10.626-36.738-5.798-52.66z"
        transform="matrix(.695 0 0 1 126.127 7.498) matrix(1.20751 0 0 1 -138.69 -7.583)"
      ></path>
    </g>
  </g>
);