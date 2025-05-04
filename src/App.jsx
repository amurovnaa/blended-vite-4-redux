import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import { selectCurrentTodo, selectTodos } from './redux/todosSlice';
import { useSelector } from 'react-redux';
import EditForm from './components/EditForm/EditForm';
import Text from './components/Text/Text';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const savedTodos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!currentTodo ? <Form /> : <EditForm />}
          <Filter />
          {savedTodos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
