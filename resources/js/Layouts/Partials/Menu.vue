<template>


    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="index3.html" class="brand-link">
            <img src="~admin-lte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fas fa-users"></i>
                            <p>
                                Etudiant & Niveau 
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">

                           <li class="nav-item">
                                <Link :href="route('niveauscolaire.index')" class="nav-link" :class="{ 'active': $page.component.startsWith('NiveauScolaire/') }">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Niveau Scolaire</p>
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link :href="route('etudiant.index')" class="nav-link" :class="{ 'active': $page.component.startsWith('Etudiant/Index') }">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Tous les etudiants</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link :href="route('etudiant.create')" class="nav-link" :class="{ 'active': $page.component.startsWith('Etudiant/CreateEtu') }">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Nouveau etudiant</p>
                                </Link>
                            </li>


                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>