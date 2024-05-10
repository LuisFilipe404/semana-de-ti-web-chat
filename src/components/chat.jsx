import { useState } from "react";
import SendIcon from "../assets/send-icon.svg";
import Message from "./message";
import GalleryIcon from "../assets/gallery-icon.svg";
import CloseIcon from "../assets/close-icon.svg";

export default function Chat({ selectedUser }) {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();

    if (message.length === 0 && !image) return;

    selectedUser.messages.push({ type: 1, message, image });
    setMessage("");
    setImage(null);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <div>
      <header>
        <div className="flex items-center py-5 px-10 border-b border-b-gray-400/30">
          <img
            src={selectedUser.image}
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="font-semibold">User</p>
            <p className="text-gray-400 text-start">Online</p>
          </div>
        </div>
      </header>
      <main className="max-h-[calc(100vh-178px)] h-full overflow-y-auto flex flex-col-reverse">
        {selectedUser.messages
          .slice()
          .reverse()
          .map((m, i) => (
            <Message key={i} message={m} />
          ))}
      </main>
      <footer className="relative">
        <form
          onSubmit={onSubmit}
          className="w-full border-t flex items-center justify-between border-t-gray-400/30"
        >
          <div className="flex-grow">
            <input
              className="outline-none p-7 text-xl w-full"
              placeholder="Digite uma mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <input
              hidden
              type="file"
              accept="image/*"
              id="input-file"
              onChange={handleImageChange}
            />
          </div>
          <label className="cursor-pointer" htmlFor="input-file">
            <img className="w-12 mr-3" src={GalleryIcon} />
          </label>
          <button className="pr-6">
            <img className="w-12" src={SendIcon} alt="Send" />
          </button>
        </form>
        {image && (
          <div className="absolute bottom-full w-full h-[calc(100vh-178px)] flex justify-center items-center bg-white rounded-md">
            <div className="relative">
              <img
                className="max-w-[500px] scale-105 transition-transform p-2"
                src={URL.createObjectURL(image)}
              />
              <button
                className="absolute top-0 right-0"
                onClick={() => setImage(null)}
              >
                <img src={CloseIcon} />
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
