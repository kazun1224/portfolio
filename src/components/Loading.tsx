import { FC } from "react";
import { RevolvingDot } from "react-loader-spinner";

export const Loading: FC = () => {
  return (
    <div className="grid min-h-screen grid-rows-1 h-full w-full place-items-center">
      <RevolvingDot
        height="100"
        width="100"
        radius="6"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
