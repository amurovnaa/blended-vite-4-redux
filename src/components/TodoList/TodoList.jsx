import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import Grid from '../Grid/Grid';
import { selectFilteredTodos } from '../../redux/todosSlice';
import Text from '../Text/Text';

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  return (
    <>
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((todo, index) => (
            <Todo
              key={todo.id}
              id={todo.id}
              counter={index + 1}
              text={todo.text}
            />
          ))}
        </Grid>
      ) : (
        <Text color="gray.500" textAlign="center" mt={4}>
          No todos match your search...
        </Text>
      )}
    </>
  );
};

export default TodoList;
