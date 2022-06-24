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


            <NavLink to={'/profile'}
                // style={{color: 'lime'}} - меняем стиль ссылки как хотим, тут класс подтягивается автоматом className_мом же мы сами контролируем

                /*если хотим чтобы наша ссылка красилась только когда она активная на style, то:*/
                     style={(params) => {
                         return {color: params.isActive ? 'lime' : 'black'}
                     }}
            >
                profile
            </NavLink>


            <NavLink to={'/profile/settings'}
                /*если хотим чтобы наша ссылка красилась только когда она активная на className, то:*/
                     className={({isActive}) => {
                         return isActive ? 'act' : 'def'
                     }}
            > settings</NavLink>
            {/*пример обычной ссылки*/}
            <a
                href="vk.com"
                target={'_blank'}
                // rel={'hello'} этот параметр для безопасности чтобы нас не могли увидеть откуда мы пришли и нельзя было получить доступ к нашей сети
            > xxxxxxx</a>
            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/*'} element={<div>settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;

/*
если назначим класс active то активная ссылка сразу получит этот класс
1) .active {
    font-size: 50px;
} - именно такого названия и не module.css(module.css изменяют название класса)
className - не применится .active так как мы его контролируем "класснеймом" - если делаем активные сслыки то их лучше сразу ставим как контроллируемые
2) Link если будет вместо NavLink, то они не поддерживают ни стили ни className значит ссылки окрасить нельзя - если нам просто ссылки нужны используем NavLink
*/