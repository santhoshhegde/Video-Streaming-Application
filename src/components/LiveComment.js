import { useEffect } from "react";
import userLogo from "../Icons/userLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { liveChat } from "../Utils/ChatSlice";
import InputBox from "./InputBox";

const LiveComment = ({ name, comment }) => {
  const dispatch = useDispatch();
  const messagesFrom = useSelector((state) => state.chat.message);
  useEffect(() => {
    let ApiPooling = setInterval(() => {
      const names = [
        "Sakthiman",
        "Ironman",
        "Captain America",
        "Hulk",
        "Captain Marvel",
        "Natasha",
        "Antman",
        "Black Panther",
        "Spiderman",
        "Thor",
        "Heman",
        "Venom",
        "Batman",
        "Superman",
        "Volwerine",
      ];

      const randName = names[Math.floor(Math.random() * names.length)];

      const sentence = [
        "Iron Man: 'I am Iron Man.'",
        "Captain America: 'I can do this all day.'",
        "Thor: 'Bring me Thanos!'",
        "Hulk: 'Hulk smash!'",
        "Black Widow: 'I’ve got red in my ledger. I’d like to wipe it out.'",
        "Spider-Man: 'With great power comes great responsibility.'",
        "Doctor Strange: 'Dormammu, I’ve come to bargain.'",
        "Black Panther: 'Wakanda forever!'",
        "Deadpool: 'Hey, Cap, wanna trade shields for swords?'",
        "Rocket Raccoon: 'Blondie, don’t take all the credit!'",
        "Groot: 'I am Groot.'",
      ];
      let randComment = sentence[Math.floor(Math.random() * sentence.length)];

      dispatch(liveChat({ name: randName, comment: randComment }));
    }, 2000);

    return () => clearInterval(ApiPooling);
  }, []);
  return (
    <div>
      <div className="w-96 h-[360px] bg-gray-100 border-2 border-black rounded-lg p-3 overflow-y-scroll flex flex-col-reverse">
        {messagesFrom.map((message, i) => (
          <div className="flex gap-5 items-center my-2" key={i}>
            <img src={userLogo} alt="userLogo" width={30} />
            <h1>{message.name}</h1>
            <h2>{message.comment}</h2>
          </div>
        ))}
      </div>
      <InputBox />
    </div>
  );
};

export default LiveComment;
