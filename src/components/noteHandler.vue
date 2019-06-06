<template>
    <div class="noteHandler"
        v-if="note !== null">
        <p>Fehler: {{errMsg}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "noteHandler",
    data() {
        return {
            note: null
        }
    },
    computed:{
        ...mapGetters([
            'action'
        ]),
        errMsg() {
            if('errMsg' in this.note) return this.note.errMsg
            return null
        }
    },
    watch:{
        action: function(action) {
            if(action.section === 'error') {
                this.note = action.params
                let that = this
                setTimeout(()=>{ that.note = null }, 10000);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .noteHandler{
        width: 100%;
        padding: 25px;
        border-bottom: 1px solid #f5f5f5;
    }

</style>