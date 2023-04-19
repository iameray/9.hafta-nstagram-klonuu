import Icon from "components/Icon";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Reply({ setMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...messages,
      {
        from: {
          id: "sGlyxKRERQhBZAP6jwtZBXKINqT2",
          name: "Eray Asma",
          username: "erayasma",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/Electronic_Arts_Logo_2020.png",
        },
        message,
      },
    ]);
    setMessage("");
  };
  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <form
        onSubmit={sendMessage}
        className="h-[44px] border rounded-full flex items-center flex-1 ml-4 pl-[11px] pr-[8px]"
      >
        <button
          type="butotn"
          className="w-[40px] h-[42px] flex items-center justify-center mr-2"
        >
          <Icon name="emoji" size={24} />
        </button>
        <input
          maxRows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 outline-none h-[40px] placeholder:text-gray-500 focus:placeholder:text-gray-300 text-sm px-[9px]"
          placeholder="Message.."
        />
        {!message && (
          <>
            <button
              type="butotn"
              className="w-[40px] h-[42px] flex items-center justify-center mr-2"
            >
              <Icon name="picture" size={24} />
            </button>
            <button
              type="butotn"
              className="w-[40px] h-[42px] flex items-center justify-center"
            >
              <Icon name="heart" size={24} />
            </button>
          </>
        )}
        {message && (
          <button
            type="submit"
            className="text-brand font-semibold text-sm px-3"
          >
            Send
          </button>
        )}
      </form>
      <div className="w-[44px] h-[44px] flex items-center justify-center">
        <Icon name="user" size={24} />
      </div>
    </footer>
  );
}
