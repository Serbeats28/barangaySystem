<?php

namespace Config;
use App\Controllers\AdminController;
// Create a new instance of our RouteCollection class.
$routes = Services::routes();

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);
//$routes->setAutoRoute(false);
/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.

//Admin Routes
$routes->get('dashboard', 'AdminController::index');
//Function Routes
$routes ->get('countRequest','AdminController::countRequest');
$routes->post('storeDocument','AdminController::storeDocument');
$routes->get('retrieve_requested','AdminController::retrieve_requested');
$routes->get('view_details/(:num)','AdminController::view_details/$1');
$routes->get('pdf/(:num)','AdminController::pdf/$1');
$routes->get('loadPdf/(:num)','AdminController::loadPdf/$1');
$routes->post('sendPdf', 'AdminController::sendPdf');
//User Routes
$routes->get('home_pages','UserController::home_pages');
$routes->post('store','UserController::store');
$routes->post('sign_in','UserController::sign_in');
$routes->get('verify/(:num)','UserController::verify/$1');
$routes->get('documentType','UserController::documentType');
$routes->post('store_request','UserController::store_request');
$routes->get('notification/(:num)','UserController::notification/$1');
$routes->get('view_request/(:num)','UserController::view_request/$1');
/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
