export default function Card(props) {
  return (
    <button
      onClick={() => props.changeSelectedUser(props.id)}
      className="flex w-full p-5 hover:bg-gray-400/30 bg-white transition-colors"
    >
      <img
        src={props.image}
        alt={props.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <p className="font-semibold">{props.name}</p>
        <p className="text-gray-400 text-start">Online</p>
      </div>
    </button>
  );
}
