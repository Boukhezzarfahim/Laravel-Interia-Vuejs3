<template>

  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <!-- <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li> -->
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <Menu />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper" style="min-height: 537px;">

      <slot />

    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <Footer />

    <div id="sidebar-overlay"></div>
  </div>

</template>


<script setup>

import Footer from './Partials/Footer.vue';
import Menu from './Partials/Menu.vue';

</script>