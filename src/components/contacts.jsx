import { useEffect, useState } from "react";
import SearchIcon from "../assets/search-icon.png";
import Card from "./card";

export default function Contacts({
  setFilteredContacts,
  filteredContacts,
  myContacts,
  changeSelectedUser,
}) {
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (contact.length > 0) {
      const filtered = myContacts.filter((c) =>
        c.name.toLowerCase().includes(contact.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(null);
    }
  }, [contact]);

  return (
    <div className="border-r border-gray-400/30 min-w-[400px] h-full">
      <div className="relative border-b border-b-gray-400/30">
        <input
          className="w-full py-8 px-12 pl-14 outline-none"
          placeholder="Buscar"
          onChange={(e) => setContact(e.target.value)}
        />
        <img src={SearchIcon} className="w-6 absolute top-8 left-5" />
      </div>
      <ul>
        {filteredContacts
          ? filteredContacts.map((c) => (
              <li key={c.id}>
                <Card changeSelectedUser={changeSelectedUser} {...c} />
              </li>
            ))
          : myContacts.map((c) => (
              <li key={c.id}>
                <Card changeSelectedUser={changeSelectedUser} {...c} />
              </li>
            ))}
      </ul>
    </div>
  );
}
