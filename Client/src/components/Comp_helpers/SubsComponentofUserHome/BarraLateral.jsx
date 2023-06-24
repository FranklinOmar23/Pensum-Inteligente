import React from "react";
import {BarraLatealBrand} from "./BarraLatealBrand";
import {NavItem, NavItemCharts, PageCollapseMenu, UtilitiesCollapsMenu} from "./PageCollapseMenu";
import '../../../sb-admin-2.css'
import '../../../sb-admin-2.min.css'
export function BarraLateral(){
    return(
      <>
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                 <BarraLatealBrand/>


              <hr className="sidebar-divider my-0"/>


                  <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                          <i className="fas fa-fw fa-tachometer-alt"></i>
                          <span>Dashboard</span></a>
                  </li>


                  <hr className="sidebar-divider"/>


                      <div className="sidebar-heading">
                          Interface
                      </div>

                    <PageCollapseMenu/>

                    <UtilitiesCollapsMenu/>

                 <hr className="sidebar-divider"/>


                  <div className="sidebar-heading">
                      Addons
                  </div>
               <NavItem/>
               <NavItemCharts/>

              <hr className="sidebar-divider d-none d-md-block"/>
              <div className="text-center d-none d-md-inline">
                  <button className="rounded-circle border-0" id="sidebarToggle"></button>
              </div>
              <div className="sidebar-card d-none d-lg-flex">
                  <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                  <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features,
                      components, and more!</p>
                  <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to
                      Pro!</a>

              </div>



          </ul>

      </>
    );
}
export default  BarraLateral();