import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld.jsx';
import { StrictMode } from 'react';
import Container from './Container.jsx';
import TodoList from '../todolist/TodoList.jsx';
import Table from '../table/Table.jsx';
import AlertButton from '../button/AlertButton.jsx';
import MyButton from '../button/MyButton.jsx';
import Toolbar from '../button/Toolbar.jsx';
import SearchForm from '../form/SearchForm.jsx';
import SayHelloForm from '../form/SayHelloForm.jsx';
import Counter from '../form/Counter.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table />
            <br />
            <AlertButton 
                text='click me!'
                msg = 'You clicked me'
            />
            <MyButton 
                text='Smash Me'
                onSmash={() => alert('You smashed me')}
            />
            <Toolbar
                onClick={(e) => {
                    e.stopPropagation()
                    alert('Toolbar clicked')

                }}
            />
            <SearchForm/>
            <br />
            <SayHelloForm />
            <Counter/>
        </Container>
    </StrictMode>
)