import TextPressure from '../ui/TextPressure';

export function Slide23() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <h1 className="text-6xl font-bold text-white text-center leading-relaxed">
        <div style={{ position: 'relative', height: '100px' }}>
          <TextPressure
            text="Anything is possible"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="lab(65.0361% -1.42065 -56.9802)"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        {/* <span className="text-blue-400">Anything is possible</span><br /> */}
        with Github actions
      </h1>
    </div>
  );
}
