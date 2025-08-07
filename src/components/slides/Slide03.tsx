import TextType from '../ui/TextType';

export function Slide03() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Q.</h1>
        {/* <p className="text-4xl text-gray-300 leading-relaxed">
          혹시 Github Action CI/CD만
          <br />
          쓰고 계신가요?
        </p> */}

        <TextType
          text={['혹시 Github Action', 'CI/CD만', '쓰고 계신가요?']}
          typingSpeed={75}
          className="text-6xl font-bold text-white mb-8"
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </div>
    </div>
  );
}
