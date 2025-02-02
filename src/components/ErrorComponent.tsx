export const ErrorComponent = ({ message }: { message: string }) => (
  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 border border-white/30 shadow-lg animate-fade-in flex items-center gap-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="120"
      height="120"
    >
      <linearGradient
        id="4UU4ptC_mBgYTIFHxQVZaa"
        x1="-308.751"
        x2="36.906"
        y1="-346.874"
        y2="49.567"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6a5acd" />
        <stop offset="1" stop-color="#5A70CD" />
      </linearGradient>
      <path
        fill="url(#4UU4ptC_mBgYTIFHxQVZaa)"
        d="M44.634,37.846L25.76,7.787c0,0-0.508-1.05-1.76-1.05s-1.76,1.05-1.76,1.05L3.366,37.846C3.366,37.846,3,38.337,3,39c0,1.105,0.895,2,2,2h38c1.105,0,2-0.895,2-2C45,38.337,44.634,37.846,44.634,37.846z"
      />
      <radialGradient
        id="4UU4ptC_mBgYTIFHxQVZab"
        cx="18.189"
        cy="16.781"
        r="22.363"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset=".531" stop-color="#fff" />
        <stop offset="1" stop-color="#fff" />
      </radialGradient>
      <path
        fill="url(#4UU4ptC_mBgYTIFHxQVZab)"
        d="M24.014,37c-0.732,0-1.336-0.222-1.812-0.666c-0.476-0.444-0.714-0.981-0.714-1.613 c0-0.659,0.24-1.199,0.721-1.62c0.48-0.421,1.082-0.631,1.805-0.631c0.732,0,1.332,0.213,1.798,0.638 c0.467,0.426,0.7,0.963,0.7,1.613c0,0.659-0.231,1.203-0.693,1.633S24.755,37,24.014,37z M26.236,17.721l-0.481,12.175 c-0.015,0.372-0.321,0.666-0.693,0.666h-2.179c-0.373,0-0.679-0.295-0.693-0.668L21.735,17.72c-0.015-0.393,0.3-0.72,0.693-0.72 h3.116C25.937,17,26.252,17.327,26.236,17.721z"
      />
    </svg>

    <div>
      <p className="text-red-600 font-semibold">{message}</p>
    </div>
  </div>
);
