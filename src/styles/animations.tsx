import { keyframes } from "styled-components";

export const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const growBouncing = keyframes`
  from{ transform: scale(1, 1); }
  25% { transform: scale(9, 11); }
  50% { transform: scale(11, 9); }
  75% { transform: scale(9.5, 12); }
    to { transform: scale(10, 10); }
`;

export const grow = keyframes`
    from{ transform: scale(1, 1); }
    to { transform: scale(10, 10); }
`;
export const decreaseFrom10 = keyframes`
    from{ transform: scale(10, 10); }
    to { transform: scale(1, 1); }
`;

export const rotate180 = keyframes`
    
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`;
