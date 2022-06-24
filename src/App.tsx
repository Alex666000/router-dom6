import React, {useEffect} from 'react';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';

export const Profile = () => {
    const [searchParams, setSearchParams] = useSearchParams() /*работает с "квери" параметрами*/
    console.log(searchParams.get('name'))  /*дай нам содержимое переменной name - "переменная", что приписывается в адресной строки url*/
    console.log(Object.fromEntries(searchParams))  /*предыдущее значение - js объект*/

    useEffect(() => {
        console.log('research...')
    }, [searchParams])

    return (
        <div>
            profile
            <button onClick={() => {
                setSearchParams({age: '32'})  /*устанавливаем новую "квери" переменную : name в url строке перезапишется на age=32, значение = всегда в виде строки*/
                setSearchParams({...Object.fromEntries(searchParams), age: '32'})  /*предыдущее значение в url сохранится name и через "слеш" новое свойство age=32*/
            }}>add age</button>
        </div>
    )
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