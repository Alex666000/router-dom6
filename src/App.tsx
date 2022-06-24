import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';

export function App() {
    return (
        <div className="App">
            <NavLink to={'/'}> main</NavLink>
            <NavLink to={'/login'}> login</NavLink>
            <NavLink to={'/profile'}> profile</NavLink>
            <NavLink to={'/profile/settings'}> settings</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        profile
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'*'} element={<div>error</div>}/>
                    <Route path={':id'} element={<div>id</div>}/>
                    <Route path={'settings'} element={<div>settings</div>}/>
                    <Route index element={<div>Увидишь такую страницу так как нет пути какую отобразить</div>}/>
                </Route>
            </Routes>
        </div>
    );
}

/*
 <Routes> группа страниц
<Route index element={<div>Увидишь такую страницу так как нет пути какую отобразить</div>}/>  /*index чтобы отображалась страница когда нет параметров
<Route path={'settings'} element={<div>settings</div>}/> {/*без слеша пишется settings
<Route path={':id'} element={<div>id</div>}/>
<Route path={'*'} element={<div>error</div>}/>звездочка значит больше 1 или больше 1 параметра после '/profile' не совпадающих с указанными путями}
<Outlet/> {/*сюда все дочерние элементы ложаться: вложенные роуты: <Route path={'profile/settings'} element={<div>settings</div>}/>
 */