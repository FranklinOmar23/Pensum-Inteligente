import React, {useContext} from "react";
import {BarraLatealBrand} from "./BarraLatealBrand";
import {NavItem, NavItemCharts, PageCollapseMenu, UtilitiesCollapsMenu} from "./PageCollapseMenu";
import '../../../sb-admin-2.css'
import '../../../sb-admin-2.min.css'
import { UserContext } from "../../../Context/UserContext";

export function BarraLateral(){
    const  {User}  = useContext(UserContext);
    console.log(User)
   
    if (!User.name) {
        // Mostrar un mensaje de carga o contenido alternativo mientras se obtienen los datos del usuario
        return <p>Cargando Usuario...</p>;
      }
    
    

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
                  
                  

                      <div className="sidebar-brand-text mx-3">
                      <h6>{User.name} </h6>

                          
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
//coño
export default BarraLateral;