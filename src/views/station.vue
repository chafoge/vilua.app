<template>
    <div class="station">
        <h2>{{stationName}}</h2>
        <ul>
            <li class="round-box"
                v-for="(facilitie, k) in facilities"
                :key="k">
                <p>
                    <span>{{facilitie.equipmentnumber}}</span>
                    {{$transl(facilitie.type)}} {{facilitie.description}}
                </p>
                <span class="state"
                    :class="{'active': facilitie.state === 'ACTIVE'}">
                    {{$transl(facilitie.state)}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import reqFactory from "@/components/reqFactory";

export default {
    name: "detail",
    data() {
        return {
            rStations: {
                req: {
                    method: 'get',
                    url: 'fasta/v2/stations/' + this.$route.params.staNum,
                },
                res: {}
            }
        }
    },
    computed:{
        // listen to async variable and set default value
        facilities() {
            if('data' in this.rStations.res) return this.rStations.res.data.facilities
            return []
        },
        stationName() {
            if('data' in this.rStations.res) return this.rStations.res.data.name
            return null
        }
    },
    mounted() {
        /*
            Hier würde ich sicherlich ein loading animation einfügen.
         */

        //  get station details
        this.reqRes(this.rStations)
    },
    mixins:[reqFactory]
}
</script>

<style lang="scss" scoped>

    li{
        position: relative;
        background: aliceblue;
        p{
            width: calc(100% - 100px);

            span{
                font-size: 11px;
                opacity: 0.5;
            }
        }

        .state{
            position: absolute;
            right: 16px;
            top: 16px;
            color: red;

            &.active{
                color: green;
            }
        }
    }

    h2{
        width: 100%;
        text-align: center;
    }

</style>