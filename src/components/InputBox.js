import React, { useState } from "react";
import EmojiIcon from "../Icons/EmogiIcon.svg";
import SendIcon from "../Icons/sendIcon.png";
import { liveChat } from "../Utils/ChatSlice";
import { useDispatch } from "react-redux";
const InputBox = () => {
  const [commentedMessage, setCommentedMessage] = useState("");
  //   const emojis = ["😀", "😂", "😍", "😎", "🤔", "😢", "😡", "🎉", "❤️"];
  const dispatch = useDispatch();
  return (
    <form
      className="rounded-full flex bg-gray-100 px-2 mt-2 gap-2 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          liveChat({ name: "Testing Fix this", comment: commentedMessage })
        );
        setCommentedMessage("");
      }}
    >
      <input
        type="text"
        placeholder="Chat..."
        value={commentedMessage}
        onChange={(e) => setCommentedMessage(e.target.value)}
        className="p-2 outline-none border-none rounded-l-full flex-1 bg-gray-100 placeholder:text-gray-500"
      />
      <img src={EmojiIcon} alt="Emoji Icon" />
      <button>
        <img src={SendIcon} alt="Send Icon" className="h-4" />
      </button>
    </form>
  );
};

export default InputBox;
