<template>
    <form action="" @submit.prevent="submit">
        <div class="flex flex-col justify-around mb-8 sm:flex-row">
            <div class="flex-1 text-center mx-0 mb-8 w-full w-full sm:ml-16 sm:mr-4 sm:mb-0 sm:w-1/2">
                <input type="text" id="name" placeholder="Name" class="w-full p-4 appearance-none border">
            </div>
            <div class="flex-1 text-center mx-0 sm:ml-4 sm:mr-16 sm:w-1/2">
                <input type="text" id="email" placeholder="Email" class="w-full p-4 appearance-none border">
            </div>
        </div>
        <div class="flex text-center mx-0 mb-8 sm:mx-16">
            <textarea class="w-full p-4 appearance-none border resize-none" placeholder="Your message..."></textarea>
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
            console.log('submitted')
        }
    }
}
</script>
