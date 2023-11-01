<script  setup lang="ts">
import { useReCaptcha } from "vue-recaptcha-v3";
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const recaptchaInstance = useReCaptcha();

const backendUrl1 = "https://brbrignoli.azurewebsites.net/api/PostContactForm";
const backendUrl = "http://localhost:7071/api/PostContactForm";

const recaptcha = async () => {
  // optional you can await for the reCaptcha load
  await recaptchaInstance?.recaptchaLoaded();

  // get the token, a custom action could be added as argument to the method
  const token = await recaptchaInstance?.executeRecaptcha("contact");

  return token;
};



const submitForm = async () => {
  const token = await recaptcha();

  console.log("submitForm token", token);
  console.log("submitForm name", formData.value.name);

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
    
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
        recaptchaToken: token,
      }),
      
      
    });

    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  } catch (error) {
    console.error("Error submitting form", error);
  }
};
</script>

<template>
  <!-- Section: Design Block -->
  <section class="mb-32 text-center text-gray-800" id="contact">
    <div class="max-w-[700px] mx-auto px-3 lg:px-6">
      <h2
        class="text-3xl font-bold mb-12 text-yellowbeer font-barlow uppercase"
      >
        Commande & Contact
      </h2>
      <p>
        Passez vos commandes ou posez moi une question à l'aide du formulaire
        <br />ou directement via les réseaux sociaux <br />

        <a
          class="pr-2 text-6xl"
          href="https://www.instagram.com/brasseriebrignoli/"
          ><Icon name="uil:instagram" color="GoldenRod"
        /></a>
        <a
          class="pr-2 text-6xl"
          href="https://www.facebook.com/profile.php?id=100091994670742"
          ><Icon name="uil:facebook" color="GoldenRod"
        /></a>
      </p>
      <br />
      <!-- <form
        id="formId"
        action="https://docs.google.com/forms/d/e/1FAIpQLSfZ3_-6S3V7FOHBpwI2AXCRzyNvHjBEA9tJ-qjJtJ0qP8bK-Q/formResponse"
      >-->
      <form
        id="formId"
        @submit.prevent="submitForm"
      >
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            required
            nameold="entry.970021322"
            name="name"
            v-model="formData.name"
            placeholder="Nom"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            nameold="entry.1934065761"
            name="email"
            v-model="formData.email"
            required
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-6">
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            nameold="entry.177502483"
            name="message"
            v-model="formData.message"
            required
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-blueczech text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-greenjeff hover:shadow-lg focus:bg-greenjeff focus:shadow-lg focus:outline-none focus:ring-0 active:bg-greenjeff active:shadow-lg transition duration-150 ease-in-out"
        >
          Envoyer
        </button>
      </form>
    </div>
  </section>
</template>

