export default function Message({ message }) {
  const messageClass =
    message.type === 0
      ? "bg-indigo-500 rounded-bl-none text-white"
      : "bg-indigo-200 rounded-br-none";
  const flexClass =
    message.type === 0 ? "flex justify-start" : "flex justify-end";

  return (
    <div className={`${flexClass} p-5`}>
      <div className={`${messageClass} p-5 rounded-lg flex flex-col gap-4`}>
        {message.image && (
          <img
            src={URL.createObjectURL(message.image)}
            alt="Image"
            className="max-w-[300px] object-cover mr-3"
          />
        )}
        <p className="max-w-[500px] break-words">{message.message}</p>
      </div>
    </div>
  );
}
