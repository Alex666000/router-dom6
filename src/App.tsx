import React from 'react';
import './App.css';
import {NavLink, Route, Routes, useParams} from 'react-router-dom';

export const Profile = () => { // типизировали как <Route path={'/profile/:id'} element={<Profile/>}/> id ки должны совпадать
    // const params = useParams<'id'>()
    // const params = useParams<'x' | 'y'>() //  x,y с path={'/profile/:x/:y'}
    const params = useParams<'*'>() // достали параметр *
    const some = params['*'] // достали параметр * с подсказкой webstorm
    console.log(some) // {id: '1'}

    return (
        <div>profile</div>
    );
};
function App() {
    return (
        <div className="App">
            {/*чтобы могли переходить на эти страницы*/}
            <NavLink to={'/'}> main</NavLink>
            <NavLink to={'/login'}> login</NavLink>
            <NavLink to={'/profile'}> profile</NavLink>
            <NavLink to={'/profile/1'}> profile/1</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                {/*<Route path={'/profile/:id'} element={<Profile/>}/>*/}
                {/*<Route path={'/profile/:x/:y'} element={<Profile/>}/>*/}
                {/*<Route path={'/profile/:x'} element={<Profile/>}/>*/}
                <Route path={'/profile/*'} element={<Profile/>}/>  {/*звездочка - необязательный параметр - послу profile может быть что угодно*/}
            </Routes>
        </div>
    );
}
export default App;

/*
1- const params = useParams() - достаем параметры и сохраняем в переменную const some = params
2 - id всегда строка если нужна не строка то "+" можно перевести в число
3- звездочка - необязательный параметр - пищется только в конце как в 5 версии в середине url теперь нельзя писать
4 - * - это все что идет после "слеша"
5 - <Route path={'/profile/:x'} element={<Profile/>}/> : КАК "КЛЮЧ",
    <NavLink to={'/profile/1'}> profile/1</NavLink> как значение: {x: '1'} - увидим в консоли
* */