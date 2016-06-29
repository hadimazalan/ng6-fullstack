import angular from 'angular';
import headerBar from './header-bar/header-bar';
import navDrawer from './nav-drawer/nav-drawer';
import navProfile from './nav-profile/nav-profile';
import navMenu from './nav-menu/nav-menu';

export default angular.module('app.common.components', [
  headerBar.name,
  navDrawer.name,
  navProfile.name,
  navMenu.name,
]);
