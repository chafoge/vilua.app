<script>
    // Global request schema to request and set response variable

    export default {
        name: "resFactory",
        methods:{
            // request and set response
            async reqRes(obj){
                await this.$http(obj.req)
                    .then(res => obj.res = res)
                    .catch(err => this.errHandler(err.response.data))
            },
            // handles error, set error popup
            errHandler(err) {
                if(process.env.NODE_ENV === 'development') {
                    // eslint-disable-next-line
                    console.log(err)
                }
                this.$store.commit('action', {section: 'error', params: err})
            },
        }
    }
</script>
