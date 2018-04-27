<template>
    <form name="contact" ref="contact" method="post" netlify @submit.prevent="submit">
        <input type="hidden" name="form-name" value="contact" />

        <div class="flex flex-col justify-around mb-8 sm:flex-row">
            <div class="flex-1 text-center mx-0 mb-8 w-full w-full sm:ml-16 sm:mr-4 sm:mb-0 sm:w-1/2">
                <input type="text" name="name" placeholder="Name" class="w-full p-4 appearance-none border" v-model="form.name" v-validate="'required'">
                <div v-show="errors.has('name')" class="text-red mt-3">{{ errors.first('name') }}</div>
            </div>
            <div class="flex-1 text-center mx-0 sm:ml-4 sm:mr-16 sm:w-1/2">
                <input type="text" name="email" placeholder="Email" class="w-full p-4 appearance-none border"  v-model="form.email" v-validate="'required|email'">
                <div v-show="errors.has('email')" class="text-red mt-3">{{ errors.first('email') }}</div>
            </div>
        </div>
        <div class="flex-1 text-center mx-0 mb-8 sm:mx-16">
            <textarea name="message" class="w-full p-4 appearance-none border resize-none" placeholder="Your message..." v-model="form.message" v-validate="'required'"></textarea>
            <div v-show="errors.has('message')" class="text-red mt-3">{{ errors.first('message') }}</div>
        </div>
        <div class="text-center">
            <input type="submit" class="bg-grey-darker hover:bg-blue-dark text-white font-bold py-4 px-8 rounded cursor-pointer" value="Send Message">
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        submit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$refs.contact.submit()

                    return
                }
            })
        }
    }
}
</script>
