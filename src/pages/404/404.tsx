import { MainContent } from '../404/styled';
import { Button } from '../../theme/GlobalStyles';
import { useNavigate } from 'react-router-dom';
export const Page404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <MainContent>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="137.000000pt"
        viewBox="0 0 300.000000 137.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,137.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M1020 863 c-18 -20 -41 -54 -50 -76 -10 -22 -29 -49 -42 -61 -34 -30
-57 -85 -54 -130 4 -45 20 -58 64 -51 38 7 66 -9 94 -55 19 -31 21 -32 69 -26
27 4 55 9 63 12 20 8 76 98 76 123 0 28 -28 83 -39 76 -15 -8 -21 23 -21 104
0 66 -3 81 -21 97 -15 14 -20 15 -17 4 2 -11 -8 -16 -38 -18 -38 -3 -45 -8
-78 -58 -20 -29 -41 -54 -47 -54 -14 0 -12 3 35 73 34 50 43 57 72 57 18 0 36
5 39 10 4 6 -10 10 -33 10 -33 0 -45 -6 -72 -37z m150 -113 c0 -67 -4 -110
-10 -110 -6 0 -10 43 -10 110 0 67 4 110 10 110 6 0 10 -43 10 -110z m-40 -8
c0 -51 5 -102 10 -112 8 -15 5 -27 -14 -54 l-24 -36 -20 32 c-21 32 -21 33 -1
64 27 44 21 100 -14 130 l-26 22 20 26 c13 17 29 25 45 24 24 -2 24 -4 24 -96z
m-66 -49 c-6 -49 -8 -51 -41 -55 -18 -2 -35 -2 -38 0 -5 6 38 72 48 72 11 0 9
-8 -10 -36 -16 -25 -16 -26 3 -22 15 3 19 13 20 48 2 64 3 65 14 54 5 -5 7
-32 4 -61z m-97 40 c0 -10 -13 -35 -29 -57 -34 -47 -38 -96 -8 -96 11 0 20 -4
20 -10 0 -5 -13 -10 -30 -10 -28 0 -30 2 -30 40 0 30 10 55 36 95 20 30 38 55
39 55 1 0 2 -8 2 -17z m13 -138 c-11 -13 -6 -15 33 -15 46 0 46 0 49 -37 3
-35 6 -38 36 -41 48 -5 39 -24 -10 -20 -43 3 -43 3 -40 41 3 36 2 37 -33 37
-26 0 -42 7 -56 23 -33 39 -20 83 14 47 15 -17 16 -24 7 -35z m230 10 c0 -40
-2 -45 -23 -45 -20 0 -23 -4 -19 -35 3 -21 0 -35 -7 -35 -6 0 -11 19 -11 45 0
38 3 45 20 45 16 0 20 7 20 35 0 19 5 35 10 35 6 0 10 -20 10 -45z"
          />
          <path
            d="M1954 892 c-6 -4 -46 -56 -89 -116 -69 -96 -79 -115 -83 -160 -4 -47
-2 -53 22 -66 15 -7 44 -14 66 -15 58 -3 60 -3 60 -24 0 -60 148 -66 158 -6 2
11 14 31 27 45 21 22 22 30 15 69 -4 24 -15 48 -24 53 -13 7 -16 27 -16 106 0
63 -4 102 -12 110 -13 13 -106 16 -124 4z m116 -127 c0 -108 1 -115 20 -115
17 0 20 -7 20 -45 0 -38 -3 -45 -20 -45 -17 0 -20 -7 -20 -40 l0 -40 -60 0
-60 0 0 40 0 40 -75 0 -75 0 0 43 c0 38 10 58 80 160 l81 117 54 0 55 0 0
-115z"
          />
          <path
            d="M1964 848 c-11 -13 -43 -57 -70 -98 -27 -41 -55 -81 -61 -88 -7 -7
-13 -19 -13 -27 0 -7 6 -16 13 -18 10 -4 10 -6 0 -6 -7 -1 -13 -8 -13 -17 0
-9 8 -14 18 -13 9 1 43 1 75 0 l57 -1 0 -40 0 -40 41 0 c40 0 41 1 36 28 -6
32 0 46 26 55 25 9 23 57 -3 57 -16 0 -20 7 -20 35 0 21 -5 35 -12 35 -9 0
-10 3 -2 8 6 4 12 37 12 75 1 65 0 67 -23 67 -14 0 -25 -6 -26 -12 0 -7 -4 -5
-8 5 -6 17 -8 16 -27 -5z m61 -68 c-3 -4 -13 -10 -23 -12 -12 -4 -18 1 -19 14
-1 10 2 16 8 13 5 -4 9 -1 9 6 0 8 4 8 15 -1 8 -7 13 -16 10 -20z m-65 -19 c0
-5 7 -17 16 -25 10 -10 11 -16 3 -16 -8 0 -10 -11 -7 -32 7 -42 1 -58 -18 -51
-8 3 -14 -1 -14 -8 0 -10 -3 -10 -11 -2 -6 6 -18 9 -25 6 -18 -7 -18 21 -1 39
28 28 47 66 41 82 -3 9 -1 16 5 16 6 0 11 -4 11 -9z m83 -151 c5 -18 3 -18
-19 -3 -15 9 -24 11 -24 4 0 -6 7 -11 15 -11 8 0 15 -4 15 -9 0 -5 -11 -8 -25
-8 -28 0 -33 18 -10 41 19 18 41 12 48 -14z m-23 -50 c12 -22 -3 -27 -30 -10
-13 9 -13 11 0 20 19 13 18 13 30 -10z"
          />
          <path d="M1930 681 c-13 -26 -13 -31 5 -31 9 0 15 9 15 25 0 30 -6 32 -20 6z" />
          <path
            d="M1415 877 c-36 -20 -54 -52 -66 -121 -26 -140 16 -254 102 -280 121
-37 212 42 208 179 -1 39 -2 38 -10 -13 -19 -113 -53 -152 -137 -159 -93 -8
-142 51 -150 177 -5 93 10 154 49 193 33 33 34 41 4 24z"
          />
          <path
            d="M1439 855 c-38 -21 -59 -82 -59 -170 0 -91 21 -150 61 -170 60 -32
145 -10 169 44 6 14 13 48 16 76 l4 50 -17 -57 c-27 -86 -48 -108 -103 -108
-59 0 -85 19 -105 79 -31 93 -10 200 49 246 34 27 26 32 -15 10z"
          />
          <path
            d="M1465 800 c-26 -29 -28 -184 -2 -223 19 -30 43 -34 73 -13 16 12 19
28 21 114 2 87 0 102 -18 121 -25 26 -51 27 -74 1z m70 -17 c25 -67 11 -205
-22 -217 -35 -14 -48 19 -48 120 0 81 3 98 18 109 22 16 43 11 52 -12z"
          />
          <path
            d="M1486 774 c-8 -20 -8 -158 0 -178 9 -23 31 -19 38 7 10 36 7 147 -4
168 -13 23 -26 24 -34 3z"
          />
        </g>
      </svg>
      <Button onClick={handleClick}>Voltar para a tela inicial</Button>
    </MainContent>
  );
};