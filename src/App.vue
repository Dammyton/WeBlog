<template>
  <div id="app">
    <!-- Navbar -->
    <div>
      <b-navbar toggleable="sm" type="dark" variant="success" fixed="top">
        <b-navbar-brand href="/" class="ml-auto mr-auto">WeBlog</b-navbar-brand>
      </b-navbar>
    </div>
    <!-- End Navbar -->

    <router-view />


    <!--Footer Navbar -->
    <div>
      <b-navbar toggleable="sm" type="dark" variant="success" >
        <a href="" class="ml-auto mr-auto footer p-1 mb-0">Copyright <i class="fas fa-copyright"></i> 2020. Desisgned by Dammyton</a>
      </b-navbar>
    </div>
    <!-- End Footer Navbar -->
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
}
.navbar-dark .navbar-brand {
  color: #fff;
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.footer{
  color: #fff;
}
a.footer:hover{
  color:#ccc;
  text-decoration: none;
}
</style>
