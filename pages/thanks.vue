<template>
    <div>
        <div class="container mx-auto text-center">
            <h1>{{ title }}</h1>
            <p class="text-lg mb-8">Thank you for taking the time to contact me. I will get back as soon as possible.</p>
            <a href="/">Back to home</a>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.title
        }
    },
    data() {
        return {
            title: 'Thanks!'
        }
    }
}
</script>
