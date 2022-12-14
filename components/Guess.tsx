export default function Guess({ isGuessed, guess, word }) {
  return (
    <div className="mt-1 grid grid-cols-5 gap-1">
      {new Array(5).fill("").map((_, i) => (
        <div className="uppercase text-white h-12 w-12 border border-gray-200 bg-black font-bold items-center justify-center flex rounded">
          {guess[i]}
        </div>
      ))}
    </div>
  );
}
