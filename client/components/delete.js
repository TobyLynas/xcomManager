import styles from "../components/delete.module.css";

const deleteComponent = (props) => {
  return (
    <div className={styles.overline}>
      <svg
        onClick={(event, newId = props.id, newName = props.name) => {
          deleteButtonHandle(event, newId, newName);
        }}
        className={styles.trashIcon}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
      </svg>
    </div>
  );
};
const deleteButtonHandle = (event, newId, newName) => {
  event.preventDefault();
  let conf = confirm(
    `You are about to remove '${newName}' from the database. Click OK to continue. This cannot be undone.`
  );
  conf ? deleteCall(newId) : {};
};
const deleteCall = async (newId) => {
  console.log(newId);
  const res = await fetch(`http://localhost:9000/users/${newId}`, {
    body: JSON.stringify({
      id: { newId },
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  location.reload();
};

export default deleteComponent;
