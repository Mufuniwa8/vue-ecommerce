<template>

<div>
   <div> 
<div class="contact">
            <h1 class="header-contact">Contact us</h1>
         <form
 action="https://formspree.io/f/mbjenrza"
 method="POST"
>
<div class="contact-input">
  <input class="input" v-model="Fname" name="Fname" placeholder="enter first name" required>
 </div>
 <div class="contact-input">
   <input class="input" v-model="Lname" name="Lname" placeholder="enter Last name" required>
 </div>
 <div class="contact-input">
   <input class="input" v-model="email" name="email" placeholder="email@gmail.com" required>
 </div>
 <div class="contact-input">
 <textarea  class="message" v-model="message" placeholder="enter a message" required name="message"></textarea>
 </div>
 <!-- your other form fields go here -->
 <button class="sub-button" type="submit">Submit</button>


</form>

       </div>
    </div>
</div>

</template>

<script>



</script>

<style>

.contact-input {
  gap: 2rem;
  background-color: none;
  padding: 0.5rem;
  border-radius: 8px;
}
.input {
  border-radius: 8px;
  box-shadow: rgba(128, 128, 128, 0.556) 5px 5px;
  border: 0.5rem solid white;
}
.message {
  width: 300px;
  height: 150px;
  box-shadow: rgba(128, 128, 128, 0.556) 5px 5px;
  border-radius: 8px;
  border: 0.5rem solid white;
  /* justify-content: center;
    align-items: center;
    display: inline; */
}
.sub-button {
  border: 2px solid white;
  border-radius: 8px;
  color: white;
  background-color: grey;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(128, 128, 128, 0.556) 5px 5px;
}

</style>
