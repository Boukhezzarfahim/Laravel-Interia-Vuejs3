import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import 'admin-lte'; 

import 'jquery';

import 'admin-lte/dist/js/adminlte.min';

import '../css/app.css';
