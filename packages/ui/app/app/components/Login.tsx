'use client';
import { useMageStore, useStore } from '@ui/store';

const Login = () => {
  const store = useStore(useMageStore, (state) => state);

  const connectWallet = async () => {
    if (!window.arweaveWallet) {
      window.location.href = 'https://www.arconnect.io/download';
      return;
    }
    await window.arweaveWallet
      .connect(['ACCESS_ADDRESS', 'ACCESS_ALL_ADDRESSES', 'SIGN_TRANSACTION', 'SIGNATURE', 'ACCESS_PUBLIC_KEY'], {
        name: 'arMage',
      })
      .then(() => store?.setConnected(true));
  };

  return (
    <div className="max-w-sm w-full text-gray-600 space-y-8">
      <div className="text-center">
        <img src="/arMage.png" width={45} className="mx-auto" />
        <div className="mt-5 space-y-2">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in with Arweave</h3>
          <p className="">
            Don't have an wallet?{' '}
            <a
              href="https://www.arconnect.io/download"
              target="_blank"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              create now
            </a>
          </p>
        </div>
      </div>
      <button
        className="flex items-center justify-center gap-2 px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200 w-full font-medium"
        onClick={() => connectWallet()}
      >
        <svg
          width="1200"
          height="1200"
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <g clipPath="url(#clip0_444_437)">
            <path
              d="M1100.47 770.289L1198.19 752.778L1109.62 653.655L1186.29 610.778L1089.26 538.456L1151.67 388.456H1015.18L1051.03 241.111L904.778 316.089L944.778 121.867L797 243.767L781.322 56.2444L669.667 225.011L600 0L530.356 225.011L418.656 56.2444L402.989 243.767L255.267 121.867L295.267 316.089L148.944 241.111L184.844 388.444H48.3221L110.711 538.444L13.6999 610.778L90.3666 653.655L1.81104 752.778L99.5888 770.289L32.5555 898.067L119.067 930.222L94.2888 1012.32L164.567 996.844L171.578 1098.06L230 1068.29L235.3 1161.16L281.811 1145.68C281.811 1145.68 364.111 1231.13 529.511 1187.68C548.711 1182.64 565.067 1169.34 572.778 1151.01C581.4 1130.74 578.544 1106.16 523.344 1097.07C426.111 1081.11 291.533 1099.88 242.789 977.778C242.436 976.922 242.359 975.976 242.569 975.074C242.779 974.172 243.265 973.358 243.961 972.746C244.656 972.134 245.525 971.755 246.446 971.661C247.368 971.567 248.295 971.763 249.1 972.222C309.1 1006.2 449.711 1036.86 461.422 972.656C473.933 904.267 413.867 881.656 379.922 862.933C345.978 844.211 191.722 794.256 198.889 702.356C206.055 610.456 306.355 635 329.1 653.333C349.6 666.667 552.122 791.311 552.122 791.311C552.122 791.311 478.689 888.8 600 888.8C721.311 888.8 647.911 791.289 647.911 791.289C647.911 791.289 850.378 666.667 870.922 653.333C893.667 635 994.011 610.478 1001.11 702.356C1008.21 794.233 853.911 844.222 820 862.944C786.089 881.667 726.033 904.278 738.5 972.667C750.256 1036.84 890.722 1006.23 950.8 972.256C951.605 971.792 952.534 971.593 953.458 971.685C954.382 971.777 955.254 972.156 955.951 972.769C956.648 973.382 957.136 974.197 957.346 975.102C957.556 976.006 957.478 976.954 957.122 977.811C908.444 1099.88 773.867 1081.11 676.667 1097.11C621.489 1106.2 618.611 1130.79 627.256 1151.06C635.033 1169.34 651.278 1182.64 670.478 1187.72C835.922 1231.18 918.256 1145.72 918.256 1145.72L964.744 1161.11L970 1068.29L1028.38 1098.06L1035.41 996.844L1105.67 1012.32L1080.97 930.178L1167.48 898.022L1100.47 770.289ZM470.6 640.289C457.443 640.289 444.581 636.387 433.641 629.077C422.701 621.767 414.175 611.377 409.14 599.221C404.106 587.065 402.789 573.689 405.357 560.785C407.924 547.88 414.261 536.027 423.566 526.724C432.87 517.422 444.724 511.087 457.629 508.521C470.534 505.956 483.909 507.275 496.065 512.311C508.22 517.348 518.608 525.876 525.917 536.817C533.225 547.758 537.124 560.62 537.122 573.778C537.127 582.516 535.409 591.169 532.068 599.243C528.727 607.317 523.827 614.654 517.649 620.834C511.472 627.014 504.137 631.915 496.064 635.259C487.991 638.603 479.338 640.324 470.6 640.322V640.289ZM729.4 640.289C716.242 640.291 703.379 636.391 692.438 629.082C681.497 621.774 672.969 611.384 667.932 599.229C662.896 587.073 661.578 573.697 664.144 560.792C666.711 547.886 673.047 536.032 682.351 526.728C691.655 517.424 703.509 511.088 716.414 508.522C729.319 505.956 742.695 507.274 754.851 512.31C767.007 517.347 777.396 525.875 784.705 536.816C792.013 547.757 795.913 560.62 795.911 573.778C795.915 582.515 794.198 591.167 790.858 599.241C787.517 607.314 782.619 614.65 776.442 620.83C770.266 627.009 762.932 631.912 754.86 635.256C746.789 638.601 738.137 640.322 729.4 640.322V640.289Z"
              fill="#AB9AFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_444_437">
              <rect width="1200" height="1200" fill="white" />
            </clipPath>
          </defs>
        </svg>
        ArConnect
      </button>

      <div className="relative">
        <span className="block w-full h-px bg-gray-300"></span>
        <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
          Or continue with ethereum
        </p>
      </div>
      <div className="space-y-4 text-sm font-medium">
        <button
          className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
          onClick={() => alert('please use arConnect wallet')}
        >
          <img src="/mm.svg" width={20} height={20} alt="Metamask logo" />
          Metamask
        </button>
      </div>
      <div className="text-center">
        <a href="https://youtu.be/ah1jrMGBUvo" target="_blank" className="text-teal-600 hover:text-teal-500">
          don't know how to connect?
        </a>
      </div>
    </div>
  );
};

export default Login;
