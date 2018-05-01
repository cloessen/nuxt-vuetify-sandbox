<template>
    <!--<v-content>-->
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-media
                            src="https://images.pexels.com/photos/887532/pexels-photo-887532.jpeg"
                            height="300px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">Top western road trips</div>
                            <span class="grey--text">1,000 miles of wonder</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat>Share</v-btn>
                        <v-btn flat color="purple">Explore</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click.native="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-slide-y-transition>
                        <v-card-text v-show="show">
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
        </v-layout>
    <!--</v-content>-->
</template>

<script>
    export default {
        name: 'postsIndex',
        data: () => ({
            show: false
        })
    }
</script>

<style scoped>

</style>