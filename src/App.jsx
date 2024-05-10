import Chat from "./components/chat";
import Contacts from "./components/contacts";
import { contacts } from "./assets/contatos";
import { useState } from "react";

export default function App() {
  const [myContacts] = useState(contacts);
  const [selectedUser, setSelectedUser] = useState(contacts[0]);

  function changeSelectedUser(id) {
    setSelectedUser(contacts[id]);
  }

  const [filteredContacts, setFilteredContacts] = useState(null);

  return (
    <div className="grid grid-cols-[400px_calc(100vw-400px)] w-screen min-h-screen">
      <div className="max-h-screen  overflow-y-auto">
        <Contacts
          myContacts={myContacts}
          setFilteredContacts={setFilteredContacts}
          filteredContacts={filteredContacts}
          changeSelectedUser={changeSelectedUser}
        />
      </div>
      <Chat selectedUser={selectedUser} />
    </div>
  );
}
