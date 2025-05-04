import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTodo,
  setCurrentTodo,
  updateTodo,
} from '../../redux/todosSlice';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const handleSubmit = e => {
    e.preventDefault();
    const newText = e.target.elements.edit.value.trim();

    if (newText && newText !== currentTodo.text) {
      dispatch(updateTodo({ id: currentTodo.id, text: newText }));
    }
    dispatch(setCurrentTodo(null));
  };

  const handleCancel = () => {
    dispatch(setCurrentTodo(null));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="edit"
        required
        defaultValue={currentTodo?.text || ''}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => handleCancel()}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
