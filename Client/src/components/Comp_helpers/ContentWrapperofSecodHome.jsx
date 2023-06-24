import React from "react";
import '../../sb-admin-2.css'
import '../../sb-admin-2.min.css'
import {TopbarNavar} from "./SubsComponentofUserHome/TopbarNavar";

export function ContentWrapperofSecodHome(){
    return(
        <>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>
                        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                       placeholder="Search for..."
                                       aria-label="Search" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                            </div>
                        </form>
                        <TopbarNavar/>
                    </nav>
                </div>

            </div>
        </>
    );
}
export default ContentWrapperofSecodHome();