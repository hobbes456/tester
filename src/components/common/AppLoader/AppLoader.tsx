import React from "react";
import s from "./AppLoader.module.scss";

const AppLoader = () => {
    return (
        <div id={s.app_loading}>
            <div className={s.loading_dots}>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export default AppLoader;
