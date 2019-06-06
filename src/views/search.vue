<template>
  <div class="search">
      <div class="searchbar round-box">
          <input class="round-box"
             type="search"
             @keyup.enter="reqSearchStation"
             placeholder="Bahnhof suchen"
             v-model="searchString"/>
          <i v-if="searchString !== null && searchString.length > 0"
            class="material-icons"
            @click="reqSearchStation">
              send
          </i>
      </div>
      <ul>
         <li class="round-box"
            v-for="(station, k) in stations"
            :key="k"
            @click="$router.push({name: 'station', params:{staNum: station.number}})">
             {{station.name}}
         </li>
      </ul>
  </div>
</template>

<script>
import reqFactory from "@/components/reqFactory";

export default {
    name: 'home',
    data() {
        return {
            searchString: null,
            //  deconstrucion objects with request params
            rStations: {
                req: {
                    method: 'get',
                    url: 'stada/v2/stations',
                    params: {
                        limit: 5
                    }
                },
                res: {}
            },
        }
    },
    computed:{
        // listen to async variable and set default value
        stations() {
            if('data' in this.rStations.res) return this.rStations.res.data.result
            return []
        }
    },
    methods:{
        //  set searchstring and request
        reqSearchStation() {
            this.rStations.req.params.searchstring = this.searchString
            this.reqRes(this.rStations)
        }
    },
    mixins: [reqFactory]
}
</script>

<style lang="scss" scoped>
    .searchbar{
        position: relative;
        width: 50%;
        margin: auto;

        input[type=search]{
            width: 100%;
            padding-right: 63px;
            border: 1px solid transparent;
            background: #f5f5f5;
            border-radius: 5px;

            &:hover, &:focus{
                background: transparent;
                border: 1px solid #f5f5f5;
            }
        }

        i{
            cursor: pointer;
            position: absolute;
            margin: 12.5px 16px;
            right: 16px;
            opacity: 0.5;
        }
    }

    li{
        cursor: pointer;
        background: aliceblue;

        &:hover{
            opacity: 0.8;
        }
    }

    @media (max-width: 768px) {
        .searchbar{
            width: 100%;
        }
    }

</style>
