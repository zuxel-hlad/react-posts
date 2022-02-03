import classes from "./MyModal.module.css";
const MyModal = ({ children, visible, setVisible }) => {
  const modalClasses = [classes.modalOverlay];

  if (visible) {
    modalClasses.push(classes.active);
  }

  return (
    <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.modalContent}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
