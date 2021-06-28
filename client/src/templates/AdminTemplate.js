import React from 'react';
import { Route, Redirect } from "react-router-dom";

//DÙNG BẢO VỆ TẤT CẢ CÁC ROUTE DÀNH CHO QUẢN TRỊ


//anfc arrow function
function AdminLayout(props){
    return(
        <div>
            {props.children}
        </div>
    );
}

export default function AdminTemplate({Component, ...props}) {
    return (
            <Route
                {...props}
                render= {(propsComponents)=> {
                    if(localStorage.getItem("UserAdmin")){
                        return(
                            <AdminLayout>
                                <Component {...propsComponents}/>
                                {/* Kiểm tra xem người dùng nhập đúng ko? bằng cách kiểm tra localStorage */}
                            </AdminLayout>
                        )
                    }

                    return <Redirect to="/"/>
                }}
            />
    )
}
