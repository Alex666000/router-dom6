import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import {findAllByDisplayValue} from '@testing-library/react';
export const Profile = () => {
    const navigate = useNavigate() // перенаправит нас... хук с помощью которого получаем функцию перенаправления navigate()

    /*    useEffect( () => {
            if (true) navigate('/login')
        }, [])*/
    return (
        // <div>
        //     {/*{true ? (<Navigate to={'/login'} />): (*/}
        //     {/*    <>*/}
        //     {/*    profile*/}
        //     {/*    <button onClick={() => {*/}
        //     {/*    navigate('/login')   /*по клику перейдем на логин*/}
        //     {/*}}>logout</button>*/}
        //     {/*    </>*/}
        //     {/*    ) }*/}
        //
        // </div>
        // <div>
        //     profile
        //     <button onClick={ () => { navigate('/login') } }>logout</button>
        // </div>
        // подставить можем не только текст, но и число:
    <div>
            profile
            <button onClick={ () => { navigate(-1) } }>logout</button> {/*означает, что отматать на стр. назад*/}
        </div>
    );
};
function App() {
    return (
        <div className="App">
            {/*чтобы могли переходить на эти страницы*/}
            <NavLink to={'/'}> main</NavLink>
            <NavLink to={'/login'}> login</NavLink>
            <NavLink to={'/profile'}> profile</NavLink>
            <NavLink
                to={'/profile/settings'}> settings/1</NavLink> {/*"NavLink" - это ссылка на которую можно вешать стили style className*/}

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/> {/*Роут - это страница*/}
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;

/* 1)  "РЕДЕРЕКТ НА ЛОГИН С ПОМОЩЬЮ useEffect"  useEffect( () => {
        if (true) navigate('/login')
    }, [])
    2)    "РЕДЕРЕКТ НА ЛОГИН С ПОМОЩЬЮ: {true ? (<Navigate to={'/login'} />):
    <>
    profile
     <button onClick={() => navigate('/login') } >logout</button>
    </>
    3)  <button onClick={ () => { navigate(-1) } }>logout</button> означает, что отматать на стр. назад -1
*/