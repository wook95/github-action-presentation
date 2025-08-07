import CircularText from '../ui/CircularText';

export function Slide17() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white text-center">
        <span className="text-4xl font-bold text-blue-400">Beyond</span>
        <br /> The Actions
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
