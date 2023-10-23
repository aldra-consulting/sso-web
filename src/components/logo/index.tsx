import { component$ } from '@builder.io/qwik';

interface Props {
  height: number;
}

export default component$<Props>(({ height }) => {
  const fill = '#2D3741';

  return (
    <svg
      height={height}
      viewBox='0 0 318 73'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M34.2595 42.6177C72.843 4.03426 78.4884 -4.03609 68.9344 35.1864C58.4921 76.5434 58.4921 76.5434 37.8136 69.4604C15.6067 61.2705 18.6438 58.2334 34.2595 42.6177Z'
        fill='#F4B400'
      />
      <path
        d='M30.3823 38.7405C68.9657 0.157042 77.0361 -5.48842 37.8136 4.06557C-3.54336 14.5079 -3.54336 14.5079 3.53963 35.1864C11.7296 57.3933 14.7668 54.3562 30.3823 38.7405Z'
        fill='#4285F4'
      />
      <path
        d='M96.4748 62.2041C95.177 62.2041 93.9199 61.7158 92.7033 60.7393C91.5678 59.7628 91 58.5014 91 56.9553C91 56.3042 91.1217 55.6125 91.365 54.8801L106.694 14.7205C107.262 13.2557 108.195 12.1571 109.492 11.4247C110.79 10.6923 112.128 10.3261 113.507 10.3261C114.967 10.3261 116.346 10.6923 117.644 11.4247C119.023 12.1571 119.996 13.2557 120.564 14.7205L136.988 54.636C137.15 54.9615 137.231 55.287 137.231 55.6125C137.231 55.938 137.231 56.2636 137.231 56.5891C137.231 58.298 136.663 59.6407 135.528 60.6172C134.392 61.5938 133.135 62.082 131.756 62.082C130.783 62.082 129.81 61.7972 128.837 61.2276C127.944 60.7393 127.296 59.9255 126.89 58.7862L123.362 49.2651C123.281 48.7769 122.956 48.5327 122.389 48.5327H105.964C105.397 48.5327 105.032 48.7769 104.869 49.2651L101.463 58.9083C100.895 59.9662 100.165 60.78 99.273 61.3496C98.3808 61.9193 97.448 62.2041 96.4748 62.2041ZM110.344 39.0116H117.522C118.009 39.0116 118.374 38.8488 118.617 38.5233C118.942 38.1164 119.023 37.6282 118.86 37.0585L115.697 28.3918C115.211 27.0898 114.602 26.4388 113.872 26.4388C113.142 26.4388 112.534 27.1305 112.047 28.5139L109.006 37.1806C108.844 37.6688 108.884 38.1164 109.128 38.5233C109.371 38.8488 109.776 39.0116 110.344 39.0116Z'
        fill={fill}
      />
      <path
        d='M149.896 62.082C147.544 62.082 145.638 61.3496 144.178 59.8848C142.718 58.42 141.988 56.5077 141.988 54.1477V15.575C141.988 14.0289 142.515 12.7675 143.569 11.791C144.624 10.8145 145.962 10.3262 147.584 10.3262C149.125 10.3262 150.383 10.8145 151.356 11.791C152.41 12.7675 152.937 14.0289 152.937 15.575V48.4107C152.937 50.852 154.154 52.0726 156.587 52.0726H167.415C168.875 52.0726 170.051 52.5609 170.943 53.5374C171.917 54.4326 172.403 55.6125 172.403 57.0773C172.403 58.5421 171.917 59.7628 170.943 60.7393C170.051 61.6344 168.875 62.082 167.415 62.082H149.896Z'
        fill={fill}
      />
      <path
        d='M185.676 62.082C183.162 62.082 181.134 61.3903 179.593 60.0069C178.133 58.5421 177.403 56.6297 177.403 54.2698V17.8943C177.403 15.5343 178.093 13.7034 179.471 12.4013C180.85 11.0179 182.675 10.3262 184.946 10.3262H196.017C201.37 10.3262 205.912 11.4248 209.643 13.622C213.374 15.7378 216.213 18.6673 218.16 22.4107C220.187 26.0727 221.201 32.5828 221.201 37.3026C221.201 42.1853 220.187 46.4983 218.16 50.2416C216.132 53.985 213.374 56.9146 209.887 59.0304C206.399 61.0648 202.506 62.082 198.207 62.082H185.676ZM191.394 52.3168H196.139C200.762 52.3168 204.29 51.0147 206.724 48.4107C209.157 45.7252 210.333 42.0225 210.252 37.3026C210.171 32.42 208.913 26.3982 206.48 23.8755C204.047 21.3528 200.559 20.0914 196.017 20.0914H191.394C189.367 20.0914 188.353 21.1086 188.353 23.1431V49.2651C188.353 51.2995 189.367 52.3168 191.394 52.3168Z'
        fill={fill}
      />
      <path
        d='M231.554 61.9531C230.094 61.9531 228.837 61.4649 227.783 60.4883C226.728 59.4304 226.201 58.2098 226.201 56.8264V18.2606C226.201 15.9007 226.931 13.9883 228.391 12.5236C229.932 11.0588 231.96 10.3264 234.474 10.3264H246.64C251.588 10.3264 255.562 11.7912 258.563 14.7207C261.645 17.6503 263.186 21.3123 263.186 25.7067C263.186 28.3107 262.497 30.752 261.118 33.0306C259.739 35.3092 257.752 37.1402 255.157 38.5236C256.292 39.0932 257.306 39.8663 258.198 40.8428C259.171 41.8193 259.942 42.9993 260.51 44.3827L265.297 54.432C265.702 55.4085 265.905 56.2223 265.905 56.8733C265.905 58.3381 265.337 59.5588 264.202 60.5353C263.066 61.4304 261.809 61.878 260.43 61.878C259.538 61.878 258.646 61.6339 257.754 61.1456C256.943 60.6573 256.294 59.8843 255.807 58.8264L250.412 46.9461C249.601 44.993 248.506 43.6096 247.127 42.7958C245.829 41.9007 244.288 41.4531 242.504 41.4531H239.341C237.718 41.4531 236.907 42.2669 236.907 43.8944V56.8264C236.907 58.2098 236.38 59.4304 235.326 60.4883C234.271 61.4649 233.014 61.9531 231.554 61.9531ZM238.732 32.2982H246.154C248.181 32.2982 249.763 31.7286 250.898 30.5893C252.115 29.45 252.723 27.9852 252.723 26.1949C252.723 24.3233 252.115 22.8585 250.898 21.8005C249.763 20.6613 248.181 20.0916 246.154 20.0916H238.732C237.516 20.0916 236.907 20.702 236.907 21.9226V30.4672C236.907 31.6879 237.516 32.2982 238.732 32.2982Z'
        fill={fill}
      />
      <path
        d='M276.38 61.878C275.082 61.878 273.825 61.3897 272.608 60.4132C271.473 59.4367 270.905 58.1753 270.905 56.6292C270.905 55.9781 271.027 55.2864 271.27 54.554L286.599 14.3944C287.167 12.9296 288.1 11.831 289.397 11.0986C290.695 10.3662 292.033 10 293.412 10C294.872 10 296.251 10.3662 297.549 11.0986C298.928 11.831 299.901 12.9296 300.469 14.3944L316.893 54.3099C317.055 54.6354 317.136 54.9609 317.136 55.2864C317.136 55.6119 317.136 55.9374 317.136 56.263C317.136 57.9719 316.568 59.3146 315.433 60.2911C314.297 61.2676 313.04 61.7559 311.661 61.7559C310.688 61.7559 309.715 61.4711 308.742 60.9015C307.849 60.4132 307.201 59.5994 306.795 58.4601L303.267 48.939C303.186 48.4507 302.861 48.2066 302.294 48.2066H285.869C285.302 48.2066 284.937 48.4507 284.774 48.939L281.368 58.5822C280.8 59.6401 280.07 60.4539 279.178 61.0235C278.286 61.5932 277.353 61.878 276.38 61.878ZM290.249 38.6854H297.427C297.914 38.6854 298.279 38.5227 298.522 38.1972C298.847 37.7903 298.928 37.302 298.765 36.7324L295.602 28.0657C295.116 26.7637 294.507 26.1127 293.777 26.1127C293.047 26.1127 292.439 26.8044 291.952 28.1878L288.911 36.8544C288.749 37.3427 288.789 37.7903 289.033 38.1972C289.276 38.5227 289.681 38.6854 290.249 38.6854Z'
        fill={fill}
      />
    </svg>
  );
});
