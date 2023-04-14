<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="course.get_image" alt="Placeholder image">
            </figure>
        </div>

        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="is-size-5">{{ course.title }}</p>
                </div>
            </div>

            <div class="content">
                <p>{{ course.short_description }}</p>
                
                <button class="button is-dark">
                    <router-link :to="{name: 'Course', params: {slug: course.slug}}" class="has-text-white">More</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['course']
}
</script>