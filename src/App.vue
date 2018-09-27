<template>
  <div id="app">
  <nav class="navbar navbar-light bg-light">
    <ul class="nav">
      <li class="nav-item">
             <router-link to="/" class="nav-link active">Home</router-link> 
      </li>
      <li class="nav-item">
            <router-link to="/about" class="nav-link active">About</router-link>
      </li>
      <li class="nav-item">
            <router-link to="/shop" class="nav-link active">Shop</router-link>
      </li>
    </ul>
   </nav>
    <router-view/>
 </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
