import CircularText from '../ui/CircularText';

export function Slide05() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white text-center">
        Impact 있는
        <br />
        <span className="text-blue-400">자동화 사례</span>
      </h1>

      <div className="mt-1">
        <CircularText
          text="SaladLAB*GITHUB*ACTIONS*"
          onHover="goBonkers"
          spinDuration={20}
          className="text-xl font-bold text-white text-center"
        />
      </div>
    </div>
  );
}
