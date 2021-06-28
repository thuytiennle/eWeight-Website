// Routes sẽ quản lý trong template
import React from 'react';
import { Route } from "react-router-dom";

// Thay vì truyền props vào HomeTemplate(props) thì bóc tách cách props truyền thẳng vào HomeTemplate({Component, ...props})
// let {Component, ...props} =props;

function HomeLayout(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

export default function HomeTemplate({Component, ...props}) {
    
    return (
        <div>
            {/* Route ko cho phép truyền thêm những tham số khác ngoài path, exact, component. Thì mình sẽ truyền vào thêm element render{(propsComponent)=>{}} */}
            <Route
                {...props}
                render={(propsComponent)=> {
                    //props component là match, history, location các thuộc tính của props. Truyền vào các component con để dùng vd như props.match.params
                    // console.log(propsComponent);
                    
                    return (
                    <HomeLayout>
                        <Component  {...propsComponent}/>
                    </HomeLayout>
                )}}
            />
        </div>
    )
}
