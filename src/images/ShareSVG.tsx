const ShareSVG : React.FC<{color?: string}> = ({color}) => (
    <svg 
    viewBox="0 0 16 16" 
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    fill={color}
    >
        <path
        d="M8.47298 1.17643C8.36435 1.06744 8.21406 1 8.04802 1C7.88694 1 7.74068 1.06348 7.6329 1.16679L7.62376 1.17574L4.42376 4.37574C4.18944 4.61005 4.18944 4.98995 4.42376 5.22426C4.65807 5.45858 5.03797 5.45858 5.27229 5.22426L7.44802 3.04853V10.4C7.44802 10.7314 7.71665 11 8.04802 11C8.3794 11 8.64802 10.7314 8.64802 10.4V3.04853L10.8238 5.22426C11.0581 5.45858 11.438 5.45858 11.6723 5.22426C11.9066 4.98995 11.9066 4.61005 11.6723 4.37574L8.47298 1.17643Z" fill="inherit"></path><path d="M3.04802 8C3.04802 7.66863 2.77939 7.4 2.44802 7.4C2.11665 7.4 1.84802 7.66863 1.84802 8V12.8C1.84802 13.3835 2.07981 13.9431 2.49239 14.3556C2.90497 14.7682 3.46455 15 4.04802 15H12.048C12.6315 15 13.1911 14.7682 13.6037 14.3556C14.0162 13.9431 14.248 13.3835 14.248 12.8V8C14.248 7.66863 13.9794 7.4 13.648 7.4C13.3167 7.4 13.048 7.66863 13.048 8V12.8C13.048 13.0652 12.9427 13.3196 12.7551 13.5071C12.5676 13.6946 12.3132 13.8 12.048 13.8H4.04802C3.78281 13.8 3.52845 13.6946 3.34092 13.5071C3.15338 13.3196 3.04802 13.0652 3.04802 12.8V8Z" 
        fill={color}
        >
        </path>
    </svg>
);
  
  export default ShareSVG;