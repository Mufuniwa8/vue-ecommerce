<template>
           <div class="big-div">
        <div>
          <h1 class="header-contact">Admin</h1>
        </div>
        <div>
          <table class="table-div">
            <tr class="table-row">
              <th class="tabel-head">product</th>
              <th class="tabel-head">image</th>
              <th class="tabel-head">price</th>
              <th class="tabel-head">Edit</th>
            </tr>
            <tr class="table-row">
              <td>23</td>
              <td><img class="admin-img" src="https://i.postimg.cc/HxGRFRSJ/IMG-1233.jpg" alt=""></td>
              <td>3700</td>
              <td><button onclick="admin"><i class="fa-solid fa-trash-can" style="color: black;"></i>
</button> <button onclick="edit"><i class="fa-solid fa-pen-to-square"></i>
</button></td>
            </tr>
            <tr class="table-row">
            <td>23</td>
            <td><img class="admin-img" src="https://i.postimg.cc/d1mHp1kX/IMG-1234.jpg" alt=""></td>
            <td>4000</td>
            <td><button onclick="admin"><i class="fa-solid fa-trash-can" style="color: black"></i>
</button> <button onclick="edit"><i class="fa-solid fa-pen-to-square"></i>
</button></td> 
            </tr>
          </table>
            </div>
            </div>




</template>

<script>

</script>

<style>

.admin-products {
  border: 2px solid white;
  border-radius: 8px;
  margin: 5px;
  height: 50px;
}
.big-div {
  justify-content: center;
  align-items: center;
  margin-left: 70px;
}
.table-row {
  border: 2px solid white;
  margin-left: 70px;
  color: white;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.table-div {
  justify-content: center;
  align-items: center;
  /* margin-left: 30px; */
  text-align: center;
  gap: 5px;
  /* width: 50px; */
  width: 80%;
  margin: 5px;
}
.table-head {
  gap: 50px;
  width: 50px;
}
.admin-img {
  object-fit: cover;
  width: 50px;
  height: 50px;
}


</style>
