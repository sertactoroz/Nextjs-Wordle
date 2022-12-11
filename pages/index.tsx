import { observer, useLocalObservable } from "mobx-react-lite";
import Guess from "../components/Guess";
import Qwerty from "../components/Qwerty";
import PuzzleStore from "../stores/PuzzleStore";

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore);
  return (
    <div className="flex h-screen flex-col w-screen bg-gray-600 items-center justify-center">
      <h1 className="text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-400">Wordle</h1>
      {new Array(6).fill(0).map((_,i)=>(
      <Guess word={"tests"} guess={"guess"} isGuessed={false}/>
      ))}
      <h1>won/loss</h1>
      <Qwerty />
    </div>
  );
});
