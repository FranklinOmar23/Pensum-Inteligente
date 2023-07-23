import React, {useContext} from "react";
import {BarraLatealBrand} from "./BarraLatealBrand";
import {NavItem, NavItemCharts, PageCollapseMenu, UtilitiesCollapsMenu} from "./PageCollapseMenu";
import '../../../sb-admin-2.css'
import '../../../sb-admin-2.min.css'
import { UserContext } from "../../../Context/UserContext";

export function BarraLateral(){
    return(<>
      
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                 <BarraLatealBrand/>


              <hr className="sidebar-divider my-0"/>


                  <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                          <i className="fas fa-fw fa-tachometer-alt"></i>
                          <span> </span></a>
                  </li>


                  <hr className="sidebar-divider"/>


                      <div className="sidebar-heading">
                          Interface
                      </div>

                    <PageCollapseMenu/>

                    <UtilitiesCollapsMenu/>

                 <hr className="sidebar-divider"/>


                  <div className="sidebar-heading">
                      Mas
                  </div>
               <NavItem/>
                {/*<NavItemCharts/>*/}

              <hr className="sidebar-divider d-none d-md-block"/>
              <div className="text-center d-none d-md-inline">
                  <button className="rounded-circle border-0" id="sidebarToggle"></button>
                  <span>Cerrar sesion</span>
              </div>



          </ul>

      </>
    );
}
//coño
export default BarraLateral;