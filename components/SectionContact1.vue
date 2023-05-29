<template>
   <section class="bg-slate-300 w-full">
      <!-- contact formulaire-->
      <!-- nom, message, email-->
      <div class="bg-slate-600 w-full max-w-lg  mb-6">
        hello1
        <div class=" w-full max-w-lg " data-te-input-wrapper-init>


          <form id="formId"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfZ3_-6S3V7FOHBpwI2AXCRzyNvHjBEA9tJ-qjJtJ0qP8bK-Q/formResponse">

            <br>
            <label for="entry.970021322">Nom</label>
            <br>
            <input type="text" name="entry.970021322" class="w-full md:w-1/2 px-3" />
            <br>

            <br>
            <label for="entry.1934065761">Email</label>
            <br>
            <input type="email" id="entry.1934065761" size="10" required class="w-full md:w-1/2 px-3" name="entry.1934065761">
            <br>
            <label for="entry.177502483">Message</label>
            <br>
            <textarea id="entry.177502483" class="w-full md:w-1/2 px-3" rows="5" cols="33" name="entry.177502483">
  hello
  </textarea>


            <br>
            <button type="submit"  value="Submit"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Envoyé</button>
          </form>
        </div>
      </div>
    </section>
</template>