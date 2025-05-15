// import { nanoid } from "nanoid";

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} type='button'>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default ContactsList;