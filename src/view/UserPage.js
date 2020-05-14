import React from "react";
import TabNavigator from "../components/TabNavigator";
import ProxyMode from "../utils/Route";

function UserPage() {
    const proxyMode = ProxyMode();
    return (
        <div>
            <div>UserPage</div>
            <button onClick={() => {
                proxyMode.push('/');
            }}>
                路由跳转demo
            </button>
            <TabNavigator/>
        </div>
    )
}

export default UserPage;
